import { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us - Temple Guides",
  description:
    "Get in touch with Temple Guides for temple tours, cultural experiences, and spiritual journeys. Contact us for bookings and inquiries.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-amber-600 to-orange-600 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Contact Us
            </h1>
            <p className="mt-4 text-xl text-amber-100">
              Ready to begin your spiritual journey? Get in touch with our
              expert team.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-amber-100">
                <MapPin className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Visit Us
              </h3>
              <p className="mt-2 text-gray-600">
                123 Heritage Street
                <br />
                Delhi, India 110001
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-amber-100">
                <Phone className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Call Us
              </h3>
              <p className="mt-2 text-gray-600">
                +91 98765 43210
                <br />
                +91 98765 43211
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-amber-100">
                <Mail className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                Email Us
              </h3>
              <p className="mt-2 text-gray-600">
                info@templeguides.com
                <br />
                bookings@templeguides.com
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Send us a Message
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Have questions about our temple tours? Want to book a custom
                experience? Fill out the form below and we'll get back to you
                within 24 hours.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                  Office Hours
                </h3>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-amber-600 mr-3" />
                    <span className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-amber-600 mr-3" />
                    <span className="text-gray-600">
                      Saturday: 10:00 AM - 4:00 PM
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-amber-600 mr-3" />
                    <span className="text-gray-600">Sunday: Closed</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                  Emergency Contact
                </h3>
                <p className="mt-4 text-gray-600">
                  For urgent matters or last-minute bookings, please call our
                  emergency line:
                </p>
                <p className="mt-2 text-lg font-semibold text-amber-600">
                  +91 98765 43212
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                  Quick Response
                </h3>
                <p className="mt-4 text-gray-600">
                  We typically respond to all inquiries within 24 hours. For
                  faster response, please call us directly during business
                  hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Quick answers to common questions about our temple tours
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                How far in advance should I book?
              </h3>
              <p className="mt-2 text-gray-600">
                We recommend booking at least 48 hours in advance, especially
                for popular tours. However, we can often accommodate same-day
                bookings for smaller groups.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                What should I wear for temple tours?
              </h3>
              <p className="mt-2 text-gray-600">
                Modest clothing is required. We recommend covering shoulders and
                knees. Some temples provide head coverings, but it's good to
                bring your own scarf.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Are tours available in multiple languages?
              </h3>
              <p className="mt-2 text-gray-600">
                Yes! Our guides speak English, Hindi, and several regional
                languages. Please specify your language preference when booking.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Can I customize a tour?
              </h3>
              <p className="mt-2 text-gray-600">
                Absolutely! We offer custom tours tailored to your interests,
                schedule, and group size. Contact us to discuss your specific
                requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
