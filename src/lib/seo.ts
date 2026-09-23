import { CONTACT, SITE_URL, SOCIALS } from "./site";

export const SITE_NAME = "Fish Network";
export const OG_IMAGE = `${SITE_URL}/og.png`;

const OG_ALT = "Fish Network — The Collaborative Investing Platform";

export function seoHead({
  title,
  description,
  path,
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  keywords: string;
}) {
  const url = new URL(path, SITE_URL).href;
  const webpage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url,
    inLanguage: "en",
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
    primaryImageOfPage: OG_IMAGE,
  };

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "keywords", content: keywords },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:alt", content: OG_ALT },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:locale", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: OG_IMAGE },
      { name: "twitter:image:alt", content: OG_ALT },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(webpage) }],
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/brand/logo.png`,
    image: OG_IMAGE,
    email: CONTACT.email,
    telephone: "+1-954-378-9809",
    slogan: "Swim Together, Win Together.",
    description:
      "Infrastructure for member-led investment clubs with verifiable governance and capital accounts.",
    sameAs: SOCIALS.map((social) => social.href).filter(
      (href): href is string => typeof href === "string" && href.length > 0,
    ),
  };
}
