import { Metadata } from "next";
import Image from "next/image";
import { Users, Award, Globe, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us - Temple Guides",
  description:
    "Learn about Temple Guides - expert cultural heritage tour guides dedicated to providing authentic temple experiences and spiritual journeys across India.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-50 to-orange-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              About Temple Guides
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              We are passionate about sharing India's rich cultural heritage
              through authentic temple experiences that connect visitors with
              the spiritual essence of our ancient traditions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Our Mission
              </h2>
              <p className="mt-6 text-lg text-gray-600">
                At Temple Guides, we believe that temples are not just
                architectural marvels but living repositories of culture,
                spirituality, and community. Our mission is to provide
                authentic, respectful, and educational experiences that help
                visitors understand and appreciate the deep cultural
                significance of India's sacred sites.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                We are committed to preserving and sharing the stories,
                traditions, and wisdom that have been passed down through
                generations, ensuring that these sacred spaces continue to
                inspire and educate people from around the world.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/about-mission.jpg"
                alt="Temple Guides team with visitors"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Our Values
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-amber-100">
                <Heart className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Respect
              </h3>
              <p className="mt-2 text-gray-600">
                We approach every temple and tradition with deep respect and
                reverence
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-amber-100">
                <Users className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Authenticity
              </h3>
              <p className="mt-2 text-gray-600">
                We provide genuine experiences that honor local traditions and
                customs
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-amber-100">
                <Award className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Excellence
              </h3>
              <p className="mt-2 text-gray-600">
                We maintain the highest standards in all our tours and services
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-amber-100">
                <Globe className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Cultural Bridge
              </h3>
              <p className="mt-2 text-gray-600">
                We connect people across cultures through shared spiritual
                experiences
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Our Expert Team
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Meet the passionate guides who make our tours unforgettable
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto h-32 w-32 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-600">PS</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Dr. Priya Sharma
              </h3>
              <p className="mt-2 text-amber-600">Lead Cultural Guide</p>
              <p className="mt-2 text-gray-600">
                PhD in Indian History with 15 years of experience in temple
                tours and cultural education.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto h-32 w-32 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-600">RK</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Rajesh Kumar
              </h3>
              <p className="mt-2 text-amber-600">Senior Temple Guide</p>
              <p className="mt-2 text-gray-600">
                Expert in Hindu traditions and temple rituals with deep
                knowledge of Varanasi and South India.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto h-32 w-32 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-600">SJ</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Sarah Johnson
              </h3>
              <p className="mt-2 text-amber-600">
                Cultural Experience Coordinator
              </p>
              <p className="mt-2 text-gray-600">
                Specializes in creating authentic cultural experiences and
                educational programs for international visitors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative">
              <Image
                src="/images/about-story.jpg"
                alt="Temple Guides founding story"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Our Story
              </h2>
              <p className="mt-6 text-lg text-gray-600">
                Temple Guides was founded in 2018 by a group of passionate
                cultural enthusiasts who recognized the need for authentic,
                respectful temple tour experiences. What started as a small
                initiative to help visitors understand temple traditions has
                grown into a trusted name in cultural heritage tourism.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Our founders, Dr. Priya Sharma and Rajesh Kumar, combined their
                academic expertise in Indian history and their deep personal
                connection to temple traditions to create tours that are both
                educational and spiritually meaningful.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Today, we work with over 50 expert guides across India, each
                carefully selected for their knowledge, respect for traditions,
                and ability to create meaningful connections between visitors
                and the sacred sites they explore.
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
              Ready to Experience Our Expertise?
            </h2>
            <p className="mt-4 text-lg text-amber-100">
              Join thousands of satisfied visitors who have discovered India's
              sacred heritage with us
            </p>
            <div className="mt-8 flex justify-center gap-x-6">
              <a
                href="/tours"
                className="inline-flex items-center rounded-md bg-white px-6 py-3 text-base font-medium text-amber-600 shadow-sm hover:bg-gray-50"
              >
                Explore Our Tours
              </a>
              <a
                href="/contact"
                className="inline-flex items-center rounded-md border border-white px-6 py-3 text-base font-medium text-white hover:bg-white hover:text-amber-600"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
