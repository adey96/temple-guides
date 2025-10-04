"use client";

import { useState, useEffect } from "react";
import { Metadata } from "next";
import { MapPin, Filter, Search, Layers } from "lucide-react";
import TempleMap from "@/components/TempleMap";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import Card, {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { temples } from "@/data/temples";

export default function MapsPage() {
  const [selectedState, setSelectedState] = useState("");
  const [selectedDeity, setSelectedDeity] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [mapView, setMapView] = useState<
    "all" | "state" | "deity" | "category"
  >("all");

  // Get unique values for filters
  const states = [...new Set(temples.map((t) => t.state))].sort();
  const deities = [...new Set(temples.map((t) => t.deity))].sort();
  const categories = [...new Set(temples.map((t) => t.category))].sort();

  // Filter temples based on current selection
  const filteredTemples = temples.filter((temple) => {
    if (
      selectedState &&
      selectedState !== "all" &&
      temple.state !== selectedState
    )
      return false;
    if (
      selectedDeity &&
      selectedDeity !== "all" &&
      temple.deity !== selectedDeity
    )
      return false;
    if (
      selectedCategory &&
      selectedCategory !== "all" &&
      temple.category !== selectedCategory
    )
      return false;
    return true;
  });

  // Get temple counts by state
  const templeCountsByState = states
    .map((state) => ({
      state,
      count: temples.filter((t) => t.state === state).length,
    }))
    .sort((a, b) => b.count - a.count);

  // Get temple counts by deity
  const templeCountsByDeity = deities
    .map((deity) => ({
      deity,
      count: temples.filter((t) => t.deity === deity).length,
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-600 to-orange-600 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Interactive Temple Maps
          </h1>
          <p className="mt-4 text-xl text-amber-100">
            Explore temple locations across India with our interactive maps
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Left Sidebar - Filters and Stats */}
            <div className="lg:col-span-1 space-y-6">
              {/* Map Controls */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Filter className="h-5 w-5 mr-2" />
                    Map Filters
                  </CardTitle>
                  <CardDescription>
                    Filter temples to show on the map
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      State
                    </label>
                    <Select
                      value={selectedState}
                      onValueChange={setSelectedState}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="All States" />
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
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Deity
                    </label>
                    <Select
                      value={selectedDeity}
                      onValueChange={setSelectedDeity}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="All Deities" />
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
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Category
                    </label>
                    <Select
                      value={selectedCategory}
                      onValueChange={setSelectedCategory}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="All Categories" />
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

                  <Button
                    onClick={() => {
                      setSelectedState("");
                      setSelectedDeity("");
                      setSelectedCategory("");
                    }}
                    variant="outline"
                    className="w-full"
                  >
                    Clear All Filters
                  </Button>
                </CardContent>
              </Card>

              {/* Stats */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Layers className="h-5 w-5 mr-2" />
                    Map Statistics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">
                        Total Temples:
                      </span>
                      <span className="font-semibold">{temples.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Showing:</span>
                      <span className="font-semibold">
                        {filteredTemples.length}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">States:</span>
                      <span className="font-semibold">{states.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Deities:</span>
                      <span className="font-semibold">{deities.length}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Top States */}
              <Card>
                <CardHeader>
                  <CardTitle>Top States by Temple Count</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {templeCountsByState.slice(0, 5).map((item) => (
                      <div
                        key={item.state}
                        className="flex justify-between items-center cursor-pointer hover:bg-gray-50 p-2 rounded"
                        onClick={() => setSelectedState(item.state)}
                      >
                        <span className="text-sm">{item.state}</span>
                        <span className="text-sm font-semibold text-amber-600">
                          {item.count}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Top Deities */}
              <Card>
                <CardHeader>
                  <CardTitle>Top Deities</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {templeCountsByDeity.map((item) => (
                      <div
                        key={item.deity}
                        className="flex justify-between items-center cursor-pointer hover:bg-gray-50 p-2 rounded"
                        onClick={() => setSelectedDeity(item.deity)}
                      >
                        <span className="text-sm">{item.deity}</span>
                        <span className="text-sm font-semibold text-amber-600">
                          {item.count}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Side - Map */}
            <div className="lg:col-span-3">
              <TempleMap
                selectedState={selectedState}
                selectedDeity={selectedDeity}
                selectedCategory={selectedCategory}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Map Features Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Map Features
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Discover temples with our interactive mapping tools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-amber-100">
                <MapPin className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Interactive Markers
              </h3>
              <p className="mt-2 text-gray-600">
                Click on temple markers to see detailed information and get
                directions
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-amber-100">
                <Filter className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Smart Filtering
              </h3>
              <p className="mt-2 text-gray-600">
                Filter temples by state, deity, category, and architecture style
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-amber-100">
                <Search className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Search Integration
              </h3>
              <p className="mt-2 text-gray-600">
                Search for temples by name, city, or state and see them on the
                map
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-amber-100">
                <Layers className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Multiple Views
              </h3>
              <p className="mt-2 text-gray-600">
                Switch between different map views and layers for better
                exploration
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
