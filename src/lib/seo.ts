export const siteConfig = {
  name: "Temple Guides",
  description:
    "Discover ancient temples with expert guides. Authentic cultural experiences, educational tours, and spiritual journeys.",
  url: "https://templeguides.com",
  ogImage: "https://templeguides.com/images/temple-guides-og.jpg",
  links: {
    twitter: "https://twitter.com/templeguides",
    facebook: "https://facebook.com/templeguides",
    instagram: "https://instagram.com/templeguides",
  },
};

export const defaultSEO = {
  title:
    "Temple Guides - Authentic Cultural Heritage Tours | Expert Temple Guides",
  description:
    "Discover ancient temples with expert guides. Authentic cultural experiences, educational tours, and spiritual journeys. Book your temple tour today.",
  keywords:
    "temple tours, cultural heritage, spiritual journeys, temple guides, heritage tourism",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
};
