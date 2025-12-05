import React from 'react';
import { Navbar } from './components/Navbar';
import { Section } from './components/Section';
import { Accordion } from './components/Accordion';
import { PlanTable } from './components/PlanTable';
import { ScheduleTabs } from './components/ScheduleTabs';
import { HERO_FEATURES, PROGRAM_SECTIONS, THEMATIC_PLAN, SCHEDULE_SEM1, SCHEDULE_SEM2 } from './constants';
import { Github, Monitor, ExternalLink } from 'lucide-react';

function App() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${targetId}`);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section id="home" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Background Grid Decoration */}
          <div className="absolute inset-0 z-0 opacity-20" 
               style={{ 
                 backgroundImage: 'radial-gradient(#38bdf8 1px, transparent 1px)', 
                 backgroundSize: '40px 40px' 
               }}>
          </div>
          
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-medium mb-6 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 mr-2 animate-pulse"></span>
              Набір на 2024-2025 навчальний рік
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
              Гурток: Основи <br className="hidden md:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-500">
                Web-розробки та Web-дизайну
              </span>
            </h1>
            
            <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-400 mb-10">
              Комплексна навчальна програма для майбутніх IT-фахівців. 
              Вивчай HTML, CSS, JavaScript, створюй дизайн у Figma та керуй кодом через Git.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
              {HERO_FEATURES.map((feature, idx) => (
                <div key={idx} className="flex flex-col items-center p-4 bg-slate-900/50 rounded-xl border border-slate-800 hover:border-cyan-500/30 transition-colors">
                  <div className="text-cyan-400 mb-2">{feature.icon}</div>
                  <span className="text-sm font-semibold">{feature.text}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-4">
              <a 
                href="#program" 
                onClick={(e) => handleSmoothScroll(e, 'program')}
                className="px-8 py-3 rounded-lg bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/20"
              >
                Дивитись програму
              </a>
              <a 
                href="#schedule" 
                onClick={(e) => handleSmoothScroll(e, 'schedule')}
                className="px-8 py-3 rounded-lg bg-slate-800 text-white font-medium hover:bg-slate-700 transition-colors border border-slate-700"
              >
                Розклад занять
              </a>
            </div>
          </div>
        </section>

        {/* Program / Explanatory Note Section */}
        <Section 
          id="program" 
          subtitle="Ключові аспекти навчальної програми, мета та очікувані результати навчання."
        >
          <Accordion items={PROGRAM_SECTIONS} />
        </Section>

        {/* Thematic Plan Section */}
        <Section 
          id="plan" 
          title="Тематичний план" 
          subtitle="Послідовність вивчення тем з розподілом годин на теорію та практику."
        >
          <PlanTable items={THEMATIC_PLAN} />
        </Section>

        {/* Schedule Section */}
        <Section 
          id="schedule" 
          title="Календарне планування" 
          subtitle="Розподіл навчального навантаження за семестрами."
        >
          <ScheduleTabs sem1={SCHEDULE_SEM1} sem2={SCHEDULE_SEM2} />
        </Section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center text-slate-200 font-bold text-xl mb-2">
                <Monitor className="w-6 h-6 mr-2 text-cyan-500" />
                Web Dev Club
              </div>
              <p className="text-slate-500 text-sm">
                © 2025 Всі права захищено. <br />
                Навчальний заклад "Mlovo IT Step Junior"
              </p>
            </div>
            
            <div className="flex space-x-6">
              <a href="https://github.com/Mlovo" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <span className="sr-only">GitHub</span>
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;