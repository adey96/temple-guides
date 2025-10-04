export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  features: string[];
  pricing: {
    individual: number;
    group: number;
    private: number;
  };
  duration: string;
  groupSize: {
    min: number;
    max: number;
  };
  includes: string[];
  excludes: string[];
  images: string[];
  seoTitle?: string;
  seoDescription?: string;
}

export const services: Service[] = [
  {
    id: "1",
    title: "Guided Temple Tours",
    slug: "guided-temple-tours",
    description:
      "Expert-guided tours of sacred temples with cultural insights and historical context.",
    features: [
      "Expert local guides",
      "Cultural context and history",
      "Small group sizes",
      "Flexible scheduling",
    ],
    pricing: {
      individual: 25,
      group: 20,
      private: 50,
    },
    duration: "2-4 hours",
    groupSize: {
      min: 2,
      max: 12,
    },
    includes: [
      "Professional guide",
      "Entrance fees",
      "Cultural insights",
      "Photo opportunities",
    ],
    excludes: ["Transportation", "Meals", "Personal expenses"],
    images: ["/images/guided-tour-1.jpg", "/images/guided-tour-2.jpg"],
    seoTitle: "Expert Guided Temple Tours | Cultural Heritage Experiences",
    seoDescription:
      "Discover sacred temples with our expert guides. Authentic cultural experiences and historical insights.",
  },
  {
    id: "2",
    title: "Cultural Experiences",
    slug: "cultural-experiences",
    description:
      "Immerse yourself in local traditions, rituals, and cultural practices.",
    features: [
      "Traditional ceremonies",
      "Local cuisine experiences",
      "Artisan workshops",
      "Cultural performances",
    ],
    pricing: {
      individual: 35,
      group: 30,
      private: 60,
    },
    duration: "3-5 hours",
    groupSize: {
      min: 4,
      max: 15,
    },
    includes: [
      "Cultural guide",
      "Traditional activities",
      "Local meals",
      "Cultural materials",
    ],
    excludes: ["Transportation", "Personal shopping"],
    images: [
      "/images/cultural-experience-1.jpg",
      "/images/cultural-experience-2.jpg",
    ],
    seoTitle: "Authentic Cultural Experiences | Temple Guides",
    seoDescription:
      "Experience authentic local culture through traditional ceremonies, cuisine, and artisan workshops.",
  },
  {
    id: "3",
    title: "Educational Programs",
    slug: "educational-programs",
    description:
      "Educational tours designed for students, researchers, and cultural enthusiasts.",
    features: [
      "Academic focus",
      "Research materials",
      "Expert lecturers",
      "Certification available",
    ],
    pricing: {
      individual: 40,
      group: 35,
      private: 70,
    },
    duration: "4-6 hours",
    groupSize: {
      min: 6,
      max: 20,
    },
    includes: [
      "Educational materials",
      "Expert lecturer",
      "Research access",
      "Certificate of completion",
    ],
    excludes: ["Transportation", "Meals", "Accommodation"],
    images: [
      "/images/educational-program-1.jpg",
      "/images/educational-program-2.jpg",
    ],
    seoTitle: "Educational Temple Programs | Cultural Learning",
    seoDescription:
      "Comprehensive educational programs on temple history, architecture, and cultural significance.",
  },
  {
    id: "4",
    title: "Custom Tours",
    slug: "custom-tours",
    description:
      "Personalized temple tours tailored to your specific interests and requirements.",
    features: [
      "Fully customizable",
      "Private guide",
      "Flexible itinerary",
      "Specialized focus",
    ],
    pricing: {
      individual: 60,
      group: 50,
      private: 100,
    },
    duration: "2-8 hours",
    groupSize: {
      min: 1,
      max: 10,
    },
    includes: [
      "Private guide",
      "Custom itinerary",
      "Specialized knowledge",
      "Flexible timing",
    ],
    excludes: ["Transportation", "Meals", "Entrance fees"],
    images: ["/images/custom-tour-1.jpg", "/images/custom-tour-2.jpg"],
    seoTitle: "Custom Temple Tours | Personalized Cultural Experiences",
    seoDescription:
      "Create your perfect temple tour with our customizable experiences tailored to your interests.",
  },
];
