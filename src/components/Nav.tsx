import { useState } from 'react';

const links = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 transition-all duration-300 shadow-[0_2px_4px_rgba(34,115,243,0.1)] bg-bg">
      <nav className="max-w-5xl mx-auto h-16 flex items-center justify-between px-4">
        <a href="#">
          <img src="/assets/logos/SL-logo.png" alt="SL Logo" className="h-12 w-12" />
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8">
          {links.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className="text-sm text-[#888] hover:text-[#f0f0f0] transition-colors duration-200">
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger button */}
        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 group"
        >
          <span
            className={`block h-0.5 w-6 bg-[#888] transition-all duration-300 origin-center ${
              open ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-[#888] transition-all duration-300 ${open ? 'opacity-0 scale-x-0' : ''}`}
          />
          <span
            className={`block h-0.5 w-6 bg-[#888] transition-all duration-300 origin-center ${
              open ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-64 border-t border-accent-1/20' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col px-4 py-3 gap-4">
          {links.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => setOpen(false)}
                className="block text-lg font-medium text-[#888] hover:text-[#f0f0f0] transition-colors duration-200"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
