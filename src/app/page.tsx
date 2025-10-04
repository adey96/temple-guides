"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Star,
  MapPin,
  Clock,
  Search,
  Filter,
  Layers,
  Users,
  Calendar,
  Award,
  Compass,
  Building,
  Heart,
  Zap,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Card, {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { temples, templeCategories, states, deities } from "@/data/temples";

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");

  // Calculate comprehensive statistics
  const stats = useMemo(() => {
    const templesByState = temples.reduce((acc, temple) => {
      acc[temple.state] = (acc[temple.state] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const templesByDeity = temples.reduce((acc, temple) => {
      acc[temple.deity] = (acc[temple.deity] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const templesByArchitecture = temples.reduce((acc, temple) => {
      acc[temple.architecture.style] =
        (acc[temple.architecture.style] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const topStates = Object.entries(templesByState)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 6);

    const topDeities = Object.entries(templesByDeity)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 6);

    const topArchitectures = Object.entries(templesByArchitecture)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 4);

    // Get featured temples (mix of different types)
    const featuredTemples = [
      ...temples.filter((t) => t.pilgrimage.importance === "High").slice(0, 2),
      ...temples.filter((t) => t.category === "Ancient").slice(0, 2),
      ...temples.filter((t) => t.category === "UNESCO").slice(0, 2),
    ].slice(0, 6);

    return {
      templesByState,
      templesByDeity,
      templesByArchitecture,
      topStates,
      topDeities,
      topArchitectures,
      featuredTemples,
    };
  }, []);

  // Get recent temples (last 6)
  const recentTemples = temples.slice(-6);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-600 via-orange-600 to-red-600 py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl font-bold tracking-tight sm:text-7xl mb-6">
            Indian Temples Encyclopedia
          </h1>
          <p className="mt-6 text-2xl text-amber-100 max-w-4xl mx-auto leading-relaxed">
            Discover India's magnificent spiritual heritage through our
            comprehensive collection of
            <span className="font-bold text-white">
              {" "}
              {temples.length} temples
            </span>{" "}
            across
            <span className="font-bold text-white">
              {" "}
              {states.length} states
            </span>
            , featuring detailed history, architecture, and pilgrimage
            information.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/temples">
              <Button
                size="lg"
                className="bg-white text-amber-600 hover:bg-gray-100 text-lg px-8 py-4"
              >
                <Compass className="mr-3 h-6 w-6" />
                Explore All Temples
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </Link>
            <Link href="/maps">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-amber-600 text-lg px-8 py-4"
              >
                <Layers className="mr-3 h-6 w-6" />
                Interactive Maps
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              India's Temple Heritage
            </h2>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive data showcasing the incredible diversity and
              richness of India's spiritual architecture
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl">
              <div className="text-5xl font-bold text-amber-600 mb-2">
                {temples.length}
              </div>
              <div className="text-xl font-semibold text-gray-900 mb-1">
                Temples
              </div>
              <div className="text-sm text-gray-600">
                Comprehensively documented
              </div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl">
              <div className="text-5xl font-bold text-blue-600 mb-2">
                {states.length}
              </div>
              <div className="text-xl font-semibold text-gray-900 mb-1">
                States
              </div>
              <div className="text-sm text-gray-600">Across India</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
              <div className="text-5xl font-bold text-green-600 mb-2">
                {deities.length}
              </div>
              <div className="text-xl font-semibold text-gray-900 mb-1">
                Deities
              </div>
              <div className="text-sm text-gray-600">Represented</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl">
              <div className="text-5xl font-bold text-purple-600 mb-2">
                {templeCategories.length}
              </div>
              <div className="text-xl font-semibold text-gray-900 mb-1">
                Categories
              </div>
              <div className="text-sm text-gray-600">Temple types</div>
            </div>
          </div>
        </div>
      </section>

      {/* Top States Showcase */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              States with Rich Temple Heritage
            </h2>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Discover which states boast the most magnificent temple
              collections
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {stats.topStates.map(([state, count], index) => (
              <Card
                key={state}
                className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                        {index + 1}
                      </div>
                      <div>
                        <CardTitle className="text-xl">{state}</CardTitle>
                        <CardDescription className="text-base">
                          {count} temples documented
                        </CardDescription>
                      </div>
                    </div>
                    <MapPin className="h-6 w-6 text-amber-600 group-hover:scale-110 transition-transform" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-amber-500 to-orange-500 h-2 rounded-full transition-all duration-500"
                        style={{
                          width: `${(count / stats.topStates[0][1]) * 100}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                  <Link href={`/temples?state=${state}`}>
                    <Button className="w-full group-hover:bg-amber-600 transition-colors">
                      Explore {state} Temples
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Temples */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Featured Temples
            </h2>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Discover some of India's most significant and spiritually
              important temples
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {stats.featuredTemples.map((temple) => (
              <Card
                key={temple.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="relative h-56">
                  <Image
                    src={temple.images.main}
                    alt={temple.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/90 text-gray-900">
                      <Star className="h-4 w-4 text-amber-500 mr-1" />
                      {temple.pilgrimage.importance}
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{temple.name}</CardTitle>
                  <CardDescription className="text-base">
                    <MapPin className="h-4 w-4 inline mr-1" />
                    {temple.city}, {temple.state}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Deity:</span>
                        <div className="font-medium">{temple.deity}</div>
                      </div>
                      <div>
                        <span className="text-gray-600">Style:</span>
                        <div className="font-medium">
                          {temple.architecture.style}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>
                        {temple.timings.morning} - {temple.timings.evening}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 line-clamp-3">
                      {temple.content.overview}
                    </p>
                    <Button className="w-full group-hover:bg-amber-600 transition-colors">
                      <Link href={`/temples/${temple.slug}`}>Learn More</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Deity Showcase */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Most Worshipped Deities
            </h2>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the divine diversity of India's spiritual traditions
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {stats.topDeities.map(([deity, count], index) => (
              <Card
                key={deity}
                className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                        {index + 1}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{deity}</CardTitle>
                        <CardDescription>{count} temples</CardDescription>
                      </div>
                    </div>
                    <Heart className="h-6 w-6 text-blue-600 group-hover:scale-110 transition-transform" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full transition-all duration-500"
                        style={{
                          width: `${(count / stats.topDeities[0][1]) * 100}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                  <Link href={`/temples?deity=${deity}`}>
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors"
                    >
                      Explore {deity} Temples
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Showcase */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Architectural Styles
            </h2>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Marvel at the diverse architectural traditions that define India's
              temple heritage
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.topArchitectures.map(([style, count], index) => (
              <Card
                key={style}
                className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group text-center"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    <Building className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-lg">{style}</CardTitle>
                  <CardDescription>{count} temples</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-500"
                        style={{
                          width: `${
                            (count / stats.topArchitectures[0][1]) * 100
                          }%`,
                        }}
                      ></div>
                    </div>
                  </div>
                  <Link href={`/temples?architecture=${style}`}>
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-purple-600 group-hover:text-white transition-colors"
                    >
                      Explore Style
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Maps Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Interactive Temple Discovery
            </h2>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Explore temple locations across India with our advanced mapping
              technology
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Interactive Markers
                    </h3>
                    <p className="text-gray-600">
                      Click on temple markers to see detailed information,
                      photos, and get directions to any temple across India.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Filter className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Smart Filtering
                    </h3>
                    <p className="text-gray-600">
                      Filter temples by state, deity, category, architecture
                      style, and pilgrimage importance for precise results.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Layers className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Multiple Views
                    </h3>
                    <p className="text-gray-600">
                      Switch between different map views and layers for better
                      exploration of temple locations and surroundings.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <Link href="/maps">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-lg px-8 py-4"
                  >
                    <Layers className="mr-3 h-6 w-6" />
                    Explore Interactive Maps
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-2xl">
                <div className="h-80 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <Layers className="h-16 w-16 text-gray-400 mx-auto mb-6" />
                    <h4 className="text-xl font-semibold text-gray-700 mb-2">
                      Interactive Map Preview
                    </h4>
                    <p className="text-gray-600 mb-4">
                      {temples.length} temples across {states.length} states
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="bg-amber-100 p-3 rounded-lg">
                        <div className="font-semibold text-amber-800">
                          {stats.topStates[0][1]}
                        </div>
                        <div className="text-amber-600">
                          in {stats.topStates[0][0]}
                        </div>
                      </div>
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <div className="font-semibold text-blue-800">
                          {stats.topDeities[0][1]}
                        </div>
                        <div className="text-blue-600">
                          {stats.topDeities[0][0]} temples
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Search Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Find Your Perfect Temple
            </h2>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Search through our comprehensive database to discover temples that
              match your interests
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-2xl">
              <div className="flex gap-4 mb-8">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Search temples by name, city, deity, or state..."
                    className="w-full px-6 py-4 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <Button size="lg" className="px-8 py-4 text-lg">
                  <Search className="h-6 w-6 mr-3" />
                  Search
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                <Link href="/temples?state=Tamil Nadu">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full h-16 flex-col"
                  >
                    <MapPin className="h-5 w-5 mb-1" />
                    By State
                  </Button>
                </Link>
                <Link href="/temples?deity=Shiva">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full h-16 flex-col"
                  >
                    <Heart className="h-5 w-5 mb-1" />
                    By Deity
                  </Button>
                </Link>
                <Link href="/temples?category=Ancient">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full h-16 flex-col"
                  >
                    <Award className="h-5 w-5 mb-1" />
                    By Category
                  </Button>
                </Link>
                <Link href="/temples?pilgrimage=High">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full h-16 flex-col"
                  >
                    <Users className="h-5 w-5 mb-1" />
                    Pilgrimage Sites
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-br from-amber-600 via-orange-600 to-red-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold tracking-tight text-white sm:text-6xl mb-6">
            Begin Your Spiritual Journey
          </h2>
          <p className="mt-6 text-2xl text-amber-100 max-w-4xl mx-auto">
            Explore India's magnificent temple heritage with our comprehensive
            guide. From ancient architectural marvels to sacred pilgrimage
            sites, discover the spiritual heart of India.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/temples">
              <Button
                size="lg"
                className="bg-white text-amber-600 hover:bg-gray-100 text-xl px-10 py-5"
              >
                <Compass className="mr-3 h-7 w-7" />
                Explore All Temples
                <ArrowRight className="ml-3 h-7 w-7" />
              </Button>
            </Link>
            <Link href="/maps">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-amber-600 text-xl px-10 py-5"
              >
                <Layers className="mr-3 h-7 w-7" />
                Interactive Maps
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
