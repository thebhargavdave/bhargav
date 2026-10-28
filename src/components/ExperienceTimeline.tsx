import React, { useState } from 'react';
import { CV_DATA, ExperienceItem } from '../data/cvData';
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp, CheckCircle2, Shield, Wrench } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'goenka' | 'lt' | 'roots'>('all');
  const [expandedId, setExpandedId] = useState<string>('goenka-group');

  const filteredExperiences = CV_DATA.experiences.filter((exp) => {
    if (filter === 'all') return true;
    if (filter === 'goenka') return exp.id === 'goenka-group';
    if (filter === 'lt') return exp.id.startsWith('lt-');
    if (filter === 'roots') return exp.id === 'rk-computer';
    return true;
  });

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-900">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
            <span>Career Milestones</span>
            <span aria-hidden="true">·</span>
            <span>6+ Years Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional Experience & Career History
          </h2>
          <p className="mt-3 text-base text-slate-400 leading-relaxed">
            Progressive trajectory across enterprise conglomerate IT operations, nationwide infrastructure projects with Larsen & Toubro, and system engineering.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl self-start md:self-auto overflow-x-auto max-w-full">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              filter === 'all'
                ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            All Experience ({CV_DATA.experiences.length})
          </button>
          <button
            onClick={() => setFilter('goenka')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              filter === 'goenka'
                ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Goenka Group
          </button>
          <button
            onClick={() => setFilter('lt')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              filter === 'lt'
                ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            L&T Projects
          </button>
          <button
            onClick={() => setFilter('roots')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              filter === 'roots'
                ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Foundations
          </button>
        </div>
      </div>

      {/* Timeline List */}
      <div className="relative pl-6 sm:pl-8 border-l border-slate-800 space-y-12">
        {filteredExperiences.map((exp, index) => {
          const isExpanded = expandedId === exp.id;
          return (
            <div key={exp.id} className="relative group">
              {/* Timeline Node Dot */}
              <div 
                className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 transition duration-300 ${
                  exp.isCurrent
                    ? 'bg-cyan-400 border-slate-950 shadow-md shadow-cyan-400/50'
                    : 'bg-slate-800 border-slate-600 group-hover:border-cyan-400'
                }`}
              />

              {/* Card Container */}
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800/80 shadow-xl transition-all duration-300 hover:border-slate-700">
                {/* Top Role & Company Header */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 mb-1.5">
                      <span className="font-semibold text-cyan-400">{exp.company}</span>
                      {exp.subEntity && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span className="text-slate-300">{exp.subEntity}</span>
                        </>
                      )}
                      {exp.isCurrent && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          Current Role
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {exp.role}
                    </h3>
                  </div>

                  {/* Date & Location */}
                  <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-2 sm:gap-1 text-xs text-slate-400 shrink-0">
                    <div className="flex items-center gap-1.5 font-mono">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Summary Prose */}
                <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                  {exp.summary}
                </p>

                {/* Highlights (Expandable) */}
                <div className="mt-6">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 mb-3">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Key Responsibilities & Deliverables ({exp.highlights.length})
                    </h4>
                    <button
                      onClick={() => setExpandedId(isExpanded ? '' : exp.id)}
                      className="text-xs text-cyan-400 hover:text-cyan-300 flex items-center gap-1 cursor-pointer"
                    >
                      <span>{isExpanded ? 'Collapse' : 'Show All'}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  <ul className="space-y-2.5">
                    {(isExpanded ? exp.highlights : exp.highlights.slice(0, 4)).map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {!isExpanded && exp.highlights.length > 4 && (
                    <button
                      onClick={() => setExpandedId(exp.id)}
                      className="mt-3 text-xs font-medium text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <span>+ {exp.highlights.length - 4} more detailed responsibilities</span>
                    </button>
                  )}
                </div>

                {/* Technologies / Systems Handled */}
                <div className="mt-6 pt-5 border-t border-slate-800/80">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs text-slate-400 mr-1">Systems:</span>
                    {exp.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs font-mono text-slate-300 bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
