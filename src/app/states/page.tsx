import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Star, Clock, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import Card, {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { temples, states } from "@/data/temples";

export const metadata: Metadata = {
  title: "Temples by State - Indian Temples Encyclopedia",
  description:
    "Explore temples across all Indian states and union territories. Find temples by location with detailed information about each state's religious heritage.",
  keywords:
    "temples by state, Indian states temples, state-wise temple guide, regional temples, temple locations",
};

export default function StatesPage() {
  // Group temples by state
  const templesByState = temples.reduce((acc, temple) => {
    if (!acc[temple.state]) {
      acc[temple.state] = [];
    }
    acc[temple.state].push(temple);
    return acc;
  }, {} as Record<string, typeof temples>);

  // Get temple count for each state
  const stateStats = states
    .map((state) => ({
      name: state,
      count: templesByState[state]?.length || 0,
      temples: templesByState[state] || [],
    }))
    .sort((a, b) => b.count - a.count);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-amber-600 to-orange-600 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Temples by State
            </h1>
            <p className="mt-4 text-xl text-amber-100">
              Explore temples across all Indian states and union territories
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Temple Distribution Across India
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Discover the rich temple heritage of each state
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stateStats.slice(0, 6).map((state) => (
              <Card
                key={state.name}
                className="hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{state.name}</span>
                    <span className="text-2xl font-bold text-amber-600">
                      {state.count}
                    </span>
                  </CardTitle>
                  <CardDescription>
                    {state.count > 0
                      ? `${state.count} temples documented`
                      : "No temples documented yet"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {state.count > 0 ? (
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600">Featured temples:</p>
                      <ul className="space-y-1">
                        {state.temples.slice(0, 3).map((temple) => (
                          <li key={temple.id} className="text-sm">
                            <Link
                              href={`/temples/${temple.slug}`}
                              className="text-amber-600 hover:text-amber-700 hover:underline"
                            >
                              {temple.name}
                            </Link>
                          </li>
                        ))}
                        {state.temples.length > 3 && (
                          <li className="text-sm text-gray-500">
                            +{state.temples.length - 3} more temples
                          </li>
                        )}
                      </ul>
                      <Button size="sm" className="w-full mt-4">
                        <Link href={`/temples?state=${state.name}`}>
                          View All Temples
                        </Link>
                      </Button>
                    </div>
                  ) : (
                    <div className="text-center py-4">
                      <p className="text-gray-500 text-sm">
                        Temples from this state will be added soon
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All States Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              All States & Union Territories
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Complete list of Indian states with temple information
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {states.map((state) => {
              const stateData = stateStats.find((s) => s.name === state);
              const count = stateData?.count || 0;

              return (
                <Card key={state} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-5 w-5 text-amber-600" />
                        <span className="font-medium text-gray-900">
                          {state}
                        </span>
                      </div>
                      <span className="text-sm font-semibold text-amber-600">
                        {count}
                      </span>
                    </div>
                    {count > 0 && (
                      <div className="mt-3">
                        <Button size="sm" variant="outline" className="w-full">
                          <Link href={`/temples?state=${state}`}>
                            View Temples
                          </Link>
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Temples by Region */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Featured Temples by Region
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Discover the most significant temples from each region
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {temples.slice(0, 6).map((temple) => (
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
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>
                        {temple.timings.morning} - {temple.timings.evening}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 line-clamp-3">
                      {temple.content.overview}
                    </p>
                    <Button className="w-full">
                      <Link href={`/temples/${temple.slug}`}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              <Link href="/temples">
                View All Temples
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-amber-600 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Explore India's Temple Heritage
            </h2>
            <p className="mt-4 text-lg text-amber-100">
              Discover temples from every state and union territory of India
            </p>
            <div className="mt-8 flex justify-center gap-x-6">
              <Button size="lg" variant="secondary">
                <Link href="/temples">Browse All Temples</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-amber-600"
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
