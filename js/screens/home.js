import { getCategory, products } from "../data/catalog.js";
import { getDepartment } from "../data/departments.js";
import { getCommerce } from "../data/commerce.js";
import { carousel } from "../components/carousel.js";
import { catalogGridSection } from "../components/catalog-rail.js";
import { getTheme } from "../components/theme-options.js";
import { promoCarousel, sideCarousel } from "../components/promo-carousel.js";
import { inSupplierScope, isSingleSupplier, supplierCategories } from "../components/suppliers.js";

function supplierCatalog() {
  return supplierCategories().map((category) => catalogGridSection({
    id: `cat-${category.slug}-title`,
    title: category.name,
    href: `#/c/${category.slug}`,
    tabs: [[category.slug, category.name]],
    className: "home-section",
    layout: getTheme().categories === "v2" ? "rail" : "grid",
    showTabs: false,
  })).join("");
}

function departmentCatalogs() {
  if (isSingleSupplier()) return supplierCatalog();
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
      icon: id,
      className: "home-section",
      layout: getTheme().categories === "v2" ? "rail" : "grid",
    });
  }).join("");
}

export function renderHome() {
  const offers = products.filter((product) => inSupplierScope(product) && getCommerce(product.id)?.compareAt).slice(0, 10);

  return `<div class="home-page wrap">
    ${getTheme().hero === "v1" ? `<div class="home-hero">${heroBlock()}</div>` : ""}

    ${departmentCatalogs()}

    <section class="home-section" aria-labelledby="offers-title">
      <div class="catalog-head">
        <h2 id="offers-title" class="text-2xl font-extrabold"><span class="nav-icon is-offers" aria-hidden="true"></span>מוצרים חדשים במבצע</h2>
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
  root.innerHTML = visible ? `<div class="home-page wrap home-hero">${heroBlock()}</div>` : "";
}

function heroBlock() {
  return `<section class="grid gap-4 lg:grid-cols-3 lg:grid-rows-2" aria-label="מבצעי כניסה">
      ${promoCarousel()}
      ${getTheme().hero === "v4" ? sideCarousel() : sideBanners()}
    </section>`;
}

function sideBanners() {
  return `<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:contents">
        <a href="#/c/oils" class="home-block hero-side lg:col-start-3 lg:row-start-1">
          <span class="proto-label" aria-hidden="true">באנר משני 1/2</span>
          <div>
            <p class="text-xs font-bold text-muted">שמנים ורטבים</p>
            <h2 class="mt-1 text-lg font-extrabold leading-tight lg:text-2xl">מוצר או קטגוריה לקידום</h2>
            <span class="hero-cta mt-4">הנעה לפעולה</span>
          </div>
          <span class="hero-side-media" aria-hidden="true"></span>
        </a>
        <a href="#/c/spices" class="home-block hero-side lg:col-start-3 lg:row-start-2">
          <span class="proto-label" aria-hidden="true">באנר משני 2/2</span>
          <div>
            <p class="text-xs font-bold text-muted">תבלינים</p>
            <h2 class="mt-1 text-lg font-extrabold leading-tight lg:text-2xl">מוצר או קטגוריה לקידום</h2>
            <span class="hero-cta mt-4">הנעה לפעולה</span>
          </div>
          <span class="hero-side-media" aria-hidden="true"></span>
        </a>
      </div>`;
}
