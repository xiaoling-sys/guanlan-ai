' Create a proper .lnk shortcut on desktop with custom icon
Set ws = CreateObject("WScript.Shell")
desktopPath = ws.SpecialFolders("Desktop")
lnkPath = desktopPath & "\破茧工作台.lnk"

Set shortcut = ws.CreateShortcut(lnkPath)
shortcut.TargetPath = "C:\Users\41825\WorkBuddy\2026-08-09-20-36-51\index.html"
shortcut.WorkingDirectory = "C:\Users\41825\WorkBuddy\2026-08-09-20-36-51"
shortcut.IconLocation = "C:\Users\41825\WorkBuddy\2026-08-09-20-36-51\assets\logo.ico,0"
shortcut.Description = "破茧工作台 · 跨平台重要时事汇集"
shortcut.Save

WScript.Echo "LNK_CREATED: " & lnkPath
