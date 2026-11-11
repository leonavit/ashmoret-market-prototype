import { categories, getCategory } from "../data/catalog.js";
import { getTheme } from "./theme-options.js";

const tozeretSlugs = ["breadcrumbs", "grains", "rice", "pasta", "tortillas", "oils", "spices"];

export function isSingleSupplier() {
  return getTheme().suppliers === "v2";
}

export function supplierCategories() {
  return isSingleSupplier() ? tozeretSlugs.map(getCategory).filter(Boolean) : categories;
}

export function inSupplierScope(product) {
  return !isSingleSupplier() || tozeretSlugs.includes(product.categorySlug);
}
