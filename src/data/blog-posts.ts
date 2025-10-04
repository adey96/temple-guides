export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
  category: string;
  tags: string[];
  featuredImage: string;
  seoTitle?: string;
  seoDescription?: string;
  readingTime: number;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Architectural Marvel of Golden Temple",
    slug: "architectural-marvel-golden-temple",
    excerpt:
      "Discover the stunning architecture and spiritual significance of the Golden Temple in Amritsar.",
    content: `
# The Architectural Marvel of Golden Temple

The Golden Temple, also known as Harmandir Sahib, stands as one of the most magnificent architectural achievements in Sikh history. Located in Amritsar, Punjab, this sacred site represents the perfect blend of spiritual significance and architectural brilliance.

## Historical Background

The Golden Temple was built in the 16th century by Guru Arjan Dev, the fifth Sikh Guru. The temple was designed to be accessible from all four sides, symbolizing the Sikh principle of equality and openness to all people, regardless of their background.

## Architectural Features

The temple complex features several remarkable architectural elements:

- **Golden Dome**: The iconic golden dome that gives the temple its name
- **Marble Structure**: Beautiful white marble construction with intricate inlay work
- **Sacred Pool**: The Amrit Sarovar (Pool of Nectar) surrounding the temple
- **Four Entrances**: Symbolizing openness to all directions and people

## Cultural Significance

The Golden Temple serves as the spiritual and cultural center of Sikhism. It houses the Guru Granth Sahib, the holy scripture of Sikhs, and welcomes millions of visitors annually from around the world.

## Visiting Information

When visiting the Golden Temple, visitors should:
- Dress modestly and cover their heads
- Remove shoes before entering
- Participate respectfully in the langar (community kitchen)
- Take time to appreciate the peaceful atmosphere

The temple is open 24 hours a day, and the best times to visit are during sunrise and sunset when the golden dome reflects beautifully in the sacred pool.
    `,
    author: "Dr. Priya Sharma",
    publishedAt: "2024-01-15",
    updatedAt: "2024-01-15",
    category: "Temple Histories",
    tags: ["Golden Temple", "Architecture", "Sikh Heritage"],
    featuredImage: "/images/golden-temple-architecture.jpg",
    seoTitle: "Golden Temple Architecture: A Marvel of Sikh Heritage",
    seoDescription:
      "Explore the architectural brilliance and spiritual significance of the Golden Temple in Amritsar.",
    readingTime: 8,
  },
  {
    id: "2",
    title: "Understanding Temple Rituals and Traditions",
    slug: "understanding-temple-rituals-traditions",
    excerpt:
      "Learn about the sacred rituals and traditions practiced in Hindu temples across India.",
    content: `
# Understanding Temple Rituals and Traditions

Temple rituals in India are deeply rooted in ancient traditions and spiritual practices. These rituals serve as a bridge between the divine and the devotees, creating a sacred atmosphere of worship and devotion.

## Common Temple Rituals

### Morning Aarti
The morning aarti is performed at sunrise, welcoming the deity and beginning the day's worship. This ritual involves:
- Lighting lamps and incense
- Chanting sacred mantras
- Offering flowers and food
- Ringing temple bells

### Evening Aarti
The evening aarti is performed at sunset, marking the end of the day's worship. This is often the most elaborate ritual of the day.

### Prasad Distribution
Prasad refers to blessed food offered to the deity and then distributed to devotees. This symbolizes the divine blessing being shared with all.

## Temple Etiquette

When visiting temples, it's important to:
- Dress modestly and appropriately
- Remove shoes before entering
- Maintain silence and respect
- Follow the guidance of temple priests
- Participate in rituals respectfully

## Cultural Significance

These rituals are not just religious practices but also cultural expressions that have been passed down through generations, maintaining the spiritual and cultural heritage of India.
    `,
    author: "Rajesh Kumar",
    publishedAt: "2024-01-20",
    updatedAt: "2024-01-20",
    category: "Cultural Insights",
    tags: ["Temple Rituals", "Traditions", "Hindu Culture"],
    featuredImage: "/images/temple-rituals.jpg",
    seoTitle: "Temple Rituals and Traditions: A Guide to Sacred Practices",
    seoDescription:
      "Learn about the sacred rituals and traditions practiced in Hindu temples across India.",
    readingTime: 6,
  },
  {
    id: "3",
    title: "What to Wear When Visiting Temples",
    slug: "what-to-wear-visiting-temples",
    excerpt:
      "A comprehensive guide on appropriate attire for temple visits, respecting cultural and religious traditions.",
    content: `
# What to Wear When Visiting Temples

Proper attire when visiting temples is not just about respect for the sacred space, but also about understanding and honoring the cultural traditions associated with these holy places.

## General Guidelines

### For Men
- Wear long pants or traditional dhoti
- Cover shoulders with a shirt or kurta
- Remove hats and caps
- Avoid shorts and sleeveless shirts

### For Women
- Wear long skirts, pants, or traditional sarees
- Cover shoulders and avoid sleeveless tops
- Consider wearing a dupatta or shawl
- Avoid revealing or tight clothing

## Temple-Specific Requirements

### Sikh Temples (Gurdwaras)
- Cover your head with a scarf or bandana
- Remove shoes before entering
- Wear modest, comfortable clothing

### Hindu Temples
- Traditional Indian attire is preferred
- Remove leather items (belts, shoes)
- Cover your head in some temples

### Buddhist Temples
- Wear loose, comfortable clothing
- Remove shoes before entering
- Avoid bright colors in some traditions

## Cultural Sensitivity

Remember that temple visits are spiritual experiences. Your attire should reflect:
- Respect for the sacred space
- Understanding of local customs
- Modesty and humility
- Cultural appreciation

## Practical Tips

- Check temple-specific requirements before visiting
- Bring a scarf or shawl for head covering
- Wear comfortable walking shoes
- Consider the weather and temple location
- Pack extra clothing for different temple visits
    `,
    author: "Sarah Johnson",
    publishedAt: "2024-01-25",
    updatedAt: "2024-01-25",
    category: "Travel Tips",
    tags: ["Temple Etiquette", "Cultural Respect", "Travel Guide"],
    featuredImage: "/images/temple-attire.jpg",
    seoTitle: "Temple Attire Guide: What to Wear When Visiting Sacred Sites",
    seoDescription:
      "Complete guide on appropriate attire for temple visits, respecting cultural and religious traditions.",
    readingTime: 5,
  },
];
