export const departments = [
  {
    id: "super",
    name: "סופר אשמורת",
    slugs: ["breadcrumbs", "grains", "rice", "pasta", "tortillas", "cans", "oils", "spices"],
  },
  {
    id: "home",
    name: "חד פעמי וכלי בית",
    slugs: ["disposables", "household", "cleaning"],
  },
  {
    id: "electronics",
    name: "קניון אשמורת",
    slugs: ["appliances", "lighting", "gadgets"],
  },
  {
    id: "offers",
    name: "מבצעים",
    offers: true,
  },
];

export function getDepartment(id) {
  return departments.find((department) => department.id === id) || null;
}

export function departmentOf(slug) {
  return departments.find((department) => department.slugs?.includes(slug)) || null;
}

export function isElectronicsProduct(product) {
  const electronics = departments.find((department) => department.id === "electronics");
  return Boolean(product && electronics?.slugs.includes(product.categorySlug));
}
