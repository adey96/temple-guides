import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const footerLinks = {
  temples: [
    { name: "All Temples", href: "/temples" },
    { name: "Ancient Temples", href: "/temples?category=Ancient" },
    { name: "UNESCO Heritage", href: "/temples?category=UNESCO" },
    { name: "Pilgrimage Sites", href: "/temples?pilgrimage=High" },
  ],
  states: [
    { name: "Punjab", href: "/temples?state=Punjab" },
    { name: "Uttar Pradesh", href: "/temples?state=Uttar Pradesh" },
    { name: "Tamil Nadu", href: "/temples?state=Tamil Nadu" },
    { name: "All States", href: "/states" },
  ],
  resources: [
    { name: "Blog", href: "/blog" },
    { name: "Temple Histories", href: "/blog/category/temple-histories" },
    { name: "Architecture", href: "/blog/category/architecture" },
    { name: "Mythology", href: "/blog/category/mythology" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold text-amber-400">
                Indian Temples Encyclopedia
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Comprehensive information about temples across India. Discover
              their history, architecture, mythological significance, and
              pilgrimage importance.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="h-5 w-5 text-amber-400" />
                <span>123 Heritage Street, Delhi, India</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="h-5 w-5 text-amber-400" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="h-5 w-5 text-amber-400" />
                <span>info@templeguides.com</span>
              </div>
            </div>
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="text-gray-400 hover:text-amber-400 transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-amber-400 transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-amber-400 transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Temples */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Temples</h3>
            <ul className="space-y-2">
              {footerLinks.temples.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-amber-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* States */}
          <div>
            <h3 className="text-lg font-semibold mb-4">States</h3>
            <ul className="space-y-2">
              {footerLinks.states.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-amber-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-amber-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2024 Temple Guides. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-amber-400 text-sm transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
