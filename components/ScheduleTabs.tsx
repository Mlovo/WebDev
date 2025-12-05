import React, { useState } from 'react';
import { Semester, ScheduleItem } from '../types';
import { Calendar } from 'lucide-react';

interface ScheduleTabsProps {
  sem1: ScheduleItem[];
  sem2: ScheduleItem[];
}

export const ScheduleTabs: React.FC<ScheduleTabsProps> = ({ sem1, sem2 }) => {
  const [activeTab, setActiveTab] = useState<Semester>(Semester.FIRST);

  const currentItems = activeTab === Semester.FIRST ? sem1 : sem2;

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex justify-center mb-8">
        <div className="bg-slate-900 p-1 rounded-xl inline-flex shadow-lg border border-slate-800">
          {Object.values(Semester).map((sem) => (
            <button
              key={sem}
              onClick={() => setActiveTab(sem)}
              className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === sem
                  ? 'bg-cyan-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              {sem}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-slate-900/50 rounded-2xl border border-slate-800 overflow-hidden shadow-xl">
        <div className="p-6">
          <div className="flex items-center mb-6 text-slate-200">
            <Calendar className="w-5 h-5 mr-2 text-cyan-400" />
            <h3 className="text-xl font-bold">Календарне планування: {activeTab}</h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="py-3 px-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Тиждень</th>
                  <th className="py-3 px-4 text-xs font-bold text-slate-400 uppercase tracking-wider w-32">Дати</th>
                  <th className="py-3 px-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Тема уроку</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/50">
                {currentItems.map((item, idx) => (
                  <tr key={idx} className="group hover:bg-slate-800/30 transition-colors">
                    <td className="py-4 px-4 font-mono text-sm text-slate-500 group-hover:text-cyan-500">{item.week}</td>
                    <td className="py-4 px-4 text-sm text-slate-400 whitespace-nowrap">{item.dateRange}</td>
                    <td className="py-4 px-4 text-sm text-slate-200 font-medium">{item.topic}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};