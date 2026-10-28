import React from 'react';
import { FileText, Menu, X } from 'lucide-react';
import { CV_DATA } from '../data/cvData';

interface NavbarProps {
  onOpenResumeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResumeModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 no-print">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 lg:px-8 py-3.5">
        {/* Zone 1: Single text element wordmark with avatar */}
        <a 
          href="#" 
          className="text-base sm:text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 flex items-center gap-3"
        >
          <img
            src={CV_DATA.personal.photoUrl}
            alt="Bhargav R. Dave"
            className="w-8 h-8 rounded-full object-cover object-top border border-cyan-400/50 shadow-xs shrink-0"
          />
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            <span>BHARGAV R. DAVE</span>
          </div>
        </a>

        {/* Zone 2: 4–5 concise single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-medium text-slate-300">
          <a href="#experience" className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0">
            Experience
          </a>
          <a href="#infrastructure" className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0">
            Infrastructure
          </a>
          <a href="#skills" className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0">
            Technical Skills
          </a>
          <a href="#github" className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0">
            GitHub & Web
          </a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0">
            Contact
          </a>
        </nav>

        {/* Zone 3: 1 primary action button */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenResumeModal}
            type="button"
            className="px-4 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition shadow-md shadow-cyan-400/20 whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Download CV</span>
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenResumeModal}
            type="button"
            className="px-3 py-1.5 text-xs font-semibold text-slate-950 bg-cyan-400 rounded-lg whitespace-nowrap"
          >
            CV
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white rounded-lg hover:bg-slate-900"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 bg-slate-950 border-b border-slate-800 space-y-2 text-sm font-medium">
          <a
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-300 hover:text-cyan-400"
          >
            Experience
          </a>
          <a
            href="#infrastructure"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-300 hover:text-cyan-400"
          >
            Infrastructure
          </a>
          <a
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-300 hover:text-cyan-400"
          >
            Technical Skills
          </a>
          <a
            href="#github"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-300 hover:text-cyan-400"
          >
            GitHub & Web
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-300 hover:text-cyan-400"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
};
