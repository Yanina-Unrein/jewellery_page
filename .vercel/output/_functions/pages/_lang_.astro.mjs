import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_D2J24U96.mjs';
import 'kleur/colors';
import { $ as $$Layout, l as loadTranslations } from '../chunks/ui_DfUnC0of.mjs';
import { $ as $$Navbar, a as $$Hero, b as $$CatalogueSection, c as $$About, d as $$Materials, e as $$ReferencesSection, f as $$Contact, g as $$Footer } from '../chunks/Materials_CFWYfLKV.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  return [
    { params: { lang: "es" } },
    { params: { lang: "en" } }
  ];
}
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { lang } = Astro2.params;
  const currentLang = lang && ["en", "es"].includes(lang) ? lang : "es";
  const translations = loadTranslations(currentLang);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "lang": currentLang, "translations": translations }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<header> ${renderComponent($$result2, "Navbar", $$Navbar, { "translations": translations })} </header> <main> ${renderComponent($$result2, "Hero", $$Hero, { "translations": translations })} ${renderComponent($$result2, "CatalogueSection", $$CatalogueSection, { "translations": translations })} ${renderComponent($$result2, "About", $$About, { "translations": translations, "lang": lang })} ${renderComponent($$result2, "Materials", $$Materials, { "translations": translations })} ${renderComponent($$result2, "ReferencesSection", $$ReferencesSection, { "translations": translations })} ${renderComponent($$result2, "Contact", $$Contact, { "translations": translations })} </main> <footer> ${renderComponent($$result2, "Footer", $$Footer, { "translations": translations })} </footer> ` })}`;
}, "E:/PROYECTOS/joyeria/jewellery_page/src/pages/[lang]/index.astro", void 0);

const $$file = "E:/PROYECTOS/joyeria/jewellery_page/src/pages/[lang]/index.astro";
const $$url = "/[lang]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
