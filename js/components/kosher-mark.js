import { getDepartment } from "../data/departments.js";

const nonFood = new Set(["home", "electronics"].flatMap((id) => getDepartment(id)?.slugs || []));

const marks = [
  { src: "assets/images/kosher/badatz-yerushalayim.png", alt: "כשרות: בהשגחת הבד״ץ העדה החרדית ירושלים" },
  { src: "assets/images/kosher/beit-yosef.png", alt: "כשרות: בד״ץ בית יוסף" },
];

export function kosherMark(product) {
  if (nonFood.has(product.categorySlug)) return "";
  const hash = [...product.id].reduce((sum, char) => sum + char.charCodeAt(0), 0);
  const mark = marks[hash % marks.length];
  return `<img class="kosher-mark" src="${mark.src}" alt="${mark.alt}" width="164" height="83" decoding="async">`;
}
