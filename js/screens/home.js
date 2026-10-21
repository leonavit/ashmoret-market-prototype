import { getCategory, products } from "../data/catalog.js";
import { getDepartment } from "../data/departments.js";
import { getCommerce } from "../data/commerce.js";
import { carousel } from "../components/carousel.js";
import { catalogGridSection } from "../components/catalog-rail.js";
import { getTheme } from "../components/theme-options.js";
import { promoCarousel } from "../components/promo-carousel.js";

function departmentCatalogs() {
  return ["super", "home", "electronics"].map((id, index) => {
    const department = getDepartment(id);
    const tabs = department.slugs
      .map((slug) => {
        const category = getCategory(slug);
        return category ? [slug, category.name] : null;
      })
      .filter(Boolean);
    return catalogGridSection({
      id: `dept-${id}-title`,
      title: department.name,
      href: `#/d/${id}`,
      tabs,
      className: index === 0 ? "py-12" : "pb-12",
    });
  }).join("");
}

export function renderHome() {
  const offers = products.filter((product) => getCommerce(product.id)?.compareAt).slice(0, 10);

  return `<div class="home-page wrap py-6">
    ${getTheme().hero === "v1" ? heroBlock() : ""}

    ${departmentCatalogs()}

    <section class="pb-12" aria-labelledby="offers-title">
      <div class="catalog-head">
        <h2 id="offers-title" class="text-2xl font-extrabold"><span class="cat-heart" aria-hidden="true"></span>מוצרים חדשים במבצע</h2>
        <a class="deal-all" href="#/d/offers">לכל המבצעים
          <svg viewBox="0 0 24 24" class="size-4" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M15 6l-6 6 6 6"></path></svg>
        </a>
      </div>
      ${carousel(offers, "מוצרים חדשים במבצע")}
    </section>

  </div>`;
}

export function setHeroTop(visible) {
  const root = document.getElementById("hero-top");
  const title = document.getElementById("category-band-title");
  if (title) title.hidden = !visible;
  if (!root) return;
  root.hidden = !visible;
  root.innerHTML = visible ? `<div class="home-page wrap pt-6">${heroBlock()}</div>` : "";
}

function heroBlock() {
  return `<section class="grid gap-4 lg:grid-cols-3 lg:grid-rows-2" aria-label="מבצעי כניסה">
      ${promoCarousel()}
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:contents">
        <a href="#/c/oils" class="home-block hero-side bg-white lg:col-start-3 lg:row-start-1">
          <div>
            <p class="text-xs font-bold text-pink">שמנים ורטבים</p>
            <h2 class="mt-1 text-lg font-extrabold leading-tight lg:text-2xl">מוצר או קטגוריה לקידום</h2>
            <span class="hero-cta mt-4">הנעה לפעולה</span>
          </div>
          <span class="hero-side-media" aria-hidden="true"></span>
        </a>
        <a href="#/c/spices" class="home-block hero-side bg-[#f0f0f0] lg:col-start-3 lg:row-start-2">
          <div>
            <p class="text-xs font-bold text-pink">תבלינים</p>
            <h2 class="mt-1 text-lg font-extrabold leading-tight lg:text-2xl">מוצר או קטגוריה לקידום</h2>
            <span class="hero-cta mt-4">הנעה לפעולה</span>
          </div>
          <span class="hero-side-media" aria-hidden="true"></span>
        </a>
      </div>
    </section>`;
}
