import React from 'react';
import { privacyContent } from '../data/legalContent';
import { ShieldCheck, FileText } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="pt-20 bg-brand-offwhite min-h-screen">
      
      {/* Header Banner */}
      <section className="bg-navy-primary text-white py-14 md:py-20 relative border-b border-gold-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[1px] w-6 bg-gold-primary"></span>
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-gold-primary">
              Data Governance & Consent
            </span>
            <span className="h-[1px] w-6 bg-gold-primary"></span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide">
            Privacy Policy
          </h1>
          
          <p className="mt-3 text-xs sm:text-sm text-gold-primary font-sans uppercase tracking-widest">
            Last Updated: {privacyContent.lastUpdated}
          </p>
        </div>
      </section>

      {/* Content Container */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Sticky Table of Contents Navigation */}
            <div className="hidden lg:block lg:col-span-4">
              <div className="sticky top-28 bg-white p-6 rounded-sm border border-slate-light shadow-luxury">
                <h3 className="font-serif text-lg font-bold text-navy-primary mb-4 pb-3 border-b border-gold-primary/30 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-gold-primary" />
                  <span>Privacy Sections</span>
                </h3>
                <nav className="space-y-2 text-xs font-sans">
                  {privacyContent.sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="block text-slate-subtle hover:text-gold-primary hover:translate-x-1 transition-all py-1.5 border-b border-slate-light/50 last:border-0"
                    >
                      {section.title}
                    </a>
                  ))}
                </nav>
              </div>
            </div>

            {/* Right Column: Full Privacy Sections */}
            <div className="lg:col-span-8 bg-white p-8 md:p-12 rounded-sm border border-slate-light shadow-luxury space-y-10 font-sans">
              
              <div className="bg-brand-offwhite p-4 border-l-4 border-gold-primary text-xs text-slate-subtle leading-relaxed">
                ASHWA REALTORS respects your privacy and enforces strict data security measures across all client touchpoints. This document details our data handling, consent protocols, and communication compliance under DLT/TRAI frameworks.
              </div>

              {privacyContent.sections.map((section) => (
                <div key={section.id} id={section.id} className="scroll-mt-32 space-y-3">
                  <h2 className="font-serif text-xl font-bold text-navy-primary flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gold-primary flex-shrink-0"></span>
                    {section.title}
                  </h2>
                  <div className="text-xs sm:text-sm text-slate-subtle leading-relaxed whitespace-pre-line pl-4 border-l border-slate-light">
                    {section.content}
                  </div>
                </div>
              ))}

              <div className="pt-8 border-t border-slate-light text-center text-xs text-slate-grey">
                © 2026 ASHWA REALTORS. All Rights Reserved.
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Privacy;
