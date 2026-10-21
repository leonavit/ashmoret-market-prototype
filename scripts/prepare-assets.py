#!/usr/bin/env python3
"""Copy catalog facts and reviewed images. Writes commerce.js only if it is missing."""

import csv
import json
import shutil
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
CSV_SRC = Path("/Users/x/Downloads/ashmoret-mockup/catalog-products.csv")
IMG_SRC = Path("/Users/x/לקוחות/Ashmoret market/WhatsApp Unknown 2026-10-11 at 14.04.11")
BRAND_SRC = Path("/Users/x/CURSOR  PROJECTS/ashmoret-market/assets")

DATA = ROOT / "assets" / "data"
PRODUCTS = ROOT / "assets" / "images" / "products"
BANNERS = ROOT / "assets" / "images" / "banners"
BRAND = ROOT / "assets" / "images" / "brand"
JS_DATA = ROOT / "js" / "data"

# Reviewed packshots. Predicates use catalog name and weight text, never the barcode.
IMAGES = [
    ("p-basmati.jpg", "14.41.39 (1).jpeg", lambda n, w: n == "אורז בסמטי" and w.startswith("1")),
    ("p-persian.jpg", "14.41.39 (2).jpeg", lambda n, w: n == "אורז פרסי" and w.startswith("1")),
    ("p-vermicelli.jpg", "14.41.39 (3).jpeg", lambda n, w: "ורמיצ" in n and "Vittale" in n and w.startswith("400")),
    ("p-corn.jpg", "14.41.39 (4).jpeg", lambda n, w: n.startswith("גרעיני תירס מתוק") and w.startswith("340")),
    ("p-honey.jpg", "14.41.39 (5).jpeg", lambda n, w: n.startswith("דבש טהור") and w.startswith("400")),
    ("p-mustard-seeds.jpg", "14.41.39 (7).jpeg", lambda n, w: "גרגירים" in n and w.startswith("350")),
    ("p-mustard.jpg", "14.41.39 (8).jpeg", lambda n, w: n == "חרדל דיז'ון צרפתי" and w.startswith("350")),
    ("p-silan.jpg", "14.41.39 (11).jpeg", lambda n, w: n.startswith("סילאן") and w.startswith("385")),
    ("p-vine.jpg", "14.41.39 (12).jpeg", lambda n, w: n.startswith("עלי גפן") and w.startswith("400")),
    ("p-mushroom-sliced.jpg", "14.41.39 (13).jpeg", lambda n, w: "חתוכות" in n and "פטריות" in n and w.startswith("400")),
    ("p-mushroom-whole.jpg", "14.41.39 (14).jpeg", lambda n, w: "שלמות" in n and "פטריות" in n and w.startswith("400")),
    ("p-crumbs-seasoned.jpg", "14.41.39 (15).jpeg", lambda n, w: n == "פירורי לחם מתובלים קלאסי" and w.startswith("500")),
    ("p-crumbs-white.jpg", "14.41.39 (16).jpeg", lambda n, w: n == "פירורי לחם לבנים" and w.startswith("200")),
    ("p-crumbs-gold.jpg", "14.41.39 (17).jpeg", lambda n, w: n == "פירורי לחם מוזהבים" and w.startswith("800")),
    ("p-spaghetti.jpg", "14.41.39 (18).jpeg", lambda n, w: "ספגטי" in n and "Vittale" in n and w.startswith("400")),
    ("p-fusilli.jpg", "14.41.39 (19).jpeg", lambda n, w: "פוזילי" in n and "Vittale" in n and w.startswith("400")),
    ("p-penne.jpg", "14.41.39 (20).jpeg", lambda n, w: n.startswith("פסטה פנה") and "Vittale" in n and w.startswith("400")),
    ("p-shells.jpg", "14.41.39 (21).jpeg", lambda n, w: "קרניים" in n and "Vittale" in n and w.startswith("400")),
    ("p-risoni.jpg", "14.41.39 (22).jpeg", lambda n, w: "פתיתים בצורת אורז" in n and "Vittale" in n and w.startswith("400")),
    ("p-couscous.jpg", "14.41.39 (23).jpeg", lambda n, w: n.startswith("קוסקוס בינוני") and w.startswith("350")),
    ("p-olive.jpg", "14.41.39 (25).jpeg", lambda n, w: n.startswith("שמן זית") and "750" in w),
    ("p-turmeric.jpg", "14.41.39 (26).jpeg", lambda n, w: n.startswith("כורכום") and w.startswith("100")),
    ("p-pepper-crushed.jpg", "14.41.39 (27).jpeg", lambda n, w: "גרוס" in n and "פלפל" in n and w.startswith("80")),
    ("p-pepper-ground.jpg", "14.41.39 (28).jpeg", lambda n, w: n.startswith("פלפל שחור טחון") and w.startswith("80")),
    ("p-paprika-hot.jpg", "14.41.39 (29).jpeg", lambda n, w: n.startswith("פפריקה חריפה") and w.startswith("100")),
    ("p-paprika-oil.jpg", "14.41.39 (30).jpeg", lambda n, w: "פפריקה מתוקה עם שמן" in n and w.startswith("100")),
    ("p-paprika.jpg", "14.41.39 (31).jpeg", lambda n, w: n == "פפריקה מתוקה" and w.startswith("100")),
]

CATEGORIES = [
    ("breadcrumbs", "פירורי לחם", "p-crumbs-gold.jpg"),
    ("grains", "דגנים וקטניות", "p-couscous.jpg"),
    ("rice", "אורז", "p-basmati.jpg"),
    ("pasta", "פסטות ופתיתים", "p-fusilli.jpg"),
    ("tortillas", "טורטיות", None),
    ("cans", "שימורים", "p-corn.jpg"),
    ("oils", "שמנים ורטבים", "p-olive.jpg"),
    ("spices", "תבלינים", "p-turmeric.jpg"),
    ("more", "מוצרים נוספים", "p-honey.jpg"),
]


def src_image(suffix):
    for name in IMG_SRC.iterdir():
        if name.name.endswith(suffix):
            return name
    raise SystemExit(f"missing image *{suffix}")


def brand_of(name):
    if "Vittale" in name:
        return "Vittale"
    if "Lafarella" in name:
        return "Lafarella"
    if "בראל" in name:
        return "בראל"
    return "תוצרת"


def js_string(value):
    return json.dumps(value, ensure_ascii=False)


def shelf_price(category, weight, index):
    """Prototype shelf price. Written out as a literal. Not based on the barcode."""
    text = weight.replace(" ", "")
    number = ""
    for ch in text:
        if ch.isdigit() or ch == ".":
            number += ch
        elif number:
            break
    amount = float(number) if number else 1
    if "ק" in weight and "ג" in weight and "גרם" not in weight:
        grams = amount * 1000
    elif "ליטר" in weight:
        grams = amount * 1000
    else:
        grams = amount
    if category == "שמנים ורטבים" and ("שמן זית" in weight or grams >= 700 and "מ" in weight):
        base = 34.9 if grams < 2000 else 79.9
    elif category == "תבלינים":
        base = 8.9 if grams <= 150 else 18.9
    elif grams >= 10000:
        base = 89.9
    elif grams >= 4000:
        base = 42.9
    elif grams >= 1500:
        base = 24.9
    elif grams >= 900:
        base = 14.9
    elif grams >= 400:
        base = 9.9
    else:
        base = 7.9
    nudge = [0, 0.5, 1.0, 1.5][index % 4]
    return round(base + nudge, 2)


# Explicit offer prices. Keys are catalog name + weight, not barcodes.
OFFERS = {
    ("פירורי לחם מוזהבים", "800 גרם"): (12.9, 16.9),
    ("אורז בסמטי", "1 ק״ג"): (11.9, 14.9),
    ("דבש טהור", "400 גרם"): (22.9, 27.9),
    ("סילאן", "385 גרם"): (14.9, 18.9),
    ("שמן זית כתית מעולה", "750 מ״ל"): (32.9, 39.9),
    ("פסטה פוזילי Vittale", "400 גרם"): (5.9, 7.9),
    ("גרעיני תירס מתוק", "340 גרם"): (6.9, 8.9),
    ("כורכום טחון", "100 גרם"): (7.9, 9.9),
    ("פפריקה מתוקה", "100 גרם"): (7.9, 9.9),
    ("קוסקוס בינוני", "350 גרם"): (6.9, 8.9),
}


def main():
    for folder in (DATA, PRODUCTS, BANNERS, BRAND, JS_DATA):
        folder.mkdir(parents=True, exist_ok=True)

    shutil.copyfile(CSV_SRC, DATA / "catalog.csv")
    shutil.copyfile(BRAND_SRC / "favicon.png", BRAND / "favicon.png")
    shutil.copyfile(BRAND_SRC / "logo-supplier.png", BRAND / "tozeret.png")

    logo = Image.open(src_image("14.40.16.jpeg")).convert("RGBA")
    # Crop away the promotional sticker and keep the heart plus wordmark.
    logo.crop((70, 155, 730, 660)).save(BRAND / "logo.png")

    kitchen = src_image("14.41.39.jpeg")
    shutil.copyfile(kitchen, BANNERS / "kitchen.jpg")
    box = src_image("14.40.16 (1).jpeg")
    shutil.copyfile(box, BANNERS / "box.jpg")

    copied = {}
    for filename, suffix, _predicate in IMAGES:
        source = src_image(suffix)
        target = PRODUCTS / filename
        shutil.copyfile(source, target)
        copied[filename] = True

    with CSV_SRC.open(encoding="utf-8-sig", newline="") as handle:
        rows = list(csv.reader(handle))
    header, body = rows[0], rows[1:]

    cat_slug = {name: slug for slug, name, _image in CATEGORIES}
    products = []
    used_images = set()
    for index, row in enumerate(body, start=1):
        category, name, weight, units, barcode, page = [cell.strip() for cell in row]
        image = None
        for filename, _suffix, predicate in IMAGES:
            if predicate(name, weight):
                image = f"assets/images/products/{filename}"
                used_images.add(filename)
                break
        products.append({
            "id": f"p{index:03d}",
            "manufacturerId": "tozeret",
            "name": name,
            "categoryName": category,
            "categorySlug": cat_slug[category],
            "weight": weight,
            "unitsPerPack": int(units),
            "barcode": barcode,
            "catalogPage": int(page),
            "brand": brand_of(name),
            "image": image,
            "placeholder": image is None,
        })

    missing = [filename for filename, _s, _p in IMAGES if filename not in used_images]
    if missing:
        raise SystemExit("unmatched photos: " + ", ".join(missing))

    categories = []
    for slug, name, image in CATEGORIES:
        categories.append({
            "slug": slug,
            "name": name,
            "image": f"assets/images/products/{image}" if image else None,
            "placeholder": image is None,
        })

    catalog_js = """// Catalog facts copied from assets/data/catalog.csv.
// Prices, offers, and delivery are simulated and live in commerce.js.

export const categories = %s;

export const products = %s;

export function getProduct(id) {
  return products.find((product) => product.id === id) || null;
}

export function getCategory(slug) {
  return categories.find((category) => category.slug === slug) || null;
}

export function productsByCategory(slug) {
  return products.filter((product) => product.categorySlug === slug);
}

export function searchProducts(query) {
  const text = query.trim();
  if (!text) return [];
  return products.filter((product) =>
    product.name.includes(text) ||
    product.brand.includes(text) ||
    product.categoryName.includes(text)
  );
}
""" % (json.dumps(categories, ensure_ascii=False, indent=2), json.dumps(products, ensure_ascii=False, indent=2))
    (JS_DATA / "catalog.js").write_text(catalog_js, encoding="utf-8")

    commerce_path = JS_DATA / "commerce.js"
    if not commerce_path.exists():
        lines = [
            "// Simulated commercial data for the prototype.",
            "// These prices are not from the Tozeret catalog. Edit them here.",
            "// Do not derive prices from barcodes or other identifiers.",
            "",
            "export const deliveryFee = 29;",
            "",
            "export const prices = {",
        ]
        for index, product in enumerate(products):
            key = (product["name"], product["weight"])
            if key in OFFERS:
                price, compare = OFFERS[key]
            else:
                price, compare = shelf_price(product["categoryName"], product["weight"], index), None
            compare_js = "null" if compare is None else f"{compare:.2f}"
            lines.append(f'  "{product["id"]}": {{ "price": {price:.2f}, "compareAt": {compare_js} }},')
        lines.append("};")
        lines.append("")
        lines.append("export function getCommerce(id) {")
        lines.append("  return prices[id] || null;")
        lines.append("}")
        lines.append("")
        commerce_path.write_text("\n".join(lines), encoding="utf-8")

    print(f"products {len(products)}")
    print(f"with photos {sum(1 for product in products if product['image'])}")
    print(f"header {header}")


if __name__ == "__main__":
    main()
