import { c as createComponent, a as createAstro, m as maybeRenderHead, e as addAttribute, b as renderTemplate, r as renderComponent, d as renderScript } from './astro/server_D2J24U96.mjs';
import 'kleur/colors';
import { g as getLocalizedAnchor, b as getLocalizedURL, l as loadTranslations, d as defaultLang } from './ui_DfUnC0of.mjs';
/* empty css                         */
import 'clsx';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState, useEffect, useRef } from 'react';

const $$Astro$b = createAstro();
const $$BtnLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$BtnLayout;
  const { text, color = "var(--golden-sand)", class: customClass, href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(`btn ${customClass || ""}`, "class")}${addAttribute(`background: ${color};`, "style")} target="_blank" data-astro-cid-lh5cqkca> ${text} </a> `;
}, "E:/PROYECTOS/joyeria/jewellery_page/src/components/BtnLayout.astro", void 0);

const $$Astro$a = createAstro();
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Hero;
  const { lang } = Astro2.params;
  const { translations } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="hero"${addAttribute(getLocalizedAnchor("home", lang), "id")} data-astro-cid-bbe6dxrz> <div class="hero-content" data-astro-cid-bbe6dxrz> <h1 class="hero-title" data-astro-cid-bbe6dxrz> <img class="logo-hero"${addAttribute(translations.hero.logo, "src")}${addAttribute(translations.hero.alt, "alt")} loading="lazy" data-astro-cid-bbe6dxrz> </h1> <p class="hero-text" data-astro-cid-bbe6dxrz>${translations.hero.content}</p> ${renderComponent($$result, "BtnLayout", $$BtnLayout, { "href": "https://www.instagram.com/melojoyeria/", "text": translations.hero.btn_cta, "color": "var(--linen)", "class": "hero-button", "data-astro-cid-bbe6dxrz": true })} </div> <div class="hero-image-container" data-astro-cid-bbe6dxrz> <picture class="hero-image" data-astro-cid-bbe6dxrz> <img class="img-hero"${addAttribute(translations.hero.img, "src")}${addAttribute(translations.hero.alt_img, "alt")} loading="lazy" data-astro-cid-bbe6dxrz> </picture> </div> </section> ${renderScript($$result, "E:/PROYECTOS/joyeria/jewellery_page/src/components/Hero.astro?astro&type=script&index=0&lang.ts")} `;
}, "E:/PROYECTOS/joyeria/jewellery_page/src/components/Hero.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$9 = createAstro();
const $$LanguageSelector = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$LanguageSelector;
  const { currentLang } = Astro2.props;
  const currentUrl = Astro2.url;
  function getLanguageUrl(targetLang) {
    return getLocalizedURL(
      currentUrl.pathname,
      targetLang,
      currentUrl.hash
    );
  }
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<div class="language-selector" data-astro-cid-ltpqzwiw> <a', ' class="lang-link" data-astro-cid-ltpqzwiw> <img class="language-icon" src="/icons/language.svg" alt="Language Icon" data-astro-cid-ltpqzwiw> ', " </a> </div> <script>\n  // Manejar el cambio de idioma sin recarga completa\n  document.querySelector('[data-lang-switch]')?.addEventListener('click', (e) => {\n    e.preventDefault();\n    const targetLang = e.currentTarget.getAttribute('data-target-lang');\n    const currentPath = window.location.pathname;\n    const currentHash = window.location.hash;\n    \n    // Versión corregida:\n    const cleanPath = currentPath.replace(new RegExp(`^/(${['es','en'].join('|')})`), '');\n    const newPath = targetLang === 'es' ? cleanPath : `/${targetLang}${cleanPath}`;\n    const newUrl = `${newPath}${currentHash}`;\n    \n    // Manejo especial para página 404\n    if (currentPath.includes('404')) {\n      const langPrefix = targetLang === 'es' ? '' : `/${targetLang}`;\n      window.location.href = `${langPrefix}/404${currentHash}`;\n      return;\n    }\n    \n    // Guardar el idioma en localStorage\n    localStorage.setItem('preferredLang', targetLang);\n    \n    // Actualizar la URL y recargar solo los necesarios\n    if (import.meta.env.PROD) {\n      window.location.href = newUrl;\n    } else {\n      // En desarrollo, usa replaceState para mejor experiencia\n      window.history.replaceState({}, '', newUrl);\n      window.location.reload();\n    }\n  });\n</script> "], ["", '<div class="language-selector" data-astro-cid-ltpqzwiw> <a', ' class="lang-link" data-astro-cid-ltpqzwiw> <img class="language-icon" src="/icons/language.svg" alt="Language Icon" data-astro-cid-ltpqzwiw> ', " </a> </div> <script>\n  // Manejar el cambio de idioma sin recarga completa\n  document.querySelector('[data-lang-switch]')?.addEventListener('click', (e) => {\n    e.preventDefault();\n    const targetLang = e.currentTarget.getAttribute('data-target-lang');\n    const currentPath = window.location.pathname;\n    const currentHash = window.location.hash;\n    \n    // Versión corregida:\n    const cleanPath = currentPath.replace(new RegExp(\\`^/(\\${['es','en'].join('|')})\\`), '');\n    const newPath = targetLang === 'es' ? cleanPath : \\`/\\${targetLang}\\${cleanPath}\\`;\n    const newUrl = \\`\\${newPath}\\${currentHash}\\`;\n    \n    // Manejo especial para página 404\n    if (currentPath.includes('404')) {\n      const langPrefix = targetLang === 'es' ? '' : \\`/\\${targetLang}\\`;\n      window.location.href = \\`\\${langPrefix}/404\\${currentHash}\\`;\n      return;\n    }\n    \n    // Guardar el idioma en localStorage\n    localStorage.setItem('preferredLang', targetLang);\n    \n    // Actualizar la URL y recargar solo los necesarios\n    if (import.meta.env.PROD) {\n      window.location.href = newUrl;\n    } else {\n      // En desarrollo, usa replaceState para mejor experiencia\n      window.history.replaceState({}, '', newUrl);\n      window.location.reload();\n    }\n  });\n</script> "])), maybeRenderHead(), addAttribute(getLanguageUrl(currentLang === "es" ? "en" : "es"), "href"), currentLang === "es" ? "EN" : "ES");
}, "E:/PROYECTOS/joyeria/jewellery_page/src/components/LanguageSelector.astro", void 0);

const NavbarReact = ({ lang, children }) => {
  const translations = loadTranslations(lang);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle("menu-open", !isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
    document.body.classList.remove("menu-open");
  };
  useEffect(() => {
    setIsClient(true);
    const handleResize = () => setIsMobile(window.innerWidth <= 800);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.classList.remove("menu-open");
    };
  }, []);
  if (!isClient) {
    return null;
  }
  return /* @__PURE__ */ jsxs("nav", { className: "navbar", children: [
    /* @__PURE__ */ jsxs("div", { className: "navbar-mobile", children: [
      /* @__PURE__ */ jsx("a", { href: `#${getLocalizedAnchor("home", lang)}`, className: "logo-container-navbar-mobile", children: /* @__PURE__ */ jsx("img", { src: translations.navbar.logo, alt: translations.navbar.alt, className: "logo-navbar-mobile" }) }),
      /* @__PURE__ */ jsx("button", { className: "menu-btn", onClick: toggleMenu, "aria-label": "Toggle menu", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: isOpen ? translations.navbar["icon-burger-close"] : translations.navbar["icon-burger"],
          alt: isOpen ? translations.navbar["alt-icon-burger-close"] : translations.navbar["alt-icon-burger"],
          width: "30",
          height: "30"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxs("ul", { className: `menu ${isOpen ? "open" : ""}`, children: [
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: `#${getLocalizedAnchor("home", lang)}`, onClick: closeMenu, children: translations.navbar.home }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: `#${getLocalizedAnchor("about", lang)}`, onClick: closeMenu, children: translations.navbar.about }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: `#${getLocalizedAnchor("gallery", lang)}`, onClick: closeMenu, children: translations.navbar.gallery }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: `#${getLocalizedAnchor("contact", lang)}`, onClick: closeMenu, children: translations.navbar.contact }) }),
      isMobile && /* @__PURE__ */ jsx("li", { className: "language-button", children })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "navbar-desktop", children: [
      /* @__PURE__ */ jsxs("ul", { className: "menu-left", children: [
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: `#${getLocalizedAnchor("home", lang)}`, children: translations.navbar.home }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: `#${getLocalizedAnchor("about", lang)}`, children: translations.navbar.about }) })
      ] }),
      /* @__PURE__ */ jsx("a", { href: `#${getLocalizedAnchor("home", lang)}`, className: "logo-container-navbar", children: /* @__PURE__ */ jsx("img", { src: translations.navbar.logo, alt: translations.navbar.alt, className: "logo-navbar" }) }),
      /* @__PURE__ */ jsxs("div", { className: "navbar-right", children: [
        /* @__PURE__ */ jsxs("ul", { className: "menu-right", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: `#${getLocalizedAnchor("gallery", lang)}`, children: translations.navbar.gallery }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: `#${getLocalizedAnchor("contact", lang)}`, children: translations.navbar.contact }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "language-selector-desktop", children })
      ] })
    ] })
  ] });
};

const $$Astro$8 = createAstro();
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Navbar;
  const currentPath = Astro2.url.pathname;
  const lang = currentPath.split("/")[1];
  const currentLang = ["en", "es"].includes(lang) ? lang : defaultLang;
  return renderTemplate`${renderComponent($$result, "NavbarReact", NavbarReact, { "lang": currentLang, "client:load": true, "client:component-hydration": "load", "client:component-path": "E:/PROYECTOS/joyeria/jewellery_page/src/components/navbar/NavbarReact", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "LanguageSelector", $$LanguageSelector, { "currentLang": currentLang })} ` })}`;
}, "E:/PROYECTOS/joyeria/jewellery_page/src/components/Navbar.astro", void 0);

const categoryImages = {
    "anillos":[
        "anillos/1.svg",
        "anillos/2.svg",
        "anillos/3.svg",
        "anillos/4.svg",
        "anillos/5.svg",
        "anillos/6.svg",
    ],
    "rings":[
        "anillos/1.svg",
        "anillos/2.svg",
        "anillos/3.svg",
        "anillos/4.svg",
        "anillos/5.svg",
        "anillos/6.svg",
    ],
    "aretes":[
        "aros/1.svg",
        "aros/2.svg",
        "aros/3.svg",
        "aros/4.svg",
        "aros/5.svg",
    ],
    "earrings":[
        "aros/1.svg",
        "aros/2.svg",
        "aros/3.svg",
        "aros/4.svg",
        "aros/5.svg",
    ],
    "collares y dijes":[
        "collares/1.svg",
        "collares/2.svg",
        "collares/3.svg",
        "collares/4.svg",
        "collares/5.svg",
        "collares/6.svg"
    ],
    "necklaces and charms":[
        "collares/1.svg",
        "collares/2.svg",
        "collares/3.svg",
        "collares/4.svg",
        "collares/5.svg",
        "collares/6.svg"
    ],
    "pulseras":[
        "pulseras/1.svg",
        "pulseras/2.svg",
        "pulseras/3.svg",
        "pulseras/4.svg",
        "pulseras/5.svg",
        "pulseras/6.svg",
        "pulseras/7.svg",
    ],
    "bracelets":[
        "pulseras/1.svg",
        "pulseras/2.svg",
        "pulseras/3.svg",
        "pulseras/4.svg",
        "pulseras/5.svg",
        "pulseras/6.svg",
        "pulseras/7.svg",
    ]
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$7 = createAstro();
const $$CategoriesGallery = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$CategoriesGallery;
  const { translations } = Astro2.props;
  const categories = translations.catalogue.categories;
  const descriptions = translations.catalogue.descriptions;
  const categoryKeyMap = {
    "anillos": { imageKey: "anillos", descKey: "ring" },
    "collares y dijes": { imageKey: "collares y dijes", descKey: "necklaces_charms" },
    "pulseras": { imageKey: "pulseras", descKey: "wristbands" },
    "aretes": { imageKey: "aretes", descKey: "hoops" },
    "rings": { imageKey: "rings", descKey: "ring" },
    "necklaces and charms": { imageKey: "necklaces and charms", descKey: "necklaces_charms" },
    "bracelets": { imageKey: "bracelets", descKey: "wristbands" },
    "earrings": { imageKey: "earrings", descKey: "hoops" }
  };
  const getDefaultCategory = (categories2) => {
    const spanishCategories = ["anillos", "collares y dijes", "pulseras", "aretes"];
    return categories2.find((cat) => spanishCategories.includes(cat.toLowerCase())) || categories2[0];
  };
  const defaultCategory = getDefaultCategory(categories).toLowerCase();
  const initialData = categoryKeyMap[defaultCategory] || { imageKey: defaultCategory, descKey: "" };
  const initialImages = categoryImages[initialData.imageKey] || [];
  const initialDescription = descriptions[initialData.descKey] || "";
  return renderTemplate(_a || (_a = __template(["", '<div class="jewelry-categories"> <div class="categories-container"> <div class="mobile-categories"> <div class="carousel"> ', ' </div> </div> <div class="desktop-categories"> ', ' </div> </div> <div class="gallery-container"> ', ' <div class="gallery active" id="image-gallery"> ', ` </div> </div> </div> <script>
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.category-button');
  const gallery = document.getElementById('image-gallery');
  const descriptionEl = document.querySelector('.category-description');
  
  const allImages = {
    'anillos': ["anillos/1.svg","anillos/2.svg","anillos/3.svg","anillos/4.svg","anillos/5.svg","anillos/6.svg"],
    'collares y dijes': ["collares/1.svg","collares/2.svg","collares/3.svg","collares/4.svg","collares/5.svg"],
    'pulseras': ["pulseras/1.svg","pulseras/2.svg","pulseras/3.svg","pulseras/4.svg","pulseras/5.svg","pulseras/6.svg","pulseras/7.svg"],
    'aretes': ["aros/1.svg","aros/2.svg","aros/3.svg","aros/4.svg","aros/5.svg"],
    'rings': ["anillos/1.svg","anillos/2.svg","anillos/3.svg","anillos/4.svg","anillos/5.svg","anillos/6.svg"],
    'necklaces and charms': ["collares/1.svg","collares/2.svg","collares/3.svg","collares/4.svg","collares/5.svg"],
    'bracelets': ["pulseras/1.svg","pulseras/2.svg","pulseras/3.svg","pulseras/4.svg","pulseras/5.svg","pulseras/6.svg","pulseras/7.svg"],
    'earrings': ["aros/1.svg","aros/2.svg","aros/3.svg","aros/4.svg","aros/5.svg"]
  };

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const categoryKey = button.dataset.category;
      const imageKey = button.dataset.imagekey;
      const description = button.dataset.description;
      
      descriptionEl.textContent = description;
      
      const images = allImages[imageKey] || [];
      gallery.innerHTML = images.map(image => \`
        <img 
          src="/public/\${image}" 
          alt="\${categoryKey}" 
          class="img-gallery" 
          loading="lazy"
        />
      \`).join('');
      
      buttons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
    });
  });
});
<\/script> `], ["", '<div class="jewelry-categories"> <div class="categories-container"> <div class="mobile-categories"> <div class="carousel"> ', ' </div> </div> <div class="desktop-categories"> ', ' </div> </div> <div class="gallery-container"> ', ' <div class="gallery active" id="image-gallery"> ', ` </div> </div> </div> <script>
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.category-button');
  const gallery = document.getElementById('image-gallery');
  const descriptionEl = document.querySelector('.category-description');
  
  const allImages = {
    'anillos': ["anillos/1.svg","anillos/2.svg","anillos/3.svg","anillos/4.svg","anillos/5.svg","anillos/6.svg"],
    'collares y dijes': ["collares/1.svg","collares/2.svg","collares/3.svg","collares/4.svg","collares/5.svg"],
    'pulseras': ["pulseras/1.svg","pulseras/2.svg","pulseras/3.svg","pulseras/4.svg","pulseras/5.svg","pulseras/6.svg","pulseras/7.svg"],
    'aretes': ["aros/1.svg","aros/2.svg","aros/3.svg","aros/4.svg","aros/5.svg"],
    'rings': ["anillos/1.svg","anillos/2.svg","anillos/3.svg","anillos/4.svg","anillos/5.svg","anillos/6.svg"],
    'necklaces and charms': ["collares/1.svg","collares/2.svg","collares/3.svg","collares/4.svg","collares/5.svg"],
    'bracelets': ["pulseras/1.svg","pulseras/2.svg","pulseras/3.svg","pulseras/4.svg","pulseras/5.svg","pulseras/6.svg","pulseras/7.svg"],
    'earrings': ["aros/1.svg","aros/2.svg","aros/3.svg","aros/4.svg","aros/5.svg"]
  };

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const categoryKey = button.dataset.category;
      const imageKey = button.dataset.imagekey;
      const description = button.dataset.description;
      
      descriptionEl.textContent = description;
      
      const images = allImages[imageKey] || [];
      gallery.innerHTML = images.map(image => \\\`
        <img 
          src="/public/\\\${image}" 
          alt="\\\${categoryKey}" 
          class="img-gallery" 
          loading="lazy"
        />
      \\\`).join('');
      
      buttons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
    });
  });
});
<\/script> `])), maybeRenderHead(), categories.map((category, index) => {
    const categoryKey = category.toLowerCase();
    const mappedData = categoryKeyMap[categoryKey] || { imageKey: categoryKey, descKey: "" };
    const isActive = categoryKey === defaultCategory;
    return renderTemplate`<button${addAttribute(`category-button ${isActive ? "active" : ""}`, "class")}${addAttribute(categoryKey, "data-category")}${addAttribute(mappedData.imageKey, "data-imagekey")}${addAttribute(descriptions[mappedData.descKey] || "", "data-description")}> ${category} </button>`;
  }), categories.map((category, index) => {
    const categoryKey = category.toLowerCase();
    const mappedData = categoryKeyMap[categoryKey] || { imageKey: categoryKey, descKey: "" };
    const isActive = categoryKey === defaultCategory;
    return renderTemplate`<button${addAttribute(`category-button ${isActive ? "active" : ""}`, "class")}${addAttribute(categoryKey, "data-category")}${addAttribute(mappedData.imageKey, "data-imagekey")}${addAttribute(descriptions[mappedData.descKey] || "", "data-description")}> ${category} </button>`;
  }), initialDescription && renderTemplate`<span class="category-description">${initialDescription}</span>`, initialImages.map((image) => renderTemplate`<img${addAttribute(`/public/${image}`, "src")}${addAttribute(defaultCategory, "alt")} class="img-gallery" loading="lazy">`));
}, "E:/PROYECTOS/joyeria/jewellery_page/src/components/CategoriesGallery.astro", void 0);

const $$Mansonry = createComponent(($$result, $$props, $$slots) => {
  const images = Array.from({ length: 13 }, (_, i) => `/mansonry/image-${i + 1}.svg`);
  return renderTemplate`${maybeRenderHead()}<div class="container" data-astro-cid-svltgnpp> <div class="masonry-gallery" data-astro-cid-svltgnpp> ${images.map((src, index) => renderTemplate`<div${addAttribute(`masonry-item item-${index + 1}`, "class")} data-astro-cid-svltgnpp> <img${addAttribute(src, "src")}${addAttribute(`Imagen ${index + 1}`, "alt")} loading="lazy" class="gallery-image" data-astro-cid-svltgnpp> </div>`)} </div> </div> <div id="lightbox" class="lightbox" data-astro-cid-svltgnpp> <button class="lightbox-close" aria-label="Close lightbox" data-astro-cid-svltgnpp>&times;</button> <img id="lightbox-img" src="" alt="" data-astro-cid-svltgnpp> </div> ${renderScript($$result, "E:/PROYECTOS/joyeria/jewellery_page/src/components/Mansonry.astro?astro&type=script&index=0&lang.ts")} `;
}, "E:/PROYECTOS/joyeria/jewellery_page/src/components/Mansonry.astro", void 0);

const $$Astro$6 = createAstro();
const $$CatalogueSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$CatalogueSection;
  const { lang } = Astro2.params;
  const { translations } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="catalogue-container"${addAttribute(getLocalizedAnchor("gallery", lang), "id")} data-astro-cid-v6vfy7c2> <div class="text-container" data-astro-cid-v6vfy7c2> <h2 class="slide-in" data-astro-cid-v6vfy7c2>${translations.catalogue.title}</h2> <p class="slide-in" data-astro-cid-v6vfy7c2>${translations.catalogue.paragraph}</p> </div> <div class="view-category" data-astro-cid-v6vfy7c2> ${renderComponent($$result, "CategoriesGallery", $$CategoriesGallery, { "translations": translations, "data-astro-cid-v6vfy7c2": true })} </div> <div class="mansory-container" data-astro-cid-v6vfy7c2> <p class="mansonry-title slide-in" data-astro-cid-v6vfy7c2>${translations.catalogue.paragraph_cta}</p> ${renderComponent($$result, "Mansonry", $$Mansonry, { "data-astro-cid-v6vfy7c2": true })} </div> </section> ${renderScript($$result, "E:/PROYECTOS/joyeria/jewellery_page/src/components/CatalogueSection.astro?astro&type=script&index=0&lang.ts")} `;
}, "E:/PROYECTOS/joyeria/jewellery_page/src/components/CatalogueSection.astro", void 0);

const $$Astro$5 = createAstro();
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$About;
  const { lang } = Astro2.props;
  const { translations } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(getLocalizedAnchor("about", lang), "id")} data-astro-cid-v2cbyr3p> <div class="about-container" data-astro-cid-v2cbyr3p> <div class="logo-animate-container" data-astro-cid-v2cbyr3p> <picture class="logo-container" data-astro-cid-v2cbyr3p> <img${addAttribute(translations.about.logo, "src")}${addAttribute(translations.about.alt_logo, "alt")} loading="lazy" data-astro-cid-v2cbyr3p> </picture> </div> <div class="content-about-container" data-astro-cid-v2cbyr3p> <div class="logo-section" data-astro-cid-v2cbyr3p> <picture class="melo-img-container" data-astro-cid-v2cbyr3p> <img src="/img/about.svg"${addAttribute(translations.about.alt_img, "alt")} loading="lazy" data-astro-cid-v2cbyr3p> </picture> </div> <div class="content-about" data-astro-cid-v2cbyr3p> <h2 class="animate-text" data-astro-cid-v2cbyr3p>${translations.about.title}</h2> ${translations.about.paragraphs.map((paragraph, index) => renderTemplate`<p class="animate-text"${addAttribute(`--delay: ${0.2 + index * 0.1}s`, "style")} data-astro-cid-v2cbyr3p>${paragraph}</p>`)} ${renderComponent($$result, "BtnLayout", $$BtnLayout, { "href": "https://www.instagram.com/melojoyeria/", "text": translations.about.btn_cta, "color": "var(--golden-sand)", "class": "animate-text", "style": "--delay: 0.5s", "data-astro-cid-v2cbyr3p": true })} </div> </div> </div> </section> ${renderScript($$result, "E:/PROYECTOS/joyeria/jewellery_page/src/components/About.astro?astro&type=script&index=0&lang.ts")} `;
}, "E:/PROYECTOS/joyeria/jewellery_page/src/components/About.astro", void 0);

const $$Astro$4 = createAstro();
const $$ReferencesSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ReferencesSection;
  const { lang } = Astro2.params;
  const { translations } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section id="references" class="references-section" data-astro-cid-myc6wvry> <div class="background-overlay" data-astro-cid-myc6wvry></div> <div class="content-wrapper" data-astro-cid-myc6wvry> <div class="content-container" data-astro-cid-myc6wvry> <div class="title-container" data-astro-cid-myc6wvry> <h2 class="slide-in-title" data-astro-cid-myc6wvry>${translations.references.title}</h2> </div> <div class="cards-container" data-astro-cid-myc6wvry> ${renderComponent($$result, "Carousel", null, { "translations": translations, "client:only": "react", "client:component-hydration": "only", "data-astro-cid-myc6wvry": true, "client:component-path": "E:/PROYECTOS/joyeria/jewellery_page/src/components/carrouselReferences/Carrousel", "client:component-export": "default" })} </div> </div> </div> </section> ${renderScript($$result, "E:/PROYECTOS/joyeria/jewellery_page/src/components/ReferencesSection.astro?astro&type=script&index=0&lang.ts")} `;
}, "E:/PROYECTOS/joyeria/jewellery_page/src/components/ReferencesSection.astro", void 0);

const $$Astro$3 = createAstro();
const $$ContactInfo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ContactInfo;
  const { icon, alt, content } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="contact-info" data-astro-cid-7oabtla5> <img${addAttribute(icon, "src")}${addAttribute(alt, "alt")} class="contact-icon" loading="lazy" data-astro-cid-7oabtla5> <p data-astro-cid-7oabtla5>${content}</p> </div> `;
}, "E:/PROYECTOS/joyeria/jewellery_page/src/components/ContactInfo.astro", void 0);

const $$Astro$2 = createAstro();
const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Contact;
  const { lang } = Astro2.params;
  const { translations } = Astro2.props;
  const contactInfo = translations.contact["contact-info"];
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(getLocalizedAnchor("contact", lang), "id")} data-astro-cid-xmivup5a> <div class="title-contact animate-title" data-astro-cid-xmivup5a> <h2 data-astro-cid-xmivup5a>${translations.contact.title}</h2> <span data-astro-cid-xmivup5a>${translations.contact.paragraph}</span> </div> <div class="contact-container" data-astro-cid-xmivup5a> <div class="contact-info-container animate-left" data-astro-cid-xmivup5a> ${contactInfo.map((info, index) => renderTemplate`${renderComponent($$result, "ContactInfo", $$ContactInfo, { "key": index, "icon": info.icon, "alt": info.alt, "content": info.content, "class": "animate-item", "style": `--delay: ${0.1 * index}s`, "data-astro-cid-xmivup5a": true })}`)} <p class="animate-item" style="--delay: 0.4s" data-astro-cid-xmivup5a>${translations.contact.paragraph_cta}</p> ${renderComponent($$result, "BtnLayout", $$BtnLayout, { "href": "https://www.instagram.com/melojoyeria/", "class": "contact-btn animate-item", "text": translations.contact.btn, "color": "var(--linen)", "style": "--delay: 0.5s", "data-astro-cid-xmivup5a": true })} </div> <div class="map-container animate-right" data-astro-cid-xmivup5a> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.27989115254!2d-89.72101228535188!3d13.794185665148034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6330171e456a75%3A0xf13fa4c0b9a4965d!2sEl%20Salvador!5e0!3m2!1ses!2ssv!4v1710381229276!5m2!1ses!2ssv" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" data-astro-cid-xmivup5a>
            </iframe> </div> </div> </section> ${renderScript($$result, "E:/PROYECTOS/joyeria/jewellery_page/src/components/Contact.astro?astro&type=script&index=0&lang.ts")} `;
}, "E:/PROYECTOS/joyeria/jewellery_page/src/components/Contact.astro", void 0);

const footerGallery = [
    "/anillos/4.svg",
    "/collares/5.svg",
    "/mansonry/image-9.svg",
    "/aros/4.svg"
];

const $$GalleryFooter = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="gallery-container" data-astro-cid-aowgr37w> ${footerGallery.map((imagePath, index) => renderTemplate`<div class="gallery-item"${addAttribute(index, "key")} data-astro-cid-aowgr37w> <img${addAttribute(imagePath, "src")}${addAttribute(`Gallery item ${index + 1}`, "alt")} class="gallery-img" loading="lazy"${addAttribute((e) => {
    e.target.style.display = "none";
    console.error("Error loading image:", imagePath);
  }, "onError")} data-astro-cid-aowgr37w> </div>`)} </div> `;
}, "E:/PROYECTOS/joyeria/jewellery_page/src/components/GalleryFooter.astro", void 0);

const $$Astro$1 = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  const { lang } = Astro2.params;
  const { translations } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-sz7xmlte> <div class="footer-container" data-astro-cid-sz7xmlte> <div class="logo-footer-container" data-astro-cid-sz7xmlte> <a class="logo-navigate" href="" data-astro-cid-sz7xmlte> <img class="logo-footer"${addAttribute(translations.footer.logo, "src")}${addAttribute(translations.footer.alt_logo, "alt")} data-astro-cid-sz7xmlte> </a> <span data-astro-cid-sz7xmlte>${translations.footer.paragraph}</span> <a class="social" href="https://www.instagram.com/melojoyeria/" target="_blank" data-astro-cid-sz7xmlte> <img class="social-icon"${addAttribute(translations.footer.socials[0].icon, "src")}${addAttribute(translations.footer.socials.alt, "alt")} data-astro-cid-sz7xmlte> </a> </div> <div data-astro-cid-sz7xmlte> ${renderComponent($$result, "GalleryFooter", $$GalleryFooter, { "data-astro-cid-sz7xmlte": true })} </div> <div data-astro-cid-sz7xmlte> <nav data-astro-cid-sz7xmlte> <ul data-astro-cid-sz7xmlte> <li data-astro-cid-sz7xmlte><a href="#home" data-astro-cid-sz7xmlte>${translations.footer.navbar[0].home}</a></li> <li data-astro-cid-sz7xmlte><a href="#catalogue" data-astro-cid-sz7xmlte>${translations.footer.navbar[1].gallery}</a></li> <li data-astro-cid-sz7xmlte><a href="#about" data-astro-cid-sz7xmlte>${translations.footer.navbar[2].about}</a></li> <li data-astro-cid-sz7xmlte><a href="#contact" data-astro-cid-sz7xmlte>${translations.footer.navbar[3].contact}</a></li> </ul> </nav> </div> </div> <div class="footer-copyright" data-astro-cid-sz7xmlte> <span data-astro-cid-sz7xmlte>${translations.footer.copyright}</span> </div> </section> `;
}, "E:/PROYECTOS/joyeria/jewellery_page/src/components/Footer.astro", void 0);

const MaterialSlider = ({ materials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [slideWidth, setSlideWidth] = useState(0);
  const [isSliderActive, setIsSliderActive] = useState(false);
  const sliderRef = useRef(null);
  const trackRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const isDragging = useRef(false);
  const resizeTimeout = useRef(null);
  const calculateDimensions = () => {
    const screenWidth = window.innerWidth;
    const useSlider = screenWidth < 600;
    setIsSliderActive(useSlider);
    if (!useSlider || !sliderRef.current) return;
    const container = sliderRef.current;
    const containerWidth = container.offsetWidth;
    const containerPadding = parseInt(window.getComputedStyle(container).paddingLeft) * 2;
    const availableWidth = containerWidth - containerPadding;
    let newSlidesPerView = 1;
    let newSlideWidth = Math.max(250, availableWidth * 0.9);
    if (availableWidth >= 480) {
      newSlidesPerView = 1.2;
      newSlideWidth = (availableWidth - 30) / 1.2;
    }
    setSlidesPerView(newSlidesPerView);
    setSlideWidth(newSlideWidth);
    setCurrentIndex(0);
  };
  useEffect(() => {
    const handleResize = () => {
      clearTimeout(resizeTimeout.current);
      resizeTimeout.current = setTimeout(calculateDimensions, 100);
    };
    calculateDimensions();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout.current);
    };
  }, []);
  const goToSlide = (index) => {
    const maxIndex = Math.max(0, materials.length - Math.floor(slidesPerView));
    setCurrentIndex(Math.min(Math.max(index, 0), maxIndex));
  };
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    const handleTouchStart = (e) => {
      e.stopPropagation();
      touchStartX.current = e.touches[0].clientX;
      isDragging.current = true;
      if (trackRef.current) {
        trackRef.current.style.transition = "none";
      }
    };
    const handleTouchMove = (e) => {
      if (!isDragging.current) return;
      e.preventDefault();
      touchEndX.current = e.touches[0].clientX;
    };
    const handleTouchEnd = () => {
      if (!isDragging.current) return;
      isDragging.current = false;
      if (trackRef.current) {
        trackRef.current.style.transition = "";
      }
      const deltaX = touchStartX.current - touchEndX.current;
      if (deltaX > 50) {
        goToSlide(currentIndex + 1);
      } else if (deltaX < -50) {
        goToSlide(currentIndex - 1);
      }
    };
    slider.addEventListener("touchstart", handleTouchStart, { passive: false });
    slider.addEventListener("touchmove", handleTouchMove, { passive: false });
    slider.addEventListener("touchend", handleTouchEnd);
    return () => {
      slider.removeEventListener("touchstart", handleTouchStart);
      slider.removeEventListener("touchmove", handleTouchMove);
      slider.removeEventListener("touchend", handleTouchEnd);
    };
  }, [currentIndex, slidesPerView]);
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref: sliderRef,
      className: `materials-wrapper ${isSliderActive ? "slider-mode" : "grid-mode"}`,
      children: isSliderActive ? /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("div", { className: "materials-slider-container", children: /* @__PURE__ */ jsx(
          "div",
          {
            className: "materials-slider-track",
            ref: trackRef,
            style: {
              transform: `translateX(-${currentIndex * (slideWidth + 16)}px)`,
              width: `${materials.length * (slideWidth + 16)}px`
            },
            children: materials.map((material, index) => /* @__PURE__ */ jsx(
              "div",
              {
                className: "material-slide",
                style: { width: `${slideWidth}px` },
                children: /* @__PURE__ */ jsxs("div", { className: "material-card", children: [
                  /* @__PURE__ */ jsx("img", { src: material.img, alt: material.img_alt, className: "material-image" }),
                  /* @__PURE__ */ jsx("h3", { children: material.title }),
                  /* @__PURE__ */ jsx("p", { children: material.description })
                ] })
              },
              index
            ))
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "materials-slider-dots", children: [...Array(Math.max(1, materials.length - Math.floor(slidesPerView) + 1))].map((_, index) => /* @__PURE__ */ jsx(
          "button",
          {
            className: `slider-dot ${index === currentIndex ? "active" : ""}`,
            onClick: () => goToSlide(index),
            "aria-label": `Ir al slide ${index + 1}`
          },
          index
        )) })
      ] }) : /* @__PURE__ */ jsx("div", { className: "materials-grid", children: materials.map((material, index) => /* @__PURE__ */ jsxs("div", { className: "material-card", children: [
        /* @__PURE__ */ jsx("img", { src: material.img, alt: material.img_alt, className: "material-image" }),
        /* @__PURE__ */ jsx("h3", { children: material.title }),
        /* @__PURE__ */ jsx("p", { children: material.description })
      ] }, index)) })
    }
  );
};

const $$Astro = createAstro();
const $$Materials = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Materials;
  const { translations } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section id="materials" data-astro-cid-xu5mpa5a> <div class="materials-header" data-astro-cid-xu5mpa5a> <h2 data-astro-cid-xu5mpa5a>${translations.materials.title}</h2> <p data-astro-cid-xu5mpa5a>${translations.materials.paragraph}</p> <span class="list-intro" data-astro-cid-xu5mpa5a>${translations.materials.paragraph_list}</span> </div> <div class="materials-list" data-astro-cid-xu5mpa5a> ${renderComponent($$result, "MaterialSlider", MaterialSlider, { "materials": translations.materials.list, "client:load": true, "client:component-hydration": "load", "client:component-path": "E:/PROYECTOS/joyeria/jewellery_page/src/components/materialSlider/MaterialSlider", "client:component-export": "default", "data-astro-cid-xu5mpa5a": true })} </div> </section> `;
}, "E:/PROYECTOS/joyeria/jewellery_page/src/components/Materials.astro", void 0);

export { $$Navbar as $, $$Hero as a, $$CatalogueSection as b, $$About as c, $$Materials as d, $$ReferencesSection as e, $$Contact as f, $$Footer as g };
