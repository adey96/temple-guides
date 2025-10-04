"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { MapPin, Filter, Search } from "lucide-react";
import { temples } from "@/data/temples";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";

// Dynamically import the map component to avoid SSR issues
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});

interface TempleMapProps {
  selectedState?: string;
  selectedDeity?: string;
  selectedCategory?: string;
}

export default function TempleMap({
  selectedState,
  selectedDeity,
  selectedCategory,
}: TempleMapProps) {
  const [isClient, setIsClient] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTemples, setFilteredTemples] = useState(temples);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    let filtered = temples;

    // Apply filters
    if (selectedState && selectedState !== "all") {
      filtered = filtered.filter((temple) => temple.state === selectedState);
    }
    if (selectedDeity && selectedDeity !== "all") {
      filtered = filtered.filter((temple) => temple.deity === selectedDeity);
    }
    if (selectedCategory && selectedCategory !== "all") {
      filtered = filtered.filter(
        (temple) => temple.category === selectedCategory
      );
    }

    // Apply search
    if (searchTerm) {
      filtered = filtered.filter(
        (temple) =>
          temple.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          temple.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
          temple.state.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredTemples(filtered);
  }, [selectedState, selectedDeity, selectedCategory, searchTerm]);

  // Get unique values for filters
  const states = [...new Set(temples.map((t) => t.state))].sort();
  const deities = [...new Set(temples.map((t) => t.deity))].sort();
  const categories = [...new Set(temples.map((t) => t.category))].sort();

  // Calculate center point for India
  const center: [number, number] = [20.5937, 78.9629];

  if (!isClient) {
    return (
      <div className="h-96 bg-gray-100 rounded-lg flex items-center justify-center">
        <div className="text-center">
          <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600">Loading map...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Map Controls */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="flex-1">
            <Input
              type="text"
              placeholder="Search temples on map..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
          </div>
          <Button className="md:w-auto">
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Select
            value={selectedState || ""}
            onValueChange={(value) => {
              // This would need to be handled by parent component
              console.log("State changed:", value);
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="Filter by State" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All States</SelectItem>
              {states.map((state) => (
                <SelectItem key={state} value={state}>
                  {state}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select
            value={selectedDeity || ""}
            onValueChange={(value) => {
              console.log("Deity changed:", value);
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="Filter by Deity" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Deities</SelectItem>
              {deities.slice(0, 20).map((deity) => (
                <SelectItem key={deity} value={deity}>
                  {deity}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select
            value={selectedCategory || ""}
            onValueChange={(value) => {
              console.log("Category changed:", value);
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="Filter by Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="mt-4 text-sm text-gray-600">
          Showing {filteredTemples.length} temples on the map
        </div>
      </div>

      {/* Map Container */}
      <div className="h-96 bg-gray-100 rounded-lg overflow-hidden">
        <MapContainer
          center={center}
          zoom={5}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          {filteredTemples.map((temple) => (
            <Marker
              key={temple.id}
              position={[
                temple.location.coordinates.lat,
                temple.location.coordinates.lng,
              ]}
            >
              <Popup>
                <div className="p-2">
                  <h3 className="font-semibold text-lg">{temple.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {temple.city}, {temple.state}
                  </p>
                  <p className="text-sm mb-2">
                    <strong>Deity:</strong> {temple.deity}
                  </p>
                  <p className="text-sm mb-2">
                    <strong>Architecture:</strong> {temple.architecture.style}
                  </p>
                  <p className="text-sm mb-3">
                    <strong>Category:</strong> {temple.category}
                  </p>
                  <div className="flex gap-2">
                    <a
                      href={`/temples/${temple.slug}`}
                      className="text-xs bg-amber-600 text-white px-2 py-1 rounded hover:bg-amber-700"
                    >
                      Learn More
                    </a>
                    <a
                      href={`https://www.google.com/maps?q=${temple.location.coordinates.lat},${temple.location.coordinates.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700"
                    >
                      Directions
                    </a>
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* Map Legend */}
      <div className="bg-white p-4 rounded-lg shadow-sm border">
        <h3 className="font-semibold mb-3">Map Legend</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
            <span>High Priority Temples</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
            <span>Medium Priority Temples</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
            <span>Low Priority Temples</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
            <span>UNESCO Heritage Sites</span>
          </div>
        </div>
      </div>
    </div>
  );
}
