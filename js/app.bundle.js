(() => {
  // js/screens/legal.js
  var pages = {
    terms: {
      title: "\u05EA\u05E0\u05D0\u05D9 \u05E9\u05D9\u05DE\u05D5\u05E9",
      lead: "\u05E2\u05DE\u05D5\u05D3 \u05EA\u05D5\u05DB\u05DF \u05DC\u05D4\u05D3\u05D2\u05DE\u05D4. \u05D0\u05D9\u05E0\u05D5 \u05DE\u05E1\u05DE\u05DA \u05DE\u05E9\u05E4\u05D8\u05D9 \u05DE\u05D7\u05D9\u05D9\u05D1.",
      body: [
        "\u05D4\u05E9\u05D9\u05DE\u05D5\u05E9 \u05D1\u05D0\u05EA\u05E8 \u05D0\u05E9\u05DE\u05D5\u05E8\u05EA MARKET \u05D4\u05D5\u05D0 \u05DC\u05D4\u05D3\u05D2\u05DE\u05EA \u05D7\u05D5\u05D5\u05D9\u05D9\u05EA \u05E7\u05E0\u05D9\u05D9\u05D4 \u05D1\u05DC\u05D1\u05D3.",
        "\u05D4\u05DE\u05D7\u05D9\u05E8\u05D9\u05DD, \u05D4\u05DE\u05D5\u05E6\u05E8\u05D9\u05DD \u05D5\u05D4\u05E9\u05D9\u05E8\u05D5\u05EA\u05D9\u05DD \u05D4\u05DE\u05D5\u05E6\u05D2\u05D9\u05DD \u05DB\u05D0\u05DF \u05D0\u05D9\u05E0\u05DD \u05D4\u05D6\u05DE\u05E0\u05D4 \u05D0\u05DE\u05D9\u05EA\u05D9\u05EA \u05D5\u05D0\u05D9\u05E0\u05DD \u05DE\u05D7\u05D9\u05D9\u05D1\u05D9\u05DD \u05D0\u05EA \u05D4\u05D0\u05EA\u05E8 \u05D0\u05D5 \u05D0\u05EA \u05D4\u05DE\u05E9\u05EA\u05DE\u05E9.",
        "\u05D4\u05DE\u05E9\u05DA \u05D2\u05DC\u05D9\u05E9\u05D4 \u05D1\u05D0\u05EA\u05E8 \u05DE\u05D4\u05D5\u05D5\u05D4 \u05D4\u05E1\u05DB\u05DE\u05D4 \u05DC\u05E9\u05D9\u05DE\u05D5\u05E9 \u05D1\u05D4\u05D3\u05D2\u05DE\u05D4 \u05D6\u05D5 \u05DC\u05E6\u05D5\u05E8\u05DA \u05D1\u05D7\u05D9\u05E0\u05D4 \u05D5\u05E4\u05D9\u05EA\u05D5\u05D7."
      ]
    },
    privacy: {
      title: "\u05DE\u05D3\u05D9\u05E0\u05D9\u05D5\u05EA \u05E4\u05E8\u05D8\u05D9\u05D5\u05EA",
      lead: "\u05E2\u05DE\u05D5\u05D3 \u05EA\u05D5\u05DB\u05DF \u05DC\u05D4\u05D3\u05D2\u05DE\u05D4. \u05D0\u05D9\u05E0\u05D5 \u05DE\u05D3\u05D9\u05E0\u05D9\u05D5\u05EA \u05E4\u05E8\u05D8\u05D9\u05D5\u05EA \u05DE\u05D7\u05D9\u05D9\u05D1\u05EA.",
      body: [
        "\u05D1\u05D4\u05D3\u05D2\u05DE\u05D4 \u05E0\u05E9\u05DE\u05E8\u05D9\u05DD \u05E4\u05E8\u05D8\u05D9\u05DD \u05DE\u05E7\u05D5\u05DE\u05D9\u05D9\u05DD \u05D1\u05D3\u05E4\u05D3\u05E4\u05DF \u05D1\u05DC\u05D1\u05D3, \u05DB\u05DE\u05D5 \u05E1\u05DC \u05E7\u05E0\u05D9\u05D5\u05EA \u05D5\u05E4\u05E8\u05D8\u05D9 \u05D4\u05EA\u05D7\u05D1\u05E8\u05D5\u05EA \u05DC\u05D3\u05D5\u05D2\u05DE\u05D4.",
        "\u05DC\u05D0 \u05E0\u05D0\u05E1\u05E3 \u05DE\u05D9\u05D3\u05E2 \u05DC\u05E9\u05E8\u05EA \u05D7\u05D9\u05E6\u05D5\u05E0\u05D9, \u05D5\u05DC\u05D0 \u05E0\u05E9\u05DC\u05D7\u05D9\u05DD \u05DE\u05D9\u05D9\u05DC\u05D9\u05DD \u05D0\u05D5 \u05D4\u05D5\u05D3\u05E2\u05D5\u05EA SMS \u05D0\u05DE\u05D9\u05EA\u05D9\u05D9\u05DD.",
        "\u05D1\u05D2\u05E8\u05E1\u05D4 \u05E4\u05E2\u05D9\u05DC\u05D4 \u05EA\u05E4\u05D5\u05E8\u05E1\u05DD \u05DE\u05D3\u05D9\u05E0\u05D9\u05D5\u05EA \u05E4\u05E8\u05D8\u05D9\u05D5\u05EA \u05DE\u05DC\u05D0\u05D4 \u05D1\u05D4\u05EA\u05D0\u05DD \u05DC\u05D3\u05E8\u05D9\u05E9\u05D5\u05EA \u05D4\u05D3\u05D9\u05DF."
      ]
    },
    accessibility: {
      title: "\u05D4\u05E6\u05D4\u05E8\u05EA \u05E0\u05D2\u05D9\u05E9\u05D5\u05EA",
      lead: "\u05E2\u05DE\u05D5\u05D3 \u05EA\u05D5\u05DB\u05DF \u05DC\u05D4\u05D3\u05D2\u05DE\u05D4. \u05D0\u05D9\u05E0\u05D5 \u05D4\u05E6\u05D4\u05E8\u05EA \u05E0\u05D2\u05D9\u05E9\u05D5\u05EA \u05DE\u05D7\u05D9\u05D9\u05D1\u05EA.",
      body: [
        "\u05D4\u05D0\u05EA\u05E8 \u05E0\u05D1\u05E0\u05D4 \u05DB\u05D4\u05D3\u05D2\u05DE\u05D4 \u05E2\u05DD \u05D3\u05D2\u05E9 \u05E2\u05DC \u05E0\u05D9\u05D5\u05D5\u05D8 \u05DE\u05E7\u05DC\u05D3\u05EA, \u05EA\u05D5\u05D5\u05D9\u05D5\u05EA \u05D1\u05E8\u05D5\u05E8\u05D5\u05EA \u05D5\u05EA\u05DE\u05D9\u05DB\u05D4 \u05D1\u05DB\u05D9\u05D5\u05D5\u05DF RTL.",
        "\u05D7\u05DC\u05E7 \u05DE\u05D4\u05E8\u05DB\u05D9\u05D1\u05D9\u05DD \u05E2\u05D3\u05D9\u05D9\u05DF \u05D1\u05E4\u05D9\u05EA\u05D5\u05D7, \u05D5\u05DC\u05DB\u05DF \u05E8\u05DE\u05EA \u05D4\u05E0\u05D2\u05D9\u05E9\u05D5\u05EA \u05E2\u05E9\u05D5\u05D9\u05D4 \u05DC\u05D4\u05E9\u05EA\u05E0\u05D5\u05EA \u05D1\u05D9\u05DF \u05DE\u05E1\u05DB\u05D9\u05DD.",
        "\u05D1\u05D2\u05E8\u05E1\u05D4 \u05E4\u05E2\u05D9\u05DC\u05D4 \u05EA\u05E4\u05D5\u05E8\u05E1\u05DD \u05D4\u05E6\u05D4\u05E8\u05EA \u05E0\u05D2\u05D9\u05E9\u05D5\u05EA \u05DE\u05DC\u05D0\u05D4 \u05D1\u05E6\u05D9\u05E8\u05D5\u05E3 \u05D3\u05E8\u05DB\u05D9 \u05E4\u05E0\u05D9\u05D9\u05D4 \u05DC\u05EA\u05D9\u05E7\u05D5\u05DF \u05DC\u05D9\u05E7\u05D5\u05D9\u05D9\u05DD."
      ]
    },
    "rules-offers": {
      title: "\u05EA\u05E7\u05E0\u05D5\u05DF \u05DE\u05D1\u05E6\u05E2\u05D9\u05DD",
      lead: "\u05E2\u05DE\u05D5\u05D3 \u05EA\u05D5\u05DB\u05DF \u05DC\u05D4\u05D3\u05D2\u05DE\u05D4. \u05D0\u05D9\u05E0\u05D5 \u05EA\u05E7\u05E0\u05D5\u05DF \u05DE\u05D7\u05D9\u05D9\u05D1.",
      body: [
        "\u05D4\u05DE\u05D1\u05E6\u05E2\u05D9\u05DD \u05D4\u05DE\u05D5\u05E6\u05D2\u05D9\u05DD \u05D1\u05D0\u05EA\u05E8 \u05D4\u05DD \u05DC\u05D4\u05D3\u05D2\u05DE\u05D4 \u05D1\u05DC\u05D1\u05D3, \u05D5\u05D4\u05DE\u05D7\u05D9\u05E8\u05D9\u05DD \u05D1\u05D4\u05DD \u05D0\u05D9\u05E0\u05DD \u05DE\u05D7\u05D9\u05D9\u05D1\u05D9\u05DD.",
        "\u05D1\u05D2\u05E8\u05E1\u05D4 \u05E4\u05E2\u05D9\u05DC\u05D4 \u05D9\u05E4\u05D5\u05E8\u05D8\u05D5 \u05DB\u05D0\u05DF \u05EA\u05E0\u05D0\u05D9 \u05D4\u05D4\u05E9\u05EA\u05EA\u05E4\u05D5\u05EA, \u05EA\u05E7\u05D5\u05E4\u05EA \u05DB\u05DC \u05DE\u05D1\u05E6\u05E2 \u05D5\u05D4\u05DE\u05D5\u05E6\u05E8\u05D9\u05DD \u05D4\u05DB\u05DC\u05D5\u05DC\u05D9\u05DD \u05D1\u05D5."
      ]
    },
    "rules-club": {
      title: "\u05EA\u05E7\u05E0\u05D5\u05DF \u05DE\u05D5\u05E2\u05D3\u05D5\u05DF \u05DC\u05E7\u05D5\u05D7\u05D5\u05EA",
      lead: "\u05E2\u05DE\u05D5\u05D3 \u05EA\u05D5\u05DB\u05DF \u05DC\u05D4\u05D3\u05D2\u05DE\u05D4. \u05D0\u05D9\u05E0\u05D5 \u05EA\u05E7\u05E0\u05D5\u05DF \u05DE\u05D7\u05D9\u05D9\u05D1.",
      body: [
        "\u05D4\u05D4\u05E8\u05E9\u05DE\u05D4 \u05D1\u05D4\u05D3\u05D2\u05DE\u05D4 \u05E0\u05E9\u05DE\u05E8\u05EA \u05D1\u05D3\u05E4\u05D3\u05E4\u05DF \u05D1\u05DC\u05D1\u05D3, \u05D5\u05D0\u05D9\u05E0\u05D4 \u05DE\u05E6\u05D8\u05E8\u05E4\u05EA \u05DC\u05DE\u05D5\u05E2\u05D3\u05D5\u05DF \u05DC\u05E7\u05D5\u05D7\u05D5\u05EA \u05D0\u05DE\u05D9\u05EA\u05D9.",
        "\u05D1\u05D2\u05E8\u05E1\u05D4 \u05E4\u05E2\u05D9\u05DC\u05D4 \u05D9\u05E4\u05D5\u05E8\u05D8\u05D5 \u05DB\u05D0\u05DF \u05EA\u05E0\u05D0\u05D9 \u05D4\u05D7\u05D1\u05E8\u05D5\u05EA, \u05D4\u05D4\u05D8\u05D1\u05D5\u05EA \u05DC\u05D7\u05D1\u05E8\u05D9 \u05D4\u05DE\u05D5\u05E2\u05D3\u05D5\u05DF \u05D5\u05D3\u05E8\u05DB\u05D9 \u05D4\u05D4\u05E6\u05D8\u05E8\u05E4\u05D5\u05EA \u05D5\u05D4\u05D1\u05D9\u05D8\u05D5\u05DC."
      ]
    },
    "rules-social": {
      title: "\u05EA\u05E7\u05E0\u05D5\u05DF \u05E4\u05E2\u05D9\u05DC\u05D5\u05EA \u05E8\u05E9\u05EA\u05D5\u05EA \u05D7\u05D1\u05E8\u05EA\u05D9\u05D5\u05EA",
      lead: "\u05E2\u05DE\u05D5\u05D3 \u05EA\u05D5\u05DB\u05DF \u05DC\u05D4\u05D3\u05D2\u05DE\u05D4. \u05D0\u05D9\u05E0\u05D5 \u05EA\u05E7\u05E0\u05D5\u05DF \u05DE\u05D7\u05D9\u05D9\u05D1.",
      body: [
        "\u05D1\u05D4\u05D3\u05D2\u05DE\u05D4 \u05D0\u05D9\u05DF \u05E4\u05E2\u05D9\u05DC\u05D5\u05EA \u05D0\u05DE\u05D9\u05EA\u05D9\u05EA \u05D1\u05E8\u05E9\u05EA\u05D5\u05EA \u05D4\u05D7\u05D1\u05E8\u05EA\u05D9\u05D5\u05EA.",
        "\u05D1\u05D2\u05E8\u05E1\u05D4 \u05E4\u05E2\u05D9\u05DC\u05D4 \u05D9\u05E4\u05D5\u05E8\u05D8\u05D5 \u05DB\u05D0\u05DF \u05EA\u05E0\u05D0\u05D9 \u05D4\u05D4\u05E9\u05EA\u05EA\u05E4\u05D5\u05EA \u05D1\u05E4\u05E2\u05D9\u05DC\u05D5\u05D9\u05D5\u05EA, \u05D0\u05D5\u05E4\u05DF \u05D1\u05D7\u05D9\u05E8\u05EA \u05D4\u05D6\u05D5\u05DB\u05D9\u05DD \u05D5\u05DE\u05D9\u05DE\u05D5\u05E9 \u05D4\u05E4\u05E8\u05E1\u05D9\u05DD."
      ]
    },
    "rules-purchase": {
      title: "\u05EA\u05E7\u05E0\u05D5\u05DF \u05E8\u05DB\u05D9\u05E9\u05D4 \u05D1\u05D0\u05EA\u05E8",
      lead: "\u05E2\u05DE\u05D5\u05D3 \u05EA\u05D5\u05DB\u05DF \u05DC\u05D4\u05D3\u05D2\u05DE\u05D4. \u05D0\u05D9\u05E0\u05D5 \u05EA\u05E7\u05E0\u05D5\u05DF \u05DE\u05D7\u05D9\u05D9\u05D1.",
      body: [
        "\u05D4\u05E8\u05DB\u05D9\u05E9\u05D4 \u05D1\u05D0\u05EA\u05E8 \u05D4\u05D9\u05D0 \u05D4\u05D3\u05D2\u05DE\u05D4 \u05D1\u05DC\u05D1\u05D3. \u05DC\u05D0 \u05DE\u05EA\u05D1\u05E6\u05E2 \u05EA\u05E9\u05DC\u05D5\u05DD, \u05D5\u05DC\u05D0 \u05E0\u05E9\u05DC\u05D7\u05EA \u05D4\u05D6\u05DE\u05E0\u05D4 \u05D0\u05DE\u05D9\u05EA\u05D9\u05EA.",
        "\u05D1\u05D2\u05E8\u05E1\u05D4 \u05E4\u05E2\u05D9\u05DC\u05D4 \u05D9\u05E4\u05D5\u05E8\u05D8\u05D5 \u05DB\u05D0\u05DF \u05EA\u05E0\u05D0\u05D9 \u05D4\u05D4\u05D6\u05DE\u05E0\u05D4, \u05D4\u05EA\u05E9\u05DC\u05D5\u05DD, \u05D4\u05DE\u05E9\u05DC\u05D5\u05D7, \u05D4\u05D4\u05D7\u05D6\u05E8\u05D5\u05EA \u05D5\u05D1\u05D9\u05D8\u05D5\u05DC \u05D4\u05E2\u05E1\u05E7\u05D4."
      ]
    }
  };
  var legalSlugs = Object.keys(pages);
  function renderLegal(slug) {
    const page2 = pages[slug] || pages.terms;
    return `<article class="wrap max-w-2xl py-12">
    <h1 class="text-3xl font-extrabold">${page2.title}</h1>
    <p class="mt-2 text-muted">${page2.lead}</p>
    <div class="mt-6 grid gap-4 text-base leading-7">
      ${page2.body.map((paragraph) => `<p>${paragraph}</p>`).join("")}
    </div>
    <a class="btn mt-8" href="#/">\u05D7\u05D6\u05E8\u05D4 \u05DC\u05D3\u05E3 \u05D4\u05D1\u05D9\u05EA</a>
  </article>`;
  }
  function legalTitle(slug) {
    return pages[slug]?.title || pages.terms.title;
  }

  // js/router.js
  function parseHash() {
    const hash = location.hash.replace(/^#/, "") || "/";
    const qIndex = hash.indexOf("?");
    const path = qIndex === -1 ? hash : hash.slice(0, qIndex);
    const params = new URLSearchParams(qIndex === -1 ? "" : hash.slice(qIndex + 1));
    const query = Object.fromEntries(params.entries());
    const parts = path.split("/").filter(Boolean);
    if (!parts.length) return { name: "home", query };
    if (parts[0] === "market") return { name: "market", query };
    if (parts[0] === "cart") return { name: "cart", query };
    if (parts[0] === "checkout") return { name: "checkout", query };
    if (parts[0] === "search") return { name: "search", query };
    if (parts[0] === "c" && parts[1]) return { name: "category", slug: decodeURIComponent(parts[1]), query };
    if (parts[0] === "d" && parts[1]) return { name: "department", id: decodeURIComponent(parts[1]), query };
    if (parts[0] === "m" && parts[1]) return { name: "manufacturer", slug: decodeURIComponent(parts[1]), query };
    if (parts[0] === "p" && parts[1]) return { name: "product", id: decodeURIComponent(parts[1]), query };
    if (parts[0] === "order" && parts[1]) return { name: "order", id: decodeURIComponent(parts[1]), query };
    if (parts[0] === "login") return { name: "login", query };
    if (parts[0] === "contact") return { name: "contact", query };
    if (parts[0] === "delivery") return { name: "delivery", query };
    if (parts[0] === "service") return { name: "service", query };
    if (legalSlugs.includes(parts[0])) return { name: "legal", slug: parts[0], query };
    if (parts[0] === "account" && parts[1] === "details") return { name: "account-details", query };
    if (parts[0] === "account") return { name: "account", query };
    if (parts[0] === "orders" && parts[1]) return { name: "account-order", id: decodeURIComponent(parts[1]), query };
    if (parts[0] === "orders") return { name: "orders", query };
    return { name: "home", query };
  }
  var privateNames = /* @__PURE__ */ new Set(["account", "account-details", "orders", "account-order"]);
  function isPrivateRoute(name) {
    return privateNames.has(name);
  }
  function safeNext(value) {
    if (!value || /[?#]/.test(value)) return "";
    const path = value.startsWith("/") ? value : `/${value}`;
    if (/^\/account(\/details)?$/.test(path)) return `#${path}`;
    if (/^\/orders(\/[A-Za-z0-9-]+)?$/.test(path)) return `#${path}`;
    return "";
  }
  function pathFor(route) {
    if (route.name === "home") return "/";
    if (route.name === "category") return `/c/${encodeURIComponent(route.slug)}`;
    if (route.name === "department") return `/d/${encodeURIComponent(route.id)}`;
    if (route.name === "manufacturer") return `/m/${encodeURIComponent(route.slug)}`;
    if (route.name === "product") return `/p/${encodeURIComponent(route.id)}`;
    if (route.name === "order") return `/order/${encodeURIComponent(route.id)}`;
    if (route.name === "account-order") return `/orders/${encodeURIComponent(route.id)}`;
    if (route.name === "account-details") return "/account/details";
    if (route.name === "legal") return `/${route.slug || "terms"}`;
    if (route.name === "reserved") return `/${route.page}`;
    if (route.name === "market") return "/market";
    return `/${route.name}`;
  }

  // js/data/catalog.js
  var categories = [
    {
      "slug": "breadcrumbs",
      "name": "\u05E4\u05D9\u05E8\u05D5\u05E8\u05D9 \u05DC\u05D7\u05DD",
      "image": null,
      "placeholder": true
    },
    {
      "slug": "grains",
      "name": "\u05D3\u05D2\u05E0\u05D9\u05DD \u05D5\u05E7\u05D8\u05E0\u05D9\u05D5\u05EA",
      "image": "assets/images/products/p-couscous.jpg",
      "placeholder": false
    },
    {
      "slug": "rice",
      "name": "\u05D0\u05D5\u05E8\u05D6",
      "image": "assets/images/products/p-basmati.jpg",
      "placeholder": false
    },
    {
      "slug": "pasta",
      "name": "\u05E4\u05E1\u05D8\u05D5\u05EA \u05D5\u05E4\u05EA\u05D9\u05EA\u05D9\u05DD",
      "image": "assets/images/products/p-fusilli.jpg",
      "placeholder": false
    },
    {
      "slug": "tortillas",
      "name": "\u05D8\u05D5\u05E8\u05D8\u05D9\u05D5\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "slug": "cans",
      "name": "\u05E9\u05D9\u05DE\u05D5\u05E8\u05D9\u05DD",
      "image": "assets/images/products/p-corn.jpg",
      "placeholder": false
    },
    {
      "slug": "oils",
      "name": "\u05E9\u05DE\u05E0\u05D9\u05DD \u05D5\u05E8\u05D8\u05D1\u05D9\u05DD",
      "image": "assets/images/products/p-olive.jpg",
      "placeholder": false
    },
    {
      "slug": "spices",
      "name": "\u05EA\u05D1\u05DC\u05D9\u05E0\u05D9\u05DD",
      "image": "assets/images/products/p-turmeric.jpg",
      "placeholder": false
    },
    {
      "slug": "more",
      "name": "\u05DE\u05D5\u05E6\u05E8\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD",
      "image": "assets/images/products/p-honey.jpg",
      "placeholder": false
    },
    {
      "slug": "disposables",
      "name": "\u05D7\u05D3 \u05E4\u05E2\u05DE\u05D9",
      "image": null,
      "placeholder": true
    },
    {
      "slug": "household",
      "name": "\u05DB\u05DC\u05D9 \u05D1\u05D9\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "slug": "cleaning",
      "name": "\u05E0\u05D9\u05E7\u05D9\u05D5\u05DF",
      "image": null,
      "placeholder": true
    },
    {
      "slug": "appliances",
      "name": "\u05DE\u05DB\u05E9\u05D9\u05E8\u05D9 \u05D7\u05E9\u05DE\u05DC",
      "image": null,
      "placeholder": true
    },
    {
      "slug": "lighting",
      "name": "\u05EA\u05D0\u05D5\u05E8\u05D4",
      "image": null,
      "placeholder": true
    },
    {
      "slug": "gadgets",
      "name": "\u05D0\u05DC\u05E7\u05D8\u05E8\u05D5\u05E0\u05D9\u05E7\u05D4",
      "image": null,
      "placeholder": true
    }
  ];
  var products = [
    {
      "id": "p001",
      "manufacturerId": "tozeret",
      "name": "\u05E4\u05D9\u05E8\u05D5\u05E8\u05D9 \u05DC\u05D7\u05DD \u05DE\u05EA\u05D5\u05D1\u05DC\u05D9\u05DD \u05E7\u05DC\u05D0\u05E1\u05D9",
      "categoryName": "\u05E4\u05D9\u05E8\u05D5\u05E8\u05D9 \u05DC\u05D7\u05DD",
      "categorySlug": "breadcrumbs",
      "weight": "500 \u05D2\u05E8\u05DD",
      "unitsPerPack": 30,
      "barcode": "7290002862482",
      "catalogPage": 3,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": "assets/images/products/p-crumbs-seasoned.jpg",
      "placeholder": false
    },
    {
      "id": "p002",
      "manufacturerId": "tozeret",
      "name": "\u05E4\u05D9\u05E8\u05D5\u05E8\u05D9 \u05DC\u05D7\u05DD \u05DC\u05D1\u05E0\u05D9\u05DD",
      "categoryName": "\u05E4\u05D9\u05E8\u05D5\u05E8\u05D9 \u05DC\u05D7\u05DD",
      "categorySlug": "breadcrumbs",
      "weight": "200 \u05D2\u05E8\u05DD",
      "unitsPerPack": 24,
      "barcode": "7290002862413",
      "catalogPage": 3,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": "assets/images/products/p-crumbs-white.jpg",
      "placeholder": false
    },
    {
      "id": "p003",
      "manufacturerId": "tozeret",
      "name": "\u05E4\u05D9\u05E8\u05D5\u05E8\u05D9 \u05DC\u05D7\u05DD \u05DE\u05D5\u05D6\u05D4\u05D1\u05D9\u05DD",
      "categoryName": "\u05E4\u05D9\u05E8\u05D5\u05E8\u05D9 \u05DC\u05D7\u05DD",
      "categorySlug": "breadcrumbs",
      "weight": "200 \u05D2\u05E8\u05DD",
      "unitsPerPack": 24,
      "barcode": "7290002862253",
      "catalogPage": 3,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": "assets/images/products/p-crumbs-gold.jpg",
      "placeholder": true
    },
    {
      "id": "p004",
      "manufacturerId": "tozeret",
      "name": "\u05E4\u05D9\u05E8\u05D5\u05E8\u05D9 \u05DC\u05D7\u05DD \u05DE\u05EA\u05D5\u05D1\u05DC\u05D9\u05DD \u05E9\u05D5\u05DD",
      "categoryName": "\u05E4\u05D9\u05E8\u05D5\u05E8\u05D9 \u05DC\u05D7\u05DD",
      "categorySlug": "breadcrumbs",
      "weight": "500 \u05D2\u05E8\u05DD",
      "unitsPerPack": 30,
      "barcode": "7290017406398",
      "catalogPage": 3,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": "assets/images/products/p-crumbs-seasoned.jpg",
      "placeholder": true
    },
    {
      "id": "p005",
      "manufacturerId": "tozeret",
      "name": "\u05E4\u05D9\u05E8\u05D5\u05E8\u05D9 \u05DC\u05D7\u05DD \u05DE\u05EA\u05D5\u05D1\u05DC\u05D9\u05DD \u05D2\u05E8\u05D9\u05DC",
      "categoryName": "\u05E4\u05D9\u05E8\u05D5\u05E8\u05D9 \u05DC\u05D7\u05DD",
      "categorySlug": "breadcrumbs",
      "weight": "500 \u05D2\u05E8\u05DD",
      "unitsPerPack": 30,
      "barcode": "7290017406381",
      "catalogPage": 3,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": "assets/images/products/p-crumbs-seasoned.jpg",
      "placeholder": true
    },
    {
      "id": "p006",
      "manufacturerId": "tozeret",
      "name": "\u05E4\u05D9\u05E8\u05D5\u05E8\u05D9 \u05DC\u05D7\u05DD \u05DC\u05D1\u05E0\u05D9\u05DD",
      "categoryName": "\u05E4\u05D9\u05E8\u05D5\u05E8\u05D9 \u05DC\u05D7\u05DD",
      "categorySlug": "breadcrumbs",
      "weight": "1 \u05E7\u05F4\u05D2",
      "unitsPerPack": 15,
      "barcode": "7290002862222",
      "catalogPage": 3,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": "assets/images/products/p-crumbs-white.jpg",
      "placeholder": true
    },
    {
      "id": "p007",
      "manufacturerId": "tozeret",
      "name": "\u05E4\u05D9\u05E8\u05D5\u05E8\u05D9 \u05DC\u05D7\u05DD \u05DC\u05D1\u05E0\u05D9\u05DD",
      "categoryName": "\u05E4\u05D9\u05E8\u05D5\u05E8\u05D9 \u05DC\u05D7\u05DD",
      "categorySlug": "breadcrumbs",
      "weight": "10 \u05E7\u05F4\u05D2",
      "unitsPerPack": 1,
      "barcode": "7290002862734",
      "catalogPage": 3,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": "assets/images/products/p-crumbs-white.jpg",
      "placeholder": true
    },
    {
      "id": "p008",
      "manufacturerId": "tozeret",
      "name": "\u05E4\u05D9\u05E8\u05D5\u05E8\u05D9 \u05DC\u05D7\u05DD \u05DE\u05D5\u05D6\u05D4\u05D1\u05D9\u05DD",
      "categoryName": "\u05E4\u05D9\u05E8\u05D5\u05E8\u05D9 \u05DC\u05D7\u05DD",
      "categorySlug": "breadcrumbs",
      "weight": "10 \u05E7\u05F4\u05D2",
      "unitsPerPack": 1,
      "barcode": "7290002862741",
      "catalogPage": 3,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": "assets/images/products/p-crumbs-gold.jpg",
      "placeholder": true
    },
    {
      "id": "p009",
      "manufacturerId": "tozeret",
      "name": "\u05E4\u05D9\u05E8\u05D5\u05E8\u05D9 \u05DC\u05D7\u05DD \u05DE\u05D5\u05D6\u05D4\u05D1\u05D9\u05DD",
      "categoryName": "\u05E4\u05D9\u05E8\u05D5\u05E8\u05D9 \u05DC\u05D7\u05DD",
      "categorySlug": "breadcrumbs",
      "weight": "1 \u05E7\u05F4\u05D2",
      "unitsPerPack": 15,
      "barcode": "7290017406831",
      "catalogPage": 3,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": "assets/images/products/p-crumbs-gold.jpg",
      "placeholder": true
    },
    {
      "id": "p010",
      "manufacturerId": "tozeret",
      "name": "\u05E4\u05D9\u05E8\u05D5\u05E8\u05D9 \u05DC\u05D7\u05DD \u05DE\u05D5\u05D6\u05D4\u05D1\u05D9\u05DD",
      "categoryName": "\u05E4\u05D9\u05E8\u05D5\u05E8\u05D9 \u05DC\u05D7\u05DD",
      "categorySlug": "breadcrumbs",
      "weight": "800 \u05D2\u05E8\u05DD",
      "unitsPerPack": 18,
      "barcode": "7290018546260",
      "catalogPage": 3,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": "assets/images/products/p-crumbs-gold.jpg",
      "placeholder": false
    },
    {
      "id": "p011",
      "manufacturerId": "tozeret",
      "name": "\u05E4\u05D9\u05E8\u05D5\u05E8\u05D9 \u05DC\u05D7\u05DD \u05DE\u05D5\u05D6\u05D4\u05D1\u05D9\u05DD - \u05E2\u05D3\u05F4\u05D7",
      "categoryName": "\u05E4\u05D9\u05E8\u05D5\u05E8\u05D9 \u05DC\u05D7\u05DD",
      "categorySlug": "breadcrumbs",
      "weight": "1 \u05E7\u05F4\u05D2",
      "unitsPerPack": 15,
      "barcode": "7290017406831",
      "catalogPage": 3,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": "assets/images/products/p-crumbs-gold.jpg",
      "placeholder": true
    },
    {
      "id": "p012",
      "manufacturerId": "tozeret",
      "name": "\u05D2\u05E8\u05D9\u05E1\u05D9\u05DD",
      "categoryName": "\u05D3\u05D2\u05E0\u05D9\u05DD \u05D5\u05E7\u05D8\u05E0\u05D9\u05D5\u05EA",
      "categorySlug": "grains",
      "weight": "500 \u05D2\u05E8\u05DD",
      "unitsPerPack": 12,
      "barcode": "7290003470525",
      "catalogPage": 5,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p013",
      "manufacturerId": "tozeret",
      "name": "\u05DB\u05D5\u05E1\u05DE\u05EA",
      "categoryName": "\u05D3\u05D2\u05E0\u05D9\u05DD \u05D5\u05E7\u05D8\u05E0\u05D9\u05D5\u05EA",
      "categorySlug": "grains",
      "weight": "500 \u05D2\u05E8\u05DD",
      "unitsPerPack": 12,
      "barcode": "7290003470242",
      "catalogPage": 5,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p014",
      "manufacturerId": "tozeret",
      "name": "\u05D1\u05D5\u05E8\u05D2\u05D5\u05DC \u05D3\u05E7",
      "categoryName": "\u05D3\u05D2\u05E0\u05D9\u05DD \u05D5\u05E7\u05D8\u05E0\u05D9\u05D5\u05EA",
      "categorySlug": "grains",
      "weight": "500 \u05D2\u05E8\u05DD",
      "unitsPerPack": 12,
      "barcode": "7290003470280",
      "catalogPage": 5,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p015",
      "manufacturerId": "tozeret",
      "name": "\u05D7\u05D9\u05D8\u05D4",
      "categoryName": "\u05D3\u05D2\u05E0\u05D9\u05DD \u05D5\u05E7\u05D8\u05E0\u05D9\u05D5\u05EA",
      "categorySlug": "grains",
      "weight": "500 \u05D2\u05E8\u05DD",
      "unitsPerPack": 12,
      "barcode": "7290003470297",
      "catalogPage": 5,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p016",
      "manufacturerId": "tozeret",
      "name": "\u05D1\u05D5\u05E8\u05D2\u05D5\u05DC \u05E2\u05D1\u05D4",
      "categoryName": "\u05D3\u05D2\u05E0\u05D9\u05DD \u05D5\u05E7\u05D8\u05E0\u05D9\u05D5\u05EA",
      "categorySlug": "grains",
      "weight": "500 \u05D2\u05E8\u05DD",
      "unitsPerPack": 12,
      "barcode": "7290019894018",
      "catalogPage": 5,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p017",
      "manufacturerId": "tozeret",
      "name": "\u05D3\u05D5\u05D7\u05DF",
      "categoryName": "\u05D3\u05D2\u05E0\u05D9\u05DD \u05D5\u05E7\u05D8\u05E0\u05D9\u05D5\u05EA",
      "categorySlug": "grains",
      "weight": "450 \u05D2\u05E8\u05DD",
      "unitsPerPack": 12,
      "barcode": "7296079000246",
      "catalogPage": 5,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p018",
      "manufacturerId": "tozeret",
      "name": "\u05E7\u05DE\u05D7 \u05EA\u05D9\u05E8\u05E1",
      "categoryName": "\u05D3\u05D2\u05E0\u05D9\u05DD \u05D5\u05E7\u05D8\u05E0\u05D9\u05D5\u05EA",
      "categorySlug": "grains",
      "weight": "450 \u05D2\u05E8\u05DD",
      "unitsPerPack": 12,
      "barcode": "7296079000802",
      "catalogPage": 5,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p019",
      "manufacturerId": "tozeret",
      "name": "\u05E7\u05D9\u05E0\u05D5\u05D0\u05D4 \u05D0\u05D3\u05D5\u05DE\u05D4",
      "categoryName": "\u05D3\u05D2\u05E0\u05D9\u05DD \u05D5\u05E7\u05D8\u05E0\u05D9\u05D5\u05EA",
      "categorySlug": "grains",
      "weight": "500 \u05D2\u05E8\u05DD",
      "unitsPerPack": 12,
      "barcode": "7296079000758",
      "catalogPage": 5,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p020",
      "manufacturerId": "tozeret",
      "name": "\u05E4\u05D5\u05E4\u05E7\u05D5\u05E8\u05DF",
      "categoryName": "\u05D3\u05D2\u05E0\u05D9\u05DD \u05D5\u05E7\u05D8\u05E0\u05D9\u05D5\u05EA",
      "categorySlug": "grains",
      "weight": "500 \u05D2\u05E8\u05DD",
      "unitsPerPack": 12,
      "barcode": "7290003470570",
      "catalogPage": 5,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p021",
      "manufacturerId": "tozeret",
      "name": "\u05E7\u05D9\u05E0\u05D5\u05D0\u05D4 \u05DC\u05D1\u05E0\u05D4",
      "categoryName": "\u05D3\u05D2\u05E0\u05D9\u05DD \u05D5\u05E7\u05D8\u05E0\u05D9\u05D5\u05EA",
      "categorySlug": "grains",
      "weight": "500 \u05D2\u05E8\u05DD",
      "unitsPerPack": 12,
      "barcode": "7296079000222",
      "catalogPage": 5,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p022",
      "manufacturerId": "tozeret",
      "name": "\u05D2\u05E8\u05D9\u05E1\u05D9 \u05E4\u05E0\u05D9\u05E0\u05D4",
      "categoryName": "\u05D3\u05D2\u05E0\u05D9\u05DD \u05D5\u05E7\u05D8\u05E0\u05D9\u05D5\u05EA",
      "categorySlug": "grains",
      "weight": "500 \u05D2\u05E8\u05DD",
      "unitsPerPack": 12,
      "barcode": "7296079000185",
      "catalogPage": 5,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p023",
      "manufacturerId": "tozeret",
      "name": "\u05D0\u05E4\u05D5\u05E0\u05D4",
      "categoryName": "\u05D3\u05D2\u05E0\u05D9\u05DD \u05D5\u05E7\u05D8\u05E0\u05D9\u05D5\u05EA",
      "categorySlug": "grains",
      "weight": "500 \u05D2\u05E8\u05DD",
      "unitsPerPack": 12,
      "barcode": "7290003470563",
      "catalogPage": 6,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p024",
      "manufacturerId": "tozeret",
      "name": "\u05D7\u05D5\u05DE\u05D5\u05E1",
      "categoryName": "\u05D3\u05D2\u05E0\u05D9\u05DD \u05D5\u05E7\u05D8\u05E0\u05D9\u05D5\u05EA",
      "categorySlug": "grains",
      "weight": "500 \u05D2\u05E8\u05DD",
      "unitsPerPack": 12,
      "barcode": "7290003470266",
      "catalogPage": 6,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p025",
      "manufacturerId": "tozeret",
      "name": "\u05E2\u05D3\u05E9\u05D9\u05DD \u05D9\u05E8\u05D5\u05E7\u05D5\u05EA",
      "categoryName": "\u05D3\u05D2\u05E0\u05D9\u05DD \u05D5\u05E7\u05D8\u05E0\u05D9\u05D5\u05EA",
      "categorySlug": "grains",
      "weight": "500 \u05D2\u05E8\u05DD",
      "unitsPerPack": 12,
      "barcode": "7290003470518",
      "catalogPage": 6,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p026",
      "manufacturerId": "tozeret",
      "name": "\u05E2\u05D3\u05E9\u05D9\u05DD \u05D0\u05D3\u05D5\u05DE\u05D5\u05EA",
      "categoryName": "\u05D3\u05D2\u05E0\u05D9\u05DD \u05D5\u05E7\u05D8\u05E0\u05D9\u05D5\u05EA",
      "categorySlug": "grains",
      "weight": "500 \u05D2\u05E8\u05DD",
      "unitsPerPack": 12,
      "barcode": "7290003470419",
      "catalogPage": 6,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p027",
      "manufacturerId": "tozeret",
      "name": "\u05D7\u05D5\u05DE\u05D5\u05E1 \u05E2\u05E0\u05E7",
      "categoryName": "\u05D3\u05D2\u05E0\u05D9\u05DD \u05D5\u05E7\u05D8\u05E0\u05D9\u05D5\u05EA",
      "categorySlug": "grains",
      "weight": "500 \u05D2\u05E8\u05DD",
      "unitsPerPack": 12,
      "barcode": "7296079000161",
      "catalogPage": 6,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p028",
      "manufacturerId": "tozeret",
      "name": "\u05E9\u05E2\u05D5\u05E2\u05D9\u05EA \u05DC\u05D1\u05E0\u05D4",
      "categoryName": "\u05D3\u05D2\u05E0\u05D9\u05DD \u05D5\u05E7\u05D8\u05E0\u05D9\u05D5\u05EA",
      "categorySlug": "grains",
      "weight": "500 \u05D2\u05E8\u05DD",
      "unitsPerPack": 12,
      "barcode": "7290003470587",
      "catalogPage": 6,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p029",
      "manufacturerId": "tozeret",
      "name": "\u05E9\u05E2\u05D5\u05E2\u05D9\u05EA \u05D1\u05D5\u05D1\u05E1",
      "categoryName": "\u05D3\u05D2\u05E0\u05D9\u05DD \u05D5\u05E7\u05D8\u05E0\u05D9\u05D5\u05EA",
      "categorySlug": "grains",
      "weight": "450 \u05D2\u05E8\u05DD",
      "unitsPerPack": 12,
      "barcode": "7290003470167",
      "catalogPage": 6,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p030",
      "manufacturerId": "tozeret",
      "name": "\u05E9\u05E2\u05D5\u05E2\u05D9\u05EA \u05DC\u05D7\u05DE\u05D9\u05DF",
      "categoryName": "\u05D3\u05D2\u05E0\u05D9\u05DD \u05D5\u05E7\u05D8\u05E0\u05D9\u05D5\u05EA",
      "categorySlug": "grains",
      "weight": "500 \u05D2\u05E8\u05DD",
      "unitsPerPack": 12,
      "barcode": "7296079000017",
      "catalogPage": 6,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p031",
      "manufacturerId": "tozeret",
      "name": "\u05E9\u05E2\u05D5\u05E2\u05D9\u05EA \u05DE\u05E9",
      "categoryName": "\u05D3\u05D2\u05E0\u05D9\u05DD \u05D5\u05E7\u05D8\u05E0\u05D9\u05D5\u05EA",
      "categorySlug": "grains",
      "weight": "500 \u05D2\u05E8\u05DD",
      "unitsPerPack": 12,
      "barcode": "7296079000116",
      "catalogPage": 6,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p032",
      "manufacturerId": "tozeret",
      "name": "\u05E9\u05E2\u05D5\u05E2\u05D9\u05EA \u05D0\u05D3\u05D5\u05DE\u05D4",
      "categoryName": "\u05D3\u05D2\u05E0\u05D9\u05DD \u05D5\u05E7\u05D8\u05E0\u05D9\u05D5\u05EA",
      "categorySlug": "grains",
      "weight": "500 \u05D2\u05E8\u05DD",
      "unitsPerPack": 12,
      "barcode": "7290003470341",
      "catalogPage": 6,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p033",
      "manufacturerId": "tozeret",
      "name": "\u05E2\u05D3\u05E9\u05D9\u05DD \u05E9\u05D7\u05D5\u05E8\u05D5\u05EA",
      "categoryName": "\u05D3\u05D2\u05E0\u05D9\u05DD \u05D5\u05E7\u05D8\u05E0\u05D9\u05D5\u05EA",
      "categorySlug": "grains",
      "weight": "500 \u05D2\u05E8\u05DD",
      "unitsPerPack": 12,
      "barcode": "7296079000482",
      "catalogPage": 6,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p034",
      "manufacturerId": "tozeret",
      "name": "\u05E9\u05E2\u05D5\u05E2\u05D9\u05EA \u05E9\u05D7\u05D5\u05E8\u05D4",
      "categoryName": "\u05D3\u05D2\u05E0\u05D9\u05DD \u05D5\u05E7\u05D8\u05E0\u05D9\u05D5\u05EA",
      "categorySlug": "grains",
      "weight": "500 \u05D2\u05E8\u05DD",
      "unitsPerPack": 12,
      "barcode": "7296079000628",
      "catalogPage": 6,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p035",
      "manufacturerId": "tozeret",
      "name": "\u05D1\u05D5\u05E8\u05D2\u05D5\u05DC \u05D3\u05E7",
      "categoryName": "\u05D3\u05D2\u05E0\u05D9\u05DD \u05D5\u05E7\u05D8\u05E0\u05D9\u05D5\u05EA",
      "categorySlug": "grains",
      "weight": "1 \u05E7\u05F4\u05D2",
      "unitsPerPack": 12,
      "barcode": "7290003470075",
      "catalogPage": 7,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p036",
      "manufacturerId": "tozeret",
      "name": "\u05D1\u05D5\u05E8\u05D2\u05D5\u05DC \u05E2\u05D1\u05D4",
      "categoryName": "\u05D3\u05D2\u05E0\u05D9\u05DD \u05D5\u05E7\u05D8\u05E0\u05D9\u05D5\u05EA",
      "categorySlug": "grains",
      "weight": "1 \u05E7\u05F4\u05D2",
      "unitsPerPack": 12,
      "barcode": "7290019894025",
      "catalogPage": 7,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p037",
      "manufacturerId": "tozeret",
      "name": "\u05D7\u05D9\u05D8\u05D4",
      "categoryName": "\u05D3\u05D2\u05E0\u05D9\u05DD \u05D5\u05E7\u05D8\u05E0\u05D9\u05D5\u05EA",
      "categorySlug": "grains",
      "weight": "1 \u05E7\u05F4\u05D2",
      "unitsPerPack": 12,
      "barcode": "7290003470501",
      "catalogPage": 7,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p038",
      "manufacturerId": "tozeret",
      "name": "\u05D2\u05E8\u05D9\u05E1\u05D9\u05DD",
      "categoryName": "\u05D3\u05D2\u05E0\u05D9\u05DD \u05D5\u05E7\u05D8\u05E0\u05D9\u05D5\u05EA",
      "categorySlug": "grains",
      "weight": "1 \u05E7\u05F4\u05D2",
      "unitsPerPack": 12,
      "barcode": "7290003470150",
      "catalogPage": 7,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p039",
      "manufacturerId": "tozeret",
      "name": "\u05DB\u05D5\u05E1\u05DE\u05EA",
      "categoryName": "\u05D3\u05D2\u05E0\u05D9\u05DD \u05D5\u05E7\u05D8\u05E0\u05D9\u05D5\u05EA",
      "categorySlug": "grains",
      "weight": "1 \u05E7\u05F4\u05D2",
      "unitsPerPack": 12,
      "barcode": "7290003470372",
      "catalogPage": 7,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p040",
      "manufacturerId": "tozeret",
      "name": "\u05D7\u05D5\u05DE\u05D5\u05E1",
      "categoryName": "\u05D3\u05D2\u05E0\u05D9\u05DD \u05D5\u05E7\u05D8\u05E0\u05D9\u05D5\u05EA",
      "categorySlug": "grains",
      "weight": "1 \u05E7\u05F4\u05D2",
      "unitsPerPack": 12,
      "barcode": "7290003470754",
      "catalogPage": 7,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p041",
      "manufacturerId": "tozeret",
      "name": "\u05D7\u05D5\u05DE\u05D5\u05E1 \u05E2\u05E0\u05E7",
      "categoryName": "\u05D3\u05D2\u05E0\u05D9\u05DD \u05D5\u05E7\u05D8\u05E0\u05D9\u05D5\u05EA",
      "categorySlug": "grains",
      "weight": "900 \u05D2\u05E8\u05DD",
      "unitsPerPack": 12,
      "barcode": "7290003470228",
      "catalogPage": 7,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p042",
      "manufacturerId": "tozeret",
      "name": "\u05D0\u05E4\u05D5\u05E0\u05D4",
      "categoryName": "\u05D3\u05D2\u05E0\u05D9\u05DD \u05D5\u05E7\u05D8\u05E0\u05D9\u05D5\u05EA",
      "categorySlug": "grains",
      "weight": "1 \u05E7\u05F4\u05D2",
      "unitsPerPack": 12,
      "barcode": "7290003470495",
      "catalogPage": 7,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p043",
      "manufacturerId": "tozeret",
      "name": "\u05E2\u05D3\u05E9\u05D9\u05DD \u05D9\u05E8\u05D5\u05E7\u05D5\u05EA",
      "categoryName": "\u05D3\u05D2\u05E0\u05D9\u05DD \u05D5\u05E7\u05D8\u05E0\u05D9\u05D5\u05EA",
      "categorySlug": "grains",
      "weight": "1 \u05E7\u05F4\u05D2",
      "unitsPerPack": 12,
      "barcode": "7290003470235",
      "catalogPage": 7,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p044",
      "manufacturerId": "tozeret",
      "name": "\u05E9\u05E2\u05D5\u05E2\u05D9\u05EA \u05DC\u05D1\u05E0\u05D4",
      "categoryName": "\u05D3\u05D2\u05E0\u05D9\u05DD \u05D5\u05E7\u05D8\u05E0\u05D9\u05D5\u05EA",
      "categorySlug": "grains",
      "weight": "1 \u05E7\u05F4\u05D2",
      "unitsPerPack": 12,
      "barcode": "7290003470204",
      "catalogPage": 7,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p045",
      "manufacturerId": "tozeret",
      "name": "\u05E2\u05D3\u05E9\u05D9\u05DD \u05D0\u05D3\u05D5\u05DE\u05D5\u05EA",
      "categoryName": "\u05D3\u05D2\u05E0\u05D9\u05DD \u05D5\u05E7\u05D8\u05E0\u05D9\u05D5\u05EA",
      "categorySlug": "grains",
      "weight": "1 \u05E7\u05F4\u05D2",
      "unitsPerPack": 12,
      "barcode": "7296079000147",
      "catalogPage": 7,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p046",
      "manufacturerId": "tozeret",
      "name": "\u05E9\u05D9\u05D1\u05D5\u05DC\u05EA \u05E9\u05D5\u05E2\u05DC \u05D3\u05E7\u05D4 \u05DC\u05D4\u05DB\u05E0\u05D4 \u05DE\u05D4\u05D9\u05E8\u05D4",
      "categoryName": "\u05D3\u05D2\u05E0\u05D9\u05DD \u05D5\u05E7\u05D8\u05E0\u05D9\u05D5\u05EA",
      "categorySlug": "grains",
      "weight": "500 \u05D2\u05E8\u05DD",
      "unitsPerPack": 24,
      "barcode": "7296079000499",
      "catalogPage": 8,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p047",
      "manufacturerId": "tozeret",
      "name": "\u05E9\u05D9\u05D1\u05D5\u05DC\u05EA \u05E9\u05D5\u05E2\u05DC \u05DC\u05D4\u05DB\u05E0\u05D4 \u05DE\u05D4\u05D9\u05E8\u05D4",
      "categoryName": "\u05D3\u05D2\u05E0\u05D9\u05DD \u05D5\u05E7\u05D8\u05E0\u05D9\u05D5\u05EA",
      "categorySlug": "grains",
      "weight": "750 \u05D2\u05E8\u05DD",
      "unitsPerPack": 16,
      "barcode": "7296079000505",
      "catalogPage": 8,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p048",
      "manufacturerId": "tozeret",
      "name": "\u05E9\u05D9\u05D1\u05D5\u05DC\u05EA \u05E9\u05D5\u05E2\u05DC \u05E2\u05D1\u05D4",
      "categoryName": "\u05D3\u05D2\u05E0\u05D9\u05DD \u05D5\u05E7\u05D8\u05E0\u05D9\u05D5\u05EA",
      "categorySlug": "grains",
      "weight": "500 \u05D2\u05E8\u05DD",
      "unitsPerPack": 24,
      "barcode": "7290003470815",
      "catalogPage": 8,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p049",
      "manufacturerId": "tozeret",
      "name": "\u05E9\u05D9\u05D1\u05D5\u05DC\u05EA \u05E9\u05D5\u05E2\u05DC",
      "categoryName": "\u05D3\u05D2\u05E0\u05D9\u05DD \u05D5\u05E7\u05D8\u05E0\u05D9\u05D5\u05EA",
      "categorySlug": "grains",
      "weight": "200 \u05D2\u05E8\u05DD",
      "unitsPerPack": 36,
      "barcode": "7290003470051",
      "catalogPage": 8,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p050",
      "manufacturerId": "tozeret",
      "name": "\u05E7\u05D5\u05E1\u05E7\u05D5\u05E1 \u05D1\u05D9\u05E0\u05D5\u05E0\u05D9",
      "categoryName": "\u05D3\u05D2\u05E0\u05D9\u05DD \u05D5\u05E7\u05D8\u05E0\u05D9\u05D5\u05EA",
      "categorySlug": "grains",
      "weight": "350 \u05D2\u05E8\u05DD",
      "unitsPerPack": 36,
      "barcode": "7296079000642",
      "catalogPage": 8,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": "assets/images/products/p-couscous.jpg",
      "placeholder": false
    },
    {
      "id": "p051",
      "manufacturerId": "tozeret",
      "name": "\u05DB\u05D5\u05E1\u05DE\u05EA",
      "categoryName": "\u05D3\u05D2\u05E0\u05D9\u05DD \u05D5\u05E7\u05D8\u05E0\u05D9\u05D5\u05EA",
      "categorySlug": "grains",
      "weight": "5 \u05E7\u05F4\u05D2",
      "unitsPerPack": 1,
      "barcode": "7290018546369",
      "catalogPage": 9,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p052",
      "manufacturerId": "tozeret",
      "name": "\u05D7\u05D9\u05D8\u05D4",
      "categoryName": "\u05D3\u05D2\u05E0\u05D9\u05DD \u05D5\u05E7\u05D8\u05E0\u05D9\u05D5\u05EA",
      "categorySlug": "grains",
      "weight": "5 \u05E7\u05F4\u05D2",
      "unitsPerPack": 1,
      "barcode": "7290018546352",
      "catalogPage": 9,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p053",
      "manufacturerId": "tozeret",
      "name": "\u05D2\u05E8\u05D9\u05E1\u05D9 \u05E4\u05E0\u05D9\u05E0\u05D4",
      "categoryName": "\u05D3\u05D2\u05E0\u05D9\u05DD \u05D5\u05E7\u05D8\u05E0\u05D9\u05D5\u05EA",
      "categorySlug": "grains",
      "weight": "5 \u05E7\u05F4\u05D2",
      "unitsPerPack": 1,
      "barcode": "7290018546314",
      "catalogPage": 9,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p054",
      "manufacturerId": "tozeret",
      "name": "\u05D1\u05D5\u05E8\u05D2\u05D5\u05DC \u05E2\u05D1\u05D4",
      "categoryName": "\u05D3\u05D2\u05E0\u05D9\u05DD \u05D5\u05E7\u05D8\u05E0\u05D9\u05D5\u05EA",
      "categorySlug": "grains",
      "weight": "5 \u05E7\u05F4\u05D2",
      "unitsPerPack": 1,
      "barcode": "7290018546307",
      "catalogPage": 9,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p055",
      "manufacturerId": "tozeret",
      "name": "\u05D1\u05D5\u05E8\u05D2\u05D5\u05DC \u05D3\u05E7",
      "categoryName": "\u05D3\u05D2\u05E0\u05D9\u05DD \u05D5\u05E7\u05D8\u05E0\u05D9\u05D5\u05EA",
      "categorySlug": "grains",
      "weight": "5 \u05E7\u05F4\u05D2",
      "unitsPerPack": 1,
      "barcode": "7290018546291",
      "catalogPage": 9,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p056",
      "manufacturerId": "tozeret",
      "name": "\u05D2\u05E8\u05D2\u05E8\u05D9 \u05EA\u05D9\u05E8\u05E1 (\u05E4\u05D5\u05E4\u05E7\u05D5\u05E8\u05DF)",
      "categoryName": "\u05D3\u05D2\u05E0\u05D9\u05DD \u05D5\u05E7\u05D8\u05E0\u05D9\u05D5\u05EA",
      "categorySlug": "grains",
      "weight": "5 \u05E7\u05F4\u05D2",
      "unitsPerPack": 1,
      "barcode": "7290018546413",
      "catalogPage": 9,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p057",
      "manufacturerId": "tozeret",
      "name": "\u05E9\u05D9\u05D1\u05D5\u05DC\u05EA \u05E9\u05D5\u05E2\u05DC \u05E2\u05D1\u05D4",
      "categoryName": "\u05D3\u05D2\u05E0\u05D9\u05DD \u05D5\u05E7\u05D8\u05E0\u05D9\u05D5\u05EA",
      "categorySlug": "grains",
      "weight": "5 \u05E7\u05F4\u05D2",
      "unitsPerPack": 1,
      "barcode": "7290018546475",
      "catalogPage": 9,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p058",
      "manufacturerId": "tozeret",
      "name": "\u05E9\u05D9\u05D1\u05D5\u05DC\u05EA \u05E9\u05D5\u05E2\u05DC \u05D3\u05E7\u05D4",
      "categoryName": "\u05D3\u05D2\u05E0\u05D9\u05DD \u05D5\u05E7\u05D8\u05E0\u05D9\u05D5\u05EA",
      "categorySlug": "grains",
      "weight": "5 \u05E7\u05F4\u05D2",
      "unitsPerPack": 1,
      "barcode": "7290018546468",
      "catalogPage": 9,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p059",
      "manufacturerId": "tozeret",
      "name": "\u05E7\u05D9\u05E0\u05D5\u05D0\u05D4 \u05DC\u05D1\u05E0\u05D4",
      "categoryName": "\u05D3\u05D2\u05E0\u05D9\u05DD \u05D5\u05E7\u05D8\u05E0\u05D9\u05D5\u05EA",
      "categorySlug": "grains",
      "weight": "5 \u05E7\u05F4\u05D2",
      "unitsPerPack": 1,
      "barcode": "7290018546451",
      "catalogPage": 9,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p060",
      "manufacturerId": "tozeret",
      "name": "\u05E7\u05D9\u05E0\u05D5\u05D0\u05D4 \u05E9\u05D7\u05D5\u05E8\u05D4",
      "categoryName": "\u05D3\u05D2\u05E0\u05D9\u05DD \u05D5\u05E7\u05D8\u05E0\u05D9\u05D5\u05EA",
      "categorySlug": "grains",
      "weight": "5 \u05E7\u05F4\u05D2",
      "unitsPerPack": 1,
      "barcode": "7290018546512",
      "catalogPage": 9,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p061",
      "manufacturerId": "tozeret",
      "name": "\u05D2\u05E8\u05D9\u05E1\u05D9\u05DD",
      "categoryName": "\u05D3\u05D2\u05E0\u05D9\u05DD \u05D5\u05E7\u05D8\u05E0\u05D9\u05D5\u05EA",
      "categorySlug": "grains",
      "weight": "5 \u05E7\u05F4\u05D2",
      "unitsPerPack": 1,
      "barcode": "7290018546321",
      "catalogPage": 9,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p062",
      "manufacturerId": "tozeret",
      "name": "\u05E7\u05D9\u05E0\u05D5\u05D0\u05D4 \u05D0\u05D3\u05D5\u05DE\u05D4",
      "categoryName": "\u05D3\u05D2\u05E0\u05D9\u05DD \u05D5\u05E7\u05D8\u05E0\u05D9\u05D5\u05EA",
      "categorySlug": "grains",
      "weight": "5 \u05E7\u05F4\u05D2",
      "unitsPerPack": 1,
      "barcode": "7290018546444",
      "catalogPage": 9,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p063",
      "manufacturerId": "tozeret",
      "name": "\u05E9\u05E2\u05D5\u05E2\u05D9\u05EA \u05D0\u05D3\u05D5\u05DE\u05D4",
      "categoryName": "\u05D3\u05D2\u05E0\u05D9\u05DD \u05D5\u05E7\u05D8\u05E0\u05D9\u05D5\u05EA",
      "categorySlug": "grains",
      "weight": "5 \u05E7\u05F4\u05D2",
      "unitsPerPack": 1,
      "barcode": "7290018546482",
      "catalogPage": 10,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p064",
      "manufacturerId": "tozeret",
      "name": "\u05E9\u05E2\u05D5\u05E2\u05D9\u05EA \u05DC\u05D1\u05E0\u05D4",
      "categoryName": "\u05D3\u05D2\u05E0\u05D9\u05DD \u05D5\u05E7\u05D8\u05E0\u05D9\u05D5\u05EA",
      "categorySlug": "grains",
      "weight": "5 \u05E7\u05F4\u05D2",
      "unitsPerPack": 1,
      "barcode": "7290018546499",
      "catalogPage": 10,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p065",
      "manufacturerId": "tozeret",
      "name": "\u05D7\u05D5\u05DE\u05D5\u05E1 \u05E2\u05E0\u05E7",
      "categoryName": "\u05D3\u05D2\u05E0\u05D9\u05DD \u05D5\u05E7\u05D8\u05E0\u05D9\u05D5\u05EA",
      "categorySlug": "grains",
      "weight": "5 \u05E7\u05F4\u05D2",
      "unitsPerPack": 1,
      "barcode": "7290018546345",
      "catalogPage": 10,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p066",
      "manufacturerId": "tozeret",
      "name": "\u05D7\u05D5\u05DE\u05D5\u05E1",
      "categoryName": "\u05D3\u05D2\u05E0\u05D9\u05DD \u05D5\u05E7\u05D8\u05E0\u05D9\u05D5\u05EA",
      "categorySlug": "grains",
      "weight": "25 \u05E7\u05F4\u05D2",
      "unitsPerPack": 1,
      "barcode": "7290018546338",
      "catalogPage": 10,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p067",
      "manufacturerId": "tozeret",
      "name": "\u05E9\u05E2\u05D5\u05E2\u05D9\u05EA \u05E9\u05D7\u05D5\u05E8\u05D4",
      "categoryName": "\u05D3\u05D2\u05E0\u05D9\u05DD \u05D5\u05E7\u05D8\u05E0\u05D9\u05D5\u05EA",
      "categorySlug": "grains",
      "weight": "5 \u05E7\u05F4\u05D2",
      "unitsPerPack": 1,
      "barcode": "7290018546505",
      "catalogPage": 10,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p068",
      "manufacturerId": "tozeret",
      "name": "\u05D0\u05E4\u05D5\u05E0\u05D4",
      "categoryName": "\u05D3\u05D2\u05E0\u05D9\u05DD \u05D5\u05E7\u05D8\u05E0\u05D9\u05D5\u05EA",
      "categorySlug": "grains",
      "weight": "5 \u05E7\u05F4\u05D2",
      "unitsPerPack": 1,
      "barcode": "7290018546277",
      "catalogPage": 10,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p069",
      "manufacturerId": "tozeret",
      "name": "\u05E2\u05D3\u05E9\u05D9\u05DD \u05D0\u05D3\u05D5\u05DE\u05D5\u05EA",
      "categoryName": "\u05D3\u05D2\u05E0\u05D9\u05DD \u05D5\u05E7\u05D8\u05E0\u05D9\u05D5\u05EA",
      "categorySlug": "grains",
      "weight": "5 \u05E7\u05F4\u05D2",
      "unitsPerPack": 1,
      "barcode": "7290018546376",
      "catalogPage": 10,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p070",
      "manufacturerId": "tozeret",
      "name": "\u05E2\u05D3\u05E9\u05D9\u05DD \u05E9\u05D7\u05D5\u05E8\u05D5\u05EA",
      "categoryName": "\u05D3\u05D2\u05E0\u05D9\u05DD \u05D5\u05E7\u05D8\u05E0\u05D9\u05D5\u05EA",
      "categorySlug": "grains",
      "weight": "5 \u05E7\u05F4\u05D2",
      "unitsPerPack": 1,
      "barcode": "7290018546390",
      "catalogPage": 10,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p071",
      "manufacturerId": "tozeret",
      "name": "\u05E2\u05D3\u05E9\u05D9\u05DD \u05D9\u05E8\u05D5\u05E7\u05D5\u05EA",
      "categoryName": "\u05D3\u05D2\u05E0\u05D9\u05DD \u05D5\u05E7\u05D8\u05E0\u05D9\u05D5\u05EA",
      "categorySlug": "grains",
      "weight": "5 \u05E7\u05F4\u05D2",
      "unitsPerPack": 1,
      "barcode": "7290018546383",
      "catalogPage": 10,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p072",
      "manufacturerId": "tozeret",
      "name": "\u05E7\u05D5\u05E1\u05E7\u05D5\u05E1 \u05D1\u05D9\u05E0\u05D5\u05E0\u05D9",
      "categoryName": "\u05D3\u05D2\u05E0\u05D9\u05DD \u05D5\u05E7\u05D8\u05E0\u05D9\u05D5\u05EA",
      "categorySlug": "grains",
      "weight": "5 \u05E7\u05F4\u05D2",
      "unitsPerPack": 1,
      "barcode": "7290018546758",
      "catalogPage": 10,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p073",
      "manufacturerId": "tozeret",
      "name": "\u05D0\u05D5\u05E8\u05D6 \u05D9\u05E1\u05DE\u05D9\u05DF",
      "categoryName": "\u05D0\u05D5\u05E8\u05D6",
      "categorySlug": "rice",
      "weight": "1 \u05E7\u05F4\u05D2",
      "unitsPerPack": 12,
      "barcode": "7296079000109",
      "catalogPage": 12,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p074",
      "manufacturerId": "tozeret",
      "name": "\u05D0\u05D5\u05E8\u05D6 \u05D1\u05E1\u05DE\u05D8\u05D9",
      "categoryName": "\u05D0\u05D5\u05E8\u05D6",
      "categorySlug": "rice",
      "weight": "1 \u05E7\u05F4\u05D2",
      "unitsPerPack": 12,
      "barcode": "7296079000260",
      "catalogPage": 12,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": "assets/images/products/p-basmati.jpg",
      "placeholder": false
    },
    {
      "id": "p075",
      "manufacturerId": "tozeret",
      "name": "\u05D0\u05D5\u05E8\u05D6 \u05DE\u05DC\u05D0",
      "categoryName": "\u05D0\u05D5\u05E8\u05D6",
      "categorySlug": "rice",
      "weight": "1 \u05E7\u05F4\u05D2",
      "unitsPerPack": 12,
      "barcode": "7296079000192",
      "catalogPage": 12,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p076",
      "manufacturerId": "tozeret",
      "name": "\u05D0\u05D5\u05E8\u05D6 \u05E4\u05E8\u05E1\u05D9",
      "categoryName": "\u05D0\u05D5\u05E8\u05D6",
      "categorySlug": "rice",
      "weight": "1 \u05E7\u05F4\u05D2",
      "unitsPerPack": 12,
      "barcode": "7290017406558",
      "catalogPage": 12,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": "assets/images/products/p-persian.jpg",
      "placeholder": false
    },
    {
      "id": "p077",
      "manufacturerId": "tozeret",
      "name": "\u05D0\u05D5\u05E8\u05D6 \u05E2\u05D2\u05D5\u05DC",
      "categoryName": "\u05D0\u05D5\u05E8\u05D6",
      "categorySlug": "rice",
      "weight": "1 \u05E7\u05F4\u05D2",
      "unitsPerPack": 12,
      "barcode": "7290003470143",
      "catalogPage": 12,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p078",
      "manufacturerId": "tozeret",
      "name": "\u05D1\u05E8\u05D0\u05DC - \u05D0\u05D5\u05E8\u05D6 \u05E4\u05E8\u05E1\u05D9",
      "categoryName": "\u05D0\u05D5\u05E8\u05D6",
      "categorySlug": "rice",
      "weight": "1 \u05E7\u05F4\u05D2",
      "unitsPerPack": 12,
      "barcode": "7290019894056",
      "catalogPage": 12,
      "brand": "\u05D1\u05E8\u05D0\u05DC",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p079",
      "manufacturerId": "tozeret",
      "name": "\u05D0\u05D5\u05E8\u05D6 \u05D9\u05E1\u05DE\u05D9\u05DF",
      "categoryName": "\u05D0\u05D5\u05E8\u05D6",
      "categorySlug": "rice",
      "weight": "25 \u05E7\u05F4\u05D2",
      "unitsPerPack": 1,
      "barcode": "7290017406749",
      "catalogPage": 12,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p080",
      "manufacturerId": "tozeret",
      "name": "\u05D0\u05D5\u05E8\u05D6 \u05D1\u05E1\u05DE\u05D8\u05D9",
      "categoryName": "\u05D0\u05D5\u05E8\u05D6",
      "categorySlug": "rice",
      "weight": "5 \u05E7\u05F4\u05D2",
      "unitsPerPack": 1,
      "barcode": "7290017408453",
      "catalogPage": 12,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p081",
      "manufacturerId": "tozeret",
      "name": "\u05D0\u05D5\u05E8\u05D6 \u05E4\u05E8\u05E1\u05D9",
      "categoryName": "\u05D0\u05D5\u05E8\u05D6",
      "categorySlug": "rice",
      "weight": "25 \u05E7\u05F4\u05D2",
      "unitsPerPack": 1,
      "barcode": "7290017406756",
      "catalogPage": 12,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p082",
      "manufacturerId": "tozeret",
      "name": "\u05D0\u05D5\u05E8\u05D6 \u05E2\u05D2\u05D5\u05DC",
      "categoryName": "\u05D0\u05D5\u05E8\u05D6",
      "categorySlug": "rice",
      "weight": "5 \u05E7\u05F4\u05D2",
      "unitsPerPack": 1,
      "barcode": "720019894407",
      "catalogPage": 12,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p083",
      "manufacturerId": "tozeret",
      "name": "\u05E4\u05E1\u05D8\u05D4 \u05E4\u05E0\u05D4 Lafarella",
      "categoryName": "\u05E4\u05E1\u05D8\u05D5\u05EA \u05D5\u05E4\u05EA\u05D9\u05EA\u05D9\u05DD",
      "categorySlug": "pasta",
      "weight": "400 \u05D2\u05E8\u05DD",
      "unitsPerPack": 20,
      "barcode": "7290019894179",
      "catalogPage": 14,
      "brand": "Lafarella",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p084",
      "manufacturerId": "tozeret",
      "name": "\u05E4\u05E1\u05D8\u05D4 \u05E1\u05E4\u05D2\u05D8\u05D9 Lafarella",
      "categoryName": "\u05E4\u05E1\u05D8\u05D5\u05EA \u05D5\u05E4\u05EA\u05D9\u05EA\u05D9\u05DD",
      "categorySlug": "pasta",
      "weight": "400 \u05D2\u05E8\u05DD",
      "unitsPerPack": 20,
      "barcode": "7290019894223",
      "catalogPage": 14,
      "brand": "Lafarella",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p085",
      "manufacturerId": "tozeret",
      "name": "\u05E4\u05E1\u05D8\u05D4 \u05D5\u05E8\u05DE\u05D9\u05E6\u05F3\u05DC\u05D9 Lafarella",
      "categoryName": "\u05E4\u05E1\u05D8\u05D5\u05EA \u05D5\u05E4\u05EA\u05D9\u05EA\u05D9\u05DD",
      "categorySlug": "pasta",
      "weight": "400 \u05D2\u05E8\u05DD",
      "unitsPerPack": 20,
      "barcode": "7290019894230",
      "catalogPage": 14,
      "brand": "Lafarella",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p086",
      "manufacturerId": "tozeret",
      "name": "\u05E4\u05EA\u05D9\u05EA\u05D9\u05DD \u05D1\u05E6\u05D5\u05E8\u05EA \u05D0\u05D5\u05E8\u05D6 Lafarella",
      "categoryName": "\u05E4\u05E1\u05D8\u05D5\u05EA \u05D5\u05E4\u05EA\u05D9\u05EA\u05D9\u05DD",
      "categorySlug": "pasta",
      "weight": "400 \u05D2\u05E8\u05DD",
      "unitsPerPack": 20,
      "barcode": "7290019894322",
      "catalogPage": 14,
      "brand": "Lafarella",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p087",
      "manufacturerId": "tozeret",
      "name": "\u05E4\u05E1\u05D8\u05D4 \u05E7\u05E8\u05E0\u05D9\u05D9\u05DD Lafarella",
      "categoryName": "\u05E4\u05E1\u05D8\u05D5\u05EA \u05D5\u05E4\u05EA\u05D9\u05EA\u05D9\u05DD",
      "categorySlug": "pasta",
      "weight": "400 \u05D2\u05E8\u05DD",
      "unitsPerPack": 20,
      "barcode": "7290019894247",
      "catalogPage": 14,
      "brand": "Lafarella",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p088",
      "manufacturerId": "tozeret",
      "name": "\u05E4\u05E1\u05D8\u05D4 \u05E4\u05D5\u05D6\u05D9\u05DC\u05D9 Lafarella",
      "categoryName": "\u05E4\u05E1\u05D8\u05D5\u05EA \u05D5\u05E4\u05EA\u05D9\u05EA\u05D9\u05DD",
      "categorySlug": "pasta",
      "weight": "400 \u05D2\u05E8\u05DD",
      "unitsPerPack": 20,
      "barcode": "7290019894155",
      "catalogPage": 14,
      "brand": "Lafarella",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p089",
      "manufacturerId": "tozeret",
      "name": "\u05E4\u05E1\u05D8\u05D4 \u05E4\u05E0\u05D4 Lafarella",
      "categoryName": "\u05E4\u05E1\u05D8\u05D5\u05EA \u05D5\u05E4\u05EA\u05D9\u05EA\u05D9\u05DD",
      "categorySlug": "pasta",
      "weight": "5 \u05E7\u05F4\u05D2",
      "unitsPerPack": 2,
      "barcode": "7290019894285",
      "catalogPage": 14,
      "brand": "Lafarella",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p090",
      "manufacturerId": "tozeret",
      "name": "\u05E4\u05E1\u05D8\u05D4 \u05E1\u05E4\u05D2\u05D8\u05D9 Lafarella",
      "categoryName": "\u05E4\u05E1\u05D8\u05D5\u05EA \u05D5\u05E4\u05EA\u05D9\u05EA\u05D9\u05DD",
      "categorySlug": "pasta",
      "weight": "5 \u05E7\u05F4\u05D2",
      "unitsPerPack": 2,
      "barcode": "7290019894131",
      "catalogPage": 14,
      "brand": "Lafarella",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p091",
      "manufacturerId": "tozeret",
      "name": "\u05E4\u05E1\u05D8\u05D4 \u05D5\u05E8\u05DE\u05D9\u05E6\u05F3\u05DC\u05D9 Lafarella",
      "categoryName": "\u05E4\u05E1\u05D8\u05D5\u05EA \u05D5\u05E4\u05EA\u05D9\u05EA\u05D9\u05DD",
      "categorySlug": "pasta",
      "weight": "5 \u05E7\u05F4\u05D2",
      "unitsPerPack": 2,
      "barcode": "7290019894278",
      "catalogPage": 14,
      "brand": "Lafarella",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p092",
      "manufacturerId": "tozeret",
      "name": "\u05E4\u05EA\u05D9\u05EA\u05D9\u05DD \u05D1\u05E6\u05D5\u05E8\u05EA \u05D0\u05D5\u05E8\u05D6 Lafarella",
      "categoryName": "\u05E4\u05E1\u05D8\u05D5\u05EA \u05D5\u05E4\u05EA\u05D9\u05EA\u05D9\u05DD",
      "categorySlug": "pasta",
      "weight": "5 \u05E7\u05F4\u05D2",
      "unitsPerPack": 2,
      "barcode": "7290019894452",
      "catalogPage": 14,
      "brand": "Lafarella",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p093",
      "manufacturerId": "tozeret",
      "name": "\u05E4\u05E1\u05D8\u05D4 \u05E7\u05E8\u05E0\u05D9\u05D9\u05DD Lafarella",
      "categoryName": "\u05E4\u05E1\u05D8\u05D5\u05EA \u05D5\u05E4\u05EA\u05D9\u05EA\u05D9\u05DD",
      "categorySlug": "pasta",
      "weight": "5 \u05E7\u05F4\u05D2",
      "unitsPerPack": 2,
      "barcode": "7290019894209",
      "catalogPage": 14,
      "brand": "Lafarella",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p094",
      "manufacturerId": "tozeret",
      "name": "\u05E4\u05E1\u05D8\u05D4 \u05E4\u05D5\u05D6\u05D9\u05DC\u05D9 Lafarella",
      "categoryName": "\u05E4\u05E1\u05D8\u05D5\u05EA \u05D5\u05E4\u05EA\u05D9\u05EA\u05D9\u05DD",
      "categorySlug": "pasta",
      "weight": "5 \u05E7\u05F4\u05D2",
      "unitsPerPack": 2,
      "barcode": "7290019894292",
      "catalogPage": 14,
      "brand": "Lafarella",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p095",
      "manufacturerId": "tozeret",
      "name": "\u05E4\u05E1\u05D8\u05D4 \u05E4\u05D5\u05D6\u05D9\u05DC\u05D9 Vittale",
      "categoryName": "\u05E4\u05E1\u05D8\u05D5\u05EA \u05D5\u05E4\u05EA\u05D9\u05EA\u05D9\u05DD",
      "categorySlug": "pasta",
      "weight": "400 \u05D2\u05E8\u05DD",
      "unitsPerPack": 20,
      "barcode": "7290019894582",
      "catalogPage": 15,
      "brand": "Vittale",
      "image": "assets/images/products/p-fusilli.jpg",
      "placeholder": false
    },
    {
      "id": "p096",
      "manufacturerId": "tozeret",
      "name": "\u05E4\u05E1\u05D8\u05D4 \u05E4\u05E0\u05D4 Vittale",
      "categoryName": "\u05E4\u05E1\u05D8\u05D5\u05EA \u05D5\u05E4\u05EA\u05D9\u05EA\u05D9\u05DD",
      "categorySlug": "pasta",
      "weight": "400 \u05D2\u05E8\u05DD",
      "unitsPerPack": 20,
      "barcode": "7290019894575",
      "catalogPage": 15,
      "brand": "Vittale",
      "image": "assets/images/products/p-penne.jpg",
      "placeholder": false
    },
    {
      "id": "p097",
      "manufacturerId": "tozeret",
      "name": "\u05D0\u05D8\u05E8\u05D9\u05D5\u05EA \u05D5\u05E8\u05DE\u05D9\u05E6\u05F3\u05DC\u05D9 Vittale",
      "categoryName": "\u05E4\u05E1\u05D8\u05D5\u05EA \u05D5\u05E4\u05EA\u05D9\u05EA\u05D9\u05DD",
      "categorySlug": "pasta",
      "weight": "400 \u05D2\u05E8\u05DD",
      "unitsPerPack": 20,
      "barcode": "7290019894636",
      "catalogPage": 15,
      "brand": "Vittale",
      "image": "assets/images/products/p-vermicelli.jpg",
      "placeholder": false
    },
    {
      "id": "p098",
      "manufacturerId": "tozeret",
      "name": "\u05E4\u05EA\u05D9\u05EA\u05D9\u05DD \u05D1\u05E6\u05D5\u05E8\u05EA \u05D0\u05D5\u05E8\u05D6 Vittale",
      "categoryName": "\u05E4\u05E1\u05D8\u05D5\u05EA \u05D5\u05E4\u05EA\u05D9\u05EA\u05D9\u05DD",
      "categorySlug": "pasta",
      "weight": "400 \u05D2\u05E8\u05DD",
      "unitsPerPack": 20,
      "barcode": "7290019894643",
      "catalogPage": 15,
      "brand": "Vittale",
      "image": "assets/images/products/p-risoni.jpg",
      "placeholder": false
    },
    {
      "id": "p099",
      "manufacturerId": "tozeret",
      "name": "\u05E4\u05E1\u05D8\u05D4 \u05E1\u05E4\u05D2\u05D8\u05D9 Vittale",
      "categoryName": "\u05E4\u05E1\u05D8\u05D5\u05EA \u05D5\u05E4\u05EA\u05D9\u05EA\u05D9\u05DD",
      "categorySlug": "pasta",
      "weight": "400 \u05D2\u05E8\u05DD",
      "unitsPerPack": 20,
      "barcode": "7290019894568",
      "catalogPage": 15,
      "brand": "Vittale",
      "image": "assets/images/products/p-spaghetti.jpg",
      "placeholder": false
    },
    {
      "id": "p100",
      "manufacturerId": "tozeret",
      "name": "\u05E4\u05E1\u05D8\u05D4 \u05E7\u05E8\u05E0\u05D9\u05D9\u05DD Vittale",
      "categoryName": "\u05E4\u05E1\u05D8\u05D5\u05EA \u05D5\u05E4\u05EA\u05D9\u05EA\u05D9\u05DD",
      "categorySlug": "pasta",
      "weight": "400 \u05D2\u05E8\u05DD",
      "unitsPerPack": 20,
      "barcode": "7290019894551",
      "catalogPage": 15,
      "brand": "Vittale",
      "image": "assets/images/products/p-shells.jpg",
      "placeholder": false
    },
    {
      "id": "p101",
      "manufacturerId": "tozeret",
      "name": "\u05E4\u05EA\u05D9\u05EA\u05D9\u05DD \u05D1\u05E6\u05D5\u05E8\u05EA \u05DB\u05D5\u05DB\u05D1 Vittale",
      "categoryName": "\u05E4\u05E1\u05D8\u05D5\u05EA \u05D5\u05E4\u05EA\u05D9\u05EA\u05D9\u05DD",
      "categorySlug": "pasta",
      "weight": "400 \u05D2\u05E8\u05DD",
      "unitsPerPack": 20,
      "barcode": "7290019894834",
      "catalogPage": 15,
      "brand": "Vittale",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p102",
      "manufacturerId": "tozeret",
      "name": "\u05D0\u05D8\u05E8\u05D9\u05D5\u05EA- \u05E0\u05D5\u05D3\u05DC\u05E1 \u05E8\u05D7\u05D1\u05D5\u05EA \u05DC\u05D4\u05E7\u05E4\u05E6\u05D4",
      "categoryName": "\u05E4\u05E1\u05D8\u05D5\u05EA \u05D5\u05E4\u05EA\u05D9\u05EA\u05D9\u05DD",
      "categorySlug": "pasta",
      "weight": "200 \u05D2\u05E8\u05DD",
      "unitsPerPack": 50,
      "barcode": "7290020505156",
      "catalogPage": 16,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p103",
      "manufacturerId": "tozeret",
      "name": "\u05D0\u05D8\u05E8\u05D9\u05D5\u05EA - \u05E0\u05D5\u05D3\u05DC\u05E1 \u05D3\u05E7\u05D5\u05EA \u05DC\u05D4\u05E7\u05E4\u05E6\u05D4",
      "categoryName": "\u05E4\u05E1\u05D8\u05D5\u05EA \u05D5\u05E4\u05EA\u05D9\u05EA\u05D9\u05DD",
      "categorySlug": "pasta",
      "weight": "200 \u05D2\u05E8\u05DD",
      "unitsPerPack": 50,
      "barcode": "7290020505163",
      "catalogPage": 16,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p104",
      "manufacturerId": "tozeret",
      "name": "\u05D0\u05D8\u05E8\u05D9\u05D5\u05EA- \u05E0\u05D5\u05D3\u05DC\u05E1 \u05E8\u05D7\u05D1\u05D5\u05EA \u05DC\u05D4\u05E7\u05E4\u05E6\u05D4",
      "categoryName": "\u05E4\u05E1\u05D8\u05D5\u05EA \u05D5\u05E4\u05EA\u05D9\u05EA\u05D9\u05DD",
      "categorySlug": "pasta",
      "weight": "400 \u05D2\u05E8\u05DD",
      "unitsPerPack": 30,
      "barcode": "7290019894827",
      "catalogPage": 16,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p105",
      "manufacturerId": "tozeret",
      "name": "\u05D0\u05D8\u05E8\u05D9\u05D5\u05EA - \u05E0\u05D5\u05D3\u05DC\u05E1 \u05D3\u05E7\u05D5\u05EA \u05DC\u05D4\u05E7\u05E4\u05E6\u05D4",
      "categoryName": "\u05E4\u05E1\u05D8\u05D5\u05EA \u05D5\u05E4\u05EA\u05D9\u05EA\u05D9\u05DD",
      "categorySlug": "pasta",
      "weight": "400 \u05D2\u05E8\u05DD",
      "unitsPerPack": 30,
      "barcode": "7290019894810",
      "catalogPage": 16,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p106",
      "manufacturerId": "tozeret",
      "name": "\u05E0\u05D9\u05D5\u05E7\u05D9 \u05EA\u05E4\u05D5\u05D7\u05D9 \u05D0\u05D3\u05DE\u05D4 \u05DC\u05DC\u05D0 \u05D2\u05DC\u05D5\u05D8\u05DF",
      "categoryName": "\u05E4\u05E1\u05D8\u05D5\u05EA \u05D5\u05E4\u05EA\u05D9\u05EA\u05D9\u05DD",
      "categorySlug": "pasta",
      "weight": "500 \u05D2\u05E8\u05DD",
      "unitsPerPack": 12,
      "barcode": "7290020505385",
      "catalogPage": 16,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p107",
      "manufacturerId": "tozeret",
      "name": "\u05E0\u05D9\u05D5\u05E7\u05D9 \u05EA\u05E4\u05D5\u05D7\u05D9 \u05D0\u05D3\u05DE\u05D4",
      "categoryName": "\u05E4\u05E1\u05D8\u05D5\u05EA \u05D5\u05E4\u05EA\u05D9\u05EA\u05D9\u05DD",
      "categorySlug": "pasta",
      "weight": "500 \u05D2\u05E8\u05DD",
      "unitsPerPack": 12,
      "barcode": "7290019894667",
      "catalogPage": 16,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p108",
      "manufacturerId": "tozeret",
      "name": "\u05D8\u05D5\u05E8\u05D8\u05D9\u05D4 \u05DE\u05E7\u05DE\u05D7 \u05D7\u05D9\u05D8\u05D4 (\u05E7\u05D5\u05D8\u05E8 28 \u05E1\u05F4\u05DE)",
      "categoryName": "\u05D8\u05D5\u05E8\u05D8\u05D9\u05D5\u05EA",
      "categorySlug": "tortillas",
      "weight": "780 \u05D2\u05E8\u05DD",
      "unitsPerPack": 10,
      "barcode": "7290019894216",
      "catalogPage": 18,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p109",
      "manufacturerId": "tozeret",
      "name": "\u05D8\u05D5\u05E8\u05D8\u05D9\u05D4 \u05DE\u05E7\u05DE\u05D7 \u05D7\u05D9\u05D8\u05D4 (\u05E7\u05D5\u05D8\u05E8 25 \u05E1\u05F4\u05DE)",
      "categoryName": "\u05D8\u05D5\u05E8\u05D8\u05D9\u05D5\u05EA",
      "categorySlug": "tortillas",
      "weight": "370 \u05D2\u05E8\u05DD",
      "unitsPerPack": 12,
      "barcode": "7290017406978",
      "catalogPage": 18,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p110",
      "manufacturerId": "tozeret",
      "name": "\u05D8\u05D5\u05E8\u05D8\u05D9\u05D4 \u05DC\u05DC\u05D0 \u05D2\u05DC\u05D5\u05D8\u05DF \u05DE\u05E7\u05DE\u05D7 \u05EA\u05D9\u05E8\u05E1 (\u05E7\u05D5\u05D8\u05E8 18 \u05E1\u05F4\u05DE)",
      "categoryName": "\u05D8\u05D5\u05E8\u05D8\u05D9\u05D5\u05EA",
      "categorySlug": "tortillas",
      "weight": "270 \u05D2\u05E8\u05DD",
      "unitsPerPack": 20,
      "barcode": "7290020505361",
      "catalogPage": 18,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p111",
      "manufacturerId": "tozeret",
      "name": "\u05D8\u05D5\u05E8\u05D8\u05D9\u05D4 \u05DE\u05E7\u05DE\u05D7 \u05D7\u05D9\u05D8\u05D4 (\u05E7\u05D5\u05D8\u05E8 20 \u05E1\u05F4\u05DE)",
      "categoryName": "\u05D8\u05D5\u05E8\u05D8\u05D9\u05D5\u05EA",
      "categorySlug": "tortillas",
      "weight": "320 \u05D2\u05E8\u05DD",
      "unitsPerPack": 14,
      "barcode": "7290017406961",
      "catalogPage": 18,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p112",
      "manufacturerId": "tozeret",
      "name": "\u05E9\u05E2\u05D5\u05E2\u05D9\u05EA \u05DC\u05D1\u05E0\u05D4 \u05D1\u05DE\u05D9 \u05DE\u05DC\u05D7",
      "categoryName": "\u05E9\u05D9\u05DE\u05D5\u05E8\u05D9\u05DD",
      "categorySlug": "cans",
      "weight": "550 \u05D2\u05E8\u05DD",
      "unitsPerPack": 24,
      "barcode": "7290019894605",
      "catalogPage": 20,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p113",
      "manufacturerId": "tozeret",
      "name": "\u05D2\u05E8\u05D2\u05E8\u05D9 \u05D7\u05D5\u05DE\u05D5\u05E1 \u05D1\u05DE\u05D9 \u05DE\u05DC\u05D7",
      "categoryName": "\u05E9\u05D9\u05DE\u05D5\u05E8\u05D9\u05DD",
      "categorySlug": "cans",
      "weight": "550 \u05D2\u05E8\u05DD",
      "unitsPerPack": 24,
      "barcode": "7290019894506",
      "catalogPage": 20,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p114",
      "manufacturerId": "tozeret",
      "name": "\u05EA\u05D9\u05E8\u05E1 \u05D2\u05DE\u05D3\u05D9 \u05E9\u05DC\u05DD \u05D1\u05DE\u05D9 \u05DE\u05DC\u05D7",
      "categoryName": "\u05E9\u05D9\u05DE\u05D5\u05E8\u05D9\u05DD",
      "categorySlug": "cans",
      "weight": "410 \u05D2\u05E8\u05DD",
      "unitsPerPack": 24,
      "barcode": "7290020505491",
      "catalogPage": 20,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p115",
      "manufacturerId": "tozeret",
      "name": "\u05D0\u05E4\u05D5\u05E0\u05EA \u05D2\u05D9\u05E0\u05D4",
      "categoryName": "\u05E9\u05D9\u05DE\u05D5\u05E8\u05D9\u05DD",
      "categorySlug": "cans",
      "weight": "550 \u05D2\u05E8\u05DD",
      "unitsPerPack": 24,
      "barcode": "7290019894643",
      "catalogPage": 20,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p116",
      "manufacturerId": "tozeret",
      "name": "\u05D2\u05E8\u05E2\u05D9\u05E0\u05D9 \u05EA\u05D9\u05E8\u05E1 \u05DE\u05EA\u05D5\u05E7",
      "categoryName": "\u05E9\u05D9\u05DE\u05D5\u05E8\u05D9\u05DD",
      "categorySlug": "cans",
      "weight": "340 \u05D2\u05E8\u05DD",
      "unitsPerPack": 24,
      "barcode": "7290019894193",
      "catalogPage": 20,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": "assets/images/products/p-corn.jpg",
      "placeholder": false
    },
    {
      "id": "p117",
      "manufacturerId": "tozeret",
      "name": "\u05E4\u05D8\u05E8\u05D9\u05D5\u05EA \u05E9\u05DE\u05E4\u05E0\u05D9\u05D5\u05DF \u05D7\u05EA\u05D5\u05DB\u05D5\u05EA",
      "categoryName": "\u05E9\u05D9\u05DE\u05D5\u05E8\u05D9\u05DD",
      "categorySlug": "cans",
      "weight": "400 \u05D2\u05E8\u05DD",
      "unitsPerPack": 24,
      "barcode": "7290019894346",
      "catalogPage": 20,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": "assets/images/products/p-mushroom-sliced.jpg",
      "placeholder": false
    },
    {
      "id": "p118",
      "manufacturerId": "tozeret",
      "name": "\u05E2\u05D2\u05D1\u05E0\u05D9\u05D5\u05EA \u05D7\u05EA\u05D5\u05DB\u05D5\u05EA \u05D3\u05E7 \u05D1\u05DE\u05D9\u05E5 \u05E2\u05D2\u05D1\u05E0\u05D9\u05D5\u05EA",
      "categoryName": "\u05E9\u05D9\u05DE\u05D5\u05E8\u05D9\u05DD",
      "categorySlug": "cans",
      "weight": "400 \u05D2\u05E8\u05DD",
      "unitsPerPack": 24,
      "barcode": "7290019894469",
      "catalogPage": 20,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p119",
      "manufacturerId": "tozeret",
      "name": "\u05E4\u05D8\u05E8\u05D9\u05D5\u05EA \u05E9\u05DE\u05E4\u05E0\u05D9\u05D5\u05DF \u05E9\u05DC\u05DE\u05D5\u05EA",
      "categoryName": "\u05E9\u05D9\u05DE\u05D5\u05E8\u05D9\u05DD",
      "categorySlug": "cans",
      "weight": "400 \u05D2\u05E8\u05DD",
      "unitsPerPack": 24,
      "barcode": "7290019894339",
      "catalogPage": 20,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": "assets/images/products/p-mushroom-whole.jpg",
      "placeholder": false
    },
    {
      "id": "p120",
      "manufacturerId": "tozeret",
      "name": "\u05E7\u05D5\u05D1\u05D9\u05D5\u05EA \u05E2\u05D2\u05D1\u05E0\u05D9\u05D5\u05EA \u05D1\u05DE\u05D9\u05E5 \u05E2\u05D2\u05D1\u05E0\u05D9\u05D5\u05EA",
      "categoryName": "\u05E9\u05D9\u05DE\u05D5\u05E8\u05D9\u05DD",
      "categorySlug": "cans",
      "weight": "400 \u05D2\u05E8\u05DD",
      "unitsPerPack": 24,
      "barcode": "7290019894483",
      "catalogPage": 20,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p121",
      "manufacturerId": "tozeret",
      "name": "\u05D2\u05E8\u05E2\u05D9\u05E0\u05D9 \u05EA\u05D9\u05E8\u05E1 \u05DE\u05EA\u05D5\u05E7",
      "categoryName": "\u05E9\u05D9\u05DE\u05D5\u05E8\u05D9\u05DD",
      "categorySlug": "cans",
      "weight": "550 \u05D2\u05E8\u05DD",
      "unitsPerPack": 24,
      "barcode": "7290019894513",
      "catalogPage": 20,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p122",
      "manufacturerId": "tozeret",
      "name": "\u05E9\u05E2\u05D5\u05E2\u05D9\u05EA \u05DC\u05D1\u05E0\u05D4 \u05D1\u05E8\u05D5\u05D8\u05D1 \u05E2\u05D2\u05D1\u05E0\u05D9\u05D5\u05EA",
      "categoryName": "\u05E9\u05D9\u05DE\u05D5\u05E8\u05D9\u05DD",
      "categorySlug": "cans",
      "weight": "550 \u05D2\u05E8\u05DD",
      "unitsPerPack": 24,
      "barcode": "7920019894612",
      "catalogPage": 20,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p123",
      "manufacturerId": "tozeret",
      "name": "\u05D0\u05E4\u05D5\u05E0\u05EA \u05D2\u05D9\u05E0\u05D4 \u05D5\u05D2\u05D6\u05E8",
      "categoryName": "\u05E9\u05D9\u05DE\u05D5\u05E8\u05D9\u05DD",
      "categorySlug": "cans",
      "weight": "550 \u05D2\u05E8\u05DD",
      "unitsPerPack": 24,
      "barcode": "7290019894506",
      "catalogPage": 20,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p124",
      "manufacturerId": "tozeret",
      "name": "\u05E2\u05DC\u05D9 \u05D2\u05E4\u05DF \u05DE\u05DE\u05D5\u05DC\u05D0\u05D9\u05DD \u05D1\u05D0\u05D5\u05E8\u05D6",
      "categoryName": "\u05E9\u05D9\u05DE\u05D5\u05E8\u05D9\u05DD",
      "categorySlug": "cans",
      "weight": "400 \u05D2\u05E8\u05DD",
      "unitsPerPack": 24,
      "barcode": "7290019894803",
      "catalogPage": 21,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": "assets/images/products/p-vine.jpg",
      "placeholder": false
    },
    {
      "id": "p125",
      "manufacturerId": "tozeret",
      "name": "\u05D2\u05E8\u05E2\u05D9\u05E0\u05D9 \u05EA\u05D9\u05E8\u05E1 \u05DE\u05EA\u05D5\u05E7",
      "categoryName": "\u05E9\u05D9\u05DE\u05D5\u05E8\u05D9\u05DD",
      "categorySlug": "cans",
      "weight": "1.95 \u05E7\u05F4\u05D2",
      "unitsPerPack": 6,
      "barcode": "7290019894186",
      "catalogPage": 21,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p126",
      "manufacturerId": "tozeret",
      "name": "\u05E4\u05D8\u05E8\u05D9\u05D5\u05EA \u05E9\u05DE\u05E4\u05E0\u05D9\u05D5\u05DF \u05D7\u05EA\u05D5\u05DB\u05D5\u05EA",
      "categoryName": "\u05E9\u05D9\u05DE\u05D5\u05E8\u05D9\u05DD",
      "categorySlug": "cans",
      "weight": "2250 \u05D2\u05E8\u05DD",
      "unitsPerPack": 6,
      "barcode": "7290019894391",
      "catalogPage": 21,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p127",
      "manufacturerId": "tozeret",
      "name": "\u05E4\u05D8\u05E8\u05D9\u05D5\u05EA \u05E9\u05DE\u05E4\u05E0\u05D9\u05D5\u05DF \u05E9\u05DC\u05DE\u05D5\u05EA",
      "categoryName": "\u05E9\u05D9\u05DE\u05D5\u05E8\u05D9\u05DD",
      "categorySlug": "cans",
      "weight": "2250 \u05D2\u05E8\u05DD",
      "unitsPerPack": 6,
      "barcode": "7290019894384",
      "catalogPage": 21,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p128",
      "manufacturerId": "tozeret",
      "name": "\u05E2\u05DC\u05D9 \u05D2\u05E4\u05DF \u05DE\u05DE\u05D5\u05DC\u05D0\u05D9\u05DD \u05D1\u05D0\u05D5\u05E8\u05D6",
      "categoryName": "\u05E9\u05D9\u05DE\u05D5\u05E8\u05D9\u05DD",
      "categorySlug": "cans",
      "weight": "1.75 \u05E7\u05F4\u05D2",
      "unitsPerPack": 6,
      "barcode": "7290019894896",
      "catalogPage": 21,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p129",
      "manufacturerId": "tozeret",
      "name": "\u05E2\u05D2\u05D1\u05E0\u05D9\u05D5\u05EA \u05D7\u05EA\u05D5\u05DB\u05D5\u05EA \u05D3\u05E7 \u05D1\u05DE\u05D9\u05E5 \u05E2\u05D2\u05D1\u05E0\u05D9\u05D5\u05EA",
      "categoryName": "\u05E9\u05D9\u05DE\u05D5\u05E8\u05D9\u05DD",
      "categorySlug": "cans",
      "weight": "2.5 \u05E7\u05F4\u05D2",
      "unitsPerPack": 6,
      "barcode": "7290019894537",
      "catalogPage": 21,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p130",
      "manufacturerId": "tozeret",
      "name": "\u05E7\u05D5\u05D1\u05D9\u05D5\u05EA \u05E2\u05D2\u05D1\u05E0\u05D9\u05D5\u05EA \u05D1\u05DE\u05D9\u05E5 \u05E2\u05D2\u05D1\u05E0\u05D9\u05D5\u05EA",
      "categoryName": "\u05E9\u05D9\u05DE\u05D5\u05E8\u05D9\u05DD",
      "categorySlug": "cans",
      "weight": "2.5 \u05E7\u05F4\u05D2",
      "unitsPerPack": 6,
      "barcode": "7290019894544",
      "catalogPage": 21,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p131",
      "manufacturerId": "tozeret",
      "name": "\u05E7\u05D5\u05E8\u05E0\u05D9\u05E9\u05D5\u05E0\u05D9\u05DD \u05DE\u05DC\u05E4\u05E4\u05D5\u05E0\u05D9\u05DD \u05D1\u05D7\u05D5\u05DE\u05E5",
      "categoryName": "\u05E9\u05D9\u05DE\u05D5\u05E8\u05D9\u05DD",
      "categorySlug": "cans",
      "weight": "680 \u05D2\u05E8\u05DD",
      "unitsPerPack": 12,
      "barcode": "7290020505255",
      "catalogPage": 21,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p132",
      "manufacturerId": "tozeret",
      "name": "\u05E7\u05D5\u05E8\u05E0\u05D9\u05E9\u05D5\u05E0\u05D9\u05DD \u05E7\u05D8\u05E0\u05D9\u05DD \u05DE\u05DC\u05E4\u05E4\u05D5\u05E0\u05D9\u05DD \u05D1\u05D7\u05D5\u05DE\u05E5",
      "categoryName": "\u05E9\u05D9\u05DE\u05D5\u05E8\u05D9\u05DD",
      "categorySlug": "cans",
      "weight": "680 \u05D2\u05E8\u05DD",
      "unitsPerPack": 12,
      "barcode": "7290020505460",
      "catalogPage": 21,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p133",
      "manufacturerId": "tozeret",
      "name": "\u05DC\u05D1\u05D1\u05D5\u05EA \u05D3\u05E7\u05DC \u05E9\u05DC\u05DE\u05D9\u05DD \u05D1\u05DE\u05D9 \u05DE\u05DC\u05D7",
      "categoryName": "\u05E9\u05D9\u05DE\u05D5\u05E8\u05D9\u05DD",
      "categorySlug": "cans",
      "weight": "400 \u05D2\u05E8\u05DD",
      "unitsPerPack": 24,
      "barcode": "7290020505378",
      "catalogPage": 21,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p134",
      "manufacturerId": "tozeret",
      "name": "\u05E4\u05E8\u05D5\u05E1\u05D5\u05EA \u05DC\u05D1\u05D1\u05D5\u05EA \u05D3\u05E7\u05DC \u05D1\u05DE\u05D9 \u05DE\u05DC\u05D7",
      "categoryName": "\u05E9\u05D9\u05DE\u05D5\u05E8\u05D9\u05DD",
      "categorySlug": "cans",
      "weight": "400 \u05D2\u05E8\u05DD",
      "unitsPerPack": 24,
      "barcode": "7290020505415",
      "catalogPage": 21,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p135",
      "manufacturerId": "tozeret",
      "name": "\u05DE\u05D0\u05E8\u05D6 \u05E9\u05DC\u05D9\u05E9\u05D9\u05D9\u05D4 \u05D2\u05E8\u05E2\u05D9\u05E0\u05D9 \u05EA\u05D9\u05E8\u05E1 \u05DE\u05EA\u05D5\u05E7",
      "categoryName": "\u05E9\u05D9\u05DE\u05D5\u05E8\u05D9\u05DD",
      "categorySlug": "cans",
      "weight": "184 \u05D2\u05E8\u05DD",
      "unitsPerPack": 24,
      "barcode": "7290020505170",
      "catalogPage": 21,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p136",
      "manufacturerId": "tozeret",
      "name": "\u05E9\u05DE\u05DF \u05D6\u05D9\u05EA \u05DB\u05EA\u05D9\u05EA \u05DE\u05E2\u05D5\u05DC\u05D4",
      "categoryName": "\u05E9\u05DE\u05E0\u05D9\u05DD \u05D5\u05E8\u05D8\u05D1\u05D9\u05DD",
      "categorySlug": "oils",
      "weight": "3 \u05DC\u05D9\u05D8\u05E8",
      "unitsPerPack": 4,
      "barcode": "7290019894674",
      "catalogPage": 23,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p137",
      "manufacturerId": "tozeret",
      "name": "\u05E9\u05DE\u05DF \u05D6\u05D9\u05EA \u05DB\u05EA\u05D9\u05EA \u05DE\u05E2\u05D5\u05DC\u05D4",
      "categoryName": "\u05E9\u05DE\u05E0\u05D9\u05DD \u05D5\u05E8\u05D8\u05D1\u05D9\u05DD",
      "categorySlug": "oils",
      "weight": "3 \u05DC\u05D9\u05D8\u05E8",
      "unitsPerPack": 4,
      "barcode": "7290019894162",
      "catalogPage": 23,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p138",
      "manufacturerId": "tozeret",
      "name": "\u05D7\u05E8\u05D3\u05DC \u05D3\u05D9\u05D6'\u05D5\u05DF \u05E6\u05E8\u05E4\u05EA\u05D9",
      "categoryName": "\u05E9\u05DE\u05E0\u05D9\u05DD \u05D5\u05E8\u05D8\u05D1\u05D9\u05DD",
      "categorySlug": "oils",
      "weight": "350 \u05D2\u05E8\u05DD",
      "unitsPerPack": 12,
      "barcode": "7290018546239",
      "catalogPage": 23,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": "assets/images/products/p-mustard.jpg",
      "placeholder": false
    },
    {
      "id": "p139",
      "manufacturerId": "tozeret",
      "name": "\u05D7\u05E8\u05D3\u05DC \u05D3\u05D9\u05D6'\u05D5\u05DF \u05E6\u05E8\u05E4\u05EA\u05D9 \u05E2\u05DD \u05D2\u05E8\u05D2\u05D9\u05E8\u05D9\u05DD",
      "categoryName": "\u05E9\u05DE\u05E0\u05D9\u05DD \u05D5\u05E8\u05D8\u05D1\u05D9\u05DD",
      "categorySlug": "oils",
      "weight": "350 \u05D2\u05E8\u05DD",
      "unitsPerPack": 12,
      "barcode": "7290018546222",
      "catalogPage": 23,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": "assets/images/products/p-mustard-seeds.jpg",
      "placeholder": false
    },
    {
      "id": "p140",
      "manufacturerId": "tozeret",
      "name": "\u05D3\u05D1\u05E9 \u05D8\u05D4\u05D5\u05E8",
      "categoryName": "\u05E9\u05DE\u05E0\u05D9\u05DD \u05D5\u05E8\u05D8\u05D1\u05D9\u05DD",
      "categorySlug": "oils",
      "weight": "400 \u05D2\u05E8\u05DD",
      "unitsPerPack": 24,
      "barcode": "7290019894315",
      "catalogPage": 23,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": "assets/images/products/p-honey.jpg",
      "placeholder": false
    },
    {
      "id": "p141",
      "manufacturerId": "tozeret",
      "name": "\u05DE\u05D9\u05D5\u05E0\u05D6 \u05D0\u05DE\u05D9\u05EA\u05D9 \u05D1\u05D1\u05E7\u05D1\u05D5\u05E7 \u05DC\u05D7\u05D9\u05E5",
      "categoryName": "\u05E9\u05DE\u05E0\u05D9\u05DD \u05D5\u05E8\u05D8\u05D1\u05D9\u05DD",
      "categorySlug": "oils",
      "weight": "480 \u05D2\u05E8\u05DD",
      "unitsPerPack": 12,
      "barcode": "7290020505019",
      "catalogPage": 23,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p142",
      "manufacturerId": "tozeret",
      "name": "\u05DE\u05D9\u05D5\u05E0\u05D6 \u05D0\u05DE\u05D9\u05EA\u05D9 \u05D1\u05E6\u05E0\u05E6\u05E0\u05EA",
      "categoryName": "\u05E9\u05DE\u05E0\u05D9\u05DD \u05D5\u05E8\u05D8\u05D1\u05D9\u05DD",
      "categorySlug": "oils",
      "weight": "480 \u05D2\u05E8\u05DD",
      "unitsPerPack": 12,
      "barcode": "7290019894889",
      "catalogPage": 23,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p143",
      "manufacturerId": "tozeret",
      "name": "\u05D7\u05E8\u05D3\u05DC \u05D3\u05D9\u05D6'\u05D5\u05DF \u05E6\u05E8\u05E4\u05EA\u05D9 \u05E2\u05DD \u05D2\u05E8\u05D2\u05D9\u05E8\u05D9\u05DD",
      "categoryName": "\u05E9\u05DE\u05E0\u05D9\u05DD \u05D5\u05E8\u05D8\u05D1\u05D9\u05DD",
      "categorySlug": "oils",
      "weight": "5 \u05E7\u05F4\u05D2",
      "unitsPerPack": 2,
      "barcode": "7290018546208",
      "catalogPage": 23,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p144",
      "manufacturerId": "tozeret",
      "name": "\u05E1\u05D9\u05DC\u05D0\u05DF",
      "categoryName": "\u05E9\u05DE\u05E0\u05D9\u05DD \u05D5\u05E8\u05D8\u05D1\u05D9\u05DD",
      "categorySlug": "oils",
      "weight": "385 \u05D2\u05E8\u05DD",
      "unitsPerPack": 24,
      "barcode": "7290019894308",
      "catalogPage": 23,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": "assets/images/products/p-silan.jpg",
      "placeholder": false
    },
    {
      "id": "p145",
      "manufacturerId": "tozeret",
      "name": "\u05D7\u05E8\u05D3\u05DC \u05D3\u05D9\u05D6'\u05D5\u05DF \u05E6\u05E8\u05E4\u05EA\u05D9",
      "categoryName": "\u05E9\u05DE\u05E0\u05D9\u05DD \u05D5\u05E8\u05D8\u05D1\u05D9\u05DD",
      "categorySlug": "oils",
      "weight": "5 \u05E7\u05F4\u05D2",
      "unitsPerPack": 2,
      "barcode": "7290018546215",
      "catalogPage": 23,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p146",
      "manufacturerId": "tozeret",
      "name": "\u05E9\u05DE\u05DF \u05D6\u05D9\u05EA \u05DB\u05EA\u05D9\u05EA \u05DE\u05E2\u05D5\u05DC\u05D4",
      "categoryName": "\u05E9\u05DE\u05E0\u05D9\u05DD \u05D5\u05E8\u05D8\u05D1\u05D9\u05DD",
      "categorySlug": "oils",
      "weight": "750 \u05DE\u05F4\u05DC",
      "unitsPerPack": 12,
      "barcode": "7290019894445",
      "catalogPage": 23,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": "assets/images/products/p-olive.jpg",
      "placeholder": false
    },
    {
      "id": "p147",
      "manufacturerId": "tozeret",
      "name": "\u05E9\u05DE\u05DF \u05E7\u05E0\u05D5\u05DC\u05D4",
      "categoryName": "\u05E9\u05DE\u05E0\u05D9\u05DD \u05D5\u05E8\u05D8\u05D1\u05D9\u05DD",
      "categorySlug": "oils",
      "weight": "1 \u05DC\u05D9\u05D8\u05E8",
      "unitsPerPack": 15,
      "barcode": "7290019894438",
      "catalogPage": 23,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p148",
      "manufacturerId": "tozeret",
      "name": "\u05DB\u05D5\u05E1\u05D1\u05E8\u05D4",
      "categoryName": "\u05EA\u05D1\u05DC\u05D9\u05E0\u05D9\u05DD",
      "categorySlug": "spices",
      "weight": "40 \u05D2\u05E8\u05DD",
      "unitsPerPack": 12,
      "barcode": "7290019894919",
      "catalogPage": 25,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p149",
      "manufacturerId": "tozeret",
      "name": "\u05DE\u05DC\u05D7 \u05DC\u05D9\u05DE\u05D5\u05DF",
      "categoryName": "\u05EA\u05D1\u05DC\u05D9\u05E0\u05D9\u05DD",
      "categorySlug": "spices",
      "weight": "130 \u05D2\u05E8\u05DD",
      "unitsPerPack": 12,
      "barcode": "7290019894995",
      "catalogPage": 25,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p150",
      "manufacturerId": "tozeret",
      "name": "\u05E4\u05DC\u05E4\u05DC \u05E9\u05D7\u05D5\u05E8 \u05D2\u05E8\u05D5\u05E1",
      "categoryName": "\u05EA\u05D1\u05DC\u05D9\u05E0\u05D9\u05DD",
      "categorySlug": "spices",
      "weight": "80 \u05D2\u05E8\u05DD",
      "unitsPerPack": 12,
      "barcode": "7290019894957",
      "catalogPage": 25,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": "assets/images/products/p-pepper-crushed.jpg",
      "placeholder": false
    },
    {
      "id": "p151",
      "manufacturerId": "tozeret",
      "name": "\u05DB\u05D5\u05E8\u05DB\u05D5\u05DD \u05D8\u05D7\u05D5\u05DF",
      "categoryName": "\u05EA\u05D1\u05DC\u05D9\u05E0\u05D9\u05DD",
      "categorySlug": "spices",
      "weight": "100 \u05D2\u05E8\u05DD",
      "unitsPerPack": 12,
      "barcode": "7290019894858",
      "catalogPage": 25,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": "assets/images/products/p-turmeric.jpg",
      "placeholder": false
    },
    {
      "id": "p152",
      "manufacturerId": "tozeret",
      "name": "\u05E4\u05D8\u05E8\u05D5\u05D6\u05D9\u05DC\u05D9\u05D4",
      "categoryName": "\u05EA\u05D1\u05DC\u05D9\u05E0\u05D9\u05DD",
      "categorySlug": "spices",
      "weight": "60 \u05D2\u05E8\u05DD",
      "unitsPerPack": 12,
      "barcode": "7290020505330",
      "catalogPage": 25,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p153",
      "manufacturerId": "tozeret",
      "name": "\u05E9\u05D5\u05DD \u05D2\u05D1\u05D9\u05E9\u05D9",
      "categoryName": "\u05EA\u05D1\u05DC\u05D9\u05E0\u05D9\u05DD",
      "categorySlug": "spices",
      "weight": "100 \u05D2\u05E8\u05DD",
      "unitsPerPack": 12,
      "barcode": "7290020505132",
      "catalogPage": 25,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p154",
      "manufacturerId": "tozeret",
      "name": "\u05E4\u05DC\u05E4\u05DC \u05E9\u05D7\u05D5\u05E8 \u05D8\u05D7\u05D5\u05DF",
      "categoryName": "\u05EA\u05D1\u05DC\u05D9\u05E0\u05D9\u05DD",
      "categorySlug": "spices",
      "weight": "80 \u05D2\u05E8\u05DD",
      "unitsPerPack": 12,
      "barcode": "7290019894940",
      "catalogPage": 25,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": "assets/images/products/p-pepper-ground.jpg",
      "placeholder": false
    },
    {
      "id": "p155",
      "manufacturerId": "tozeret",
      "name": "\u05E7\u05D9\u05E0\u05DE\u05D5\u05DF \u05D8\u05D7\u05D5\u05DF",
      "categoryName": "\u05EA\u05D1\u05DC\u05D9\u05E0\u05D9\u05DD",
      "categorySlug": "spices",
      "weight": "100 \u05D2\u05E8\u05DD",
      "unitsPerPack": 12,
      "barcode": "7290020505064",
      "catalogPage": 25,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p156",
      "manufacturerId": "tozeret",
      "name": "\u05D0\u05D5\u05E8\u05D2\u05E0\u05D5",
      "categoryName": "\u05EA\u05D1\u05DC\u05D9\u05E0\u05D9\u05DD",
      "categorySlug": "spices",
      "weight": "50 \u05D2\u05E8\u05DD",
      "unitsPerPack": 12,
      "barcode": "7290020505347",
      "catalogPage": 25,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p157",
      "manufacturerId": "tozeret",
      "name": "\u05D8\u05D9\u05DE\u05D9\u05DF \u05E7\u05D5\u05E8\u05E0\u05D9\u05EA",
      "categoryName": "\u05EA\u05D1\u05DC\u05D9\u05E0\u05D9\u05DD",
      "categorySlug": "spices",
      "weight": "50 \u05D2\u05E8\u05DD",
      "unitsPerPack": 12,
      "barcode": "7290020505316",
      "catalogPage": 25,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p158",
      "manufacturerId": "tozeret",
      "name": "\u05D1\u05D6\u05D9\u05DC\u05D9\u05E7\u05D5\u05DD \u05E8\u05D9\u05D7\u05DF",
      "categoryName": "\u05EA\u05D1\u05DC\u05D9\u05E0\u05D9\u05DD",
      "categorySlug": "spices",
      "weight": "50 \u05D2\u05E8\u05DD",
      "unitsPerPack": 12,
      "barcode": "7290020505323",
      "catalogPage": 25,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p159",
      "manufacturerId": "tozeret",
      "name": "\u05DB\u05DE\u05D5\u05DF \u05D8\u05D7\u05D5\u05DF",
      "categoryName": "\u05EA\u05D1\u05DC\u05D9\u05E0\u05D9\u05DD",
      "categorySlug": "spices",
      "weight": "100 \u05D2\u05E8\u05DD",
      "unitsPerPack": 12,
      "barcode": "7290019894902",
      "catalogPage": 25,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p160",
      "manufacturerId": "tozeret",
      "name": "\u05EA\u05E2\u05E8\u05D5\u05D1\u05EA \u05DC\u05D4\u05DB\u05E0\u05EA \u05E7\u05E6\u05D9\u05E6\u05D5\u05EA",
      "categoryName": "\u05EA\u05D1\u05DC\u05D9\u05E0\u05D9\u05DD",
      "categorySlug": "spices",
      "weight": "100 \u05D2\u05E8\u05DD",
      "unitsPerPack": 12,
      "barcode": "7290020505057",
      "catalogPage": 26,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p161",
      "manufacturerId": "tozeret",
      "name": "\u05E6\u05F3\u05D9\u05DC\u05D9 \u05DE\u05E7\u05E1\u05D9\u05E7\u05E0\u05D9",
      "categoryName": "\u05EA\u05D1\u05DC\u05D9\u05E0\u05D9\u05DD",
      "categorySlug": "spices",
      "weight": "100 \u05D2\u05E8\u05DD",
      "unitsPerPack": 12,
      "barcode": "7290020505088",
      "catalogPage": 26,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p162",
      "manufacturerId": "tozeret",
      "name": "\u05EA\u05E2\u05E8\u05D5\u05D1\u05EA \u05E4\u05D9\u05DC\u05D3\u05DC\u05E4\u05D9\u05D4",
      "categoryName": "\u05EA\u05D1\u05DC\u05D9\u05E0\u05D9\u05DD",
      "categorySlug": "spices",
      "weight": "100 \u05D2\u05E8\u05DD",
      "unitsPerPack": 12,
      "barcode": "7290020505309",
      "catalogPage": 26,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p163",
      "manufacturerId": "tozeret",
      "name": "\u05EA\u05E2\u05E8\u05D5\u05D1\u05EA \u05D8\u05D5\u05E1\u05E7\u05E0\u05D4",
      "categoryName": "\u05EA\u05D1\u05DC\u05D9\u05E0\u05D9\u05DD",
      "categorySlug": "spices",
      "weight": "100 \u05D2\u05E8\u05DD",
      "unitsPerPack": 12,
      "barcode": "7290020505309",
      "catalogPage": 26,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p164",
      "manufacturerId": "tozeret",
      "name": "\u05D6\u05E2\u05EA\u05E8 \u05E2\u05DD \u05E9\u05D5\u05DE\u05E9\u05D5\u05DD",
      "categoryName": "\u05EA\u05D1\u05DC\u05D9\u05E0\u05D9\u05DD",
      "categorySlug": "spices",
      "weight": "100 \u05D2\u05E8\u05DD",
      "unitsPerPack": 12,
      "barcode": "7290019894933",
      "catalogPage": 26,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p165",
      "manufacturerId": "tozeret",
      "name": "\u05EA\u05E2\u05E8\u05D5\u05D1\u05EA \u05E8\u05D0\u05E1 \u05D0\u05DC \u05D7\u05E0\u05D5\u05EA",
      "categoryName": "\u05EA\u05D1\u05DC\u05D9\u05E0\u05D9\u05DD",
      "categorySlug": "spices",
      "weight": "100 \u05D2\u05E8\u05DD",
      "unitsPerPack": 12,
      "barcode": "7290020505149",
      "catalogPage": 26,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p166",
      "manufacturerId": "tozeret",
      "name": "\u05EA\u05E2\u05E8\u05D5\u05D1\u05EA \u05E7\u05D0\u05E8\u05D9 \u05DE\u05E1\u05D0\u05DC\u05D4",
      "categoryName": "\u05EA\u05D1\u05DC\u05D9\u05E0\u05D9\u05DD",
      "categorySlug": "spices",
      "weight": "100 \u05D2\u05E8\u05DD",
      "unitsPerPack": 12,
      "barcode": "7290020505071",
      "catalogPage": 26,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p167",
      "manufacturerId": "tozeret",
      "name": "\u05EA\u05E2\u05E8\u05D5\u05D1\u05EA \u05D7\u05D5\u05D5\u05D9\u05D0\u05D2\u05F3 \u05DC\u05DE\u05E8\u05E7",
      "categoryName": "\u05EA\u05D1\u05DC\u05D9\u05E0\u05D9\u05DD",
      "categorySlug": "spices",
      "weight": "100 \u05D2\u05E8\u05DD",
      "unitsPerPack": 12,
      "barcode": "7290019894926",
      "catalogPage": 26,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p168",
      "manufacturerId": "tozeret",
      "name": "\u05EA\u05E2\u05E8\u05D5\u05D1\u05EA \u05DC\u05D4\u05DB\u05E0\u05EA \u05E2\u05DC \u05D4\u05D0\u05E9",
      "categoryName": "\u05EA\u05D1\u05DC\u05D9\u05E0\u05D9\u05DD",
      "categorySlug": "spices",
      "weight": "100 \u05D2\u05E8\u05DD",
      "unitsPerPack": 12,
      "barcode": "7290019894971",
      "catalogPage": 26,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p169",
      "manufacturerId": "tozeret",
      "name": "\u05EA\u05E2\u05E8\u05D5\u05D1\u05EA \u05DC\u05D4\u05DB\u05E0\u05EA \u05E2\u05D5\u05E3 \u05E6\u05DC\u05D5\u05D9 \u05E2\u05DD \u05E2\u05E9\u05D1\u05D9 \u05EA\u05D9\u05D1\u05D5\u05DC",
      "categoryName": "\u05EA\u05D1\u05DC\u05D9\u05E0\u05D9\u05DD",
      "categorySlug": "spices",
      "weight": "100 \u05D2\u05E8\u05DD",
      "unitsPerPack": 12,
      "barcode": "7290019894988",
      "catalogPage": 26,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p170",
      "manufacturerId": "tozeret",
      "name": "\u05E4\u05E4\u05E8\u05D9\u05E7\u05D4 \u05DE\u05EA\u05D5\u05E7\u05D4 \u05D1\u05E9\u05DE\u05DF",
      "categoryName": "\u05EA\u05D1\u05DC\u05D9\u05E0\u05D9\u05DD",
      "categorySlug": "spices",
      "weight": "350 \u05D2\u05E8\u05DD",
      "unitsPerPack": 15,
      "barcode": "7290002862048",
      "catalogPage": 27,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p171",
      "manufacturerId": "tozeret",
      "name": "\u05E4\u05E4\u05E8\u05D9\u05E7\u05D4 \u05DE\u05EA\u05D5\u05E7\u05D4 \u05D1\u05E9\u05DE\u05DF (\u05E9\u05E7\u05D9\u05EA)",
      "categoryName": "\u05EA\u05D1\u05DC\u05D9\u05E0\u05D9\u05DD",
      "categorySlug": "spices",
      "weight": "400 \u05D2\u05E8\u05DD",
      "unitsPerPack": 20,
      "barcode": "7290002862352",
      "catalogPage": 27,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p172",
      "manufacturerId": "tozeret",
      "name": "\u05E4\u05E4\u05E8\u05D9\u05E7\u05D4 \u05DE\u05EA\u05D5\u05E7\u05D4 \u05E2\u05DD \u05E9\u05DE\u05DF",
      "categoryName": "\u05EA\u05D1\u05DC\u05D9\u05E0\u05D9\u05DD",
      "categorySlug": "spices",
      "weight": "100 \u05D2\u05E8\u05DD",
      "unitsPerPack": 12,
      "barcode": "7290019894964",
      "catalogPage": 27,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": "assets/images/products/p-paprika-oil.jpg",
      "placeholder": false
    },
    {
      "id": "p173",
      "manufacturerId": "tozeret",
      "name": "\u05E4\u05E4\u05E8\u05D9\u05E7\u05D4 \u05D7\u05E8\u05D9\u05E4\u05D4",
      "categoryName": "\u05EA\u05D1\u05DC\u05D9\u05E0\u05D9\u05DD",
      "categorySlug": "spices",
      "weight": "100 \u05D2\u05E8\u05DD",
      "unitsPerPack": 12,
      "barcode": "7290020505095",
      "catalogPage": 27,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": "assets/images/products/p-paprika-hot.jpg",
      "placeholder": false
    },
    {
      "id": "p174",
      "manufacturerId": "tozeret",
      "name": "\u05E4\u05E4\u05E8\u05D9\u05E7\u05D4 \u05DE\u05EA\u05D5\u05E7\u05D4",
      "categoryName": "\u05EA\u05D1\u05DC\u05D9\u05E0\u05D9\u05DD",
      "categorySlug": "spices",
      "weight": "100 \u05D2\u05E8\u05DD",
      "unitsPerPack": 12,
      "barcode": "7290019894865",
      "catalogPage": 27,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": "assets/images/products/p-paprika.jpg",
      "placeholder": false
    },
    {
      "id": "p175",
      "manufacturerId": "tozeret",
      "name": "\u05E7\u05D5\u05E7\u05D5\u05E1 \u05D8\u05D7\u05D5\u05DF",
      "categoryName": "\u05DE\u05D5\u05E6\u05E8\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD",
      "categorySlug": "more",
      "weight": "700 \u05D2\u05E8\u05DD",
      "unitsPerPack": 15,
      "barcode": "7296079000819",
      "catalogPage": 29,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p176",
      "manufacturerId": "tozeret",
      "name": "\u05E7\u05D5\u05E7\u05D5\u05E1 \u05D8\u05D7\u05D5\u05DF",
      "categoryName": "\u05DE\u05D5\u05E6\u05E8\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD",
      "categorySlug": "more",
      "weight": "150 \u05D2\u05E8\u05DD",
      "unitsPerPack": 36,
      "barcode": "7290003470129",
      "catalogPage": 29,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p177",
      "manufacturerId": "tozeret",
      "name": "\u05D6\u05E8\u05E2\u05D9 \u05E6\u05D9'\u05D4",
      "categoryName": "\u05DE\u05D5\u05E6\u05E8\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD",
      "categorySlug": "more",
      "weight": "200 \u05D2\u05E8\u05DD",
      "unitsPerPack": 30,
      "barcode": "7296079000772",
      "catalogPage": 29,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p178",
      "manufacturerId": "tozeret",
      "name": "\u05E1\u05D5\u05DB\u05E8 \u05D3\u05DE\u05E8\u05E8\u05D4",
      "categoryName": "\u05DE\u05D5\u05E6\u05E8\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD",
      "categorySlug": "more",
      "weight": "1 \u05E7\u05F4\u05D2",
      "unitsPerPack": 15,
      "barcode": "7296079000253",
      "catalogPage": 29,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p179",
      "manufacturerId": "tozeret",
      "name": "\u05E4\u05E8\u05D2",
      "categoryName": "\u05DE\u05D5\u05E6\u05E8\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD",
      "categorySlug": "more",
      "weight": "200 \u05D2\u05E8\u05DD",
      "unitsPerPack": 30,
      "barcode": "7290003470433",
      "catalogPage": 29,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p180",
      "manufacturerId": "tozeret",
      "name": "\u05D6\u05E8\u05E2\u05D9 \u05E4\u05E9\u05EA\u05DF",
      "categoryName": "\u05DE\u05D5\u05E6\u05E8\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD",
      "categorySlug": "more",
      "weight": "200 \u05D2\u05E8\u05DD",
      "unitsPerPack": 36,
      "barcode": "7296079000833",
      "catalogPage": 29,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p181",
      "manufacturerId": "tozeret",
      "name": "\u05E9\u05D5\u05DE\u05E9\u05D5\u05DD",
      "categoryName": "\u05DE\u05D5\u05E6\u05E8\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD",
      "categorySlug": "more",
      "weight": "200 \u05D2\u05E8\u05DD",
      "unitsPerPack": 36,
      "barcode": "7290003470389",
      "catalogPage": 29,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p182",
      "manufacturerId": "tozeret",
      "name": "\u05E9\u05D5\u05DE\u05E9\u05D5\u05DD",
      "categoryName": "\u05DE\u05D5\u05E6\u05E8\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD",
      "categorySlug": "more",
      "weight": "25 \u05E7\u05F4\u05D2",
      "unitsPerPack": 15,
      "barcode": "7296079000093",
      "catalogPage": 29,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p183",
      "manufacturerId": "tozeret",
      "name": "\u05E7\u05D5\u05E8\u05E0\u05E4\u05DC\u05E7\u05E1",
      "categoryName": "\u05DE\u05D5\u05E6\u05E8\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD",
      "categorySlug": "more",
      "weight": "850 \u05D2\u05E8\u05DD",
      "unitsPerPack": 12,
      "barcode": "7290020505217",
      "catalogPage": 29,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p184",
      "manufacturerId": "tozeret",
      "name": "\u05E7\u05D5\u05E8\u05E0\u05E4\u05DC\u05E7\u05E1 \u05DC\u05DC\u05D0 \u05D2\u05DC\u05D5\u05D8\u05DF",
      "categoryName": "\u05DE\u05D5\u05E6\u05E8\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD",
      "categorySlug": "more",
      "weight": "500 \u05D2\u05E8\u05DD",
      "unitsPerPack": 10,
      "barcode": "7290020505354",
      "catalogPage": 29,
      "brand": "\u05EA\u05D5\u05E6\u05E8\u05EA",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p185",
      "manufacturerId": "sample-a",
      "name": "\u05E6\u05DC\u05D7\u05D5\u05EA \u05D2\u05D3\u05D5\u05DC\u05D5\u05EA \u05D7\u05D3 \u05E4\u05E2\u05DE\u05D9\u05D5\u05EA",
      "categoryName": "\u05D7\u05D3 \u05E4\u05E2\u05DE\u05D9",
      "categorySlug": "disposables",
      "weight": "1 \u05E7\u05F4\u05D2",
      "unitsPerPack": 1,
      "barcode": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "catalogPage": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "brand": "\u05D0\u05DC\u05D2\u05E0\u05D8",
      "image": "assets/images/products/p-plates-large.webp",
      "placeholder": true
    },
    {
      "id": "p186",
      "manufacturerId": "sample-a",
      "name": "\u05E6\u05DC\u05D7\u05EA \u05D2\u05D3\u05D5\u05DC\u05D4 \u05DC\u05D1\u05E0\u05D4",
      "categoryName": "\u05D7\u05D3 \u05E4\u05E2\u05DE\u05D9",
      "categorySlug": "disposables",
      "weight": "\u05D2\u05D3\u05D5\u05DC\u05D4",
      "unitsPerPack": 25,
      "barcode": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "catalogPage": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "brand": "\u05D0\u05DC\u05D2\u05E0\u05D8",
      "image": "assets/images/products/p-plate-large-white.webp",
      "placeholder": true
    },
    {
      "id": "p187",
      "manufacturerId": "sample-a",
      "name": "\u05E6\u05DC\u05D7\u05D5\u05EA \u05E7\u05D8\u05E0\u05D5\u05EA",
      "categoryName": "\u05D7\u05D3 \u05E4\u05E2\u05DE\u05D9",
      "categorySlug": "disposables",
      "weight": "\u05E7\u05D8\u05E0\u05D4",
      "unitsPerPack": 25,
      "barcode": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "catalogPage": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "brand": "\u05D0\u05DC\u05D2\u05E0\u05D8",
      "image": "assets/images/products/p-plates-large.webp",
      "placeholder": true
    },
    {
      "id": "p188",
      "manufacturerId": "sample-a",
      "name": "\u05DB\u05D5\u05E1\u05D5\u05EA \u05E0\u05D9\u05D9\u05E8 \u05DC\u05E9\u05EA\u05D9\u05D9\u05D4 \u05D7\u05DE\u05D4",
      "categoryName": "\u05D7\u05D3 \u05E4\u05E2\u05DE\u05D9",
      "categorySlug": "disposables",
      "weight": "12 \u05D0\u05D5\u05E0\u05E7\u05D9\u05D4",
      "unitsPerPack": 40,
      "barcode": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "catalogPage": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "brand": "\u05D7\u05D3 \u05E4\u05E2\u05DE\u05D9",
      "image": "assets/images/products/p-cups-coffee.webp",
      "placeholder": true
    },
    {
      "id": "p189",
      "manufacturerId": "sample-a",
      "name": "\u05DB\u05D5\u05E1\u05D5\u05EA \u05DE\u05EA\u05DB\u05DC\u05D5\u05EA \u05DC\u05E9\u05EA\u05D9\u05D9\u05D4 \u05D7\u05DE\u05D4",
      "categoryName": "\u05D7\u05D3 \u05E4\u05E2\u05DE\u05D9",
      "categorySlug": "disposables",
      "weight": "240 \u05DE\u05F4\u05DC",
      "unitsPerPack": 50,
      "barcode": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "catalogPage": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "brand": "\u05D0\u05E7\u05D5\u05D2\u05D5",
      "image": "assets/images/products/p-cups-pattern.webp",
      "placeholder": true
    },
    {
      "id": "p190",
      "manufacturerId": "sample-a",
      "name": "\u05E6\u05F3\u05D5\u05E4\u05E1\u05D8\u05D9\u05E7\u05E1 \u05D7\u05D3 \u05E4\u05E2\u05DE\u05D9",
      "categoryName": "\u05D7\u05D3 \u05E4\u05E2\u05DE\u05D9",
      "categorySlug": "disposables",
      "weight": "20 \u05D6\u05D5\u05D2\u05D5\u05EA",
      "unitsPerPack": 20,
      "barcode": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "catalogPage": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "brand": "\u05D8\u05E2\u05DE\u05D9 \u05D0\u05E1\u05D9\u05D4",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p191",
      "manufacturerId": "sample-a",
      "name": "\u05E7\u05D5\u05E4\u05E1\u05EA \u05D0\u05D7\u05E1\u05D5\u05DF \u05E2\u05DD \u05DE\u05DB\u05E1\u05D4",
      "categoryName": "\u05DB\u05DC\u05D9 \u05D1\u05D9\u05EA",
      "categorySlug": "household",
      "weight": "18\xD725\xD715 \u05E1\u05F4\u05DE",
      "unitsPerPack": 1,
      "barcode": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "catalogPage": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "brand": "\u05D0\u05D9\u05E7\u05D0\u05D4",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p192",
      "manufacturerId": "sample-a",
      "name": "\u05E7\u05D5\u05E4\u05E1\u05EA \u05D0\u05D7\u05E1\u05D5\u05DF \u05E2\u05DD \u05DE\u05DB\u05E1\u05D4",
      "categoryName": "\u05DB\u05DC\u05D9 \u05D1\u05D9\u05EA",
      "categorySlug": "household",
      "weight": "25\xD735\xD720 \u05E1\u05F4\u05DE",
      "unitsPerPack": 1,
      "barcode": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "catalogPage": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "brand": "\u05D0\u05D9\u05E7\u05D0\u05D4",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p193",
      "manufacturerId": "sample-a",
      "name": "\u05E7\u05D5\u05E4\u05E1\u05EA \u05D0\u05D7\u05E1\u05D5\u05DF \u05DE\u05E0\u05D5\u05E7\u05D3\u05EA",
      "categoryName": "\u05DB\u05DC\u05D9 \u05D1\u05D9\u05EA",
      "categorySlug": "household",
      "weight": "25\xD735\xD716 \u05E1\u05F4\u05DE",
      "unitsPerPack": 1,
      "barcode": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "catalogPage": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "brand": "\u05D0\u05D9\u05E7\u05D0\u05D4",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p194",
      "manufacturerId": "sample-a",
      "name": "\u05E7\u05D5\u05E4\u05E1\u05EA \u05D0\u05D7\u05E1\u05D5\u05DF \u05DE\u05D6\u05D5\u05DF \u05E2\u05DD \u05DE\u05DB\u05E1\u05D4",
      "categoryName": "\u05DB\u05DC\u05D9 \u05D1\u05D9\u05EA",
      "categorySlug": "household",
      "weight": "1 \u05DC\u05D9\u05D8\u05E8",
      "unitsPerPack": 3,
      "barcode": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "catalogPage": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "brand": "\u05D0\u05D9\u05E7\u05D0\u05D4",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p195",
      "manufacturerId": "sample-a",
      "name": "\u05E0\u05D5\u05D6\u05DC \u05DB\u05DC\u05D9\u05DD \u05DC\u05D9\u05DE\u05D5\u05DF 24%",
      "categoryName": "\u05E0\u05D9\u05E7\u05D9\u05D5\u05DF",
      "categorySlug": "cleaning",
      "weight": "750 \u05DE\u05F4\u05DC",
      "unitsPerPack": 1,
      "barcode": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "catalogPage": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "brand": "\u05E8\u05DE\u05D9 \u05DC\u05D5\u05D9",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p196",
      "manufacturerId": "sample-a",
      "name": "\u05E9\u05E7\u05D9\u05D5\u05EA \u05D0\u05E9\u05E4\u05D4",
      "categoryName": "\u05E0\u05D9\u05E7\u05D9\u05D5\u05DF",
      "categorySlug": "cleaning",
      "weight": "25 \u05D9\u05D7\u05D9\u05D3\u05D5\u05EA",
      "unitsPerPack": 25,
      "barcode": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "catalogPage": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "brand": "\u05E8\u05DE\u05D9 \u05DC\u05D5\u05D9",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p197",
      "manufacturerId": "sample-a",
      "name": "\u05E0\u05D5\u05D6\u05DC \u05E8\u05E6\u05E4\u05D5\u05EA",
      "categoryName": "\u05E0\u05D9\u05E7\u05D9\u05D5\u05DF",
      "categorySlug": "cleaning",
      "weight": "2 \u05DC\u05D9\u05D8\u05E8",
      "unitsPerPack": 1,
      "barcode": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "catalogPage": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "brand": "\u05E8\u05DE\u05D9 \u05DC\u05D5\u05D9",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p198",
      "manufacturerId": "sample-a",
      "name": "\u05D1\u05DC\u05E0\u05D3\u05E8 \u05DE\u05D5\u05D8 4 \u05D1-1",
      "categoryName": "\u05DE\u05DB\u05E9\u05D9\u05E8\u05D9 \u05D7\u05E9\u05DE\u05DC",
      "categorySlug": "appliances",
      "weight": "500 \u05D5\u05D5\u05D0\u05D8",
      "unitsPerPack": 1,
      "barcode": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "catalogPage": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "brand": "Arrow",
      "image": "assets/images/products/mall/p198.webp",
      "placeholder": true
    },
    {
      "id": "p199",
      "manufacturerId": "sample-a",
      "name": "\u05D1\u05DC\u05E0\u05D3\u05E8 \u05DE\u05D5\u05D8",
      "categoryName": "\u05DE\u05DB\u05E9\u05D9\u05E8\u05D9 \u05D7\u05E9\u05DE\u05DC",
      "categorySlug": "appliances",
      "weight": "1500 \u05D5\u05D5\u05D0\u05D8",
      "unitsPerPack": 1,
      "barcode": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "catalogPage": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "brand": "Black+Decker",
      "image": "assets/images/products/mall/p199.webp",
      "placeholder": true
    },
    {
      "id": "p200",
      "manufacturerId": "sample-a",
      "name": "\u05DE\u05D0\u05D5\u05D5\u05E8\u05E8 \u05DE\u05D2\u05D3\u05DC",
      "categoryName": "\u05DE\u05DB\u05E9\u05D9\u05E8\u05D9 \u05D7\u05E9\u05DE\u05DC",
      "categorySlug": "appliances",
      "weight": "\u05E2\u05DD \u05E9\u05DC\u05D8",
      "unitsPerPack": 1,
      "barcode": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "catalogPage": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "brand": "Star",
      "image": "assets/images/products/mall/p200.webp",
      "placeholder": true
    },
    {
      "id": "p201",
      "manufacturerId": "sample-a",
      "name": "\u05E7\u05D5\u05DE\u05E7\u05D5\u05DD \u05D7\u05E9\u05DE\u05DC\u05D9",
      "categoryName": "\u05DE\u05DB\u05E9\u05D9\u05E8\u05D9 \u05D7\u05E9\u05DE\u05DC",
      "categorySlug": "appliances",
      "weight": "1.7 \u05DC\u05D9\u05D8\u05E8",
      "unitsPerPack": 1,
      "barcode": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "catalogPage": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "brand": "Smeg",
      "image": "assets/images/products/p-kettle-green.webp",
      "placeholder": true
    },
    {
      "id": "p202",
      "manufacturerId": "sample-a",
      "name": "\u05DE\u05E0\u05D5\u05E8\u05EA \u05E9\u05D5\u05DC\u05D7\u05DF \u05E0\u05D8\u05E2\u05E0\u05EA",
      "categoryName": "\u05EA\u05D0\u05D5\u05E8\u05D4",
      "categorySlug": "lighting",
      "weight": "LED",
      "unitsPerPack": 1,
      "barcode": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "catalogPage": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "brand": "Peled",
      "image": "assets/images/products/mall/p202.webp",
      "placeholder": true
    },
    {
      "id": "p203",
      "manufacturerId": "sample-a",
      "name": "\u05DE\u05E0\u05D5\u05E8\u05EA \u05DC\u05D3 \u05E0\u05D9\u05D9\u05D3\u05EA",
      "categoryName": "\u05EA\u05D0\u05D5\u05E8\u05D4",
      "categorySlug": "lighting",
      "weight": "22 \u05E1\u05F4\u05DE",
      "unitsPerPack": 1,
      "barcode": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "catalogPage": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "brand": "\u05D0\u05D9\u05E7\u05D0\u05D4",
      "image": "assets/images/products/mall/p203.webp",
      "placeholder": true
    },
    {
      "id": "p204",
      "manufacturerId": "sample-a",
      "name": "\u05E0\u05D5\u05E8\u05EA \u05DC\u05D3 E27",
      "categoryName": "\u05EA\u05D0\u05D5\u05E8\u05D4",
      "categorySlug": "lighting",
      "weight": "470 \u05DC\u05D5\u05DE\u05DF",
      "unitsPerPack": 2,
      "barcode": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "catalogPage": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "brand": "\u05D0\u05D9\u05E7\u05D0\u05D4",
      "image": "assets/images/products/mall/p204.webp",
      "placeholder": true
    },
    {
      "id": "p205",
      "manufacturerId": "sample-a",
      "name": "\u05E1\u05D5\u05DC\u05DC\u05D5\u05EA AA \u05E0\u05D8\u05E2\u05E0\u05D5\u05EA",
      "categoryName": "\u05D0\u05DC\u05E7\u05D8\u05E8\u05D5\u05E0\u05D9\u05E7\u05D4",
      "categorySlug": "gadgets",
      "weight": "2400mAh",
      "unitsPerPack": 4,
      "barcode": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "catalogPage": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "brand": "Nitecore",
      "image": "assets/images/products/mall/p205.webp",
      "placeholder": true
    },
    {
      "id": "p206",
      "manufacturerId": "sample-a",
      "name": "\u05E1\u05D5\u05DC\u05DC\u05D5\u05EA AA \u05E0\u05D8\u05E2\u05E0\u05D5\u05EA",
      "categoryName": "\u05D0\u05DC\u05E7\u05D8\u05E8\u05D5\u05E0\u05D9\u05E7\u05D4",
      "categorySlug": "gadgets",
      "weight": "2450mAh",
      "unitsPerPack": 4,
      "barcode": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "catalogPage": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "brand": "\u05D0\u05D9\u05E7\u05D0\u05D4",
      "image": "assets/images/products/mall/p206.webp",
      "placeholder": true
    },
    {
      "id": "p207",
      "manufacturerId": "sample-a",
      "name": "\u05E1\u05D5\u05DC\u05DC\u05D5\u05EA AA \u05E0\u05D8\u05E2\u05E0\u05D5\u05EA Type-C",
      "categoryName": "\u05D0\u05DC\u05E7\u05D8\u05E8\u05D5\u05E0\u05D9\u05E7\u05D4",
      "categorySlug": "gadgets",
      "weight": "1400mAh",
      "unitsPerPack": 12,
      "barcode": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "catalogPage": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "brand": "Zeero",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p208",
      "manufacturerId": "sample-a",
      "name": "\u05DE\u05D2\u05D1\u05D5\u05EA \u05DE\u05D8\u05D1\u05D7",
      "categoryName": "\u05DB\u05DC\u05D9 \u05D1\u05D9\u05EA",
      "categorySlug": "household",
      "weight": "45\xD760 \u05E1\u05F4\u05DE",
      "unitsPerPack": 4,
      "barcode": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "catalogPage": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "brand": "\u05D0\u05D9\u05E7\u05D0\u05D4",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p209",
      "manufacturerId": "sample-a",
      "name": "\u05DE\u05D2\u05D1\u05D5\u05EA \u05E0\u05D9\u05D9\u05E8",
      "categoryName": "\u05E0\u05D9\u05E7\u05D9\u05D5\u05DF",
      "categorySlug": "cleaning",
      "weight": "6 \u05D2\u05DC\u05D9\u05DC\u05D9\u05DD",
      "unitsPerPack": 6,
      "barcode": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "catalogPage": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "brand": "\u05E8\u05DE\u05D9 \u05DC\u05D5\u05D9",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p210",
      "manufacturerId": "sample-a",
      "name": "\u05DE\u05D2\u05D1\u05D5\u05EA \u05E0\u05D9\u05D9\u05E8",
      "categoryName": "\u05E0\u05D9\u05E7\u05D9\u05D5\u05DF",
      "categorySlug": "cleaning",
      "weight": "8 \u05D2\u05DC\u05D9\u05DC\u05D9\u05DD",
      "unitsPerPack": 8,
      "barcode": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "catalogPage": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "brand": "\u05E8\u05DE\u05D9 \u05DC\u05D5\u05D9",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p211",
      "manufacturerId": "sample-a",
      "name": "\u05D8\u05D5\u05E1\u05D8\u05E8 \u05DC\u05D7\u05D9\u05E6\u05D4",
      "categoryName": "\u05DE\u05DB\u05E9\u05D9\u05E8\u05D9 \u05D7\u05E9\u05DE\u05DC",
      "categorySlug": "appliances",
      "weight": "2 \u05E4\u05E8\u05D5\u05E1\u05D5\u05EA",
      "unitsPerPack": 1,
      "barcode": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "catalogPage": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "brand": "Hyundai",
      "image": "assets/images/products/p-contact-grill.webp",
      "placeholder": true
    },
    {
      "id": "p212",
      "manufacturerId": "sample-a",
      "name": "\u05EA\u05D0\u05D5\u05E8\u05EA \u05D7\u05D9\u05E8\u05D5\u05DD",
      "categoryName": "\u05EA\u05D0\u05D5\u05E8\u05D4",
      "categorySlug": "lighting",
      "weight": "\u05E2\u05D3 3 \u05E9\u05E2\u05D5\u05EA",
      "unitsPerPack": 1,
      "barcode": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "catalogPage": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "brand": "\u05D0\u05DC\u05E7\u05D8\u05E8\u05D5 \u05D7\u05E0\u05DF",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p213",
      "manufacturerId": "sample-a",
      "name": "\u05E0\u05D5\u05E8\u05EA \u05D7\u05D9\u05E8\u05D5\u05DD \u05E0\u05D8\u05E2\u05E0\u05EA",
      "categoryName": "\u05EA\u05D0\u05D5\u05E8\u05D4",
      "categorySlug": "lighting",
      "weight": "E27",
      "unitsPerPack": 1,
      "barcode": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "catalogPage": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "brand": "LED",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p214",
      "manufacturerId": "sample-a",
      "name": "\u05DE\u05D8\u05E2\u05DF USB-C",
      "categoryName": "\u05D0\u05DC\u05E7\u05D8\u05E8\u05D5\u05E0\u05D9\u05E7\u05D4",
      "categorySlug": "gadgets",
      "weight": "20 \u05D5\u05D5\u05D0\u05D8",
      "unitsPerPack": 1,
      "barcode": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "catalogPage": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "brand": "\u05D0\u05D9\u05E7\u05D0\u05D4",
      "image": "assets/images/products/mall/p214.webp",
      "placeholder": true
    },
    {
      "id": "p215",
      "manufacturerId": "sample-a",
      "name": "\u05D0\u05D5\u05D6\u05E0\u05D9\u05D5\u05EA \u05E7\u05DC\u05D9\u05E4",
      "categoryName": "\u05D0\u05DC\u05E7\u05D8\u05E8\u05D5\u05E0\u05D9\u05E7\u05D4",
      "categorySlug": "gadgets",
      "weight": "\u05D1\u05DC\u05D5\u05D8\u05D5\u05EA\u05F3",
      "unitsPerPack": 1,
      "barcode": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "catalogPage": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "brand": "Clip On",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p216",
      "manufacturerId": "sample-a",
      "name": "\u05D8\u05D5\u05E8\u05D8\u05D9\u05D9\u05D4 \u05DE\u05E7\u05DE\u05D7 \u05D7\u05D9\u05D8\u05D4",
      "categoryName": "\u05D8\u05D5\u05E8\u05D8\u05D9\u05D5\u05EA",
      "categorySlug": "tortillas",
      "weight": "700 \u05D2\u05E8\u05DD",
      "unitsPerPack": 10,
      "barcode": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "catalogPage": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "brand": "\u05E9\u05E7\u05D3\u05D9\u05D4",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p217",
      "manufacturerId": "sample-a",
      "name": "\u05DB\u05E4\u05D9\u05D5\u05EA \u05D7\u05D3 \u05E4\u05E2\u05DE\u05D9\u05D5\u05EA \u05E9\u05E7\u05D5\u05E4\u05D5\u05EA",
      "categoryName": "\u05D7\u05D3 \u05E4\u05E2\u05DE\u05D9",
      "categorySlug": "disposables",
      "weight": "\u05E9\u05E7\u05D5\u05E4\u05D5\u05EA",
      "unitsPerPack": 50,
      "barcode": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "catalogPage": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "brand": "\u05E1\u05E0\u05D5 \u05E1\u05D5\u05E9\u05D9",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p218",
      "manufacturerId": "sample-a",
      "name": "\u05DE\u05D6\u05DC\u05D2\u05D5\u05EA \u05D7\u05D3 \u05E4\u05E2\u05DE\u05D9\u05D9\u05DD",
      "categoryName": "\u05D7\u05D3 \u05E4\u05E2\u05DE\u05D9",
      "categorySlug": "disposables",
      "weight": "\u05E9\u05E7\u05D5\u05E4\u05D9\u05DD",
      "unitsPerPack": 50,
      "barcode": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "catalogPage": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "brand": "\u05D0\u05D9\u05E8\u05D5\u05D7",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p219",
      "manufacturerId": "sample-a",
      "name": "\u05E1\u05DB\u05D9\u05E0\u05D9\u05DD \u05D7\u05D3 \u05E4\u05E2\u05DE\u05D9\u05D9\u05DD",
      "categoryName": "\u05D7\u05D3 \u05E4\u05E2\u05DE\u05D9",
      "categorySlug": "disposables",
      "weight": "\u05E9\u05E7\u05D5\u05E4\u05D9\u05DD",
      "unitsPerPack": 50,
      "barcode": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "catalogPage": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "brand": "\u05D0\u05D9\u05E8\u05D5\u05D7",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p220",
      "manufacturerId": "sample-a",
      "name": "\u05DE\u05E4\u05D9\u05D5\u05EA \u05D0\u05D9\u05E8\u05D5\u05D7",
      "categoryName": "\u05D7\u05D3 \u05E4\u05E2\u05DE\u05D9",
      "categorySlug": "disposables",
      "weight": "40\xD740 \u05E1\u05F4\u05DE",
      "unitsPerPack": 50,
      "barcode": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "catalogPage": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "brand": "\u05E1\u05E0\u05D5 \u05E1\u05D5\u05E9\u05D9",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p221",
      "manufacturerId": "sample-a",
      "name": "\u05E7\u05E2\u05E8\u05D5\u05EA \u05E7\u05D8\u05E0\u05D5\u05EA",
      "categoryName": "\u05DB\u05DC\u05D9 \u05D1\u05D9\u05EA",
      "categorySlug": "household",
      "weight": "10 \u05E1\u05F4\u05DE",
      "unitsPerPack": 3,
      "barcode": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "catalogPage": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "brand": "\u05D0\u05D9\u05E7\u05D0\u05D4",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p222",
      "manufacturerId": "sample-a",
      "name": "\u05E1\u05E4\u05DC",
      "categoryName": "\u05DB\u05DC\u05D9 \u05D1\u05D9\u05EA",
      "categorySlug": "household",
      "weight": "30 \u05E1\u05F4\u05DC",
      "unitsPerPack": 1,
      "barcode": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "catalogPage": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "brand": "\u05D0\u05D9\u05E7\u05D0\u05D4",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p223",
      "manufacturerId": "sample-a",
      "name": "\u05E6\u05DC\u05D7\u05EA \u05D0\u05D5\u05D1\u05DC\u05D9\u05EA",
      "categoryName": "\u05DB\u05DC\u05D9 \u05D1\u05D9\u05EA",
      "categorySlug": "household",
      "weight": "31\xD719 \u05E1\u05F4\u05DE",
      "unitsPerPack": 1,
      "barcode": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "catalogPage": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "brand": "\u05D0\u05D9\u05E7\u05D0\u05D4",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p224",
      "manufacturerId": "sample-a",
      "name": "\u05EA\u05D1\u05E0\u05D9\u05EA \u05D0\u05DC\u05D5\u05DE\u05D9\u05E0\u05D9\u05D5\u05DD \u05DE\u05DC\u05D1\u05E0\u05D9\u05EA",
      "categoryName": "\u05DB\u05DC\u05D9 \u05D1\u05D9\u05EA",
      "categorySlug": "household",
      "weight": "30\xD726 \u05E1\u05F4\u05DE",
      "unitsPerPack": 400,
      "barcode": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "catalogPage": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "brand": "\u05DE\u05D9\u05D8\u05D1",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p225",
      "manufacturerId": "sample-a",
      "name": "\u05EA\u05D1\u05E0\u05D9\u05EA \u05D0\u05DC\u05D5\u05DE\u05D9\u05E0\u05D9\u05D5\u05DD \u05DC\u05E4\u05D9\u05E6\u05D4",
      "categoryName": "\u05DB\u05DC\u05D9 \u05D1\u05D9\u05EA",
      "categorySlug": "household",
      "weight": "31 \u05E1\u05F4\u05DE",
      "unitsPerPack": 100,
      "barcode": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "catalogPage": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "brand": "\u05DE\u05D9\u05D8\u05D1",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p226",
      "manufacturerId": "sample-a",
      "name": "\u05E0\u05D9\u05D9\u05E8 \u05D8\u05D5\u05D0\u05DC\u05D8",
      "categoryName": "\u05E0\u05D9\u05E7\u05D9\u05D5\u05DF",
      "categorySlug": "cleaning",
      "weight": "32 \u05D2\u05DC\u05D9\u05DC\u05D9\u05DD",
      "unitsPerPack": 32,
      "barcode": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "catalogPage": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "brand": "\u05E1\u05E0\u05D5",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p227",
      "manufacturerId": "sample-a",
      "name": "\u05E0\u05D9\u05D9\u05E8 \u05D8\u05D5\u05D0\u05DC\u05D8 \u05EA\u05DC\u05EA \u05E9\u05DB\u05D1\u05EA\u05D9",
      "categoryName": "\u05E0\u05D9\u05E7\u05D9\u05D5\u05DF",
      "categorySlug": "cleaning",
      "weight": "32 \u05D2\u05DC\u05D9\u05DC\u05D9\u05DD",
      "unitsPerPack": 32,
      "barcode": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "catalogPage": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "brand": "\u05D8\u05D0\u05E6\u05F3",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p228",
      "manufacturerId": "sample-a",
      "name": "\u05E0\u05D9\u05D9\u05E8 \u05D8\u05D5\u05D0\u05DC\u05D8",
      "categoryName": "\u05E0\u05D9\u05E7\u05D9\u05D5\u05DF",
      "categorySlug": "cleaning",
      "weight": "32 \u05D2\u05DC\u05D9\u05DC\u05D9\u05DD",
      "unitsPerPack": 32,
      "barcode": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "catalogPage": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "brand": "\u05DC\u05D9\u05DC\u05D9",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p229",
      "manufacturerId": "sample-a",
      "name": "\u05E0\u05D5\u05D6\u05DC \u05DB\u05DC\u05D9\u05DD 24%",
      "categoryName": "\u05E0\u05D9\u05E7\u05D9\u05D5\u05DF",
      "categorySlug": "cleaning",
      "weight": "750 \u05DE\u05F4\u05DC",
      "unitsPerPack": 1,
      "barcode": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "catalogPage": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "brand": "\u05E1\u05D0\u05E1\u05D0\u05D8\u05E7",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p230",
      "manufacturerId": "sample-a",
      "name": "\u05E9\u05E7\u05D9\u05D5\u05EA \u05D0\u05E9\u05E4\u05D4 \u05DB\u05D7\u05D5\u05DC\u05D5\u05EA",
      "categoryName": "\u05E0\u05D9\u05E7\u05D9\u05D5\u05DF",
      "categorySlug": "cleaning",
      "weight": "75\xD790 \u05E1\u05F4\u05DE",
      "unitsPerPack": 1,
      "barcode": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "catalogPage": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "brand": "\u05DE\u05D0\u05E8\u05D6",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p231",
      "manufacturerId": "sample-a",
      "name": "\u05DE\u05D0\u05D5\u05D5\u05E8\u05E8 \u05E9\u05D5\u05DC\u05D7\u05DF USB",
      "categoryName": "\u05DE\u05DB\u05E9\u05D9\u05E8\u05D9 \u05D7\u05E9\u05DE\u05DC",
      "categorySlug": "appliances",
      "weight": "2.5 \u05D5\u05D5\u05D0\u05D8",
      "unitsPerPack": 1,
      "barcode": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "catalogPage": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "brand": "USB",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p232",
      "manufacturerId": "sample-a",
      "name": "\u05D8\u05D5\u05E1\u05D8\u05E8 \u05DC\u05D7\u05D9\u05E6\u05D4",
      "categoryName": "\u05DE\u05DB\u05E9\u05D9\u05E8\u05D9 \u05D7\u05E9\u05DE\u05DC",
      "categorySlug": "appliances",
      "weight": "2 \u05E4\u05E8\u05D5\u05E1\u05D5\u05EA",
      "unitsPerPack": 1,
      "barcode": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "catalogPage": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "brand": "Sauter",
      "image": "assets/images/products/p-contact-grill.webp",
      "placeholder": true
    },
    {
      "id": "p233",
      "manufacturerId": "sample-a",
      "name": "\u05D8\u05D5\u05E1\u05D8\u05E8 \u05DC\u05D7\u05D9\u05E6\u05D4",
      "categoryName": "\u05DE\u05DB\u05E9\u05D9\u05E8\u05D9 \u05D7\u05E9\u05DE\u05DC",
      "categorySlug": "appliances",
      "weight": "2 \u05E4\u05E8\u05D5\u05E1\u05D5\u05EA",
      "unitsPerPack": 1,
      "barcode": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "catalogPage": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "brand": "Morphy Richards",
      "image": "assets/images/products/p-contact-grill.webp",
      "placeholder": true
    },
    {
      "id": "p234",
      "manufacturerId": "sample-a",
      "name": "\u05D8\u05D5\u05E1\u05D8\u05E8 \u05DC\u05D7\u05D9\u05E6\u05D4 \u05E2\u05DD \u05E4\u05DC\u05D8\u05D5\u05EA",
      "categoryName": "\u05DE\u05DB\u05E9\u05D9\u05E8\u05D9 \u05D7\u05E9\u05DE\u05DC",
      "categorySlug": "appliances",
      "weight": "2 \u05E4\u05E8\u05D5\u05E1\u05D5\u05EA",
      "unitsPerPack": 1,
      "barcode": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "catalogPage": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "brand": "Morphy Richards",
      "image": "assets/images/products/p-contact-grill.webp",
      "placeholder": true
    },
    {
      "id": "p235",
      "manufacturerId": "sample-a",
      "name": "\u05D8\u05D5\u05E1\u05D8\u05E8 \u05DC\u05D7\u05D9\u05E6\u05D4 \u05DE\u05E9\u05D5\u05DC\u05E9\u05D9\u05DD",
      "categoryName": "\u05DE\u05DB\u05E9\u05D9\u05E8\u05D9 \u05D7\u05E9\u05DE\u05DC",
      "categorySlug": "appliances",
      "weight": "2 \u05E4\u05E8\u05D5\u05E1\u05D5\u05EA",
      "unitsPerPack": 1,
      "barcode": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "catalogPage": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "brand": "\u05D8\u05D5\u05E1\u05D8\u05E8",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p236",
      "manufacturerId": "sample-a",
      "name": "\u05E0\u05D5\u05E8\u05EA \u05DC\u05D3 GU10",
      "categoryName": "\u05EA\u05D0\u05D5\u05E8\u05D4",
      "categorySlug": "lighting",
      "weight": "345 \u05DC\u05D5\u05DE\u05DF",
      "unitsPerPack": 1,
      "barcode": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "catalogPage": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "brand": "\u05D0\u05D9\u05E7\u05D0\u05D4",
      "image": "assets/images/products/mall/p236.webp",
      "placeholder": true
    },
    {
      "id": "p237",
      "manufacturerId": "sample-a",
      "name": "\u05E0\u05D5\u05E8\u05EA \u05DC\u05D3 GU10",
      "categoryName": "\u05EA\u05D0\u05D5\u05E8\u05D4",
      "categorySlug": "lighting",
      "weight": "600 \u05DC\u05D5\u05DE\u05DF",
      "unitsPerPack": 1,
      "barcode": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "catalogPage": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "brand": "\u05D0\u05D9\u05E7\u05D0\u05D4",
      "image": "assets/images/products/mall/p237.webp",
      "placeholder": true
    },
    {
      "id": "p238",
      "manufacturerId": "sample-a",
      "name": "\u05E0\u05D5\u05E8\u05EA \u05DC\u05D3 GU10 \u05D7\u05DB\u05DE\u05D4",
      "categoryName": "\u05EA\u05D0\u05D5\u05E8\u05D4",
      "categorySlug": "lighting",
      "weight": "575 \u05DC\u05D5\u05DE\u05DF",
      "unitsPerPack": 1,
      "barcode": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "catalogPage": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "brand": "\u05D0\u05D9\u05E7\u05D0\u05D4",
      "image": "assets/images/products/mall/p238.webp",
      "placeholder": true
    },
    {
      "id": "p239",
      "manufacturerId": "sample-a",
      "name": "\u05E0\u05D5\u05E8\u05EA \u05DC\u05D3 GU10 \u05E6\u05D1\u05E2\u05D5\u05E0\u05D9\u05EA",
      "categoryName": "\u05EA\u05D0\u05D5\u05E8\u05D4",
      "categorySlug": "lighting",
      "weight": "470 \u05DC\u05D5\u05DE\u05DF",
      "unitsPerPack": 1,
      "barcode": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "catalogPage": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "brand": "\u05D0\u05D9\u05E7\u05D0\u05D4",
      "image": "assets/images/products/mall/p239.webp",
      "placeholder": true
    },
    {
      "id": "p240",
      "manufacturerId": "sample-a",
      "name": "\u05DE\u05E0\u05D5\u05E8\u05EA \u05EA\u05E7\u05E8\u05D4",
      "categoryName": "\u05EA\u05D0\u05D5\u05E8\u05D4",
      "categorySlug": "lighting",
      "weight": "45 \u05E1\u05F4\u05DE",
      "unitsPerPack": 1,
      "barcode": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "catalogPage": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "brand": "\u05D0\u05D9\u05E7\u05D0\u05D4",
      "image": "assets/images/products/mall/p240.webp",
      "placeholder": true
    },
    {
      "id": "p241",
      "manufacturerId": "sample-a",
      "name": "\u05D0\u05D5\u05D6\u05E0\u05D9\u05D5\u05EA \u05D7\u05D5\u05D8\u05D9\u05D5\u05EA",
      "categoryName": "\u05D0\u05DC\u05E7\u05D8\u05E8\u05D5\u05E0\u05D9\u05E7\u05D4",
      "categorySlug": "gadgets",
      "weight": "USB-C",
      "unitsPerPack": 1,
      "barcode": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "catalogPage": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "brand": "JBL",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p242",
      "manufacturerId": "sample-a",
      "name": "\u05D0\u05D5\u05D6\u05E0\u05D9\u05D5\u05EA \u05D7\u05D5\u05D8\u05D9\u05D5\u05EA",
      "categoryName": "\u05D0\u05DC\u05E7\u05D8\u05E8\u05D5\u05E0\u05D9\u05E7\u05D4",
      "categorySlug": "gadgets",
      "weight": "USB-C",
      "unitsPerPack": 1,
      "barcode": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "catalogPage": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "brand": "Connekto",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p243",
      "manufacturerId": "sample-a",
      "name": "\u05DE\u05D8\u05E2\u05DF \u05E7\u05D9\u05E8 USB-C",
      "categoryName": "\u05D0\u05DC\u05E7\u05D8\u05E8\u05D5\u05E0\u05D9\u05E7\u05D4",
      "categorySlug": "gadgets",
      "weight": "20 \u05D5\u05D5\u05D0\u05D8",
      "unitsPerPack": 1,
      "barcode": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "catalogPage": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "brand": "Apple",
      "image": "assets/images/products/mall/p243.webp",
      "placeholder": true
    },
    {
      "id": "p244",
      "manufacturerId": "sample-a",
      "name": "\u05DE\u05D8\u05E2\u05DF \u05E7\u05D9\u05E8 \u05E2\u05DD \u05DB\u05D1\u05DC",
      "categoryName": "\u05D0\u05DC\u05E7\u05D8\u05E8\u05D5\u05E0\u05D9\u05E7\u05D4",
      "categorySlug": "gadgets",
      "weight": "20 \u05D5\u05D5\u05D0\u05D8",
      "unitsPerPack": 1,
      "barcode": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "catalogPage": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "brand": "MiraCase",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p245",
      "manufacturerId": "sample-a",
      "name": "\u05DB\u05D1\u05DC \u05D7\u05D9\u05D1\u05D5\u05E8 \u05DC\u05EA\u05D0\u05D5\u05E8\u05D4",
      "categoryName": "\u05D0\u05DC\u05E7\u05D8\u05E8\u05D5\u05E0\u05D9\u05E7\u05D4",
      "categorySlug": "gadgets",
      "weight": "3.5 \u05DE\u05F3",
      "unitsPerPack": 1,
      "barcode": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "catalogPage": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "brand": "\u05D0\u05D9\u05E7\u05D0\u05D4",
      "image": "assets/images/products/mall/p245.webp",
      "placeholder": true
    },
    {
      "id": "p246",
      "manufacturerId": "sample-a",
      "name": "\u05D8\u05D5\u05E8\u05D8\u05D9\u05D9\u05D4 \u05DE\u05E7\u05DE\u05D7 \u05D7\u05D9\u05D8\u05D4 \u05DE\u05DC\u05D0\u05D4",
      "categoryName": "\u05D8\u05D5\u05E8\u05D8\u05D9\u05D5\u05EA",
      "categorySlug": "tortillas",
      "weight": "270 \u05D2\u05E8\u05DD",
      "unitsPerPack": 1,
      "barcode": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "catalogPage": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "brand": "\u05DE\u05D0\u05E8\u05D6",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p247",
      "manufacturerId": "sample-a",
      "name": "\u05E2\u05DC\u05D9 \u05D8\u05D5\u05E8\u05D8\u05D9\u05D4 \u05D7\u05D9\u05D8\u05D4 \u05DE\u05DC\u05D0\u05D4",
      "categoryName": "\u05D8\u05D5\u05E8\u05D8\u05D9\u05D5\u05EA",
      "categorySlug": "tortillas",
      "weight": "320 \u05D2\u05E8\u05DD",
      "unitsPerPack": 1,
      "barcode": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "catalogPage": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "brand": "\u05DE\u05D0\u05E1\u05D8\u05E8 \u05E9\u05E3",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p248",
      "manufacturerId": "sample-a",
      "name": "\u05D8\u05D5\u05E8\u05D8\u05D9\u05D9\u05D4 \u05DE\u05E7\u05DE\u05D7 \u05D7\u05D9\u05D8\u05D4",
      "categoryName": "\u05D8\u05D5\u05E8\u05D8\u05D9\u05D5\u05EA",
      "categorySlug": "tortillas",
      "weight": "700 \u05D2\u05E8\u05DD",
      "unitsPerPack": 1,
      "barcode": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "catalogPage": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "brand": "\u05DE\u05D0\u05E8\u05D6",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p249",
      "manufacturerId": "sample-a",
      "name": "\u05D8\u05D5\u05E8\u05D8\u05D9\u05D9\u05D4 \u05DE\u05E7\u05DE\u05D7 \u05EA\u05D9\u05E8\u05E1",
      "categoryName": "\u05D8\u05D5\u05E8\u05D8\u05D9\u05D5\u05EA",
      "categorySlug": "tortillas",
      "weight": "270 \u05D2\u05E8\u05DD",
      "unitsPerPack": 1,
      "barcode": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "catalogPage": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "brand": "\u05DE\u05D0\u05E8\u05D6",
      "image": null,
      "placeholder": true
    },
    {
      "id": "p250",
      "manufacturerId": "sample-a",
      "name": "\u05D8\u05D5\u05E8\u05D8\u05D9\u05D9\u05D4 \u05DE\u05D5\u05E4\u05D7\u05EA\u05EA",
      "categoryName": "\u05D8\u05D5\u05E8\u05D8\u05D9\u05D5\u05EA",
      "categorySlug": "tortillas",
      "weight": "270 \u05D2\u05E8\u05DD",
      "unitsPerPack": 1,
      "barcode": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "catalogPage": "\u05DC\u05D4\u05D3\u05D2\u05DE\u05D4",
      "brand": "\u05DE\u05D0\u05E8\u05D6",
      "image": null,
      "placeholder": true
    }
  ];
  function getProduct(id) {
    return products.find((product) => product.id === id) || null;
  }
  function getCategory(slug) {
    return categories.find((category) => category.slug === slug) || null;
  }
  function productsByCategory(slug) {
    return products.filter((product) => product.categorySlug === slug);
  }
  function searchProducts(query) {
    const text = query.trim();
    if (!text) return [];
    return products.filter(
      (product) => product.name.includes(text) || product.brand.includes(text) || product.categoryName.includes(text)
    );
  }

  // js/data/departments.js
  var departments = [
    {
      id: "super",
      name: "\u05E1\u05D5\u05E4\u05E8 \u05D0\u05E9\u05DE\u05D5\u05E8\u05EA",
      slugs: ["breadcrumbs", "grains", "rice", "pasta", "tortillas", "cans", "oils", "spices"]
    },
    {
      id: "home",
      name: "\u05D7\u05D3 \u05E4\u05E2\u05DE\u05D9 \u05D5\u05DB\u05DC\u05D9 \u05D1\u05D9\u05EA",
      slugs: ["disposables", "household", "cleaning"]
    },
    {
      id: "electronics",
      name: "\u05E7\u05E0\u05D9\u05D5\u05DF \u05D0\u05E9\u05DE\u05D5\u05E8\u05EA",
      slugs: ["appliances", "lighting", "gadgets"]
    },
    {
      id: "offers",
      name: "\u05DE\u05D1\u05E6\u05E2\u05D9\u05DD",
      offers: true
    }
  ];
  function getDepartment(id) {
    return departments.find((department) => department.id === id) || null;
  }
  function isElectronicsProduct(product) {
    const electronics = departments.find((department) => department.id === "electronics");
    return Boolean(product && electronics?.slugs.includes(product.categorySlug));
  }

  // js/data/commerce.js
  var deliveryFee = 29;
  var prices = {
    "p001": { "price": 9.9, "compareAt": null },
    "p002": { "price": 8.4, "compareAt": null },
    "p003": { "price": 8.9, "compareAt": null },
    "p004": { "price": 11.4, "compareAt": null },
    "p005": { "price": 9.9, "compareAt": null },
    "p006": { "price": 15.4, "compareAt": null },
    "p007": { "price": 90.9, "compareAt": null },
    "p008": { "price": 91.4, "compareAt": null },
    "p009": { "price": 14.9, "compareAt": null },
    "p010": { "price": 12.9, "compareAt": 16.9 },
    "p011": { "price": 15.9, "compareAt": null },
    "p012": { "price": 11.4, "compareAt": null },
    "p013": { "price": 9.9, "compareAt": null },
    "p014": { "price": 10.4, "compareAt": null },
    "p015": { "price": 10.9, "compareAt": null },
    "p016": { "price": 11.4, "compareAt": null },
    "p017": { "price": 9.9, "compareAt": null },
    "p018": { "price": 10.4, "compareAt": null },
    "p019": { "price": 10.9, "compareAt": null },
    "p020": { "price": 11.4, "compareAt": null },
    "p021": { "price": 9.9, "compareAt": null },
    "p022": { "price": 10.4, "compareAt": null },
    "p023": { "price": 10.9, "compareAt": null },
    "p024": { "price": 11.4, "compareAt": null },
    "p025": { "price": 9.9, "compareAt": null },
    "p026": { "price": 10.4, "compareAt": null },
    "p027": { "price": 10.9, "compareAt": null },
    "p028": { "price": 11.4, "compareAt": null },
    "p029": { "price": 9.9, "compareAt": null },
    "p030": { "price": 10.4, "compareAt": null },
    "p031": { "price": 10.9, "compareAt": null },
    "p032": { "price": 11.4, "compareAt": null },
    "p033": { "price": 9.9, "compareAt": null },
    "p034": { "price": 10.4, "compareAt": null },
    "p035": { "price": 15.9, "compareAt": null },
    "p036": { "price": 16.4, "compareAt": null },
    "p037": { "price": 14.9, "compareAt": null },
    "p038": { "price": 15.4, "compareAt": null },
    "p039": { "price": 15.9, "compareAt": null },
    "p040": { "price": 16.4, "compareAt": null },
    "p041": { "price": 14.9, "compareAt": null },
    "p042": { "price": 15.4, "compareAt": null },
    "p043": { "price": 15.9, "compareAt": null },
    "p044": { "price": 16.4, "compareAt": null },
    "p045": { "price": 14.9, "compareAt": null },
    "p046": { "price": 10.4, "compareAt": null },
    "p047": { "price": 10.9, "compareAt": null },
    "p048": { "price": 11.4, "compareAt": null },
    "p049": { "price": 7.9, "compareAt": null },
    "p050": { "price": 6.9, "compareAt": 8.9 },
    "p051": { "price": 43.9, "compareAt": null },
    "p052": { "price": 44.4, "compareAt": null },
    "p053": { "price": 42.9, "compareAt": null },
    "p054": { "price": 43.4, "compareAt": null },
    "p055": { "price": 43.9, "compareAt": null },
    "p056": { "price": 44.4, "compareAt": null },
    "p057": { "price": 42.9, "compareAt": null },
    "p058": { "price": 43.4, "compareAt": null },
    "p059": { "price": 43.9, "compareAt": null },
    "p060": { "price": 44.4, "compareAt": null },
    "p061": { "price": 42.9, "compareAt": null },
    "p062": { "price": 43.4, "compareAt": null },
    "p063": { "price": 43.9, "compareAt": null },
    "p064": { "price": 44.4, "compareAt": null },
    "p065": { "price": 42.9, "compareAt": null },
    "p066": { "price": 90.4, "compareAt": null },
    "p067": { "price": 43.9, "compareAt": null },
    "p068": { "price": 44.4, "compareAt": null },
    "p069": { "price": 42.9, "compareAt": null },
    "p070": { "price": 43.4, "compareAt": null },
    "p071": { "price": 43.9, "compareAt": null },
    "p072": { "price": 44.4, "compareAt": null },
    "p073": { "price": 14.9, "compareAt": null },
    "p074": { "price": 11.9, "compareAt": 14.9 },
    "p075": { "price": 15.9, "compareAt": null },
    "p076": { "price": 16.4, "compareAt": null },
    "p077": { "price": 14.9, "compareAt": null },
    "p078": { "price": 15.4, "compareAt": null },
    "p079": { "price": 90.9, "compareAt": null },
    "p080": { "price": 44.4, "compareAt": null },
    "p081": { "price": 89.9, "compareAt": null },
    "p082": { "price": 43.4, "compareAt": null },
    "p083": { "price": 10.9, "compareAt": null },
    "p084": { "price": 11.4, "compareAt": null },
    "p085": { "price": 9.9, "compareAt": null },
    "p086": { "price": 10.4, "compareAt": null },
    "p087": { "price": 10.9, "compareAt": null },
    "p088": { "price": 11.4, "compareAt": null },
    "p089": { "price": 42.9, "compareAt": null },
    "p090": { "price": 43.4, "compareAt": null },
    "p091": { "price": 43.9, "compareAt": null },
    "p092": { "price": 44.4, "compareAt": null },
    "p093": { "price": 42.9, "compareAt": null },
    "p094": { "price": 43.4, "compareAt": null },
    "p095": { "price": 5.9, "compareAt": 7.9 },
    "p096": { "price": 11.4, "compareAt": null },
    "p097": { "price": 9.9, "compareAt": null },
    "p098": { "price": 10.4, "compareAt": null },
    "p099": { "price": 10.9, "compareAt": null },
    "p100": { "price": 11.4, "compareAt": null },
    "p101": { "price": 9.9, "compareAt": null },
    "p102": { "price": 8.4, "compareAt": null },
    "p103": { "price": 8.9, "compareAt": null },
    "p104": { "price": 11.4, "compareAt": null },
    "p105": { "price": 9.9, "compareAt": null },
    "p106": { "price": 10.4, "compareAt": null },
    "p107": { "price": 10.9, "compareAt": null },
    "p108": { "price": 11.4, "compareAt": null },
    "p109": { "price": 7.9, "compareAt": null },
    "p110": { "price": 8.4, "compareAt": null },
    "p111": { "price": 8.9, "compareAt": null },
    "p112": { "price": 11.4, "compareAt": null },
    "p113": { "price": 9.9, "compareAt": null },
    "p114": { "price": 10.4, "compareAt": null },
    "p115": { "price": 10.9, "compareAt": null },
    "p116": { "price": 6.9, "compareAt": 8.9 },
    "p117": { "price": 9.9, "compareAt": null },
    "p118": { "price": 10.4, "compareAt": null },
    "p119": { "price": 10.9, "compareAt": null },
    "p120": { "price": 11.4, "compareAt": null },
    "p121": { "price": 9.9, "compareAt": null },
    "p122": { "price": 10.4, "compareAt": null },
    "p123": { "price": 10.9, "compareAt": null },
    "p124": { "price": 11.4, "compareAt": null },
    "p125": { "price": 24.9, "compareAt": null },
    "p126": { "price": 25.4, "compareAt": null },
    "p127": { "price": 25.9, "compareAt": null },
    "p128": { "price": 26.4, "compareAt": null },
    "p129": { "price": 24.9, "compareAt": null },
    "p130": { "price": 25.4, "compareAt": null },
    "p131": { "price": 10.9, "compareAt": null },
    "p132": { "price": 11.4, "compareAt": null },
    "p133": { "price": 9.9, "compareAt": null },
    "p134": { "price": 10.4, "compareAt": null },
    "p135": { "price": 8.9, "compareAt": null },
    "p136": { "price": 26.4, "compareAt": null },
    "p137": { "price": 24.9, "compareAt": null },
    "p138": { "price": 8.4, "compareAt": null },
    "p139": { "price": 8.9, "compareAt": null },
    "p140": { "price": 22.9, "compareAt": 27.9 },
    "p141": { "price": 9.9, "compareAt": null },
    "p142": { "price": 10.4, "compareAt": null },
    "p143": { "price": 43.9, "compareAt": null },
    "p144": { "price": 14.9, "compareAt": 18.9 },
    "p145": { "price": 42.9, "compareAt": null },
    "p146": { "price": 32.9, "compareAt": 39.9 },
    "p147": { "price": 15.9, "compareAt": null },
    "p148": { "price": 10.4, "compareAt": null },
    "p149": { "price": 8.9, "compareAt": null },
    "p150": { "price": 9.4, "compareAt": null },
    "p151": { "price": 7.9, "compareAt": 9.9 },
    "p152": { "price": 10.4, "compareAt": null },
    "p153": { "price": 8.9, "compareAt": null },
    "p154": { "price": 9.4, "compareAt": null },
    "p155": { "price": 9.9, "compareAt": null },
    "p156": { "price": 10.4, "compareAt": null },
    "p157": { "price": 8.9, "compareAt": null },
    "p158": { "price": 9.4, "compareAt": null },
    "p159": { "price": 9.9, "compareAt": null },
    "p160": { "price": 10.4, "compareAt": null },
    "p161": { "price": 8.9, "compareAt": null },
    "p162": { "price": 9.4, "compareAt": null },
    "p163": { "price": 9.9, "compareAt": null },
    "p164": { "price": 10.4, "compareAt": null },
    "p165": { "price": 8.9, "compareAt": null },
    "p166": { "price": 9.4, "compareAt": null },
    "p167": { "price": 9.9, "compareAt": null },
    "p168": { "price": 10.4, "compareAt": null },
    "p169": { "price": 8.9, "compareAt": null },
    "p170": { "price": 19.4, "compareAt": null },
    "p171": { "price": 19.9, "compareAt": null },
    "p172": { "price": 10.4, "compareAt": null },
    "p173": { "price": 8.9, "compareAt": null },
    "p174": { "price": 7.9, "compareAt": 9.9 },
    "p175": { "price": 10.9, "compareAt": null },
    "p176": { "price": 9.4, "compareAt": null },
    "p177": { "price": 7.9, "compareAt": null },
    "p178": { "price": 15.4, "compareAt": null },
    "p179": { "price": 8.9, "compareAt": null },
    "p180": { "price": 9.4, "compareAt": null },
    "p181": { "price": 7.9, "compareAt": null },
    "p182": { "price": 90.4, "compareAt": null },
    "p183": { "price": 10.9, "compareAt": null },
    "p184": { "price": 11.4, "compareAt": null },
    "p185": { "price": 17.9, "compareAt": null },
    "p186": { "price": 22.9, "compareAt": null },
    "p187": { "price": 13.9, "compareAt": null },
    "p188": { "price": 14.9, "compareAt": null },
    "p189": { "price": 22.18, "compareAt": null },
    "p190": { "price": 25.9, "compareAt": null },
    "p191": { "price": 39, "compareAt": null },
    "p192": { "price": 59, "compareAt": null },
    "p193": { "price": 29, "compareAt": null },
    "p194": { "price": 45, "compareAt": null },
    "p195": { "price": 7.2, "compareAt": 9.2 },
    "p196": { "price": 9.9, "compareAt": null },
    "p197": { "price": 8.9, "compareAt": null },
    "p198": { "price": 59, "compareAt": 219 },
    "p199": { "price": 164, "compareAt": 488 },
    "p200": { "price": 439, "compareAt": 499 },
    "p201": { "price": 749, "compareAt": null },
    "p202": { "price": 145, "compareAt": null },
    "p203": { "price": 145, "compareAt": null },
    "p204": { "price": 9, "compareAt": null },
    "p205": { "price": 134, "compareAt": null },
    "p206": { "price": 45, "compareAt": null },
    "p207": { "price": 399, "compareAt": null },
    "p208": { "price": 19, "compareAt": null },
    "p209": { "price": 10, "compareAt": 12.9 },
    "p210": { "price": 38.8, "compareAt": null },
    "p211": { "price": 89, "compareAt": 139 },
    "p212": { "price": 19, "compareAt": null },
    "p213": { "price": 32.36, "compareAt": 134.8 },
    "p214": { "price": 19, "compareAt": null },
    "p215": { "price": 79, "compareAt": null },
    "p216": { "price": 14.9, "compareAt": null },
    "p217": { "price": 6.9, "compareAt": null },
    "p218": { "price": 7.9, "compareAt": null },
    "p219": { "price": 7.9, "compareAt": null },
    "p220": { "price": 11.9, "compareAt": 14.9 },
    "p221": { "price": 25, "compareAt": null },
    "p222": { "price": 10, "compareAt": null },
    "p223": { "price": 35, "compareAt": null },
    "p224": { "price": 208, "compareAt": 265 },
    "p225": { "price": 198, "compareAt": null },
    "p226": { "price": 29.9, "compareAt": 38.9 },
    "p227": { "price": 42.9, "compareAt": null },
    "p228": { "price": 39.9, "compareAt": null },
    "p229": { "price": 11.9, "compareAt": null },
    "p230": { "price": 12.9, "compareAt": null },
    "p231": { "price": 10, "compareAt": null },
    "p232": { "price": 79, "compareAt": null },
    "p233": { "price": 107, "compareAt": null },
    "p234": { "price": 148, "compareAt": null },
    "p235": { "price": 39.9, "compareAt": null },
    "p236": { "price": 15, "compareAt": null },
    "p237": { "price": 22, "compareAt": null },
    "p238": { "price": 39, "compareAt": null },
    "p239": { "price": 45, "compareAt": null },
    "p240": { "price": 225, "compareAt": null },
    "p241": { "price": 55, "compareAt": null },
    "p242": { "price": 79, "compareAt": null },
    "p243": { "price": 99, "compareAt": null },
    "p244": { "price": 169, "compareAt": null },
    "p245": { "price": 25, "compareAt": null },
    "p246": { "price": 10, "compareAt": 12.5 },
    "p247": { "price": 12.9, "compareAt": null },
    "p248": { "price": 14, "compareAt": 14.9 },
    "p249": { "price": 10, "compareAt": 12.5 },
    "p250": { "price": 10, "compareAt": 12.5 }
  };
  function getCommerce(id) {
    return prices[id] || null;
  }

  // js/lib/format.js
  function esc(value) {
    return String(value ?? "").replace(/[&<>"']/g, (char) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[char]);
  }
  function money(amount) {
    const value = Number(amount).toFixed(2);
    return `<span dir="ltr">\u20AA${value}</span>`;
  }
  function prefersReducedMotion() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  // js/components/product-photo.js
  function productPhoto(product) {
    return product?.image || null;
  }
  function photoImg(product, { alt = "", eager = false } = {}) {
    const src = productPhoto(product);
    if (!src) return "";
    return `<img src="${esc(src)}" alt="${esc(alt)}" ${eager ? "" : `loading="lazy" `}decoding="async">`;
  }

  // js/components/product-card.js
  function mediaClass(base, product) {
    return productPhoto(product) ? `${base} has-photo` : base;
  }
  function productAnchor(product, attrs, inner) {
    const pop = isElectronicsProduct(product) ? "" : ` data-product-pop="${esc(product.id)}"`;
    return `<a href="#/p/${esc(product.id)}"${pop} ${attrs}>${inner}</a>`;
  }
  function cardParts(product) {
    const commerce = getCommerce(product.id);
    const badge = commerce?.compareAt ? `<span class="sale-badge">\u05D1\u05DE\u05D1\u05E6\u05E2</span>` : "";
    const price = commerce ? `<p class="price">${money(commerce.price)}${commerce.compareAt ? `<s>${money(commerce.compareAt)}</s>` : ""}</p>` : `<p class="text-sm font-semibold text-muted">\u05DE\u05D7\u05D9\u05E8 \u05D9\u05E2\u05D5\u05D3\u05DB\u05DF</p>`;
    return { badge, price };
  }
  function buyRow(id, { flat = false } = {}) {
    return `<div class="buy-row${flat ? " is-flat" : ""}" data-buy>
    <div class="qty-step" dir="ltr">
      <button type="button" data-qty="-1" aria-label="\u05D4\u05E4\u05D7\u05EA\u05EA \u05DB\u05DE\u05D5\u05EA">\u2212</button>
      <span class="qty-unit">\u05D9\u05D7\u05F3</span>
      <input data-qty-input inputmode="numeric" maxlength="2" value="1" aria-label="\u05DB\u05DE\u05D5\u05EA">
      <button type="button" data-qty="1" aria-label="\u05D4\u05D2\u05D3\u05DC\u05EA \u05DB\u05DE\u05D5\u05EA">+</button>
    </div>
    <button type="button" class="buy-add" data-add="${esc(id)}">\u05D4\u05D5\u05E1\u05E4\u05D4</button>
  </div>`;
  }
  function shelfCard(product) {
    const { badge, price } = cardParts(product);
    return `<article class="card card-shelf">
    ${productAnchor(product, `class="${mediaClass("card-media", product)}"`, `${photoImg(product)}${badge}`)}
    <p class="card-brand">${esc(product.brand)}</p>
    <h3 class="card-name" title="${esc(product.name)}">${productAnchor(product, ``, esc(product.name))}</h3>
    <p class="card-meta">${esc(product.weight)}</p>
    <div class="card-buy">
      ${price}
      ${buyRow(product.id)}
    </div>
  </article>`;
  }
  function productGrid(items) {
    if (!items.length) {
      return `<p class="rounded-2xl bg-paper px-5 py-10 text-center font-semibold">\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05DE\u05D5\u05E6\u05E8\u05D9\u05DD \u05DC\u05D4\u05E6\u05D2\u05D4.</p>`;
    }
    return `<ul class="grid grid-cols-2 product-grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">${items.map((product) => `<li>${shelfCard(product)}</li>`).join("")}</ul>`;
  }

  // js/components/carousel.js
  function carousel(items, label) {
    return `<div class="embla catalog-rail" data-carousel aria-label="${esc(label)}">
    <button type="button" class="cat-arrow" data-carousel-prev aria-label="\u05D4\u05E7\u05D5\u05D3\u05DD">
      <svg viewBox="0 0 24 24" class="size-5" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M9 6l6 6-6 6"></path></svg>
    </button>
    <div class="embla__viewport catalog-viewport">
      <div class="embla__container">
        ${items.map((product) => `<div class="embla__slide">${shelfCard(product)}</div>`).join("")}
      </div>
    </div>
    <button type="button" class="cat-arrow" data-carousel-next aria-label="\u05D4\u05D1\u05D0">
      <svg viewBox="0 0 24 24" class="size-5" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M15 6l-6 6 6 6"></path></svg>
    </button>
  </div>`;
  }
  function mountCarousels(root) {
    const Embla = window.EmblaCarousel;
    if (!Embla) return;
    root.querySelectorAll("[data-carousel]").forEach((node) => {
      if (node.dataset.ready === "true") return;
      const viewport = node.querySelector(".embla__viewport");
      const carousel2 = Embla(viewport, {
        loop: true,
        direction: "rtl",
        align: "start",
        containScroll: false,
        dragFree: false
      });
      node.dataset.ready = "true";
      const prev = node.querySelector("[data-carousel-prev]");
      const next = node.querySelector("[data-carousel-next]");
      const sync = () => {
        prev.disabled = !carousel2.canScrollPrev();
        next.disabled = !carousel2.canScrollNext();
      };
      prev.addEventListener("click", () => carousel2.scrollPrev());
      next.addEventListener("click", () => carousel2.scrollNext());
      carousel2.on("select", sync);
      carousel2.on("reInit", sync);
      sync();
      if (prefersReducedMotion()) carousel2.reInit({ duration: 0 });
    });
  }

  // js/components/catalog-rail.js
  function loopSlides(items) {
    if (!items.length) return [];
    const copies = Math.max(2, Math.ceil(15 / items.length));
    return Array.from({ length: copies }, (_, copy) => items.map((product) => ({ product, copy }))).flat();
  }
  function slidesHtml(slug) {
    const items = productsByCategory(slug);
    if (!items.length) {
      return `<p class="catalog-empty">\u05D0\u05D9\u05DF \u05DE\u05D5\u05E6\u05E8\u05D9\u05DD \u05DC\u05D4\u05E6\u05D2\u05D4 \u05D1\u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D4 \u05D4\u05D6\u05D5.</p>`;
    }
    return loopSlides(items).map(({ product, copy }) => {
      const hidden2 = copy === 0 ? "" : ` aria-hidden="true"`;
      return `<div class="embla__slide"${hidden2}>${shelfCard(product)}</div>`;
    }).join("");
  }
  function gridHtml(slug) {
    const items = productsByCategory(slug).slice(0, 10);
    if (!items.length) {
      return `<p class="catalog-empty">\u05D0\u05D9\u05DF \u05DE\u05D5\u05E6\u05E8\u05D9\u05DD \u05DC\u05D4\u05E6\u05D2\u05D4 \u05D1\u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D4 \u05D4\u05D6\u05D5.</p>`;
    }
    return `<ul class="catalog-grid">${items.map((product) => `<li>${shelfCard(product)}</li>`).join("")}</ul>`;
  }
  function railHtml(slug, label) {
    const items = productsByCategory(slug);
    if (!items.length) {
      return `<p class="catalog-empty">\u05D0\u05D9\u05DF \u05DE\u05D5\u05E6\u05E8\u05D9\u05DD \u05DC\u05D4\u05E6\u05D2\u05D4 \u05D1\u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D4 \u05D4\u05D6\u05D5.</p>`;
    }
    return carousel(items, label);
  }
  function panelHtml(layout, slug, label) {
    return layout === "rail" ? railHtml(slug, label) : gridHtml(slug);
  }
  function tabId(sectionId, slug) {
    return `${sectionId}-panel-tab-${slug}`;
  }
  function catalogTabButtons(tabs, attribute, sectionId) {
    return tabs.map(([slug, name], index) => {
      const selected = index === 0;
      return `<button type="button" role="tab" id="${esc(tabId(sectionId, slug))}" aria-controls="${esc(sectionId)}-panel" ${attribute}="${esc(slug)}" aria-selected="${selected}" tabindex="${selected ? "0" : "-1"}">${esc(name)}</button>`;
    }).join("");
  }
  function panelAttrs(sectionId, tabs) {
    const first = tabs[0]?.[0];
    const labelledBy = first ? ` aria-labelledby="${esc(tabId(sectionId, first))}"` : "";
    return `id="${esc(sectionId)}-panel" role="tabpanel"${labelledBy}`;
  }
  function selectTab(tabs, tab, panel, focus) {
    tabs.forEach((item) => {
      const on = item === tab;
      item.setAttribute("aria-selected", String(on));
      item.tabIndex = on ? 0 : -1;
    });
    panel.setAttribute("aria-labelledby", tab.id);
    if (focus) tab.focus();
  }
  function bindTabKeys(tablist, tabs, activate) {
    tablist?.addEventListener("keydown", (event) => {
      const index = tabs.indexOf(document.activeElement);
      if (index < 0) return;
      const keys = { ArrowLeft: index + 1, ArrowRight: index - 1, Home: 0, End: tabs.length - 1 };
      if (!(event.key in keys)) return;
      event.preventDefault();
      activate(tabs[(keys[event.key] + tabs.length) % tabs.length]);
    });
  }
  function catalogGridSection({ id, title, href, tabs, className = "pb-12", layout = "grid", showTabs = true, icon: icon3 = "" }) {
    const mark2 = icon3 ? `<span class="nav-icon is-${esc(icon3)}" aria-hidden="true"></span>` : `<span class="cat-heart" aria-hidden="true"></span>`;
    const first = tabs[0]?.[0];
    const panel = first ? panelHtml(layout, first, title) : `<p class="catalog-empty">\u05D0\u05D9\u05DF \u05DE\u05D5\u05E6\u05E8\u05D9\u05DD \u05DC\u05D4\u05E6\u05D2\u05D4 \u05D1\u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D4 \u05D4\u05D6\u05D5.</p>`;
    const tabList = showTabs && tabs.length ? `<div class="catalog-tabs" role="tablist" aria-label="\u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D5\u05EA ${esc(title)}">${catalogTabButtons(tabs, "data-catalog-grid-tab", id)}</div>` : "";
    return `<section class="${esc(className)}" data-catalog-grid data-catalog-layout="${esc(layout)}" data-catalog-label="${esc(title)}" aria-labelledby="${esc(id)}">
    <div class="catalog-head">
      <h2 id="${esc(id)}"><a href="${esc(href)}">${mark2}${esc(title)}</a></h2>
      ${tabList}
    </div>
    <div data-catalog-grid-panel ${showTabs ? panelAttrs(id, tabs) : ""}>${panel}</div>
  </section>`;
  }
  function bindCatalogRail(section) {
    if (!section || section.dataset.ready === "true") return;
    section.dataset.ready = "true";
    const viewport = section.querySelector(".catalog-viewport");
    const track = section.querySelector("[data-catalog-track]");
    const Embla = window.EmblaCarousel;
    let embla2 = null;
    const start2 = () => {
      if (embla2) {
        embla2.destroy();
        embla2 = null;
      }
      if (!Embla || !track.querySelector(".embla__slide")) return;
      embla2 = Embla(viewport, {
        loop: true,
        direction: "rtl",
        align: "start",
        containScroll: false,
        duration: prefersReducedMotion() ? 0 : 25
      });
    };
    section.querySelector("[data-catalog-prev]").addEventListener("click", () => embla2?.scrollPrev());
    section.querySelector("[data-catalog-next]").addEventListener("click", () => embla2?.scrollNext());
    const panel = section.querySelector(".catalog-rail");
    const tabs = [...section.querySelectorAll("[data-catalog-tab]")];
    const activate = (button, focus = true) => {
      const changed = button.getAttribute("aria-selected") !== "true";
      selectTab(tabs, button, panel, focus);
      if (!changed) return;
      track.innerHTML = slidesHtml(button.dataset.catalogTab);
      start2();
    };
    tabs.forEach((button) => button.addEventListener("click", () => activate(button, false)));
    bindTabKeys(section.querySelector("[role=tablist]"), tabs, activate);
    start2();
  }
  function bindCatalogGrid(grid) {
    if (!grid || grid.dataset.ready === "true") return;
    grid.dataset.ready = "true";
    const panel = grid.querySelector("[data-catalog-grid-panel]");
    const tabs = [...grid.querySelectorAll("[data-catalog-grid-tab]")];
    const activate = (button, focus = true) => {
      const changed = button.getAttribute("aria-selected") !== "true";
      selectTab(tabs, button, panel, focus);
      if (!changed) return;
      const { catalogLayout: layout, catalogLabel: label } = grid.dataset;
      panel.innerHTML = panelHtml(layout, button.dataset.catalogGridTab, label);
      if (layout === "rail") mountCarousels(panel);
    };
    tabs.forEach((button) => button.addEventListener("click", () => activate(button, false)));
    bindTabKeys(grid.querySelector("[role=tablist]"), tabs, activate);
  }
  function mountCatalog(root) {
    root.querySelectorAll("[data-catalog]").forEach(bindCatalogRail);
    root.querySelectorAll("[data-catalog-grid]").forEach(bindCatalogGrid);
  }

  // js/components/theme-options.js
  var KEY = "ashmoret-theme";
  var REV = 2;
  var defaults = { header: "v2", hero: "v3", categories: "v2", featured: "v1", banners: "v1", mobileMenu: "v1", suppliers: "v1", palette: "grey", logo: "v1", wideHeader: true };
  var logos = {
    v1: { src: "assets/images/brand/logo-market-cart.png?v=2", width: 300, height: 80 },
    v2: { src: "assets/images/brand/logo-market.png", width: 1024, height: 344 }
  };
  var desktop = window.matchMedia("(min-width: 1024px)");
  var gearIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>`;
  var groupIcon = (paths) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths}</svg>`;
  var groupIcons = {
    header: groupIcon(`<rect x="3" y="4" width="18" height="16" rx="2"></rect><path d="M3 9h18M6.5 6.5h3M15 6.5h2.5"></path>`),
    hero: groupIcon(`<rect x="3" y="5" width="18" height="14" rx="2"></rect><circle cx="15.5" cy="9.5" r="1.5"></circle><path d="m3 16 5-4.5 4 3.5 3-2 6 4"></path>`),
    categories: groupIcon(`<rect x="3" y="4" width="7" height="7" rx="1.5"></rect><rect x="14" y="4" width="7" height="7" rx="1.5"></rect><rect x="3" y="13" width="7" height="7" rx="1.5"></rect><rect x="14" y="13" width="7" height="7" rx="1.5"></rect>`),
    featured: groupIcon(`<circle cx="7" cy="8" r="3"></circle><circle cx="17" cy="8" r="3"></circle><circle cx="7" cy="17" r="3"></circle><circle cx="17" cy="17" r="3"></circle>`),
    banners: groupIcon(`<rect x="3" y="5" width="8" height="14" rx="1.5"></rect><rect x="13" y="5" width="8" height="14" rx="1.5"></rect><path d="m9 2-2 2 2 2M15 18l2 2-2 2"></path>`),
    mobileMenu: groupIcon(`<rect x="6.5" y="2.5" width="11" height="19" rx="2.5"></rect><path d="M9.5 8h5M9.5 11h5M9.5 14h5"></path>`),
    suppliers: groupIcon(`<path d="M3 9 4.5 4h15L21 9"></path><path d="M4 9v11h16V9"></path><path d="M3 9h18"></path><path d="M9.5 20v-5.5h5V20"></path>`),
    palette: groupIcon(`<path d="M12 3a9 9 0 1 0 0 18c1.1 0 1.8-.9 1.8-1.9 0-.5-.2-.9-.5-1.3-.3-.3-.5-.8-.5-1.2 0-1 .8-1.8 1.8-1.8H16a5 5 0 0 0 5-5c0-3.9-4-6.8-9-6.8z"></path><circle cx="7.5" cy="11" r="1.2"></circle><circle cx="10.5" cy="7" r="1.2"></circle><circle cx="15" cy="7.5" r="1.2"></circle>`),
    logo: groupIcon(`<path d="M3 4h2l2.4 10.2a1.5 1.5 0 0 0 1.5 1.1h8.6a1.5 1.5 0 0 0 1.4-1.1L21 8H6.2"></path><circle cx="9.5" cy="19.5" r="1.3"></circle><circle cx="17" cy="19.5" r="1.3"></circle>`),
    wideHeader: groupIcon(`<path d="M3 12h18"></path><path d="m7 8-4 4 4 4M17 8l4 4-4 4"></path>`)
  };
  var groups = [
    {
      name: "header",
      title: "\u05D4\u05D2\u05D3\u05E8\u05D5\u05EA Header",
      options: [
        ["v1", "V1", "\u05D7\u05D9\u05E4\u05D5\u05E9 \u05D1\u05D9\u05DF \u05D4\u05DC\u05D5\u05D2\u05D5 \u05DC\u05E1\u05DC, \u05D5\u05EA\u05E4\u05E8\u05D9\u05D8 \u05D4\u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D5\u05EA \u05D1\u05E4\u05E1 \u05E0\u05E4\u05E8\u05D3 \u05DE\u05EA\u05D7\u05EA."],
        ["v2", "V2 \xB7 \u05D1\u05E8\u05D9\u05E8\u05EA \u05DE\u05D7\u05D3\u05DC", "\u05D7\u05D9\u05E4\u05D5\u05E9 \u05D1\u05E4\u05E1 \u05D4\u05E2\u05DC\u05D9\u05D5\u05DF, \u05D5\u05EA\u05E4\u05E8\u05D9\u05D8 \u05D4\u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D5\u05EA \u05E2\u05DD \u05D4\u05DE\u05D2\u05D4\u05BE\u05DE\u05E0\u05D9\u05D5 \u05D1\u05D9\u05DF \u05D4\u05DC\u05D5\u05D2\u05D5 \u05DC\u05E1\u05DC."]
      ],
      checkbox: ["wideHeader", "Fullwidth", "\u05D4\u05D3\u05E8, \u05E4\u05D5\u05D8\u05E8, \u05E2\u05DE\u05D5\u05D3 \u05D4\u05D1\u05D9\u05EA, \u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D5\u05EA \u05D5\u05DB\u05DC \u05E9\u05D0\u05E8 \u05D4\u05E8\u05D0\u05E4\u05E8\u05D9\u05DD \u05D4\u05E8\u05D0\u05E9\u05D9\u05D9\u05DD \u05D1\u05E8\u05D5\u05D7\u05D1 90% \u05DE\u05D4\u05DE\u05E1\u05DA. \u05E2\u05DE\u05D5\u05D3\u05D9\u05DD \u05E6\u05E8\u05D9\u05DD \u05D1\u05DB\u05D5\u05D5\u05E0\u05D4, \u05DB\u05DE\u05D5 \u05E2\u05DE\u05D5\u05D3 \u05DE\u05D5\u05E6\u05E8 \u05D5\u05EA\u05E9\u05DC\u05D5\u05DD, \u05E0\u05E9\u05D0\u05E8\u05D9\u05DD \u05DB\u05DE\u05D5 \u05E9\u05D4\u05DD."],
      note: "V2 \u05DE\u05D5\u05E6\u05D2 \u05D1\u05DE\u05E1\u05DB\u05D9\u05DD \u05E8\u05D7\u05D1\u05D9\u05DD. \u05D1\u05DE\u05D5\u05D1\u05D9\u05D9\u05DC \u05E0\u05E9\u05D0\u05E8 \u05D4\u05EA\u05E4\u05E8\u05D9\u05D8 \u05D4\u05E8\u05D2\u05D9\u05DC. \u05E2\u05DD \u05E1\u05E4\u05E7 \u05D0\u05D7\u05D3, \u05EA\u05E4\u05E8\u05D9\u05D8 \u05D4\u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D5\u05EA \u05E0\u05E9\u05D0\u05E8 \u05D1\u05E4\u05E1 \u05E0\u05E4\u05E8\u05D3 \u05DE\u05EA\u05D7\u05EA."
    },
    {
      name: "hero",
      title: "\u05D4\u05D2\u05D3\u05E8\u05D5\u05EA Hero",
      options: [
        ["v1", "V1", "\u05E7\u05E8\u05D5\u05E1\u05DC\u05EA \u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D5\u05EA, \u05D0\u05D9\u05D9\u05D8\u05DD \u05DE\u05E7\u05D5\u05D3\u05DD \u05D5\u05E9\u05E0\u05D9 \u05DE\u05E7\u05D5\u05D3\u05DE\u05D9\u05DD \u05E7\u05D8\u05E0\u05D9\u05DD \u05D1\u05E6\u05D3."],
        ["v2", "V2", "\u05E1\u05DC\u05D9\u05D9\u05D3\u05E8 \u05EA\u05DE\u05D5\u05E0\u05D5\u05EA \u05DE\u05EA\u05D7\u05DC\u05E4\u05D5\u05EA \u05E2\u05DD \u05E0\u05E7\u05D5\u05D3\u05D5\u05EA \u05D3\u05E4\u05D3\u05D5\u05E3, \u05D5\u05DE\u05EA\u05D7\u05EA\u05D9\u05D5 \u05E7\u05E8\u05D5\u05E1\u05DC\u05EA \u05D4\u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D5\u05EA."],
        ["v3", "V3 \xB7 \u05D1\u05E8\u05D9\u05E8\u05EA \u05DE\u05D7\u05D3\u05DC", "\u05E9\u05DC\u05D5\u05E9\u05EA \u05D4\u05D1\u05D0\u05E0\u05E8\u05D9\u05DD \u05DC\u05DE\u05E2\u05DC\u05D4, \u05D5\u05DE\u05EA\u05D7\u05EA\u05D9\u05D4\u05DD \u05E7\u05E8\u05D5\u05E1\u05DC\u05EA \u05D4\u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D5\u05EA \u05E2\u05DD \u05D4\u05DB\u05D5\u05EA\u05E8\u05EA \xAB\u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D5\u05EA \u05E0\u05D1\u05D7\u05E8\u05D5\u05EA\xBB."],
        ["v4", "V4", "\u05DB\u05DE\u05D5 V3, \u05D5\u05D1\u05E6\u05D3 \u05D1\u05DE\u05E7\u05D5\u05DD \u05E9\u05E0\u05D9 \u05D1\u05D0\u05E0\u05E8\u05D9\u05DD \u05DE\u05E9\u05E0\u05D9\u05D9\u05DD, \u05D1\u05D0\u05E0\u05E8 \u05D0\u05D7\u05D3 \u05E2\u05DD \u05EA\u05DE\u05D5\u05E0\u05D5\u05EA \u05DE\u05EA\u05D7\u05DC\u05E4\u05D5\u05EA \u05D5\u05E7\u05D9\u05E9\u05D5\u05E8."]
      ]
    },
    {
      name: "categories",
      title: "\u05D4\u05D2\u05D3\u05E8\u05D5\u05EA \u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D5\u05EA \u05D1\u05E2\u05DE\u05D5\u05D3 \u05D4\u05D1\u05D9\u05EA",
      options: [
        ["v1", "V1", "\u05D1\u05DC\u05D5\u05E7 \u05DC\u05DB\u05DC \u05DE\u05D7\u05DC\u05E7\u05D4 \u05E2\u05DD \u05D8\u05D0\u05D1\u05D9\u05DD \u05D5\u05E9\u05EA\u05D9 \u05E9\u05D5\u05E8\u05D5\u05EA \u05E9\u05DC \u05DE\u05D5\u05E6\u05E8\u05D9\u05DD."],
        ["v2", "V2 \xB7 \u05D1\u05E8\u05D9\u05E8\u05EA \u05DE\u05D7\u05D3\u05DC", "\u05E7\u05E8\u05D5\u05E1\u05DC\u05EA \u05DE\u05D5\u05E6\u05E8\u05D9\u05DD \u05DB\u05DE\u05D5 \u05E7\u05E8\u05D5\u05E1\u05DC\u05EA \u05D4\u05DE\u05D1\u05E6\u05E2\u05D9\u05DD. \u05D4\u05D8\u05D0\u05D1\u05D9\u05DD \u05DE\u05D7\u05DC\u05D9\u05E4\u05D9\u05DD \u05D0\u05EA \u05D4\u05DE\u05D5\u05E6\u05E8\u05D9\u05DD \u05D1\u05E7\u05E8\u05D5\u05E1\u05DC\u05D4."]
      ]
    },
    {
      name: "featured",
      title: "\u05D4\u05D2\u05D3\u05E8\u05D5\u05EA \u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D5\u05EA \u05E0\u05D1\u05D7\u05E8\u05D5\u05EA",
      options: [
        ["v1", "V1 \xB7 \u05D1\u05E8\u05D9\u05E8\u05EA \u05DE\u05D7\u05D3\u05DC", "\u05EA\u05DE\u05D5\u05E0\u05D5\u05EA \u05DE\u05D5\u05E6\u05E8\u05D9\u05DD \u05DC\u05DB\u05DC \u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D4."],
        ["v2", "V2", "\u05D0\u05D9\u05D9\u05E7\u05D5\u05DF \u05E7\u05D5\u05D5\u05D9 \u05DC\u05DB\u05DC \u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D4."]
      ]
    },
    {
      name: "banners",
      title: "\u05D4\u05D2\u05D3\u05E8\u05D5\u05EA \u05D1\u05D0\u05E0\u05E8\u05D9\u05DD",
      options: [
        ["v1", "V1 \xB7 \u05D1\u05E8\u05D9\u05E8\u05EA \u05DE\u05D7\u05D3\u05DC", "\u05D1\u05EA\u05E4\u05E8\u05D9\u05D8 \u05D4\u05DE\u05D1\u05E6\u05E2\u05D9\u05DD \u05D0\u05E8\u05D1\u05E2\u05EA \u05D1\u05D0\u05E0\u05E8\u05D9 \u05D4\u05DE\u05D1\u05E6\u05E2\u05D9\u05DD, \u05D5\u05D1\u05E1\u05DC\u05D9\u05D9\u05D3\u05E8 \u05D4\u05E6\u05D3\u05D3\u05D9 \u05D1\u05E2\u05DE\u05D5\u05D3 \u05D4\u05D1\u05D9\u05EA \u05E9\u05DC\u05D5\u05E9\u05EA \u05D4\u05D1\u05D0\u05E0\u05E8\u05D9\u05DD \u05E9\u05DC \u05D4\u05DE\u05D7\u05DC\u05E7\u05D5\u05EA."],
        ["v2", "V2", "\u05D4\u05D1\u05D0\u05E0\u05E8\u05D9\u05DD \u05DE\u05EA\u05D7\u05DC\u05E4\u05D9\u05DD: \u05D1\u05D0\u05E0\u05E8\u05D9 \u05D4\u05DE\u05D7\u05DC\u05E7\u05D5\u05EA \u05D1\u05EA\u05E4\u05E8\u05D9\u05D8 \u05D4\u05DE\u05D1\u05E6\u05E2\u05D9\u05DD, \u05D5\u05D1\u05D0\u05E0\u05E8\u05D9 \u05D4\u05DE\u05D1\u05E6\u05E2\u05D9\u05DD \u05D1\u05E1\u05DC\u05D9\u05D9\u05D3\u05E8 \u05D4\u05E6\u05D3\u05D3\u05D9 \u05D1\u05E2\u05DE\u05D5\u05D3 \u05D4\u05D1\u05D9\u05EA."]
      ],
      note: "\u05D4\u05E1\u05DC\u05D9\u05D9\u05D3\u05E8 \u05D4\u05E6\u05D3\u05D3\u05D9 \u05DE\u05D5\u05E6\u05D2 \u05D1\u05BEHero V4."
    },
    {
      name: "mobileMenu",
      title: "\u05D4\u05D2\u05D3\u05E8\u05D5\u05EA \u05EA\u05E4\u05E8\u05D9\u05D8 \u05DE\u05D5\u05D1\u05D9\u05D9\u05DC",
      options: [
        ["v1", "V1 \xB7 \u05D1\u05E8\u05D9\u05E8\u05EA \u05DE\u05D7\u05D3\u05DC", "\u05D4\u05EA\u05E4\u05E8\u05D9\u05D8 \u05E0\u05E4\u05EA\u05D7 \u05DE\u05EA\u05D7\u05EA \u05DC\u05D4\u05D3\u05E8."],
        ["v2", "V2", "\u05D4\u05EA\u05E4\u05E8\u05D9\u05D8 \u05E0\u05E4\u05EA\u05D7 \u05E2\u05DC \u05DB\u05DC \u05D4\u05DE\u05E1\u05DA, \u05E2\u05DD \u05D4\u05DC\u05D5\u05D2\u05D5 \u05D1\u05DE\u05E8\u05DB\u05D6 \u05DC\u05DE\u05E2\u05DC\u05D4 \u05D5\u05DB\u05E4\u05EA\u05D5\u05E8 \u05E1\u05D2\u05D9\u05E8\u05D4 \u05DE\u05D9\u05DE\u05D9\u05DF, \u05D1\u05DE\u05E7\u05D5\u05DD \u05D4\u05D4\u05DE\u05D1\u05D5\u05E8\u05D2\u05E8."]
      ],
      note: "\u05D4\u05EA\u05E4\u05E8\u05D9\u05D8 \u05DE\u05D5\u05E6\u05D2 \u05D1\u05DE\u05E1\u05DB\u05D9\u05DD \u05E6\u05E8\u05D9\u05DD \u05DE\u05BE1024 \u05E4\u05D9\u05E7\u05E1\u05DC\u05D9\u05DD."
    },
    {
      name: "suppliers",
      title: "\u05D4\u05D2\u05D3\u05E8\u05D5\u05EA \u05E1\u05E4\u05E7\u05D9\u05DD",
      options: [
        ["v1", "V1 \xB7 \u05D1\u05E8\u05D9\u05E8\u05EA \u05DE\u05D7\u05D3\u05DC", "\u05E8\u05D9\u05D1\u05D5\u05D9 \u05E1\u05E4\u05E7\u05D9\u05DD: \u05E1\u05D5\u05E4\u05E8 \u05D0\u05E9\u05DE\u05D5\u05E8\u05EA, \u05D7\u05D3 \u05E4\u05E2\u05DE\u05D9 \u05D5\u05DB\u05DC\u05D9 \u05D1\u05D9\u05EA, \u05E7\u05E0\u05D9\u05D5\u05DF \u05D0\u05E9\u05DE\u05D5\u05E8\u05EA \u05D5\u05DE\u05D1\u05E6\u05E2\u05D9\u05DD."],
        ["v2", "V2", "\u05E1\u05E4\u05E7 \u05D0\u05D7\u05D3, \u05EA\u05D5\u05E6\u05E8\u05EA. \u05D4\u05EA\u05E4\u05E8\u05D9\u05D8, \u05E7\u05E8\u05D5\u05E1\u05DC\u05EA \u05D4\u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D5\u05EA \u05D5\u05E2\u05DE\u05D5\u05D3 \u05D4\u05D1\u05D9\u05EA \u05DC\u05E4\u05D9 \u05D4\u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D5\u05EA \u05D1\u05E7\u05D8\u05DC\u05D5\u05D2 \u05EA\u05D5\u05E6\u05E8\u05EA."]
      ]
    },
    {
      name: "palette",
      title: "\u05E4\u05DC\u05D8\u05EA \u05E6\u05D1\u05E2\u05D9\u05DD",
      options: [
        ["grey", "\u05D0\u05E4\u05D5\u05E8\u05D9\u05DD \xB7 \u05D1\u05E8\u05D9\u05E8\u05EA \u05DE\u05D7\u05D3\u05DC", "\u05D2\u05D5\u05D5\u05E0\u05D9 \u05D4\u05D0\u05E4\u05D5\u05E8 \u05E9\u05DC \u05D4\u05BEGrey box.", ["#1f1f1f", "#e9e9e9", "#fff"]],
        ["v1", "V1", `\u05DB\u05D4\u05D4 <bdi dir="ltr">#282B4A</bdi>, \u05D1\u05D4\u05D9\u05E8 <bdi dir="ltr">#EEEBDA</bdi> \u05D5\u05DC\u05D1\u05DF.`, ["#282B4A", "#EEEBDA", "#fff"]]
      ]
    },
    {
      name: "logo",
      title: "\u05DC\u05D5\u05D2\u05D5",
      options: [
        ["v1", "V1 \xB7 \u05D1\u05E8\u05D9\u05E8\u05EA \u05DE\u05D7\u05D3\u05DC", "MARKET \u05DE\u05D1\u05D9\u05EA \u05D0\u05E9\u05DE\u05D5\u05E8\u05EA, \u05E2\u05DD \u05E2\u05D2\u05DC\u05EA \u05E7\u05E0\u05D9\u05D5\u05EA."],
        ["v2", "V2", "\u05D0\u05E9\u05DE\u05D5\u05E8\u05EA MARKET \u05E2\u05DD \u05D4\u05DC\u05D1."]
      ],
      note: "\u05D4\u05DC\u05D5\u05D2\u05D5 \u05DE\u05EA\u05D7\u05DC\u05E3 \u05D1\u05D4\u05D3\u05E8, \u05D1\u05EA\u05E4\u05E8\u05D9\u05D8 \u05D4\u05DE\u05D5\u05D1\u05D9\u05D9\u05DC \u05D5\u05D1\u05E4\u05D5\u05D8\u05E8."
    }
  ];
  var state = load();
  var markers = null;
  var onHeroChange = () => {
  };
  var onSuppliersChange = () => {
  };
  function load() {
    try {
      const saved = JSON.parse(localStorage.getItem(KEY) || "{}");
      const current = saved.rev === REV;
      return {
        rev: REV,
        header: current && saved.header === "v1" ? "v1" : defaults.header,
        hero: ["v1", "v2", "v3", "v4"].includes(saved.hero) ? saved.hero : defaults.hero,
        categories: ["v1", "v2"].includes(saved.categories) ? saved.categories : defaults.categories,
        featured: saved.featured === "v2" ? "v2" : defaults.featured,
        banners: saved.banners === "v2" ? "v2" : defaults.banners,
        mobileMenu: saved.mobileMenu === "v2" ? "v2" : defaults.mobileMenu,
        suppliers: saved.suppliers === "v2" ? "v2" : defaults.suppliers,
        palette: saved.palette === "v1" ? "v1" : defaults.palette,
        logo: saved.logo === "v2" ? "v2" : defaults.logo,
        wideHeader: typeof saved.wideHeader === "boolean" ? saved.wideHeader : defaults.wideHeader
      };
    } catch {
      return { rev: REV, ...defaults };
    }
  }
  function save() {
    try {
      localStorage.setItem(KEY, JSON.stringify(state));
    } catch {
    }
  }
  function getTheme() {
    return state;
  }
  function applyPalette() {
    const root = document.documentElement;
    if (state.palette === "grey") delete root.dataset.palette;
    else root.dataset.palette = state.palette;
    const surface = getComputedStyle(root).getPropertyValue("--color-surface").trim();
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", surface);
  }
  function applyLogo() {
    const logo = logos[state.logo] || logos.v1;
    document.documentElement.dataset.logo = state.logo;
    document.querySelectorAll("[data-site-logo]").forEach((img) => {
      if (img.getAttribute("src") === logo.src) return;
      img.src = logo.src;
      img.width = logo.width;
      img.height = logo.height;
    });
  }
  function applyMobileMenu() {
    document.documentElement.dataset.mobileMenu = state.mobileMenu;
    if (state.mobileMenu !== "v2") document.documentElement.classList.remove("is-menu-cover");
  }
  function applyHeader() {
    const search = document.getElementById("search-slot");
    const nav = document.querySelector("[data-main-nav]");
    const topSlot = document.getElementById("topbar-search");
    const tagline = document.getElementById("topbar-tagline");
    const tools = document.querySelector(".header-bar .header-tools");
    if (!search || !nav || !topSlot || !tools) return;
    if (!markers) {
      markers = { search: document.createComment("search-slot"), nav: document.createComment("main-nav") };
      search.before(markers.search);
      nav.before(markers.nav);
    }
    nav.megaClose?.();
    document.documentElement.toggleAttribute("data-header-wide", state.wideHeader);
    const moved = state.header === "v2" && desktop.matches;
    document.documentElement.dataset.headerLayout = moved ? "v2" : "v1";
    if (tagline) tagline.hidden = moved;
    if (moved) topSlot.append(search);
    else markers.search.after(search);
    if (moved && state.suppliers !== "v2") tools.before(nav);
    else markers.nav.after(nav);
  }
  function panelMarkup() {
    return `<div class="theme-panel-head">
    <div>
      <p class="theme-panel-kicker" lang="en">Prototype controls</p>
      <h2 id="theme-panel-title" class="text-xl font-extrabold">\u05D0\u05E4\u05E9\u05E8\u05D5\u05D9\u05D5\u05EA \u05EA\u05D1\u05E0\u05D9\u05EA</h2>
    </div>
    <button class="auth-close" type="button" data-theme-close aria-label="\u05E1\u05D2\u05D9\u05E8\u05EA \u05D0\u05E4\u05E9\u05E8\u05D5\u05D9\u05D5\u05EA \u05D4\u05EA\u05D1\u05E0\u05D9\u05EA">\xD7</button>
  </div>
  <div class="theme-panel-body">
    ${groups.map((group) => `<fieldset class="theme-group">
      <legend><span class="theme-legend-icon">${groupIcons[group.name]}</span>${group.title}</legend>
      ${group.options.map(([value, label, text, swatches]) => `<label class="theme-option">
        <input type="radio" name="${group.name}" value="${value}" ${state[group.name] === value ? "checked" : ""} data-theme-option>
        <span><strong>${label}</strong><small>${text}</small>${swatches ? `<span class="theme-swatches" aria-hidden="true">${swatches.map((color) => `<span style="background:${color}"></span>`).join("")}</span>` : ""}</span>
      </label>`).join("")}
      ${group.checkbox ? `<label class="theme-option">
        <input type="checkbox" name="${group.checkbox[0]}" ${state[group.checkbox[0]] ? "checked" : ""} data-theme-toggle>
        <span><strong class="theme-option-title"><span class="theme-legend-icon">${groupIcons[group.checkbox[0]]}</span>${group.checkbox[1]}</strong><small>${group.checkbox[2]}</small></span>
      </label>` : ""}
      ${group.note ? `<p class="theme-note">${group.note}</p>` : ""}
    </fieldset>`).join("")}
    <button class="btn btn-line theme-reset" type="button" data-theme-reset>\u05D0\u05D9\u05E4\u05D5\u05E1 \u05DC\u05D1\u05E8\u05D9\u05E8\u05EA \u05DE\u05D7\u05D3\u05DC</button>
  </div>`;
  }
  function syncInputs(panel) {
    panel.querySelectorAll("[data-theme-option]").forEach((input) => {
      input.checked = state[input.name] === input.value;
    });
    panel.querySelectorAll("[data-theme-toggle]").forEach((input) => {
      input.checked = state[input.name] === true;
    });
  }
  function setOption(name, value, panel) {
    if (state[name] === value) return;
    state = { ...state, [name]: value };
    save();
    syncInputs(panel);
    if (name === "header" || name === "wideHeader" || name === "suppliers") applyHeader();
    if (name === "hero" || name === "categories" || name === "featured" || name === "banners") onHeroChange();
    if (name === "mobileMenu") applyMobileMenu();
    if (name === "suppliers") onSuppliersChange();
    if (name === "palette") applyPalette();
    if (name === "logo") applyLogo();
  }
  function bindThemeOptions({ heroChange, suppliersChange } = {}) {
    onHeroChange = heroChange || onHeroChange;
    onSuppliersChange = suppliersChange || onSuppliersChange;
    const gear = document.createElement("button");
    gear.type = "button";
    gear.className = "theme-gear";
    gear.setAttribute("aria-label", "\u05D0\u05E4\u05E9\u05E8\u05D5\u05D9\u05D5\u05EA \u05EA\u05D1\u05E0\u05D9\u05EA");
    gear.setAttribute("aria-expanded", "false");
    gear.setAttribute("aria-controls", "theme-panel");
    gear.innerHTML = `${gearIcon}<span class="theme-gear-label" lang="en">Prototype</span>`;
    const panel = document.createElement("aside");
    panel.id = "theme-panel";
    panel.className = "theme-panel";
    panel.setAttribute("role", "dialog");
    panel.setAttribute("aria-modal", "false");
    panel.setAttribute("aria-labelledby", "theme-panel-title");
    panel.inert = true;
    panel.innerHTML = panelMarkup();
    document.body.append(gear, panel);
    const toggle = (open3) => {
      panel.classList.toggle("is-open", open3);
      panel.inert = !open3;
      gear.setAttribute("aria-expanded", String(open3));
      if (open3) panel.querySelector("[data-theme-option]:checked")?.focus();
      else gear.focus();
    };
    gear.addEventListener("click", () => toggle(!panel.classList.contains("is-open")));
    panel.addEventListener("click", (event) => {
      if (event.target.closest("[data-theme-close]")) toggle(false);
      if (event.target.closest("[data-theme-reset]")) {
        setOption("header", defaults.header, panel);
        setOption("hero", defaults.hero, panel);
        setOption("categories", defaults.categories, panel);
        setOption("featured", defaults.featured, panel);
        setOption("banners", defaults.banners, panel);
        setOption("mobileMenu", defaults.mobileMenu, panel);
        setOption("suppliers", defaults.suppliers, panel);
        setOption("palette", defaults.palette, panel);
        setOption("logo", defaults.logo, panel);
        setOption("wideHeader", defaults.wideHeader, panel);
      }
    });
    panel.addEventListener("change", (event) => {
      const input = event.target.closest("[data-theme-option]");
      if (input) setOption(input.name, input.value, panel);
      const toggle2 = event.target.closest("[data-theme-toggle]");
      if (toggle2) setOption(toggle2.name, toggle2.checked, panel);
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && panel.classList.contains("is-open")) toggle(false);
    });
    document.addEventListener("pointerdown", (event) => {
      if (!panel.classList.contains("is-open")) return;
      if (panel.contains(event.target) || gear.contains(event.target)) return;
      panel.classList.remove("is-open");
      panel.inert = true;
      gear.setAttribute("aria-expanded", "false");
    });
    desktop.addEventListener("change", applyHeader);
    applyHeader();
    applyMobileMenu();
    applyPalette();
    applyLogo();
  }

  // js/data/banners.js
  var offerBanners = [
    { href: "#/p/p198", label: "\u05E1\u05D8 \u05D1\u05DC\u05E0\u05D3\u05E8 \u05DE\u05D5\u05D8 \u05E8\u05D1\u05BE\u05EA\u05DB\u05DC\u05D9\u05EA\u05D9, \u05DC\u05E8\u05DB\u05D9\u05E9\u05D4 \u05E2\u05DB\u05E9\u05D9\u05D5", image: "assets/images/banners/offer-hand-blender.webp", size: [675, 640] },
    { href: "#/p/p095", label: "\u05E4\u05E1\u05D8\u05D4 \u05E4\u05D5\u05D6\u05D9\u05DC\u05D9 \u05D5\u05D9\u05D8\u05D0\u05DC\u05D4, \u05DC\u05E8\u05DB\u05D9\u05E9\u05D4 \u05E2\u05DB\u05E9\u05D9\u05D5", image: "assets/images/banners/offer-pasta.webp", size: [675, 640] },
    { href: "#/p/p001", label: "\u05E4\u05D9\u05E8\u05D5\u05E8\u05D9 \u05DC\u05D7\u05DD \u05DE\u05EA\u05D5\u05D1\u05DC\u05D9\u05DD \u05EA\u05D5\u05E6\u05E8\u05EA, \u05DC\u05E8\u05DB\u05D9\u05E9\u05D4 \u05E2\u05DB\u05E9\u05D9\u05D5", image: "assets/images/banners/offer-breadcrumbs.webp", size: [675, 640] },
    { href: "#/p/p116", label: "\u05D2\u05E8\u05E2\u05D9\u05E0\u05D9 \u05EA\u05D9\u05E8\u05E1 \u05DE\u05EA\u05D5\u05E7 \u05EA\u05D5\u05E6\u05E8\u05EA, \u05DC\u05E8\u05DB\u05D9\u05E9\u05D4 \u05E2\u05DB\u05E9\u05D9\u05D5", image: "assets/images/banners/offer-corn.webp", size: [675, 640] }
  ];
  var sideBanners = [
    { href: "#/c/oils", label: "\u05E9\u05DE\u05DF \u05D6\u05D9\u05EA \u05DB\u05EA\u05D9\u05EA \u05DE\u05E2\u05D5\u05DC\u05D4, \u05DC\u05E7\u05E0\u05D9\u05D9\u05D4 \u05E2\u05DB\u05E9\u05D9\u05D5", image: "assets/images/banners/side-olive-oil.webp", size: [1024, 970] },
    { href: "#/c/household", label: "\u05E1\u05D8 \u05E7\u05D5\u05E4\u05E1\u05D0\u05D5\u05EA \u05D0\u05D7\u05E1\u05D5\u05DF, \u05DC\u05E6\u05E4\u05D9\u05D9\u05D4 \u05D1\u05DE\u05D5\u05E6\u05E8", image: "assets/images/banners/side-storage.webp", size: [1024, 970] },
    { href: "#/c/appliances", label: "\u05D0\u05D9\u05D9\u05E8 \u05E4\u05E8\u05D9\u05D9\u05E8 \u05D3\u05D9\u05D2\u05D9\u05D8\u05DC\u05D9, \u05DC\u05E7\u05E0\u05D9\u05D9\u05D4 \u05E2\u05DB\u05E9\u05D9\u05D5", image: "assets/images/banners/side-air-fryer.webp", size: [1024, 970] }
  ];

  // js/components/promo-carousel.js
  var AUTOPLAY_MS = 5e3;
  var mounted = [];
  var heroSlides = [
    {
      image: "assets/images/banners/hero-pantry.webp",
      size: [1024, 539],
      fade: "#f7f2e9",
      kicker: "\u05DE\u05D5\u05E6\u05E8\u05D9 \u05DE\u05D6\u05D5\u05D5\u05D4",
      title: "\u05DB\u05DC \u05DE\u05D4 \u05E9\u05E6\u05E8\u05D9\u05DA",
      sub: "\u05DC\u05DE\u05D6\u05D5\u05D5\u05D4 \u05D1\u05DE\u05E7\u05D5\u05DD \u05D0\u05D7\u05D3",
      text: "\u05E4\u05E1\u05D8\u05D4, \u05D0\u05D5\u05E8\u05D6, \u05E7\u05D8\u05E0\u05D9\u05D5\u05EA, \u05E9\u05DE\u05E0\u05D9\u05DD, \u05E9\u05D9\u05DE\u05D5\u05E8\u05D9\u05DD \u05D5\u05EA\u05D1\u05DC\u05D9\u05E0\u05D9\u05DD \u2013 \u05D1\u05DE\u05D1\u05D7\u05E8 \u05D2\u05D3\u05D5\u05DC \u05D5\u05D1\u05E7\u05E0\u05D9\u05D9\u05D4 \u05E0\u05D5\u05D7\u05D4.",
      cta: { href: "#/d/super", label: "\u05DC\u05E7\u05E0\u05D9\u05D9\u05D4 \u05E2\u05DB\u05E9\u05D9\u05D5" }
    },
    {
      image: "assets/images/banners/hero-home.webp",
      size: [1024, 539],
      fade: "#f7f2e9",
      kicker: "\u05DC\u05D1\u05D9\u05EA \u05D5\u05DC\u05DE\u05D8\u05D1\u05D7",
      title: `<span class="whitespace-nowrap">\u05D7\u05D3\u05BE\u05E4\u05E2\u05DE\u05D9</span> \u05D5\u05DB\u05DC\u05D9 \u05D1\u05D9\u05EA`,
      sub: "\u05DC\u05E9\u05D9\u05DE\u05D5\u05E9 \u05D9\u05D5\u05DE\u05D9\u05D5\u05DE\u05D9 \u05D5\u05DC\u05D0\u05D9\u05E8\u05D5\u05D7",
      text: "\u05DE\u05D2\u05D5\u05D5\u05DF \u05E8\u05D7\u05D1 \u05E9\u05DC \u05DE\u05D5\u05E6\u05E8\u05D9\u05DD \u05DC\u05E9\u05D9\u05DE\u05D5\u05E9 \u05D9\u05D5\u05DE\u05D9\u05D5\u05DE\u05D9 \u05D1\u05D1\u05D9\u05EA, \u05D1\u05DE\u05D8\u05D1\u05D7 \u05D5\u05D1\u05D0\u05D9\u05E8\u05D5\u05D7.",
      cta: { href: "#/d/home", label: "\u05DC\u05DE\u05D2\u05D5\u05D5\u05DF \u05D4\u05DE\u05DC\u05D0" }
    },
    {
      image: "assets/images/banners/hero-appliances.webp",
      size: [1024, 539],
      fade: "#f7f2e9",
      kicker: "\u05DE\u05DB\u05E9\u05D9\u05E8\u05D9 \u05D7\u05E9\u05DE\u05DC",
      title: "\u05DE\u05DB\u05E9\u05D9\u05E8\u05D9 \u05D7\u05E9\u05DE\u05DC",
      sub: "\u05E9\u05DE\u05E9\u05D3\u05E8\u05D2\u05D9\u05DD \u05D0\u05EA \u05D4\u05D1\u05D9\u05EA",
      text: "\u05DE\u05D2\u05D5\u05D5\u05DF \u05E4\u05EA\u05E8\u05D5\u05E0\u05D5\u05EA \u05D7\u05DB\u05DE\u05D9\u05DD \u05DC\u05DE\u05D8\u05D1\u05D7 \u05D5\u05DC\u05D1\u05D9\u05EA \u05D1\u05DE\u05E7\u05D5\u05DD \u05D0\u05D7\u05D3, \u05DC\u05E7\u05E0\u05D9\u05D9\u05D4 \u05E0\u05D5\u05D7\u05D4.",
      cta: { href: "#/d/electronics", label: "\u05DC\u05E6\u05E4\u05D9\u05D9\u05D4 \u05D1\u05DE\u05D5\u05E6\u05E8\u05D9\u05DD" }
    }
  ];
  var SLIDES = heroSlides.length;
  function heroSlide(slide, index) {
    const heading = index === 0 ? "h1" : "h2";
    return `<div class="promo-slide promo-hero" style="--hero-fade:${slide.fade}" role="group" aria-roledescription="\u05E9\u05E7\u05D5\u05E4\u05D9\u05EA" aria-label="${index + 1} \u05DE\u05EA\u05D5\u05DA ${SLIDES}" ${index === 0 ? "" : 'aria-hidden="true"'}>
    <img class="promo-hero-img" src="${slide.image}" alt="" width="${slide.size[0]}" height="${slide.size[1]}" decoding="async">
    <div class="promo-hero-copy" ${index === 0 ? "data-hero-copy" : ""}>
      <p class="promo-hero-kicker">${slide.kicker}</p>
      <${heading} class="promo-hero-title">${slide.title}<br><span class="promo-hero-sub">${slide.sub}</span></${heading}>
      <p class="promo-hero-text">${slide.text}</p>
      <a class="promo-hero-cta" href="${slide.cta.href}" ${index === 0 ? "" : 'tabindex="-1"'}>${slide.cta.label}</a>
    </div>
  </div>`;
  }
  var sideSlides = () => getTheme().banners === "v2" ? offerBanners : sideBanners;
  function carouselControls(count) {
    const dots = Array.from({ length: count }, (_, index) => `<button type="button" class="hero-dot" data-promo-dot="${index}" aria-label="\u05E9\u05E7\u05D5\u05E4\u05D9\u05EA ${index + 1} \u05DE\u05EA\u05D5\u05DA ${count}" ${index === 0 ? 'aria-current="true"' : ""}></button>`).join("");
    return `<button type="button" class="cat-arrow promo-arrow is-prev" data-promo-prev aria-label="\u05D4\u05E9\u05E7\u05D5\u05E4\u05D9\u05EA \u05D4\u05E7\u05D5\u05D3\u05DE\u05EA">
      <svg viewBox="0 0 24 24" class="size-5" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M9 6l6 6-6 6"></path></svg>
    </button>
    <button type="button" class="cat-arrow promo-arrow is-next" data-promo-next aria-label="\u05D4\u05E9\u05E7\u05D5\u05E4\u05D9\u05EA \u05D4\u05D1\u05D0\u05D4">
      <svg viewBox="0 0 24 24" class="size-5" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M15 6l-6 6 6 6"></path></svg>
    </button>
    <div class="hero-dots" role="group" aria-label="\u05D3\u05E4\u05D3\u05D5\u05E3 \u05D1\u05D9\u05DF \u05D4\u05E9\u05E7\u05D5\u05E4\u05D9\u05D5\u05EA">${dots}</div>`;
  }
  function promoCarousel() {
    const slides2 = heroSlides.map(heroSlide).join("");
    return `<div class="home-block promo-carousel overflow-hidden rounded-[12px] border border-line bg-surface lg:col-span-2 lg:row-span-2 lg:min-h-[520px]" data-promo-carousel aria-roledescription="\u05E7\u05E8\u05D5\u05E1\u05DC\u05D4" aria-label="\u05D0\u05D9\u05D9\u05D8\u05DE\u05D9\u05DD \u05DE\u05E7\u05D5\u05D3\u05DE\u05D9\u05DD">
    <div class="promo-viewport"><div class="promo-track">${slides2}</div></div>
    ${carouselControls(SLIDES)}
  </div>`;
  }
  function sideSlide(slide, index, slides2) {
    const count = slides2.length;
    const media = slide.image ? `<img class="side-slide-media" src="${slide.image}" alt="" width="${slide.size[0]}" height="${slide.size[1]}" decoding="async">` : `<span class="proto-label" aria-hidden="true">\u05D1\u05D0\u05E0\u05E8 \u05DE\u05EA\u05D7\u05DC\u05E3 ${index + 1}/${count}</span><span class="side-slide-media" aria-hidden="true"></span>`;
    return `<div class="promo-slide side-slide" role="group" aria-roledescription="\u05E9\u05E7\u05D5\u05E4\u05D9\u05EA" aria-label="${index + 1} \u05DE\u05EA\u05D5\u05DA ${count}" ${index === 0 ? "" : 'aria-hidden="true"'}>
    <a class="side-slide-link${slide.image ? " has-image" : ""}" href="${slide.href}" aria-label="${slide.label}" ${index === 0 ? "" : 'tabindex="-1"'}>
      ${media}
    </a>
  </div>`;
  }
  function sideCarousel() {
    const slides2 = sideSlides();
    return `<div class="home-block promo-carousel side-carousel overflow-hidden rounded-[12px] border border-line bg-white lg:col-start-3 lg:row-span-2" data-promo-carousel data-promo-fade aria-roledescription="\u05E7\u05E8\u05D5\u05E1\u05DC\u05D4" aria-label="\u05D1\u05D0\u05E0\u05E8\u05D9\u05DD \u05DE\u05EA\u05D7\u05DC\u05E4\u05D9\u05DD">
    <div class="promo-viewport"><div class="promo-track">${slides2.map(sideSlide).join("")}</div></div>
    ${carouselControls(slides2.length)}
  </div>`;
  }
  function fadeEngine(root) {
    const slides2 = [...root.querySelectorAll(".promo-slide")];
    const listeners3 = [];
    let current = 0;
    const show = (index) => {
      current = (index + slides2.length) % slides2.length;
      slides2.forEach((slide, n) => slide.classList.toggle("is-active", n === current));
      listeners3.forEach((listener) => listener());
    };
    slides2[0]?.classList.add("is-active");
    return {
      scrollNext: () => show(current + 1),
      scrollPrev: () => show(current - 1),
      scrollTo: show,
      selectedScrollSnap: () => current,
      on: (event, listener) => {
        if (event === "select") listeners3.push(listener);
      },
      destroy: () => {
      }
    };
  }
  function mountOne(root) {
    const Embla = window.EmblaCarousel;
    if (!Embla || root.dataset.ready === "true") return;
    root.dataset.ready = "true";
    const embla2 = root.hasAttribute("data-promo-fade") ? fadeEngine(root) : Embla(root.querySelector(".promo-viewport"), {
      loop: true,
      direction: "rtl",
      duration: prefersReducedMotion() ? 0 : 30
    });
    const entry = { root, embla: embla2, timer: 0, paused: false };
    const stop2 = () => {
      window.clearInterval(entry.timer);
      entry.timer = 0;
    };
    const start2 = () => {
      stop2();
      if (entry.paused || prefersReducedMotion()) return;
      entry.timer = window.setInterval(() => embla2.scrollNext(), AUTOPLAY_MS);
    };
    entry.stop = stop2;
    embla2.on("select", () => {
      const current = embla2.selectedScrollSnap();
      root.querySelectorAll("[data-promo-dot]").forEach((dot, index) => {
        if (index === current) dot.setAttribute("aria-current", "true");
        else dot.removeAttribute("aria-current");
      });
      root.querySelectorAll(".promo-slide").forEach((slide, index) => {
        slide.toggleAttribute("aria-hidden", index !== current);
        slide.querySelectorAll("a").forEach((link) => link.setAttribute("tabindex", index === current ? "0" : "-1"));
      });
      start2();
    });
    root.querySelector("[data-promo-prev]")?.addEventListener("click", () => embla2.scrollPrev());
    root.querySelector("[data-promo-next]")?.addEventListener("click", () => embla2.scrollNext());
    root.querySelectorAll("[data-promo-dot]").forEach((dot) => {
      dot.addEventListener("click", () => embla2.scrollTo(Number(dot.dataset.promoDot)));
    });
    const pause = (value) => {
      entry.paused = value;
      if (value) stop2();
      else start2();
    };
    root.addEventListener("mouseenter", () => pause(true));
    root.addEventListener("mouseleave", () => pause(false));
    root.addEventListener("focusin", () => pause(true));
    root.addEventListener("focusout", (event) => {
      if (!root.contains(event.relatedTarget)) pause(false);
    });
    start2();
    mounted.push(entry);
  }
  function mountPromoCarousels(...roots) {
    mounted = mounted.filter((entry) => {
      if (entry.root.isConnected) return true;
      entry.stop();
      entry.embla.destroy();
      return false;
    });
    roots.filter(Boolean).forEach((root) => root.querySelectorAll("[data-promo-carousel]").forEach(mountOne));
  }

  // js/components/suppliers.js
  var tozeretSlugs = ["breadcrumbs", "grains", "rice", "pasta", "tortillas", "oils", "spices", "more"];
  function isSingleSupplier() {
    return getTheme().suppliers === "v2";
  }
  function supplierCategories() {
    return isSingleSupplier() ? tozeretSlugs.map(getCategory).filter(Boolean) : categories;
  }
  function inSupplierScope(product) {
    return !isSingleSupplier() || tozeretSlugs.includes(product.categorySlug);
  }

  // js/screens/home.js
  function supplierCatalog() {
    return supplierCategories().map((category) => catalogGridSection({
      id: `cat-${category.slug}-title`,
      title: category.name,
      href: `#/c/${category.slug}`,
      tabs: [[category.slug, category.name]],
      className: "home-section",
      layout: getTheme().categories === "v2" ? "rail" : "grid",
      showTabs: false
    })).join("");
  }
  function departmentCatalogs() {
    if (isSingleSupplier()) return supplierCatalog();
    return ["super", "home", "electronics"].map((id, index) => {
      const department = getDepartment(id);
      const tabs = department.slugs.map((slug) => {
        const category = getCategory(slug);
        return category ? [slug, category.name] : null;
      }).filter(Boolean);
      return catalogGridSection({
        id: `dept-${id}-title`,
        title: department.name,
        href: `#/d/${id}`,
        tabs,
        icon: id,
        className: "home-section",
        layout: getTheme().categories === "v2" ? "rail" : "grid"
      });
    }).join("");
  }
  function renderHome() {
    const offers = products.filter((product) => inSupplierScope(product) && getCommerce(product.id)?.compareAt).slice(0, 10);
    return `<div class="home-page wrap">
    ${getTheme().hero === "v1" ? `<div class="home-hero">${heroBlock()}</div>` : ""}

    ${departmentCatalogs()}

    <section class="home-section" aria-labelledby="offers-title">
      <div class="catalog-head">
        <h2 id="offers-title" class="text-2xl font-extrabold"><span class="nav-icon is-offers" aria-hidden="true"></span>\u05DE\u05D5\u05E6\u05E8\u05D9\u05DD \u05D7\u05D3\u05E9\u05D9\u05DD \u05D1\u05DE\u05D1\u05E6\u05E2</h2>
        <a class="deal-all" href="#/d/offers">\u05DC\u05DB\u05DC \u05D4\u05DE\u05D1\u05E6\u05E2\u05D9\u05DD
          <svg viewBox="0 0 24 24" class="size-4" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M15 6l-6 6 6 6"></path></svg>
        </a>
      </div>
      ${carousel(offers, "\u05DE\u05D5\u05E6\u05E8\u05D9\u05DD \u05D7\u05D3\u05E9\u05D9\u05DD \u05D1\u05DE\u05D1\u05E6\u05E2")}
    </section>

  </div>`;
  }
  function setHeroTop(visible) {
    const root = document.getElementById("hero-top");
    const title = document.getElementById("category-band-title");
    if (title) title.hidden = !visible;
    if (!root) return;
    root.hidden = !visible;
    root.innerHTML = visible ? `<div class="home-page wrap home-hero">${heroBlock()}</div>` : "";
  }
  function heroBlock() {
    return `<section class="grid gap-4 lg:grid-cols-3 lg:grid-rows-2" aria-label="\u05DE\u05D1\u05E6\u05E2\u05D9 \u05DB\u05E0\u05D9\u05E1\u05D4">
      ${promoCarousel()}
      ${getTheme().hero === "v4" ? sideCarousel() : sideBanners2()}
    </section>`;
  }
  function sideBanners2() {
    return `<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:contents">
        <a href="#/c/oils" class="home-block hero-side lg:col-start-3 lg:row-start-1">
          <span class="proto-label" aria-hidden="true">\u05D1\u05D0\u05E0\u05E8 \u05DE\u05E9\u05E0\u05D9 1/2</span>
          <div>
            <p class="text-xs font-bold text-muted">\u05E9\u05DE\u05E0\u05D9\u05DD \u05D5\u05E8\u05D8\u05D1\u05D9\u05DD</p>
            <h2 class="mt-1 text-lg font-extrabold leading-tight lg:text-2xl">\u05DE\u05D5\u05E6\u05E8 \u05D0\u05D5 \u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D4 \u05DC\u05E7\u05D9\u05D3\u05D5\u05DD</h2>
            <span class="hero-cta mt-4">\u05D4\u05E0\u05E2\u05D4 \u05DC\u05E4\u05E2\u05D5\u05DC\u05D4</span>
          </div>
          <span class="hero-side-media" aria-hidden="true"></span>
        </a>
        <a href="#/c/spices" class="home-block hero-side lg:col-start-3 lg:row-start-2">
          <span class="proto-label" aria-hidden="true">\u05D1\u05D0\u05E0\u05E8 \u05DE\u05E9\u05E0\u05D9 2/2</span>
          <div>
            <p class="text-xs font-bold text-muted">\u05EA\u05D1\u05DC\u05D9\u05E0\u05D9\u05DD</p>
            <h2 class="mt-1 text-lg font-extrabold leading-tight lg:text-2xl">\u05DE\u05D5\u05E6\u05E8 \u05D0\u05D5 \u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D4 \u05DC\u05E7\u05D9\u05D3\u05D5\u05DD</h2>
            <span class="hero-cta mt-4">\u05D4\u05E0\u05E2\u05D4 \u05DC\u05E4\u05E2\u05D5\u05DC\u05D4</span>
          </div>
          <span class="hero-side-media" aria-hidden="true"></span>
        </a>
      </div>`;
  }

  // js/data/manufacturers.js
  var manufacturers = [
    {
      id: "tozeret",
      name: "\u05EA\u05D5\u05E6\u05E8\u05EA",
      sample: false,
      logo: "assets/images/brand/tozeret.png",
      blurb: "\u05DE\u05D6\u05D5\u05D5\u05D4 \u05D9\u05D1\u05E9 \u05DC\u05DE\u05D8\u05D1\u05D7: \u05E4\u05D9\u05E8\u05D5\u05E8\u05D9 \u05DC\u05D7\u05DD, \u05D3\u05D2\u05E0\u05D9\u05DD, \u05D0\u05D5\u05E8\u05D6, \u05E4\u05E1\u05D8\u05D4, \u05E9\u05D9\u05DE\u05D5\u05E8\u05D9\u05DD, \u05E9\u05DE\u05E0\u05D9\u05DD \u05D5\u05EA\u05D1\u05DC\u05D9\u05E0\u05D9\u05DD.",
      banner: "assets/images/banners/kitchen.jpg",
      bannerAlt: "\u05DE\u05D5\u05E6\u05E8\u05D9 \u05EA\u05D5\u05E6\u05E8\u05EA \u05E2\u05E8\u05D5\u05DB\u05D9\u05DD \u05E2\u05DC \u05E9\u05D9\u05E9 \u05D1\u05DE\u05D8\u05D1\u05D7",
      bannerTitle: "\u05D4\u05DE\u05D6\u05D5\u05D5\u05D4 \u05E9\u05DC \u05EA\u05D5\u05E6\u05E8\u05EA",
      bannerText: "\u05D4\u05E7\u05D8\u05DC\u05D5\u05D2 \u05D4\u05DE\u05DC\u05D0, \u05DC\u05E4\u05D9 \u05D4\u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D5\u05EA \u05E9\u05DC \u05D4\u05D9\u05E6\u05E8\u05DF."
    },
    {
      id: "sample-a",
      name: "\u05D9\u05E6\u05E8\u05DF \u05DC\u05D3\u05D5\u05D2\u05DE\u05D4",
      sample: true,
      logo: null,
      blurb: "\u05DB\u05E8\u05D8\u05D9\u05E1 \u05DC\u05D3\u05D5\u05D2\u05DE\u05D4 \u05D1\u05DC\u05D1\u05D3. \u05D0\u05D9\u05DF \u05E7\u05D8\u05DC\u05D5\u05D2 \u05D0\u05DE\u05D9\u05EA\u05D9 \u05DC\u05D9\u05E6\u05E8\u05DF \u05D6\u05D4.",
      banner: null,
      bannerAlt: "",
      bannerTitle: "\u05EA\u05D5\u05DB\u05DF \u05DC\u05D3\u05D5\u05D2\u05DE\u05D4",
      bannerText: "\u05D6\u05D5 \u05D0\u05D5\u05EA\u05D4 \u05EA\u05D1\u05E0\u05D9\u05EA \u05E2\u05DE\u05D5\u05D3. \u05DE\u05D5\u05E6\u05E8\u05D9\u05DD \u05D9\u05D5\u05E4\u05D9\u05E2\u05D5 \u05DB\u05D0\u05DF \u05DB\u05E9\u05D9\u05D4\u05D9\u05D4 \u05E7\u05D8\u05DC\u05D5\u05D2."
    },
    {
      id: "sample-b",
      name: "\u05D9\u05E6\u05E8\u05DF \u05DC\u05D3\u05D5\u05D2\u05DE\u05D4 \u05D1\u05F3",
      sample: true,
      logo: null,
      blurb: "\u05DB\u05E8\u05D8\u05D9\u05E1 \u05DC\u05D3\u05D5\u05D2\u05DE\u05D4 \u05D1\u05DC\u05D1\u05D3. \u05D0\u05D9\u05DF \u05E7\u05D8\u05DC\u05D5\u05D2 \u05D0\u05DE\u05D9\u05EA\u05D9 \u05DC\u05D9\u05E6\u05E8\u05DF \u05D6\u05D4.",
      banner: null,
      bannerAlt: "",
      bannerTitle: "\u05EA\u05D5\u05DB\u05DF \u05DC\u05D3\u05D5\u05D2\u05DE\u05D4",
      bannerText: "\u05D4\u05D7\u05DC\u05E4\u05EA \u05D4\u05E8\u05E9\u05D5\u05DE\u05D4 \u05DE\u05E1\u05E4\u05D9\u05E7\u05D4. \u05D0\u05D9\u05DF \u05E2\u05DE\u05D5\u05D3 \u05E0\u05E4\u05E8\u05D3 \u05DC\u05D9\u05E6\u05E8\u05DF."
    }
  ];
  function getManufacturer(id) {
    return manufacturers.find((item) => item.id === id) || null;
  }

  // js/screens/market.js
  function card(manufacturer) {
    const mark2 = `<span class="grid size-16 place-items-center rounded-full border border-dashed border-line text-xs font-bold text-muted" aria-hidden="true"></span>`;
    return `<a href="#/m/${esc(manufacturer.id)}" class="flex h-full flex-col gap-3 rounded-2xl border border-line p-5 hover:border-blue">
    ${mark2}
    <h2 class="text-xl font-extrabold">${esc(manufacturer.name)}</h2>
    <p class="text-sm text-muted">${esc(manufacturer.blurb)}</p>
    ${manufacturer.sample ? `<p class="text-xs font-bold text-pink">\u05D0\u05D9\u05DF \u05E7\u05D8\u05DC\u05D5\u05D2 \u05D0\u05DE\u05D9\u05EA\u05D9</p>` : `<p class="text-sm font-bold text-blue">\u05DC\u05E7\u05D8\u05DC\u05D5\u05D2</p>`}
  </a>`;
  }
  function renderMarket() {
    const picked = products.slice(0, 8);
    return `<div class="wrap py-6">
    <section class="grid items-center gap-4 overflow-hidden rounded-2xl border border-line bg-surface text-ink lg:grid-cols-[1.3fr_0.7fr]" aria-labelledby="market-title">
      <div class="p-8 lg:p-12" data-hero-copy>
        <p class="text-sm font-bold text-muted">\u05D0\u05E9\u05DE\u05D5\u05E8\u05EA MARKET</p>
        <h1 id="market-title" class="mt-2 text-4xl font-extrabold leading-tight lg:text-5xl">\u05DB\u05DE\u05D4 \u05D9\u05E6\u05E8\u05E0\u05D9\u05DD. \u05E1\u05DC \u05D0\u05D7\u05D3.</h1>
        <p class="mt-3 max-w-xl text-lg text-muted">\u05D3\u05E3 \u05D4\u05D1\u05D9\u05EA \u05DC\u05DE\u05E8\u05E7\u05D8\u05E4\u05DC\u05D9\u05D9\u05E1. \u05EA\u05D5\u05E6\u05E8\u05EA \u05D4\u05D5\u05D0 \u05D4\u05E7\u05D8\u05DC\u05D5\u05D2 \u05D4\u05D0\u05DE\u05D9\u05EA\u05D9. \u05E9\u05D0\u05E8 \u05D4\u05DB\u05E8\u05D8\u05D9\u05E1\u05D9\u05DD \u05D4\u05DD \u05D3\u05D5\u05D2\u05DE\u05D4 \u05E2\u05D3 \u05E9\u05D9\u05D2\u05D9\u05E2 \u05E7\u05D8\u05DC\u05D5\u05D2.</p>
        <a class="btn mt-6" href="#/m/tozeret">\u05DE\u05EA\u05D7\u05D9\u05DC\u05D9\u05DD \u05DE\u05EA\u05D5\u05E6\u05E8\u05EA</a>
      </div>
      <span class="m-8 min-h-64 rounded-2xl bg-white lg:m-12" aria-hidden="true"></span>
    </section>

    <section class="py-12" aria-labelledby="makers-title">
      <h2 id="makers-title" class="mb-5 text-2xl font-extrabold">\u05D4\u05D9\u05E6\u05E8\u05E0\u05D9\u05DD</h2>
      <ul class="grid gap-4 md:grid-cols-3">
        ${manufacturers.map((manufacturer) => `<li>${card(manufacturer)}</li>`).join("")}
      </ul>
    </section>

    <section class="pb-12" aria-labelledby="mix-title">
      <div class="mb-5 flex items-end justify-between gap-4">
        <h2 id="mix-title" class="text-2xl font-extrabold">\u05DE\u05D4\u05DE\u05D6\u05D5\u05D5\u05D4 \u05E9\u05DC \u05EA\u05D5\u05E6\u05E8\u05EA</h2>
        <a class="text-sm font-bold text-blue" href="#/m/tozeret">\u05DC\u05DB\u05DC \u05D4\u05DE\u05D5\u05E6\u05E8\u05D9\u05DD</a>
      </div>
      <ul class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        ${picked.map((product) => `<li>${shelfCard(product)}</li>`).join("")}
      </ul>
    </section>

    <section class="grid items-center gap-6 overflow-hidden rounded-2xl bg-surface p-8 lg:grid-cols-2" aria-labelledby="market-box">
      <div>
        <h2 id="market-box" class="text-3xl font-extrabold">\u05D0\u05D5\u05EA\u05D4 \u05E9\u05E4\u05D4, \u05E1\u05D9\u05D3\u05D5\u05E8 \u05D0\u05D7\u05E8</h2>
        <p class="mt-3 text-muted">\u05D4\u05DB\u05D5\u05EA\u05E8\u05EA, \u05D4\u05D7\u05D9\u05E4\u05D5\u05E9, \u05D4\u05DB\u05E8\u05D8\u05D9\u05E1\u05D9\u05DD \u05D5\u05D4\u05E4\u05D5\u05D8\u05E8 \u05D6\u05D4\u05D9\u05DD \u05DC\u05D3\u05E3 \u05EA\u05D5\u05E6\u05E8\u05EA. \u05DB\u05D0\u05DF \u05D4\u05E1\u05D3\u05E8 \u05DE\u05E9\u05E8\u05EA \u05DB\u05DE\u05D4 \u05D9\u05E6\u05E8\u05E0\u05D9\u05DD.</p>
      </div>
      <span class="min-h-48 rounded-2xl bg-white" aria-hidden="true"></span>
    </section>
  </div>`;
  }

  // js/components/filters.js
  function applyListing(list, query) {
    let items = list.slice();
    if (query.brand) items = items.filter((product) => product.brand === query.brand);
    if (query.category) items = items.filter((product) => product.categorySlug === query.category);
    if (query.offers === "1") items = items.filter((product) => getCommerce(product.id)?.compareAt);
    const sort = query.sort || "name";
    items.sort((a, b) => {
      if (sort === "price-asc") return (getCommerce(a.id)?.price || 0) - (getCommerce(b.id)?.price || 0);
      if (sort === "price-desc") return (getCommerce(b.id)?.price || 0) - (getCommerce(a.id)?.price || 0);
      return a.name.localeCompare(b.name, "he");
    });
    return items;
  }
  function listingControls({ categories: categories2, query }) {
    const categoryOptions = categories2 ? [`<option value="">\u05DB\u05DC \u05D4\u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D5\u05EA</option>`].concat(categories2.map((category) => `<option value="${esc(category.slug)}"${query.category === category.slug ? " selected" : ""}>${esc(category.name)}</option>`)).join("") : "";
    const sorts = [
      ["name", "\u05E9\u05DD"],
      ["price-asc", "\u05DE\u05D7\u05D9\u05E8, \u05DE\u05D4\u05E0\u05DE\u05D5\u05DA"],
      ["price-desc", "\u05DE\u05D7\u05D9\u05E8, \u05DE\u05D4\u05D2\u05D1\u05D5\u05D4"]
    ];
    return `<form class="listing-bar" data-listing-form>
    <div class="listing-filters">
      ${categories2 ? `<label class="listing-select"><span>\u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D4</span><select name="category">${categoryOptions}</select></label>` : ""}
      <label class="listing-check">
        <input type="checkbox" name="offers" value="1"${query.offers === "1" ? " checked" : ""}>
        \u05DE\u05D1\u05E6\u05E2\u05D9\u05DD \u05D1\u05DC\u05D1\u05D3
      </label>
    </div>
    <label class="listing-select listing-sort"><span>\u05DE\u05D9\u05D5\u05DF</span><select name="sort">${sorts.map(([value, label]) => `<option value="${value}"${(query.sort || "name") === value ? " selected" : ""}>${label}</option>`).join("")}</select></label>
  </form>`;
  }
  function pageSize() {
    return window.matchMedia("(min-width: 1280px)").matches ? 25 : 24;
  }
  function visibleSlice(items, query) {
    const limit = pageSize();
    if (query.all === "1" || items.length <= limit) return { shown: items, more: 0 };
    return { shown: items.slice(0, limit), more: items.length - limit };
  }

  // js/screens/listing.js
  function crumbs(items) {
    return `<nav class="mb-4 text-sm text-muted" aria-label="\u05DE\u05D9\u05E7\u05D5\u05DD">${items.map((item, index) => index === items.length - 1 ? `<span aria-current="page">${esc(item.label)}</span>` : `<a class="font-semibold text-blue" href="${esc(item.href)}">${esc(item.label)}</a>`).join('<span aria-hidden="true"> / </span>')}</nav>`;
  }
  function moreButton(more) {
    if (!more) return "";
    return `<button type="button" class="btn btn-line mx-auto mt-6" data-show-all>\u05D4\u05E6\u05D2\u05EA \u05DB\u05DC \u05D4\u05DE\u05D5\u05E6\u05E8\u05D9\u05DD, \u05E2\u05D5\u05D3 ${more}</button>`;
  }
  function renderCategory(slug, query) {
    if (slug === "electronics") {
      return `<article class="wrap py-8">
      ${crumbs([{ href: "#/", label: "\u05D3\u05E3 \u05D4\u05D1\u05D9\u05EA" }, { label: "\u05E7\u05E0\u05D9\u05D5\u05DF \u05D0\u05E9\u05DE\u05D5\u05E8\u05EA" }])}
      <h1 class="text-3xl font-extrabold">\u05E7\u05E0\u05D9\u05D5\u05DF \u05D0\u05E9\u05DE\u05D5\u05E8\u05EA</h1>
      <p class="mt-2 text-muted">\u05D0\u05D9\u05DF \u05DE\u05D5\u05E6\u05E8\u05D9\u05DD \u05DC\u05D4\u05E6\u05D2\u05D4.</p>
    </article>`;
    }
    const category = getCategory(slug);
    if (!category) return renderMissing("\u05D4\u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D4 \u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D4");
    const source = productsByCategory(slug);
    const items = applyListing(source, query);
    const view2 = visibleSlice(items, query);
    return `<article class="wrap py-8">
    ${crumbs([{ href: "#/", label: "\u05D3\u05E3 \u05D4\u05D1\u05D9\u05EA" }, { label: category.name }])}
    <h1 class="text-3xl font-extrabold">${esc(category.name)}</h1>
    <p class="mt-2 text-muted">${items.length} \u05DE\u05D5\u05E6\u05E8\u05D9\u05DD \u05D1\u05E7\u05D8\u05DC\u05D5\u05D2 \u05EA\u05D5\u05E6\u05E8\u05EA</p>
    <div class="mt-6">
      ${listingControls({ categories: null, query })}
      ${productGrid(view2.shown)}
      ${moreButton(view2.more)}
    </div>
  </article>`;
  }
  function renderManufacturer(id, query) {
    const manufacturer = getManufacturer(id);
    if (!manufacturer) return renderMissing("\u05D4\u05D9\u05E6\u05E8\u05DF \u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0");
    const source = manufacturer.sample ? [] : products.filter((product) => product.manufacturerId === manufacturer.id);
    const items = applyListing(source, query);
    const view2 = visibleSlice(items, query);
    const mark2 = `<span class="grid size-20 place-items-center rounded-full border border-line bg-white" aria-hidden="true"></span>`;
    return `<article>
    <section class="relative min-h-72 overflow-hidden border-b border-line bg-surface text-ink">
      <div class="wrap relative flex min-h-72 items-end gap-4 py-8">
        ${mark2}
        <div>
          ${crumbs([{ href: "#/", label: "\u05D3\u05E3 \u05D4\u05D1\u05D9\u05EA" }, { href: "#/market", label: "\u05D9\u05E6\u05E8\u05E0\u05D9\u05DD" }, { label: manufacturer.name }])}
          <h1 class="text-4xl font-extrabold">${esc(manufacturer.name)}</h1>
          <p class="mt-2 max-w-xl text-muted">${esc(manufacturer.blurb)}</p>
        </div>
      </div>
    </section>
    <div class="wrap py-8">
      <section class="mb-10 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]" aria-label="\u05EA\u05D5\u05DB\u05DF \u05D4\u05D9\u05E6\u05E8\u05DF">
        <div class="rounded-2xl bg-paper p-6">
          <h2 class="text-2xl font-extrabold">${esc(manufacturer.bannerTitle)}</h2>
          <p class="mt-2 text-muted">${esc(manufacturer.bannerText)}</p>
        </div>
        <div class="rounded-2xl border border-line p-6">
          <h2 class="font-extrabold">\u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D5\u05EA</h2>
          ${manufacturer.sample ? `<p class="mt-2 text-sm text-muted">\u05D0\u05D9\u05DF \u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D5\u05EA \u05DC\u05D4\u05E6\u05D2\u05D4.</p>` : `<ul class="mt-3 flex flex-wrap gap-2">${categories.map((category) => `<li><a class="inline-flex min-h-10 items-center rounded-full border border-line px-3 text-sm font-semibold hover:border-blue" href="#/c/${esc(category.slug)}">${esc(category.name)}</a></li>`).join("")}</ul>`}
        </div>
      </section>
      <section aria-labelledby="maker-grid">
        <h2 id="maker-grid" class="mb-4 text-2xl font-extrabold">\u05D4\u05DE\u05D5\u05E6\u05E8\u05D9\u05DD</h2>
        ${manufacturer.sample ? `<p class="rounded-2xl bg-paper px-5 py-8 font-semibold">\u05DC\u05D9\u05E6\u05E8\u05DF \u05D4\u05D6\u05D4 \u05D0\u05D9\u05DF \u05E7\u05D8\u05DC\u05D5\u05D2. \u05D4\u05EA\u05D1\u05E0\u05D9\u05EA \u05DE\u05D5\u05DB\u05E0\u05D4 \u05DC\u05E0\u05EA\u05D5\u05E0\u05D9\u05DD.</p>` : `
          ${listingControls({ categories, query })}
          ${productGrid(view2.shown)}
          ${moreButton(view2.more)}
        `}
      </section>
    </div>
  </article>`;
  }
  function renderDepartment(id, query) {
    const department = getDepartment(id);
    if (!department) return renderMissing("\u05D4\u05DE\u05D7\u05DC\u05E7\u05D4 \u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D4");
    const sections = department.slugs.map((slug) => getCategory(slug)).filter(Boolean);
    const source = department.offers ? products.filter((product) => getCommerce(product.id)?.compareAt) : department.slugs.flatMap((slug) => productsByCategory(slug));
    if (!source.length) {
      return `<article class="wrap py-8">
      ${crumbs([{ href: "#/", label: "\u05D3\u05E3 \u05D4\u05D1\u05D9\u05EA" }, { label: department.name }])}
      <h1 class="text-3xl font-extrabold">${esc(department.name)}</h1>
      <p class="mt-2 text-muted">\u05D0\u05D9\u05DF \u05DE\u05D5\u05E6\u05E8\u05D9\u05DD \u05DC\u05D4\u05E6\u05D2\u05D4.</p>
    </article>`;
    }
    const items = applyListing(source, query);
    const view2 = visibleSlice(items, query);
    const chips = sections.length > 1 ? `<ul class="mt-5 flex flex-wrap gap-2">${sections.map((section) => `<li><a class="inline-flex min-h-10 items-center rounded-full border border-line px-3 text-sm font-semibold" href="#/c/${esc(section.slug)}">${esc(section.name)}</a></li>`).join("")}</ul>` : "";
    return `<article class="wrap py-8">
    ${crumbs([{ href: "#/", label: "\u05D3\u05E3 \u05D4\u05D1\u05D9\u05EA" }, { label: department.name }])}
    <h1 class="flex items-center gap-3 text-3xl font-extrabold"><span class="nav-icon is-${esc(department.id)} h-8" aria-hidden="true"></span>${esc(department.name)}</h1>
    <p class="mt-2 text-muted">${items.length} \u05DE\u05D5\u05E6\u05E8\u05D9\u05DD \u05D1\u05DE\u05D7\u05DC\u05E7\u05D4</p>
    ${chips}
    <div class="mt-6">
      ${listingControls({ categories: null, query })}
      ${productGrid(view2.shown)}
      ${moreButton(view2.more)}
    </div>
  </article>`;
  }
  function renderSearch(query) {
    const text = (query.q || "").trim();
    const source = (text ? searchProducts(text) : products).filter(inSupplierScope);
    const items = applyListing(source, query);
    const view2 = visibleSlice(items, query);
    return `<article class="wrap py-8">
    ${crumbs([{ href: "#/", label: "\u05D3\u05E3 \u05D4\u05D1\u05D9\u05EA" }, { label: "\u05D7\u05D9\u05E4\u05D5\u05E9" }])}
    <h1 class="text-3xl font-extrabold">${text ? `\u05EA\u05D5\u05E6\u05D0\u05D5\u05EA \u05E2\u05D1\u05D5\u05E8 \u201E${esc(text)}\u201D` : "\u05D7\u05D9\u05E4\u05D5\u05E9 \u05D1\u05E7\u05D8\u05DC\u05D5\u05D2"}</h1>
    <p class="mt-2 text-muted">${items.length} \u05DE\u05D5\u05E6\u05E8\u05D9\u05DD</p>
    <div class="mt-6">
      ${listingControls({ categories: null, query })}
      ${productGrid(view2.shown)}
      ${moreButton(view2.more)}
    </div>
  </article>`;
  }
  function renderMissing(title) {
    return `<article class="wrap py-16 text-center">
    <h1 class="text-3xl font-extrabold">${esc(title)}</h1>
    <a class="btn mt-6" href="#/">\u05D7\u05D6\u05E8\u05D4 \u05DC\u05D3\u05E3 \u05D4\u05D1\u05D9\u05EA</a>
  </article>`;
  }

  // js/components/product-view.js
  var prevIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M9 6l6 6-6 6"></path></svg>`;
  var nextIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M15 6l-6 6 6 6"></path></svg>`;
  var tones = ["var(--color-fill)", "var(--color-surface)", "var(--color-paper)", "var(--color-line)", "var(--color-fill)"];
  function face(index) {
    return `<span class="product-thumb-face is-placeholder" style="background-color:${tones[index]}"></span>`;
  }
  function productGallery(product, badge = "") {
    if (productPhoto(product)) {
      return `<div class="product-gallery">
      <div class="product-stage">
        <div class="product-frame"><span class="product-thumb-face has-photo">${photoImg(product, { alt: product.name, eager: true })}</span></div>
        ${badge}
      </div>
    </div>`;
    }
    const thumbs = tones.map((_, index) => `<button type="button" class="product-thumb${index === 0 ? " is-selected" : ""}" data-gallery-index="${index}" aria-label="\u05EA\u05DE\u05D5\u05E0\u05D4 ${index + 1} \u05DE\u05EA\u05D5\u05DA ${tones.length}"${index === 0 ? ` aria-current="true"` : ""}>${face(index)}</button>`).join("");
    return `<div class="product-gallery" data-product-gallery data-active="0">
    <div class="product-stage">
      <button type="button" class="gallery-nav" data-gallery-step="-1" aria-label="\u05D4\u05EA\u05DE\u05D5\u05E0\u05D4 \u05D4\u05E7\u05D5\u05D3\u05DE\u05EA">${prevIcon}</button>
      <div class="product-frame" data-gallery-frame>${face(0)}</div>
      ${badge}
      <button type="button" class="gallery-nav is-next" data-gallery-step="1" aria-label="\u05D4\u05EA\u05DE\u05D5\u05E0\u05D4 \u05D4\u05D1\u05D0\u05D4">${nextIcon}</button>
    </div>
    <div class="product-thumbs">${thumbs}</div>
    <p class="product-note">\u05EA\u05DE\u05D5\u05E0\u05EA \u05D4\u05DE\u05D5\u05E6\u05E8 \u05D6\u05DE\u05E0\u05D9\u05EA. \u05D0\u05D9\u05DF \u05E6\u05D9\u05DC\u05D5\u05DD \u05EA\u05D5\u05D0\u05DD \u05D1\u05E7\u05D5\u05D1\u05E6\u05D9 \u05D4\u05DE\u05E7\u05D5\u05E8.</p>
  </div>`;
  }
  function productFolds(product, options = {}) {
    const descriptionOpen = options.openDescription === false ? "" : " open";
    const shipping = options.shipping === false ? "" : `<details class="product-fold">
      <summary>\u05DE\u05D7\u05D9\u05E8 \u05DE\u05E9\u05DC\u05D5\u05D7</summary>
      <div class="product-fold-body">
        <p>\u05D1\u05D4\u05D3\u05D2\u05DE\u05D4 \u05DE\u05EA\u05D5\u05D5\u05E1\u05E3 \u05D3\u05DE\u05D9 \u05DE\u05E9\u05DC\u05D5\u05D7 \u05E9\u05DC ${money(deliveryFee)}. \u05D4\u05E9\u05D9\u05E8\u05D5\u05EA \u05D4\u05D5\u05D0 \u05E2\u05D3 \u05D4\u05D1\u05D9\u05EA, \u05D1\u05DC\u05D9 \u05D7\u05D9\u05D5\u05D1 \u05D0\u05DE\u05D9\u05EA\u05D9.</p>
      </div>
    </details>`;
    return `<div class="product-folds">
    <details class="product-fold"${descriptionOpen}>
      <summary>\u05EA\u05D9\u05D0\u05D5\u05E8</summary>
      <div class="product-fold-body">
        <p>${esc(product.name)} \u05DE\u05D1\u05D9\u05EA ${esc(product.brand)}, \u05D1\u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D9\u05EA ${esc(product.categoryName)}. \u05D0\u05E8\u05D9\u05D6\u05D4 \u05E9\u05DC ${esc(product.weight)}.</p>
        ${makerLines(product)}
      </div>
    </details>
    <details class="product-fold">
      <summary>\u05DE\u05E4\u05E8\u05D8</summary>
      <div class="product-fold-body">
        <dl class="product-specs">
          ${spec("\u05DE\u05E7\u05D8", product.id)}
          ${spec("\u05DE\u05E9\u05E7\u05DC", product.weight)}
          ${spec("\u05D1\u05E8\u05E7\u05D5\u05D3", product.barcode)}
          ${spec("\u05DE\u05D5\u05EA\u05D2", product.brand)}
          ${spec("\u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D4", product.categoryName)}
          ${spec("\u05E2\u05DE\u05D5\u05D3 \u05D1\u05E7\u05D8\u05DC\u05D5\u05D2", String(product.catalogPage))}
        </dl>
      </div>
    </details>
    ${shipping}
  </div>`;
  }
  function makerLines(product) {
    if (product.manufacturerId !== "tozeret") return "";
    return `<p><a href="#/m/tozeret">\u05D9\u05E6\u05E8\u05DF: \u05EA\u05D5\u05E6\u05E8\u05EA</a></p>
      <p><strong>\u05DB\u05E9\u05E8\u05D5\u05EA: \u05D1\u05D3\u05F4\u05E5 \u05D1\u05D9\u05EA \u05D9\u05D5\u05E1\u05E3</strong></p>`;
  }
  function spec(label, value) {
    return `<div><dt>${esc(label)}</dt><dd dir="auto">${esc(value)}</dd></div>`;
  }
  function productBuy(product) {
    return `<div class="product-buy" data-buy>
    <div class="product-qty" dir="ltr">
      <button type="button" data-qty="-1" aria-label="\u05D4\u05E4\u05D7\u05EA\u05EA \u05DB\u05DE\u05D5\u05EA">\u2212</button>
      <input data-qty-input inputmode="numeric" maxlength="2" value="1" aria-label="\u05DB\u05DE\u05D5\u05EA">
      <button type="button" data-qty="1" aria-label="\u05D4\u05D2\u05D3\u05DC\u05EA \u05DB\u05DE\u05D5\u05EA">+</button>
    </div>
    <button type="button" class="product-add" data-add="${esc(product.id)}">\u05D4\u05D5\u05E1\u05E4\u05D4 \u05DC\u05E1\u05DC</button>
  </div>`;
  }
  function productDescription(product) {
    return `<section class="product-description" aria-labelledby="product-description-title">
    <h2 id="product-description-title">\u05EA\u05D9\u05D0\u05D5\u05E8</h2>
    <p>${esc(product.name)} \u05DE\u05D1\u05D9\u05EA ${esc(product.brand)}, \u05D1\u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D9\u05EA ${esc(product.categoryName)}.</p>
  </section>`;
  }
  function productTabs(product) {
    const tabs = [
      ["about", "\u05E2\u05DC \u05D4\u05DE\u05D5\u05E6\u05E8", `<dl class="product-specs">
        ${spec("\u05DE\u05E7\u05D8", product.id)}
        ${spec("\u05DE\u05E9\u05E7\u05DC", product.weight)}
        ${spec("\u05D1\u05E8\u05E7\u05D5\u05D3", product.barcode)}
        ${spec("\u05DE\u05D5\u05EA\u05D2", product.brand)}
        ${spec("\u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D4", product.categoryName)}
        ${spec("\u05E2\u05DE\u05D5\u05D3 \u05D1\u05E7\u05D8\u05DC\u05D5\u05D2", String(product.catalogPage))}
      </dl>
      ${makerLines(product)}`],
      ["service", "\u05E9\u05D9\u05E8\u05D5\u05EA \u05D5\u05D0\u05D7\u05E8\u05D9\u05D5\u05EA", `<div class="product-tab-cols">
        <div>
          <h3>\u05E9\u05D9\u05E8\u05D5\u05EA \u05DC\u05E7\u05D5\u05D7\u05D5\u05EA</h3>
          <p>\u05D8\u05DC\u05E4\u05D5\u05DF <a href="tel:03-000-0000" dir="ltr">03-000-0000</a> \u05D0\u05D5 <a href="https://wa.me/97230000000" target="_blank" rel="noopener noreferrer">\u05D5\u05D5\u05D8\u05E1\u05D0\u05E4</a>.</p>
          <button type="button" class="product-tab-link" data-open-service>\u05D4\u05E9\u05D0\u05E8\u05EA \u05E4\u05E0\u05D9\u05D9\u05D4</button>
        </div>
        <div>
          <h3>\u05D0\u05D7\u05E8\u05D9\u05D5\u05EA</h3>
          <p>\u05EA\u05E0\u05D0\u05D9 \u05D4\u05D0\u05D7\u05E8\u05D9\u05D5\u05EA \u05DC\u05DE\u05D5\u05E6\u05E8 \u05D9\u05E4\u05D5\u05E8\u05E1\u05DE\u05D5 \u05D1\u05D2\u05E8\u05E1\u05D4 \u05D4\u05E4\u05E2\u05D9\u05DC\u05D4.</p>
        </div>
      </div>`],
      ["delivery", "\u05DE\u05E9\u05DC\u05D5\u05D7 \u05D5\u05D0\u05E1\u05E4\u05E7\u05D4", `<div class="product-tab-cols">
        <div>
          <h3>\u05DE\u05E9\u05DC\u05D5\u05D7 \u05E2\u05D3 \u05D4\u05D1\u05D9\u05EA</h3>
          <p>\u05D4\u05D4\u05D6\u05DE\u05E0\u05D4 \u05DE\u05D2\u05D9\u05E2\u05D4 \u05E2\u05D3 \u05D4\u05D3\u05DC\u05EA. \u05DE\u05D7\u05D9\u05E8 \u05DE\u05E9\u05DC\u05D5\u05D7 ${money(deliveryFee)} \u05DC\u05D4\u05D6\u05DE\u05E0\u05D4.</p>
          <button type="button" class="product-tab-link" data-open-delivery>\u05D1\u05D3\u05D9\u05E7\u05EA \u05DB\u05EA\u05D5\u05D1\u05EA \u05DC\u05DE\u05E9\u05DC\u05D5\u05D7</button>
        </div>
        <div>
          <h3>\u05D6\u05DE\u05E0\u05D9 \u05D0\u05E1\u05E4\u05E7\u05D4</h3>
          <p>\u05DE\u05E9\u05DC\u05D5\u05D7\u05D9\u05DD \u05D4\u05D7\u05DC \u05DE\u05DE\u05D7\u05E8 \u05DE\u05E9\u05E2\u05D4 8:00 \u05E2\u05D3 20:00 \u05D1\u05E2\u05E8\u05D1.</p>
        </div>
      </div>`]
    ];
    return `<section class="product-tabs" data-product-tabs aria-label="\u05E4\u05E8\u05D8\u05D9 \u05D4\u05DE\u05D5\u05E6\u05E8">
    <div class="product-tablist" role="tablist" aria-label="\u05E4\u05E8\u05D8\u05D9 \u05D4\u05DE\u05D5\u05E6\u05E8">
      ${tabs.map(([id, label], index) => `<button type="button" role="tab" id="product-tab-${id}" aria-controls="product-panel-${id}" aria-selected="${index === 0}" tabindex="${index === 0 ? "0" : "-1"}" data-product-tab="${id}">${label}</button>`).join("")}
    </div>
    ${tabs.map(([id, label, body], index) => `<details class="product-tab${index === 0 ? " is-active" : ""}" data-product-panel="${id}"${index === 0 ? " open" : ""}>
      <summary>${label}</summary>
      <div class="product-tab-body" id="product-panel-${id}" role="tabpanel" aria-labelledby="product-tab-${id}">${body}</div>
    </details>`).join("")}
  </section>`;
  }
  function mountProductTabs(root = document) {
    root.querySelectorAll("[data-product-tabs]").forEach((section) => {
      if (section.dataset.bound) return;
      section.dataset.bound = "1";
      const tabs = [...section.querySelectorAll("[data-product-tab]")];
      const select = (tab, focus = false) => {
        tabs.forEach((item) => {
          const on = item === tab;
          item.setAttribute("aria-selected", String(on));
          item.tabIndex = on ? 0 : -1;
          const panel = section.querySelector(`[data-product-panel="${item.dataset.productTab}"]`);
          panel.classList.toggle("is-active", on);
          if (on) panel.open = true;
        });
        if (focus) tab.focus();
      };
      section.addEventListener("click", (event) => {
        const tab = event.target.closest("[data-product-tab]");
        if (tab) select(tab);
      });
      section.querySelector("[role=tablist]").addEventListener("keydown", (event) => {
        const index = tabs.indexOf(document.activeElement);
        if (index < 0) return;
        const step = { ArrowLeft: 1, ArrowRight: -1 }[event.key];
        if (step) {
          event.preventDefault();
          select(tabs[(index + step + tabs.length) % tabs.length], true);
        } else if (event.key === "Home" || event.key === "End") {
          event.preventDefault();
          select(event.key === "Home" ? tabs[0] : tabs[tabs.length - 1], true);
        }
      });
    });
  }
  function mountProductGalleries(root = document) {
    root.querySelectorAll("[data-product-gallery]").forEach((gallery) => {
      if (gallery.dataset.bound) return;
      gallery.dataset.bound = "1";
      const frame2 = gallery.querySelector("[data-gallery-frame]");
      const thumbs = [...gallery.querySelectorAll("[data-gallery-index]")];
      const apply = (index) => {
        const next = (index + thumbs.length) % thumbs.length;
        const faceNode = thumbs[next].querySelector(".product-thumb-face");
        frame2.replaceChildren(faceNode.cloneNode(true));
        thumbs.forEach((thumb, item) => {
          const on = item === next;
          thumb.classList.toggle("is-selected", on);
          if (on) thumb.setAttribute("aria-current", "true");
          else thumb.removeAttribute("aria-current");
        });
        gallery.dataset.active = String(next);
      };
      gallery.addEventListener("click", (event) => {
        const thumb = event.target.closest("[data-gallery-index]");
        if (thumb && gallery.contains(thumb)) {
          apply(Number(thumb.dataset.galleryIndex));
          return;
        }
        const step = event.target.closest("[data-gallery-step]");
        if (step && gallery.contains(step)) {
          apply(Number(gallery.dataset.active || 0) + Number(step.dataset.galleryStep));
        }
      });
    });
  }

  // js/screens/product.js
  var sep = `<svg class="product-sep" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M15 6l-6 6 6 6"></path></svg>`;
  function renderProduct(id) {
    const product = getProduct(id);
    if (!product) {
      return `<article class="wrap py-16 text-center"><h1 class="text-3xl font-extrabold">\u05D4\u05DE\u05D5\u05E6\u05E8 \u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0</h1><a class="btn mt-6" href="#/">\u05D7\u05D6\u05E8\u05D4 \u05DC\u05D3\u05E3 \u05D4\u05D1\u05D9\u05EA</a></article>`;
    }
    const commerce = getCommerce(product.id);
    const siblings = productsByCategory(product.categorySlug);
    const related = siblings.filter((item) => item.id !== product.id).slice(0, 8);
    const price = commerce ? `<p class="product-price">${money(commerce.price)}${commerce.compareAt ? `<s>${money(commerce.compareAt)}</s>` : ""}</p>` : `<p class="product-price is-pending">\u05DE\u05D7\u05D9\u05E8 \u05D9\u05E2\u05D5\u05D3\u05DB\u05DF</p>`;
    return `<article class="product-page wrap">
    <nav class="product-crumbs" aria-label="\u05DE\u05D9\u05E7\u05D5\u05DD">
      <a href="#/">\u05D3\u05E3 \u05D4\u05D1\u05D9\u05EA</a>
      ${sep}
      <a href="#/c/${esc(product.categorySlug)}">${esc(product.categoryName)}</a>
      ${sep}
      <span aria-current="page">${esc(product.name)}</span>
    </nav>
    <div class="product-layout">
      ${productGallery(product, commerce?.compareAt ? `<span class="sale-badge">\u05D1\u05DE\u05D1\u05E6\u05E2</span>` : "")}
      <div class="product-info">
        <div class="product-head">
          <p class="product-brand">${esc(product.brand)}</p>
          <h1>${esc(product.name)}</h1>
          ${price}
        </div>
        ${productBuy(product)}
        ${productDescription(product)}
      </div>
    </div>
    ${productTabs(product)}
    ${related.length ? `<section class="product-related" aria-labelledby="related-title"><h2 id="related-title">\u05D0\u05D5\u05DC\u05D9 \u05D9\u05E2\u05E0\u05D9\u05D9\u05DF \u05D0\u05D5\u05EA\u05DA</h2>${carousel(related, "\u05DE\u05D5\u05E6\u05E8\u05D9\u05DD \u05E7\u05E9\u05D5\u05E8\u05D9\u05DD")}</section>` : ""}
  </article>`;
  }

  // js/state/cart.js
  var KEY2 = "ashmoret-cart";
  var listeners = /* @__PURE__ */ new Set();
  function read() {
    try {
      const data = JSON.parse(localStorage.getItem(KEY2) || '{"items":[]}');
      if (!Array.isArray(data.items)) return { items: [] };
      return {
        items: data.items.filter((item) => item && item.id && item.qty > 0).map((item) => ({ id: item.id, qty: Number(item.qty) }))
      };
    } catch {
      return { items: [] };
    }
  }
  function write(state3) {
    localStorage.setItem(KEY2, JSON.stringify(state3));
    listeners.forEach((listener) => listener(state3));
  }
  function getCart() {
    return read();
  }
  function subscribe(listener) {
    listeners.add(listener);
    return () => listeners.delete(listener);
  }
  function addItem(id, qty = 1) {
    const state3 = read();
    const row = state3.items.find((item) => item.id === id);
    if (row) row.qty += qty;
    else state3.items.push({ id, qty });
    write(state3);
  }
  function setQty(id, qty) {
    const state3 = read();
    const row = state3.items.find((item) => item.id === id);
    if (!row) return;
    row.qty = Math.max(1, Math.min(99, qty));
    write(state3);
  }
  function removeItem(id) {
    const state3 = read();
    state3.items = state3.items.filter((item) => item.id !== id);
    write(state3);
  }
  function clearCart() {
    write({ items: [] });
  }
  function countItems(state3 = read()) {
    return state3.items.reduce((sum, item) => sum + item.qty, 0);
  }
  function lineTotal(item) {
    const commerce = getCommerce(item.id);
    if (!commerce) return 0;
    return commerce.price * item.qty;
  }
  function subtotal(state3 = read()) {
    return state3.items.reduce((sum, item) => sum + lineTotal(item), 0);
  }

  // js/screens/cart.js
  function renderCart() {
    const items = getCart().items.map((item) => ({ ...item, product: getProduct(item.id), commerce: getCommerce(item.id) })).filter((item) => item.product && item.commerce);
    if (!items.length) {
      return `<article class="wrap py-16 text-center">
      <h1 class="text-3xl font-extrabold">\u05D4\u05E1\u05DC \u05E8\u05D9\u05E7</h1>
      <p class="mt-2 text-muted">\u05D0\u05E4\u05E9\u05E8 \u05DC\u05D4\u05EA\u05D7\u05D9\u05DC \u05DE\u05D4\u05DE\u05D5\u05E6\u05E8\u05D9\u05DD \u05D4\u05E0\u05D1\u05D7\u05E8\u05D9\u05DD \u05D1\u05D3\u05E3 \u05D4\u05D1\u05D9\u05EA.</p>
      <a class="btn mt-6" href="#/">\u05DC\u05D3\u05E3 \u05D4\u05D1\u05D9\u05EA</a>
    </article>`;
    }
    const goods = subtotal();
    const total = goods + deliveryFee;
    return `<article class="wrap py-8">
    <h1 class="text-3xl font-extrabold">\u05E1\u05DC \u05D4\u05E7\u05E0\u05D9\u05D5\u05EA</h1>
    <div class="mt-6 grid items-start gap-8 lg:grid-cols-[1fr_320px]">
      <ul class="grid gap-4">
        ${items.map((item) => `<li class="grid grid-cols-[88px_1fr] gap-4 rounded-2xl border border-line p-3">
          <a href="#/p/${esc(item.product.id)}" class="card-media${productPhoto(item.product) ? " has-photo" : ""}" tabindex="-1" aria-hidden="true">
            ${photoImg(item.product) || `<span class="block h-full w-full"></span>`}
          </a>
          <div>
            <h2 class="font-extrabold"><a href="#/p/${esc(item.product.id)}">${esc(item.product.name)}</a></h2>
            <p class="text-sm text-muted">${esc(item.product.weight)}</p>
            <p class="mt-1 font-bold">${money(item.commerce.price)}</p>
            <div class="mt-3 flex flex-wrap items-center gap-3">
              <div class="flex items-center rounded-full border border-line">
                <button type="button" class="icon-btn" data-cart-step="-1" data-id="${esc(item.product.id)}" aria-label="\u05D4\u05E4\u05D7\u05EA\u05EA \u05DB\u05DE\u05D5\u05EA">\u2212</button>
                <span class="w-8 text-center font-bold">${item.qty}</span>
                <button type="button" class="icon-btn" data-cart-step="1" data-id="${esc(item.product.id)}" aria-label="\u05D4\u05D2\u05D3\u05DC\u05EA \u05DB\u05DE\u05D5\u05EA">+</button>
              </div>
              <p class="font-extrabold">${money(lineTotal(item))}</p>
              <button type="button" class="cart-dock-remove" data-remove="${esc(item.product.id)}" aria-label="\u05D4\u05E1\u05E8\u05D4"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 7h16"></path><path d="M9 7V5h6v2"></path><path d="M7 7l1 13h8l1-13"></path><path d="M10 11v5M14 11v5"></path></svg></button>
            </div>
          </div>
        </li>`).join("")}
      </ul>
      <aside class="rounded-2xl bg-paper p-5">
        <h2 class="text-lg font-extrabold">\u05E1\u05D9\u05DB\u05D5\u05DD</h2>
        <dl class="mt-4 grid gap-2 text-sm">
          <div class="flex justify-between"><dt>\u05DE\u05D5\u05E6\u05E8\u05D9\u05DD</dt><dd>${money(goods)}</dd></div>
          <div class="flex justify-between"><dt>\u05DE\u05D7\u05D9\u05E8 \u05DE\u05E9\u05DC\u05D5\u05D7</dt><dd>${money(deliveryFee)}</dd></div>
          <div class="flex justify-between border-t border-line pt-2 text-base font-extrabold"><dt>\u05DC\u05EA\u05E9\u05DC\u05D5\u05DD</dt><dd>${money(total)}</dd></div>
        </dl>
        <p class="mt-3 text-xs text-muted">\u05D4\u05DE\u05D7\u05D9\u05E8\u05D9\u05DD \u05D5\u05D3\u05DE\u05D9 \u05D4\u05DE\u05E9\u05DC\u05D5\u05D7 \u05D4\u05DD \u05E0\u05EA\u05D5\u05E0\u05D9 \u05D4\u05D3\u05D2\u05DE\u05D4, \u05DC\u05D0 \u05D7\u05D9\u05E9\u05D5\u05D1 \u05D0\u05DE\u05D9\u05EA\u05D9.</p>
        <a class="btn mt-5 w-full" href="#/checkout">\u05D4\u05DE\u05E9\u05DA \u05DC\u05EA\u05E9\u05DC\u05D5\u05DD</a>
      </aside>
    </div>
  </article>`;
  }

  // js/components/order-lines.js
  function itemCountLabel(items) {
    const count = items.reduce((sum, item) => sum + item.qty, 0);
    return count === 1 ? "\u05E4\u05E8\u05D9\u05D8 \u05D0\u05D7\u05D3" : `${count} \u05E4\u05E8\u05D9\u05D8\u05D9\u05DD`;
  }
  function orderLines(items, { scroll = false } = {}) {
    return `<ul class="order-lines${scroll ? " is-scroll" : ""}">${items.map((item) => `<li class="order-line">
      <span class="order-line-thumb${productPhoto(item.product) ? " has-photo" : ""}" aria-hidden="true">${photoImg(item.product)}</span>
      <div class="min-w-0">
        <p class="order-line-name">${esc(item.name)}</p>
        <p class="order-line-meta">${item.weight ? `${esc(item.weight)} \xB7 ` : ""}${item.qty} \u05D9\u05D7\u05F3</p>
      </div>
      <p class="order-line-total">${money(item.total)}</p>
    </li>`).join("")}</ul>`;
  }

  // js/screens/checkout.js
  var lockIcon = `<svg class="pay-lock" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="11" width="14" height="9" rx="2"></rect><path d="M8 11V8a4 4 0 0 1 8 0v3"></path></svg>`;
  var payPrograms = [
    ["ashmoret", "\u05DE\u05D7\u05D6\u05D9\u05E7\u05D9 \u05DB\u05E8\u05D8\u05D9\u05E1 \u05D0\u05E9\u05E8\u05D0\u05D9 \u05D0\u05E9\u05DE\u05D5\u05E8\u05EA \u05D1\u05DC\u05D1\u05D3"],
    ["general", "\u05DB\u05DC\u05DC \u05D4\u05DC\u05E7\u05D5\u05D7\u05D5\u05EA"]
  ];
  function selectPayTab(tab, focus) {
    const tabs = [...tab.closest("[role=tablist]").querySelectorAll("[data-pay-tab]")];
    tabs.forEach((item) => {
      const on = item === tab;
      item.setAttribute("aria-selected", String(on));
      item.tabIndex = on ? 0 : -1;
    });
    const panel = document.getElementById("pay-panel");
    panel?.setAttribute("aria-labelledby", tab.id);
    const input = panel?.querySelector("[data-pay-program]");
    if (input) input.value = tab.dataset.payTab;
    if (focus) tab.focus();
  }
  function bindCheckout() {
    document.addEventListener("click", (event) => {
      const tab = event.target.closest("[data-pay-tab]");
      if (tab) selectPayTab(tab, false);
    });
    document.addEventListener("keydown", (event) => {
      const tab = event.target.closest?.("[data-pay-tab]");
      if (!tab) return;
      const tabs = [...tab.closest("[role=tablist]").querySelectorAll("[data-pay-tab]")];
      const index = tabs.indexOf(tab);
      const keys = { ArrowLeft: index + 1, ArrowRight: index - 1, Home: 0, End: tabs.length - 1 };
      if (!(event.key in keys)) return;
      event.preventDefault();
      selectPayTab(tabs[(keys[event.key] + tabs.length) % tabs.length], true);
    });
  }
  function renderCheckout(errors = {}, values = {}) {
    const rows2 = getCart().items.filter((item) => getProduct(item.id) && getCommerce(item.id));
    if (!rows2.length) {
      return `<article class="wrap py-16 text-center"><h1 class="text-3xl font-extrabold">\u05D4\u05E1\u05DC \u05E8\u05D9\u05E7</h1><a class="btn mt-6" href="#/">\u05DC\u05D3\u05E3 \u05D4\u05D1\u05D9\u05EA</a></article>`;
    }
    const goods = subtotal();
    const program = payPrograms.some(([id]) => id === values.cardProgram) ? values.cardProgram : payPrograms[0][0];
    const lines = rows2.map((item) => {
      const product = getProduct(item.id);
      return { product, name: product.name, weight: product.weight, qty: item.qty, total: getCommerce(item.id).price * item.qty };
    });
    const field2 = (name, label, type = "text", extra = "") => `<label class="field">
    <span class="text-sm font-semibold">${label}</span>
    <input name="${name}" type="${type}" autocomplete="${extra}" value="${esc(values[name] || "")}" aria-invalid="${errors[name] ? "true" : "false"}" ${errors[name] ? `aria-describedby="${name}-error"` : ""}>
    ${errors[name] ? `<span id="${name}-error" class="field-error">${esc(errors[name])}</span>` : ""}
  </label>`;
    const payField = (name, label, attrs, keep = false) => `<label class="field">
    <span class="text-sm font-semibold">${label}</span>
    <input name="${name}" ${attrs} dir="ltr" value="${keep ? esc(values[name] || "") : ""}" aria-invalid="${errors[name] ? "true" : "false"}" ${errors[name] ? `aria-describedby="${name}-error"` : ""}>
    ${errors[name] ? `<span id="${name}-error" class="field-error">${esc(errors[name])}</span>` : ""}
  </label>`;
    return `<article class="wrap checkout-page py-8">
    <h1 class="text-3xl font-extrabold">\u05EA\u05E9\u05DC\u05D5\u05DD</h1>
    <form id="checkout-form" class="checkout-layout mt-6" novalidate>
      <div class="checkout-main">
        <section class="checkout-card" aria-labelledby="checkout-delivery-title">
          <h2 id="checkout-delivery-title" class="checkout-card-title">\u05E4\u05E8\u05D8\u05D9 \u05DE\u05E9\u05DC\u05D5\u05D7</h2>
          <div class="form-row">
            ${field2("firstName", "\u05E9\u05DD \u05E4\u05E8\u05D8\u05D9", "text", "given-name")}
            ${field2("lastName", "\u05E9\u05DD \u05DE\u05E9\u05E4\u05D7\u05D4", "text", "family-name")}
          </div>
          <div class="form-row">
            ${field2("phone", "\u05D8\u05DC\u05E4\u05D5\u05DF", "tel", "tel")}
            ${field2("city", "\u05E2\u05D9\u05E8", "text", "address-level2")}
          </div>
          <div class="form-row">
            ${field2("street", "\u05E8\u05D7\u05D5\u05D1", "text", "address-line1")}
            ${field2("house", "\u05DE\u05E1\u05E4\u05E8 \u05D1\u05D9\u05EA", "text", "on")}
          </div>
          <label class="field">
            <span class="text-sm font-semibold">\u05D4\u05E2\u05E8\u05D5\u05EA \u05DC\u05E9\u05DC\u05D9\u05D7</span>
            <textarea name="note">${esc(values.note || "")}</textarea>
          </label>
        </section>
        <section class="checkout-card" aria-labelledby="checkout-payment-title">
          <div class="checkout-pay-head">
            <h2 id="checkout-payment-title" class="checkout-card-title">\u05EA\u05E9\u05DC\u05D5\u05DD \u05D1\u05DB\u05E8\u05D8\u05D9\u05E1 \u05D0\u05E9\u05E8\u05D0\u05D9</h2>
            <span class="pay-secure">${lockIcon}\u05EA\u05E9\u05DC\u05D5\u05DD \u05DE\u05D0\u05D5\u05D1\u05D8\u05D7 \xB7 Hyp</span>
          </div>
          <img class="pay-cards" src="assets/images/payment-methods.png" alt="\u05DB\u05E8\u05D8\u05D9\u05E1\u05D9\u05DD \u05E0\u05EA\u05DE\u05DB\u05D9\u05DD: Visa, CB, American Express, Maestro, Mastercard, PayPal" width="282" height="25">
          <div class="pay-box">
            <div class="pay-tabs" role="tablist" aria-label="\u05E1\u05D5\u05D2 \u05DC\u05E7\u05D5\u05D7">
              ${payPrograms.map(([id, label]) => `<button type="button" role="tab" id="pay-tab-${id}" aria-controls="pay-panel" aria-selected="${id === program}" tabindex="${id === program ? "0" : "-1"}" data-pay-tab="${id}">${label}</button>`).join("")}
            </div>
            <div class="hyp-frame" id="pay-panel" role="tabpanel" aria-labelledby="pay-tab-${program}">
              <input type="hidden" name="cardProgram" value="${program}" data-pay-program>
              <span class="proto-label" aria-hidden="true">\u05D8\u05D5\u05E4\u05E1 Hyp \xB7 \u05D4\u05D3\u05D2\u05DE\u05D4</span>
              <div class="form-row">
                ${payField("ccName", "\u05E9\u05DD \u05D1\u05E2\u05DC \u05D4\u05DB\u05E8\u05D8\u05D9\u05E1", `type="text" autocomplete="cc-name"`, true)}
                ${payField("ccId", "\u05EA\u05E2\u05D5\u05D3\u05EA \u05D6\u05D4\u05D5\u05EA \u05E9\u05DC \u05D1\u05E2\u05DC \u05D4\u05DB\u05E8\u05D8\u05D9\u05E1", `type="text" inputmode="numeric" autocomplete="off" maxlength="9"`)}
              </div>
              ${payField("ccNumber", "\u05DE\u05E1\u05E4\u05E8 \u05DB\u05E8\u05D8\u05D9\u05E1", `type="text" inputmode="numeric" autocomplete="cc-number" maxlength="23" placeholder="0000 0000 0000 0000"`)}
              <div class="form-row">
                ${payField("ccExp", "\u05EA\u05D5\u05E7\u05E3", `type="text" inputmode="numeric" autocomplete="cc-exp" maxlength="5" placeholder="MM/YY"`, true)}
                ${payField("ccCvv", "CVV", `type="password" inputmode="numeric" autocomplete="cc-csc" maxlength="4"`)}
              </div>
            </div>
          </div>
          <p class="text-sm text-muted">\u05D4\u05D3\u05D2\u05DE\u05D4 \u05D1\u05DC\u05D1\u05D3: \u05DC\u05D0 \u05DE\u05EA\u05D1\u05E6\u05E2 \u05D7\u05D9\u05D5\u05D1, \u05D5\u05E4\u05E8\u05D8\u05D9 \u05D4\u05DB\u05E8\u05D8\u05D9\u05E1 \u05DC\u05D0 \u05E0\u05E9\u05DE\u05E8\u05D9\u05DD. \u05D0\u05E4\u05E9\u05E8 \u05DC\u05D4\u05E7\u05DC\u05D9\u05D3 \u05DB\u05DC \u05E2\u05E8\u05DA.</p>
        </section>
      </div>
      <aside class="checkout-card checkout-summary" aria-labelledby="checkout-summary-title">
        <div class="checkout-summary-head">
          <h2 id="checkout-summary-title" class="checkout-card-title">\u05D4\u05D4\u05D6\u05DE\u05E0\u05D4</h2>
          <span>${itemCountLabel(lines)}</span>
        </div>
        ${orderLines(lines, { scroll: true })}
        <dl class="summary-totals">
          <div><dt>\u05DE\u05D5\u05E6\u05E8\u05D9\u05DD</dt><dd>${money(goods)}</dd></div>
          <div><dt>\u05DE\u05D7\u05D9\u05E8 \u05DE\u05E9\u05DC\u05D5\u05D7</dt><dd>${money(deliveryFee)}</dd></div>
          <div class="is-total"><dt>\u05DC\u05EA\u05E9\u05DC\u05D5\u05DD</dt><dd>${money(goods + deliveryFee)}</dd></div>
        </dl>
        <button class="btn checkout-submit" type="submit">${lockIcon}\u05EA\u05E9\u05DC\u05D5\u05DD ${money(goods + deliveryFee)} \xB7 \u05D4\u05D3\u05D2\u05DE\u05D4</button>
      </aside>
    </form>
  </article>`;
  }
  var required = {
    firstName: "\u05E0\u05D0 \u05DC\u05DE\u05DC\u05D0 \u05E9\u05DD \u05E4\u05E8\u05D8\u05D9.",
    lastName: "\u05E0\u05D0 \u05DC\u05DE\u05DC\u05D0 \u05E9\u05DD \u05DE\u05E9\u05E4\u05D7\u05D4.",
    phone: "\u05E0\u05D0 \u05DC\u05DE\u05DC\u05D0 \u05D8\u05DC\u05E4\u05D5\u05DF.",
    city: "\u05E0\u05D0 \u05DC\u05DE\u05DC\u05D0 \u05E2\u05D9\u05E8.",
    street: "\u05E0\u05D0 \u05DC\u05DE\u05DC\u05D0 \u05E8\u05D7\u05D5\u05D1.",
    house: "\u05E0\u05D0 \u05DC\u05DE\u05DC\u05D0 \u05DE\u05E1\u05E4\u05E8 \u05D1\u05D9\u05EA.",
    ccName: "\u05E0\u05D0 \u05DC\u05DE\u05DC\u05D0 \u05D0\u05EA \u05D4\u05E9\u05DD \u05E9\u05E2\u05DC \u05D4\u05DB\u05E8\u05D8\u05D9\u05E1.",
    ccId: "\u05E0\u05D0 \u05DC\u05DE\u05DC\u05D0 \u05EA\u05E2\u05D5\u05D3\u05EA \u05D6\u05D4\u05D5\u05EA.",
    ccNumber: "\u05E0\u05D0 \u05DC\u05DE\u05DC\u05D0 \u05DE\u05E1\u05E4\u05E8 \u05DB\u05E8\u05D8\u05D9\u05E1.",
    ccExp: "\u05E0\u05D0 \u05DC\u05DE\u05DC\u05D0 \u05EA\u05D5\u05E7\u05E3.",
    ccCvv: "\u05E0\u05D0 \u05DC\u05DE\u05DC\u05D0 CVV."
  };
  function validateCheckout(form) {
    const data = Object.fromEntries(new FormData(form).entries());
    const errors = {};
    Object.entries(required).forEach(([name, message]) => {
      if (!String(data[name] || "").trim()) errors[name] = message;
    });
    const firstName = String(data.firstName || "").trim();
    const lastName = String(data.lastName || "").trim();
    return { data: { ...data, name: `${firstName} ${lastName}`.trim(), phone: String(data.phone || "").trim() }, errors };
  }

  // js/state/orders.js
  var KEY3 = "ashmoret-orders";
  function load2() {
    try {
      const data = JSON.parse(localStorage.getItem(KEY3) || "[]");
      return Array.isArray(data) ? data : [];
    } catch {
      return [];
    }
  }
  function saveOrder(order) {
    const all = load2();
    all.unshift(order);
    localStorage.setItem(KEY3, JSON.stringify(all.slice(0, 20)));
  }
  function getOrder(id) {
    return load2().find((order) => order.id === id) || null;
  }
  function createOrderId() {
    return `AM-${Math.floor(1e3 + Math.random() * 9e3)}`;
  }

  // js/screens/confirmation.js
  function renderConfirmation(id) {
    const order = getOrder(id);
    if (!order) {
      return `<article class="wrap py-16 text-center">
      <h1 class="text-3xl font-extrabold">\u05D4\u05D4\u05D6\u05DE\u05E0\u05D4 \u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D4</h1>
      <p class="mt-2 text-muted">\u05D0\u05D9\u05E9\u05D5\u05E8\u05D9 \u05D4\u05D4\u05D3\u05D2\u05DE\u05D4 \u05E0\u05E9\u05DE\u05E8\u05D9\u05DD \u05E8\u05E7 \u05D1\u05D3\u05E4\u05D3\u05E4\u05DF \u05D4\u05D6\u05D4.</p>
      <a class="btn mt-6" href="#/">\u05DC\u05D3\u05E3 \u05D4\u05D1\u05D9\u05EA</a>
    </article>`;
    }
    const when2 = new Date(order.createdAt).toLocaleString("he-IL", { dateStyle: "medium", timeStyle: "short" });
    const lines = order.items.map((item) => ({
      product: getProduct(item.id),
      name: item.name,
      weight: getProduct(item.id)?.weight || "",
      qty: item.qty,
      total: item.price * item.qty
    }));
    return `<article class="wrap py-10">
    <p class="font-bold text-pink">\u05D4\u05D4\u05D6\u05DE\u05E0\u05D4 \u05E0\u05E8\u05E9\u05DE\u05D4 \u05D1\u05D4\u05D3\u05D2\u05DE\u05D4</p>
    <h1 class="mt-2 text-4xl font-extrabold">\u05EA\u05D5\u05D3\u05D4, ${esc(order.customer.name)}</h1>
    <p class="mt-2 text-muted">\u05DE\u05E1\u05E4\u05E8 \u05D4\u05D6\u05DE\u05E0\u05D4 <strong dir="ltr">${esc(order.id)}</strong> \xB7 ${esc(when2)}</p>
    <p class="mt-4 max-w-xl">\u05D6\u05D4\u05D5 \u05D0\u05D9\u05E9\u05D5\u05E8 \u05D7\u05D6\u05D5\u05EA\u05D9 \u05D1\u05DC\u05D1\u05D3. \u05DC\u05D0 \u05D1\u05D5\u05E6\u05E2 \u05EA\u05E9\u05DC\u05D5\u05DD, \u05DC\u05D0 \u05D7\u05D5\u05E9\u05D1 \u05DE\u05E9\u05DC\u05D5\u05D7 \u05D0\u05DE\u05D9\u05EA\u05D9, \u05D5\u05DC\u05D0 \u05E0\u05E4\u05EA\u05D7\u05D4 \u05D4\u05D6\u05DE\u05E0\u05D4 \u05D1\u05DE\u05E2\u05E8\u05DB\u05EA.</p>
    <section class="checkout-card order-summary-card mt-8" aria-labelledby="order-items">
      <div class="checkout-summary-head">
        <h2 id="order-items" class="checkout-card-title">\u05D4\u05E4\u05E8\u05D9\u05D8\u05D9\u05DD</h2>
        <span>${itemCountLabel(lines)}</span>
      </div>
      ${orderLines(lines)}
      <dl class="summary-totals">
        <div><dt>\u05DE\u05D5\u05E6\u05E8\u05D9\u05DD</dt><dd>${money(order.subtotal)}</dd></div>
        <div><dt>\u05DE\u05D7\u05D9\u05E8 \u05DE\u05E9\u05DC\u05D5\u05D7</dt><dd>${money(order.delivery)}</dd></div>
        <div class="is-total"><dt>\u05E1\u05D4\u05F4\u05DB</dt><dd>${money(order.total)}</dd></div>
      </dl>
      <p class="mt-4 text-sm text-muted">\u05DE\u05E9\u05DC\u05D5\u05D7 \u05D0\u05DC ${esc(order.customer.street)} ${esc(order.customer.house)}, ${esc(order.customer.city)}</p>
    </section>
    <a class="btn mt-8" href="#/">\u05D4\u05DE\u05E9\u05DA \u05D1\u05E7\u05E0\u05D9\u05D5\u05EA</a>
  </article>`;
  }

  // js/data/demo-account.js
  var delivery = 29;
  function withTotals(order) {
    const subtotal2 = order.items.reduce((sum, item) => sum + item.price * item.qty, 0);
    return { ...order, subtotal: subtotal2, delivery, total: subtotal2 + delivery };
  }
  var demoCustomer = {
    customerId: "DEMO-1001",
    displayName: "\u05E0\u05D5\u05E4\u05E8 \u05E9\u05D9\u05D8\u05E8\u05D9\u05EA",
    email: "dana.demo@example.com",
    phone: "050-000-0000",
    city: "\u05D0\u05E9\u05DE\u05D5\u05E8\u05EA",
    street: "\u05E8\u05D7\u05D5\u05D1 \u05D4\u05D3\u05D5\u05D2\u05DE\u05D4",
    house: "1"
  };
  var demoOrders = [
    withTotals({
      id: "AM-2401",
      createdAt: "2026-10-14T09:30:00.000Z",
      status: "\u05E0\u05DE\u05E1\u05E8\u05D4",
      timeline: {
        created: "2026-10-14T09:30:00.000Z",
        transit: "2026-10-15T07:00:00.000Z",
        out: "2026-10-16T06:30:00.000Z",
        delivered: "2026-10-16T13:15:00.000Z"
      },
      items: [
        { name: "\u05D0\u05D5\u05E8\u05D6 \u05D1\u05E1\u05DE\u05D8\u05D9", qty: 2, price: 11.9 },
        { name: "\u05E9\u05DE\u05DF \u05D6\u05D9\u05EA \u05DB\u05EA\u05D9\u05EA \u05DE\u05E2\u05D5\u05DC\u05D4", qty: 1, price: 34.9 },
        { name: "\u05E4\u05D9\u05E8\u05D5\u05E8\u05D9 \u05DC\u05D7\u05DD \u05DE\u05D5\u05D6\u05D4\u05D1\u05D9\u05DD", qty: 3, price: 12.9 }
      ]
    }),
    withTotals({
      id: "AM-2388",
      createdAt: "2026-10-13T14:10:00.000Z",
      status: "\u05D1\u05D3\u05E8\u05DA",
      timeline: {
        created: "2026-10-13T14:10:00.000Z",
        transit: "2026-10-15T08:00:00.000Z"
      },
      items: [
        { name: "\u05E7\u05D5\u05E1\u05E7\u05D5\u05E1 \u05D1\u05D9\u05E0\u05D5\u05E0\u05D9", qty: 2, price: 8.9 },
        { name: "\u05D3\u05D1\u05E9 \u05D8\u05D4\u05D5\u05E8", qty: 1, price: 24.9 }
      ]
    }),
    withTotals({
      id: "AM-2310",
      createdAt: "2026-10-05T11:00:00.000Z",
      status: "\u05D1\u05D5\u05D8\u05DC\u05D4",
      timeline: {
        created: "2026-10-05T11:00:00.000Z",
        cancelled: "2026-10-06T08:20:00.000Z"
      },
      items: [
        { name: "\u05E4\u05E4\u05E8\u05D9\u05E7\u05D4 \u05DE\u05EA\u05D5\u05E7\u05D4", qty: 1, price: 7.9 },
        { name: "\u05DB\u05D5\u05E8\u05DB\u05D5\u05DD \u05D8\u05D7\u05D5\u05DF", qty: 1, price: 6.4 }
      ]
    })
  ];
  function getDemoOrder(id) {
    return demoOrders.find((order) => order.id === id) || null;
  }

  // js/state/session.js
  var SESSION_KEY = "ashmoret-session";
  var PROFILE_KEY = "ashmoret-demo-profile";
  var SESSION_MS = 30 * 60 * 1e3;
  var DEMO_CODE = "123456";
  var DEMO_CUSTOMER_ID = demoCustomer.customerId;
  var expiredNotice = false;
  var listeners2 = /* @__PURE__ */ new Set();
  function readJson(key) {
    try {
      return JSON.parse(localStorage.getItem(key) || "null");
    } catch {
      return null;
    }
  }
  function validSession(value) {
    return Boolean(
      value && value.loggedIn === true && typeof value.customerId === "string" && typeof value.displayName === "string" && typeof value.expiresAt === "number"
    );
  }
  function getSession() {
    const value = readJson(SESSION_KEY);
    if (!validSession(value)) {
      if (value) localStorage.removeItem(SESSION_KEY);
      return null;
    }
    if (value.expiresAt <= Date.now()) {
      localStorage.removeItem(SESSION_KEY);
      expiredNotice = true;
      notify();
      return null;
    }
    return {
      customerId: value.customerId,
      displayName: value.displayName,
      loggedIn: true,
      expiresAt: value.expiresAt
    };
  }
  function takeExpiredNotice() {
    const value = expiredNotice;
    expiredNotice = false;
    return value;
  }
  function getProfile() {
    const session = getSession();
    const stored = readJson(PROFILE_KEY);
    const profile = {
      customerId: demoCustomer.customerId,
      displayName: String(stored?.displayName || demoCustomer.displayName).trim() || demoCustomer.displayName,
      firstName: String(stored?.firstName || ""),
      lastName: String(stored?.lastName || ""),
      email: String(stored?.email || demoCustomer.email),
      idNumber: String(stored?.idNumber || ""),
      phone: prettyPhone(stored?.phone || demoCustomer.phone),
      city: String(stored?.city || demoCustomer.city),
      street: String(stored?.street || demoCustomer.street),
      house: String(stored?.house || demoCustomer.house),
      marketing: Boolean(stored?.marketing)
    };
    if (session?.displayName) profile.displayName = session.displayName;
    return profile;
  }
  function saveProfile(next) {
    const previous = readJson(PROFILE_KEY) || {};
    const profile = {
      customerId: demoCustomer.customerId,
      displayName: String(next.displayName ?? previous.displayName ?? demoCustomer.displayName).trim(),
      firstName: String(next.firstName ?? previous.firstName ?? "").trim(),
      lastName: String(next.lastName ?? previous.lastName ?? "").trim(),
      email: String(next.email ?? previous.email ?? demoCustomer.email).trim(),
      idNumber: String(next.idNumber ?? previous.idNumber ?? "").replace(/\D/g, ""),
      phone: String(next.phone ?? previous.phone ?? demoCustomer.phone).replace(/[^\d]/g, ""),
      city: String(next.city ?? previous.city ?? demoCustomer.city).trim(),
      street: String(next.street ?? previous.street ?? demoCustomer.street).trim(),
      house: String(next.house ?? previous.house ?? demoCustomer.house).trim(),
      marketing: Boolean(next.marketing ?? previous.marketing)
    };
    localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
    const session = getSession();
    if (session) {
      localStorage.setItem(SESSION_KEY, JSON.stringify({ ...session, displayName: profile.displayName }));
      notify();
    }
    return profile;
  }
  function loginDemo() {
    const profile = getProfile();
    const session = {
      customerId: profile.customerId,
      displayName: profile.displayName,
      loggedIn: true,
      expiresAt: Date.now() + SESSION_MS
    };
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    expiredNotice = false;
    notify();
    return session;
  }
  function logout() {
    localStorage.removeItem(SESSION_KEY);
    notify();
  }
  function subscribeSession(listener) {
    listeners2.add(listener);
    return () => listeners2.delete(listener);
  }
  function prettyPhone(value) {
    const digits = String(value || "").replace(/\D/g, "");
    if (digits.length === 10) return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
    if (digits.length === 9) return `${digits.slice(0, 2)}-${digits.slice(2, 5)}-${digits.slice(5)}`;
    return String(value || "");
  }
  function notify() {
    listeners2.forEach((listener) => listener());
  }
  function wait(ms) {
    return new Promise((resolve) => {
      window.setTimeout(resolve, ms);
    });
  }

  // js/screens/login.js
  var RESEND_MS = 15e3;
  var LOAD_MS = 700;
  var emptyRegister = () => ({
    firstName: "",
    lastName: "",
    email: "",
    idNumber: "",
    phone: "",
    privacy: false,
    marketing: false
  });
  var ui = freshUi();
  var timer = 0;
  var redirectTimer = 0;
  var navigate = () => {
  };
  function freshUi() {
    return {
      tab: "existing",
      channel: "phone",
      identity: "",
      step: "channel",
      code: "",
      error: "",
      notice: "",
      pending: "",
      resendAt: 0,
      expired: false,
      next: "",
      invalid: "",
      register: emptyRegister()
    };
  }
  function stopLogin() {
    window.clearInterval(timer);
    window.clearTimeout(redirectTimer);
    timer = 0;
    redirectTimer = 0;
  }
  function continueTo(next) {
    if (next === "/checkout") return "#/checkout";
    return safeNext(next);
  }
  function maskEmail(email) {
    const [name, host] = String(email).split("@");
    if (!name || !host) return email;
    return `${name.slice(0, 2)}***@${host}`;
  }
  function maskPhone(phone) {
    const digits = String(phone).replace(/\D/g, "");
    if (digits.length < 7) return phone;
    return `${digits.slice(0, 3)}-***-${digits.slice(-4)}`;
  }
  function ensureDialog() {
    let dialog = document.getElementById("auth-dialog");
    if (dialog) return dialog;
    dialog = document.createElement("dialog");
    dialog.id = "auth-dialog";
    dialog.className = "auth-dialog";
    dialog.addEventListener("close", () => {
      stopLogin();
      ui = freshUi();
    });
    dialog.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        dialog.close();
      }
    });
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close();
    });
    document.body.appendChild(dialog);
    return dialog;
  }
  function openAuth({ next = "", expired = false } = {}) {
    const dialog = ensureDialog();
    ui = freshUi();
    ui.next = next;
    ui.expired = expired;
    paint();
    if (!dialog.open) dialog.showModal();
  }
  function dialogOpen() {
    return Boolean(document.getElementById("auth-dialog")?.open);
  }
  function paint() {
    stopLogin();
    const dialog = ensureDialog();
    dialog.innerHTML = markup();
    dialog.setAttribute("aria-labelledby", "auth-title");
    bindOtp(dialog);
    startResend(dialog);
    dialog.querySelector("[data-auth-focus]")?.focus();
  }
  function markup() {
    const title = ui.tab === "register" ? "\u05D4\u05E8\u05E9\u05DE\u05D4" : "\u05D4\u05EA\u05D7\u05D1\u05E8\u05D5\u05EA";
    return `<div class="auth-dialog-bar">
    <div>
      <p class="text-sm font-bold text-muted">\u05D4\u05D3\u05D2\u05DE\u05D4 \u05D1\u05DC\u05D1\u05D3</p>
      <h2 id="auth-title" class="mt-1 text-2xl font-extrabold">${title}</h2>
    </div>
    <button class="auth-close" type="button" data-auth-close aria-label="\u05E1\u05D2\u05D9\u05E8\u05D4">\xD7</button>
  </div>
  <p class="auth-note">\u05DC\u05D0 \u05E0\u05E9\u05DC\u05D7\u05D9\u05DD \u05D3\u05D5\u05D0\u05F4\u05DC \u05D0\u05D5 SMS, \u05D5\u05D0\u05D9\u05DF \u05D0\u05D9\u05DE\u05D5\u05EA \u05D6\u05D4\u05D5\u05EA. \u05E7\u05D5\u05D3 \u05D4\u05D4\u05D3\u05D2\u05DE\u05D4 \u05D4\u05E7\u05D1\u05D5\u05E2 \u05D4\u05D5\u05D0 <strong dir="ltr">${DEMO_CODE}</strong>.</p>
  ${ui.expired ? `<p class="auth-banner" role="status">\u05D4\u05D4\u05EA\u05D7\u05D1\u05E8\u05D5\u05EA \u05DC\u05D4\u05D3\u05D2\u05DE\u05D4 \u05D4\u05E1\u05EA\u05D9\u05D9\u05DE\u05D4. \u05D0\u05E4\u05E9\u05E8 \u05DC\u05D4\u05EA\u05D7\u05D1\u05E8 \u05E9\u05D5\u05D1.</p>` : ""}
  <div class="auth-tabs" role="tablist" aria-label="\u05E1\u05D5\u05D2 \u05DB\u05E0\u05D9\u05E1\u05D4">
    <button type="button" role="tab" id="auth-tab-existing" data-auth-tab="existing" aria-selected="${ui.tab === "existing"}" aria-controls="auth-panel">\u05DC\u05E7\u05D5\u05D7 \u05E7\u05D9\u05D9\u05DD</button>
    <button type="button" role="tab" id="auth-tab-register" data-auth-tab="register" aria-selected="${ui.tab === "register"}" aria-controls="auth-panel">\u05DC\u05D4\u05E8\u05E9\u05DE\u05D4</button>
  </div>
  <div id="auth-panel" role="tabpanel" aria-labelledby="${ui.tab === "register" ? "auth-tab-register" : "auth-tab-existing"}">
    ${ui.tab === "register" ? registerPanel() : existingPanel()}
  </div>`;
  }
  function existingPanel() {
    if (ui.step === "success") {
      return `<p class="auth-success" role="status">\u05D4\u05E7\u05D5\u05D3 \u05D0\u05D5\u05DE\u05EA. \u05DE\u05DE\u05E9\u05D9\u05DB\u05D9\u05DD \u05DC\u05E8\u05DB\u05D9\u05E9\u05D4.</p>`;
    }
    if (ui.step === "otp") return otpForm();
    const phoneMode = ui.channel === "phone";
    const row = (value, title, type, label, placeholder, autocomplete, current) => {
      const checked = ui.channel === value;
      return `<div class="auth-choice-row">
      <label class="auth-choice">
        <input type="radio" name="channel" value="${value}" ${checked ? "checked" : ""} data-auth-channel>
        <span class="font-bold">${title}</span>
      </label>
      <input class="auth-identity" name="${value}" type="${type}" value="${esc(current)}" placeholder="${placeholder}" dir="ltr" autocomplete="${autocomplete}" aria-label="${label}" data-auth-identity="${value}" ${checked ? "data-auth-focus" : ""} ${checked && ui.error ? `aria-invalid="true"` : ""}>
    </div>`;
    };
    return `<form id="auth-channel" class="mt-5 grid gap-4" novalidate>
    <fieldset class="grid gap-2">
      <legend class="text-sm font-semibold">\u05D1\u05D7\u05E8\u05D5 \u05D0\u05D9\u05DA \u05DC\u05E7\u05D1\u05DC \u05D0\u05EA \u05E7\u05D5\u05D3 \u05D4\u05D4\u05D3\u05D2\u05DE\u05D4</legend>
      ${row("phone", "\u05E0\u05D9\u05D9\u05D3", "tel", "\u05DE\u05E1\u05E4\u05E8 \u05E0\u05D9\u05D9\u05D3", "05X-XXX-XXXX", "tel", phoneMode ? ui.identity : "")}
      ${row("email", "\u05D3\u05D5\u05D0\u05F4\u05DC", "email", "\u05DB\u05EA\u05D5\u05D1\u05EA \u05D3\u05D5\u05D0\u05F4\u05DC", "name@example.com", "email", phoneMode ? "" : ui.identity)}
    </fieldset>
    ${ui.error ? `<p class="field-error" role="alert">${esc(ui.error)}</p>` : ""}
    <button class="btn" type="submit" ${ui.pending ? "disabled" : ""}>${ui.pending === "send" ? "\u05E9\u05D5\u05DC\u05D7\u05D9\u05DD \u05E7\u05D5\u05D3\u2026" : "\u05E9\u05DC\u05D9\u05D7\u05EA \u05E7\u05D5\u05D3"}</button>
  </form>`;
  }
  function otpForm() {
    const typed = ui.identity.trim();
    const target = ui.channel === "phone" ? typed ? maskPhone(typed) : maskPhone(getProfile().phone) : typed ? maskEmail(typed) : maskEmail(getProfile().email);
    const via = ui.channel === "phone" ? "\u05DC\u05E0\u05D9\u05D9\u05D3" : "\u05DC\u05D3\u05D5\u05D0\u05F4\u05DC";
    const digits = ui.code.padEnd(6, " ").slice(0, 6).split("");
    const boxes = digits.map((digit, index) => `<input data-otp="${index}" inputmode="numeric" autocomplete="${index === 0 ? "one-time-code" : "off"}" maxlength="1" aria-label="\u05E1\u05E4\u05E8\u05D4 ${index + 1}" value="${esc(digit.trim())}" ${index === 0 ? "data-auth-focus" : ""} ${ui.error ? `aria-invalid="true" aria-describedby="otp-error"` : ""}>`).join("");
    return `<form id="auth-otp" class="mt-5 grid gap-4" novalidate>
    <p class="text-sm text-muted">\u05D4\u05E7\u05D5\u05D3 \u05DC\u05D4\u05D3\u05D2\u05DE\u05D4 \u05D0\u05DE\u05D5\u05E8 \u05DC\u05D4\u05D2\u05D9\u05E2 ${via}: <strong dir="ltr">${esc(target)}</strong>. \u05D1\u05E4\u05D5\u05E2\u05DC \u05DC\u05D0 \u05E0\u05E9\u05DC\u05D7 \u05D3\u05D1\u05E8, \u05D5\u05D4\u05E7\u05D5\u05D3 \u05E0\u05E9\u05D0\u05E8 <strong dir="ltr">${DEMO_CODE}</strong>.</p>
    <div class="otp-row" role="group" aria-label="\u05E7\u05D5\u05D3 \u05D0\u05D9\u05DE\u05D5\u05EA \u05D1\u05DF 6 \u05E1\u05E4\u05E8\u05D5\u05EA">${boxes}</div>
    ${ui.error ? `<p id="otp-error" class="field-error" role="alert">${esc(ui.error)}</p>` : ""}
    ${ui.notice ? `<p class="text-sm text-muted" role="status">${esc(ui.notice)}</p>` : ""}
    <button class="btn" type="submit" ${ui.pending ? "disabled" : ""}>${ui.pending === "check" ? "\u05D1\u05D5\u05D3\u05E7\u05D9\u05DD\u2026" : "\u05D0\u05D9\u05DE\u05D5\u05EA \u05D5\u05D4\u05DE\u05E9\u05DA"}</button>
    <div>
      <button class="btn btn-line" type="button" data-resend ${ui.pending ? "disabled" : ""}>${ui.pending === "resend" ? "\u05E9\u05D5\u05DC\u05D7\u05D9\u05DD \u05E9\u05D5\u05D1\u2026" : "\u05E9\u05DC\u05D9\u05D7\u05D4 \u05D7\u05D5\u05D6\u05E8\u05EA"}</button>
      <p id="resend-status" class="mt-2 text-sm text-muted" role="status"></p>
    </div>
  </form>`;
  }
  function registerPanel() {
    if (ui.step === "success") {
      return `<p class="auth-success" role="status">\u05D4\u05D4\u05E8\u05E9\u05DE\u05D4 \u05DC\u05D4\u05D3\u05D2\u05DE\u05D4 \u05E0\u05E9\u05DE\u05E8\u05D4. \u05DE\u05DE\u05E9\u05D9\u05DB\u05D9\u05DD \u05DC\u05E8\u05DB\u05D9\u05E9\u05D4 \u05D1\u05DE\u05D0\u05E8\u05E7\u05D8.</p>`;
    }
    const data = ui.register;
    const bad = (name) => ui.invalid === name;
    const field2 = (name, label, value, extra) => `<label class="field">
    <span class="text-sm font-semibold"><span class="req" aria-hidden="true">*</span>${label}</span>
    <input name="${name}" value="${esc(value)}" ${extra} aria-invalid="${bad(name) ? "true" : "false"}" ${bad(name) ? "data-auth-focus" : ""}>
  </label>`;
    return `<form id="auth-register" class="mt-5 grid gap-4" novalidate>
    <p class="text-sm text-muted">\u05D4\u05E4\u05E8\u05D8\u05D9\u05DD \u05E0\u05E9\u05DE\u05E8\u05D9\u05DD \u05E8\u05E7 \u05D1\u05D4\u05D3\u05D2\u05DE\u05D4 \u05E9\u05D1\u05D3\u05E4\u05D3\u05E4\u05DF \u05D4\u05D6\u05D4, \u05D0\u05E6\u05DC \u05DC\u05E7\u05D5\u05D7 \u05D4\u05D4\u05D3\u05D2\u05DE\u05D4.</p>
    <div class="grid gap-4 sm:grid-cols-2">
      ${field2("firstName", "\u05E9\u05DD \u05E4\u05E8\u05D8\u05D9", data.firstName, `autocomplete="given-name" required ${ui.invalid ? "" : "data-auth-focus"}`)}
      ${field2("lastName", "\u05E9\u05DD \u05DE\u05E9\u05E4\u05D7\u05D4", data.lastName, `autocomplete="family-name" required`)}
    </div>
    ${field2("email", "\u05D3\u05D5\u05D0\u05F4\u05DC", data.email, `type="email" autocomplete="email" dir="ltr" required`)}
    ${field2("idNumber", "\u05EA\u05E2\u05D5\u05D3\u05EA \u05D6\u05D4\u05D5\u05EA", data.idNumber, `inputmode="numeric" autocomplete="off" dir="ltr" maxlength="9" required`)}
    ${field2("phone", "\u05D8\u05DC\u05E4\u05D5\u05DF", data.phone, `type="tel" autocomplete="tel" dir="ltr" required`)}
    <label class="auth-check">
      <input type="checkbox" name="privacy" required ${data.privacy ? "checked" : ""} aria-invalid="${bad("privacy") ? "true" : "false"}" ${bad("privacy") ? "data-auth-focus" : ""}>
      <span><span class="req" aria-hidden="true">*</span>\u05E7\u05E8\u05D0\u05EA\u05D9 \u05D0\u05EA \u05DE\u05D3\u05D9\u05E0\u05D9\u05D5\u05EA \u05D4\u05E4\u05E8\u05D8\u05D9\u05D5\u05EA, \u05D0\u05EA \u05EA\u05E0\u05D0\u05D9 \u05D4\u05E9\u05D9\u05DE\u05D5\u05E9 \u05D5\u05D0\u05EA \u05EA\u05E7\u05E0\u05D5\u05DF \u05DE\u05D5\u05E2\u05D3\u05D5\u05DF \u05D4\u05DC\u05E7\u05D5\u05D7\u05D5\u05EA, \u05D5\u05D0\u05E0\u05D9 \u05DE\u05D0\u05E9\u05E8/\u05EA \u05E9\u05D4\u05DE\u05D9\u05D3\u05E2 \u05E9\u05DE\u05E1\u05E8\u05EA\u05D9 \u05D5/\u05D0\u05D5 \u05E9\u05D9\u05D9\u05D0\u05E1\u05E3 \u05D0\u05D5\u05D3\u05D5\u05EA\u05D9\u05D9 \u05D1\u05DE\u05E1\u05D2\u05E8\u05EA \u05DE\u05EA\u05DF \u05D4\u05E9\u05D9\u05E8\u05D5\u05EA\u05D9\u05DD \u05D9\u05D9\u05E9\u05DE\u05E8 \u05D1\u05DE\u05D0\u05D2\u05E8\u05D9 \u05D4\u05DE\u05D9\u05D3\u05E2 \u05E9\u05D1\u05E9\u05DC\u05D9\u05D8\u05EA \u05D0\u05E9\u05DE\u05D5\u05E8\u05EA \u05DE\u05E8\u05E7\u05D8 \u05D5/\u05D0\u05D5 \u05DE\u05D9 \u05DE\u05D8\u05E2\u05DE\u05D4, \u05DC\u05E8\u05D1\u05D5\u05EA \u05E1\u05E4\u05E7\u05D9 \u05E9\u05D9\u05E8\u05D5\u05EA \u05D4\u05E4\u05D5\u05E2\u05DC\u05D9\u05DD \u05E2\u05D1\u05D5\u05E8\u05D4. \u05D4\u05DE\u05D9\u05D3\u05E2 \u05D9\u05E9\u05DE\u05E9 \u05DC\u05E6\u05D5\u05E8\u05DA \u05D6\u05D9\u05D4\u05D5\u05D9, \u05E0\u05D9\u05D4\u05D5\u05DC \u05D4\u05D7\u05E9\u05D1\u05D5\u05DF, \u05D0\u05E1\u05E4\u05E7\u05EA \u05D4\u05D6\u05DE\u05E0\u05D5\u05EA, \u05E9\u05D9\u05E8\u05D5\u05EA \u05DC\u05E7\u05D5\u05D7\u05D5\u05EA, \u05EA\u05E4\u05E2\u05D5\u05DC \u05DE\u05D5\u05E2\u05D3\u05D5\u05DF \u05D4\u05DC\u05E7\u05D5\u05D7\u05D5\u05EA, \u05E2\u05DE\u05D9\u05D3\u05D4 \u05D1\u05D7\u05D5\u05D1\u05D5\u05EA \u05D4\u05D3\u05D9\u05DF \u05D5\u05E9\u05D9\u05E4\u05D5\u05E8 \u05D4\u05E9\u05D9\u05E8\u05D5\u05EA, \u05D5\u05D4\u05DB\u05D5\u05DC \u05D1\u05D4\u05EA\u05D0\u05DD \u05DC\u05DE\u05D3\u05D9\u05E0\u05D9\u05D5\u05EA \u05D4\u05E4\u05E8\u05D8\u05D9\u05D5\u05EA.</span>
    </label>
    <label class="auth-check">
      <input type="checkbox" name="marketing" ${data.marketing ? "checked" : ""}>
      <span>\u05DE\u05D0\u05E9\u05E8 \u05DC\u05D0\u05E9\u05DE\u05D5\u05E8\u05EA \u05DC\u05E9\u05DC\u05D5\u05D7 \u05D0\u05DC\u05D9\u05D9 \u05E2\u05D3\u05DB\u05D5\u05E0\u05D9\u05DD, \u05DE\u05D1\u05E6\u05E2\u05D9\u05DD \u05D5\u05D4\u05D8\u05D1\u05D5\u05EA \u05D5\u05D7\u05D5\u05DE\u05E8\u05D9\u05DD \u05E9\u05D9\u05D5\u05D5\u05E7\u05D9\u05D9\u05DD \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05D4\u05D5\u05D3\u05E2\u05D5\u05EA SMS, \u05D5\u05D5\u05D0\u05D8\u05E1\u05D0\u05E4 (WhatsApp) \u05D5\u05D3\u05D5\u05D0\u05E8 \u05D0\u05DC\u05E7\u05D8\u05E8\u05D5\u05E0\u05D9. \u05D9\u05D3\u05D5\u05E2 \u05DC\u05D9 \u05DB\u05D9 \u05D0\u05D5\u05DB\u05DC \u05DC\u05D1\u05E7\u05E9 \u05D0\u05EA \u05D4\u05E1\u05E8\u05EA\u05D9 \u05DE\u05E8\u05E9\u05D9\u05DE\u05EA \u05D4\u05EA\u05E4\u05D5\u05E6\u05D4 \u05D1\u05DB\u05DC \u05E2\u05EA \u05E2\u05DC \u05D9\u05D3\u05D9 \u05E9\u05DC\u05D9\u05D7\u05EA \u05D4\u05D5\u05D3\u05E2\u05EA \u05F4\u05D4\u05E1\u05E8\u05F4 \u05D1\u05EA\u05D2\u05D5\u05D1\u05D4 \u05DC\u05D4\u05D5\u05D3\u05E2\u05D4 \u05E9\u05EA\u05D9\u05E9\u05DC\u05D7 \u05D0\u05DC\u05D9.</span>
    </label>
    ${ui.error ? `<p class="field-error" role="alert">${esc(ui.error)}</p>` : ""}
    <button class="btn" type="submit" ${ui.pending ? "disabled" : ""}>${ui.pending === "register" ? "\u05E0\u05E8\u05E9\u05DE\u05D9\u05DD\u2026" : "\u05D4\u05E8\u05E9\u05DE\u05D4 \u05D5\u05D4\u05DE\u05E9\u05DA \u05E8\u05DB\u05D9\u05E9\u05D4 \u05D1\u05DE\u05D0\u05E8\u05E7\u05D8"}</button>
  </form>`;
  }
  function bindOtp(dialog) {
    const inputs = [...dialog.querySelectorAll("[data-otp]")];
    inputs.forEach((input, index) => {
      input.addEventListener("input", () => {
        const digit = input.value.replace(/\D/g, "").slice(-1);
        input.value = digit;
        if (digit && inputs[index + 1]) inputs[index + 1].focus();
        ui.code = readCode(inputs);
      });
      input.addEventListener("keydown", (event) => {
        if (event.key === "Backspace" && !input.value && inputs[index - 1]) inputs[index - 1].focus();
        if (event.key === "ArrowRight" && inputs[index + 1]) inputs[index + 1].focus();
        if (event.key === "ArrowLeft" && inputs[index - 1]) inputs[index - 1].focus();
      });
      input.addEventListener("paste", (event) => {
        event.preventDefault();
        const text = (event.clipboardData?.getData("text") || "").replace(/\D/g, "").slice(0, 6);
        text.split("").forEach((char, i) => {
          if (inputs[i]) inputs[i].value = char;
        });
        ui.code = readCode(inputs);
        inputs[Math.min(Math.max(text.length, 1), inputs.length) - 1]?.focus();
      });
    });
  }
  function startResend(dialog) {
    const status = dialog.querySelector("#resend-status");
    const resend = dialog.querySelector("[data-resend]");
    if (ui.step !== "otp" || !status || !resend) return;
    const tick = () => {
      const left = Math.ceil((ui.resendAt - Date.now()) / 1e3);
      if (left > 0) {
        resend.disabled = true;
        status.textContent = `\u05D0\u05E4\u05E9\u05E8 \u05DC\u05E9\u05DC\u05D5\u05D7 \u05E9\u05D5\u05D1 \u05D1\u05E2\u05D5\u05D3 ${left} \u05E9\u05E0\u05D9\u05D5\u05EA`;
      } else if (!ui.pending) {
        resend.disabled = false;
        status.textContent = "\u05D0\u05E4\u05E9\u05E8 \u05DC\u05E9\u05DC\u05D5\u05D7 \u05E7\u05D5\u05D3 \u05D7\u05D3\u05E9 \u05DC\u05D4\u05D3\u05D2\u05DE\u05D4";
      }
    };
    tick();
    timer = window.setInterval(tick, 250);
  }
  function readCode(inputs) {
    return [...inputs].map((input) => input.value.replace(/\D/g, "")).join("").slice(0, 6);
  }
  function finish() {
    loginDemo();
    ui.step = "success";
    ui.error = "";
    ui.pending = "";
    paint();
    const dest = continueTo(ui.next);
    redirectTimer = window.setTimeout(() => {
      redirectTimer = 0;
      document.getElementById("auth-dialog")?.close();
      if (dest) navigate(dest);
    }, 700);
  }
  function readRegister(form) {
    const data = Object.fromEntries(new FormData(form).entries());
    ui.register = {
      firstName: String(data.firstName || "").trim(),
      lastName: String(data.lastName || "").trim(),
      email: String(data.email || "").trim(),
      idNumber: String(data.idNumber || "").replace(/\D/g, ""),
      phone: String(data.phone || "").trim(),
      privacy: form.privacy.checked,
      marketing: form.marketing.checked
    };
    return ui.register;
  }
  function registerError(data) {
    if (data.firstName.length < 2) return ["firstName", "\u05E0\u05D0 \u05DC\u05DE\u05DC\u05D0 \u05E9\u05DD \u05E4\u05E8\u05D8\u05D9."];
    if (data.lastName.length < 2) return ["lastName", "\u05E0\u05D0 \u05DC\u05DE\u05DC\u05D0 \u05E9\u05DD \u05DE\u05E9\u05E4\u05D7\u05D4."];
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return ["email", "\u05E0\u05D0 \u05DC\u05DE\u05DC\u05D0 \u05D3\u05D5\u05D0\u05F4\u05DC \u05EA\u05E7\u05D9\u05DF."];
    if (!/^\d{9}$/.test(data.idNumber)) return ["idNumber", "\u05E0\u05D0 \u05DC\u05DE\u05DC\u05D0 \u05EA\u05E2\u05D5\u05D3\u05EA \u05D6\u05D4\u05D5\u05EA \u05D1\u05EA 9 \u05E1\u05E4\u05E8\u05D5\u05EA."];
    if (!/^05\d{8}$/.test(data.phone.replace(/[^\d]/g, ""))) return ["phone", "\u05E0\u05D0 \u05DC\u05DE\u05DC\u05D0 \u05DE\u05E1\u05E4\u05E8 \u05E0\u05D9\u05D9\u05D3."];
    if (!data.privacy) return ["privacy", "\u05DB\u05D3\u05D9 \u05DC\u05D4\u05D9\u05E8\u05E9\u05DD \u05E6\u05E8\u05D9\u05DA \u05DC\u05D0\u05E9\u05E8 \u05D0\u05EA \u05DE\u05D3\u05D9\u05E0\u05D9\u05D5\u05EA \u05D4\u05E4\u05E8\u05D8\u05D9\u05D5\u05EA, \u05EA\u05E0\u05D0\u05D9 \u05D4\u05E9\u05D9\u05DE\u05D5\u05E9 \u05D5\u05EA\u05E7\u05E0\u05D5\u05DF \u05DE\u05D5\u05E2\u05D3\u05D5\u05DF \u05D4\u05DC\u05E7\u05D5\u05D7\u05D5\u05EA."];
    return ["", ""];
  }
  function bindLogin(go) {
    navigate = go;
    document.addEventListener("click", (event) => {
      if (event.target.closest("[data-open-auth]")) {
        openAuth();
        return;
      }
      const checkout = event.target.closest("a[href='#/checkout']");
      if (checkout && !getSession()) {
        event.preventDefault();
        openAuth({ next: "/checkout" });
        return;
      }
      const tab = event.target.closest("[data-auth-tab]");
      if (tab && document.getElementById("auth-dialog")?.contains(tab)) {
        ui.tab = tab.dataset.authTab;
        ui.step = "channel";
        ui.error = "";
        ui.invalid = "";
        ui.pending = "";
        paint();
        return;
      }
      if (event.target.closest("[data-auth-close]")) {
        document.getElementById("auth-dialog")?.close();
      }
    });
    document.addEventListener("change", (event) => {
      const channel = event.target.closest("[data-auth-channel]");
      if (!channel || !document.getElementById("auth-dialog")?.contains(channel)) return;
      ui.channel = channel.value;
      channel.closest(".auth-choice-row")?.querySelector("[data-auth-identity]")?.focus();
    });
    const selectChannelOf = (event) => {
      const field2 = event.target.closest?.("[data-auth-identity]");
      if (!field2 || !document.getElementById("auth-dialog")?.contains(field2)) return;
      const radio = field2.closest(".auth-choice-row")?.querySelector("[data-auth-channel]");
      if (radio && !radio.checked) radio.checked = true;
      ui.channel = field2.dataset.authIdentity;
    };
    document.addEventListener("focusin", selectChannelOf);
    document.addEventListener("input", selectChannelOf);
    document.addEventListener("submit", async (event) => {
      const form = event.target;
      if (form.id === "auth-channel") {
        event.preventDefault();
        if (ui.pending) return;
        const data2 = new FormData(form);
        ui.channel = String(data2.get("channel") || "phone");
        ui.identity = String(data2.get(ui.channel) || "").trim();
        if (ui.channel === "phone") {
          const digits = ui.identity.replace(/[^\d]/g, "");
          if (!/^05\d{8}$/.test(digits)) {
            ui.error = "\u05E0\u05D0 \u05DC\u05DE\u05DC\u05D0 \u05DE\u05E1\u05E4\u05E8 \u05E0\u05D9\u05D9\u05D3.";
            paint();
            return;
          }
          ui.identity = digits;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(ui.identity)) {
          ui.error = "\u05E0\u05D0 \u05DC\u05DE\u05DC\u05D0 \u05DB\u05EA\u05D5\u05D1\u05EA \u05D3\u05D5\u05D0\u05F4\u05DC.";
          paint();
          return;
        }
        ui.pending = "send";
        ui.error = "";
        paint();
        await wait(LOAD_MS);
        if (!dialogOpen()) return;
        ui.pending = "";
        ui.step = "otp";
        ui.code = "";
        ui.notice = "";
        ui.resendAt = Date.now() + RESEND_MS;
        paint();
        return;
      }
      if (form.id === "auth-otp") {
        event.preventDefault();
        if (ui.pending || ui.step !== "otp") return;
        const inputs = [...form.querySelectorAll("[data-otp]")];
        ui.code = readCode(inputs);
        if (ui.code.length < 6) {
          ui.error = "\u05E0\u05D0 \u05DC\u05DE\u05DC\u05D0 \u05E7\u05D5\u05D3 \u05D1\u05DF 6 \u05E1\u05E4\u05E8\u05D5\u05EA.";
          paint();
          return;
        }
        ui.pending = "check";
        ui.error = "";
        paint();
        await wait(LOAD_MS);
        if (!dialogOpen()) return;
        ui.pending = "";
        if (ui.code !== DEMO_CODE) {
          ui.error = `\u05D4\u05E7\u05D5\u05D3 \u05E9\u05D2\u05D5\u05D9. \u05D1\u05D4\u05D3\u05D2\u05DE\u05D4 \u05D4\u05E7\u05D5\u05D3 \u05D4\u05D5\u05D0 ${DEMO_CODE}.`;
          paint();
          return;
        }
        finish();
        return;
      }
      if (form.id !== "auth-register") return;
      event.preventDefault();
      if (ui.pending) return;
      const data = readRegister(form);
      const [invalid, error] = registerError(data);
      if (error) {
        ui.invalid = invalid;
        ui.error = error;
        paint();
        return;
      }
      ui.invalid = "";
      ui.error = "";
      ui.pending = "register";
      paint();
      await wait(LOAD_MS);
      if (!dialogOpen()) return;
      saveProfile({
        displayName: `${data.firstName} ${data.lastName}`,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        idNumber: data.idNumber,
        phone: data.phone.replace(/[^\d]/g, ""),
        marketing: data.marketing
      });
      ui.pending = "";
      finish();
    });
    document.addEventListener("click", async (event) => {
      const button = event.target.closest("[data-resend]");
      if (!button || ui.step !== "otp" || ui.pending) return;
      if (!document.getElementById("auth-dialog")?.contains(button)) return;
      if (Date.now() < ui.resendAt) return;
      ui.pending = "resend";
      ui.error = "";
      paint();
      await wait(LOAD_MS);
      if (!dialogOpen()) return;
      ui.pending = "";
      ui.code = "";
      ui.notice = `\u05E0\u05E9\u05DC\u05D7 \u05E9\u05D5\u05D1 \u05E7\u05D5\u05D3 \u05D4\u05D3\u05D2\u05DE\u05D4. \u05D4\u05E7\u05D5\u05D3 \u05E0\u05E9\u05D0\u05E8 ${DEMO_CODE}.`;
      ui.resendAt = Date.now() + RESEND_MS;
      paint();
    });
  }

  // js/screens/contact.js
  var contactTopics = ["\u05D4\u05D6\u05DE\u05E0\u05D5\u05EA \u05D5\u05DE\u05E9\u05DC\u05D5\u05D7\u05D9\u05DD", "\u05EA\u05DE\u05D9\u05DB\u05D4 \u05D8\u05DB\u05E0\u05D9\u05EA", "\u05D0\u05D7\u05E8"];
  function contactFields({ values = {}, errors = {} } = {}, prefix = "") {
    const id = (name) => `${prefix}${name}`;
    const describe = (name) => errors[name] ? `aria-describedby="${id(name)}-error"` : "";
    const error = (name) => errors[name] ? `<span id="${id(name)}-error" class="field-error">${esc(errors[name])}</span>` : "";
    const field2 = (name, label, type = "text", extra = "") => `<label class="field">
    <span class="text-sm font-semibold">${label}</span>
    <input name="${name}" type="${type}" value="${esc(values[name] || "")}" ${extra} aria-invalid="${errors[name] ? "true" : "false"}" ${describe(name)}>
    ${error(name)}
  </label>`;
    return `<label class="field">
      <span class="text-sm font-semibold">\u05E0\u05D5\u05E9\u05D0 \u05D4\u05E4\u05E0\u05D9\u05D9\u05D4</span>
      <select name="topic" required aria-invalid="${errors.topic ? "true" : "false"}" ${describe("topic")}>
        <option value="">\u05D1\u05D7\u05D9\u05E8\u05EA \u05E0\u05D5\u05E9\u05D0</option>
        ${contactTopics.map((topic) => `<option value="${esc(topic)}" ${values.topic === topic ? "selected" : ""}>${esc(topic)}</option>`).join("")}
      </select>
      ${error("topic")}
    </label>
    ${field2("name", "\u05E9\u05DD \u05DE\u05DC\u05D0", "text", `autocomplete="name" required`)}
    ${field2("phone", "\u05D8\u05DC\u05E4\u05D5\u05DF", "tel", `autocomplete="tel" dir="ltr" required`)}
    ${field2("email", "\u05D0\u05D9\u05DE\u05D9\u05D9\u05DC", "email", `autocomplete="email" dir="ltr"`)}
    <label class="field">
      <span class="text-sm font-semibold">\u05D4\u05D5\u05D3\u05E2\u05D4</span>
      <textarea name="message" rows="4" required aria-invalid="${errors.message ? "true" : "false"}" ${describe("message")}>${esc(values.message || "")}</textarea>
      ${error("message")}
    </label>`;
  }
  function renderContact({ sent = false, values = {}, errors = {} } = {}) {
    if (sent) {
      return `<article class="wrap max-w-2xl py-12">
      <h1 class="text-3xl font-extrabold">\u05D9\u05E6\u05D9\u05E8\u05EA \u05E7\u05E9\u05E8</h1>
      <p class="mt-4 rounded-2xl border border-line bg-white p-5 text-base" role="status">\u05D4\u05E4\u05E0\u05D9\u05D9\u05D4 \u05E0\u05E9\u05DE\u05E8\u05D4 \u05D1\u05D4\u05D3\u05D2\u05DE\u05D4. \u05DC\u05D0 \u05E0\u05E9\u05DC\u05D7 \u05DE\u05D9\u05D9\u05DC \u05D0\u05DE\u05D9\u05EA\u05D9.</p>
      <a class="btn mt-6" href="#/">\u05D7\u05D6\u05E8\u05D4 \u05DC\u05D3\u05E3 \u05D4\u05D1\u05D9\u05EA</a>
    </article>`;
    }
    return `<article class="wrap max-w-2xl py-12">
    <h1 class="text-3xl font-extrabold">\u05D8\u05D5\u05E4\u05E1 \u05D9\u05E6\u05D9\u05E8\u05EA \u05E7\u05E9\u05E8</h1>
    <p class="mt-2 text-muted">\u05D4\u05D8\u05D5\u05E4\u05E1 \u05DC\u05D4\u05D3\u05D2\u05DE\u05D4 \u05D1\u05DC\u05D1\u05D3. \u05D0\u05E4\u05E9\u05E8 \u05D2\u05DD \u05DC\u05D4\u05EA\u05E7\u05E9\u05E8 \u05DC\u05BE<a href="tel:03-000-0000" dir="ltr">03-000-0000</a> \u05D0\u05D5 \u05DC\u05E4\u05E0\u05D5\u05EA \u05D1<a href="https://wa.me/97230000000" target="_blank" rel="noopener noreferrer">\u05D5\u05D5\u05D8\u05E1\u05D0\u05E4</a>.</p>
    <form id="contact-form" class="mt-6 grid gap-4 rounded-2xl border border-line bg-white p-5" novalidate>
      ${contactFields({ values, errors })}
      <button class="btn" type="submit">\u05E9\u05DC\u05D9\u05D7\u05EA \u05E4\u05E0\u05D9\u05D9\u05D4</button>
    </form>
  </article>`;
  }
  function validateContact(form) {
    const data = Object.fromEntries(new FormData(form).entries());
    const values = {
      topic: String(data.topic || ""),
      name: String(data.name || "").trim(),
      phone: String(data.phone || "").trim(),
      email: String(data.email || "").trim(),
      message: String(data.message || "").trim()
    };
    const errors = {};
    if (!contactTopics.includes(values.topic)) errors.topic = "\u05E0\u05D0 \u05DC\u05D1\u05D7\u05D5\u05E8 \u05E0\u05D5\u05E9\u05D0 \u05E4\u05E0\u05D9\u05D9\u05D4.";
    if (values.name.length < 2) errors.name = "\u05E0\u05D0 \u05DC\u05DE\u05DC\u05D0 \u05E9\u05DD \u05DE\u05DC\u05D0.";
    const phone = values.phone.replace(/[^\d]/g, "");
    if (!/^0\d{8,9}$/.test(phone)) errors.phone = "\u05E0\u05D0 \u05DC\u05DE\u05DC\u05D0 \u05D8\u05DC\u05E4\u05D5\u05DF \u05D9\u05E9\u05E8\u05D0\u05DC\u05D9.";
    if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = "\u05E0\u05D0 \u05DC\u05DE\u05DC\u05D0 \u05D0\u05D9\u05DE\u05D9\u05D9\u05DC \u05EA\u05E7\u05D9\u05DF.";
    if (values.message.length < 5) errors.message = "\u05E0\u05D0 \u05DC\u05DB\u05EA\u05D5\u05D1 \u05D4\u05D5\u05D3\u05E2\u05D4.";
    return { values: { ...values, phone }, errors };
  }

  // js/components/order-status.js
  var icon = (paths) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths}</svg>`;
  var steps = [
    ["created", "\u05D4\u05D6\u05DE\u05E0\u05D4 \u05E0\u05D5\u05E6\u05E8\u05D4", icon(`<path d="M3.5 7.5 12 3l8.5 4.5v9L12 21l-8.5-4.5z"></path><path d="M3.5 7.5 12 12l8.5-4.5M12 12v9"></path><path d="m7.8 5.2 8.5 4.6"></path>`)],
    ["transit", "\u05D1\u05D3\u05E8\u05DA", icon(`<path d="M4 9h9v9H4z"></path><path d="M7.5 9v3l1-.7 1 .7V9"></path><path d="M15 8h5M17.5 5.5 20 8l-2.5 2.5"></path><path d="M15 15h5M17.5 12.5 20 15l-2.5 2.5"></path>`)],
    ["out", "\u05D9\u05E6\u05D0\u05D4 \u05DC\u05DE\u05E9\u05DC\u05D5\u05D7", icon(`<path d="M2 6.5h11.5v9.5H2z"></path><path d="M13.5 9.5h4.2l3.3 3.6v2.9h-7.5"></path><circle cx="6" cy="17.5" r="1.8"></circle><circle cx="17" cy="17.5" r="1.8"></circle>`)],
    ["delivered", "\u05E0\u05DE\u05E1\u05E8\u05D4", icon(`<path d="M3.5 11 12 4l8.5 7"></path><path d="M5.5 9.5V20h13V9.5"></path><path d="m9 14.5 2 2 4-4"></path>`)]
  ];
  function day(value) {
    return new Date(value).toLocaleDateString("he-IL", { day: "2-digit", month: "2-digit", year: "numeric" });
  }
  function orderStatus(order) {
    const timeline = order.timeline || { created: order.createdAt };
    const cancelled = Boolean(timeline.cancelled);
    const reached = steps.filter(([key]) => timeline[key]).length;
    const current = cancelled ? -1 : reached - 1;
    const items = steps.map(([key, label, svg], index) => {
      const state3 = index < reached ? index === current && key !== "delivered" ? "current" : "done" : "todo";
      return `<li class="order-step is-${state3}"${index === current ? ' aria-current="step"' : ""}>
      <span class="order-step-icon">${svg}</span>
      <span class="order-step-label">${label}</span>
      <span class="order-step-date">${timeline[key] ? esc(day(timeline[key])) : ""}</span>
    </li>`;
    }).join("");
    const summary = cancelled ? `\u05D4\u05D4\u05D6\u05DE\u05E0\u05D4 \u05D1\u05D5\u05D8\u05DC\u05D4 \u05D1\u05BE${esc(day(timeline.cancelled))}` : timeline.delivered ? `\u05D4\u05D4\u05D6\u05DE\u05E0\u05D4 \u05D4\u05D5\u05E9\u05DC\u05DE\u05D4. \u05E0\u05DE\u05E1\u05E8\u05D4 \u05D1\u05BE${esc(day(timeline.delivered))}` : `\u05E1\u05D8\u05D8\u05D5\u05E1 \u05E0\u05D5\u05DB\u05D7\u05D9: ${steps[current][1]}`;
    return `<div class="order-status${cancelled ? " is-cancelled" : ""}">
    <p class="order-status-summary">${summary}</p>
    <ol class="order-steps" aria-label="\u05E1\u05D8\u05D8\u05D5\u05E1 \u05D4\u05D4\u05D6\u05DE\u05E0\u05D4 ${esc(order.id)}">${items}</ol>
  </div>`;
  }

  // js/screens/account.js
  var savedNotice = false;
  var icon2 = (paths) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths}</svg>`;
  var icons = {
    person: icon2(`<circle cx="12" cy="8" r="3.4"></circle><path d="M5 20c1.3-3.2 3.8-4.8 7-4.8s5.7 1.6 7 4.8"></path>`),
    overview: icon2(`<path d="M4 11.5 12 5l8 6.5"></path><path d="M6 10v9h12v-9"></path>`),
    orders: icon2(`<path d="M3.5 7.5 12 3l8.5 4.5v9L12 21l-8.5-4.5z"></path><path d="M3.5 7.5 12 12l8.5-4.5M12 12v9"></path>`),
    details: icon2(`<rect x="4" y="5" width="16" height="14" rx="2"></rect><circle cx="9.5" cy="11" r="2"></circle><path d="M6.5 16c.6-1.4 1.6-2.1 3-2.1s2.4.7 3 2.1M14.5 10h3M14.5 13.5h3"></path>`),
    club: icon2(`<path d="m12 4 2.4 4.9 5.4.8-3.9 3.8.9 5.3L12 16.3 7.2 18.8l.9-5.3-3.9-3.8 5.4-.8z"></path>`),
    service: icon2(`<path d="M4 14v-2a8 8 0 0 1 16 0v2"></path><path d="M4 14h3v5H5a1 1 0 0 1-1-1zM20 14h-3v5h2a1 1 0 0 0 1-1z"></path><path d="M17 19c0 1.1-1.8 2-4 2"></path>`),
    logout: icon2(`<path d="M14 5h4a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-4"></path><path d="M10 16l-4-4 4-4M6 12h9"></path>`)
  };
  function frame(active, crumb, content) {
    const profile = getProfile();
    const session = getSession();
    const until = session ? new Date(session.expiresAt).toLocaleTimeString("he-IL", { hour: "2-digit", minute: "2-digit" }) : "";
    const link = (id, href, label, sub = "") => `<a class="account-menu-link" href="${href}"${active === id ? ` aria-current="page"` : ""}>
      ${icons[id]}
      <span>${label}${sub ? `<small>${sub}</small>` : ""}</span>
    </a>`;
    return `<article class="wrap account-page py-6">
    <nav class="account-crumbs" aria-label="\u05DE\u05D9\u05E7\u05D5\u05DD">
      <a href="#/">\u05D1\u05D9\u05EA</a>
      <span aria-hidden="true">\u203A</span>
      ${crumb ? `<a href="#/account">\u05D0\u05D6\u05D5\u05E8 \u05D0\u05D9\u05E9\u05D9</a><span aria-hidden="true">\u203A</span><span aria-current="page">${crumb}</span>` : `<span aria-current="page">\u05D0\u05D6\u05D5\u05E8 \u05D0\u05D9\u05E9\u05D9</span>`}
    </nav>
    <div class="account-layout">
      <aside class="account-side">
        <div class="account-side-head">
          <span class="account-avatar">${icons.person}</span>
          <div class="min-w-0">
            <p class="account-name">${esc(profile.displayName)}</p>
            <p class="account-id">\u05DE\u05E1\u05F3 \u05DC\u05E7\u05D5\u05D7 <span dir="ltr">${esc(profile.customerId)}</span></p>
          </div>
        </div>
        <nav class="account-menu" aria-label="\u05D4\u05D0\u05D6\u05D5\u05E8 \u05D4\u05D0\u05D9\u05E9\u05D9">
          ${link("overview", "#/account", "\u05E1\u05E7\u05D9\u05E8\u05D4")}
          ${link("orders", "#/orders", "\u05D4\u05D4\u05D6\u05DE\u05E0\u05D5\u05EA \u05E9\u05DC\u05D9")}
          ${link("details", "#/account/details", "\u05E2\u05D3\u05DB\u05D5\u05DF \u05E4\u05E8\u05D8\u05D9\u05DD", "\u05E4\u05E8\u05D8\u05D9\u05DD \u05D0\u05D9\u05E9\u05D9\u05D9\u05DD, \u05D8\u05DC\u05E4\u05D5\u05DF \u05D5\u05DB\u05EA\u05D5\u05D1\u05EA \u05DC\u05DE\u05E9\u05DC\u05D5\u05D7")}
          ${link("club", "#/rules-club", "\u05DE\u05D5\u05E2\u05D3\u05D5\u05DF \u05DC\u05E7\u05D5\u05D7\u05D5\u05EA")}
          ${link("service", "#/service", "\u05E9\u05D9\u05E8\u05D5\u05EA \u05DC\u05E7\u05D5\u05D7\u05D5\u05EA")}
          <button class="account-menu-link" type="button" data-logout>${icons.logout}<span>\u05D4\u05EA\u05E0\u05EA\u05E7\u05D5\u05EA</span></button>
        </nav>
        ${until ? `<p class="account-session">\u05D4\u05D3\u05D2\u05DE\u05D4 \u05D1\u05DC\u05D1\u05D3. \u05D4\u05D4\u05EA\u05D7\u05D1\u05E8\u05D5\u05EA \u05E4\u05E2\u05D9\u05DC\u05D4 \u05E2\u05D3 ${esc(until)}.</p>` : ""}
      </aside>
      <div class="account-main">${content}</div>
    </div>
  </article>`;
  }
  function page(title, body) {
    return `<header class="account-main-head">
    <p class="text-sm font-bold text-muted">\u05D4\u05D3\u05D2\u05DE\u05D4 \u05D1\u05DC\u05D1\u05D3. \u05D0\u05D9\u05DF \u05DB\u05D0\u05DF \u05D0\u05D9\u05DE\u05D5\u05EA \u05D6\u05D4\u05D5\u05EA.</p>
    <h1 class="mt-1 text-3xl font-extrabold">${title}</h1>
  </header>
  ${body}`;
  }
  function when(value) {
    return new Date(value).toLocaleDateString("he-IL", { day: "numeric", month: "long", year: "numeric" });
  }
  function renderAccount() {
    const profile = getProfile();
    const latest = demoOrders[0];
    const recent = demoOrders.slice(0, 3).map((order) => `<li class="account-order-row">
      <span><a class="font-bold" href="#/orders/${esc(order.id)}" dir="ltr">${esc(order.id)}</a><span class="mt-1 block text-sm text-muted">${esc(when(order.createdAt))} \xB7 ${esc(order.status)}</span></span>
      <span class="font-bold">${money(order.total)}</span>
    </li>`).join("");
    return frame("overview", "", `
    <section class="account-banner" aria-labelledby="account-title">
      <span class="proto-label" aria-hidden="true">\u05D1\u05D0\u05E0\u05E8 \u05D0\u05D6\u05D5\u05E8 \u05D0\u05D9\u05E9\u05D9</span>
      <div>
        <p class="account-banner-kicker">\u05D4\u05D0\u05D6\u05D5\u05E8 \u05D4\u05D0\u05D9\u05E9\u05D9 \u05E9\u05DC\u05DA</p>
        <h1 id="account-title" class="account-banner-title">\u05E9\u05DC\u05D5\u05DD ${esc(profile.displayName)}</h1>
        <p class="account-banner-text">${demoOrders.length} \u05D4\u05D6\u05DE\u05E0\u05D5\u05EA \u05D1\u05D0\u05D6\u05D5\u05E8 \u05D4\u05D0\u05D9\u05E9\u05D9 \xB7 \u05D4\u05D4\u05D6\u05DE\u05E0\u05D4 \u05D4\u05D0\u05D7\u05E8\u05D5\u05E0\u05D4 ${esc(when(latest.createdAt))}</p>
      </div>
      <span class="account-banner-art" aria-hidden="true"></span>
    </section>
    <div class="account-tiles">
      <section class="account-tile" aria-labelledby="tile-order">
        <span class="account-tile-art" aria-hidden="true">${icons.orders}</span>
        <h2 id="tile-order">\u05D4\u05D4\u05D6\u05DE\u05E0\u05D4 \u05D4\u05D0\u05D7\u05E8\u05D5\u05E0\u05D4</h2>
        <p><span dir="ltr">${esc(latest.id)}</span> \xB7 ${esc(latest.status)}</p>
        <a class="btn" href="#/orders/${esc(latest.id)}">\u05DC\u05DE\u05E2\u05E7\u05D1 \u05D4\u05D6\u05DE\u05E0\u05D4</a>
      </section>
      <section class="account-tile" aria-labelledby="tile-details">
        <span class="account-tile-art" aria-hidden="true">${icons.details}</span>
        <h2 id="tile-details">\u05E4\u05E8\u05D8\u05D9\u05DD \u05DC\u05DE\u05E9\u05DC\u05D5\u05D7</h2>
        <p>${esc(profile.street)} ${esc(profile.house)}, ${esc(profile.city)} \xB7 <span dir="ltr">${esc(profile.phone)}</span></p>
        <a class="btn btn-line" href="#/account/details">\u05E2\u05D3\u05DB\u05D5\u05DF \u05E4\u05E8\u05D8\u05D9\u05DD</a>
      </section>
      <section class="account-tile" aria-labelledby="tile-service">
        <span class="account-tile-art" aria-hidden="true">${icons.service}</span>
        <h2 id="tile-service">\u05E9\u05D9\u05E8\u05D5\u05EA \u05DC\u05E7\u05D5\u05D7\u05D5\u05EA</h2>
        <p>\u05E9\u05D0\u05DC\u05D4 \u05E2\u05DC \u05D4\u05D6\u05DE\u05E0\u05D4 \u05D0\u05D5 \u05DE\u05E9\u05DC\u05D5\u05D7? \u05D0\u05E4\u05E9\u05E8 \u05DC\u05E4\u05E0\u05D5\u05EA \u05D0\u05DC\u05D9\u05E0\u05D5.</p>
        <a class="btn btn-line" href="#/service">\u05DC\u05E4\u05E0\u05D9\u05D9\u05D4</a>
      </section>
    </div>
    <section class="account-card" aria-labelledby="recent-orders">
      <div class="account-card-head">
        <h2 id="recent-orders">\u05D4\u05D6\u05DE\u05E0\u05D5\u05EA \u05D0\u05D7\u05E8\u05D5\u05E0\u05D5\u05EA</h2>
        <a href="#/orders">\u05DC\u05DB\u05DC \u05D4\u05D4\u05D6\u05DE\u05E0\u05D5\u05EA</a>
      </div>
      <ul>${recent}</ul>
    </section>
  `);
  }
  function renderAccountDetails() {
    const profile = getProfile();
    const field2 = (name, label, value, extra = "") => `<label class="field">
    <span class="text-sm font-semibold">${label}</span>
    <input name="${name}" value="${esc(value)}" ${extra}>
  </label>`;
    const notice = savedNotice ? `<p class="auth-success" role="status">\u05D4\u05E4\u05E8\u05D8\u05D9\u05DD \u05E0\u05E9\u05DE\u05E8\u05D5 \u05D1\u05D4\u05D3\u05D2\u05DE\u05D4 \u05D5\u05E2\u05D5\u05D3\u05DB\u05E0\u05D5 \u05D2\u05DD \u05D1\u05E9\u05D0\u05E8 \u05D4\u05D0\u05D6\u05D5\u05E8 \u05D4\u05D0\u05D9\u05E9\u05D9.</p>` : "";
    savedNotice = false;
    return frame("details", "\u05E2\u05D3\u05DB\u05D5\u05DF \u05E4\u05E8\u05D8\u05D9\u05DD", page("\u05E2\u05D3\u05DB\u05D5\u05DF \u05E4\u05E8\u05D8\u05D9\u05DD", `
    ${notice}
    <form id="profile-form" class="mt-6 grid max-w-xl gap-4" novalidate>
      <p class="text-sm text-muted">\u05D0\u05DC\u05D4 \u05E4\u05E8\u05D8\u05D9\u05DD \u05D1\u05D3\u05D5\u05D9\u05D9\u05DD \u05E9\u05DC \u05DC\u05E7\u05D5\u05D7 \u05D4\u05D4\u05D3\u05D2\u05DE\u05D4. \u05D4\u05DE\u05D6\u05D4\u05D4 \u05E7\u05D1\u05D5\u05E2.</p>
      <label class="field">
        <span class="text-sm font-semibold">\u05DE\u05D6\u05D4\u05D4 \u05DC\u05E7\u05D5\u05D7</span>
        <input value="${esc(profile.customerId)}" readonly dir="ltr">
      </label>
      ${field2("displayName", "\u05E9\u05DD \u05DC\u05EA\u05E6\u05D5\u05D2\u05D4", profile.displayName, `autocomplete="name"`)}
      ${field2("phone", "\u05D8\u05DC\u05E4\u05D5\u05DF", profile.phone, `type="tel" autocomplete="tel" dir="ltr"`)}
      <div class="grid gap-4 sm:grid-cols-2">
        ${field2("city", "\u05E2\u05D9\u05E8", profile.city, `autocomplete="address-level2"`)}
        ${field2("street", "\u05E8\u05D7\u05D5\u05D1", profile.street, `autocomplete="address-line1"`)}
      </div>
      ${field2("house", "\u05DE\u05E1\u05E4\u05E8 \u05D1\u05D9\u05EA", profile.house)}
      <p id="profile-error" class="field-error" role="alert" hidden></p>
      <button class="btn" type="submit">\u05E9\u05DE\u05D9\u05E8\u05EA \u05E4\u05E8\u05D8\u05D9\u05DD</button>
    </form>
  `));
  }
  function renderOrders() {
    const rows2 = demoOrders.map((order) => `<li class="order-card">
      <div class="flex items-center justify-between gap-3">
        <span>
          <a class="font-bold" href="#/orders/${esc(order.id)}" dir="ltr">${esc(order.id)}</a>
          <span class="mt-1 block text-sm text-muted">${esc(when(order.createdAt))} \xB7 ${esc(order.status)}</span>
        </span>
        <span class="font-bold">${money(order.total)}</span>
      </div>
      ${orderStatus(order)}
    </li>`).join("");
    return frame("orders", "\u05D4\u05D4\u05D6\u05DE\u05E0\u05D5\u05EA \u05E9\u05DC\u05D9", page("\u05D4\u05D4\u05D6\u05DE\u05E0\u05D5\u05EA \u05E9\u05DC\u05D9", `
    <p class="mt-3 text-muted">\u05E9\u05DC\u05D5\u05E9 \u05D4\u05D6\u05DE\u05E0\u05D5\u05EA \u05E7\u05D1\u05D5\u05E2\u05D5\u05EA \u05DC\u05D4\u05D3\u05D2\u05DE\u05D4. \u05D0\u05D9\u05E9\u05D5\u05E8 \u05E9\u05E0\u05D5\u05E6\u05E8 \u05D1\u05E7\u05D5\u05E4\u05D4 \u05E0\u05E9\u05D0\u05E8 \u05D1\u05DE\u05E1\u05DA \u05D4\u05D0\u05D9\u05E9\u05D5\u05E8 \u05E9\u05DC\u05D5.</p>
    <ul class="mt-4 grid gap-4">${rows2}</ul>
  `));
  }
  function renderOrderDetail(id) {
    const order = getDemoOrder(id);
    if (!order) {
      return frame("orders", "\u05D4\u05D6\u05DE\u05E0\u05D4", page("\u05D4\u05D6\u05DE\u05E0\u05D4", `
      <p class="mt-3 text-muted">\u05D4\u05D4\u05D6\u05DE\u05E0\u05D4 \u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D4 \u05D1\u05D4\u05D3\u05D2\u05DE\u05D4.</p>
      <a class="btn mt-6" href="#/orders">\u05D7\u05D6\u05E8\u05D4 \u05DC\u05D4\u05D6\u05DE\u05E0\u05D5\u05EA</a>
    `));
    }
    const items = order.items.map((item) => `<li class="flex justify-between gap-3"><span>${esc(item.name)} \xD7 ${item.qty}</span><span>${money(item.price * item.qty)}</span></li>`).join("");
    return frame("orders", `\u05D4\u05D6\u05DE\u05E0\u05D4 ${esc(order.id)}`, page(`\u05D4\u05D6\u05DE\u05E0\u05D4 ${esc(order.id)}`, `
    <p class="mt-3 text-muted">${esc(when(order.createdAt))} \xB7 ${esc(order.status)}</p>
    <section class="order-card mt-6 max-w-3xl">${orderStatus(order)}</section>
    <section class="order-card mt-6 max-w-3xl">
      <h2 class="font-extrabold">\u05D4\u05E4\u05E8\u05D9\u05D8\u05D9\u05DD</h2>
      <ul class="mt-3 grid gap-2 text-sm">${items}</ul>
      <dl class="mt-4 grid gap-2 border-t border-line pt-3 text-sm">
        <div class="flex justify-between"><dt>\u05DE\u05D5\u05E6\u05E8\u05D9\u05DD</dt><dd>${money(order.subtotal)}</dd></div>
        <div class="flex justify-between"><dt>\u05DE\u05D7\u05D9\u05E8 \u05DE\u05E9\u05DC\u05D5\u05D7</dt><dd>${money(order.delivery)}</dd></div>
        <div class="flex justify-between font-extrabold"><dt>\u05E1\u05D4\u05F4\u05DB</dt><dd>${money(order.total)}</dd></div>
      </dl>
    </section>
    <a class="btn btn-line mt-6" href="#/orders">\u05D7\u05D6\u05E8\u05D4 \u05DC\u05D4\u05D6\u05DE\u05E0\u05D5\u05EA</a>
  `));
  }
  function bindAccount(rerender) {
    document.addEventListener("submit", (event) => {
      const form = event.target;
      if (form.id !== "profile-form") return;
      event.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());
      const error = form.querySelector("#profile-error");
      const name = String(data.displayName || "").trim();
      const phone = String(data.phone || "").replace(/[^\d]/g, "");
      if (name.length < 2 || !/^0\d{8,9}$/.test(phone) || !String(data.city || "").trim() || !String(data.street || "").trim() || !String(data.house || "").trim()) {
        error.hidden = false;
        error.textContent = "\u05E0\u05D0 \u05DC\u05DE\u05DC\u05D0 \u05E9\u05DD, \u05D8\u05DC\u05E4\u05D5\u05DF \u05D9\u05E9\u05E8\u05D0\u05DC\u05D9, \u05E2\u05D9\u05E8, \u05E8\u05D7\u05D5\u05D1 \u05D5\u05DE\u05E1\u05E4\u05E8 \u05D1\u05D9\u05EA.";
        form.querySelector("input[name='displayName']")?.focus();
        return;
      }
      saveProfile({ ...data, displayName: name, phone });
      savedNotice = true;
      rerender({ focus: false });
    });
  }

  // js/components/mega-menu.js
  var mark = "assets/images/brand/heart.png";
  var chevron = `<svg class="mega-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M6 9l6 6 6-6"></path></svg>`;
  var arrow = `<svg class="mega-all-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M19 12H6M12 6l-6 6 6 6"></path></svg>`;
  var menus = [
    {
      id: "super",
      label: "\u05E1\u05D5\u05E4\u05E8 \u05D0\u05E9\u05DE\u05D5\u05E8\u05EA",
      groups: [
        ["\u05DE\u05D6\u05D5\u05D5\u05D4 \u05D9\u05D1\u05E9", [
          ["\u05E4\u05D9\u05E8\u05D5\u05E8\u05D9 \u05DC\u05D7\u05DD", "#/c/breadcrumbs"],
          ["\u05D3\u05D2\u05E0\u05D9\u05DD \u05D5\u05E7\u05D8\u05E0\u05D9\u05D5\u05EA", "#/c/grains"],
          ["\u05D0\u05D5\u05E8\u05D6", "#/c/rice"],
          ["\u05E4\u05E1\u05D8\u05D5\u05EA \u05D5\u05E4\u05EA\u05D9\u05EA\u05D9\u05DD", "#/c/pasta"],
          ["\u05D8\u05D5\u05E8\u05D8\u05D9\u05D5\u05EA", "#/c/tortillas"]
        ]],
        ["\u05E9\u05D9\u05DE\u05D5\u05E8\u05D9\u05DD \u05D5\u05E9\u05DE\u05E0\u05D9\u05DD", [
          ["\u05E9\u05D9\u05DE\u05D5\u05E8\u05D9\u05DD", "#/c/cans"],
          ["\u05E9\u05DE\u05E0\u05D9\u05DD \u05D5\u05E8\u05D8\u05D1\u05D9\u05DD", "#/c/oils"],
          ["\u05E8\u05D8\u05D1\u05D9 \u05D1\u05D9\u05E9\u05D5\u05DC", "#/c/oils"]
        ]],
        ["\u05EA\u05D1\u05DC\u05D9\u05E0\u05D9\u05DD", [
          ["\u05EA\u05D1\u05DC\u05D9\u05E0\u05D9\u05DD \u05DC\u05DE\u05D8\u05D1\u05D7", "#/c/spices"],
          ["\u05EA\u05D1\u05DC\u05D9\u05E0\u05D9\u05DD \u05D8\u05D7\u05D5\u05E0\u05D9\u05DD", "#/c/spices"],
          ["\u05E2\u05E9\u05D1\u05D9 \u05EA\u05D9\u05D1\u05D5\u05DC", "#/c/spices"]
        ]]
      ],
      promo: {
        href: "#/d/super",
        title: "\u05DC\u05DB\u05DC \u05D4\u05DE\u05D5\u05E6\u05E8\u05D9\u05DD \u05D1\u05E1\u05D5\u05E4\u05E8 \u05D0\u05E9\u05DE\u05D5\u05E8\u05EA"
      }
    },
    {
      id: "home",
      label: "\u05D7\u05D3 \u05E4\u05E2\u05DE\u05D9 \u05D5\u05DB\u05DC\u05D9 \u05D1\u05D9\u05EA",
      groups: [
        ["\u05D7\u05D3 \u05E4\u05E2\u05DE\u05D9", [
          ["\u05E6\u05DC\u05D7\u05D5\u05EA \u05D5\u05DB\u05D5\u05E1\u05D5\u05EA", "#/c/disposables"],
          ["\u05E1\u05DB\u05D5\u05F4\u05DD \u05D7\u05D3 \u05E4\u05E2\u05DE\u05D9", "#/c/disposables"],
          ["\u05DE\u05E4\u05D5\u05EA \u05E0\u05D9\u05D9\u05E8", "#/c/disposables"],
          ["\u05EA\u05D1\u05E0\u05D9\u05D5\u05EA \u05D0\u05DC\u05D5\u05DE\u05D9\u05E0\u05D9\u05D5\u05DD", "#/c/disposables"],
          ["\u05E9\u05E7\u05D9\u05D5\u05EA", "#/c/disposables"]
        ]],
        ["\u05E0\u05D9\u05E7\u05D9\u05D5\u05DF", [
          ["\u05E0\u05D5\u05D6\u05DC \u05DB\u05DC\u05D9\u05DD", "#/c/cleaning"],
          ["\u05DE\u05D8\u05DC\u05D9\u05D5\u05EA", "#/c/cleaning"],
          ["\u05E9\u05E7\u05D9\u05D5\u05EA \u05D0\u05E9\u05E4\u05D4", "#/c/cleaning"],
          ["\u05E0\u05D9\u05D9\u05E8 \u05E1\u05D5\u05E4\u05D2", "#/c/cleaning"]
        ]],
        ["\u05DB\u05DC\u05D9 \u05D1\u05D9\u05EA", [
          ["\u05DB\u05DC\u05D9 \u05D0\u05D7\u05E1\u05D5\u05DF", "#/c/household"],
          ["\u05DB\u05DC\u05D9 \u05D4\u05D2\u05E9\u05D4", "#/c/household"],
          ["\u05DB\u05DC\u05D9 \u05D0\u05E4\u05D9\u05D9\u05D4", "#/c/household"]
        ]]
      ],
      promo: {
        href: "#/d/home",
        title: "\u05DC\u05DB\u05DC \u05D4\u05DE\u05D5\u05E6\u05E8\u05D9\u05DD \u05D1\u05D7\u05D3 \u05E4\u05E2\u05DE\u05D9 \u05D5\u05DB\u05DC\u05D9 \u05D1\u05D9\u05EA"
      }
    },
    {
      id: "electronics",
      label: "\u05E7\u05E0\u05D9\u05D5\u05DF \u05D0\u05E9\u05DE\u05D5\u05E8\u05EA",
      groups: [
        ["\u05DE\u05DB\u05E9\u05D9\u05E8\u05D9 \u05D7\u05E9\u05DE\u05DC", [
          ["\u05E7\u05D5\u05DE\u05E7\u05D5\u05DE\u05D9\u05DD", "#/c/appliances"],
          ["\u05D8\u05D5\u05E1\u05D8\u05E8\u05D9\u05DD", "#/c/appliances"],
          ["\u05D1\u05DC\u05E0\u05D3\u05E8\u05D9\u05DD", "#/c/appliances"],
          ["\u05DE\u05D0\u05D5\u05D5\u05E8\u05E8\u05D9\u05DD", "#/c/appliances"]
        ]],
        ["\u05EA\u05D0\u05D5\u05E8\u05D4", [
          ["\u05E0\u05D5\u05E8\u05D5\u05EA", "#/c/lighting"],
          ["\u05DE\u05E0\u05D5\u05E8\u05D5\u05EA \u05E9\u05D5\u05DC\u05D7\u05DF", "#/c/lighting"],
          ["\u05E4\u05E0\u05E1\u05D9 \u05D7\u05D9\u05E8\u05D5\u05DD", "#/c/lighting"]
        ]],
        ["\u05D0\u05DC\u05E7\u05D8\u05E8\u05D5\u05E0\u05D9\u05E7\u05D4", [
          ["\u05E1\u05D5\u05DC\u05DC\u05D5\u05EA", "#/c/gadgets"],
          ["\u05DB\u05D1\u05DC\u05D9\u05DD \u05D5\u05DE\u05D8\u05E2\u05E0\u05D9\u05DD", "#/c/gadgets"],
          ["\u05D0\u05D5\u05D6\u05E0\u05D9\u05D5\u05EA", "#/c/gadgets"]
        ]]
      ],
      promo: {
        href: "#/d/electronics",
        title: "\u05DC\u05DB\u05DC \u05D4\u05DE\u05D5\u05E6\u05E8\u05D9\u05DD \u05D1\u05E7\u05E0\u05D9\u05D5\u05DF \u05D0\u05E9\u05DE\u05D5\u05E8\u05EA"
      }
    },
    {
      id: "offers",
      label: "\u05DE\u05D1\u05E6\u05E2\u05D9\u05DD",
      banners: true
    }
  ];
  var groupImages = {
    "\u05DE\u05D6\u05D5\u05D5\u05D4 \u05D9\u05D1\u05E9": "pantry.png",
    "\u05E9\u05D9\u05DE\u05D5\u05E8\u05D9\u05DD \u05D5\u05E9\u05DE\u05E0\u05D9\u05DD": "cans-oils.png",
    "\u05EA\u05D1\u05DC\u05D9\u05E0\u05D9\u05DD": "spices.png",
    "\u05D7\u05D3 \u05E4\u05E2\u05DE\u05D9": "disposables.png",
    "\u05E0\u05D9\u05E7\u05D9\u05D5\u05DF": "cleaning.png",
    "\u05DB\u05DC\u05D9 \u05D1\u05D9\u05EA": "household.png",
    "\u05DE\u05DB\u05E9\u05D9\u05E8\u05D9 \u05D7\u05E9\u05DE\u05DC": "appliances.png",
    "\u05EA\u05D0\u05D5\u05E8\u05D4": "lighting.png",
    "\u05D0\u05DC\u05E7\u05D8\u05E8\u05D5\u05E0\u05D9\u05E7\u05D4": "electronics.png"
  };
  function featuredGroups() {
    return ["super", "home", "electronics"].flatMap((id) => menuById(id).groups.map(([name, links]) => ({
      name,
      href: links[0][1],
      image: groupImages[name] ? `assets/images/categories/${groupImages[name]}` : null,
      icon: groupImages[name] ? `assets/images/categories/icons/${groupImages[name].replace(".png", ".webp")}?v=2` : null
    })));
  }
  function menuById(id) {
    return menus.find((item) => item.id === id);
  }
  function megaPanel(id) {
    const item = menuById(id);
    if (!item) return "";
    if (item.banners) {
      const banners = getTheme().banners === "v2" ? sideBanners : offerBanners;
      return `<div class="mega-layout mega-banners" style="--banner-count:${banners.length}">${banners.map((banner) => `<a class="mega-banner" href="${esc(banner.href)}" aria-label="${esc(banner.label)}">
      <img src="${esc(banner.image)}" alt="" width="${banner.size[0]}" height="${banner.size[1]}" loading="lazy" decoding="async">
    </a>`).join("")}</div>`;
    }
    const groups2 = item.groups.map(([title, links]) => `<section class="mega-block">
      <h3><a href="${esc(links[0][1])}">${esc(title)}</a></h3>
      <ul>${links.map(([label, href]) => `<li><a href="${esc(href)}">${esc(label)}</a></li>`).join("")}</ul>
      <span class="mega-block-photo" style="background-image:url('${mark}')"></span>
    </section>`).join("");
    const promo = item.promo;
    return `<div class="mega-layout">
    <a class="mega-all" href="${esc(promo.href)}">
      <span class="mega-all-photo" style="background-image:url('${mark}')"></span>
      <span class="mega-all-copy">
        <span class="mega-all-title">${esc(promo.title)}</span>
        ${arrow}
      </span>
    </a>
    ${groups2}
  </div>`;
  }
  function categoryLink(category) {
    return `<a class="mega-trigger text-ink" href="#/c/${esc(category.slug)}"><span class="cat-heart" aria-hidden="true"></span>${esc(category.name)}</a>`;
  }
  function renderSupplierNav() {
    const nav = document.querySelector("[data-main-nav]");
    const multi = nav?.querySelector("[data-nav-multi]");
    const single = nav?.querySelector("[data-nav-single]");
    const mobile = document.getElementById("mobile-nav");
    if (!nav || !multi || !single || !mobile) return;
    nav.megaClose?.();
    const solo = isSingleSupplier();
    multi.hidden = solo;
    single.hidden = !solo;
    single.innerHTML = solo ? supplierCategories().map(categoryLink).join("") : "";
    mobile.innerHTML = solo ? supplierCategories().map((category) => `<div class="mega-mobile-head">${categoryLink(category)}</div>`).join("") : menus.map((item) => `<div>
      <div class="mega-mobile-head">
        <a class="mega-trigger" href="#/d/${esc(item.id)}"><span class="nav-icon is-${esc(item.id)}" aria-hidden="true"></span>${esc(item.label)}</a>
        <button type="button" class="mega-trigger" data-mega-mobile="${esc(item.id)}" aria-expanded="false" aria-label="\u05E4\u05EA\u05D9\u05D7\u05EA ${esc(item.label)}">${chevron}</button>
      </div>
      <div class="mega-mobile" hidden data-mega-mobile-panel="${esc(item.id)}"></div>
    </div>`).join("");
  }
  function mountMega() {
    const nav = document.querySelector("[data-main-nav]");
    const mega = document.getElementById("mega");
    const body = document.getElementById("mega-body");
    const mobile = document.getElementById("mobile-nav");
    if (!nav || !mega || !body || !mobile) return;
    renderSupplierNav();
    const triggers = [...nav.querySelectorAll("[data-mega-open]")];
    let closeTimer = 0;
    const closeDesktop = () => {
      window.clearTimeout(closeTimer);
      mega.hidden = true;
      delete mega.dataset.open;
      body.innerHTML = "";
      triggers.forEach((link) => link.setAttribute("aria-expanded", "false"));
    };
    const openDesktop = (id, link) => {
      window.clearTimeout(closeTimer);
      if (mega.dataset.open !== id) {
        body.innerHTML = megaPanel(id);
        mega.dataset.open = id;
      }
      mega.hidden = false;
      mega.setAttribute("aria-labelledby", link.id);
      triggers.forEach((item) => item.setAttribute("aria-expanded", String(item === link)));
    };
    const closeMobile = () => {
      mobile.querySelectorAll("[data-mega-mobile]").forEach((button) => {
        button.setAttribute("aria-expanded", "false");
        const panel = mobile.querySelector(`[data-mega-mobile-panel="${button.dataset.megaMobile}"]`);
        if (panel) panel.hidden = true;
      });
    };
    const closeAll = () => {
      closeDesktop();
      closeMobile();
    };
    const megaLinks = () => [...body.querySelectorAll("a[href], button:not([disabled])")];
    triggers.forEach((link) => {
      const open3 = () => openDesktop(link.dataset.megaOpen, link);
      link.addEventListener("mouseenter", open3);
      link.addEventListener("focus", open3);
      link.addEventListener("keydown", (event) => {
        if (event.key !== "Tab" || event.shiftKey) return;
        open3();
        const first = megaLinks()[0];
        if (!first) return;
        event.preventDefault();
        first.focus();
      });
    });
    mega.addEventListener("keydown", (event) => {
      if (event.key !== "Tab") return;
      const links = megaLinks();
      const index = links.indexOf(document.activeElement);
      const position = triggers.findIndex((link) => link.dataset.megaOpen === mega.dataset.open);
      if (event.shiftKey && index === 0) {
        event.preventDefault();
        triggers[position]?.focus();
      } else if (!event.shiftKey && index === links.length - 1 && triggers[position + 1]) {
        event.preventDefault();
        triggers[position + 1].focus();
      }
    });
    nav.addEventListener("mouseenter", () => window.clearTimeout(closeTimer));
    nav.addEventListener("mouseleave", () => {
      window.clearTimeout(closeTimer);
      closeTimer = window.setTimeout(closeDesktop, 120);
    });
    nav.addEventListener("focusout", (event) => {
      if (!nav.contains(event.relatedTarget)) closeDesktop();
    });
    mobile.addEventListener("click", (event) => {
      const button = event.target.closest("[data-mega-mobile]");
      if (!button) return;
      const id = button.dataset.megaMobile;
      const panel = mobile.querySelector(`[data-mega-mobile-panel="${id}"]`);
      const open3 = button.getAttribute("aria-expanded") === "true";
      closeMobile();
      if (!open3 && panel) {
        panel.innerHTML = megaPanel(id);
        panel.hidden = false;
        button.setAttribute("aria-expanded", "true");
      }
    });
    document.addEventListener("click", (event) => {
      if (!nav.contains(event.target)) closeDesktop();
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeAll();
    });
    nav.megaClose = closeAll;
  }
  function closeMega() {
    document.querySelector("[data-main-nav]")?.megaClose?.();
  }

  // js/components/shell.js
  var bound = false;
  function bindShell(navigate3) {
    if (bound) return;
    bound = true;
    const form = document.getElementById("search-form");
    const input = document.getElementById("search-input");
    const suggest = document.getElementById("suggest");
    const slot = document.getElementById("search-slot");
    const menu = document.getElementById("mobile-menu");
    const menuOpen = document.getElementById("menu-open");
    const catPrev = document.getElementById("cat-prev");
    const catNext = document.getElementById("cat-next");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      setSuggestOpen(false);
      const q = input.value.trim();
      navigate3(q ? `#/search?q=${encodeURIComponent(q)}` : "#/search");
    });
    input.addEventListener("input", () => {
      const matches = searchProducts(input.value).filter(inSupplierScope).slice(0, 6);
      if (!input.value.trim() || !matches.length) {
        suggest.innerHTML = "";
        setSuggestOpen(false);
        return;
      }
      suggest.innerHTML = matches.map((product, index) => `<a role="option" id="suggest-${index}" aria-selected="false" href="#/p/${esc(product.id)}"><span class="font-semibold">${esc(product.name)}</span><span class="text-sm text-muted">${esc(product.weight)}</span></a>`).join("");
      setSuggestOpen(true);
    });
    document.addEventListener("click", (event) => {
      if (!slot.contains(event.target)) setSuggestOpen(false);
    });
    input.addEventListener("keydown", (event) => {
      const options = [...suggest.querySelectorAll("[role=option]")];
      const open3 = !suggest.classList.contains("hidden") && options.length > 0;
      const current = options.findIndex((option) => option.getAttribute("aria-selected") === "true");
      if (event.key === "Escape") {
        setSuggestOpen(false);
        return;
      }
      if (!open3) return;
      if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        event.preventDefault();
        const step = event.key === "ArrowDown" ? 1 : -1;
        const next = current < 0 ? step > 0 ? 0 : options.length - 1 : (current + step + options.length) % options.length;
        setActiveOption(options, next);
      } else if (event.key === "Enter" && current >= 0) {
        event.preventDefault();
        const href = options[current].getAttribute("href");
        setSuggestOpen(false);
        navigate3(href);
      }
    });
    menuOpen.addEventListener("click", () => toggleMenu());
    menu.addEventListener("click", (event) => {
      if (event.target.closest("a, [data-menu-close]")) toggleMenu(false);
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && menu.classList.contains("is-open")) toggleMenu(false);
    });
    catPrev.addEventListener("click", () => categoryCarousel?.scrollPrev());
    catNext.addEventListener("click", () => categoryCarousel?.scrollNext());
    mountMega();
    document.addEventListener("click", (event) => {
      if (!event.target.closest("[data-logout]")) return;
      logout();
      updateAccountSlot();
      if (isPrivateRoute(parseHash().name)) navigate3("#/");
    });
    subscribe(() => updateCartBadge());
    updateCartBadge();
    updateAccountSlot();
    function toggleMenu(force) {
      const wasOpen = menu.classList.contains("is-open");
      const open3 = typeof force === "boolean" ? force : !wasOpen;
      const cover = document.documentElement.dataset.mobileMenu === "v2";
      menu.classList.toggle("is-open", open3);
      menuOpen.setAttribute("aria-expanded", String(open3));
      document.documentElement.classList.toggle("is-menu-cover", open3 && cover);
      if (cover && open3) menu.querySelector("[data-menu-close]")?.focus();
      else if (cover && wasOpen && !open3) menuOpen.focus();
      const gsap = window.gsap;
      if (open3 && gsap && !prefersReducedMotion()) {
        gsap.fromTo(menu, { y: cover ? 0 : -8, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: cover ? 0.2 : 0.28, ease: "power2.out" });
      }
    }
  }
  var personIcon = `<svg viewBox="0 0 24 24" class="size-6" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="8" r="3.2"></circle><path d="M5 19.2c1.4-3 3.8-4.4 7-4.4s5.6 1.4 7 4.4"></path></svg>`;
  function updateAccountSlot() {
    const slot = document.getElementById("account-slot");
    if (!slot) return;
    const session = getSession();
    if (!session) {
      slot.innerHTML = `<button class="account-link account-user" type="button" data-open-auth>${personIcon}<span>\u05D4\u05EA\u05D7\u05D1\u05E8\u05D5\u05EA</span></button>`;
      return;
    }
    slot.innerHTML = `<a class="account-link account-user" href="#/account" aria-label="\u05D4\u05D0\u05D6\u05D5\u05E8 \u05D4\u05D0\u05D9\u05E9\u05D9, ${esc(session.displayName)}">${personIcon}<span>${esc(session.displayName)}</span></a><button class="account-logout" type="button" data-logout>\u05D9\u05E6\u05D9\u05D0\u05D4</button>`;
  }
  function updateCartBadge() {
    const root = document.getElementById("cart-dock");
    if (!root) return;
    const count = countItems();
    const label = count === 0 ? "\u05E1\u05DC \u05E7\u05E0\u05D9\u05D5\u05EA" : count === 1 ? "\u05E1\u05DC \u05E7\u05E0\u05D9\u05D5\u05EA, \u05E4\u05E8\u05D9\u05D8 \u05D0\u05D7\u05D3" : `\u05E1\u05DC \u05E7\u05E0\u05D9\u05D5\u05EA, ${count} \u05E4\u05E8\u05D9\u05D8\u05D9\u05DD`;
    root.setAttribute("aria-label", label);
  }
  var categoryCarousel = null;
  function setCategoryBand(visible) {
    const band = document.getElementById("category-band");
    if (!band) return;
    band.hidden = !visible;
  }
  function renderCategoryNav(activeSlug) {
    const list = document.getElementById("category-nav");
    const viewport = document.getElementById("category-viewport");
    const copies = 4;
    const items = isSingleSupplier() ? supplierCategories().map((category) => ({ name: category.name, href: `#/c/${category.slug}` })) : featuredGroups();
    list.innerHTML = Array.from({ length: copies }, (_, copy) => items.map((item) => {
      const current = copy === 0 && activeSlug && item.href === `#/c/${activeSlug}` ? ' aria-current="page"' : "";
      const clone = copy === 0 ? "" : ' tabindex="-1" aria-hidden="true"';
      const icon3 = getTheme().featured === "v2" && item.icon;
      const thumb = icon3 ? `<span class="thumb has-photo is-icon"><img src="${esc(item.icon)}" alt="" decoding="async"></span>` : item.image ? `<span class="thumb has-photo"><img src="${esc(item.image)}" alt="" decoding="async"></span>` : `<span class="thumb"></span>`;
      return `<li class="cat-slide"><a class="cat-link" href="${esc(item.href)}"${current}${clone}>${thumb}<span>${esc(item.name)}</span></a></li>`;
    }).join("")).join("");
    if (categoryCarousel) {
      categoryCarousel.destroy();
      categoryCarousel = null;
    }
    const Embla = window.EmblaCarousel;
    if (!Embla || !viewport) return;
    categoryCarousel = Embla(viewport, {
      loop: true,
      direction: "rtl",
      align: "start",
      containScroll: false,
      dragFree: false,
      duration: prefersReducedMotion() ? 0 : 25
    });
    document.getElementById("cat-prev").disabled = false;
    document.getElementById("cat-next").disabled = false;
  }
  function setActiveOption(options, index) {
    const input = document.getElementById("search-input");
    options.forEach((option, item) => option.setAttribute("aria-selected", String(item === index)));
    const active = options[index];
    if (active) {
      input.setAttribute("aria-activedescendant", active.id);
      active.scrollIntoView({ block: "nearest" });
    } else {
      input.removeAttribute("aria-activedescendant");
    }
  }
  function setSuggestOpen(open3) {
    const suggest = document.getElementById("suggest");
    const input = document.getElementById("search-input");
    suggest.classList.toggle("hidden", !open3);
    input.setAttribute("aria-expanded", String(open3));
    if (!open3) input.removeAttribute("aria-activedescendant");
  }
  function closePanels() {
    setSuggestOpen(false);
    document.getElementById("mobile-menu").classList.remove("is-open");
    document.getElementById("menu-open").setAttribute("aria-expanded", "false");
    document.documentElement.classList.remove("is-menu-cover");
    closeMega();
  }

  // js/components/cart-dock.js
  var arrow2 = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M6 9l6 6 6-6"></path></svg>`;
  var cartIcon = `<svg class="cart-dock-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M6 7h15l-1.6 8.2a2 2 0 0 1-2 1.6H9.2a2 2 0 0 1-2-1.5L5.2 4.8H3"></path><circle cx="9" cy="20" r="1.2" fill="currentColor"></circle><circle cx="18" cy="20" r="1.2" fill="currentColor"></circle></svg>`;
  var trashIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 7h16"></path><path d="M9 7V5h6v2"></path><path d="M7 7l1 13h8l1-13"></path><path d="M10 11v5M14 11v5"></path></svg>`;
  var open = false;
  function rows() {
    return getCart().items.map((item) => ({ ...item, product: getProduct(item.id), commerce: getCommerce(item.id) })).filter((item) => item.product && item.commerce);
  }
  function hiddenFor(routeName) {
    return routeName === "checkout" || routeName === "order";
  }
  function updateCartDock(routeName = parseHash().name) {
    const root = document.getElementById("cart-dock");
    if (!root) return;
    if (hiddenFor(routeName)) open = false;
    const items = rows();
    const count = countItems();
    const show = !hiddenFor(routeName);
    root.hidden = false;
    root.inert = !show;
    root.classList.toggle("is-away", !show);
    if (!open) root.querySelector(".cart-dock-body")?.remove();
    root.classList.toggle("is-open", open && show);
    if (!show && root.childElementCount) return;
    const goods = subtotal();
    const total = goods + (count ? deliveryFee : 0);
    const countLabel = count === 0 ? "\u05D4\u05E1\u05DC \u05E8\u05D9\u05E7" : count === 1 ? "\u05E4\u05E8\u05D9\u05D8 \u05D0\u05D7\u05D3" : `${count} \u05E4\u05E8\u05D9\u05D8\u05D9\u05DD`;
    const list = items.length ? `<ul class="cart-dock-list">${items.map((item) => `<li class="cart-dock-item">
        <a class="cart-dock-thumb${productPhoto(item.product) ? " has-photo" : ""}" href="#/p/${esc(item.product.id)}" tabindex="-1" aria-hidden="true">${photoImg(item.product)}</a>
        <div class="min-w-0">
          <a class="cart-dock-name" href="#/p/${esc(item.product.id)}">${esc(item.product.name)}</a>
          <p class="text-xs text-muted">${esc(item.product.weight)}</p>
          <div class="cart-dock-controls">
            <div class="cart-dock-qty">
              <button type="button" data-cart-step="-1" data-id="${esc(item.product.id)}" aria-label="\u05D4\u05E4\u05D7\u05EA\u05EA \u05DB\u05DE\u05D5\u05EA">\u2212</button>
              <span>${item.qty}</span>
              <button type="button" data-cart-step="1" data-id="${esc(item.product.id)}" aria-label="\u05D4\u05D2\u05D3\u05DC\u05EA \u05DB\u05DE\u05D5\u05EA">+</button>
            </div>
            <p class="cart-dock-price">${money(lineTotal(item))}</p>
            <button type="button" class="cart-dock-remove" data-remove="${esc(item.product.id)}" aria-label="\u05D4\u05E1\u05E8\u05D4">${trashIcon}</button>
          </div>
        </div>
      </li>`).join("")}</ul>` : `<p class="cart-dock-empty">\u05D4\u05E1\u05DC \u05E8\u05D9\u05E7. \u05D0\u05E4\u05E9\u05E8 \u05DC\u05D4\u05D5\u05E1\u05D9\u05E3 \u05DE\u05D5\u05E6\u05E8\u05D9\u05DD \u05DE\u05D4\u05E7\u05D8\u05DC\u05D5\u05D2.</p>`;
    root.innerHTML = `<div class="cart-dock-bar">
      <button type="button" class="cart-dock-arrow" data-cart-toggle aria-expanded="${open}" aria-controls="cart-dock-body">
        ${arrow2}
        <span class="sr-only">${open ? "\u05E1\u05D2\u05D9\u05E8\u05EA \u05D4\u05E1\u05DC" : "\u05E4\u05EA\u05D9\u05D7\u05EA \u05D4\u05E1\u05DC"}</span>
      </button>
      <div class="min-w-0">
        <p class="cart-dock-title"><span class="cart-dock-mark">${cartIcon}${count ? `<span class="cart-dock-badge">${count}</span>` : ""}</span><span>\u05D4\u05E1\u05DC \u05E9\u05DC\u05D9</span></p>
        <p class="text-sm text-muted">${countLabel}</p>
      </div>
      ${count ? `<a class="cart-dock-pay" href="#/checkout"><span>\u05DC\u05EA\u05E9\u05DC\u05D5\u05DD:</span><strong>${money(total)}</strong></a>` : `<span class="cart-dock-pay is-disabled" aria-disabled="true"><span>\u05DC\u05EA\u05E9\u05DC\u05D5\u05DD:</span><strong>${money(0)}</strong></span>`}
    </div>
    ${open ? `<div id="cart-dock-body" class="cart-dock-body">
      ${list}
      <div class="cart-dock-foot">
        <dl>
          <div><dt>\u05DE\u05D5\u05E6\u05E8\u05D9\u05DD</dt><dd>${money(goods)}</dd></div>
          <div><dt>\u05DE\u05D7\u05D9\u05E8 \u05DE\u05E9\u05DC\u05D5\u05D7</dt><dd>${count ? money(deliveryFee) : money(0)}</dd></div>
          <div class="is-total"><dt>\u05DC\u05EA\u05E9\u05DC\u05D5\u05DD</dt><dd>${money(total)}</dd></div>
        </dl>
        ${count ? `<a class="btn" href="#/checkout">\u05D4\u05DE\u05E9\u05DA \u05DC\u05EA\u05E9\u05DC\u05D5\u05DD</a>` : `<a class="btn btn-line" href="#/">\u05DC\u05D4\u05DE\u05E9\u05DA \u05E7\u05E0\u05D9\u05D9\u05D4</a>`}
      </div>
    </div>` : ""}`;
    placeDock();
  }
  function toggleCartDock(force) {
    const y = window.scrollY;
    open = typeof force === "boolean" ? force : !open;
    updateCartDock();
    if (open) document.querySelector(".cart-dock-arrow")?.focus({ preventScroll: true });
    if (window.scrollY !== y) window.scrollTo({ top: y, behavior: "instant" });
  }
  function placeDock() {
    const root = document.getElementById("cart-dock");
    if (!root || root.hidden) return;
    const rect = root.getBoundingClientRect();
    root.style.setProperty("--dock-fixed-top", `${Math.round(rect.bottom)}px`);
    root.style.setProperty("--dock-body-h", `${Math.round(Math.max(160, window.innerHeight - rect.bottom - 12))}px`);
  }
  function mountCartDock() {
    const header = document.querySelector(".site-header");
    const sync = () => {
      if (header) document.documentElement.style.setProperty("--header-h", `${header.offsetHeight}px`);
      placeDock();
    };
    if (header && "ResizeObserver" in window) new ResizeObserver(sync).observe(header);
    window.addEventListener("resize", sync);
    document.addEventListener("mousedown", (event) => {
      if (event.target.closest("[data-cart-toggle]")) event.preventDefault();
    });
    document.addEventListener("click", (event) => {
      if (event.target.closest("[data-cart-toggle]")) {
        event.preventDefault();
        toggleCartDock();
        return;
      }
      const inside = event.target.closest?.("#cart-dock, #modal-root, #auth-dialog, #product-pop");
      if (open && event.target.isConnected && !inside) toggleCartDock(false);
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && open) toggleCartDock(false);
    });
    updateCartDock();
    placeDock();
  }

  // js/components/toast.js
  function showToast(message, href) {
    const region = document.getElementById("toast");
    const item = document.createElement("div");
    item.className = "toast pointer-events-auto";
    item.innerHTML = `<p class="font-semibold">${esc(message)}</p>${href ? `<a class="mt-1 inline-block text-sm font-bold underline underline-offset-2" href="${esc(href)}">\u05DC\u05E1\u05DC \u05D4\u05E7\u05E0\u05D9\u05D5\u05EA</a>` : ""}`;
    region.appendChild(item);
    const gsap = window.gsap;
    if (gsap && !prefersReducedMotion()) {
      gsap.fromTo(item, { y: 16, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.35, ease: "power2.out" });
    }
    window.setTimeout(() => {
      item.remove();
    }, 3200);
  }
  function confirmWithin(container, message) {
    container.querySelector(".inline-confirm")?.remove();
    const layer = document.createElement("div");
    layer.className = "inline-confirm";
    layer.setAttribute("role", "alertdialog");
    layer.setAttribute("aria-modal", "true");
    layer.setAttribute("aria-labelledby", "inline-confirm-title");
    layer.innerHTML = `<div class="inline-confirm-card">
    <h2 id="inline-confirm-title" class="text-lg font-extrabold">${esc(message)}</h2>
    <div class="inline-confirm-actions">
      <button type="button" class="btn" data-confirm="yes">\u05D4\u05E1\u05E8\u05D4</button>
      <button type="button" class="btn btn-line" data-confirm="cancel">\u05D1\u05D9\u05D8\u05D5\u05DC</button>
    </div>
  </div>`;
    container.appendChild(layer);
    const buttons = [...layer.querySelectorAll("[data-confirm]")];
    buttons[0].focus();
    return new Promise((resolve) => {
      const done = (answer) => {
        layer.remove();
        resolve(answer);
      };
      layer.addEventListener("click", (event) => {
        const button = event.target.closest("[data-confirm]");
        if (button) done(button.dataset.confirm === "yes");
        else if (event.target === layer) done(false);
      });
      layer.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
          event.stopPropagation();
          done(false);
        } else if (event.key === "Tab") {
          event.preventDefault();
          const next = buttons[(buttons.indexOf(document.activeElement) + 1) % buttons.length];
          next.focus();
        }
      });
    });
  }
  function confirmAction(message, { within } = {}) {
    if (within) return confirmWithin(within, message);
    const root = document.getElementById("modal-root");
    root.innerHTML = `<dialog class="confirm-dialog" aria-labelledby="confirm-title">
    <h2 id="confirm-title" class="text-lg font-extrabold">${esc(message)}</h2>
    <form method="dialog" class="inline-confirm-actions mt-5">
      <button class="btn" value="yes">\u05D4\u05E1\u05E8\u05D4</button>
      <button class="btn btn-line" value="cancel">\u05D1\u05D9\u05D8\u05D5\u05DC</button>
    </form>
  </dialog>`;
    const dialog = root.querySelector("dialog");
    dialog.showModal();
    return new Promise((resolve) => {
      dialog.addEventListener("close", () => {
        resolve(dialog.returnValue === "yes");
        root.innerHTML = "";
      }, { once: true });
    });
  }

  // js/components/service-dialogs.js
  var LOAD_MS2 = 700;
  var kinds = {
    delivery: { title: "\u05DE\u05E9\u05DC\u05D5\u05D7 \u05E2\u05D3 \u05D4\u05D1\u05D9\u05EA", path: "#/delivery", dialogId: "delivery-dialog", focus: "[data-service-focus]" },
    service: { title: "\u05E9\u05D9\u05E8\u05D5\u05EA \u05DC\u05E7\u05D5\u05D7\u05D5\u05EA", path: "#/service", dialogId: "service-dialog", focus: "select[name='topic']" }
  };
  var phoneIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 3h2.5l1.2 3.2-1.7 1a12 12 0 0 0 6.8 6.8l1-1.7 3.2 1.2V16a2 2 0 0 1-2.2 2A16 16 0 0 1 6 6.2 2 2 0 0 1 8 4z"></path></svg>`;
  var whatsappIcon = `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 3a9 9 0 0 0-7.8 13.4L3 21l4.7-1.2A9 9 0 1 0 12 3zm0 1.6a7.4 7.4 0 1 1-3.8 13.8l-.3-.2-2.6.7.7-2.5-.2-.3A7.4 7.4 0 0 1 12 4.6zm4.3 10.1c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1a6 6 0 0 1-3-2.6c-.2-.4.2-.4.6-1.2.1-.1 0-.3 0-.4l-.7-1.7c-.2-.4-.4-.4-.5-.4h-.5a.9.9 0 0 0-.6.3 2.6 2.6 0 0 0-.8 1.9 4.5 4.5 0 0 0 1 2.4 10.3 10.3 0 0 0 3.9 3.5c1.5.6 2 .7 2.7.6a2.3 2.3 0 0 0 1.5-1.1 1.9 1.9 0 0 0 .1-1.1c0-.1-.2-.2-.4-.3z"></path></svg>`;
  var shareIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"></path><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"></path></svg>`;
  var pageIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 6l-6 6 6 6"></path></svg>`;
  var fresh = {
    delivery: () => ({ city: "", street: "", error: "", result: "", pending: false }),
    service: () => ({ values: {}, errors: {}, sent: false, pending: false })
  };
  var state2 = { delivery: fresh.delivery(), service: fresh.service() };
  function serviceTitle(kind) {
    return kinds[kind]?.title || "";
  }
  function shareButton(kind) {
    return `<button type="button" class="share-link" data-share-link="${kind}">${shareIcon}<span>\u05E9\u05DC\u05D9\u05D7\u05EA \u05E7\u05D9\u05E9\u05D5\u05E8</span></button>`;
  }
  function dialogHead(kind) {
    const { title, path, dialogId } = kinds[kind];
    return `<div class="auth-dialog-bar">
    <div>
      <p class="text-sm font-bold text-muted">\u05D4\u05D3\u05D2\u05DE\u05D4 \u05D1\u05DC\u05D1\u05D3</p>
      <h2 id="${dialogId}-title" class="mt-1 text-2xl font-extrabold"><a class="service-title-link" href="${path}">${title}${pageIcon}</a></h2>
    </div>
    <div class="service-dialog-actions">
      ${shareButton(kind)}
      <button class="auth-close" type="button" data-service-close aria-label="\u05E1\u05D2\u05D9\u05E8\u05D4">\xD7</button>
    </div>
  </div>`;
  }
  function deliveryBody() {
    const delivery2 = state2.delivery;
    const bad = Boolean(delivery2.error);
    return `<section class="service-block" aria-labelledby="delivery-terms-title">
    <h3 id="delivery-terms-title" class="font-extrabold">\u05EA\u05E0\u05D0\u05D9 \u05E9\u05D9\u05DC\u05D5\u05D7</h3>
    <ul class="service-list">
      <li>\u05D4\u05D4\u05D6\u05DE\u05E0\u05D4 \u05DE\u05D2\u05D9\u05E2\u05D4 \u05E2\u05D3 \u05D4\u05D3\u05DC\u05EA.</li>
      <li>\u05D3\u05DE\u05D9 \u05DE\u05E9\u05DC\u05D5\u05D7: ${money(deliveryFee)} \u05DC\u05D4\u05D6\u05DE\u05E0\u05D4.</li>
      <li>\u05DE\u05D5\u05E2\u05D3 \u05D4\u05D0\u05E1\u05E4\u05E7\u05D4 \u05E0\u05E7\u05D1\u05E2 \u05D1\u05EA\u05D9\u05D0\u05D5\u05DD \u05D8\u05DC\u05E4\u05D5\u05E0\u05D9 \u05DC\u05D0\u05D7\u05E8 \u05D4\u05D4\u05D6\u05DE\u05E0\u05D4.</li>
      <li>\u05D0\u05D6\u05D5\u05E8\u05D9 \u05D4\u05D7\u05DC\u05D5\u05E7\u05D4 \u05D5\u05DE\u05D5\u05E2\u05D3\u05D9 \u05D4\u05D0\u05E1\u05E4\u05E7\u05D4 \u05D9\u05E4\u05D5\u05E8\u05E1\u05DE\u05D5 \u05D1\u05D2\u05E8\u05E1\u05D4 \u05D4\u05E4\u05E2\u05D9\u05DC\u05D4.</li>
    </ul>
  </section>
  <form class="mt-5 grid gap-4" data-service-form="delivery" novalidate>
    <h3 class="font-extrabold">\u05D4\u05D0\u05DD \u05DE\u05D2\u05D9\u05E2\u05D9\u05DD \u05D0\u05DC\u05D9\u05DA?</h3>
    <label class="field">
      <span class="text-sm font-semibold">\u05E2\u05D9\u05E8 \u05D0\u05D5 \u05D9\u05D9\u05E9\u05D5\u05D1</span>
      <input name="city" value="${esc(delivery2.city)}" autocomplete="address-level2" required aria-invalid="${bad ? "true" : "false"}" ${bad ? `aria-describedby="delivery-city-error"` : ""} data-service-focus>
      ${bad ? `<span id="delivery-city-error" class="field-error">${esc(delivery2.error)}</span>` : ""}
    </label>
    <label class="field">
      <span class="text-sm font-semibold">\u05E8\u05D7\u05D5\u05D1 \u05D5\u05DE\u05E1\u05E4\u05E8 \u05D1\u05D9\u05EA</span>
      <input name="street" value="${esc(delivery2.street)}" autocomplete="street-address">
    </label>
    <button class="btn" type="submit" ${delivery2.pending ? "disabled" : ""}>${delivery2.pending ? "\u05D1\u05D5\u05D3\u05E7\u05D9\u05DD\u2026" : "\u05D1\u05D3\u05D9\u05E7\u05EA \u05DB\u05EA\u05D5\u05D1\u05EA"}</button>
    ${delivery2.result ? `<p class="service-result" role="status">${esc(delivery2.result)}</p>` : ""}
  </form>`;
  }
  function serviceBody(inPage) {
    const service = state2.service;
    const contact = `<ul class="service-contact">
    <li><a href="tel:03-000-0000">
      <span class="service-contact-icon">${phoneIcon}</span>
      <span class="service-contact-text"><strong><span dir="ltr">03-000-0000</span></strong><small>\u05D8\u05DC\u05E4\u05D5\u05DF \u05E9\u05D9\u05E8\u05D5\u05EA \u05DC\u05E7\u05D5\u05D7\u05D5\u05EA</small></span>
    </a></li>
    <li><a href="https://wa.me/97230000000" target="_blank" rel="noopener noreferrer">
      <span class="service-contact-icon">${whatsappIcon}</span>
      <span class="service-contact-text"><strong>\u05D5\u05D5\u05D8\u05E1\u05D0\u05E4</strong><small>\u05E9\u05D9\u05E8\u05D5\u05EA \u05DC\u05E7\u05D5\u05D7\u05D5\u05EA</small></span>
    </a></li>
  </ul>`;
    if (service.sent) {
      const done = inPage ? `<a class="btn mt-5" href="#/">\u05D7\u05D6\u05E8\u05D4 \u05DC\u05D3\u05E3 \u05D4\u05D1\u05D9\u05EA</a>` : `<button class="btn mt-5" type="button" data-service-close>\u05E1\u05D2\u05D9\u05E8\u05D4</button>`;
      return `${contact}
    <p class="service-result mt-5" role="status">\u05D4\u05E4\u05E0\u05D9\u05D9\u05D4 \u05E0\u05E9\u05DE\u05E8\u05D4 \u05D1\u05D4\u05D3\u05D2\u05DE\u05D4. \u05DC\u05D0 \u05E0\u05E9\u05DC\u05D7 \u05DE\u05D9\u05D9\u05DC \u05D0\u05DE\u05D9\u05EA\u05D9.</p>
    ${done}`;
    }
    return `${contact}
  <form class="mt-5 grid gap-4" data-service-form="service" novalidate>
    <h3 class="font-extrabold">\u05D4\u05E9\u05D0\u05E8\u05EA \u05E4\u05E0\u05D9\u05D9\u05D4</h3>
    ${contactFields(service, inPage ? "service-page-" : "service-")}
    <button class="btn" type="submit" ${service.pending ? "disabled" : ""}>${service.pending ? "\u05E9\u05D5\u05DC\u05D7\u05D9\u05DD\u2026" : "\u05E9\u05DC\u05D9\u05D7\u05EA \u05E4\u05E0\u05D9\u05D9\u05D4"}</button>
  </form>`;
  }
  function markup2(kind, inPage) {
    const body = kind === "delivery" ? deliveryBody() : serviceBody(inPage);
    return inPage ? body : `${dialogHead(kind)}${body}`;
  }
  function paint2(root, focus) {
    root.innerHTML = markup2(root.dataset.serviceRoot, root.dataset.serviceMode === "page");
    if (focus) root.querySelector(focus)?.focus();
  }
  function ensureDialog2(kind) {
    const { dialogId } = kinds[kind];
    let dialog = document.getElementById(dialogId);
    if (dialog) return dialog;
    dialog = document.createElement("dialog");
    dialog.id = dialogId;
    dialog.className = "auth-dialog service-dialog";
    dialog.dataset.serviceRoot = kind;
    dialog.dataset.serviceMode = "dialog";
    dialog.setAttribute("aria-labelledby", `${dialogId}-title`);
    dialog.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        dialog.close();
      }
    });
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog || event.target.closest("[data-service-close], a[href^='#/']")) dialog.close();
    });
    document.body.appendChild(dialog);
    return dialog;
  }
  function open2(kind) {
    const page2 = document.querySelector(`[data-service-root="${kind}"][data-service-mode="page"]`);
    if (page2 && parseHash().name === kind) {
      page2.querySelector(kinds[kind].focus)?.focus();
      return;
    }
    state2[kind] = fresh[kind]();
    const dialog = ensureDialog2(kind);
    paint2(dialog);
    if (!dialog.open) dialog.showModal();
    dialog.querySelector(kinds[kind].focus)?.focus();
  }
  function openDelivery() {
    open2("delivery");
  }
  function openService() {
    open2("service");
  }
  function renderServicePage(kind) {
    state2[kind] = fresh[kind]();
    return `<article class="wrap service-page py-10">
    <div class="service-page-head">
      <div>
        <p class="text-sm font-bold text-muted">\u05D4\u05D3\u05D2\u05DE\u05D4 \u05D1\u05DC\u05D1\u05D3</p>
        <h1 class="mt-1 text-3xl font-extrabold">${kinds[kind].title}</h1>
      </div>
      ${shareButton(kind)}
    </div>
    <div class="service-page-body" data-service-root="${kind}" data-service-mode="page">${markup2(kind, true)}</div>
  </article>`;
  }
  async function shareLink(kind) {
    const { title, path } = kinds[kind];
    const url = `${location.origin}${location.pathname}${path}`;
    if (navigator.share) {
      try {
        await navigator.share({ title: `${title} \xB7 \u05D0\u05E9\u05DE\u05D5\u05E8\u05EA MARKET`, url });
      } catch {
      }
      return;
    }
    try {
      await navigator.clipboard.writeText(url);
      showToast("\u05D4\u05E7\u05D9\u05E9\u05D5\u05E8 \u05D4\u05D5\u05E2\u05EA\u05E7. \u05D0\u05E4\u05E9\u05E8 \u05DC\u05D4\u05D3\u05D1\u05D9\u05E7 \u05D5\u05DC\u05E9\u05DC\u05D5\u05D7 \u05D0\u05D5\u05EA\u05D5.");
    } catch {
      window.prompt("\u05D4\u05E2\u05EA\u05E7\u05EA \u05D4\u05E7\u05D9\u05E9\u05D5\u05E8:", url);
    }
  }
  function bindServiceDialogs() {
    document.addEventListener("click", (event) => {
      if (event.target.closest("[data-open-delivery]")) openDelivery();
      else if (event.target.closest("[data-open-service]")) openService();
      const share = event.target.closest("[data-share-link]");
      if (share) shareLink(share.dataset.shareLink);
    });
    document.addEventListener("submit", async (event) => {
      const form = event.target;
      const kind = form.dataset?.serviceForm;
      if (!kind) return;
      event.preventDefault();
      const root = form.closest("[data-service-root]");
      const live = () => root.isConnected && (root.dataset.serviceMode === "page" || root.open);
      if (kind === "delivery") {
        const delivery2 = state2.delivery;
        if (delivery2.pending) return;
        const data = new FormData(form);
        delivery2.city = String(data.get("city") || "").trim();
        delivery2.street = String(data.get("street") || "").trim();
        delivery2.result = "";
        if (delivery2.city.length < 2) {
          delivery2.error = "\u05E0\u05D0 \u05DC\u05DE\u05DC\u05D0 \u05E2\u05D9\u05E8 \u05D0\u05D5 \u05D9\u05D9\u05E9\u05D5\u05D1.";
          paint2(root, "input[name='city']");
          return;
        }
        delivery2.error = "";
        delivery2.pending = true;
        paint2(root, "button[type='submit']");
        await wait(LOAD_MS2);
        if (!live()) return;
        delivery2.pending = false;
        const place = delivery2.street ? `${delivery2.street}, ${delivery2.city}` : delivery2.city;
        delivery2.result = `\u05DE\u05D2\u05D9\u05E2\u05D9\u05DD \u05D0\u05DC\u05D9\u05DA! \u05D4\u05DE\u05E9\u05DC\u05D5\u05D7 \u05DC\u05BE${place} \u05D6\u05DE\u05D9\u05DF. \u05D1\u05D4\u05D3\u05D2\u05DE\u05D4 \u05DB\u05DC \u05DB\u05EA\u05D5\u05D1\u05EA \u05DE\u05E7\u05D1\u05DC\u05EA \u05EA\u05E9\u05D5\u05D1\u05D4 \u05D7\u05D9\u05D5\u05D1\u05D9\u05EA.`;
        paint2(root, "button[type='submit']");
        return;
      }
      const service = state2.service;
      if (service.pending) return;
      const { values, errors } = validateContact(form);
      service.values = values;
      service.errors = errors;
      if (Object.keys(errors).length) {
        paint2(root, "[aria-invalid='true']");
        return;
      }
      service.pending = true;
      paint2(root, "button[type='submit']");
      await wait(LOAD_MS2);
      if (!live()) return;
      state2.service = { values: {}, errors: {}, sent: true, pending: false };
      paint2(root, ".btn");
    });
  }

  // js/components/hero-slider.js
  var AUTOPLAY_MS2 = 5e3;
  var slides = [
    { kicker: "\u05E1\u05D5\u05E4\u05E8 \u05D0\u05E9\u05DE\u05D5\u05E8\u05EA", title: "\u05D1\u05D0\u05E0\u05E8 \u05DE\u05EA\u05D7\u05DC\u05E3 \u05DC\u05E7\u05DE\u05E4\u05D9\u05D9\u05DF", text: "\u05DE\u05E7\u05D5\u05DD \u05DC\u05EA\u05DE\u05D5\u05E0\u05D4 \u05E8\u05D7\u05D1\u05D4 \u05E9\u05DC \u05DE\u05D1\u05E6\u05E2 \u05D0\u05D5 \u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D4.", href: "#/d/super", tone: "var(--color-surface)" },
    { kicker: "\u05D7\u05D3 \u05E4\u05E2\u05DE\u05D9 \u05D5\u05DB\u05DC\u05D9 \u05D1\u05D9\u05EA", title: "\u05D1\u05D0\u05E0\u05E8 \u05DE\u05EA\u05D7\u05DC\u05E3 \u05DC\u05DE\u05D5\u05E6\u05E8 \u05DE\u05E7\u05D5\u05D3\u05DD", text: "\u05DE\u05E7\u05D5\u05DD \u05DC\u05EA\u05DE\u05D5\u05E0\u05D4 \u05E8\u05D7\u05D1\u05D4 \u05E9\u05DC \u05DE\u05D5\u05E6\u05E8 \u05D0\u05D5 \u05DE\u05D5\u05EA\u05D2.", href: "#/d/home", tone: "var(--color-line)" },
    { kicker: "\u05E7\u05E0\u05D9\u05D5\u05DF \u05D0\u05E9\u05DE\u05D5\u05E8\u05EA", title: "\u05D1\u05D0\u05E0\u05E8 \u05DE\u05EA\u05D7\u05DC\u05E3 \u05DC\u05DE\u05D7\u05DC\u05E7\u05D4", text: "\u05DE\u05E7\u05D5\u05DD \u05DC\u05EA\u05DE\u05D5\u05E0\u05D4 \u05E8\u05D7\u05D1\u05D4 \u05E9\u05DC \u05DE\u05D7\u05DC\u05E7\u05D4 \u05D0\u05D5 \u05D0\u05D9\u05E8\u05D5\u05E2.", href: "#/d/electronics", tone: "var(--color-fill)" },
    { kicker: "\u05DE\u05D1\u05E6\u05E2\u05D9\u05DD", title: "\u05D1\u05D0\u05E0\u05E8 \u05DE\u05EA\u05D7\u05DC\u05E3 \u05DC\u05DE\u05D1\u05E6\u05E2", text: "\u05DE\u05E7\u05D5\u05DD \u05DC\u05EA\u05DE\u05D5\u05E0\u05D4 \u05E8\u05D7\u05D1\u05D4 \u05E9\u05DC \u05DE\u05D1\u05E6\u05E2 \u05E2\u05D5\u05E0\u05EA\u05D9.", href: "#/d/offers", tone: "var(--color-surface)" }
  ];
  var embla = null;
  var timer2 = 0;
  var paused = false;
  function markup3() {
    return `<div class="wrap pt-6">
    <div class="hero-slider" data-hero-slider>
      <div class="hero-slider-viewport">
        <div class="hero-slider-track">
          ${slides.map((slide, index) => `<div class="hero-slide" role="group" aria-roledescription="\u05E9\u05E7\u05D5\u05E4\u05D9\u05EA" aria-label="${index + 1} \u05DE\u05EA\u05D5\u05DA ${slides.length}" ${index === 0 ? "" : 'aria-hidden="true"'}>
            <a class="hero-slide-link" href="${slide.href}" style="--slide-tone:${slide.tone}" ${index === 0 ? "" : 'tabindex="-1"'}>
              <span class="proto-label" aria-hidden="true">\u05D1\u05D0\u05E0\u05E8 \u05DE\u05EA\u05D7\u05DC\u05E3 ${index + 1}/${slides.length}</span>
              <span class="hero-slide-copy">
                <span class="text-xs font-bold text-muted">${slide.kicker}</span>
                <span class="hero-slide-title">${slide.title}</span>
                <span class="text-muted">${slide.text}</span>
                <span class="hero-cta mt-4">\u05D4\u05E0\u05E2\u05D4 \u05DC\u05E4\u05E2\u05D5\u05DC\u05D4</span>
              </span>
              <span class="hero-slide-media" aria-hidden="true"></span>
            </a>
          </div>`).join("")}
        </div>
      </div>
      <div class="hero-dots" role="group" aria-label="\u05D3\u05E4\u05D3\u05D5\u05E3 \u05D1\u05D9\u05DF \u05D4\u05E9\u05E7\u05D5\u05E4\u05D9\u05D5\u05EA">
        ${slides.map((_, index) => `<button type="button" class="hero-dot" data-hero-dot="${index}" aria-label="\u05E9\u05E7\u05D5\u05E4\u05D9\u05EA ${index + 1} \u05DE\u05EA\u05D5\u05DA ${slides.length}" ${index === 0 ? 'aria-current="true"' : ""}></button>`).join("")}
      </div>
    </div>
  </div>`;
  }
  function stop() {
    window.clearInterval(timer2);
    timer2 = 0;
  }
  function start() {
    stop();
    if (!embla || paused || prefersReducedMotion()) return;
    timer2 = window.setInterval(() => embla?.scrollNext(), AUTOPLAY_MS2);
  }
  function syncSlides(root) {
    const current = embla.selectedScrollSnap();
    root.querySelectorAll(".hero-dot").forEach((dot, index) => {
      if (index === current) dot.setAttribute("aria-current", "true");
      else dot.removeAttribute("aria-current");
    });
    root.querySelectorAll(".hero-slide").forEach((slide, index) => {
      const active = index === current;
      slide.toggleAttribute("aria-hidden", !active);
      slide.querySelector("a")?.setAttribute("tabindex", active ? "0" : "-1");
    });
  }
  function setHeroSlider(visible) {
    const root = document.getElementById("hero-slider");
    if (!root) return;
    root.hidden = !visible;
    if (!visible) {
      stop();
      embla?.destroy();
      embla = null;
      root.innerHTML = "";
      return;
    }
    if (embla) return;
    const Embla = window.EmblaCarousel;
    root.innerHTML = markup3();
    if (!Embla) return;
    const slider = root.querySelector("[data-hero-slider]");
    embla = Embla(slider.querySelector(".hero-slider-viewport"), {
      loop: true,
      direction: "rtl",
      duration: prefersReducedMotion() ? 0 : 30
    });
    embla.on("select", () => {
      syncSlides(slider);
      start();
    });
    slider.querySelectorAll("[data-hero-dot]").forEach((dot) => {
      dot.addEventListener("click", () => embla?.scrollTo(Number(dot.dataset.heroDot)));
    });
    const pause = (value) => () => {
      paused = value;
      if (value) stop();
      else start();
    };
    slider.addEventListener("mouseenter", pause(true));
    slider.addEventListener("mouseleave", pause(false));
    slider.addEventListener("focusin", pause(true));
    slider.addEventListener("focusout", (event) => {
      if (!slider.contains(event.relatedTarget)) pause(false)();
    });
    paused = false;
    start();
  }

  // js/components/newsletter-popup.js
  var HIDE_KEY = "ashmoret-newsletter-hide";
  var COUPON = "ASH50";
  var closeIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"></path></svg>`;
  var arrowIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6"></path></svg>`;
  var scissorsIcon = `<svg class="news-scissors" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M20 4 8.1 15.9M14.5 14.5 20 20M8.1 8.1 12 12"></path></svg>`;
  function hidden() {
    try {
      return localStorage.getItem(HIDE_KEY) === "1";
    } catch {
      return false;
    }
  }
  function markup4() {
    return `<div class="news-card">
    <div class="news-hero">
      <span class="proto-label" aria-hidden="true">\u05EA\u05DE\u05D5\u05E0\u05EA \u05E8\u05E7\u05E2</span>
      <h2 id="news-title" class="news-offer">50% \u05D4\u05E0\u05D7\u05D4</h2>
      <p class="news-sub">\u05E2\u05DC \u05D4\u05E8\u05DB\u05D9\u05E9\u05D4 \u05D4\u05E8\u05D0\u05E9\u05D5\u05E0\u05D4</p>
    </div>
    <form class="news-body" data-news-form novalidate>
      <h3 class="news-heading">\u05D4\u05E8\u05E9\u05DE\u05D4 \u05DC\u05E0\u05D9\u05D5\u05D6\u05DC\u05D8\u05E8</h3>
      <label class="sr-only" for="news-email">\u05DB\u05EA\u05D5\u05D1\u05EA \u05D3\u05D5\u05D0\u05F4\u05DC</label>
      <input id="news-email" class="news-email" name="email" type="email" autocomplete="email" placeholder="\u05DB\u05EA\u05D5\u05D1\u05EA \u05D4\u05D3\u05D5\u05D0\u05F4\u05DC \u05E9\u05DC\u05DA" aria-describedby="news-error" aria-invalid="false">
      <p id="news-error" class="news-error" hidden>\u05E0\u05D0 \u05DC\u05D4\u05D6\u05D9\u05DF \u05DB\u05EA\u05D5\u05D1\u05EA \u05D3\u05D5\u05D0\u05F4\u05DC \u05EA\u05E7\u05D9\u05E0\u05D4.</p>
      <button class="news-submit" type="submit">\u05DC\u05D4\u05E8\u05E9\u05DE\u05D4 ${arrowIcon}</button>
      <div class="news-coupon" data-news-coupon aria-live="polite">${scissorsIcon}<span>\u05DB\u05D0\u05DF \u05D9\u05D5\u05E4\u05D9\u05E2 \u05E7\u05D5\u05D3 \u05D4\u05E7\u05D5\u05E4\u05D5\u05DF \u05E9\u05DC\u05DA</span></div>
      <div class="news-checks">
        <label class="news-check">
          <input type="checkbox" name="terms" data-news-terms aria-describedby="news-terms-error" aria-invalid="false">
          <span>\u05D0\u05E0\u05D9 \u05DE\u05E1\u05DB\u05D9\u05DD/\u05D4 \u05DC<a href="#/terms">\u05EA\u05E0\u05D0\u05D9 \u05D4\u05E9\u05D9\u05DE\u05D5\u05E9</a></span>
        </label>
        <label class="news-check">
          <input type="checkbox" data-news-hide ${hidden() ? "checked" : ""}>
          \u05DC\u05D4\u05E1\u05EA\u05D9\u05E8 \u05D0\u05EA \u05D4\u05D7\u05DC\u05D5\u05DF \u05D4\u05D6\u05D4 \u05DE\u05E2\u05DB\u05E9\u05D9\u05D5
        </label>
      </div>
      <p id="news-terms-error" class="news-error" hidden>\u05E0\u05D0 \u05DC\u05D0\u05E9\u05E8 \u05D0\u05EA \u05EA\u05E0\u05D0\u05D9 \u05D4\u05E9\u05D9\u05DE\u05D5\u05E9 \u05DB\u05D3\u05D9 \u05DC\u05D4\u05D9\u05E8\u05E9\u05DD.</p>
    </form>
  </div>
  <button class="news-close" type="button" data-news-close aria-label="\u05E1\u05D2\u05D9\u05E8\u05D4">${closeIcon}</button>`;
  }
  function ensureDialog3() {
    let dialog = document.getElementById("newsletter-dialog");
    if (dialog) return dialog;
    dialog = document.createElement("dialog");
    dialog.id = "newsletter-dialog";
    dialog.className = "news-dialog";
    dialog.setAttribute("aria-labelledby", "news-title");
    dialog.innerHTML = markup4();
    const form = dialog.querySelector("[data-news-form]");
    const input = form.querySelector("#news-email");
    const error = form.querySelector("#news-error");
    const coupon = form.querySelector("[data-news-coupon]");
    const submit = form.querySelector(".news-submit");
    const terms = form.querySelector("[data-news-terms]");
    const termsError = form.querySelector("#news-terms-error");
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog || event.target.closest("[data-news-close], a[href^='#/']")) dialog.close();
    });
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim());
      error.hidden = valid;
      input.setAttribute("aria-invalid", String(!valid));
      termsError.hidden = terms.checked;
      terms.setAttribute("aria-invalid", String(!terms.checked));
      if (!valid || !terms.checked) {
        (valid ? terms : input).focus();
        return;
      }
      coupon.classList.add("is-ready");
      coupon.innerHTML = `${scissorsIcon}<span>\u05E7\u05D5\u05D3 \u05D4\u05E7\u05D5\u05E4\u05D5\u05DF \u05E9\u05DC\u05DA: <strong dir="ltr">${COUPON}</strong></span>`;
      submit.disabled = true;
      submit.textContent = "\u05E0\u05E8\u05E9\u05DE\u05EA \u05DC\u05E0\u05D9\u05D5\u05D6\u05DC\u05D8\u05E8";
    });
    form.addEventListener("change", (event) => {
      if (event.target === terms && terms.checked) {
        termsError.hidden = true;
        terms.setAttribute("aria-invalid", "false");
      }
      if (!event.target.matches("[data-news-hide]")) return;
      try {
        if (event.target.checked) localStorage.setItem(HIDE_KEY, "1");
        else localStorage.removeItem(HIDE_KEY);
      } catch {
      }
    });
    document.body.appendChild(dialog);
    return dialog;
  }
  function bindNewsletter() {
    document.addEventListener("click", (event) => {
      if (!event.target.closest("[data-newsletter-open]")) return;
      const dialog = ensureDialog3();
      if (!dialog.open) dialog.showModal();
      dialog.querySelector("#news-email")?.focus();
    });
  }

  // js/components/product-popup.js
  function ensureDialog4() {
    let dialog = document.getElementById("product-pop");
    if (dialog) return dialog;
    dialog = document.createElement("dialog");
    dialog.id = "product-pop";
    dialog.className = "product-pop";
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog || event.target.closest("[data-pop-close]")) dialog.close();
    });
    document.body.appendChild(dialog);
    return dialog;
  }
  function field(label, value) {
    return `<p class="product-pop-spec">${esc(label)}: ${esc(value)}</p>`;
  }
  function markup5(product) {
    const commerce = getCommerce(product.id);
    const price = commerce ? `<p class="product-price">${money(commerce.price)}${commerce.compareAt ? `<s>${money(commerce.compareAt)}</s>` : ""}</p>` : `<p class="product-price is-pending">\u05DE\u05D7\u05D9\u05E8 \u05D9\u05E2\u05D5\u05D3\u05DB\u05DF</p>`;
    return `<div class="product-pop-bar">
      <button type="button" class="auth-close" data-pop-close aria-label="\u05E1\u05D2\u05D9\u05E8\u05D4">\xD7</button>
    </div>
    <div class="product-pop-layout">
      ${productGallery(product, commerce?.compareAt ? `<span class="sale-badge">\u05D1\u05DE\u05D1\u05E6\u05E2</span>` : "")}
      <div class="product-info">
        <div class="product-head">
          <h2 id="product-pop-title">${esc(product.name)}</h2>
          <p class="product-pop-barcode">\u05D1\u05E8\u05E7\u05D5\u05D3 <span dir="ltr">${esc(product.barcode)}</span></p>
          ${price}
        </div>
        <div class="product-fields">
          ${field("\u05DE\u05E9\u05E7\u05DC", product.weight)}
        </div>
        ${productBuy(product)}
        ${productFolds(product, { openDescription: false, shipping: false })}
      </div>
    </div>`;
  }
  function openProductPopup(id) {
    const product = getProduct(id);
    if (!product || isElectronicsProduct(product)) return;
    const dialog = ensureDialog4();
    dialog.innerHTML = markup5(product);
    dialog.setAttribute("aria-labelledby", "product-pop-title");
    mountProductGalleries(dialog);
    if (!dialog.open) dialog.showModal();
    dialog.querySelector("[data-pop-close]")?.focus();
  }

  // js/motion.js
  function playHero(root) {
    const gsap = window.gsap;
    const copy = root.querySelector("[data-hero-copy]");
    if (!gsap || !copy || prefersReducedMotion()) return;
    gsap.fromTo(copy, { y: 22, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.7, ease: "power2.out" });
  }
  function pulseAdd(button) {
    const gsap = window.gsap;
    if (!gsap || !button || prefersReducedMotion()) return;
    gsap.fromTo(button, { scale: 0.96 }, { scale: 1, duration: 0.28, ease: "back.out(2)" });
  }

  // js/app.js
  var app = document.querySelector("#app");
  var checkoutDraft = null;
  var contactDraft = null;
  function navigate2(hash) {
    if (location.hash === hash) render();
    else location.hash = hash;
  }
  function redirectAuth(route) {
    const session = getSession();
    if (route.name === "login") {
      if (session) {
        const dest = safeNext(route.query.next) || "#/account";
        if (location.hash !== dest) {
          location.hash = dest;
          return true;
        }
        return false;
      }
      openAuth({
        next: route.query.next || "",
        expired: route.query.expired === "1" || takeExpiredNotice()
      });
      if (location.hash !== "#/") {
        location.hash = "#/";
        return true;
      }
      return false;
    }
    if (!session && (route.name === "checkout" || isPrivateRoute(route.name))) {
      const next = route.name === "checkout" ? "/checkout" : location.hash.replace(/^#/, "").split("?")[0];
      openAuth({ next, expired: takeExpiredNotice() });
      const back = route.name === "checkout" ? "#/cart" : "#/";
      if (location.hash !== back) {
        location.hash = back;
        return true;
      }
    }
    return false;
  }
  function render({ focus = true, scrollTop = false } = {}) {
    const productPop = document.getElementById("product-pop");
    if (productPop?.open) productPop.close();
    const route = parseHash();
    if (redirectAuth(route)) return;
    if (route.name !== "checkout") checkoutDraft = null;
    if (route.name !== "contact") contactDraft = null;
    app.innerHTML = view(route);
    document.title = titleFor(route);
    setCategoryBand(route.name === "home");
    setHeroSlider(route.name === "home" && getTheme().hero === "v2");
    setHeroTop(route.name === "home" && heroOnTop());
    if (route.name === "home") renderCategoryNav("");
    closePanels();
    mountCarousels(app);
    mountPromoCarousels(app, document.getElementById("hero-top"));
    mountCatalog(app);
    mountProductGalleries(app);
    mountProductTabs(app);
    updateAccountSlot();
    updateCartDock(route.name);
    playHero(heroOnTop() ? document.getElementById("hero-top") : app);
    if (scrollTop) window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    const input = document.getElementById("search-input");
    if (route.name === "search" && document.activeElement !== input) input.value = route.query.q || "";
    if (!focus || document.getElementById("auth-dialog")?.open) return;
    const heading = app.querySelector("h1");
    if (heading) heading.setAttribute("tabindex", "-1");
    (heading || app).focus({ preventScroll: true });
  }
  function heroOnTop() {
    return ["v3", "v4"].includes(getTheme().hero);
  }
  function view(route) {
    if (route.name === "home") return renderHome();
    if (route.name === "market") return renderMarket();
    if (route.name === "category") return renderCategory(route.slug, route.query);
    if (route.name === "department") return renderDepartment(route.id, route.query);
    if (route.name === "manufacturer") return renderManufacturer(route.slug, route.query);
    if (route.name === "product") return renderProduct(route.id);
    if (route.name === "search") return renderSearch(route.query);
    if (route.name === "cart") return renderCart();
    if (route.name === "checkout") return renderCheckout(checkoutDraft?.errors, checkoutDraft?.values);
    if (route.name === "order") return renderConfirmation(route.id);
    if (route.name === "account") return renderAccount();
    if (route.name === "account-details") return renderAccountDetails();
    if (route.name === "orders") return renderOrders();
    if (route.name === "account-order") return renderOrderDetail(route.id);
    if (route.name === "contact") return renderContact(contactDraft || {});
    if (route.name === "legal") return renderLegal(route.slug);
    if (route.name === "delivery" || route.name === "service") return renderServicePage(route.name);
    return renderHome();
  }
  function titleFor(route) {
    const suffix = "\u05D0\u05E9\u05DE\u05D5\u05E8\u05EA MARKET";
    if (route.name === "market") return `\u05DB\u05DC \u05D4\u05D9\u05E6\u05E8\u05E0\u05D9\u05DD \xB7 ${suffix}`;
    if (route.name === "category") return `\u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D4 \xB7 ${suffix}`;
    if (route.name === "department") return `\u05DE\u05D7\u05DC\u05E7\u05D4 \xB7 ${suffix}`;
    if (route.name === "manufacturer") return `\u05D9\u05E6\u05E8\u05DF \xB7 ${suffix}`;
    if (route.name === "product") return `\u05DE\u05D5\u05E6\u05E8 \xB7 ${suffix}`;
    if (route.name === "search") return `\u05D7\u05D9\u05E4\u05D5\u05E9 \xB7 ${suffix}`;
    if (route.name === "cart") return `\u05E1\u05DC \u05D4\u05E7\u05E0\u05D9\u05D5\u05EA \xB7 ${suffix}`;
    if (route.name === "checkout") return `\u05EA\u05E9\u05DC\u05D5\u05DD \xB7 ${suffix}`;
    if (route.name === "order") return `\u05D0\u05D9\u05E9\u05D5\u05E8 \u05D4\u05D6\u05DE\u05E0\u05D4 \xB7 ${suffix}`;
    if (route.name === "account" || route.name === "account-details") return `\u05D4\u05D0\u05D6\u05D5\u05E8 \u05D4\u05D0\u05D9\u05E9\u05D9 \xB7 ${suffix}`;
    if (route.name === "orders" || route.name === "account-order") return `\u05D4\u05D6\u05DE\u05E0\u05D5\u05EA \xB7 ${suffix}`;
    if (route.name === "contact") return `\u05D9\u05E6\u05D9\u05E8\u05EA \u05E7\u05E9\u05E8 \xB7 ${suffix}`;
    if (route.name === "legal") return `${legalTitle(route.slug)} \xB7 ${suffix}`;
    if (route.name === "delivery" || route.name === "service") return `${serviceTitle(route.name)} \xB7 ${suffix}`;
    return suffix;
  }
  document.addEventListener("click", async (event) => {
    const popLink = event.target.closest("[data-product-pop]");
    if (popLink && event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) {
      event.preventDefault();
      openProductPopup(popLink.dataset.productPop);
      return;
    }
    const showAll = event.target.closest("[data-show-all]");
    if (showAll) {
      const route = parseHash();
      const params = new URLSearchParams(route.query);
      params.set("all", "1");
      navigate2(`#${pathFor(route)}?${params.toString()}`);
      return;
    }
    const qtyBtn = event.target.closest("[data-qty]");
    if (qtyBtn) {
      const input = qtyBtn.closest("[data-buy]")?.querySelector("[data-qty-input]");
      if (!input) return;
      const next = Math.max(1, Math.min(99, Number(input.value || 1) + Number(qtyBtn.dataset.qty)));
      input.value = String(next);
      return;
    }
    const step = event.target.closest("[data-cart-step]");
    if (step) {
      const item = getCart().items.find((row) => row.id === step.dataset.id);
      if (item) setQty(item.id, item.qty + Number(step.dataset.cartStep));
      return;
    }
    const remove = event.target.closest("[data-remove]");
    if (remove) {
      const product = getProduct(remove.dataset.remove);
      const message = product ? `\u05DC\u05D4\u05E1\u05D9\u05E8 \u05D0\u05EA ${product.name} \u05DE\u05D4\u05E1\u05DC?` : "\u05DC\u05D4\u05E1\u05D9\u05E8 \u05D0\u05EA \u05D4\u05E4\u05E8\u05D9\u05D8 \u05DE\u05D4\u05E1\u05DC?";
      const yes = await confirmAction(message, { within: remove.closest(".cart-dock-body") });
      if (yes) removeItem(remove.dataset.remove);
      return;
    }
    const add = event.target.closest("[data-add]");
    if (add) {
      const product = getProduct(add.dataset.add);
      if (!product || !getCommerce(product.id)) return;
      const input = add.closest("[data-buy]")?.querySelector("[data-qty-input]");
      const qty = Math.max(1, Math.min(99, Number(input?.value || 1)));
      addItem(product.id, qty);
      updateCartBadge(true);
      pulseAdd(add);
      showToast(`${product.name} \u05E0\u05D5\u05E1\u05E3 \u05DC\u05E1\u05DC`, "#/cart");
    }
  });
  document.addEventListener("change", (event) => {
    if (event.target.matches("[data-qty-input]")) {
      const next = Math.max(1, Math.min(99, Number(event.target.value || 1)));
      event.target.value = String(Number.isFinite(next) ? next : 1);
      return;
    }
    const form = event.target.closest("[data-listing-form]");
    if (!form) return;
    const route = parseHash();
    const params = new URLSearchParams();
    if (route.query.q) params.set("q", route.query.q);
    ["category", "brand", "sort"].forEach((key) => {
      const value = String(new FormData(form).get(key) || "");
      if (value) params.set(key, value);
    });
    if (new FormData(form).get("offers")) params.set("offers", "1");
    const query = params.toString();
    navigate2(`#${pathFor(route)}${query ? `?${query}` : ""}`);
  });
  document.addEventListener("submit", (event) => {
    if (event.target.matches("[data-listing-form]")) event.preventDefault();
    const form = event.target;
    if (form.id === "contact-form") {
      event.preventDefault();
      const { values, errors: errors2 } = validateContact(form);
      if (Object.keys(errors2).length) {
        contactDraft = { values, errors: errors2, sent: false };
        render();
        app.querySelector("[aria-invalid='true']")?.focus();
        return;
      }
      contactDraft = { sent: true };
      render();
      return;
    }
    if (form.id !== "checkout-form") return;
    event.preventDefault();
    const { data, errors } = validateCheckout(form);
    if (Object.keys(errors).length) {
      checkoutDraft = { errors, values: data };
      render();
      app.querySelector("[aria-invalid='true']")?.focus();
      return;
    }
    const items = getCart().items.map((item) => {
      const product = getProduct(item.id);
      const commerce = getCommerce(item.id);
      if (!product || !commerce) return null;
      return { id: product.id, name: product.name, qty: item.qty, price: commerce.price };
    }).filter(Boolean);
    const goods = subtotal();
    const order = {
      id: createOrderId(),
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      customer: {
        name: data.name.trim(),
        phone: data.phone,
        city: data.city.trim(),
        street: data.street.trim(),
        house: data.house.trim(),
        note: String(data.note || "").trim()
      },
      items,
      subtotal: goods,
      delivery: deliveryFee,
      total: goods + deliveryFee
    };
    saveOrder(order);
    clearCart();
    navigate2(`#/order/${order.id}`);
  });
  bindShell(navigate2);
  bindThemeOptions({
    heroChange: () => render({ focus: false }),
    suppliersChange: () => {
      renderSupplierNav();
      render({ focus: false });
    }
  });
  bindLogin(navigate2);
  bindServiceDialogs();
  bindNewsletter();
  bindAccount(render);
  bindCheckout();
  mountCartDock();
  subscribeSession(() => updateAccountSlot());
  subscribe(() => {
    updateCartBadge(true);
    updateCartDock();
    const route = parseHash();
    if (route.name === "cart") render({ focus: false });
  });
  window.addEventListener("hashchange", () => render({ scrollTop: true }));
  if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  render();
})();
