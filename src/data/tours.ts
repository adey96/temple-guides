export interface Tour {
  id: string;
  title: string;
  slug: string;
  description: string;
  duration: string;
  difficulty: "Easy" | "Moderate" | "Challenging";
  groupSize: {
    min: number;
    max: number;
  };
  price: {
    adult: number;
    child: number;
    group: number;
  };
  highlights: string[];
  itinerary: {
    time: string;
    activity: string;
    description: string;
  }[];
  includes: string[];
  excludes: string[];
  requirements: string[];
  images: string[];
  location: string;
  category: string;
  seoTitle?: string;
  seoDescription?: string;
}

export const tours: Tour[] = [
  {
    id: "1",
    title: "Golden Temple Heritage Tour",
    slug: "golden-temple-heritage-tour",
    description:
      "Discover the spiritual and architectural marvel of the Golden Temple in Amritsar.",
    duration: "4 hours",
    difficulty: "Easy",
    groupSize: {
      min: 2,
      max: 12,
    },
    price: {
      adult: 30,
      child: 20,
      group: 25,
    },
    highlights: [
      "Golden Temple complex",
      "Langar (community kitchen)",
      "Sikh Museum",
      "Traditional architecture",
    ],
    itinerary: [
      {
        time: "09:00",
        activity: "Meeting Point",
        description: "Meet your guide at the main entrance",
      },
      {
        time: "09:30",
        activity: "Golden Temple Tour",
        description:
          "Explore the main temple complex and learn about Sikh history",
      },
      {
        time: "11:00",
        activity: "Langar Experience",
        description: "Participate in the community kitchen service",
      },
      {
        time: "12:00",
        activity: "Sikh Museum",
        description: "Visit the museum to understand Sikh heritage",
      },
      {
        time: "13:00",
        activity: "Free Time",
        description: "Explore the complex at your own pace",
      },
    ],
    includes: [
      "Professional guide",
      "Entrance fees",
      "Cultural insights",
      "Photo opportunities",
    ],
    excludes: ["Transportation", "Meals", "Personal expenses"],
    requirements: [
      "Comfortable walking shoes",
      "Modest clothing",
      "Head covering (provided)",
    ],
    images: [
      "/images/golden-temple-1.jpg",
      "/images/golden-temple-2.jpg",
      "/images/golden-temple-3.jpg",
    ],
    location: "Amritsar, Punjab",
    category: "Heritage",
    seoTitle: "Golden Temple Heritage Tour | Amritsar Temple Guide",
    seoDescription:
      "Experience the spiritual beauty of the Golden Temple with our expert guides. Learn about Sikh heritage and traditions.",
  },
  {
    id: "2",
    title: "Varanasi Sacred Temples",
    slug: "varanasi-sacred-temples",
    description:
      "Explore the ancient temples and spiritual sites of Varanasi, the spiritual capital of India.",
    duration: "6 hours",
    difficulty: "Moderate",
    groupSize: {
      min: 4,
      max: 15,
    },
    price: {
      adult: 40,
      child: 25,
      group: 35,
    },
    highlights: [
      "Kashi Vishwanath Temple",
      "Ganga Aarti ceremony",
      "Ancient ghats",
      "Traditional rituals",
    ],
    itinerary: [
      {
        time: "06:00",
        activity: "Sunrise Ghats",
        description: "Witness morning rituals at the sacred ghats",
      },
      {
        time: "08:00",
        activity: "Kashi Vishwanath Temple",
        description: "Visit the most sacred temple in Varanasi",
      },
      {
        time: "10:00",
        activity: "Temple Complex Tour",
        description: "Explore various temples in the old city",
      },
      {
        time: "12:00",
        activity: "Traditional Lunch",
        description: "Experience local cuisine",
      },
      {
        time: "16:00",
        activity: "Ganga Aarti",
        description: "Witness the evening prayer ceremony",
      },
    ],
    includes: [
      "Expert guide",
      "Temple entrance fees",
      "Traditional lunch",
      "Cultural insights",
    ],
    excludes: ["Transportation", "Personal shopping", "Accommodation"],
    requirements: [
      "Comfortable walking shoes",
      "Modest clothing",
      "Respectful behavior",
    ],
    images: [
      "/images/varanasi-temple-1.jpg",
      "/images/varanasi-temple-2.jpg",
      "/images/varanasi-temple-3.jpg",
    ],
    location: "Varanasi, Uttar Pradesh",
    category: "Spiritual",
    seoTitle: "Varanasi Sacred Temples Tour | Spiritual Journey",
    seoDescription:
      "Discover the spiritual essence of Varanasi through its ancient temples and sacred rituals.",
  },
  {
    id: "3",
    title: "Khajuraho Temple Complex",
    slug: "khajuraho-temple-complex",
    description:
      "Explore the UNESCO World Heritage site of Khajuraho, famous for its intricate temple architecture.",
    duration: "5 hours",
    difficulty: "Easy",
    groupSize: {
      min: 2,
      max: 10,
    },
    price: {
      adult: 35,
      child: 20,
      group: 30,
    },
    highlights: [
      "Western Group temples",
      "Intricate stone carvings",
      "UNESCO World Heritage",
      "Architectural marvels",
    ],
    itinerary: [
      {
        time: "09:00",
        activity: "Meeting Point",
        description: "Meet at the temple complex entrance",
      },
      {
        time: "09:30",
        activity: "Western Group Tour",
        description: "Explore the main temple complex",
      },
      {
        time: "11:30",
        activity: "Architecture Workshop",
        description: "Learn about temple construction techniques",
      },
      {
        time: "13:00",
        activity: "Lunch Break",
        description: "Traditional meal at local restaurant",
      },
      {
        time: "14:30",
        activity: "Eastern Group",
        description: "Visit the smaller temple group",
      },
    ],
    includes: [
      "Professional guide",
      "Entrance fees",
      "Architecture workshop",
      "Traditional lunch",
    ],
    excludes: ["Transportation", "Personal expenses", "Accommodation"],
    requirements: [
      "Comfortable walking shoes",
      "Camera for photography",
      "Sun protection",
    ],
    images: [
      "/images/khajuraho-temple-1.jpg",
      "/images/khajuraho-temple-2.jpg",
      "/images/khajuraho-temple-3.jpg",
    ],
    location: "Khajuraho, Madhya Pradesh",
    category: "Architecture",
    seoTitle: "Khajuraho Temple Complex Tour | UNESCO Heritage",
    seoDescription:
      "Explore the magnificent Khajuraho temples, a UNESCO World Heritage site known for its intricate architecture.",
  },
];
