'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Search,
  Phone,
  Mail,
  Globe,
  ChevronDown,
  Menu,
  X,
} from 'lucide-react';

const searchData = [
  { title: 'Home', href: '/' },
  { title: 'About Us', href: '/about' },
  { title: 'Services', href: '/services' },
  { title: 'Agricultural Research', href: '/services#research' },
  { title: 'Farm Mechanization', href: '/services#mechanization' },
  { title: 'On Farm Water Management', href: '/services#water' },
  { title: 'Extension & Adaptive Research', href: '/services#extension' },
  { title: 'Pest Warning & Control', href: '/services#pest' },
  { title: 'Economics & Marketing', href: '/services#marketing' },
  { title: 'Attached Departments', href: '/departments' },
  { title: 'Crop Reporting Service', href: '/departments#crs' },
  { title: 'Floriculture', href: '/departments#floriculture' },
  { title: 'Soil Survey', href: '/departments#soil' },
  { title: 'Agricultural Information', href: '/departments#info' },
  { title: 'Projects', href: '/projects' },
  { title: 'Oilseed Enhancement', href: '/projects#oilseed' },
  { title: 'Rice Productivity', href: '/projects#rice' },
  { title: 'Wheat Productivity', href: '/projects#wheat' },
  { title: 'Watercourses', href: '/projects#watercourses' },
  { title: 'Kissan Corner', href: '/kissan-corner' },
  { title: 'Contact', href: '/contact' },
];

const navItems = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About Us',
    href: '/about',
    children: [
      { label: 'Overview', href: '/about' },
      { label: 'Vision & Mission', href: '/about#vision' },
      { label: 'Core Team', href: '/about#core-team' },
    ],
  },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Agricultural Research', href: '/services#research' },
      { label: 'Farm Mechanization', href: '/services#mechanization' },
      { label: 'On Farm Water Management', href: '/services#water' },
      { label: 'Extension Services', href: '/services#extension' },
      { label: 'Pest Warning', href: '/services#pest' },
      { label: 'View All Services', href: '/services' },
    ],
  },
  {
    label: 'Attached Departments',
    href: '/departments',
    children: [
      { label: 'Crop Reporting Service', href: '/departments#crs' },
      { label: 'Economics & Marketing', href: '/departments#marketing' },
      { label: 'Floriculture', href: '/departments#floriculture' },
      { label: 'Soil Survey', href: '/departments#soil' },
      { label: 'Agricultural Information', href: '/departments#info' },
      { label: 'View All', href: '/departments' },
    ],
  },
  {
    label: 'Projects',
    href: '/projects',
    children: [
      { label: 'Oilseed Enhancement', href: '/projects#oilseed' },
      { label: 'Rice Productivity', href: '/projects#rice' },
      { label: 'Wheat Productivity', href: '/projects#wheat' },
      { label: 'Watercourses Phase-II', href: '/projects#watercourses' },
    ],
  },
  {
    label: 'Kissan Corner',
    href: '/kissan-corner',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<typeof searchData>([]);

  useEffect(() => {
    if (searchQuery.trim()) {
      const results = searchData.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-agri-green-dark text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a
              href="tel:+923001405070"
              className="flex items-center gap-1 hover:text-agri-yellow transition"
            >
              <Phone size={14} />
              <span>+92 3001405070</span>
            </a>
            <a
              href="mailto:Sharafatpbg@gmail.com"
              className="flex items-center gap-1 hover:text-agri-yellow transition hidden sm:flex"
            >
              <Mail size={14} />
              <span>Sharafatpbg@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-1 hover:text-agri-yellow transition"
            >
              <Search size={14} />
              <span className="hidden sm:inline">Search</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img src="/images/logo.png" alt="Agriculture Department" className="h-14 w-auto" />
            <div>
              <h1 className="text-agri-green font-bold text-lg leading-tight">
                Agriculture Department
              </h1>
              <p className="text-gray-500 text-xs">Farmers Welfare, Punjab</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-agri-green hover:bg-green-50 rounded-md transition"
                >
                  {item.label}
                  {item.children && <ChevronDown size={14} />}
                </Link>

                {item.children && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2 animate-fade-in-up">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-gray-600 hover:text-agri-green hover:bg-green-50 transition"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t bg-white">
            <nav className="max-w-7xl mx-auto px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    className="block px-3 py-2 text-gray-700 hover:text-agri-green hover:bg-green-50 rounded-md transition"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="pl-6 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-3 py-1.5 text-sm text-gray-500 hover:text-agri-green transition"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Search Modal */}
      {searchOpen && (
        <div className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-start justify-center pt-20 px-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-xl overflow-hidden animate-fade-in-up">
            <div className="flex items-center gap-3 p-4 border-b">
              <Search size={20} className="text-gray-400" />
              <input
                type="text"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search pages, services, departments..."
                className="flex-1 text-sm outline-none"
              />
              <button
                onClick={() => {
                  setSearchOpen(false);
                  setSearchQuery('');
                }}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={20} />
              </button>
            </div>
            <div className="max-h-80 overflow-y-auto">
              {searchQuery.trim() === '' ? (
                <div className="p-6 text-center text-gray-400 text-sm">
                  Type to search...
                </div>
              ) : searchResults.length === 0 ? (
                <div className="p-6 text-center text-gray-400 text-sm">
                  No results found
                </div>
              ) : (
                <div className="py-2">
                  {searchResults.map((result) => (
                    <Link
                      key={result.href}
                      href={result.href}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-green-50 transition"
                      onClick={() => {
                        setSearchOpen(false);
                        setSearchQuery('');
                      }}
                    >
                      <Search size={14} className="text-gray-300" />
                      <span className="text-sm text-gray-700">{result.title}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
