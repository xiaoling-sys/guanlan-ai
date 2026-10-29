"""Generate the brand logo .ico for 观澜AI.
Pure geometric mark (no text): nested diamonds inside a white circle.
Outer diamond (outline) + inner diamond (outline) + center solid diamond.
Minimal black-on-white circular design.
"""
import os
from PIL import Image, ImageDraw

OUT = r"C:\Users\41825\WorkBuddy\2026-08-09-20-36-51\assets\logo.ico"
WHITE = (255, 255, 255)
BLACK = (10, 10, 12)
SIZES = [16, 24, 32, 48, 64, 128, 256]


def diamond_points(cx, cy, r):
    """Return 4 vertices of a diamond (square rotated 45deg)."""
    return [(cx, cy - r), (cx + r, cy), (cx, cy + r), (cx - r, cy)]


def make_icon(size):
    """White circular bg + black nested diamonds + center solid diamond."""
    img = Image.new("RGBA", (size, size), WHITE + (255,))
    # circular container mask
    pad = max(1, int(size * 0.03))
    mask = Image.new("L", (size, size), 0)
    ImageDraw.Draw(mask).ellipse(
        [pad, pad, size - 1 - pad, size - 1 - pad], fill=255
    )
    img.putalpha(mask)

    draw = ImageDraw.Draw(img)
    cx = cy = (size - 1) / 2
    lw = max(1, int(round(size * 0.045)))

    # outer diamond (outline only)
    r1 = size * 0.36
    draw.polygon(diamond_points(cx, cy, r1), outline=BLACK + (255,), width=lw)

    # inner diamond (outline only)
    r2 = size * 0.22
    draw.polygon(diamond_points(cx, cy, r2), outline=BLACK + (255,), width=lw)

    # center solid diamond
    r3 = size * 0.07
    draw.polygon(diamond_points(cx, cy, r3), fill=BLACK + (255,))

    return img


# Build from the largest frame; Pillow auto-downscales for each size.
src = make_icon(256)
src.save(OUT, format="ICO", sizes=[(s, s) for s in SIZES])
print(f"saved {OUT} ({os.path.getsize(OUT)} bytes)")

# Verify
with Image.open(OUT) as chk:
    print("embedded sizes:", chk.ico.sizes())
