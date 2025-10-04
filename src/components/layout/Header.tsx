"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Temples",
    href: "/temples",
    children: [
      { name: "All Temples", href: "/temples" },
      { name: "Ancient Temples", href: "/temples?category=Ancient" },
      { name: "UNESCO Heritage", href: "/temples?category=UNESCO" },
      { name: "Pilgrimage Sites", href: "/temples?pilgrimage=High" },
    ],
  },
  {
    name: "States",
    href: "/states",
    children: [
      { name: "Punjab", href: "/temples?state=Punjab" },
      { name: "Uttar Pradesh", href: "/temples?state=Uttar Pradesh" },
      { name: "Tamil Nadu", href: "/temples?state=Tamil Nadu" },
      { name: "All States", href: "/states" },
    ],
  },
  { name: "Maps", href: "/maps" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="bg-white shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="flex flex-shrink-0 items-center">
              <Link href="/" className="text-2xl font-bold text-amber-600">
                Indian Temples Encyclopedia
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.children ? (
                    <div
                      className="flex items-center space-x-1 cursor-pointer"
                      onMouseEnter={() => setOpenDropdown(item.name)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <span className="text-gray-900 hover:text-amber-600 px-3 py-2 text-sm font-medium">
                        {item.name}
                      </span>
                      <ChevronDown className="h-4 w-4 text-gray-500" />
                      {openDropdown === item.name && (
                        <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-gray-900 hover:text-amber-600 px-3 py-2 text-sm font-medium"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Button>Explore Temples</Button>
          </div>
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-500"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden">
          <div className="space-y-1 pb-3 pt-2">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.children ? (
                  <div>
                    <div className="text-gray-900 block px-3 py-2 text-base font-medium">
                      {item.name}
                    </div>
                    <div className="pl-6 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-900 hover:text-gray-600 block px-3 py-2 text-base font-medium"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
          <div className="border-t border-gray-200 pb-3 pt-4">
            <div className="px-3">
              <Button className="w-full">Explore Temples</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
