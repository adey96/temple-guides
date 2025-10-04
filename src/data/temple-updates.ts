// Content Management System for Temple Updates
export interface TempleUpdate {
  id: string;
  templeId: string;
  updateType:
    | "renovation"
    | "festival"
    | "timing"
    | "accessibility"
    | "new_feature"
    | "event";
  title: string;
  description: string;
  date: string;
  source: string;
  verified: boolean;
  priority: "high" | "medium" | "low";
}

export interface TravelTip {
  id: string;
  templeId: string;
  category:
    | "transportation"
    | "accommodation"
    | "food"
    | "safety"
    | "etiquette"
    | "best_time";
  title: string;
  description: string;
  tips: string[];
  lastUpdated: string;
}

export interface CulturalContext {
  id: string;
  templeId: string;
  contextType:
    | "historical"
    | "mythological"
    | "architectural"
    | "social"
    | "economic";
  title: string;
  description: string;
  details: string[];
  references: string[];
}

// Sample temple updates
export const templeUpdates: TempleUpdate[] = [
  {
    id: "1",
    templeId: "1", // Golden Temple
    updateType: "renovation",
    title: "Golden Temple Renovation Completed",
    description:
      "Major renovation work completed on the Golden Temple complex, including restoration of the golden dome and marble flooring.",
    date: "2024-01-15",
    source: "Shiromani Gurdwara Parbandhak Committee",
    verified: true,
    priority: "high",
  },
  {
    id: "2",
    templeId: "9", // Tirupati Balaji
    updateType: "new_feature",
    title: "New Queue Management System",
    description:
      "Tirupati Balaji Temple introduces advanced queue management system with online booking and real-time updates.",
    date: "2024-02-01",
    source: "Tirumala Tirupati Devasthanams",
    verified: true,
    priority: "high",
  },
  {
    id: "3",
    templeId: "8", // Jagannath Temple
    updateType: "festival",
    title: "Rath Yatra 2024 Schedule",
    description:
      "Jagannath Rath Yatra 2024 will be held on July 7th with enhanced security measures and crowd management.",
    date: "2024-03-15",
    source: "Jagannath Temple Administration",
    verified: true,
    priority: "medium",
  },
];

// Sample travel tips
export const travelTips: TravelTip[] = [
  {
    id: "1",
    templeId: "1", // Golden Temple
    category: "transportation",
    title: "Getting to Golden Temple",
    description: "Complete guide to reaching the Golden Temple in Amritsar",
    tips: [
      "Nearest airport: Sri Guru Ram Dass Jee International Airport (11km)",
      "Railway station: Amritsar Junction (2km from temple)",
      "Bus stand: Amritsar Bus Stand (1km from temple)",
      "Auto-rickshaws and cycle-rickshaws available from all transport hubs",
      "Parking available near the temple complex",
    ],
    lastUpdated: "2024-01-20",
  },
  {
    id: "2",
    templeId: "4", // Kedarnath
    category: "safety",
    title: "Safety Tips for Kedarnath Trek",
    description: "Important safety guidelines for the Kedarnath pilgrimage",
    tips: [
      "Start trek early in the morning (5-6 AM)",
      "Carry sufficient water and energy bars",
      "Wear proper trekking shoes with good grip",
      "Check weather conditions before starting",
      "Carry warm clothing as temperature drops significantly",
      "Take breaks every 30-45 minutes",
      "Inform someone about your trekking plans",
    ],
    lastUpdated: "2024-02-10",
  },
  {
    id: "3",
    templeId: "9", // Tirupati Balaji
    category: "etiquette",
    title: "Temple Etiquette and Guidelines",
    description: "Important guidelines for visiting Tirupati Balaji Temple",
    tips: [
      "Dress modestly - avoid shorts, sleeveless tops",
      "Remove shoes before entering temple premises",
      "Maintain silence inside the temple",
      "Follow the queue system patiently",
      "No photography inside the main temple",
      "Carry valid ID for verification",
      "Book darshan tickets online in advance",
    ],
    lastUpdated: "2024-01-25",
  },
];

// Sample cultural context
export const culturalContext: CulturalContext[] = [
  {
    id: "1",
    templeId: "1", // Golden Temple
    contextType: "historical",
    title: "Sikh History and Golden Temple",
    description:
      "The Golden Temple's role in Sikh history and the Sikh community",
    details: [
      "Founded by Guru Arjan Dev, the fifth Sikh Guru",
      "Symbol of equality and openness to all people",
      "Langar (free kitchen) serves thousands daily",
      "Center of Sikh political and religious activities",
      "Survived multiple attacks and reconstructions",
    ],
    references: [
      "Sikh Historical Society",
      "SGPC Archives",
      "Sikh Encyclopedia",
    ],
  },
  {
    id: "2",
    templeId: "6", // Brihadeeswara Temple
    contextType: "architectural",
    title: "Chola Architecture and Engineering",
    description:
      "The architectural marvel of Brihadeeswara Temple and Chola engineering",
    details: [
      "Built without binding material - stones held by gravity",
      "Vimana weighs 80 tons and was lifted without modern machinery",
      "Temple has never been damaged by earthquakes",
      "Fresco paintings depict various dance forms",
      "Acoustic design allows sound to travel clearly",
    ],
    references: [
      "Archaeological Survey of India",
      "Tamil Nadu Archaeology Department",
      "UNESCO World Heritage Documentation",
    ],
  },
  {
    id: "3",
    templeId: "13", // Mahabodhi Temple
    contextType: "mythological",
    title: "Buddha's Enlightenment and Bodh Gaya",
    description:
      "The mythological significance of Bodh Gaya in Buddhist tradition",
    details: [
      "Site where Prince Siddhartha became the Buddha",
      "Bodhi tree is a direct descendant of the original tree",
      "Seven sacred sites around the temple complex",
      "Diamond throne marks the exact spot of enlightenment",
      "Pilgrimage site for Buddhists worldwide",
    ],
    references: [
      "Buddhist Historical Society",
      "Bodh Gaya Temple Management Committee",
      "UNESCO World Heritage Documentation",
    ],
  },
];

// Function to get updates for a specific temple
export function getTempleUpdates(templeId: string): TempleUpdate[] {
  return templeUpdates.filter((update) => update.templeId === templeId);
}

// Function to get travel tips for a specific temple
export function getTravelTips(templeId: string): TravelTip[] {
  return travelTips.filter((tip) => tip.templeId === templeId);
}

// Function to get cultural context for a specific temple
export function getCulturalContext(templeId: string): CulturalContext[] {
  return culturalContext.filter((context) => context.templeId === templeId);
}

// Function to get recent updates (last 30 days)
export function getRecentUpdates(): TempleUpdate[] {
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

  return templeUpdates
    .filter((update) => new Date(update.date) >= thirtyDaysAgo)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Function to get high priority updates
export function getHighPriorityUpdates(): TempleUpdate[] {
  return templeUpdates.filter((update) => update.priority === "high");
}
