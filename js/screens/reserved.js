const copy = {
  login: {
    title: "התחברות",
    text: "מסך ההתחברות, ההרשמה ואימות OTP עדיין לא עוצבו. אין כאן שיטת זיהוי, טופס או קוד.",
  },
  account: {
    title: "החשבון שלי",
    text: "אזור החשבון ממתין להחלטת חווית משתמש נפרדת. אפשר להמשיך לקנות בלי חשבון.",
  },
  orders: {
    title: "ההזמנות שלי",
    text: "היסטוריית הזמנות תחכה לאותה החלטה. אישור הזמנה מההדגמה נשאר במסך האישור בלבד.",
  },
};

export function renderReserved(page) {
  const item = copy[page] || copy.login;
  return `<article class="wrap max-w-2xl py-16">
    <p class="text-sm font-bold text-pink">החלטה פתוחה</p>
    <h1 class="mt-2 text-3xl font-extrabold">${item.title}</h1>
    <p class="mt-3 text-lg text-muted">${item.text}</p>
    <a class="btn mt-8" href="#/">חזרה לדף הבית</a>
  </article>`;
}
