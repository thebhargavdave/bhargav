import React, { useState } from 'react';
import { CV_DATA } from '../data/cvData';
import { 
  Github, 
  ExternalLink, 
  Globe, 
  Terminal, 
  ShieldCheck, 
  Server, 
  Code2, 
  FileCheck,
  CheckCircle2,
  Copy,
  Check
} from 'lucide-react';

import { CPanelGuideModal } from './CPanelGuideModal';

export const DevelopmentShowcase: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [activeSnippetTab, setActiveSnippetTab] = useState<'cpanel' | 'backup' | 'iis' | 'dns'>('cpanel');
  const [isCPanelModalOpen, setIsCPanelModalOpen] = useState(false);

  const copyGithub = () => {
    navigator.clipboard.writeText(CV_DATA.personal.github);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const codeSnippets = {
    cpanel: `# cPanel Web Hosting Deployment Workflow
# 1. Compile production React SPA bundle
$ npm run build
✓ built in 820ms -> dist/

# 2. Package dist folder (.htaccess included automatically)
$ cd dist && zip -r ../bhargav_portfolio.zip . && cd ..

# 3. cPanel File Manager Deployment Steps:
# • Log in to cPanel -> Open "File Manager"
# • Navigate to "public_html" (or subdomain root)
# • Upload "bhargav_portfolio.zip"
# • Right-click and Extract to public_html/
# • Verify .htaccess rewrite rules are active
# • Run cPanel AutoSSL for instant HTTPS encryption
✓ Status: Live at your custom domain / institutional subdomain!`,
    backup: `# Daily Automated Database Backup & Verification Routine
# Location: Goenka Multi-Specialty Database Cluster
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
BACKUP_DIR="/var/backups/db/daily"
mkdir -p "$BACKUP_DIR"

echo "[$TIMESTAMP] Initiating automated database backup..."
mysqldump -u admin_operator -p --single-transaction --quick \
  --databases goenka_hims_prod > "$BACKUP_DIR/hims_db_$TIMESTAMP.sql"

# Check integrity and gzip
if [ -s "$BACKUP_DIR/hims_db_$TIMESTAMP.sql" ]; then
  gzip -9 "$BACKUP_DIR/hims_db_$TIMESTAMP.sql"
  echo "✓ Backup verified: hims_db_$TIMESTAMP.sql.gz"
  # Sync to redundant offsite NAS
  rsync -avz "$BACKUP_DIR/" nas_backup:/storage/offsite_retention/
else
  echo "✗ ERROR: Database backup size zero. Raising alert to Bhargav Dave."
fi`,
    iis: `# Windows IIS Web Application Binding & Staging Config
# Target: College ERP & Hospital Portal Deployment
Import-Module WebAdministration

$siteName = "GoenkaCollegesPortal"
$appPool = "AppPool_GoenkaNet"
$physicalPath = "C:\\inetpub\\wwwroot\\goenka_portal"

# Verify AppPool State
if (!(Test-Path "IIS:\\AppPools\\$appPool")) {
    New-Item "IIS:\\AppPools\\$appPool"
    Set-ItemProperty "IIS:\\AppPools\\$appPool" -Name "managedRuntimeVersion" -Value "v4.0"
}

# Bind HTTPS & Domain routing
New-WebBinding -Name $siteName -IPAddress "*" -Port 443 -Protocol https -HostHeader "portal.goenkagroup.edu.in"
Write-Host "✓ IIS Web Portal deployed & SSL configured successfully."`,
    dns: `# Enterprise Domain & Email Security Verification (DNS)
# Domain: goenkahospital.com & goenkagroup.edu.in
$ host -t MX goenkahospital.com
goenkahospital.com mail is handled by 10 aspmx.l.google.com.
goenkahospital.com mail is handled by 20 alt1.aspmx.l.google.com.

$ host -t TXT goenkahospital.com
"v=spf1 include:_spf.google.com ~all"
"google-site-verification=bhargav-dave-sec-verify-2025"

# DKIM Key Resolution
$ host -t TXT google._domainkey.goenkahospital.com
"v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC..."
✓ Status: All SPF, DKIM, DMARC security records validated.`
  };

  return (
    <section id="github" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-900">
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
          <span>Web Engineering & Code</span>
          <span aria-hidden="true">·</span>
          <span>Open Source Presence</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Web Development, cPanel/IIS & Software QA
        </h2>
        <p className="mt-3 text-base text-slate-400 leading-relaxed">
          Bridging physical IT infrastructure with modern digital operations — managing web hosting, deploying applications on cPanel and Windows IIS, software testing, and maintaining automated administrative utilities.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: GitHub Spotlight Card & Projects */}
        <div className="lg:col-span-6 space-y-6">
          {/* GitHub Profile Banner Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl relative overflow-hidden">
            <div className="flex items-start justify-between gap-4 pb-6 border-b border-slate-800">
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-2xl bg-slate-800 border border-slate-700 text-white">
                  <Github className="w-8 h-8 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                    <span>thebhargavdave</span>
                  </h3>
                  <a
                    href={CV_DATA.personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-cyan-400 hover:text-cyan-300 font-mono flex items-center gap-1 mt-0.5"
                  >
                    <span>github.com/thebhargavdave</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <button
                onClick={copyGithub}
                type="button"
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition flex items-center gap-1.5 text-xs font-medium cursor-pointer"
                title="Copy GitHub URL"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            <p className="py-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
              {CV_DATA.devPortfolio.note}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                Public Repositories
              </span>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                Web Applications
              </span>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                cPanel & IIS Staging
              </span>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                QA Verification
              </span>
            </div>

            <div className="mt-6">
              <a
                href={CV_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-medium text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-cyan-600/20 transition cursor-pointer"
              >
                <Github className="w-4 h-4" />
                <span>Explore GitHub Profile & Repositories</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Featured Engineering Projects */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 px-1">
              Key Development & Digital Delivery Areas
            </h4>
            {CV_DATA.devPortfolio.featuredWork.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition"
              >
                <h5 className="text-sm font-bold text-white mb-1.5 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{item.title}</span>
                </h5>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {item.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Interactive Systems Terminal & Protocols */}
        <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="text-xs font-mono text-slate-400 ml-2">dev-ops@bhargavdave:~</span>
            </div>

            {/* Script switch tabs */}
            <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800 overflow-x-auto max-w-full">
              <button
                onClick={() => setActiveSnippetTab('cpanel')}
                className={`px-2.5 py-1 text-[11px] font-mono rounded cursor-pointer whitespace-nowrap ${
                  activeSnippetTab === 'cpanel' ? 'bg-slate-800 text-cyan-300' : 'text-slate-400 hover:text-white'
                }`}
              >
                cpanel_deploy.sh
              </button>
              <button
                onClick={() => setActiveSnippetTab('backup')}
                className={`px-2.5 py-1 text-[11px] font-mono rounded cursor-pointer whitespace-nowrap ${
                  activeSnippetTab === 'backup' ? 'bg-slate-800 text-cyan-300' : 'text-slate-400 hover:text-white'
                }`}
              >
                db_backup.sh
              </button>
              <button
                onClick={() => setActiveSnippetTab('iis')}
                className={`px-2.5 py-1 text-[11px] font-mono rounded cursor-pointer whitespace-nowrap ${
                  activeSnippetTab === 'iis' ? 'bg-slate-800 text-cyan-300' : 'text-slate-400 hover:text-white'
                }`}
              >
                iis_deploy.ps1
              </button>
              <button
                onClick={() => setActiveSnippetTab('dns')}
                className={`px-2.5 py-1 text-[11px] font-mono rounded cursor-pointer whitespace-nowrap ${
                  activeSnippetTab === 'dns' ? 'bg-slate-800 text-cyan-300' : 'text-slate-400 hover:text-white'
                }`}
              >
                dns_spf.log
              </button>
            </div>
          </div>

          {/* Terminal Output */}
          <div className="mt-4 p-4 rounded-2xl bg-slate-950 border border-slate-800/80 font-mono text-xs text-slate-300 overflow-x-auto">
            <pre className="whitespace-pre-wrap leading-relaxed font-mono text-[11px] sm:text-xs">
              {codeSnippets[activeSnippetTab]}
            </pre>
          </div>

          {/* cPanel Guide Launcher Banner */}
          <div className="mt-4 p-3.5 rounded-2xl bg-cyan-950/30 border border-cyan-500/30 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 min-w-0">
              <Server className="w-4 h-4 text-cyan-400 shrink-0" />
              <div className="min-w-0">
                <span className="text-xs font-bold text-white block truncate">
                  Ready to Host on Your cPanel Account?
                </span>
                <span className="text-[11px] text-slate-400 block truncate">
                  Includes .htaccess file, build commands, and SSL guide.
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsCPanelModalOpen(true)}
              className="px-3.5 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs transition cursor-pointer shrink-0"
            >
              cPanel Guide
            </button>
          </div>

          {/* Software Testing & QA Lifecycle Card */}
          <div className="mt-4 p-5 rounded-2xl bg-gradient-to-br from-slate-950 to-slate-900 border border-slate-800">
            <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3 flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-emerald-400" />
              Software Testing & QA Rigor
            </h4>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 font-mono">01.</span>
                <span><strong>Functional Testing:</strong> Systematic verification of form validation, user role authentication, and ERP module interactions.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 font-mono">02.</span>
                <span><strong>Defect Documentation:</strong> Reproducing bugs, logging structured tickets for developers, and tracking patch releases.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 font-mono">03.</span>
                <span><strong>Post-Deployment Smoke Tests:</strong> Validating database write integrity, SSL certificates, and DNS resolution after live updates.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* cPanel Guide Modal */}
      <CPanelGuideModal
        isOpen={isCPanelModalOpen}
        onClose={() => setIsCPanelModalOpen(false)}
      />
    </section>
  );
};
