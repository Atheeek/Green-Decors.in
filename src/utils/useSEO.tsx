import { useEffect } from 'react';

type JsonLd = Record<string, unknown> | null;

interface UseSEOOptions {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  openGraph?: {
    type?: string;
    title?: string;
    description?: string;
    image?: string;
    url?: string;
    siteName?: string;
    locale?: string;
  };
  twitter?: {
    card?: 'summary' | 'summary_large_image';
    site?: string;
    creator?: string;
    title?: string;
    description?: string;
    image?: string;
  };
  jsonLd?: JsonLd;
}

function upsertMeta(name: string, content: string, attr: 'name' | 'property' = 'name') {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel: string, href: string) {
  if (!href) return;
  let el = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function upsertJsonLd(id: string, data: JsonLd) {
  const existing = document.getElementById(id);
  if (existing) existing.remove();
  if (!data) return;
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.id = id;
  script.text = JSON.stringify(data);
  document.head.appendChild(script);
}

export function useSEO(options: UseSEOOptions) {
  useEffect(() => {
    if (options.title) {
      document.title = options.title;
      upsertMeta('og:title', options.openGraph?.title || options.title, 'property');
      upsertMeta('twitter:title', options.twitter?.title || options.title);
    }

    if (options.description) {
      upsertMeta('description', options.description);
      upsertMeta('og:description', options.openGraph?.description || options.description, 'property');
      upsertMeta('twitter:description', options.twitter?.description || options.description);
    }

    if (options.keywords && options.keywords.length > 0) {
      upsertMeta('keywords', options.keywords.join(', '));
    }

    if (options.canonicalUrl) {
      upsertLink('canonical', options.canonicalUrl);
      upsertMeta('og:url', options.openGraph?.url || options.canonicalUrl, 'property');
    }

    const og = options.openGraph || {};
    if (og.type) upsertMeta('og:type', og.type, 'property');
    if (og.image) upsertMeta('og:image', og.image, 'property');
    if (og.siteName) upsertMeta('og:site_name', og.siteName, 'property');
    if (og.locale) upsertMeta('og:locale', og.locale, 'property');

    const tw = options.twitter || {};
    if (tw.card) upsertMeta('twitter:card', tw.card);
    if (tw.site) upsertMeta('twitter:site', tw.site);
    if (tw.creator) upsertMeta('twitter:creator', tw.creator);
    if (tw.image) upsertMeta('twitter:image', tw.image);

    upsertJsonLd('jsonld-primary', options.jsonLd || null);
  }, [
    options.title,
    options.description,
    options.canonicalUrl,
    JSON.stringify(options.keywords || []),
    JSON.stringify(options.openGraph || {}),
    JSON.stringify(options.twitter || {}),
    JSON.stringify(options.jsonLd || null),
  ]);
}

export function buildLocalBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Green Decors India',
    image: 'https://example.com/logo.png',
    url: 'https://www.greendecors.in/',
    telephone: '+91 00000 00000',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Nehrunagar, Puttur',
      addressLocality: 'Mangalore',
      addressRegion: 'Karnataka',
      postalCode: '575001',
      addressCountry: 'IN',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday'
        ],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    sameAs: [
      'https://www.instagram.com/greendecors.india/'
    ],
    makesOffer: {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        serviceType: 'InteriorDesignService'
      }
    }
  } as const;
}

export function buildInteriorDesignServiceJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'InteriorDesignService',
    name: 'Interior Design in Mangalore - Green Decors India',
    areaServed: ['Mangalore', 'Puttur', 'Karnataka'],
    provider: {
      '@type': 'LocalBusiness',
      name: 'Green Decors India'
    }
  } as const;
}


