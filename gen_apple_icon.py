"""Generate apple-touch-icon (180x180 PNG) — nested diamonds geometric mark."""
from PIL import Image, ImageDraw

WHITE = (255, 255, 255)
BLACK = (10, 10, 12)
SIZE = 180


def diamond_points(cx, cy, r):
    return [(cx, cy - r), (cx + r, cy), (cx, cy + r), (cx - r, cy)]


img = Image.new("RGBA", (SIZE, SIZE), WHITE + (255,))
pad = max(1, int(SIZE * 0.03))
mask = Image.new("L", (SIZE, SIZE), 0)
ImageDraw.Draw(mask).ellipse([pad, pad, SIZE - 1 - pad, SIZE - 1 - pad], fill=255)
img.putalpha(mask)

draw = ImageDraw.Draw(img)
cx = cy = (SIZE - 1) / 2
lw = max(1, int(round(SIZE * 0.045)))

# outer diamond (outline)
r1 = SIZE * 0.36
draw.polygon(diamond_points(cx, cy, r1), outline=BLACK + (255,), width=lw)

# inner diamond (outline)
r2 = SIZE * 0.22
draw.polygon(diamond_points(cx, cy, r2), outline=BLACK + (255,), width=lw)

# center solid diamond
r3 = SIZE * 0.07
draw.polygon(diamond_points(cx, cy, r3), fill=BLACK + (255,))

OUT = r"C:\Users\41825\WorkBuddy\2026-08-09-20-36-51\assets\apple-touch-icon.png"
img.save(OUT)
print(f"Saved: {OUT} ({img.size})")
