import React, { useState, useEffect } from 'react';
import { 
  Eye, 
  Layers, 
  Compass, 
  Sliders, 
  Check, 
  Menu, 
  X, 
  Mail, 
  Instagram, 
  ArrowRight, 
  Feather, 
  Sun, 
  Moon, 
  Target,
  ArrowUpRight
} from 'lucide-react';
import { mediaConfig } from './data/mediaConfig';

// ==========================================
// PORTFOLIO IMAGES (User's specific assets)
// ==========================================
interface Project {
  id: string;
  title: string;
  image: string;
}

const PROJECTS: Project[] = [
  {
    id: '1',
    title: '#1',
    image: mediaConfig.portfolio.case1
  },
  {
    id: '2',
    title: '#2',
    image: mediaConfig.portfolio.case2
  },
  {
    id: '3',
    title: '#3',
    image: mediaConfig.portfolio.case3
  },
  {
    id: '4',
    title: '#4',
    image: mediaConfig.portfolio.case4
  }
];

// ==========================================
// CORE APPLICATION COMPONENT
// ==========================================
export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  
  // Smooth background theme toggle class handler
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-[#06190e] text-[#fafbf9]' : 'bg-[#fafbf9] text-[#111827]'}`}>
      
      {/* ==========================================
          STICKY TOP NAVIGATION BAR (Top Bar Contract Compliant)
          ========================================== */}
      <header className={`sticky top-0 z-50 backdrop-blur-md border-b transition-colors duration-300 ${theme === 'dark' ? 'bg-[#06190e]/90 border-emerald-950/30' : 'bg-[#fafbf9]/95 border-emerald-100/40'}`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Zone 1: Single element brand wordmark */}
          <a href="#home" className="text-xl font-bold tracking-tight font-sans text-emerald-500 hover:text-emerald-400 transition-colors">
            harsh_disgn
          </a>

          {/* Zone 2: 4 Clean navigation links (1-2 words labels, single-line) */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#services" className={`hover:text-emerald-400 transition-colors ${theme === 'dark' ? 'text-zinc-300' : 'text-zinc-600'}`}>Services</a>
            <a href="#portfolio" className={`hover:text-emerald-400 transition-colors ${theme === 'dark' ? 'text-zinc-300' : 'text-zinc-600'}`}>Portfolio</a>
            <a href="#process" className={`hover:text-emerald-400 transition-colors ${theme === 'dark' ? 'text-zinc-300' : 'text-zinc-600'}`}>Process</a>
            <a href="#contact" className={`hover:text-emerald-400 transition-colors ${theme === 'dark' ? 'text-zinc-300' : 'text-zinc-600'}`}>Contact</a>
          </nav>

          {/* Zone 3: Theme switcher & CTA button */}
          <div className="flex items-center gap-4">
            
            {/* Dark room / Light studio theme switch */}
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className={`p-2.5 rounded-lg border transition-all ${theme === 'dark' ? 'bg-[#0e2d1d] border-emerald-900/50 text-emerald-400 hover:bg-[#123d27]' : 'bg-zinc-100 border-zinc-200 text-zinc-600 hover:bg-zinc-200'}`}
              title={theme === 'dark' ? 'Switch to Editorial Light Studio' : 'Switch to Cinematic Darkroom'}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Start a project CTA */}
            <a 
              href="#contact" 
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#06190e] bg-emerald-400 hover:bg-emerald-300 transition-colors rounded-none whitespace-nowrap"
            >
              Start a Project
            </a>

            {/* Mobile menu trigger */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-current"
              aria-label="Open mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        {mobileMenuOpen && (
          <div className={`md:hidden border-t px-6 py-8 flex flex-col gap-6 animate-fadeIn transition-colors duration-300 ${theme === 'dark' ? 'bg-[#06190e] border-emerald-950/50' : 'bg-[#fafbf9] border-emerald-100/50'}`}>
            <nav className="flex flex-col gap-4 text-base font-semibold">
              <a href="#services" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-400 transition-colors">Services</a>
              <a href="#portfolio" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-400 transition-colors">Portfolio</a>
              <a href="#process" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-400 transition-colors">Design Process</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-400 transition-colors">Direct Contact</a>
            </nav>
            <div className="pt-4 border-t border-zinc-800/20 flex flex-col gap-4">
              <a 
                href="#contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center px-5 py-3 text-sm font-semibold uppercase tracking-wider text-[#06190e] bg-emerald-400 hover:bg-emerald-300 transition-colors"
              >
                Start a Project
              </a>
              <div className="flex items-center justify-between text-xs text-zinc-400 px-1">
                <span>Inquiries: tooharsh82@gmail.com</span>
                <span>@harsh_disgn</span>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* ==========================================
          HERO SECTION (Split-screen + Premium Composition)
          ========================================== */}
      <section id="home" className="relative overflow-hidden py-12 md:py-24">
        
        {/* Abstract subtle green studio background grid */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-emerald-500 blur-3xl filter"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-emerald-900 blur-3xl filter"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Column: Bold Typography & Core Proposition */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
            
            {/* Accent narrative tag */}
            <div className="text-xs font-semibold tracking-[0.25em] uppercase text-emerald-500 font-sans flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
              Serious Documentary Aesthetics
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.15] text-wrap-balance">
              Thumbnails Built for <br />
              <span className="font-serif italic font-normal text-emerald-400">Stories That Matter.</span>
            </h1>

            <p className={`text-base md:text-lg max-w-xl leading-relaxed font-sans ${theme === 'dark' ? 'text-zinc-300' : 'text-zinc-600'}`}>
              Serious documentary thumbnails designed to communicate the raw depth of your narrative, provoke intense curiosity, and make the right audience pause mid-scroll. No clickbait clutter—just cinematic design.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="#portfolio" 
                className="group inline-flex items-center justify-center px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#0e2d1d] hover:bg-emerald-900/40 border border-emerald-800/40 transition-all"
              >
                View Portfolio
                <ArrowRight className="ml-2.5 w-4 h-4 transition-transform group-hover:translate-x-1 text-emerald-400" />
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#06190e] bg-emerald-400 hover:bg-emerald-300 transition-colors"
              >
                Start a Project
              </a>
            </div>

            {/* Authentic values list */}
            <div className="pt-8 border-t border-emerald-950/10 dark:border-emerald-950/40 grid grid-cols-3 gap-6">
              <div>
                <div className="text-xs text-zinc-400 uppercase tracking-wider">Focus</div>
                <div className="text-sm font-semibold mt-1">Deep Narrative</div>
              </div>
              <div>
                <div className="text-xs text-zinc-400 uppercase tracking-wider">Aesthetic</div>
                <div className="text-sm font-semibold mt-1">Editorial Film</div>
              </div>
              <div>
                <div className="text-xs text-zinc-400 uppercase tracking-wider">Method</div>
                <div className="text-sm font-semibold mt-1">Custom Composition</div>
              </div>
            </div>
          </div>

          {/* Right Hero Column: Premium Custom Hero Showcase Image */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <div className="relative mx-auto max-w-[480px]">
              
              {/* Outer decorative framing */}
              <div className="absolute -inset-2.5 border border-dashed border-emerald-900/20 rounded-2xl pointer-events-none"></div>

              {/* Featured thumbnail container */}
              <div className={`relative overflow-hidden shadow-2xl transition-all duration-500 hover:scale-[1.01] ${theme === 'dark' ? 'bg-[#0e2d1d] border border-emerald-800/20' : 'bg-white border border-zinc-200'}`}>
                <div className="aspect-[16/9] w-full overflow-hidden relative">
                  <img 
                    src={mediaConfig.heroMainShowcase} 
                    alt="harsh_disgn Signature Documentary Thumbnail Design" 
                    className="w-full h-full object-cover transition-all duration-750"
                    referrerPolicy="no-referrer"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-sans font-medium block">
                        Featured Design
                      </span>
                      <h3 className="text-white text-sm font-semibold tracking-tight mt-0.5">
                        Documentary Showcase
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                    <span className="text-xs font-medium text-zinc-400">Cinematic Storytelling</span>
                  </div>
                  <a 
                    href="#portfolio"
                    className="text-xs text-emerald-400 hover:underline flex items-center gap-1 font-mono font-medium"
                  >
                    View Gallery <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Overlapping secondary cards backdrops to suggest professional depth */}
              <div className="absolute -bottom-6 -right-6 -z-10 w-full aspect-[16/9] bg-[#0e2d1d]/40 border border-emerald-900/30 scale-95 origin-bottom-right opacity-60"></div>
              <div className="absolute -bottom-12 -right-12 -z-20 w-full aspect-[16/9] bg-[#05150c]/30 border border-emerald-950/20 scale-90 origin-bottom-right opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          MARQUEE DECORATIVE TIMELINE DIVISION (Editorial feel)
          ========================================== */}
      <div className="py-5 overflow-hidden border-y border-emerald-950/10 dark:border-emerald-950/40 bg-emerald-950/5 text-emerald-400/90 tracking-widest text-xs font-semibold uppercase">
        <div className="flex gap-12 whitespace-nowrap animate-marquee">
          <span>· SERIOUS DOCUMENTARY THUMBNAILS</span>
          <span>· STORY-FIRST COMPOSITION</span>
          <span>· EDITORIAL TYPOGRAPHY</span>
          <span>· DETAILED CONTRAST EVALUATION</span>
          <span>· PREVENTING CLICKBAIT DEGRADATION</span>
          <span>· SERIOUS DOCUMENTARY THUMBNAILS</span>
          <span>· STORY-FIRST COMPOSITION</span>
          <span>· EDITORIAL TYPOGRAPHY</span>
        </div>
      </div>

      {/* ==========================================
          SERVICES SECTION (Premium Service Cards)
          ========================================== */}
      <section id="services" className={`py-20 md:py-28 transition-colors duration-300 ${theme === 'dark' ? 'bg-[#05150c]' : 'bg-zinc-50'}`}>
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Header block */}
          <div className="max-w-xl mb-16">
            <div className="text-xs font-bold tracking-[0.2em] uppercase text-emerald-500 mb-4">
              01. DESIGN SERVICES
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Aesthetics Tailored for <span className="font-serif italic font-normal text-emerald-400">High-Caliber Media</span>
            </h2>
            <p className={`text-sm md:text-base mt-4 ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'}`}>
              Professional design workflows structured specifically for documentaries, high-quality essays, investigative journalism, and elite historic channels.
            </p>
          </div>

          {/* Services Grid (6 cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1: Documentary Thumbnails */}
            <div className={`p-8 border flex flex-col justify-between transition-all group duration-300 ${theme === 'dark' ? 'bg-[#06190e] border-emerald-950/60 hover:border-emerald-500/40' : 'bg-white border-zinc-200 hover:border-emerald-500/40'}`}>
              <div>
                <div className="w-10 h-10 flex items-center justify-center bg-emerald-500/10 text-emerald-400 mb-6 transition-transform group-hover:scale-105 duration-300">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold tracking-tight mb-2">01 / Documentary Thumbnails</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Deeply atmospheric thumbnail art optimized for multi-part docuseries, geopolitical essays, and historic chronicles. High organic texture.
                </p>
              </div>
              <div className="mt-8 flex items-center text-xs font-bold text-emerald-400 uppercase tracking-widest gap-2">
                Learn Workflow <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>

            {/* Card 2: YouTube Thumbnail Design */}
            <div className={`p-8 border flex flex-col justify-between transition-all group duration-300 ${theme === 'dark' ? 'bg-[#06190e] border-emerald-950/60 hover:border-emerald-500/40' : 'bg-white border-zinc-200 hover:border-emerald-500/40'}`}>
              <div>
                <div className="w-10 h-10 flex items-center justify-center bg-emerald-500/10 text-emerald-400 mb-6 transition-transform group-hover:scale-105 duration-300">
                  <Eye className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold tracking-tight mb-2">02 / YouTube Thumbnail Design</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Refined video covers engineered for intellectual curiosity. Clear graphic hierarchy optimized for pristine visibility on both mobile devices and OLED screens.
                </p>
              </div>
              <div className="mt-8 flex items-center text-xs font-bold text-emerald-400 uppercase tracking-widest gap-2">
                Learn Workflow <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>

            {/* Card 3: Story-Driven Thumbnail Design */}
            <div className={`p-8 border flex flex-col justify-between transition-all group duration-300 ${theme === 'dark' ? 'bg-[#06190e] border-emerald-950/60 hover:border-emerald-500/40' : 'bg-white border-zinc-200 hover:border-emerald-500/40'}`}>
              <div>
                <div className="w-10 h-10 flex items-center justify-center bg-emerald-500/10 text-emerald-400 mb-6 transition-transform group-hover:scale-105 duration-300">
                  <Feather className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold tracking-tight mb-2">03 / Story-Driven Layouts</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Thumbnails that establish an immediate central question or puzzle. Designed around core storytelling elements, inviting viewers into an unsolved mystery.
                </p>
              </div>
              <div className="mt-8 flex items-center text-xs font-bold text-emerald-400 uppercase tracking-widest gap-2">
                Learn Workflow <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>

            {/* Card 4: Cinematic Thumbnail Design */}
            <div className={`p-8 border flex flex-col justify-between transition-all group duration-300 ${theme === 'dark' ? 'bg-[#06190e] border-emerald-950/60 hover:border-emerald-500/40' : 'bg-white border-zinc-200 hover:border-emerald-500/40'}`}>
              <div>
                <div className="w-10 h-10 flex items-center justify-center bg-emerald-500/10 text-emerald-400 mb-6 transition-transform group-hover:scale-105 duration-300">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold tracking-tight mb-2">04 / Cinematic Art Direction</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Film-grade grading, dramatic contrast ratios, custom matte painting, and professional portrait retouching that matches Hollywood quality standards.
                </p>
              </div>
              <div className="mt-8 flex items-center text-xs font-bold text-emerald-400 uppercase tracking-widest gap-2">
                Learn Workflow <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>

            {/* Card 5: A/B Thumbnail Concepts */}
            <div className={`p-8 border flex flex-col justify-between transition-all group duration-300 ${theme === 'dark' ? 'bg-[#06190e] border-emerald-950/60 hover:border-emerald-500/40' : 'bg-white border-zinc-200 hover:border-emerald-500/40'}`}>
              <div>
                <div className="w-10 h-10 flex items-center justify-center bg-emerald-500/10 text-emerald-400 mb-6 transition-transform group-hover:scale-105 duration-300">
                  <Sliders className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold tracking-tight mb-2">05 / A/B Concept Frameworks</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Developing two distinct visual hypotheses for your story. We prepare alternative visual directions to test in real-time on your channel dashboard.
                </p>
              </div>
              <div className="mt-8 flex items-center text-xs font-bold text-emerald-400 uppercase tracking-widest gap-2">
                Learn Workflow <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>

            {/* Card 6: Thumbnail Redesign / Improvement */}
            <div className={`p-8 border flex flex-col justify-between transition-all group duration-300 ${theme === 'dark' ? 'bg-[#06190e] border-emerald-950/60 hover:border-emerald-500/40' : 'bg-white border-zinc-200 hover:border-emerald-500/40'}`}>
              <div>
                <div className="w-10 h-10 flex items-center justify-center bg-emerald-500/10 text-emerald-400 mb-6 transition-transform group-hover:scale-105 duration-300">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold tracking-tight mb-2">06 / Master Redesign Audit</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Analyzing and rebuilding underperforming thumbnails. We dissect composition flaws, fix muddy text contrast, and elevate overall visual drama.
                </p>
              </div>
              <div className="mt-8 flex items-center text-xs font-bold text-emerald-400 uppercase tracking-widest gap-2">
                Learn Workflow <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================
          PORTFOLIO SECTION (Proven Cases in Documentary Art)
          ========================================== */}
      <section id="portfolio" className="py-20 md:py-28 relative">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Header block */}
          <div className="max-w-xl mb-16">
            <div className="text-xs font-bold tracking-[0.2em] uppercase text-emerald-500 mb-4">
              02. SELECTED WORK
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight font-sans">
              Proven Cases in <span className="font-serif italic font-normal text-emerald-400">Documentary Art</span>
            </h2>
            <p className={`text-sm mt-3 ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'}`}>
              Explore our raw visual portfolios. Click on any design to open the high-fidelity lightroom view.
            </p>
          </div>

          {/* Grid list (4 beautiful visual thumbnail slots with NO information, only labeled #1, #2, #3, #4) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {PROJECTS.map((project) => (
              <div 
                key={project.id}
                onClick={() => setActiveProject(project)}
                className={`group cursor-pointer transition-all duration-300 flex flex-col justify-between ${theme === 'dark' ? 'bg-[#0e2d1d]/20 border border-emerald-950/40 hover:border-emerald-500/30' : 'bg-white border border-zinc-100 shadow-sm hover:border-emerald-500/30'}`}
              >
                {/* Visual Area */}
                <div className="aspect-[16/9] overflow-hidden relative bg-black">
                  <img 
                    src={project.image} 
                    alt={`Documentary Case ${project.title}`}
                    className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 group-hover:scale-[1.015] transition-all duration-700 ease-out"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  
                  {/* Subtle black overlay on hover */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>

                  {/* Corner indicator */}
                  <div className="absolute top-4 right-4 bg-[#06190e]/90 backdrop-blur-sm border border-emerald-950 px-3 py-1 text-xs font-serif font-bold italic text-emerald-400">
                    {project.title}
                  </div>
                </div>

                {/* Info Area (Strictly labeled without text metadata as requested) */}
                <div className="p-5 flex items-center justify-between border-t border-emerald-950/10 dark:border-emerald-950/40">
                  <span className="text-lg font-serif italic text-emerald-400 font-bold block">
                    Case {project.title}
                  </span>
                  <div className="text-xs text-zinc-400 font-sans group-hover:text-emerald-400 transition-colors uppercase tracking-wider flex items-center gap-1">
                    Expand Case <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ==========================================
          PORTFOLIO DETAIL LIGHTBOX MODAL (Pure unobstructed view)
          ========================================== */}
      {activeProject && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-fadeIn cursor-zoom-out"
          onClick={() => setActiveProject(null)}
        >
          <div 
            className="relative w-full max-w-5xl bg-zinc-950 border border-emerald-900/40 shadow-2xl overflow-hidden text-[#fafbf9]"
            onClick={(e) => e.stopPropagation()}
          >
            
            {/* Close button top right */}
            <button 
              onClick={() => setActiveProject(null)}
              className="absolute top-4 right-4 z-50 p-3 bg-black/80 border border-emerald-950 text-white hover:text-emerald-400 hover:border-emerald-800 transition-all rounded-none"
              aria-label="Close details"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Lightbox content: Just the image */}
            <div className="aspect-[16/9] w-full relative overflow-hidden bg-zinc-950">
              <img 
                src={activeProject.image} 
                alt={activeProject.title} 
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Minimal footer displaying only the label */}
            <div className="p-4 bg-black/95 flex items-center justify-between text-xs font-mono text-zinc-400 border-t border-emerald-950">
              <span className="text-emerald-400 font-serif font-bold text-sm italic">Case {activeProject.title}</span>
              <span>harsh_disgn Studio Case Portfolio</span>
            </div>

          </div>
        </div>
      )}

      {/* ==========================================
          PROCESS SECTION (4-Step timeline structure)
          ========================================== */}
      <section id="process" className="py-20 md:py-28 relative">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Header */}
          <div className="max-w-xl mb-16">
            <div className="text-xs font-bold tracking-[0.2em] uppercase text-emerald-500 mb-4">
              03. THE WORKFLOW
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Four Steps to <span className="font-serif italic font-normal text-emerald-400">Cinematic Delivery</span>
            </h2>
            <p className={`text-sm mt-4 ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'}`}>
              A professional, linear production model constructed to ensure every detail translates directly to the final layout.
            </p>
          </div>

          {/* Timeline Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Step 1 */}
            <div className={`p-8 border transition-all duration-300 ${theme === 'dark' ? 'bg-[#0e2d1d]/10 border-emerald-950/60 hover:bg-[#0e2d1d]/20' : 'bg-white border-zinc-200'}`}>
              <div className="text-4xl font-serif italic text-emerald-500/20 font-bold mb-6">01</div>
              <h3 className="text-lg font-bold tracking-tight mb-2">Brief</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                We dissect your video topic, deep target audience demographics, intended psychological triggers, and preferred emotional color tones.
              </p>
            </div>

            {/* Step 2 */}
            <div className={`p-8 border transition-all duration-300 ${theme === 'dark' ? 'bg-[#0e2d1d]/10 border-emerald-950/60 hover:bg-[#0e2d1d]/20' : 'bg-white border-zinc-200'}`}>
              <div className="text-4xl font-serif italic text-emerald-500/20 font-bold mb-6">02</div>
              <h3 className="text-lg font-bold tracking-tight mb-2">Research</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                We perform intensive studies on physical references, competitor thumbnails in the exact niche, history archives, and optimal color strategies.
              </p>
            </div>

            {/* Step 3 */}
            <div className={`p-8 border transition-all duration-300 ${theme === 'dark' ? 'bg-[#0e2d1d]/10 border-emerald-950/60 hover:bg-[#0e2d1d]/20' : 'bg-white border-zinc-200'}`}>
              <div className="text-4xl font-serif italic text-emerald-500/20 font-bold mb-6">03</div>
              <h3 className="text-lg font-bold tracking-tight mb-2">Composition</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                We build the draft layout entirely around strong graphic hierarchy, extreme contrast metrics, focal depth mapping, and editorial type selection.
              </p>
            </div>

            {/* Step 4 */}
            <div className={`p-8 border transition-all duration-300 ${theme === 'dark' ? 'bg-[#0e2d1d]/10 border-emerald-950/60 hover:bg-[#0e2d1d]/20' : 'bg-white border-zinc-200'}`}>
              <div className="text-4xl font-serif italic text-emerald-500/20 font-bold mb-6">04</div>
              <h3 className="text-lg font-bold tracking-tight mb-2">Final Delivery</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                The leading layout concept is hand-polished and scaled. We export high-fidelity, optimized final formats calibrated for YouTube CTR engine dashboards.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================
          CONTACT DETAILS SECTION (Official Coordinates)
          ========================================== */}
      <section id="contact" className="py-20 md:py-28 relative overflow-hidden border-t border-emerald-950/10 dark:border-emerald-950/40">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs font-bold tracking-[0.2em] uppercase text-emerald-500 mb-4">
              04. COORDINATES
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Connect with <span className="font-serif italic font-normal text-emerald-400">harsh_disgn</span>
            </h2>
            <p className={`text-sm mt-4 leading-relaxed ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'}`}>
              Have a specific documentary format or custom request? Connect directly with the Design Director using our verified credentials below.
            </p>
          </div>

          {/* Centered horizontal 3-column parameters grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            
            {/* Email card */}
            <div className={`p-8 border flex flex-col items-center text-center justify-between transition-colors ${theme === 'dark' ? 'bg-[#0e2d1d]/20 border-emerald-950/40 hover:bg-[#0e2d1d]/30' : 'bg-white border-zinc-200 shadow-sm'}`}>
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4 shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-mono block mb-1">
                  Direct Email Inbox
                </span>
                <span className="text-sm font-bold text-emerald-400 font-mono select-all block">
                  tooharsh82@gmail.com
                </span>
              </div>
            </div>

            {/* Instagram card */}
            <div className={`p-8 border flex flex-col items-center text-center justify-between transition-colors ${theme === 'dark' ? 'bg-[#0e2d1d]/20 border-emerald-950/40 hover:bg-[#0e2d1d]/30' : 'bg-white border-zinc-200 shadow-sm'}`}>
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4 shrink-0">
                <Instagram className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-mono block mb-1">
                  Official Instagram Handle
                </span>
                <a href="https://instagram.com/harsh_disgn" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-white hover:underline hover:text-emerald-400 transition-colors block">
                  @harsh_disgn
                </a>
              </div>
            </div>

            {/* Zone parameters card */}
            <div className={`p-8 border flex flex-col items-center text-center justify-between transition-colors ${theme === 'dark' ? 'bg-[#0e2d1d]/20 border-emerald-950/40 hover:bg-[#0e2d1d]/30' : 'bg-white border-zinc-200 shadow-sm'}`}>
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4 shrink-0">
                <Sliders className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-mono block mb-1">
                  Availability / Booking Zone
                </span>
                <p className="text-sm font-bold text-zinc-300">
                  GMT +5:30 · Accepting Inquiries
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ==========================================
          FOOTER (Clean minimal structural alignment)
          ========================================== */}
      <footer className={`border-t transition-colors duration-300 ${theme === 'dark' ? 'bg-[#04120a] border-emerald-950/40 text-zinc-400' : 'bg-zinc-900 border-zinc-800 text-zinc-300'}`}>
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            
            {/* Left Brand Col */}
            <div className="md:col-span-5 space-y-4">
              <h3 className="text-lg font-bold tracking-tight text-emerald-400 font-sans">
                harsh_disgn
              </h3>
              <p className="text-sm max-w-sm leading-relaxed text-zinc-400">
                Premium, serious documentary thumbnail design studio. Calibrated for high narrative resonance, cinematic composition, and pristine visual hierarchy.
              </p>
            </div>

            {/* Mid Links Col */}
            <div className="md:col-span-4 grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-xs uppercase tracking-wider font-bold text-white mb-4">Studio Links</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#services" className="hover:text-emerald-400 transition-colors">Services</a></li>
                  <li><a href="#portfolio" className="hover:text-emerald-400 transition-colors">Selected Portfolio</a></li>
                  <li><a href="#process" className="hover:text-emerald-400 transition-colors">Our Process</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-wider font-bold text-white mb-4">Coordinates</h4>
                <ul className="space-y-2 text-sm">
                  <li><span className="text-zinc-400 font-mono text-xs select-all">tooharsh82@gmail.com</span></li>
                  <li><a href="https://instagram.com/harsh_disgn" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">Instagram</a></li>
                  <li><span className="text-zinc-500 text-xs">Based in GMT +5:30</span></li>
                </ul>
              </div>
            </div>

            {/* Right Newsletter / Note col */}
            <div className="md:col-span-3 space-y-4">
              <h4 className="text-xs uppercase tracking-wider font-bold text-white">Quality Guarantee</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                We deliver complete A/B conceptual layouts to guarantee maximum visual depth. We strictly avoid fake metrics or exaggerated automated estimates.
              </p>
              <div className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping"></span>
                Q3 Intake Fully Subscribed
              </div>
            </div>

          </div>

          <div className="mt-12 pt-8 border-t border-zinc-800/10 dark:border-zinc-800/20 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
            <p className="text-zinc-500">
              © {new Date().getFullYear()} harsh_disgn studio. All rights reserved. Made in deep focus.
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
