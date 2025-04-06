import { sequence } from 'astro/middleware';
import { defaultLang } from '@/i18n/ui';

async function i18nRedirect(context, next) {
  const url = new URL(context.request.url);
  const pathParts = url.pathname.split('/').filter(Boolean);

  // Redirigir a /es/ si no hay idioma en la URL
  if (!['es', 'en'].includes(pathParts[0])) {
    return context.redirect(`/${defaultLang}${url.pathname}`, 307);
  }

  return next();
}

export const onRequest = sequence(i18nRedirect);