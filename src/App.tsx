import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { InteractiveInfrastructureExplorer } from './components/InteractiveInfrastructureExplorer';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { CoreCompetenciesMatrix } from './components/CoreCompetenciesMatrix';
import { DevelopmentShowcase } from './components/DevelopmentShowcase';
import { EducationAndStrengths } from './components/EducationAndStrengths';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PrintResumeModal } from './components/PrintResumeModal';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsResumeModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Top Navbar adhering to 3-zone contract */}
      <Navbar onOpenResumeModal={() => setIsResumeModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <HeroSection
          onOpenResumeModal={() => setIsResumeModalOpen(true)}
        />
        <InteractiveInfrastructureExplorer />
        <ExperienceTimeline />
        <CoreCompetenciesMatrix />
        <DevelopmentShowcase />
        <EducationAndStrengths />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Executive Printable Resume Modal */}
      <PrintResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
