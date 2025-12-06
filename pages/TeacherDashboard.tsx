import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Users, AlertOctagon, Send, FileText, Plus } from 'lucide-react';
import { AT_RISK_STUDENTS } from '../mockData';

const classPerformance = [
  { grade: 'A', students: 5 },
  { grade: 'B', students: 12 },
  { grade: 'C', students: 18 },
  { grade: 'D', students: 7 },
  { grade: 'F', students: 3 },
];

export const TeacherDashboard: React.FC = () => {
  return (
    <div className="space-y-8 pb-20">
      <header className="flex justify-between items-center">
        <div>
           <h1 className="text-3xl font-bold text-white">Instructor Dashboard</h1>
           <p className="text-slate-400">Overview for Research Methods (ENG-4151)</p>
        </div>
        <button className="flex items-center px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg shadow-lg shadow-cyan-900/20 transition-all">
          <Plus size={18} className="mr-2" />
          New Assignment
        </button>
      </header>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-800/50 border border-slate-700 p-6 rounded-xl flex items-center">
          <div className="p-3 rounded-full bg-blue-500/10 text-blue-400 mr-4">
            <Users size={32} />
          </div>
          <div>
            <div className="text-2xl font-bold text-white">45</div>
            <div className="text-sm text-slate-400">Total Students</div>
          </div>
        </div>
        <div className="bg-slate-800/50 border border-slate-700 p-6 rounded-xl flex items-center">
          <div className="p-3 rounded-full bg-emerald-500/10 text-emerald-400 mr-4">
            <FileText size={32} />
          </div>
          <div>
            <div className="text-2xl font-bold text-white">92%</div>
            <div className="text-sm text-slate-400">Submission Rate</div>
          </div>
        </div>
        <div className="bg-slate-800/50 border border-slate-700 p-6 rounded-xl flex items-center">
          <div className="p-3 rounded-full bg-red-500/10 text-red-400 mr-4">
            <AlertOctagon size={32} />
          </div>
          <div>
            <div className="text-2xl font-bold text-white">{AT_RISK_STUDENTS.filter(s => s.risk === 'high').length}</div>
            <div className="text-sm text-slate-400">Students At Risk</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* At Risk List - AI Intervention */}
        <div className="lg:col-span-2 bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden">
          <div className="p-6 border-b border-slate-700 bg-red-900/10">
            <div className="flex items-center space-x-2">
               <AlertOctagon className="text-red-400" />
               <h3 className="text-lg font-bold text-white">At-Risk Students (AI Detected)</h3>
            </div>
            <p className="text-xs text-red-200/60 mt-1">
              The following students are predicted to fail based on recent activity. Recommended action: Early Intervention.
            </p>
          </div>
          <table className="w-full text-left text-sm text-slate-400">
            <thead className="bg-slate-900/50 uppercase text-xs font-semibold text-slate-500">
              <tr>
                <th className="px-6 py-4">Student</th>
                <th className="px-6 py-4">Risk Factor</th>
                <th className="px-6 py-4">Failure Prob.</th>
                <th className="px-6 py-4">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700">
              {AT_RISK_STUDENTS.filter(s => s.risk !== 'low').map((student) => (
                <tr key={student.id} className="hover:bg-slate-800/50">
                  <td className="px-6 py-4 font-medium text-slate-200">{student.name}</td>
                  <td className="px-6 py-4">{student.issue}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="w-16 bg-slate-700 rounded-full h-1.5 mr-2">
                        <div 
                          className={`h-1.5 rounded-full ${student.risk === 'high' ? 'bg-red-500' : 'bg-amber-500'}`} 
                          style={{ width: `${student.probability}%` }}
                        ></div>
                      </div>
                      <span className={student.risk === 'high' ? 'text-red-400' : 'text-amber-400'}>{student.probability}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <button className="flex items-center px-3 py-1 bg-slate-700 hover:bg-slate-600 text-white rounded text-xs transition-colors">
                      <Send size={12} className="mr-1" /> Message
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Grade Distribution Chart */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-6">Grade Distribution Forecast</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={classPerformance}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="grade" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip 
                  cursor={{fill: '#1e293b'}}
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#f1f5f9' }}
                />
                <Bar dataKey="students" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={30} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 p-4 bg-slate-900 rounded-lg text-xs text-slate-400">
            <span className="font-bold text-slate-300">Analysis:</span> The class average is trending upwards, but the divergence between top and bottom performers is increasing.
          </div>
        </div>
      </div>
    </div>
  );
};