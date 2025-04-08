import { c as createComponent, a as createAstro, r as renderComponent, d as renderScript, b as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../chunks/astro/server_D2J24U96.mjs';
import 'kleur/colors';
import { d as defaultLang, l as loadTranslations, $ as $$Layout } from '../chunks/ui_DfUnC0of.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  Astro2.response.status = 404;
  const { lang } = Astro2.params;
  const translations = loadTranslations(defaultLang);
  const { pathname } = Astro2.url;
  if (!pathname.startsWith(`/${defaultLang}/`) && !pathname.startsWith("/en/")) {
    return redirect(`/${defaultLang}/404`);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": translations.notFound.title, "lang": lang, "data-astro-cid-rosg3gqy": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="not-found-container" data-astro-cid-rosg3gqy> <div class="not-found-content" data-astro-cid-rosg3gqy> <div class="error-code" data-astro-cid-rosg3gqy>${translations.notFound.title}</div> <h1 class="subtitle" data-astro-cid-rosg3gqy>${translations.notFound.subTitle}</h1> <p class="message" data-astro-cid-rosg3gqy>${translations.notFound.paragraph}</p> <div class="action" data-astro-cid-rosg3gqy> <a${addAttribute(`/${defaultLang}`, "href")} class="btn-404" data-astro-cid-rosg3gqy>${translations.notFound.btn}</a> </div> </div> <div class="illustration" data-astro-cid-rosg3gqy> <img src="/img/escaparate.svg"${addAttribute(translations.notFound.subTitle, "alt")} width="500" height="500" loading="eager" data-astro-cid-rosg3gqy> </div> </main> ` })}  ${renderScript($$result, "E:/PROYECTOS/joyeria/jewellery_page/src/pages/[...404].astro?astro&type=script&index=0&lang.ts")}`;
}, "E:/PROYECTOS/joyeria/jewellery_page/src/pages/[...404].astro", void 0);

const $$file = "E:/PROYECTOS/joyeria/jewellery_page/src/pages/[...404].astro";
const $$url = "/[...404]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
