"""Finalize brand logo: verify ICO sizes, export PNG preview."""
from PIL import Image
import os

ICO = r"C:\Users\41825\WorkBuddy\2026-08-09-20-36-51\assets\logo.ico"
PNG = r"C:\Users\41825\WorkBuddy\2026-08-09-20-36-51\assets\logo_preview.png"

# Verify ICO
im = Image.open(ICO)
sizes = im.ico.sizes()
print(f"ICO file size: {os.path.getsize(ICO)} bytes")
print(f"Embedded sizes: {sizes}")

# Export 256x256 PNG preview
im256 = im.copy()
im256 = im256.resize((256, 256), Image.LANCZOS)
im256.save(PNG)
print(f"PNG preview saved: {os.path.getsize(PNG)} bytes")
