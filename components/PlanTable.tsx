import React from 'react';
import { PlanItem } from '../types';

interface PlanTableProps {
  items: PlanItem[];
}

export const PlanTable: React.FC<PlanTableProps> = ({ items }) => {
  const totalHours = items.reduce((acc, curr) => acc + curr.totalHours, 0);
  const totalTheory = items.reduce((acc, curr) => acc + curr.theoryHours, 0);
  const totalPractice = items.reduce((acc, curr) => acc + curr.practiceHours, 0);

  return (
    <div className="overflow-x-auto shadow-xl rounded-lg border border-slate-800 bg-slate-900/50">
      <table className="w-full text-left text-sm text-slate-400">
        <thead className="bg-slate-800 text-xs uppercase text-slate-200 font-bold">
          <tr>
            <th scope="col" rowSpan={2} className="px-6 py-4 rounded-tl-lg border-b border-r border-slate-700 w-16 text-center align-middle">№</th>
            <th scope="col" rowSpan={2} className="px-6 py-4 w-full border-b border-r border-slate-700 align-middle">Тема</th>
            <th scope="col" colSpan={3} className="px-6 py-2 text-center border-b border-slate-700 rounded-tr-lg">Кількість годин</th>
          </tr>
          <tr className="text-center">
            <th scope="col" className="px-4 py-2 border-r border-slate-700 text-slate-300">усього</th>
            <th scope="col" className="px-4 py-2 border-r border-slate-700 text-slate-300">теоретичні</th>
            <th scope="col" className="px-4 py-2 text-slate-300">практичні</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-800">
          {items.map((item) => (
            <tr key={item.id} className="hover:bg-slate-800/50 transition-colors">
              <td className="px-6 py-4 font-mono text-cyan-500 text-center border-r border-slate-800/50">{item.id}</td>
              <td className="px-6 py-4 font-medium text-slate-200 border-r border-slate-800/50">{item.topic}</td>
              <td className="px-4 py-4 text-center font-mono text-slate-300 border-r border-slate-800/50">{item.totalHours}</td>
              <td className="px-4 py-4 text-center font-mono text-slate-400 border-r border-slate-800/50">{item.theoryHours}</td>
              <td className="px-4 py-4 text-center font-mono text-cyan-400">{item.practiceHours}</td>
            </tr>
          ))}
        </tbody>
        <tfoot className="bg-slate-800/80 font-bold text-slate-200">
          <tr>
            <td colSpan={2} className="px-6 py-4 text-right border-r border-slate-700">Разом:</td>
            <td className="px-4 py-4 text-center font-mono border-r border-slate-700 text-white">{totalHours}</td>
            <td className="px-4 py-4 text-center font-mono border-r border-slate-700 text-slate-300">{totalTheory}</td>
            <td className="px-4 py-4 text-center font-mono text-cyan-400">{totalPractice}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};