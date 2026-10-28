import React from 'react';
import { CV_DATA } from '../data/cvData';
import { ArrowUp, Github, Mail, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-slate-950 border-t border-slate-900 py-12 px-4 sm:px-6 lg:px-8 no-print">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-sm font-bold text-white tracking-tight">
            BHARGAV R. DAVE
          </span>
          <p className="text-xs text-slate-400 mt-1">
            Senior IT Executive | Assistant IT Manager | IT Infrastructure & Digital Operations
          </p>
        </div>

        <div className="flex items-center gap-6 text-xs text-slate-400">
          <a
            href={`tel:${CV_DATA.personal.phone.replace(/\s+/g, '')}`}
            className="hover:text-cyan-400 transition"
          >
            {CV_DATA.personal.phone}
          </a>
          <a
            href={`mailto:${CV_DATA.personal.primaryEmail}`}
            className="hover:text-cyan-400 transition"
          >
            {CV_DATA.personal.primaryEmail}
          </a>
          <a
            href={CV_DATA.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            GitHub
          </a>
          <a
            href={CV_DATA.personal.orcidUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#A6CE39] transition"
          >
            ORCID
          </a>
        </div>

        <button
          onClick={scrollToTop}
          className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition cursor-pointer flex items-center gap-1.5 text-xs"
          aria-label="Back to top"
        >
          <span>Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
