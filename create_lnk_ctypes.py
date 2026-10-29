"""Create a .lnk shortcut using ctypes + COM (v2 - fixed QueryInterface)."""
import ctypes
from ctypes import wintypes
import os, uuid, struct

ole32 = ctypes.windll.ole32
ole32.CoInitialize(None)

CLSID_ShellLink = uuid.UUID("{00021401-0000-0000-C000-000000000046}")
IID_IShellLinkW  = uuid.UUID("{000214F9-0000-0000-C000-000000000046}")
IID_IPersistFile = uuid.UUID("{0000010b-0000-0000-C000-000000000046}")

# GUID as ctypes struct
class GUID(ctypes.Structure):
    _fields_ = [
        ("Data1", ctypes.c_ulong),
        ("Data2", ctypes.c_ushort),
        ("Data3", ctypes.c_ushort),
        ("Data4", ctypes.c_byte * 8),
    ]

def uuid_to_guid(u):
    """Convert Python uuid.UUID to Windows GUID struct."""
    g = GUID()
    b = u.bytes_le  # 16 bytes in little-endian Windows format
    g.Data1 = struct.unpack_from('<I', b, 0)[0]
    g.Data2 = struct.unpack_from('<H', b, 4)[0]
    g.Data3 = struct.unpack_from('<H', b, 6)[0]
    for i in range(8):
        g.Data4[i] = b[8 + i]
    return g

clsid = uuid_to_guid(CLSID_ShellLink)
iid_sl = uuid_to_guid(IID_IShellLinkW)
iid_pf = uuid_to_guid(IID_IPersistFile)

# CoCreateInstance(CLSID, pUnkOuter, clsctx, IID, ppv)
CoCreateInstance = ole32.CoCreateInstance
CoCreateInstance.argtypes = [
    ctypes.POINTER(GUID), ctypes.c_void_p, ctypes.c_ulong,
    ctypes.POINTER(GUID), ctypes.POINTER(ctypes.c_void_p)
]
CoCreateInstance.restype = ctypes.c_long

pShellLink = ctypes.c_void_p(0)
hr = CoCreateInstance(
    ctypes.byref(clsid), None, 1,  # CLSCTX_INPROC_SERVER
    ctypes.byref(iid_sl), ctypes.byref(pShellLink)
)
print(f"CoCreateInstance hr=0x{hr & 0xFFFFFFFF:08X}")
if hr != 0 or not pShellLink.value:
    print("FAILED"); exit(1)

# Read vtable pointer
vtable = ctypes.cast(
    ctypes.c_void_p.from_address(pShellLink.value),
    ctypes.POINTER(ctypes.c_void_p * 30)
)[0]

# --- IShellLinkW method indices ---
# 3 GetPath, 7 SetDescription, 9 SetWorkingDirectory, 17 SetIconLocation, 20 SetPath

# SetPath (idx 20): HRESULT SetPath(LPCWSTR pszFile, WORD dwFlags)
SetPath = ctypes.CFUNCTYPE(
    ctypes.c_long, ctypes.c_void_p, ctypes.c_wchar_p, wintypes.WORD
)(vtable[20])
hr = SetPath(pShellLink, r"C:\Users\41825\WorkBuddy\2026-08-09-20-36-51\index.html", 0)
print(f"SetPath hr=0x{hr & 0xFFFFFFFF:08X}")

# SetWorkingDirectory (idx 9)
SetWorkDir = ctypes.CFUNCTYPE(
    ctypes.c_long, ctypes.c_void_p, ctypes.c_wchar_p
)(vtable[9])
hr = SetWorkDir(pShellLink, r"C:\Users\41825\WorkBuddy\2026-08-09-20-36-51")
print(f"SetWorkingDirectory hr=0x{hr & 0xFFFFFFFF:08X}")

# SetDescription (idx 7)
SetDesc = ctypes.CFUNCTYPE(
    ctypes.c_long, ctypes.c_void_p, ctypes.c_wchar_p
)(vtable[7])
hr = SetDesc(pShellLink, "破茧工作台 · 跨平台重要时事汇集")
print(f"SetDescription hr=0x{hr & 0xFFFFFFFF:08X}")

# SetIconLocation (idx 17): HRESULT SetIconLocation(LPCWSTR pszIconPath, int iIcon)
SetIcon = ctypes.CFUNCTYPE(
    ctypes.c_long, ctypes.c_void_p, ctypes.c_wchar_p, ctypes.c_int
)(vtable[17])
hr = SetIcon(pShellLink, r"C:\Users\41825\WorkBuddy\2026-08-09-20-36-51\assets\logo.ico", 0)
print(f"SetIconLocation hr=0x{hr & 0xFFFFFFFF:08X}")

# QueryInterface (idx 0): HRESULT QueryInterface(REFIID, void**)
QueryInterface = ctypes.CFUNCTYPE(
    ctypes.c_long, ctypes.c_void_p, ctypes.POINTER(GUID), ctypes.POINTER(ctypes.c_void_p)
)(vtable[0])
pPersistFile = ctypes.c_void_p(0)
hr = QueryInterface(pShellLink, ctypes.byref(iid_pf), ctypes.byref(pPersistFile))
print(f"QueryInterface hr=0x{hr & 0xFFFFFFFF:08X}, pPersistFile={pPersistFile.value}")
if hr != 0 or not pPersistFile.value:
    print("FAILED QI"); exit(1)

# IPersistFile vtable
pf_vtable = ctypes.cast(
    ctypes.c_void_p.from_address(pPersistFile.value),
    ctypes.POINTER(ctypes.c_void_p * 10)
)[0]

# Save (idx 6): HRESULT Save(LPCOLESTR pszFileName, BOOL fRemember)
PF_Save = ctypes.CFUNCTYPE(
    ctypes.c_long, ctypes.c_void_p, ctypes.c_wchar_p, wintypes.BOOL
)(pf_vtable[6])

lnk_path = r"C:\Users\41825\Desktop\破茧工作台.lnk"
hr = PF_Save(pPersistFile, lnk_path, True)
print(f"Save hr=0x{hr & 0xFFFFFFFF:08X}")

if hr == 0 and os.path.exists(lnk_path):
    print(f"SUCCESS: {lnk_path} ({os.path.getsize(lnk_path)} bytes)")
else:
    print(f"FAILED to save .lnk (hr=0x{hr & 0xFFFFFFFF:08X})")

# Cleanup
Release = ctypes.CFUNCTYPE(ctypes.c_ulong, ctypes.c_void_p)
Release(pf_vtable[2])(pPersistFile)
Release(vtable[2])(pShellLink)
ole32.CoUninitialize()
