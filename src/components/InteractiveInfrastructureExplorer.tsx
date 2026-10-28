import React, { useState } from 'react';
import { CV_DATA, SiteNode } from '../data/cvData';
import { 
  Building2, 
  Activity, 
  GraduationCap, 
  Factory, 
  Server, 
  Wifi, 
  ShieldCheck, 
  Globe, 
  HardDrive, 
  Database,
  Cpu,
  ArrowRight
} from 'lucide-react';

export const InteractiveInfrastructureExplorer: React.FC = () => {
  const [activeSiteId, setActiveSiteId] = useState<string>('goenka-hospital');

  const activeSite = CV_DATA.goenkaSites.find((s) => s.id === activeSiteId) || CV_DATA.goenkaSites[0];

  const getSiteIcon = (sector: string) => {
    if (sector.includes('Healthcare')) return <Activity className="w-5 h-5 text-rose-400" />;
    if (sector.includes('Dental')) return <Activity className="w-5 h-5 text-cyan-400" />;
    if (sector.includes('Education') || sector.includes('Academic')) return <GraduationCap className="w-5 h-5 text-indigo-400" />;
    if (sector.includes('Manufacturing') || sector.includes('Industrial')) return <Factory className="w-5 h-5 text-amber-400" />;
    return <Building2 className="w-5 h-5 text-emerald-400" />;
  };

  return (
    <section id="infrastructure" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="max-w-3xl mb-12">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
          <span>Multi-Site IT Architecture</span>
          <span aria-hidden="true">·</span>
          <span>Goenka Group Ecosystem</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Enterprise Infrastructure & Operations Matrix
        </h2>
        <p className="mt-3 text-base text-slate-400 leading-relaxed">
          Interactive architecture of the healthcare facilities, academic institutions, and manufacturing plants managed by Bhargav R. Dave. Click each site to inspect technical systems, networks, and operational protocols.
        </p>
      </div>

      {/* Main Interactive Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Site Selector Tabs */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-1">
            Active Multi-Site Facilities ({CV_DATA.goenkaSites.length})
          </p>
          <div className="flex flex-col gap-2.5">
            {CV_DATA.goenkaSites.map((site) => {
              const isActive = site.id === activeSiteId;
              return (
                <button
                  key={site.id}
                  onClick={() => setActiveSiteId(site.id)}
                  type="button"
                  className={`text-left p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex items-center justify-between ${
                    isActive
                      ? 'bg-slate-900 border-cyan-500 shadow-lg shadow-cyan-500/10 ring-1 ring-cyan-500/30'
                      : 'bg-slate-900/50 border-slate-800 hover:bg-slate-900 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className={`p-2.5 rounded-xl ${isActive ? 'bg-cyan-500/10 border border-cyan-500/30' : 'bg-slate-800'}`}>
                      {getSiteIcon(site.sector)}
                    </div>
                    <div className="min-w-0">
                      <h3 className={`text-sm font-semibold truncate ${isActive ? 'text-white' : 'text-slate-300'}`}>
                        {site.name}
                      </h3>
                      <p className="text-xs text-slate-400 truncate mt-0.5">
                        {site.sector}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className={`w-4 h-4 shrink-0 transition-transform ${isActive ? 'text-cyan-400 translate-x-1' : 'text-slate-600'}`} />
                </button>
              );
            })}
          </div>

          {/* Core Infrastructure Stack Overview */}
          <div className="mt-4 p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800">
            <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3 flex items-center gap-2">
              <Server className="w-4 h-4 text-cyan-400" />
              Unified Multi-Site Core Backbone
            </h4>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/60">
                <span className="text-slate-400 block text-[11px]">Campus Uplinks</span>
                <span className="font-semibold text-slate-200">Fiber & CAT6 Gbit</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/60">
                <span className="text-slate-400 block text-[11px]">Web Hosting</span>
                <span className="font-semibold text-slate-200">cPanel & Win IIS</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/60">
                <span className="text-slate-400 block text-[11px]">Surveillance</span>
                <span className="font-semibold text-slate-200">PoE NVR & IP CCTV</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/60">
                <span className="text-slate-400 block text-[11px]">Data Retention</span>
                <span className="font-semibold text-slate-200">Automated SQL Backup</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Detailed Interactive Topology Inspector */}
        <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
          {/* Subtle background tech circuit */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* Active Site Title Lockup */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 text-xs font-medium text-cyan-400 mb-1">
                <span>Domain Focus</span>
                <span aria-hidden="true">·</span>
                <span>{activeSite.sector}</span>
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                {activeSite.name}
              </h3>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-800/90 border border-slate-700/80 text-xs text-slate-300 shrink-0">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Active Management</span>
            </div>
          </div>

          {/* Interactive Topology Graph Representation */}
          <div className="my-6 p-5 rounded-2xl bg-slate-950/70 border border-slate-800">
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 flex items-center justify-between">
              <span>Deployed Network & System Topology</span>
              <span className="text-[11px] text-cyan-400 font-mono">Managed by Bhargav</span>
            </h4>

            {/* Interactive Topology Visual Nodes */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/90 border border-cyan-500/30">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0">
                  <Wifi className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-white">Network & Campus Wi-Fi Layer</span>
                    <span className="text-[11px] font-mono text-cyan-400">VLAN Segregated</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5">
                    High-density wireless access points, managed L2/L3 switches, CAT6 structured cabling, and fiber uplinks.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 shrink-0">
                  <Server className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-white">Core Business Systems & ERP Layer</span>
                    <span className="text-[11px] font-mono text-indigo-400">99.8% Uptime</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {activeSite.sector.includes('Healthcare') 
                      ? 'HIMS, HRMS, Diagnostic Lab integration, Doctor and OPD terminals.'
                      : activeSite.sector.includes('Manufacturing')
                      ? 'Plant management systems, weighbridge, production line tracking, and dispatch.'
                      : 'College ERP, Student Information Systems, Examination IT, and Digital Library.'}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-white">Surveillance & Physical Security Layer</span>
                    <span className="text-[11px] font-mono text-emerald-400">Continuous 24/7</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5">
                    PoE IP/Analog cameras, DVR/NVR storage, automated recording schedules, and biometric access controls.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Deployed Systems Chips */}
          <div className="mb-6">
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
              Specific Applications & Protocols Deployed
            </h4>
            <div className="flex flex-wrap gap-2">
              {activeSite.systems.map((sys, idx) => (
                <div
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-xs font-medium text-slate-200 flex items-center gap-2"
                >
                  <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{sys}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Operational Responsibilities List */}
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
              Bhargav's Key Operational Mandate & Support
            </h4>
            <ul className="space-y-2.5">
              {activeSite.responsibilities.map((resp, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
