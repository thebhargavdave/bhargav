import React from 'react';
import { CV_DATA } from '../data/cvData';

interface ExecutivePortraitProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
}

export const ExecutivePortrait: React.FC<ExecutivePortraitProps> = ({
  className = '',
  size = 'hero',
}) => {
  const photoUrl = CV_DATA.personal.photoUrl;

  const dimensions = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-40 h-40',
    hero: 'w-64 h-80 sm:w-80 sm:h-96 lg:w-[340px] lg:h-[430px]',
  }[size];

  return (
    <div className={`relative group ${className}`}>
      {/* Outer subtle glow */}
      <div className="absolute -inset-1.5 bg-gradient-to-tr from-cyan-500/30 via-indigo-500/20 to-teal-400/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-700 pointer-events-none" />

      {/* Main Container */}
      <div
        className={`relative ${dimensions} rounded-3xl overflow-hidden border-2 border-slate-700/80 bg-slate-900 shadow-2xl flex items-center justify-center`}
      >
        <div className="relative w-full h-full bg-slate-900 overflow-hidden">
          <img
            src={photoUrl}
            alt="Bhargav R. Dave - Senior IT Executive & Assistant IT Manager"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
          />
          {/* Subtle bottom dark gradient overlay for executive prestige and text legibility */}
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent flex flex-col justify-end p-4 pointer-events-none">
            <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-semibold">
              Bhargav R. Dave
            </span>
            <span className="text-xs text-slate-300 font-medium">
              Senior IT Executive · Goenka Group
            </span>
          </div>
        </div>
      </div>

      {/* Floating Corner Badge: Availability */}
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-slate-900/95 border border-cyan-500/40 text-cyan-300 px-3.5 py-1 rounded-full text-xs font-medium shadow-lg backdrop-blur-md flex items-center gap-2 whitespace-nowrap">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
        </span>
        <span>Open for Senior IT Roles</span>
      </div>
    </div>
  );
};
