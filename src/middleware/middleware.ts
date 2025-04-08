import { sequence } from 'astro/middleware';
import { defaultLang } from '@/i18n/ui';

const i18nRedirects = async ({ request, redirect }, next) => {
  const url = new URL(request.url);
  const pathParts = url.pathname.split('/').filter(Boolean);

  // Si no es una ruta de idioma conocida
  if (!['es', 'en'].includes(pathParts[0])) {
    const response = await next();
    if (response.status === 404) {
      return redirect(`/${defaultLang}/404`);
    }
  }
  return next();
};

export const onRequest = sequence(i18nRedirects);