export const manufacturers = [
  {
    id: "tozeret",
    name: "תוצרת",
    sample: false,
    logo: "assets/images/brand/tozeret.png",
    blurb: "מזווה יבש למטבח: פירורי לחם, דגנים, אורז, פסטה, שימורים, שמנים ותבלינים.",
    banner: "assets/images/banners/kitchen.jpg",
    bannerAlt: "מוצרי תוצרת ערוכים על שיש במטבח",
    bannerTitle: "המזווה של תוצרת",
    bannerText: "הקטלוג המלא, לפי הקטגוריות של היצרן.",
  },
  {
    id: "sample-a",
    name: "יצרן לדוגמה",
    sample: true,
    logo: null,
    blurb: "כרטיס לדוגמה בלבד. אין קטלוג אמיתי ליצרן זה.",
    banner: null,
    bannerAlt: "",
    bannerTitle: "תוכן לדוגמה",
    bannerText: "זו אותה תבנית עמוד. מוצרים יופיעו כאן כשיהיה קטלוג.",
  },
  {
    id: "sample-b",
    name: "יצרן לדוגמה ב׳",
    sample: true,
    logo: null,
    blurb: "כרטיס לדוגמה בלבד. אין קטלוג אמיתי ליצרן זה.",
    banner: null,
    bannerAlt: "",
    bannerTitle: "תוכן לדוגמה",
    bannerText: "החלפת הרשומה מספיקה. אין עמוד נפרד ליצרן.",
  },
];

export function getManufacturer(id) {
  return manufacturers.find((item) => item.id === id) || null;
}
