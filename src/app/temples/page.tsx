"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Filter, MapPin, Clock, Star } from "lucide-react";
import Button from "@/components/ui/Button";
import Card, {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { temples, templeCategories, states, deities } from "@/data/temples";

export default function TemplesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedDeity, setSelectedDeity] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedArchitecture, setSelectedArchitecture] = useState("");

  const filteredTemples = useMemo(() => {
    return temples.filter((temple) => {
      const matchesSearch =
        temple.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        temple.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        temple.state.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesState = !selectedState || temple.state === selectedState;
      const matchesDeity = !selectedDeity || temple.deity === selectedDeity;
      const matchesCategory =
        !selectedCategory || temple.category === selectedCategory;
      const matchesArchitecture =
        !selectedArchitecture ||
        temple.architecture.style === selectedArchitecture;

      return (
        matchesSearch &&
        matchesState &&
        matchesDeity &&
        matchesCategory &&
        matchesArchitecture
      );
    });
  }, [
    searchTerm,
    selectedState,
    selectedDeity,
    selectedCategory,
    selectedArchitecture,
  ]);

  const architectureStyles = Array.from(
    new Set(temples.map((t) => t.architecture.style))
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-amber-600 to-orange-600 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Indian Temples Encyclopedia
            </h1>
            <p className="mt-4 text-xl text-amber-100">
              Discover temples across India with detailed information about
              their history, architecture, and significance
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {/* Search Bar */}
            <div className="flex gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search temples by name, city, or state..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  State
                </label>
                <select
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                >
                  <option value="">All States</option>
                  {states.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Deity
                </label>
                <select
                  value={selectedDeity}
                  onChange={(e) => setSelectedDeity(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                >
                  <option value="">All Deities</option>
                  {deities.map((deity) => (
                    <option key={deity} value={deity}>
                      {deity}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                >
                  <option value="">All Categories</option>
                  {templeCategories.map((category) => (
                    <option key={category.id} value={category.name}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Architecture
                </label>
                <select
                  value={selectedArchitecture}
                  onChange={(e) => setSelectedArchitecture(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                >
                  <option value="">All Styles</option>
                  {architectureStyles.map((style) => (
                    <option key={style} value={style}>
                      {style}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-end">
                <Button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedState("");
                    setSelectedDeity("");
                    setSelectedCategory("");
                    setSelectedArchitecture("");
                  }}
                  variant="outline"
                  className="w-full"
                >
                  Clear Filters
                </Button>
              </div>
            </div>

            {/* Results Count */}
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600">
                Showing {filteredTemples.length} of {temples.length} temples
              </p>
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-600">Filters Applied</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Temples Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {filteredTemples.length === 0 ? (
            <div className="text-center py-16">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                <Search className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                No temples found
              </h3>
              <p className="mt-2 text-gray-600">
                Try adjusting your search criteria or clear the filters to see
                all temples.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredTemples.map((temple) => (
                <Card
                  key={temple.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-48">
                    <Image
                      src={temple.images.main}
                      alt={temple.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                        {temple.pilgrimage.importance} Priority
                      </span>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{temple.name}</CardTitle>
                    <CardDescription className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {temple.city}, {temple.state}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Deity:</span>
                        <span className="font-medium">{temple.deity}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Architecture:</span>
                        <span className="font-medium">
                          {temple.architecture.style}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Category:</span>
                        <span className="font-medium">{temple.category}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>
                          {temple.timings.morning} - {temple.timings.evening}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 line-clamp-3">
                        {temple.content.overview}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="ml-1 text-sm text-gray-600">
                            {temple.pilgrimage.importance} Pilgrimage Site
                          </span>
                        </div>
                        <Button size="sm">
                          <Link href={`/temples/${temple.slug}`}>
                            View Details
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Pagination */}
      {filteredTemples.length > 0 && (
        <section className="py-8 bg-white border-t">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600">
                Showing all {filteredTemples.length} temples
              </p>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm" disabled>
                  Next
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
