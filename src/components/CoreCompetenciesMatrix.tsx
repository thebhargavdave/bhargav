import React, { useState } from 'react';
import { CV_DATA } from '../data/cvData';
import { 
  Network, 
  Terminal, 
  Globe2, 
  Code2, 
  Database, 
  Layers, 
  Video, 
  Mail, 
  Search,
  CheckCircle,
  Cpu
} from 'lucide-react';

export const CoreCompetenciesMatrix: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categoryIcons: Record<string, React.ReactNode> = {
    'Networking & Infrastructure': <Network className="w-4 h-4 text-cyan-400" />,
    'Systems Administration': <Terminal className="w-4 h-4 text-emerald-400" />,
    'Web & Hosting Operations': <Globe2 className="w-4 h-4 text-indigo-400" />,
    'Web Development & Software QA': <Code2 className="w-4 h-4 text-sky-400" />,
    'Database & Service Monitoring': <Database className="w-4 h-4 text-amber-400" />,
    'Institutional & Enterprise Applications': <Layers className="w-4 h-4 text-purple-400" />,
    'CCTV, Surveillance & Security': <Video className="w-4 h-4 text-rose-400" />,
    'Email & Telecommunications': <Mail className="w-4 h-4 text-teal-400" />,
  };

  const categories = ['All', ...CV_DATA.technicalSkills.map((c) => c.category)];

  const filteredSkillCategories = CV_DATA.technicalSkills
    .filter((cat) => selectedCategory === 'All' || cat.category === selectedCategory)
    .map((cat) => {
      const filteredSkills = cat.skills.filter((skill) =>
        skill.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cat.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      return { ...cat, skills: filteredSkills };
    })
    .filter((cat) => cat.skills.length > 0);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-900">
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
          <span>Technical Architecture</span>
          <span aria-hidden="true">·</span>
          <span>Core Capabilities</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Core Competencies & Technical Stack
        </h2>
        <p className="mt-3 text-base text-slate-400 leading-relaxed">
          Comprehensive skill matrix spanning enterprise campus networks, server systems, cPanel/IIS web deployments, automated databases, CCTV, and institutional ERP platforms.
        </p>
      </div>

      {/* 12 Core Competencies Grid */}
      <div className="mb-14">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4 flex items-center gap-2">
          <Cpu className="w-4 h-4 text-cyan-400" />
          Primary Operational Competencies
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {CV_DATA.coreCompetencies.map((comp, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-slate-900 border border-slate-800/80 hover:border-cyan-500/40 transition-colors flex items-start gap-3"
            >
              <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400 mt-0.5 shrink-0">
                <CheckCircle className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-medium text-slate-200 leading-snug">
                  {comp}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Skills Deep Dive Section */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <h3 className="text-lg font-bold text-white tracking-tight">
              Detailed Skill Taxonomy
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Filter by engineering domain or search specific protocols, tools, or hardware.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search e.g. VLAN, cPanel, Wi-Fi..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 transition"
            />
          </div>
        </div>

        {/* Category Pills/Tabs */}
        <div className="flex items-center gap-1.5 py-4 overflow-x-auto no-scrollbar">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/40'
                  : 'text-slate-400 hover:text-white bg-slate-900 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Categories Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          {filteredSkillCategories.map((catGroup, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition"
            >
              <div className="flex items-center gap-2.5 pb-3 border-b border-slate-800/80 mb-3">
                <div className="p-2 rounded-lg bg-slate-800">
                  {categoryIcons[catGroup.category] || <Cpu className="w-4 h-4 text-cyan-400" />}
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider truncate">
                    {catGroup.category}
                  </h4>
                  <p className="text-[11px] text-slate-400 truncate">
                    {catGroup.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {catGroup.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-800/90 text-slate-300 border border-slate-700/60 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {filteredSkillCategories.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-sm text-slate-400">
              No skills found matching "{searchQuery}".
            </p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="mt-3 text-xs text-cyan-400 hover:underline cursor-pointer"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
