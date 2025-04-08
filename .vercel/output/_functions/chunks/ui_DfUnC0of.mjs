import { c as createComponent, a as createAstro, m as maybeRenderHead, e as addAttribute, b as renderTemplate, f as renderHead, r as renderComponent, g as renderSlot, d as renderScript } from './astro/server_D2J24U96.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro$1 = createAstro();
const $$Spinner = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Spinner;
  const { size = "100px" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="spinner-overlay" data-astro-cid-lolztsa2> <div class="spinner-container" data-astro-cid-lolztsa2> <img src="/iconLogo/logo_gold_completo.svg" alt="Spinner Logo Melo" class="logo-spinner"${addAttribute(`width: ${size}; height: ${size};`, "style")} data-astro-cid-lolztsa2> </div> </div> `;
}, "E:/PROYECTOS/joyeria/jewellery_page/src/components/Spinner.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { lang = "es", translations = {} } = Astro2.props;
  const seo = translations.seo || { title: "Default Title", description: "", keywords: "" };
  const canonicalUrl = new URL(Astro2.url.pathname, "https://tudominio.com").toString();
  return renderTemplate`<html${addAttribute(lang, "lang")}> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="description"${addAttribute(seo.description, "content")}><meta name="keywords"${addAttribute(seo.keywords, "content")}><link rel="canonical"${addAttribute(canonicalUrl, "href")}><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"><title>${seo.title}</title>${renderHead()}</head> <body> <!-- Spinner de carga --> <div id="spinner-wrapper"> ${renderComponent($$result, "Spinner", $$Spinner, { "size": "200px" })} </div> <main id="main-content" class="content-hidden"> ${renderSlot($$result, $$slots["default"])} </main> ${renderScript($$result, "E:/PROYECTOS/joyeria/jewellery_page/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")} </body> </html> `;
}, "E:/PROYECTOS/joyeria/jewellery_page/src/layouts/Layout.astro", void 0);

const anchors = {
        es: {
          home: 'inicio',
          about: 'acerca',
          gallery: 'catalogo',
          contact: 'contacto'
        },
        en: {
          home: 'home',
          about: 'about',
          gallery: 'gallery',
          contact: 'contact'
        }
};

const languages = {
  en: "English",
  es: "Español"
};
const defaultLang = "es";
const ui = {
  en: await import('./en_CfedAIgT.mjs').then((m) => m.default),
  es: await import('./es_FjJYtPeb.mjs').then((m) => m.default)
};
function loadTranslations(lang) {
  return ui[lang ?? defaultLang] || ui[defaultLang];
}
function getLocalizedAnchor(anchorKey, targetLang = defaultLang) {
  const lang = Object.keys(anchors).includes(targetLang) ? targetLang : defaultLang;
  const anchor = anchors[lang]?.[anchorKey];
  return anchor || anchorKey;
}
function getLocalizedURL(path, targetLang, currentHash) {
  if (path.endsWith("/404")) {
    return targetLang === defaultLang ? "/404" : `/${targetLang}/404`;
  }
  const cleanPath = path.replace(new RegExp(`^/(${Object.keys(languages).join("|")})`), "");
  let localizedPath = targetLang === defaultLang ? cleanPath : `/${targetLang}${cleanPath}`;
  if (currentHash) {
    const hashWithoutPrefix = currentHash.startsWith("#") ? currentHash.substring(1) : currentHash;
    let anchorKey;
    for (const lang of Object.keys(anchors)) {
      for (const [key, value] of Object.entries(anchors[lang])) {
        if (value === hashWithoutPrefix) {
          anchorKey = key;
          break;
        }
      }
      if (anchorKey) break;
    }
    const localizedAnchor = anchorKey ? getLocalizedAnchor(anchorKey, targetLang) : hashWithoutPrefix;
    localizedPath += `#${localizedAnchor}`;
  }
  return localizedPath || "/";
}

export { $$Layout as $, languages as a, getLocalizedURL as b, defaultLang as d, getLocalizedAnchor as g, loadTranslations as l };
