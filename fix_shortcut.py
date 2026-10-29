"""Re-create desktop .url shortcut with proper Windows-compatible encoding,
then trigger a desktop icon refresh via PowerShell."""
import subprocess, os

URL_FILE = r"C:\Users\41825\Desktop\破茧工作台.url"
ICO_PATH = r"C:\Users\41825\WorkBuddy\2026-08-09-20-36-51\assets\logo.ico"
HTML_PATH = r"C:\Users\41825\WorkBuddy\2026-08-09-20-36-51\index.html"

content = f"""[InternetShortcut]
URL=file:///{HTML_PATH.replace(chr(92), '/')}
IconFile={ICO_PATH}
IconIndex=0
IDList=
HotKey=0
"""

# Write as UTF-8 with BOM (Windows-friendly for .url files with Chinese chars)
with open(URL_FILE, "w", encoding="utf-8-sig", newline="\r\n") as f:
    f.write(content)

print(f"Written: {URL_FILE} ({os.path.getsize(URL_FILE)} bytes)")
print("--- content ---")
print(content)

# Trigger desktop refresh via PowerShell
ps_cmd = (
    '$signature = @"\n'
    'using System;\n'
    'using System.Runtime.InteropServices;\n'
    'public class Win32 {\n'
    '    [DllImport("user32.dll")]\n'
    '    public static extern IntPtr SendMessageTimeout(IntPtr hWnd, uint Msg, IntPtr wParam, IntPtr lParam, uint fuFlags, uint uTimeout, out IntPtr lpdwResult);\n'
    '}\n'
    '"@\n'
    'Add-Type -TypeDefinition $signature\n'
    '$HWND_BROADCAST = [IntPtr]0xffff\n'
    '$WM_SETTINGCHANGE = 0x1a\n'
    '$result = [IntPtr]::Zero\n'
    '[Win32]::SendMessageTimeout($HWND_BROADCAST, $WM_SETTINGCHANGE, [IntPtr]::Zero, "Environment", 2, 5000, [ref]$result) | Out-Null\n'
    'Write-Host "DESKTOP_REFRESH_SENT"\n'
)
try:
    r = subprocess.run(
        ["powershell", "-NoProfile", "-NonInteractive", "-Command", ps_cmd],
        capture_output=True, text=True, timeout=15
    )
    print("PowerShell:", r.stdout.strip(), r.stderr.strip()[:200] if r.stderr else "")
except Exception as e:
    print(f"PowerShell refresh skipped: {e}")
