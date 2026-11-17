import { getDepartment } from "../data/departments.js";

const nonFood = new Set(["home", "electronics"].flatMap((id) => getDepartment(id)?.slugs || []));

const mahfud = {
  src: "assets/images/kosher/mahfud.png",
  alt: "כשרות: בהשגחת יורה דעה, בפיקוח הגאון ר׳ שלמה מחפוד שליט״א",
  width: 353,
  height: 222,
};

const marks = [
  { src: "assets/images/kosher/badatz-yerushalayim.png", alt: "כשרות: בהשגחת הבד״ץ העדה החרדית ירושלים", width: 164, height: 83 },
  { src: "assets/images/kosher/beit-yosef.png", alt: "כשרות: בד״ץ בית יוסף", width: 164, height: 83 },
];

export function kosherMark(product) {
  if (nonFood.has(product.categorySlug)) return "";
  const mark = product.manufacturerId === "tozeret"
    ? mahfud
    : marks[[...product.id].reduce((sum, char) => sum + char.charCodeAt(0), 0) % marks.length];
  return `<img class="kosher-mark" src="${mark.src}" alt="${mark.alt}" width="${mark.width}" height="${mark.height}" decoding="async">`;
}
