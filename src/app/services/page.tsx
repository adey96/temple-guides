import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Clock, Users, CheckCircle, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import Card, {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Our Services - Temple Guides",
  description:
    "Explore our range of temple tour services including guided tours, cultural experiences, educational programs, and custom tours across India's sacred sites.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-50 to-orange-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Our Services
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of temple tour services designed
              to provide authentic, educational, and spiritually meaningful
              experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {services.map((service) => (
              <Card
                key={service.id}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-64">
                  <Image
                    src={service.images[0]}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Features */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">
                        What's Included:
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Details */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 text-amber-600 mr-2" />
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            Duration
                          </p>
                          <p className="text-sm text-gray-600">
                            {service.duration}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-5 w-5 text-amber-600 mr-2" />
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            Group Size
                          </p>
                          <p className="text-sm text-gray-600">
                            {service.groupSize.min}-{service.groupSize.max}{" "}
                            people
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Pricing:
                      </h4>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <p className="text-gray-600">Individual</p>
                          <p className="font-semibold text-gray-900">
                            ${service.pricing.individual}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-600">Group</p>
                          <p className="font-semibold text-gray-900">
                            ${service.pricing.group}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-600">Private</p>
                          <p className="font-semibold text-gray-900">
                            ${service.pricing.private}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Includes/Excludes */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          Includes:
                        </h4>
                        <ul className="space-y-1">
                          {service.includes.map((item, index) => (
                            <li
                              key={index}
                              className="text-sm text-gray-600 flex items-center"
                            >
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          Excludes:
                        </h4>
                        <ul className="space-y-1">
                          {service.excludes.map((item, index) => (
                            <li key={index} className="text-sm text-gray-600">
                              • {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex gap-3">
                      <Button className="flex-1">Book This Service</Button>
                      <Button variant="outline" className="flex-1">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Why Choose Our Services?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              What makes our temple tour services special
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
                <CheckCircle className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                Expert Guidance
              </h3>
              <p className="mt-2 text-gray-600">
                Our guides are carefully selected for their deep knowledge of
                temple traditions, cultural sensitivity, and ability to create
                meaningful connections.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
                <Users className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                Small Groups
              </h3>
              <p className="mt-2 text-gray-600">
                We keep our groups small to ensure personalized attention and
                intimate experiences that respect the sacred nature of temple
                visits.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
                <Clock className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                Flexible Scheduling
              </h3>
              <p className="mt-2 text-gray-600">
                We offer tours throughout the day and can accommodate special
                requests to ensure your visit fits perfectly with your travel
                plans.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              How It Works
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Simple steps to book your perfect temple tour experience
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-600 text-white font-bold text-lg">
                1
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Choose Your Service
              </h3>
              <p className="mt-2 text-gray-600">
                Browse our services and select the one that matches your
                interests and schedule.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-600 text-white font-bold text-lg">
                2
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Book Online
              </h3>
              <p className="mt-2 text-gray-600">
                Use our simple booking system to reserve your spot and provide
                any special requirements.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-600 text-white font-bold text-lg">
                3
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Meet Your Guide
              </h3>
              <p className="mt-2 text-gray-600">
                Arrive at the designated meeting point where your expert guide
                will welcome you.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-600 text-white font-bold text-lg">
                4
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Enjoy Your Experience
              </h3>
              <p className="mt-2 text-gray-600">
                Immerse yourself in authentic temple culture and create lasting
                memories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-amber-600 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Book Your Temple Tour?
            </h2>
            <p className="mt-4 text-lg text-amber-100">
              Choose from our range of services and start your spiritual journey
              today
            </p>
            <div className="mt-8 flex justify-center gap-x-6">
              <Link
                href="/tours"
                className="inline-flex items-center rounded-md bg-white px-6 py-3 text-base font-medium text-amber-600 shadow-sm hover:bg-gray-50"
              >
                View All Tours
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-md border border-white px-6 py-3 text-base font-medium text-white hover:bg-white hover:text-amber-600"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
