import React, { useRef } from 'react';
import { CV_DATA } from '../data/cvData';
import { X, Printer, Download, Mail, Phone, MapPin, Github, FileText, Check } from 'lucide-react';

interface PrintResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrintResumeModal: React.FC<PrintResumeModalProps> = ({ isOpen, onClose }) => {
  const [downloadSuccess, setDownloadSuccess] = React.useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadText = () => {
    const content = `=====================================================
${CV_DATA.personal.fullName}
${CV_DATA.personal.targetRole}
${CV_DATA.personal.subSpecialty}
=====================================================

CONTACT:
Phone: ${CV_DATA.personal.phone}
Primary Email: ${CV_DATA.personal.primaryEmail}
Secondary Email: ${CV_DATA.personal.secondaryEmail}
GitHub: ${CV_DATA.personal.github}
ORCID ID: ${CV_DATA.personal.orcid} (${CV_DATA.personal.orcidUrl})
Location: ${CV_DATA.personal.location}

PROFESSIONAL SUMMARY:
${CV_DATA.summary}

CORE COMPETENCIES:
${CV_DATA.coreCompetencies.map((c) => `• ${c}`).join('\n')}

PROFESSIONAL EXPERIENCE:
${CV_DATA.experiences
  .map(
    (exp) => `
-----------------------------------------------------
${exp.role} | ${exp.company} ${exp.subEntity ? `(${exp.subEntity})` : ''}
Period: ${exp.period} | Location: ${exp.location}
-----------------------------------------------------
Summary: ${exp.summary}

Key Responsibilities & Deliverables:
${exp.highlights.map((h) => `• ${h}`).join('\n')}

Technologies & Systems: ${exp.technologies.join(', ')}
`
  )
  .join('\n')}

TECHNICAL SKILLS:
${CV_DATA.technicalSkills.map((cat) => `\n${cat.category}:\n${cat.skills.join(', ')}`).join('\n')}

EDUCATION:
${CV_DATA.education
  .map((e) => `• ${e.degree} — ${e.institution}, ${e.affiliation} (${e.year})`)
  .join('\n')}

PROFESSIONAL STRENGTHS:
${CV_DATA.strengths.map((s) => `• ${s.title}: ${s.description}`).join('\n')}
`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Bhargav_R_Dave_Senior_IT_Executive_CV.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl flex flex-col max-h-[92vh] overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="p-4 sm:px-8 sm:py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between no-print">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-cyan-400" />
            <span className="text-sm font-bold text-white">Executive Curriculum Vitae</span>
            <span className="text-xs text-slate-400 hidden sm:inline">· Printable & Export Ready</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadText}
              className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium flex items-center gap-1.5 transition cursor-pointer"
            >
              {downloadSuccess ? <Check className="w-4 h-4 text-emerald-400" /> : <Download className="w-4 h-4" />}
              <span>{downloadSuccess ? 'Downloaded' : 'Download TXT'}</span>
            </button>
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer shadow-md shadow-cyan-600/20"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Paper Canvas */}
        <div className="overflow-y-auto p-6 sm:p-10 bg-slate-900 text-slate-100 text-sm space-y-8 font-sans">
          {/* Header */}
          <div className="border-b border-slate-700 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <img
                  src={CV_DATA.personal.photoUrl}
                  alt={CV_DATA.personal.fullName}
                  className="w-20 h-24 sm:w-24 sm:h-28 rounded-xl object-cover object-top border-2 border-slate-700 shadow-md shrink-0"
                />
                <div>
                  <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white uppercase">
                    {CV_DATA.personal.fullName}
                  </h1>
                  <p className="text-sm sm:text-base font-semibold text-cyan-400 mt-0.5">
                    {CV_DATA.personal.targetRole}
                  </p>
                  <p className="text-xs text-slate-400">
                    {CV_DATA.personal.subSpecialty}
                  </p>
                </div>
              </div>

              <div className="space-y-1 text-xs text-slate-300 font-mono">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{CV_DATA.personal.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{CV_DATA.personal.primaryEmail}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{CV_DATA.personal.secondaryEmail}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Github className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{CV_DATA.personal.github}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 rounded-full bg-[#A6CE39] text-white font-bold text-[9px] flex items-center justify-center shrink-0">
                    iD
                  </span>
                  <span>ORCID: {CV_DATA.personal.orcid}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 border-b border-slate-800 pb-1 mb-2">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
              {CV_DATA.summary}
            </p>
          </div>

          {/* Core Competencies */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 border-b border-slate-800 pb-1 mb-3">
              Core Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
              {CV_DATA.coreCompetencies.map((comp, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>{comp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 border-b border-slate-800 pb-1 mb-4">
              Professional Experience
            </h2>
            <div className="space-y-6">
              {CV_DATA.experiences.map((exp) => (
                <div key={exp.id} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h3 className="text-sm font-bold text-white">
                      {exp.role} <span className="font-normal text-slate-400">|</span> <span className="text-cyan-300">{exp.company}</span> {exp.subEntity ? `(${exp.subEntity})` : ''}
                    </h3>
                    <span className="text-xs font-mono text-slate-400">
                      {exp.period} · {exp.location}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 italic">
                    {exp.summary}
                  </p>
                  <ul className="space-y-1.5 pl-3">
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="text-xs text-slate-300 leading-relaxed flex items-start gap-2">
                        <span className="text-slate-500 mt-1">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-1 text-[11px] font-mono text-slate-400">
                    <strong className="text-slate-300 font-sans">Key Systems:</strong> {exp.technologies.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 border-b border-slate-800 pb-1 mb-3">
              Technical Skills
            </h2>
            <div className="space-y-2.5 text-xs">
              {CV_DATA.technicalSkills.map((cat, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row gap-1">
                  <span className="font-bold text-slate-200 sm:w-56 shrink-0">{cat.category}:</span>
                  <span className="text-slate-300">{cat.skills.join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Strengths */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 border-b border-slate-800 pb-1 mb-2">
                Education
              </h2>
              <div className="space-y-2 text-xs text-slate-300">
                {CV_DATA.education.map((edu, idx) => (
                  <div key={idx}>
                    <p className="font-bold text-white">{edu.degree}</p>
                    <p className="text-slate-400">{edu.institution}, {edu.affiliation} ({edu.year})</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 border-b border-slate-800 pb-1 mb-2">
                Professional Strengths
              </h2>
              <p className="text-xs text-slate-300 leading-relaxed">
                {CV_DATA.strengths.map((s) => s.title).join(' • ')}
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between no-print">
          <span className="text-xs text-slate-500 font-mono">
            BHARGAV R. DAVE · SENIOR IT EXECUTIVE
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
