import React, { useState } from 'react';
import { CV_DATA } from '../data/cvData';
import { 
  Phone, 
  Mail, 
  Github, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  MessageSquare, 
  Calendar,
  Sparkles
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Senior IT Executive / Assistant IT Manager Inquiry');
  const [message, setMessage] = useState('');
  const [formSent, setFormSent] = useState(false);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${CV_DATA.personal.primaryEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Hello Bhargav,\n\nMy name is ${name} (${email}).\n\n${message}\n\nBest regards,\n${name}`
    )}`;
    window.open(mailtoUrl, '_blank');
    setFormSent(true);
    setTimeout(() => setFormSent(false), 5000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-900">
      <div className="max-w-3xl mb-12">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
          <span>Get in Touch</span>
          <span aria-hidden="true">·</span>
          <span>Recruitment & Leadership Opportunities</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Connect with Bhargav R. Dave
        </h2>
        <p className="mt-3 text-base text-slate-400 leading-relaxed">
          Open to Senior IT Executive, Assistant IT Manager, and IT Infrastructure leadership discussions. Reach out via phone, direct email, WhatsApp, or dispatch a message below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Direct Channels (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          {/* Phone Card */}
          <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-slate-400">Direct Phone / Call</p>
                <a
                  href={`tel:${CV_DATA.personal.phone.replace(/\s+/g, '')}`}
                  className="text-sm font-bold text-white hover:text-cyan-400 transition truncate block font-mono"
                >
                  {CV_DATA.personal.phone}
                </a>
              </div>
            </div>
            <button
              onClick={() => copyToClipboard(CV_DATA.personal.phone, 'phone')}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition cursor-pointer shrink-0"
              title="Copy Phone Number"
            >
              {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* WhatsApp Direct */}
          <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-slate-400">WhatsApp Chat</p>
                <span className="text-sm font-bold text-white block">
                  Quick Technical Discussion
                </span>
              </div>
            </div>
            <a
              href={`https://wa.me/919016495560?text=${encodeURIComponent(
                'Hello Bhargav, I reviewed your Senior IT Executive portfolio and would like to connect.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition shrink-0"
            >
              Chat
            </a>
          </div>

          {/* Primary Email */}
          <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-slate-400">Primary Gmail</p>
                <a
                  href={`mailto:${CV_DATA.personal.primaryEmail}`}
                  className="text-sm font-bold text-white hover:text-cyan-400 transition truncate block font-mono"
                >
                  {CV_DATA.personal.primaryEmail}
                </a>
              </div>
            </div>
            <button
              onClick={() => copyToClipboard(CV_DATA.personal.primaryEmail, 'gmail')}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition cursor-pointer shrink-0"
              title="Copy Primary Email"
            >
              {copiedField === 'gmail' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Secondary Email */}
          <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-slate-400">Secondary Email</p>
                <a
                  href={`mailto:${CV_DATA.personal.secondaryEmail}`}
                  className="text-sm font-bold text-white hover:text-cyan-400 transition truncate block font-mono"
                >
                  {CV_DATA.personal.secondaryEmail}
                </a>
              </div>
            </div>
            <button
              onClick={() => copyToClipboard(CV_DATA.personal.secondaryEmail, 'rediff')}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition cursor-pointer shrink-0"
              title="Copy Secondary Email"
            >
              {copiedField === 'rediff' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* GitHub Profile */}
          <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="p-3 rounded-xl bg-slate-800 text-white shrink-0">
                <Github className="w-5 h-5 text-cyan-400" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-slate-400">GitHub Profile</p>
                <a
                  href={CV_DATA.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-white hover:text-cyan-400 transition truncate block font-mono"
                >
                  github.com/thebhargavdave
                </a>
              </div>
            </div>
            <a
              href={CV_DATA.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition shrink-0"
            >
              Visit
            </a>
          </div>

          {/* ORCID Academic & Researcher ID */}
          <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="p-3 rounded-xl bg-[#A6CE39]/10 text-[#A6CE39] shrink-0">
                <svg className="w-5 h-5" viewBox="0 0 256 256" fill="none">
                  <path fill="#A6CE39" d="M256,128c0,70.7-57.3,128-128,128C57.3,256,0,198.7,0,128C0,57.3,57.3,0,128,0C198.7,0,256,57.3,256,128z"/>
                  <g fill="#FFF">
                    <path d="M86.3,186.2H70.9V79.1h15.4V186.2z"/>
                    <path d="M108.9,79.1h41.6c39.6,0,57,28.3,57,53.6c0,27.5-21.5,53.6-56.8,53.6h-41.8V79.1z M124.3,92.4v80.5h24.5c34.9,0,43.3-25.2,43.3-40.2c0-26.1-15.5-40.2-43.3-40.2H124.3z"/>
                    <circle cx="78.6" cy="52.5" r="9.3"/>
                  </g>
                </svg>
              </div>
              <div className="min-w-0">
                <p className="text-xs text-slate-400">ORCID Researcher ID</p>
                <a
                  href={CV_DATA.personal.orcidUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-white hover:text-[#A6CE39] transition truncate block font-mono"
                >
                  {CV_DATA.personal.orcid}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
              <button
                onClick={() => copyToClipboard(CV_DATA.personal.orcid, 'orcid')}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition cursor-pointer"
                title="Copy ORCID ID"
              >
                {copiedField === 'orcid' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
              <a
                href={CV_DATA.personal.orcidUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition"
              >
                Profile
              </a>
            </div>
          </div>
        </div>

        {/* Dispatch Message Form (7 cols) */}
        <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl">
          <h3 className="text-xl font-bold text-white tracking-tight mb-2">
            Send a Direct Message
          </h3>
          <p className="text-xs text-slate-400 mb-6">
            Fill out the details below to dispatch a message directly to Bhargav's executive inbox.
          </p>

          <form onSubmit={handleSendMessage} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Your Name / Organization
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Smith (HR Director)"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Your Work Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Subject
              </label>
              <input
                type="text"
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 transition"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Message / Role Details
              </label>
              <textarea
                required
                rows={4}
                placeholder="Share role specifics, company requirements, or scheduling a technical conversation..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 transition resize-none"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <span className="text-[11px] text-slate-400 order-2 sm:order-1">
                Direct mail dispatch to <strong className="text-slate-300 font-mono">bhargavd198@gmail.com</strong>
              </span>

              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-2.5 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-cyan-600/20 transition cursor-pointer order-1 sm:order-2"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </div>

            {formSent && (
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2 mt-3">
                <Check className="w-4 h-4" />
                <span>Email client opened! You can also reach Bhargav directly at +91 9016495560.</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
