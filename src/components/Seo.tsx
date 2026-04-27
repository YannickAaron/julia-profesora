import { Helmet } from 'react-helmet-async';
import { I18N, LANGS, SITE_URL, type Lang } from '../i18n';

type Page = 'home' | 'book';

export function Seo({ lang, page }: { lang: Lang; page: Page }) {
  const t = I18N[lang];
  const path = page === 'book' ? '/book' : '';
  const canonical = `${SITE_URL}/${lang}${path}`;
  const title = page === 'book' ? t.meta_book_title : t.meta_home_title;
  const desc = page === 'book' ? t.meta_book_desc : t.meta_home_desc;

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: lang,
    mainEntity: t.faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/${lang}` },
      { '@type': 'ListItem', position: 2, name: t.nav.booking, item: canonical },
    ],
  };

  return (
    <Helmet>
      <html lang={t.htmlLang} />
      <title>{title}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={canonical} />
      {LANGS.map((l) => (
        <link
          key={l}
          rel="alternate"
          hrefLang={l}
          href={`${SITE_URL}/${l}${path}`}
        />
      ))}
      <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/en${path}`} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content={`${SITE_URL}/og-image.png`} />
      <meta property="og:locale" content={t.ogLocale} />
      {LANGS.filter((l) => l !== lang).map((l) => (
        <meta key={l} property="og:locale:alternate" content={I18N[l].ogLocale} />
      ))}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={`${SITE_URL}/og-image.png`} />

      {page === 'home' && (
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      )}
      {page === 'book' && (
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      )}
    </Helmet>
  );
}
