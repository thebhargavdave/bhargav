import React from 'react';
import { CV_DATA } from '../data/cvData';
import { GraduationCap, Award, Compass, CheckCircle2, ShieldCheck } from 'lucide-react';

export const EducationAndStrengths: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-900">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Education Credentials (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
            <span>Academic Credentials</span>
            <span aria-hidden="true">·</span>
            <span>Technical Foundation</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Education & Certifications
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            Formal engineering grounding in Computer Engineering from Gujarat Technological University (GTU), establishing comprehensive networking, operating systems, and software engineering capabilities.
          </p>

          <div className="space-y-4 pt-2">
            {CV_DATA.education.map((edu, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-md relative overflow-hidden"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                    {edu.year}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mt-4 tracking-tight">
                  {edu.degree}
                </h3>
                <p className="text-xs text-slate-300 font-medium mt-1">
                  {edu.institution}
                </p>
                <p className="text-xs text-cyan-400 mt-0.5">
                  {edu.affiliation} · {edu.location}
                </p>
                <p className="text-xs text-slate-400 mt-3 leading-relaxed border-t border-slate-800/80 pt-3">
                  {edu.highlights}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Strengths & Execution Mindset (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
            <span>Leadership & Operations</span>
            <span aria-hidden="true">·</span>
            <span>Professional Strengths</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Operational Strengths & Leadership
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            Proven competencies developed across real-world multi-site hospital, collegiate, factory, and construction environments.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {CV_DATA.strengths.map((strength, sIdx) => (
              <div
                key={sIdx}
                className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition"
              >
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                  <h4 className="text-sm font-bold text-white tracking-tight">
                    {strength.title}
                  </h4>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {strength.description}
                </p>
              </div>
            ))}
          </div>

          {/* Quick Managerial Value Statement */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-slate-900 to-slate-900 border border-cyan-500/20">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-cyan-300 mb-1">
              Target Career Role
            </h4>
            <p className="text-sm font-semibold text-white">
              Senior IT Executive / Assistant IT Manager
            </p>
            <p className="text-xs text-slate-400 mt-1">
              Bringing cross-domain resilience, vendor negotiation acumen, and proactive preventive maintenance to drive 24/7 business uptime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
