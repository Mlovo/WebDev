import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { ProgramSection } from '../types';

interface AccordionProps {
  items: ProgramSection[];
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {items.map((item, index) => {
        const isOpen = activeIndex === index;
        return (
          <div 
            key={index} 
            className={`border rounded-lg transition-colors duration-300 ${
              isOpen ? 'border-cyan-500/50 bg-slate-900' : 'border-slate-800 bg-slate-900/50 hover:border-slate-700'
            }`}
          >
            <button
              onClick={() => toggleIndex(index)}
              className="flex justify-between items-center w-full px-6 py-4 text-left focus:outline-none"
            >
              <span className={`text-lg font-semibold ${isOpen ? 'text-cyan-400' : 'text-slate-200'}`}>
                {item.title}
              </span>
              {isOpen ? (
                <ChevronUp className="w-5 h-5 text-cyan-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-slate-500" />
              )}
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-6 pb-6 text-slate-400 whitespace-pre-line leading-relaxed border-t border-slate-800/50 pt-4">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};