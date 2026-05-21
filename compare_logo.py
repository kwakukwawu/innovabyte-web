from PIL import Image, ImageChops
import cairosvg
import re

# Read index.html and extract hero SVG
with open('index.html','r', encoding='utf-8') as f:
    html = f.read()

m = re.search(r"<svg[^>]*class=\"logo-svg hero-logo\"[\s\S]*?</svg>", html)
if not m:
    print('hero SVG not found')
    raise SystemExit(1)
svg = m.group(0)

# Normalize SVG root to include explicit width/height viewBox for consistent rendering
# We'll render to the size of the logo bbox found earlier: 749x491
width, height = 749, 491
svg_out = svg
# Ensure svg has xmlns and viewBox; if not, leave as-is
if 'viewBox' not in svg_out:
    svg_out = svg_out.replace('<svg', f'<svg viewBox="0 0 {width} {height}"', 1)

with open('hero_extracted.svg','w', encoding='utf-8') as f:
    f.write(svg_out)

# Render SVG to PNG at target dimensions
cairosvg.svg2png(bytestring=svg_out.encode('utf-8'), write_to='hero_render.png', output_width=width, output_height=height)

# Open original logo and crop bbox (from earlier analysis)
orig = Image.open('logo.png').convert('RGBA')
# bbox found: x:394..1142, y:340..830
bbox = (394, 340, 1142, 830)
orig_crop = orig.crop(bbox).resize((width, height), Image.LANCZOS)
orig_crop.save('orig_crop.png')

render = Image.open('hero_render.png').convert('RGBA')

# Composite render on navy background to mimic original backdrop
bg = Image.new('RGBA', (width, height), (2,12,27,255))
comp = Image.alpha_composite(bg, render)
comp.save('render_on_bg.png')

# Compute absolute difference
diff = ImageChops.difference(orig_crop, comp)
diff_gray = diff.convert('L')
# compute metrics
hist = diff_gray.histogram()
# mean absolute error
num_pixels = width * height
sum_pixels = sum(i * hist[i] for i in range(256))
mae = sum_pixels / num_pixels / 255.0
# percent identical
identical = hist[0]
pct_identical = identical / num_pixels * 100.0

diff.save('logo_diff.png')
print(f'Rendered size: {render.size}, Orig crop: {orig_crop.size}')
print(f'Pixels identical: {identical}/{num_pixels} ({pct_identical:.2f}%)')
print(f'Mean normalized abs diff (0-1): {mae:.4f}')
print('Saved: hero_extracted.svg, hero_render.png, orig_crop.png, render_on_bg.png, logo_diff.png')
