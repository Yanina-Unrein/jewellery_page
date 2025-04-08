import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_C1STWGMb.mjs';
import { manifest } from './manifest_BqVVBQMF.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/_lang_.astro.mjs');
const _page2 = () => import('./pages/_lang_/_---404_.astro.mjs');
const _page3 = () => import('./pages/index.astro.mjs');
const _page4 = () => import('./pages/_---404_.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/[lang]/index.astro", _page1],
    ["src/pages/[lang]/[...404].astro", _page2],
    ["src/pages/index.astro", _page3],
    ["src/pages/[...404].astro", _page4]
]);
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: undefined
});
const _args = {
    "middlewareSecret": "49add973-10a3-42d3-be7f-6a46ebdf6b77",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
