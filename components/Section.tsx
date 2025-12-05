import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, className = "" }) => {
  return (
    <section id={id} className={`py-20 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-20 ${className}`}>
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4 tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-500">
            {title}
          </span>
        </h2>
        {subtitle && (
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500 mx-auto mt-6 rounded-full opacity-70"></div>
      </div>
      {children}
    </section>
  );
};