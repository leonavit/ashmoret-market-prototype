import { products } from "../data/catalog.js";
import { manufacturers } from "../data/manufacturers.js";
import { shelfCard } from "../components/product-card.js";
import { esc } from "../lib/format.js";

function card(manufacturer) {
  const mark = `<span class="grid size-16 place-items-center rounded-full border border-dashed border-line text-xs font-bold text-muted" aria-hidden="true"></span>`;
  return `<a href="#/m/${esc(manufacturer.id)}" class="flex h-full flex-col gap-3 rounded-2xl border border-line p-5 hover:border-blue">
    ${mark}
    <h2 class="text-xl font-extrabold">${esc(manufacturer.name)}</h2>
    <p class="text-sm text-muted">${esc(manufacturer.blurb)}</p>
    ${manufacturer.sample ? `<p class="text-xs font-bold text-pink">אין קטלוג אמיתי</p>` : `<p class="text-sm font-bold text-blue">לקטלוג</p>`}
  </a>`;
}

export function renderMarket() {
  const picked = products.slice(0, 8);
  return `<div class="wrap py-6">
    <section class="grid items-center gap-4 overflow-hidden rounded-2xl border border-line bg-[#ececec] text-ink lg:grid-cols-[1.3fr_0.7fr]" aria-labelledby="market-title">
      <div class="p-8 lg:p-12" data-hero-copy>
        <p class="text-sm font-bold text-muted">אשמורת MARKET</p>
        <h1 id="market-title" class="mt-2 text-4xl font-extrabold leading-tight lg:text-5xl">כמה יצרנים. סל אחד.</h1>
        <p class="mt-3 max-w-xl text-lg text-muted">דף הבית למרקטפלייס. תוצרת הוא הקטלוג האמיתי. שאר הכרטיסים הם דוגמה עד שיגיע קטלוג.</p>
        <a class="btn mt-6" href="#/m/tozeret">מתחילים מתוצרת</a>
      </div>
      <span class="m-8 min-h-64 rounded-2xl bg-white lg:m-12" aria-hidden="true"></span>
    </section>

    <section class="py-12" aria-labelledby="makers-title">
      <h2 id="makers-title" class="mb-5 text-2xl font-extrabold">היצרנים</h2>
      <ul class="grid gap-4 md:grid-cols-3">
        ${manufacturers.map((manufacturer) => `<li>${card(manufacturer)}</li>`).join("")}
      </ul>
    </section>

    <section class="pb-12" aria-labelledby="mix-title">
      <div class="mb-5 flex items-end justify-between gap-4">
        <h2 id="mix-title" class="text-2xl font-extrabold">מהמזווה של תוצרת</h2>
        <a class="text-sm font-bold text-blue" href="#/m/tozeret">לכל המוצרים</a>
      </div>
      <ul class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        ${picked.map((product) => `<li>${shelfCard(product)}</li>`).join("")}
      </ul>
    </section>

    <section class="grid items-center gap-6 overflow-hidden rounded-2xl bg-[#ececec] p-8 lg:grid-cols-2" aria-labelledby="market-box">
      <div>
        <h2 id="market-box" class="text-3xl font-extrabold">אותה שפה, סידור אחר</h2>
        <p class="mt-3 text-muted">הכותרת, החיפוש, הכרטיסים והפוטר זהים לדף תוצרת. כאן הסדר משרת כמה יצרנים.</p>
      </div>
      <span class="min-h-48 rounded-2xl bg-white" aria-hidden="true"></span>
    </section>
  </div>`;
}
