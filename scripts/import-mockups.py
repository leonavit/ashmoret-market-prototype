#!/usr/bin/env python3
"""Attach Tozeret mockup packshots to catalog products."""

import re
from pathlib import Path

from PIL import Image, ImageChops, ImageOps

ROOT = Path(__file__).resolve().parents[1]
SRC = Path("/Users/x/לקוחות/Ashmoret market/מדיה וחומרים לאתר/חומרי מקור תוצרת/wetransfer_3_2026-11-10_0921/מוקאפים תוצרת")
SUB = "הקטנה של קבצים גדולים/"
PRODUCTS = ROOT / "assets" / "images" / "products"
CATALOG = ROOT / "js" / "data" / "catalog.js"
SIZE = 1600
FILL = 0.82

CATEGORY_NAMES = {"grains": "דגנים וקטניות"}

# (product id, mockup file or name prefix, target file, new category slug or None)
MOCKUPS = [
    # Grains and legumes
    ("p012", "8054c11f", "p-barley-500.jpg", None),
    ("p013", "7c66e4bd", "p-buckwheat-500.jpg", None),
    ("p014", "e131beef", "p-bulgur-fine-500.jpg", None),
    ("p015", "899fac58-e0be-4121-a298-9485d5d7b275 (1)", "p-wheat-500.jpg", None),
    ("p016", "97566aaa", "p-bulgur-coarse-500.jpg", None),
    ("p017", "a2544991", "p-millet.jpg", None),
    ("p018", "קמח תירס", "p-corn-flour.jpg", None),
    ("p019", "7cfd6aa2", "p-quinoa-red.jpg", None),
    ("p020", "פופקורן", "p-popcorn.jpg", None),
    ("p021", "6e80a911", "p-quinoa-white.jpg", None),
    ("p022", "6f341a60", "p-pearl-barley.jpg", None),
    ("p023", "3190d84f", "p-split-peas-500.jpg", None),
    ("p024", "092b7150", "p-chickpeas-500.jpg", None),
    ("p025", "fcbcf8b4", "p-lentils-green-500.jpg", None),
    ("p026", "9e30e8c9", "p-lentils-red-500.jpg", None),
    ("p027", "33ad3165", "p-chickpeas-giant-500.jpg", None),
    ("p028", "d3f0b00c", "p-beans-white-500.jpg", None),
    ("p029", "1d324ade", "p-beans-lima.jpg", None),
    ("p030", "b05b1e82", "p-beans-hamin.jpg", None),
    ("p031", "36ecc745", "p-beans-mung.jpg", None),
    ("p032", "747080c3", "p-beans-red.jpg", None),
    ("p033", "ab7b52b9", "p-lentils-black.jpg", None),
    ("p034", "7c51d27b", "p-beans-black.jpg", None),
    ("p035", "63fa2104", "p-bulgur-fine-1kg.jpg", None),
    ("p036", "cf45b053", "p-bulgur-coarse-1kg.jpg", None),
    ("p037", "60e5a13c", "p-wheat-1kg.jpg", None),
    ("p038", "8ca4c5c7", "p-barley-1kg.jpg", None),
    ("p039", "כוסמת 1 קג", "p-buckwheat-1kg.jpg", None),
    ("p040", "חומוס 1 קג", "p-chickpeas-1kg.jpg", None),
    ("p041", "5ca09dea", "p-chickpeas-giant-900.jpg", None),
    ("p042", "088f8716", "p-split-peas-1kg.jpg", None),
    ("p043", "9aa245e3", "p-lentils-green-1kg.jpg", None),
    ("p044", "bea38aef", "p-beans-white-1kg.jpg", None),
    ("p045", "עדשים אדומות 1 קג", "p-lentils-red-1kg.jpg", None),
    ("p046", "שיבולת שועל דקה", "p-oats-fine.jpg", None),
    ("p047", "240f7c50", "p-oats-quick-750.jpg", None),
    ("p048", "שיבולת שועל עבה", "p-oats-thick.jpg", None),
    ("p049", "408390ef", "p-oats-200.jpg", None),
    # Formerly "more"; moved into Super Ashmoret
    ("p175", "4083180e", "p-coconut-700.jpg", "grains"),
    ("p176", "254607d1", "p-coconut-150.jpg", "grains"),
    ("p177", "זרעי צ'יה", "p-chia.jpg", "grains"),
    ("p178", "c6666134", "p-demerara.jpg", "grains"),
    ("p179", "6012455c", "p-poppy.jpg", "grains"),
    ("p180", "זרעי פישתן", "p-flax.jpg", "grains"),
    ("p181", "a76fff26", "p-sesame-200.jpg", "grains"),
    ("p251", "886879df", "p-sesame-1kg.jpg", None),
    ("p183", SUB + "קורנפלקס 850", "p-cornflakes.jpg", "grains"),
    ("p184", SUB + "7290020505354", "p-cornflakes-gf.jpg", "grains"),
    # Rice
    ("p073", "a3916e50", "p-rice-jasmine.jpg", None),
    ("p075", "אורז מלא", "p-rice-brown.jpg", None),
    ("p077", "32e8efe2", "p-rice-round.jpg", None),
    ("p078", "fc48b2be", "p-barel-persian.jpg", None),
    # Pasta
    ("p083", "d8e3573d", "p-lafarella-penne.jpg", None),
    ("p084", "48af43f3", "p-lafarella-spaghetti.jpg", None),
    ("p085", "d690c233", "p-lafarella-vermicelli.jpg", None),
    ("p087", "ea0d61bc", "p-lafarella-elbows.jpg", None),
    ("p088", "3ff90ff7", "p-lafarella-fusilli.jpg", None),
    ("p101", SUB + "פתיתים בצורת כוכבים", "p-stars.jpg", None),
    ("p102", SUB + "18960_Tozeret_Noodles_Wide_200", "p-noodles-wide-200.jpg", None),
    ("p103", SUB + "18960_Tozeret_Noodles_Thin_200", "p-noodles-thin-200.jpg", None),
    ("p104", SUB + "נודלס אטריות רחבות", "p-noodles-wide-400.jpg", None),
    ("p105", SUB + "נודלס אטריות דקות", "p-noodles-thin-400.jpg", None),
    ("p106", SUB + "7290020505385", "p-gnocchi-gf.jpg", None),
    # Tortillas
    ("p108", "a43bcc29", "p-tortilla-28.jpg", None),
    ("p109", "acc641fb", "p-tortilla-25.jpg", None),
    ("p110", "טורטיה 270", "p-tortilla-gf.jpg", None),
    ("p111", "44fb04af-6846", "p-tortilla-20.jpg", None),
    # Cans
    ("p112", "שימורי שעועית במי מלח", "p-beans-white-can.jpg", None),
    ("p113", "שימורי חומוס", "p-chickpeas-can.jpg", None),
    ("p114", SUB + "תירס גמדי", "p-baby-corn.jpg", None),
    ("p115", "שימורי אפונה", "p-peas-can.jpg", None),
    ("p122", "שימורי שעועית ברוטב", "p-beans-tomato-can.jpg", None),
    ("p123", SUB + "אפונה וגזר", "p-peas-carrots-can.jpg", None),
    ("p128", SUB + "עלי גפן ממולא באורז 1750", "p-vine-large.jpg", None),
    ("p131", SUB + "קורנישונים בחומץ", "p-pickles.jpg", None),
    ("p132", SUB + "קורנישונים קטנים", "p-pickles-small.jpg", None),
    ("p133", SUB + "לבבות דקל שלמים", "p-palm-whole.jpg", None),
    ("p134", SUB + "לבבות דקל פרוסות", "p-palm-sliced.jpg", None),
    ("p135", SUB + "תירס שלישיות", "p-corn-triple.jpg", None),
    # Oils and sauces
    ("p141", SUB + "מיונז לחיץ", "p-mayo-squeeze.jpg", None),
    ("p142", SUB + "18960_Tozeret_Catalogue_Jar_Mockup_Mayonaise", "p-mayo-jar.jpg", None),
    # Spices
    ("p148", SUB + "18960_Tozeret_Catalogue_Mockup_Spice_Coriander", "p-coriander.jpg", None),
    ("p149", SUB + "18960_Tozeret_Catalogue_Mockup_Spice_Citric_Acid", "p-citric-acid.jpg", None),
    ("p152", SUB + "18960_Tozeret_Catalogue_Mockup_Spice_PArsley", "p-parsley.jpg", None),
    ("p153", SUB + "18960_Tozeret_Catalogue_Mockup_Spice_Garlic", "p-garlic.jpg", None),
    ("p155", SUB + "18960_Tozeret_Catalogue_Mockup_Spice_Cinnamon", "p-cinnamon.jpg", None),
    ("p156", SUB + "18960_Tozeret_Catalogue_Mockup_Spice_Oregano", "p-oregano.jpg", None),
    ("p157", SUB + "18960_Tozeret_Catalogue_Mockup_Spice_Thyme", "p-thyme.jpg", None),
    ("p158", SUB + "18960_Tozeret_Catalogue_Mockup_Spice_Basil", "p-basil.jpg", None),
    ("p159", SUB + "18960_Tozeret_Catalogue_Mockup_Spice_Cumin", "p-cumin.jpg", None),
    ("p160", SUB + "18960_Tozeret_Catalogue_Mockup_Spice_Meatballs", "p-spice-meatballs.jpg", None),
    ("p161", SUB + "18960_Tozeret_Catalogue_Mockup_Spice_Mexican_Chilli", "p-chili-mexican.jpg", None),
    ("p162", SUB + "18960_Tozeret_Catalogue_Mockup_Spice_Philadelphia", "p-spice-philadelphia.jpg", None),
    ("p163", SUB + "18960_Tozeret_Catalogue_Mockup_Spice_Tuscany", "p-spice-tuscany.jpg", None),
    ("p164", SUB + "18960_Tozeret_Catalogue_Mockup_Spice_Zaatar", "p-zaatar.jpg", None),
    ("p165", SUB + "18960_Tozeret_Catalogue_Mockup_Spice_Ras_el_Hanut", "p-ras-el-hanout.jpg", None),
    ("p166", SUB + "18960_Tozeret_Catalogue_Mockup_Spice_Curry_Masala", "p-curry-masala.jpg", None),
    ("p167", SUB + "18960_Tozeret_Catalogue_Mockup_Spice_Hawaig", "p-hawaij.jpg", None),
    ("p168", SUB + "18960_Tozeret_Catalogue_Mockup_Spice_On_Fire", "p-spice-grill.jpg", None),
    ("p169", SUB + "18960_Tozeret_Catalogue_Mockup_Spice_Chicken", "p-spice-chicken.jpg", None),
]


def resolve(name):
    folder = SRC / Path(name).parent
    prefix = Path(name).name
    matches = sorted(p for p in folder.iterdir() if p.is_file() and p.name.startswith(prefix))
    if not matches:
        raise SystemExit(f"no mockup for {name}")
    return matches[0]


def packshot(source, target):
    image = ImageOps.exif_transpose(Image.open(source))
    if image.mode in ("RGBA", "LA", "P"):
        image = image.convert("RGBA")
        white = Image.new("RGBA", image.size, "white")
        white.alpha_composite(image)
        image = white
    image = image.convert("RGB")
    corners = [image.getpixel(p) for p in ((2, 2), (image.width - 3, 2), (2, image.height - 3), (image.width - 3, image.height - 3))]
    backdrop = min(min(c) for c in corners)
    if 235 <= backdrop < 255:
        # Flat grey studio backdrop; lift it to the white used by the other packshots.
        image = image.point(lambda v: min(255, round(v * 255 / backdrop)))
    ink = ImageChops.difference(image.convert("L"), Image.new("L", image.size, 255))
    image = image.crop(ink.point(lambda v: 255 if v > 4 else 0).getbbox())
    scale = SIZE * FILL / max(image.size)
    image = image.resize((round(image.width * scale), round(image.height * scale)), Image.LANCZOS)
    canvas = Image.new("RGB", (SIZE, SIZE), "white")
    canvas.paste(image, ((SIZE - image.width) // 2, (SIZE - image.height) // 2))
    canvas.save(target, quality=85, optimize=True, progressive=True)


def set_field(block, key, value):
    return re.sub(rf'"{key}": [^\n]*?(,?)\n', lambda m: f'"{key}": {value}{m.group(1)}\n', block, count=1)


def main():
    text = CATALOG.read_text(encoding="utf-8")
    for pid, source, filename, slug in MOCKUPS:
        packshot(resolve(source), PRODUCTS / filename)
        match = re.search(rf'\{{\n    "id": "{pid}",.*?\n  \}}', text, re.S)
        if not match:
            raise SystemExit(f"{pid} not found in catalog")
        block = match.group(0)
        block = set_field(block, "image", f'"assets/images/products/{filename}"')
        block = set_field(block, "placeholder", "false")
        if slug:
            block = set_field(block, "categorySlug", f'"{slug}"')
            block = set_field(block, "categoryName", f'"{CATEGORY_NAMES[slug]}"')
        text = text[: match.start()] + block + text[match.end():]
        print(pid, filename)
    CATALOG.write_text(text, encoding="utf-8")


if __name__ == "__main__":
    main()
