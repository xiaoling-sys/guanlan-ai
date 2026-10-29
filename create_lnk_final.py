"""Create .lnk shortcut at the REAL Windows desktop path."""
import ctypes
from ctypes import wintypes
import os, uuid, struct

ole32 = ctypes.windll.ole32
ole32.CoInitialize(None)

CLSID_ShellLink  = uuid.UUID("{00021401-0000-0000-C000-000000000046}")
IID_IShellLinkW  = uuid.UUID("{000214F9-0000-0000-C000-000000000046}")
IID_IPersistFile = uuid.UUID("{0000010b-0000-0000-C000-000000000046}")

class GUID(ctypes.Structure):
    _fields_ = [
        ("Data1", ctypes.c_ulong),
        ("Data2", ctypes.c_ushort),
        ("Data3", ctypes.c_ushort),
        ("Data4", ctypes.c_byte * 8),
    ]

def uuid_to_guid(u):
    g = GUID()
    b = u.bytes_le
    g.Data1 = struct.unpack_from('<I', b, 0)[0]
    g.Data2 = struct.unpack_from('<H', b, 4)[0]
    g.Data3 = struct.unpack_from('<H', b, 6)[0]
    for i in range(8):
        g.Data4[i] = b[8 + i]
    return g

clsid  = uuid_to_guid(CLSID_ShellLink)
iid_sl = uuid_to_guid(IID_IShellLinkW)
iid_pf = uuid_to_guid(IID_IPersistFile)

CoCreateInstance = ole32.CoCreateInstance
CoCreateInstance.argtypes = [
    ctypes.POINTER(GUID), ctypes.c_void_p, ctypes.c_ulong,
    ctypes.POINTER(GUID), ctypes.POINTER(ctypes.c_void_p)
]
CoCreateInstance.restype = ctypes.c_long

pShellLink = ctypes.c_void_p(0)
hr = CoCreateInstance(ctypes.byref(clsid), None, 1, ctypes.byref(iid_sl), ctypes.byref(pShellLink))
if hr != 0:
    print(f"CoCreateInstance FAILED hr=0x{hr & 0xFFFFFFFF:08X}"); exit(1)

vtable = ctypes.cast(
    ctypes.c_void_p.from_address(pShellLink.value),
    ctypes.POINTER(ctypes.c_void_p * 30)
)[0]

# SetPath (idx 20)
SetPath = ctypes.CFUNCTYPE(ctypes.c_long, ctypes.c_void_p, ctypes.c_wchar_p, wintypes.WORD)(vtable[20])
SetPath(pShellLink, r"C:\Users\41825\WorkBuddy\2026-08-09-20-36-51\index.html", 0)

# SetWorkingDirectory (idx 9)
SetWorkDir = ctypes.CFUNCTYPE(ctypes.c_long, ctypes.c_void_p, ctypes.c_wchar_p)(vtable[9])
SetWorkDir(pShellLink, r"C:\Users\41825\WorkBuddy\2026-08-09-20-36-51")

# SetDescription (idx 7)
SetDesc = ctypes.CFUNCTYPE(ctypes.c_long, ctypes.c_void_p, ctypes.c_wchar_p)(vtable[7])
SetDesc(pShellLink, "观澜AI · 跨平台重要时事汇集")

# SetIconLocation (idx 17)
SetIcon = ctypes.CFUNCTYPE(ctypes.c_long, ctypes.c_void_p, ctypes.c_wchar_p, ctypes.c_int)(vtable[17])
SetIcon(pShellLink, r"C:\Users\41825\WorkBuddy\2026-08-09-20-36-51\assets\logo.ico", 0)

# QueryInterface for IPersistFile
QueryInterface = ctypes.CFUNCTYPE(
    ctypes.c_long, ctypes.c_void_p, ctypes.POINTER(GUID), ctypes.POINTER(ctypes.c_void_p)
)(vtable[0])
pPersistFile = ctypes.c_void_p(0)
hr = QueryInterface(pShellLink, ctypes.byref(iid_pf), ctypes.byref(pPersistFile))
if hr != 0:
    print(f"QI FAILED hr=0x{hr & 0xFFFFFFFF:08X}"); exit(1)

pf_vtable = ctypes.cast(
    ctypes.c_void_p.from_address(pPersistFile.value),
    ctypes.POINTER(ctypes.c_void_p * 10)
)[0]

# Save to the REAL desktop: E:\UserData\桌面
lnk_path = r"E:\UserData\桌面\观澜AI.lnk"
PF_Save = ctypes.CFUNCTYPE(ctypes.c_long, ctypes.c_void_p, ctypes.c_wchar_p, wintypes.BOOL)(pf_vtable[6])
hr = PF_Save(pPersistFile, lnk_path, True)

if hr == 0 and os.path.exists(lnk_path):
    print(f"SUCCESS: {lnk_path} ({os.path.getsize(lnk_path)} bytes)")
else:
    print(f"FAILED hr=0x{hr & 0xFFFFFFFF:08X}")

# Cleanup
Release = ctypes.CFUNCTYPE(ctypes.c_ulong, ctypes.c_void_p)
Release(pf_vtable[2])(pPersistFile)
Release(vtable[2])(pShellLink)
ole32.CoUninitialize()

# Remove any shortcuts that still carry the OLD name (破茧工作台), on both desktops
for old_path in [
    r"C:\Users\41825\Desktop\破茧工作台.lnk",
    r"E:\UserData\桌面\破茧工作台.lnk",
    r"C:\Users\41825\Desktop\破茧工作台.url",
    r"E:\UserData\桌面\破茧工作台.url",
]:
    if os.path.exists(old_path):
        os.remove(old_path)
        print(f"Removed old shortcut: {old_path}")
