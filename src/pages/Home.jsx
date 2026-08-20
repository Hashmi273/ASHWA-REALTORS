import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Home as HomeIcon, 
  TrendingUp, 
  Scale, 
  ShieldCheck, 
  Lock, 
  Compass, 
  Handshake, 
  FileCheck, 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight, 
  Star,
  Quote
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { testimonialsData } from '../data/testimonials';

const Home = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Revisions #1: Qualitative Trust Markers (NO fake numeric stats)
  const trustMarkers = [
    {
      title: "Personalized Advisory",
      description: "Tailored property search & bespoke portfolio curation aligned with individual investment goals.",
      icon: Handshake,
    },
    {
      title: "Verified Listings Only",
      description: "Rigorous legal title checks, developer track record audits, and physical asset verification.",
      icon: ShieldCheck,
    },
    {
      title: "End-to-End Support",
      description: "Comprehensive guidance from initial consultation and site visits to deal structure and registration.",
      icon: Compass,
    },
    {
      title: "Confidential & Transparent",
      description: "Absolute discretion for high-net-worth clients with complete transparency on fees and terms.",
      icon: Lock,
    },
  ];

  const services = [
    {
      id: "residential",
      title: "Residential Advisory",
      description: "Curated luxury penthouses, gated estates, and prime residential developments for homebuyers and investors.",
      icon: HomeIcon,
      features: ["Luxury Apartments & Penthouses", "Gated Communities & Villas", "Prime Location Curation"],
    },
    {
      id: "commercial",
      title: "Commercial Advisory",
      description: "Strategic commercial space acquisition, office leasing, retail spaces, and institutional asset management.",
      icon: Building2,
      features: ["Grade-A Office Leasing", "High-Street Retail Assets", "Commercial Land Acquisition"],
    },
    {
      id: "investment",
      title: "Investment Consultation",
      description: "High-yield real estate investment opportunities, capital growth analysis, and portfolio restructuring.",
      icon: TrendingUp,
      features: ["Pre-Launch Investment Deals", "Yield Optimization Strategies", "Asset Diversification"],
    },
    {
      id: "legal",
      title: "Legal & Documentation",
      description: "Complete legal title verification, agreement drafting, RERA compliance, and seamless property registration.",
      icon: Scale,
      features: ["Title Deed Verification", "RERA & Regulatory Compliance", "Conveyancing & Registration"],
    },
  ];

  const whyChooseUsPillars = [
    { title: "Verified Listings", desc: "Every property undergoes strict due diligence before recommendation.", icon: CheckCircle2 },
    { title: "Transparent Process", desc: "No hidden charges, clear advisory fees, and direct developer/seller pricing.", icon: ShieldCheck },
    { title: "End-to-End Assistance", desc: "Dedicated advisory desk from initial briefing to final possession.", icon: FileCheck },
    { title: "Market Expertise", desc: "Deep analytical insight into urban micro-markets and capital growth corridors.", icon: TrendingUp },
    { title: "Bespoke Portfolio Curation", desc: "Customized asset matching for high-net-worth individuals and family desks.", icon: Compass },
    { title: "Strict Confidentiality", desc: "Discreet advisory protocols protecting client identity and deal details.", icon: Lock },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Consultation",
      description: "Detailed discussion to map your budget, location priorities, requirement type, and ROI expectations.",
    },
    {
      number: "02",
      title: "Property Match",
      description: "Curating a handpicked shortlist of verified residential or commercial properties fitting your exact brief.",
    },
    {
      number: "03",
      title: "Site Visit & Due Diligence",
      description: "Private guided walkthroughs alongside preliminary legal title checks and market valuation audit.",
    },
    {
      number: "04",
      title: "Deal Closure",
      description: "Expert agreement negotiation, legal documentation drafting, and seamless registration support.",
    },
  ];

  return (
    <div className="pt-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center bg-navy-primary overflow-hidden text-white">
        {/* Background Image Overlay with Gradient */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25 scale-105 transition-transform duration-1000"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=2000')`,
          }}
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        
        {/* Decorative Gold Arc Accent */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border border-gold-primary/20 pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full border border-gold-primary/20 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            {/* Pre-heading Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold-primary/10 border border-gold-primary/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-gold-primary animate-pulse"></span>
              <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-gold-primary">
                Property Advisory Services
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] text-white">
              Your Trusted Partner in <span className="text-gold-primary italic">Property Advisory</span>
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-base sm:text-lg text-slate-grey font-sans leading-relaxed max-w-2xl">
              Curated luxury residential, commercial, and strategic real estate advisory tailored for discerning buyers, corporate entities, and institutional investors.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button to="/contact" variant="gold" size="lg" icon={ArrowRight}>
                Get in Touch
              </Button>
              <Button 
                onClick={() => {
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }} 
                variant="outline" 
                size="lg"
              >
                Explore Services
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Subtle Rule */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold-primary/40 to-transparent" />
      </section>

      {/* 2. ABOUT / TRUST MARKERS SECTION */}
      <section className="py-20 md:py-28 bg-brand-offwhite relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Brand Story */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="h-[1px] w-6 bg-gold-primary"></span>
                <span className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-gold-primary">
                  About ASHWA REALTORS
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-primary leading-tight">
                Architecting Trust in High-Value Real Estate Advisory
              </h2>

              <p className="text-slate-subtle text-sm sm:text-base leading-relaxed font-sans">
                At ASHWA REALTORS, property advisory is treated not as a quick transaction, but as a strategic partnership. We guide clients through complex real estate landscapes with absolute discretion, deep analytical market intelligence, and verified legal clarity.
              </p>

              <p className="text-slate-subtle text-sm sm:text-base leading-relaxed font-sans">
                Whether acquiring a marquee residential estate, securing prime commercial office leases, or structuring an investment portfolio, our senior advisors ensure every step is seamless and risk-mitigated.
              </p>

              <div className="pt-2">
                <Button to="/contact" variant="navy" size="md" icon={ChevronRight}>
                  Schedule Advisory Consultation
                </Button>
              </div>
            </div>

            {/* Right Column: Revisions #1 - 2x2 Qualitative Trust Markers (No fake stats) */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {trustMarkers.map((marker, idx) => {
                  const IconComp = marker.icon;
                  return (
                    <div 
                      key={idx}
                      className="bg-white p-6 rounded-sm border border-slate-light/80 shadow-luxury hover:border-gold-primary/50 hover:shadow-luxury-hover transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 rounded-sm bg-navy-primary/5 border border-gold-primary/30 flex items-center justify-center text-gold-primary group-hover:bg-navy-primary group-hover:text-white transition-colors duration-300 mb-4">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <h3 className="font-serif text-lg font-bold text-navy-primary group-hover:text-gold-primary transition-colors">
                        {marker.title}
                      </h3>
                      <p className="mt-2 text-xs text-slate-subtle leading-relaxed font-sans">
                        {marker.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section id="services" className="py-20 md:py-28 bg-navy-primary text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading 
            badge="Tailored Solutions"
            title="Comprehensive Property Advisory"
            subtitle="Expert real estate consultation spanning luxury residential, commercial workspaces, high-growth investments, and complete legal compliance."
            dark={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {services.map((service) => {
              const IconComp = service.icon;
              return (
                <div 
                  key={service.id}
                  className="bg-navy-deep p-8 rounded-sm border border-white/10 hover:border-gold-primary/60 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    {/* Header Icon + Title */}
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-14 h-14 rounded-sm bg-navy-primary border border-gold-primary/40 flex items-center justify-center text-gold-primary group-hover:scale-105 transition-transform">
                        <IconComp className="w-7 h-7" />
                      </div>
                      <h3 className="font-serif text-xl md:text-2xl font-bold text-white group-hover:text-gold-primary transition-colors">
                        {service.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-slate-grey text-sm leading-relaxed font-sans mb-6">
                      {service.description}
                    </p>

                    {/* Key Features Bullet List */}
                    <ul className="space-y-2.5 mb-8">
                      {service.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center text-xs text-gray-300 font-sans">
                          <CheckCircle2 className="w-4 h-4 text-gold-primary mr-2.5 flex-shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Footer CTA */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <Link 
                      to="/contact" 
                      className="text-xs uppercase tracking-widest text-gold-primary font-semibold hover:text-gold-muted flex items-center gap-1 group-hover:translate-x-1 transition-all"
                    >
                      Enquire for Advisory <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. WHY CHOOSE US SECTION */}
      <section className="py-20 md:py-28 bg-brand-offwhite relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading 
            badge="The ASHWA Standard"
            title="Why Discerning Clients Trust Us"
            subtitle="Built on principles of institutional diligence, absolute confidentiality, and complete client representation."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {whyChooseUsPillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white p-6 rounded-sm border border-slate-light shadow-sm hover:shadow-luxury hover:border-gold-primary/40 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-sm bg-gold-primary/10 flex items-center justify-center text-gold-primary mb-4">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-navy-primary mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-subtle leading-relaxed font-sans">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. PROCESS / HOW IT WORKS */}
      <section className="py-20 md:py-28 bg-white border-y border-slate-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading 
            badge="Seamless Journey"
            title="How Our Advisory Process Works"
            subtitle="A structured, stress-free 4-step framework guiding you from initial brief to successful property deal closure."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 relative">
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative flex flex-col justify-between bg-brand-offwhite p-6 rounded-sm border border-slate-light">
                
                <div>
                  {/* Step Number Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-3xl font-bold text-gold-primary">
                      {step.number}
                    </span>
                    <span className="h-[2px] w-8 bg-gold-primary/40"></span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-navy-primary mb-3">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-subtle leading-relaxed font-sans">
                    {step.description}
                  </p>
                </div>

              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button to="/contact" variant="gold" size="lg" icon={ArrowRight}>
              Start Your Property Journey
            </Button>
          </div>

        </div>
      </section>

      {/* 6. CLIENT TESTIMONIALS */}
      <section className="py-20 md:py-28 bg-navy-primary text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading 
            badge="Client Endorsements"
            title="What Our Clients Say"
            subtitle="Read experiences from homeowners, corporate decision-makers, and institutional investors."
            dark={true}
          />

          <div className="max-w-4xl mx-auto bg-navy-deep p-8 md:p-12 rounded-sm border border-gold-primary/30 relative shadow-2xl">
            <Quote className="w-12 h-12 text-gold-primary/20 absolute top-6 right-6" />

            <div className="flex items-center space-x-1 mb-6 text-gold-primary">
              {[...Array(testimonialsData[activeTestimonial].rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold-primary" />
              ))}
            </div>

            <p className="font-serif text-lg md:text-xl italic text-gray-200 leading-relaxed mb-8">
              "{testimonialsData[activeTestimonial].quote}"
            </p>

            <div className="flex items-center justify-between border-t border-white/10 pt-6">
              <div>
                <h4 className="font-serif text-base font-bold text-white">
                  {testimonialsData[activeTestimonial].author}
                </h4>
                <p className="text-xs text-gold-primary font-sans">
                  {testimonialsData[activeTestimonial].designation} · {testimonialsData[activeTestimonial].location}
                </p>
              </div>

              {/* Slider Dots */}
              <div className="flex space-x-2">
                {testimonialsData.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestimonial(idx)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      activeTestimonial === idx ? 'bg-gold-primary' : 'bg-gray-600 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 7. CTA BANNER */}
      <section className="py-16 bg-gradient-to-r from-navy-primary via-navy-deep to-navy-primary text-white border-t border-gold-primary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide">
            Looking for the right property? <span className="text-gold-primary italic">Let's talk.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-grey max-w-2xl mx-auto font-sans">
            Connect with our senior property advisors today for confidential, customized consultation.
          </p>
          <div className="mt-8 flex justify-center">
            <Button to="/contact" variant="gold" size="lg" icon={ArrowRight}>
              Get in Touch with Advisory Desk
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
