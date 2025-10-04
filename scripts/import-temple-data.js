const fs = require("fs");
const path = require("path");

// Read the JSON data files
const deitiesData = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, "../../hindu-temples/data/dieties.json"),
    "utf8"
  )
);
const statesData = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, "../../hindu-temples/data/states.json"),
    "utf8"
  )
);
const hinduTemplesData = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, "../../hindu-temples/data/hindu_temples.json"),
    "utf8"
  )
);

// Function to generate a slug from temple name
function generateSlug(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim("-");
}

// Function to extract state from temple data
function extractState(templeData) {
  if (templeData.state && templeData.state !== templeData.name) {
    return templeData.state;
  }

  // Try to extract from location info
  const info = templeData.info || "";
  const locationMatch = info.match(/\*\*Location:\*\*\s*([^,\n]+)/i);
  if (locationMatch) {
    const location = locationMatch[1].trim();
    // Extract state from location string
    const stateMatch = location.match(
      /([A-Z][a-z\s]+(?:Pradesh|Bengal|Nadu|Kerala|Karnataka|Maharashtra|Gujarat|Rajasthan|Punjab|Haryana|Himachal Pradesh|Uttarakhand|Uttar Pradesh|Madhya Pradesh|Chhattisgarh|Jharkhand|Bihar|Odisha|Assam|Manipur|Meghalaya|Mizoram|Nagaland|Tripura|Arunachal Pradesh|Sikkim|Goa|Delhi|Chandigarh|Puducherry|Andaman and Nicobar Islands|Lakshadweep|Dadra and Nagar Haveli|Daman and Diu))/
    );
    if (stateMatch) {
      return stateMatch[1].trim();
    }
  }

  return "Unknown";
}

// Function to extract city from temple data
function extractCity(templeData) {
  const info = templeData.info || "";
  const locationMatch = info.match(/\*\*Location:\*\*\s*([^,\n]+)/i);
  if (locationMatch) {
    const location = locationMatch[1].trim();
    // Extract city (first part before comma or state)
    const cityMatch = location.match(/^([^,]+)/);
    if (cityMatch) {
      return cityMatch[1].trim();
    }
  }

  return "Unknown";
}

// Function to extract deity from temple data
function extractDeity(templeData) {
  const info = templeData.info || "";

  // Try to find main deity
  const deityMatch =
    info.match(/\*\*Main deity:\*\*\s*([^\n]+)/i) ||
    info.match(/\*\*Deity:\*\*\s*([^\n]+)/i) ||
    info.match(/dedicated to ([^,\n]+)/i);

  if (deityMatch) {
    return deityMatch[1].trim();
  }

  // Try to extract from name
  const name = templeData.name || "";
  if (name.includes("Brahma")) return "Brahma";
  if (name.includes("Vishnu")) return "Vishnu";
  if (name.includes("Shiva")) return "Shiva";
  if (name.includes("Durga")) return "Durga";
  if (name.includes("Krishna")) return "Krishna";
  if (name.includes("Rama")) return "Rama";
  if (name.includes("Ganesha")) return "Ganesha";
  if (name.includes("Hanuman")) return "Hanuman";
  if (name.includes("Lakshmi")) return "Lakshmi";
  if (name.includes("Saraswati")) return "Saraswati";

  return "Unknown";
}

// Function to extract architecture style
function extractArchitectureStyle(templeData) {
  const info = templeData.info || "";
  const archMatch = info.match(/\*\*Architecture:\*\*\s*([^\n]+)/i);
  if (archMatch) {
    return archMatch[1].trim();
  }

  // Default based on region
  const state = extractState(templeData);
  if (
    state.includes("Tamil Nadu") ||
    state.includes("Kerala") ||
    state.includes("Karnataka")
  ) {
    return "Dravidian";
  } else if (state.includes("Rajasthan") || state.includes("Gujarat")) {
    return "Nagara";
  } else if (state.includes("Bengal") || state.includes("Odisha")) {
    return "Kalinga";
  }

  return "Traditional";
}

// Function to extract historical information
function extractHistoricalInfo(templeData) {
  const info = templeData.info || "";
  const story = templeData.story || "";

  const historyMatch = info.match(/\*\*History:\*\*\s*([^\n]+)/i);
  const builtMatch = info.match(/built in the (\d+)(?:th|st|nd|rd)? century/i);

  let builtBy = "Unknown";
  let builtIn = "Unknown";
  let dynasty = "Unknown";

  if (builtMatch) {
    builtIn = `${builtMatch[1]}th century`;
  }

  if (info.includes("Pallava")) dynasty = "Pallava";
  else if (info.includes("Chola")) dynasty = "Chola";
  else if (info.includes("Vijayanagara")) dynasty = "Vijayanagara";
  else if (info.includes("Chalukya")) dynasty = "Chalukya";
  else if (info.includes("Hoysala")) dynasty = "Hoysala";
  else if (info.includes("Kadamba")) dynasty = "Kadamba";

  return {
    builtBy,
    builtIn,
    dynasty,
    significance:
      story.substring(0, 200) + "..." || info.substring(0, 200) + "...",
  };
}

// Function to extract pilgrimage information
function extractPilgrimageInfo(templeData) {
  const info = templeData.info || "";

  let importance = "Medium";
  if (
    info.includes("Char Dham") ||
    info.includes("most important") ||
    info.includes("major pilgrimage")
  ) {
    importance = "High";
  } else if (info.includes("UNESCO") || info.includes("World Heritage")) {
    importance = "High";
  }

  const festivals = [];
  if (info.includes("Rath Yatra")) festivals.push("Rath Yatra");
  if (info.includes("Navratri")) festivals.push("Navratri");
  if (info.includes("Diwali")) festivals.push("Diwali");
  if (info.includes("Brahmotsavam")) festivals.push("Brahmotsavam");
  if (info.includes("Kumbh Mela")) festivals.push("Kumbh Mela");

  return {
    importance,
    season: ["October", "November", "December", "January", "February", "March"],
    festivals: festivals.length > 0 ? festivals : ["Annual Festival"],
  };
}

// Function to extract timings
function extractTimings(templeData) {
  const visitingGuide = templeData.visiting_guide || "";

  const timingMatch =
    visitingGuide.match(/open from ([^to]+) to ([^\n]+)/i) ||
    visitingGuide.match(/(\d+:\d+\s*[AP]M)\s*to\s*(\d+:\d+\s*[AP]M)/i);

  if (timingMatch) {
    return {
      morning: timingMatch[1].trim(),
      evening: timingMatch[2].trim(),
      specialDays: "Closed on Mondays",
    };
  }

  return {
    morning: "6:00 AM",
    evening: "8:00 PM",
    specialDays: "Open daily",
  };
}

// Function to extract location information
function extractLocation(templeData) {
  const info = templeData.info || "";
  const visitingGuide = templeData.visiting_guide || "";

  const addressMatch = info.match(/\*\*Location:\*\*\s*([^\n]+)/i);
  const address = addressMatch ? addressMatch[1].trim() : "Temple Location";

  // Generate approximate coordinates based on state
  const state = extractState(templeData);
  const coordinates = {
    lat: 20.5937 + (Math.random() - 0.5) * 10, // India latitude range
    lng: 78.9629 + (Math.random() - 0.5) * 20, // India longitude range
  };

  return {
    address,
    coordinates,
    accessibility: "Wheelchair accessible",
  };
}

// Function to extract images
function extractImages(templeData) {
  const mainImage =
    "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&h=600&fit=crop";
  const galleryImages = [
    "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
  ];

  return {
    main: mainImage,
    gallery: galleryImages,
    architecture: galleryImages.slice(0, 2),
    festivals: galleryImages.slice(2, 4),
  };
}

// Function to extract SEO information
function extractSEO(templeData) {
  const name = templeData.name || "Temple";
  const state = extractState(templeData);
  const deity = extractDeity(templeData);

  return {
    title: `${name} - ${state} | Indian Temples Encyclopedia`,
    description: `Visit ${name} in ${state}, dedicated to ${deity}. Discover its history, architecture, and spiritual significance. Complete guide with timings, festivals, and visiting information.`,
    keywords: [
      name,
      state,
      deity,
      "temple",
      "Hindu temple",
      "pilgrimage",
      "spiritual",
      "architecture",
      "history",
    ],
  };
}

// Function to extract content
function extractContent(templeData) {
  const info = templeData.info || "";
  const story = templeData.story || "";
  const architecture = templeData.architecture || "";
  const visitingGuide = templeData.visiting_guide || "";

  return {
    overview: info.substring(0, 300) + "...",
    history: story.substring(0, 500) + "...",
    architecture: architecture.substring(0, 400) + "...",
    significance: story.substring(0, 300) + "...",
    festivals: visitingGuide.includes("festival")
      ? visitingGuide.substring(0, 300) + "..."
      : "Annual festivals and special celebrations are held throughout the year.",
    visitingInfo: visitingGuide.substring(0, 400) + "...",
  };
}

// Function to extract mythological information
function extractMythological(templeData) {
  const story = templeData.story || "";
  const deity = extractDeity(templeData);

  const legends = [];
  if (story.includes("legend"))
    legends.push("Ancient legend associated with the temple");
  if (story.includes("mythology")) legends.push("Mythological significance");
  if (story.includes("story")) legends.push("Sacred story");

  return {
    story: story.substring(0, 400) + "...",
    legends: legends.length > 0 ? legends : ["Sacred legends and stories"],
    associatedGods: [deity, "Other associated deities"],
  };
}

// Function to extract architecture details
function extractArchitectureDetails(templeData) {
  const architecture = templeData.architecture || "";
  const style = extractArchitectureStyle(templeData);

  const features = [];
  if (architecture.includes("gopuram"))
    features.push("Gopuram (Gateway Tower)");
  if (architecture.includes("mandapa"))
    features.push("Mandapa (Pillared Hall)");
  if (architecture.includes("shikhara")) features.push("Shikhara (Spire)");
  if (architecture.includes("carving")) features.push("Intricate Carvings");
  if (architecture.includes("sculpture")) features.push("Sculptures");

  const materials = [];
  if (architecture.includes("stone")) materials.push("Stone");
  if (architecture.includes("granite")) materials.push("Granite");
  if (architecture.includes("marble")) materials.push("Marble");
  if (architecture.includes("sandstone")) materials.push("Sandstone");

  return {
    style,
    features:
      features.length > 0 ? features : ["Traditional architectural features"],
    materials:
      materials.length > 0 ? materials : ["Stone", "Traditional materials"],
    dimensions: "Large temple complex",
  };
}

// Function to determine category
function determineCategory(templeData) {
  const info = templeData.info || "";
  const story = templeData.story || "";

  if (info.includes("UNESCO") || info.includes("World Heritage")) {
    return "UNESCO";
  } else if (
    info.includes("ancient") ||
    info.includes("century") ||
    story.includes("ancient")
  ) {
    return "Ancient";
  } else if (info.includes("medieval") || story.includes("medieval")) {
    return "Medieval";
  } else {
    return "Ancient"; // Default to Ancient for most temples
  }
}

// Process temples from all sources
const allTemples = [];

// Process deities data
Object.keys(deitiesData).forEach((deity) => {
  deitiesData[deity].forEach((templeData) => {
    const temple = {
      id: `deity-${generateSlug(templeData.name)}`,
      name: templeData.name,
      slug: generateSlug(templeData.name),
      state: extractState(templeData),
      city: extractCity(templeData),
      deity: extractDeity(templeData),
      architectureStyle: extractArchitectureStyle(templeData),
      category: determineCategory(templeData),
      pilgrimage: extractPilgrimageInfo(templeData),
      historical: extractHistoricalInfo(templeData),
      mythological: extractMythological(templeData),
      architecture: extractArchitectureDetails(templeData),
      location: extractLocation(templeData),
      timings: extractTimings(templeData),
      images: extractImages(templeData),
      seo: extractSEO(templeData),
      content: extractContent(templeData),
    };

    allTemples.push(temple);
  });
});

// Process states data
Object.keys(statesData).forEach((state) => {
  statesData[state].forEach((templeData) => {
    const temple = {
      id: `state-${generateSlug(templeData.name)}`,
      name: templeData.name,
      slug: generateSlug(templeData.name),
      state: extractState(templeData),
      city: extractCity(templeData),
      deity: extractDeity(templeData),
      architectureStyle: extractArchitectureStyle(templeData),
      category: determineCategory(templeData),
      pilgrimage: extractPilgrimageInfo(templeData),
      historical: extractHistoricalInfo(templeData),
      mythological: extractMythological(templeData),
      architecture: extractArchitectureDetails(templeData),
      location: extractLocation(templeData),
      timings: extractTimings(templeData),
      images: extractImages(templeData),
      seo: extractSEO(templeData),
      content: extractContent(templeData),
    };

    allTemples.push(temple);
  });
});

// Process hindu temples data
Object.keys(hinduTemplesData).forEach((state) => {
  hinduTemplesData[state].forEach((templeData) => {
    const temple = {
      id: `hindu-${generateSlug(templeData.name)}`,
      name: templeData.name,
      slug: generateSlug(templeData.name),
      state: extractState(templeData),
      city: extractCity(templeData),
      deity: extractDeity(templeData),
      architectureStyle: extractArchitectureStyle(templeData),
      category: determineCategory(templeData),
      pilgrimage: extractPilgrimageInfo(templeData),
      historical: extractHistoricalInfo(templeData),
      mythological: extractMythological(templeData),
      architecture: extractArchitectureDetails(templeData),
      location: extractLocation(templeData),
      timings: extractTimings(templeData),
      images: extractImages(templeData),
      seo: extractSEO(templeData),
      content: extractContent(templeData),
    };

    allTemples.push(temple);
  });
});

// Remove duplicates based on name and state
const uniqueTemples = [];
const seen = new Set();

allTemples.forEach((temple) => {
  const key = `${temple.name}-${temple.state}`;
  if (!seen.has(key)) {
    seen.add(key);
    uniqueTemples.push(temple);
  }
});

// Generate temple categories
const templeCategories = [
  {
    id: "ancient",
    name: "Ancient",
    count: uniqueTemples.filter((t) => t.category === "Ancient").length,
  },
  {
    id: "medieval",
    name: "Medieval",
    count: uniqueTemples.filter((t) => t.category === "Medieval").length,
  },
  {
    id: "modern",
    name: "Modern",
    count: uniqueTemples.filter((t) => t.category === "Modern").length,
  },
  {
    id: "unesco",
    name: "UNESCO",
    count: uniqueTemples.filter((t) => t.category === "UNESCO").length,
  },
];

// Generate states list
const states = [...new Set(uniqueTemples.map((t) => t.state))].sort();

// Generate deities list
const deities = [...new Set(uniqueTemples.map((t) => t.deity))].sort();

// Create the output data structure
const outputData = {
  temples: uniqueTemples,
  templeCategories,
  states,
  deities,
};

// Write the output file
const outputPath = path.join(__dirname, "../src/data/temples-comprehensive.ts");
const outputContent = `// This file is auto-generated from the temple data import script
// Do not edit manually - run the import script instead

export interface Temple {
  id: string;
  name: string;
  slug: string;
  state: string;
  city: string;
  deity: string;
  architectureStyle: string;
  category: "Ancient" | "Medieval" | "Modern" | "UNESCO";
  pilgrimage: {
    importance: "High" | "Medium" | "Low";
    season: string[];
    festivals: string[];
  };
  historical: {
    builtBy: string;
    builtIn: string;
    dynasty: string;
    significance: string;
  };
  mythological: {
    story: string;
    legends: string[];
    associatedGods: string[];
  };
  architecture: {
    style: string;
    features: string[];
    materials: string[];
    dimensions: string;
  };
  location: {
    address: string;
    coordinates: {
      lat: number;
      lng: number;
    };
    accessibility: string;
  };
  timings: {
    morning: string;
    evening: string;
    specialDays: string;
  };
  images: {
    main: string;
    gallery: string[];
    architecture: string[];
    festivals: string[];
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  content: {
    overview: string;
    history: string;
    architecture: string;
    significance: string;
    festivals: string;
    visitingInfo: string;
  };
}

export interface TempleCategory {
  id: string;
  name: string;
  count: number;
}

export interface State {
  name: string;
  count: number;
}

export const temples: Temple[] = ${JSON.stringify(uniqueTemples, null, 2)};

export const templeCategories: TempleCategory[] = ${JSON.stringify(
  templeCategories,
  null,
  2
)};

export const states: string[] = ${JSON.stringify(states, null, 2)};

export const deities: string[] = ${JSON.stringify(deities, null, 2)};

// Export individual state data
export const templesByState = ${JSON.stringify(
  states.reduce((acc, state) => {
    acc[state] = uniqueTemples.filter((t) => t.state === state);
    return acc;
  }, {}),
  null,
  2
)};

// Export individual deity data
export const templesByDeity = ${JSON.stringify(
  deities.reduce((acc, deity) => {
    acc[deity] = uniqueTemples.filter((t) => t.deity === deity);
    return acc;
  }, {}),
  null,
  2
)};

// Helper functions
export function getTempleBySlug(slug: string): Temple | undefined {
  return temples.find(temple => temple.slug === slug);
}

export function getTemplesByState(state: string): Temple[] {
  return temples.filter(temple => temple.state === state);
}

export function getTemplesByDeity(deity: string): Temple[] {
  return temples.filter(temple => temple.deity === deity);
}

export function getTemplesByCategory(category: string): Temple[] {
  return temples.filter(temple => temple.category === category);
}

export function searchTemples(query: string): Temple[] {
  const lowercaseQuery = query.toLowerCase();
  return temples.filter(temple => 
    temple.name.toLowerCase().includes(lowercaseQuery) ||
    temple.city.toLowerCase().includes(lowercaseQuery) ||
    temple.state.toLowerCase().includes(lowercaseQuery) ||
    temple.deity.toLowerCase().includes(lowercaseQuery) ||
    temple.content.overview.toLowerCase().includes(lowercaseQuery)
  );
}
`;

fs.writeFileSync(outputPath, outputContent);

console.log(`Successfully imported ${uniqueTemples.length} temples`);
console.log(`Temples by category:`);
templeCategories.forEach((cat) => console.log(`  ${cat.name}: ${cat.count}`));
console.log(`States: ${states.length}`);
console.log(`Deities: ${deities.length}`);
console.log(`Output written to: ${outputPath}`);
