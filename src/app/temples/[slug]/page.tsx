import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, Star, Calendar, Users, ArrowLeft } from "lucide-react";
import Button from "@/components/ui/Button";
import Card, {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import StructuredData from "@/components/seo/StructuredData";
import { temples } from "@/data/temples";

interface TemplePageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: TemplePageProps): Promise<Metadata> {
  const temple = temples.find((t) => t.slug === params.slug);

  if (!temple) {
    return {
      title: "Temple Not Found",
      description: "The requested temple could not be found.",
    };
  }

  return {
    title: temple.seo.title,
    description: temple.seo.description,
    keywords: temple.seo.keywords.join(", "),
    openGraph: {
      title: temple.seo.title,
      description: temple.seo.description,
      images: [temple.images.main],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: temple.seo.title,
      description: temple.seo.description,
      images: [temple.images.main],
    },
  };
}

export default function TemplePage({ params }: TemplePageProps) {
  const temple = temples.find((t) => t.slug === params.slug);

  if (!temple) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Temple Not Found</h1>
          <p className="mt-4 text-gray-600">
            The requested temple could not be found.
          </p>
          <Link href="/temples">
            <Button className="mt-8">Browse All Temples</Button>
          </Link>
        </div>
      </div>
    );
  }

  const structuredData = {
    "@type": "Place",
    name: temple.name,
    description: temple.content.overview,
    address: {
      "@type": "PostalAddress",
      streetAddress: temple.location.address,
      addressLocality: temple.city,
      addressRegion: temple.state,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: temple.location.coordinates.lat,
      longitude: temple.location.coordinates.lng,
    },
    openingHours: `${temple.timings.morning}-${temple.timings.evening}`,
    image: temple.images.main,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <StructuredData type="Organization" data={structuredData} />

      {/* Header Section */}
      <section className="bg-gradient-to-r from-amber-600 to-orange-600 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Link href="/temples">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-amber-600"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Temples
              </Button>
            </Link>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {temple.name}
            </h1>
            <p className="mt-4 text-xl text-amber-100 flex items-center justify-center">
              <MapPin className="h-5 w-5 mr-2" />
              {temple.city}, {temple.state}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Hero Image */}
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src={temple.images.main}
                  alt={temple.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Overview */}
              <Card>
                <CardHeader>
                  <CardTitle>Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    {temple.content.overview}
                  </p>
                </CardContent>
              </Card>

              {/* History */}
              <Card>
                <CardHeader>
                  <CardTitle>Historical Background</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          Built By:
                        </h4>
                        <p className="text-gray-600">
                          {temple.historical.builtBy}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          Built In:
                        </h4>
                        <p className="text-gray-600">
                          {temple.historical.builtIn}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          Dynasty:
                        </h4>
                        <p className="text-gray-600">
                          {temple.historical.dynasty}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          Significance:
                        </h4>
                        <p className="text-gray-600">
                          {temple.historical.significance}
                        </p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        History:
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {temple.content.history}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Architecture */}
              <Card>
                <CardHeader>
                  <CardTitle>Architecture</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-900">Style:</h4>
                        <p className="text-gray-600">
                          {temple.architecture.style}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          Materials:
                        </h4>
                        <p className="text-gray-600">
                          {temple.architecture.materials.join(", ")}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          Dimensions:
                        </h4>
                        <p className="text-gray-600">
                          {temple.architecture.dimensions}
                        </p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Key Features:
                      </h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        {temple.architecture.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Architecture Details:
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {temple.content.architecture}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Mythological Context */}
              <Card>
                <CardHeader>
                  <CardTitle>Mythological Significance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Story:
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {temple.mythological.story}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Legends:
                      </h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        {temple.mythological.legends.map((legend, index) => (
                          <li key={index}>{legend}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Associated Deities:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {temple.mythological.associatedGods.map(
                          (god, index) => (
                            <span
                              key={index}
                              className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-amber-100 text-amber-800"
                            >
                              {god}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Festivals */}
              <Card>
                <CardHeader>
                  <CardTitle>Festivals & Celebrations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Major Festivals:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {temple.pilgrimage.festivals.map((festival, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800"
                          >
                            {festival}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Best Time to Visit:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {temple.pilgrimage.season.map((season, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                          >
                            {season}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Festival Information:
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {temple.content.festivals}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Info */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Deity:</span>
                      <span className="font-medium">{temple.deity}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Category:</span>
                      <span className="font-medium">{temple.category}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Architecture:</span>
                      <span className="font-medium">
                        {temple.architecture.style}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Pilgrimage:</span>
                      <span className="font-medium text-amber-600">
                        {temple.pilgrimage.importance} Priority
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Visiting Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Visiting Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-amber-600 mr-3" />
                      <div>
                        <p className="font-medium">Timings:</p>
                        <p className="text-sm text-gray-600">
                          {temple.timings.morning} - {temple.timings.evening}
                        </p>
                        {temple.timings.specialDays && (
                          <p className="text-sm text-gray-600">
                            {temple.timings.specialDays}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-amber-600 mr-3" />
                      <div>
                        <p className="font-medium">Address:</p>
                        <p className="text-sm text-gray-600">
                          {temple.location.address}
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="font-medium mb-2">Accessibility:</p>
                      <p className="text-sm text-gray-600">
                        {temple.location.accessibility}
                      </p>
                    </div>
                    <div>
                      <p className="font-medium mb-2">Visiting Guidelines:</p>
                      <p className="text-sm text-gray-600">
                        {temple.content.visitingInfo}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Pilgrimage Importance */}
              <Card>
                <CardHeader>
                  <CardTitle>Pilgrimage Importance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-400 mr-3" />
                      <div>
                        <p className="font-medium">Priority Level:</p>
                        <p className="text-sm text-gray-600">
                          {temple.pilgrimage.importance} Priority Site
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="font-medium mb-2">Significance:</p>
                      <p className="text-sm text-gray-600">
                        {temple.content.significance}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Image Gallery */}
              <Card>
                <CardHeader>
                  <CardTitle>Image Gallery</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {temple.images.gallery.slice(0, 4).map((image, index) => (
                      <div
                        key={index}
                        className="relative h-24 rounded overflow-hidden"
                      >
                        <Image
                          src={image}
                          alt={`${temple.name} - Image ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
