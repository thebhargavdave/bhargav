import React, { useState } from 'react';
import { X, Server, Check, Copy, ArrowRight, FolderArchive, Shield, Globe, Terminal, FileCode2 } from 'lucide-react';

interface CPanelGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CPanelGuideModal: React.FC<CPanelGuideModalProps> = ({ isOpen, onClose }) => {
  const [copiedSnippet, setCopiedSnippet] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSnippet(id);
    setTimeout(() => setCopiedSnippet(null), 2000);
  };

  const htaccessCode = `# Apache .htaccess for React / Vite SPA Routing on cPanel
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  # Force HTTPS
  RewriteCond %{HTTPS} off
  RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

  # Don't rewrite real files or directories
  RewriteCond %{REQUEST_FILENAME} -f [OR]
  RewriteCond %{REQUEST_FILENAME} -d
  RewriteRule ^ - [L]

  # Route all requests to index.html
  RewriteRule ^ index.html [L]
</IfModule>

# Caching Headers for Performance
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>`;

  const buildCommands = `# 1. Build the production bundle
npm run build

# 2. Navigate to dist and zip all contents
cd dist
zip -r ../bhargav_portfolio.zip .
cd ..`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-3xl bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl flex flex-col max-h-[92vh] overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="p-5 sm:px-8 sm:py-5 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <Server className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                cPanel Web Hosting & Deployment Guide
              </h3>
              <p className="text-xs text-slate-400">
                Step-by-step instructions to host this portfolio on any cPanel server.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 text-slate-300 text-xs sm:text-sm">
          {/* Step 1: Build */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-300 font-bold text-xs flex items-center justify-center border border-cyan-500/40 shrink-0">
                1
              </span>
              <h4 className="text-sm sm:text-base font-bold text-white">
                Generate the Production Build
              </h4>
            </div>
            <p className="text-slate-400 pl-8">
              Open your terminal in the project directory and run the build command. This compiles all TypeScript, Tailwind CSS, images, and React components into the <code className="text-cyan-300 font-mono">dist/</code> directory.
            </p>
            <div className="pl-8">
              <div className="relative rounded-2xl bg-slate-950 border border-slate-800 p-4 font-mono text-xs text-slate-200">
                <button
                  onClick={() => copyToClipboard(buildCommands, 'build')}
                  className="absolute top-3 right-3 p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition cursor-pointer"
                  title="Copy command"
                >
                  {copiedSnippet === 'build' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
                <pre className="whitespace-pre-wrap">{buildCommands}</pre>
              </div>
            </div>
          </div>

          {/* Step 2: .htaccess */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-300 font-bold text-xs flex items-center justify-center border border-cyan-500/40 shrink-0">
                2
              </span>
              <h4 className="text-sm sm:text-base font-bold text-white">
                Pre-Configured .htaccess (Already Added to Project)
              </h4>
            </div>
            <p className="text-slate-400 pl-8">
              A production-ready <code className="text-cyan-300 font-mono">.htaccess</code> has already been placed in your <code className="text-cyan-300 font-mono">/public</code> folder. Vite automatically copies it to <code className="text-cyan-300 font-mono">dist/.htaccess</code> so page refreshes and direct links route cleanly to <code className="text-cyan-300 font-mono">index.html</code>.
            </p>
            <div className="pl-8">
              <div className="relative rounded-2xl bg-slate-950 border border-slate-800 p-4 font-mono text-[11px] text-slate-300 max-h-44 overflow-y-auto">
                <button
                  onClick={() => copyToClipboard(htaccessCode, 'htaccess')}
                  className="absolute top-3 right-3 p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition cursor-pointer"
                  title="Copy .htaccess"
                >
                  {copiedSnippet === 'htaccess' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
                <pre className="whitespace-pre-wrap">{htaccessCode}</pre>
              </div>
            </div>
          </div>

          {/* Step 3: cPanel Upload & Extraction */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-300 font-bold text-xs flex items-center justify-center border border-cyan-500/40 shrink-0">
                3
              </span>
              <h4 className="text-sm sm:text-base font-bold text-white">
                Upload to cPanel File Manager
              </h4>
            </div>
            <div className="pl-8 space-y-2.5">
              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 flex items-start gap-3">
                <FolderArchive className="w-5 h-5 text-indigo-400 mt-0.5 shrink-0" />
                <div>
                  <strong className="text-white block text-xs">Navigate to Target Directory</strong>
                  <span className="text-xs text-slate-400">
                    Log in to cPanel → Open <strong>File Manager</strong> → Enter <code className="text-cyan-300 font-mono">public_html</code> (for primary domain) or your subdomain root directory (e.g. <code className="text-cyan-300 font-mono">portfolio.goenkagroup.edu.in</code>).
                  </span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 flex items-start gap-3">
                <Globe className="w-5 h-5 text-cyan-400 mt-0.5 shrink-0" />
                <div>
                  <strong className="text-white block text-xs">Upload & Extract</strong>
                  <span className="text-xs text-slate-400">
                    Click <strong>Upload</strong> at the top bar → Select <code className="text-cyan-300 font-mono">bhargav_portfolio.zip</code>. Once uploaded (100% green bar), return to File Manager, right-click the zip, and select <strong>Extract</strong>.
                  </span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 flex items-start gap-3">
                <FileCode2 className="w-5 h-5 text-amber-400 mt-0.5 shrink-0" />
                <div>
                  <strong className="text-white block text-xs">Verify Hidden Files</strong>
                  <span className="text-xs text-slate-400">
                    In cPanel File Manager, click <strong>Settings</strong> (top right) and check <strong>"Show Hidden Files (dotfiles)"</strong> so <code className="text-cyan-300 font-mono">.htaccess</code> is visible and active.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4: SSL Certificate */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-300 font-bold text-xs flex items-center justify-center border border-cyan-500/40 shrink-0">
                4
              </span>
              <h4 className="text-sm sm:text-base font-bold text-white">
                Enable Free SSL / HTTPS (AutoSSL)
              </h4>
            </div>
            <p className="text-slate-400 pl-8">
              In cPanel, search for <strong>SSL/TLS Status</strong> → Select your domain/subdomain → Click <strong>Run AutoSSL</strong>. In 1–2 minutes, cPanel will automatically provision a free Let's Encrypt / Sectigo SSL certificate.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs text-slate-500 font-mono">
            VITE + REACT · CPANEL DEPLOYMENT
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold transition cursor-pointer"
          >
            Got it, Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
