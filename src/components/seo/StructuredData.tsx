interface StructuredDataProps {
  type: "Service" | "Article" | "Organization" | "Tour";
  data: any;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    switch (type) {
      case "Service":
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          name: data.name,
          description: data.description,
          provider: {
            "@type": "Organization",
            name: "Temple Guides",
          },
          offers: {
            "@type": "Offer",
            price: data.price,
            priceCurrency: "USD",
          },
        };

      case "Article":
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: data.headline,
          author: {
            "@type": "Person",
            name: data.author,
          },
          datePublished: data.datePublished,
          dateModified: data.dateModified,
          image: data.image,
        };

      case "Organization":
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Temple Guides",
          description:
            "Expert-guided temple tours offering authentic cultural experiences",
          url: "https://templeguides.com",
          logo: "https://templeguides.com/images/logo.png",
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+1-555-TEMPLE",
            contactType: "customer service",
          },
        };

      case "Tour":
        return {
          "@context": "https://schema.org",
          "@type": "TouristTrip",
          name: data.name,
          description: data.description,
          provider: {
            "@type": "Organization",
            name: "Temple Guides",
          },
          offers: {
            "@type": "Offer",
            price: data.price,
            priceCurrency: "USD",
          },
        };

      default:
        return {};
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData()),
      }}
    />
  );
}
