import Link from 'next/link';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Attached Departments', href: '/departments' },
  { label: 'Projects', href: '/projects' },
  { label: 'Kissan Corner', href: '/kissan-corner' },
];

const departments = [
  { label: 'Crop Reporting Service', href: '#' },
  { label: 'Economics & Marketing', href: '#' },
  { label: 'Floriculture', href: '#' },
  { label: 'Soil Survey of Punjab', href: '#' },
  { label: 'Agricultural Information', href: '#' },
  { label: 'Pest Warning & Quality Control', href: '#' },
  { label: 'On Farm Water Management', href: '#' },
  { label: 'AARI', href: '#' },
];

const services = [
  { label: 'Agricultural Research', href: '/services' },
  { label: 'Farm Mechanization', href: '/services' },
  { label: 'Water Management', href: '/services' },
  { label: 'Extension Services', href: '/services' },
  { label: 'Pest Warning Services', href: '/services' },
  { label: 'Seed Testing', href: '/services' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src="/images/logo.png" alt="Agriculture Department" className="h-10 w-auto" />
            <div>
              <h3 className="text-white font-bold text-sm">Agriculture Department</h3>
              <p className="text-gray-400 text-xs">Farmers Welfare, Punjab</p>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-gray-400 mb-4">
            Agriculture is the mainstay of Pakistan&apos;s economy. The Punjab Agriculture Department
            is committed to sustaining food security and supporting the national economy.
          </p>
          <div className="space-y-2 text-sm">
            <a href="tel:+923001405070" className="flex items-center gap-2 hover:text-agri-yellow transition">
              <Phone size={14} />
              <span>+92 3001405070</span>
            </a>
            <a href="mailto:Sharafatpbg@gmail.com" className="flex items-center gap-2 hover:text-agri-yellow transition">
              <Mail size={14} />
              <span>Sharafatpbg@gmail.com</span>
            </a>
            <div className="flex items-start gap-2">
              <MapPin size={14} className="mt-0.5 shrink-0" />
              <span>21-Court Road, Lahore, Punjab, Pakistan</span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-sm hover:text-agri-yellow transition flex items-center gap-1">
                  <span className="text-agri-green">›</span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Attached Departments */}
        <div>
          <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Attached Departments</h3>
          <ul className="space-y-2">
            {departments.map((dept) => (
              <li key={dept.label}>
                <a href={dept.href} className="text-sm hover:text-agri-yellow transition flex items-center gap-1">
                  <ExternalLink size={10} className="text-gray-500" />
                  {dept.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Our Services</h3>
          <ul className="space-y-2">
            {services.map((svc) => (
              <li key={svc.label}>
                <Link href={svc.href} className="text-sm hover:text-agri-yellow transition flex items-center gap-1">
                  <span className="text-agri-green">›</span>
                  {svc.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500">
          <p>© 2026 Agriculture Department, Mian Sharafat Ali. All rights reserved.</p>
          <div className="flex items-center gap-4 mt-2 sm:mt-0">
            <a href="#" className="hover:text-agri-yellow transition">Privacy Policy</a>
            <a href="#" className="hover:text-agri-yellow transition">Terms of Use</a>
            <a href="#" className="hover:text-agri-yellow transition">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
