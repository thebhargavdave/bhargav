import React from 'react';
import { CV_DATA } from '../data/cvData';
import { ExecutivePortrait } from './ExecutivePortrait';
import { 
  Phone, 
  Mail, 
  Github, 
  MapPin, 
  FileText, 
  ArrowRight 
} from 'lucide-react';

interface HeroSectionProps {
  onOpenResumeModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenResumeModal,
}) => {
  return (
    <section className="relative pt-8 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Hero Split Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center pt-6 pb-12">
        {/* Left Column: Typographic Hierarchy */}
        <div className="lg:col-span-7 space-y-6">
          {/* Quiet Unboxed Metadata Kicker (Anti-slop compliant: no pill boxes) */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
            <span>Senior IT Executive</span>
            <span aria-hidden="true">·</span>
            <span>Assistant IT Manager</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-400">Goenka Group</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08] text-balance">
              BHARGAV R. DAVE
            </h1>
            <p className="text-lg sm:text-xl font-medium text-slate-300 tracking-tight">
              IT Infrastructure, Campus Networks & Digital Operations Specialist
            </p>
          </div>

          {/* Lead Summary */}
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl">
            Experienced IT professional directing multi-site IT operations across healthcare facilities, higher educational institutions, and manufacturing plants. Specialist in high-density campus Wi-Fi, cPanel and Windows IIS web hosting, software testing, automated database backups, CCTV surveillance, and end-user computing.
          </p>

          {/* Fast Contact & Identity Ribbon */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs text-slate-300 font-mono">
            <a
              href={`tel:${CV_DATA.personal.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition"
            >
              <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>{CV_DATA.personal.phone}</span>
            </a>

            <a
              href={`mailto:${CV_DATA.personal.primaryEmail}`}
              className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition truncate"
            >
              <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
              <span className="truncate">{CV_DATA.personal.primaryEmail}</span>
            </a>

            <a
              href={CV_DATA.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition truncate"
            >
              <Github className="w-4 h-4 text-cyan-400 shrink-0" />
              <span className="truncate">github.com/{CV_DATA.personal.githubUsername}</span>
            </a>

            <a
              href={CV_DATA.personal.orcidUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-[#A6CE39]/50 transition truncate group"
              title="Verified ORCID Researcher ID"
            >
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 256 256" fill="none">
                <path fill="#A6CE39" d="M256,128c0,70.7-57.3,128-128,128C57.3,256,0,198.7,0,128C0,57.3,57.3,0,128,0C198.7,0,256,57.3,256,128z"/>
                <g fill="#FFF">
                  <path d="M86.3,186.2H70.9V79.1h15.4V186.2z"/>
                  <path d="M108.9,79.1h41.6c39.6,0,57,28.3,57,53.6c0,27.5-21.5,53.6-56.8,53.6h-41.8V79.1z M124.3,92.4v80.5h24.5c34.9,0,43.3-25.2,43.3-40.2c0-26.1-15.5-40.2-43.3-40.2H124.3z"/>
                  <circle cx="78.6" cy="52.5" r="9.3"/>
                </g>
              </svg>
              <span className="truncate group-hover:text-[#A6CE39] transition-colors">ORCID: {CV_DATA.personal.orcid}</span>
            </a>

            <div className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-900/60 border border-slate-800 font-sans text-slate-400">
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Gujarat, India · On-Site & Hybrid</span>
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-4">
            <button
              onClick={onOpenResumeModal}
              type="button"
              className="px-6 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs sm:text-sm flex items-center gap-2 transition shadow-lg shadow-cyan-400/20 cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>Download Executive CV</span>
            </button>

            <a
              href="#infrastructure"
              className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-semibold text-xs sm:text-sm flex items-center gap-2 transition cursor-pointer"
            >
              <span>Explore Multi-Site Infrastructure</span>
              <ArrowRight className="w-4 h-4 text-cyan-400" />
            </a>
          </div>
        </div>

        {/* Right Column: Executive Portrait Card */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <ExecutivePortrait size="hero" />
        </div>
      </div>

      {/* Full-Width 4-Column KPI Strip (Adheres to Section 2.B: metrics strip below the hero split) */}
      <div className="mt-8 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {CV_DATA.keyMetrics.map((kpi, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition"
          >
            <div className="text-2xl sm:text-3xl font-black text-white tracking-tight font-mono tabular-nums text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-200">
              {kpi.value}
            </div>
            <div className="text-xs font-semibold text-slate-200 mt-1 uppercase tracking-wide">
              {kpi.label}
            </div>
            <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">
              {kpi.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
