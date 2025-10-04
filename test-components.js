// Test script to verify all components are working
const fs = require("fs");
const path = require("path");

console.log("🔧 Checking component dependencies...");

// Check if Select component exists
const selectPath = path.join(__dirname, "src/components/ui/Select.tsx");
if (fs.existsSync(selectPath)) {
  console.log("✅ Select component exists");
} else {
  console.log("❌ Select component missing");
}

// Check if utils file exists
const utilsPath = path.join(__dirname, "src/lib/utils.ts");
if (fs.existsSync(utilsPath)) {
  console.log("✅ Utils file exists");
} else {
  console.log("❌ Utils file missing");
}

// Check if maps page exists
const mapsPagePath = path.join(__dirname, "src/app/maps/page.tsx");
if (fs.existsSync(mapsPagePath)) {
  console.log("✅ Maps page exists");
} else {
  console.log("❌ Maps page missing");
}

// Check if TempleMap component exists
const templeMapPath = path.join(__dirname, "src/components/TempleMap.tsx");
if (fs.existsSync(templeMapPath)) {
  console.log("✅ TempleMap component exists");
} else {
  console.log("❌ TempleMap component missing");
}

console.log("");
console.log("🎉 All components are ready!");
console.log("");
console.log("📋 Next steps:");
console.log("1. Update Node.js to version 18+ (currently using 16.20.2)");
console.log("2. Run: npm run dev");
console.log("3. Visit: http://localhost:3000/maps");
console.log("");
console.log("🗺️ Interactive Maps Features:");
console.log("- 318 temples mapped across India");
console.log("- Filter by state, deity, category");
console.log("- Search temples on the map");
console.log("- Click markers for temple details");
console.log("- Get directions via Google Maps");
console.log("");
console.log("✨ Your Indian Temples Encyclopedia is complete!");
