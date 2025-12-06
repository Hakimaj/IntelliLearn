import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  AreaChart, Area, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar 
} from 'recharts';
import { Calendar, Clock, AlertTriangle, CheckCircle, BookOpen } from 'lucide-react';
import { ASSIGNMENTS, COURSES, PREDICTION_DATA } from '../mockData';

const data = [
  { name: 'Week 1', score: 65 },
  { name: 'Week 2', score: 70 },
  { name: 'Week 3', score: 68 },
  { name: 'Week 4', score: 75 },
  { name: 'Week 5', score: 82 },
  { name: 'Week 6', score: 85 },
];

const radarData = [
  { subject: 'Attendance', A: 85, fullMark: 100 },
  { subject: 'Quizzes', A: 72, fullMark: 100 },
  { subject: 'Assignments', A: 90, fullMark: 100 },
  { subject: 'Forum', A: 45, fullMark: 100 },
  { subject: 'Time Spent', A: 60, fullMark: 100 },
];

export const StudentDashboard: React.FC = () => {
  return (
    <div className="space-y-6 pb-20">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-white">Student Dashboard</h1>
        <p className="text-slate-400">Welcome back, Abdulhakim. Here is your AI-driven academic overview.</p>
      </header>

      {/* Top Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-slate-800/50 border border-slate-700 p-6 rounded-xl flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <BookOpen size={64} className="text-cyan-400" />
          </div>
          <div>
            <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">Courses Active</p>
            <h3 className="text-3xl font-bold text-white mt-1">{COURSES.length}</h3>
          </div>
          <div className="mt-4 flex items-center text-emerald-400 text-sm">
            <CheckCircle size={16} className="mr-1" />
            <span>Good standing</span>
          </div>
        </div>

        <div className="bg-slate-800/50 border border-slate-700 p-6 rounded-xl flex flex-col justify-between relative overflow-hidden group">
           <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Clock size={64} className="text-purple-400" />
          </div>
          <div>
            <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">Assignments Pending</p>
            <h3 className="text-3xl font-bold text-white mt-1">{ASSIGNMENTS.filter(a => a.status === 'pending').length}</h3>
          </div>
          <div className="mt-4 flex items-center text-amber-400 text-sm">
             <Calendar size={16} className="mr-1" />
             <span>Next due: Dec 15</span>
          </div>
        </div>

        {/* AI Prediction Card */}
        <div className="col-span-1 md:col-span-2 bg-gradient-to-br from-slate-900 to-indigo-950 border border-indigo-500/30 p-6 rounded-xl relative">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="px-2 py-1 bg-indigo-500/20 text-indigo-300 text-xs font-bold rounded border border-indigo-500/30">AI PREDICTION</span>
                <span className="text-slate-400 text-xs">Updated 2h ago</span>
              </div>
              <h3 className="text-xl font-bold text-white">Projected Final Grade: <span className="text-emerald-400">{PREDICTION_DATA.predictedGrade}%</span></h3>
              <p className="text-slate-400 text-sm mt-1 max-w-sm">
                Based on your current trajectory (Attendance: {PREDICTION_DATA.factors.attendance}%, Quizzes: {PREDICTION_DATA.factors.quizScores}%), 
                the Random Forest model predicts a passing grade.
              </p>
            </div>
            <div className="text-right">
              <div className="text-4xl font-bold text-indigo-400">{PREDICTION_DATA.confidenceScore}%</div>
              <div className="text-xs text-indigo-300/60 uppercase">Model Confidence</div>
            </div>
          </div>
          {/* Progress Bar for Risk */}
          <div className="mt-6">
             <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-400">Risk Level</span>
                <span className="text-amber-400 font-bold uppercase">{PREDICTION_DATA.riskLevel}</span>
             </div>
             <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                <div className="bg-amber-500 h-full rounded-full" style={{ width: '45%' }}></div>
             </div>
             <div className="mt-2 text-xs text-amber-300/80 flex items-center">
                <AlertTriangle size={12} className="mr-1" />
                Suggestion: Increase forum participation to improve score.
             </div>
          </div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-slate-800/50 border border-slate-700 p-6 rounded-xl">
          <h3 className="text-lg font-semibold text-white mb-6">Performance Trend</h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="name" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#f1f5f9' }}
                  itemStyle={{ color: '#22d3ee' }}
                />
                <Area type="monotone" dataKey="score" stroke="#06b6d4" fillOpacity={1} fill="url(#colorScore)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-slate-800/50 border border-slate-700 p-6 rounded-xl">
          <h3 className="text-lg font-semibold text-white mb-2">Skill Analysis</h3>
          <p className="text-xs text-slate-500 mb-4">Engagement metrics vs Class Average</p>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                <PolarGrid stroke="#334155" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 10 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} />
                <Radar name="Student" dataKey="A" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.3} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Assignments List */}
      <div className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden">
        <div className="p-6 border-b border-slate-700 flex justify-between items-center">
          <h3 className="text-lg font-semibold text-white">Upcoming Assignments</h3>
          <button className="text-sm text-cyan-400 hover:text-cyan-300">View All</button>
        </div>
        <div className="divide-y divide-slate-700">
          {ASSIGNMENTS.map((assign) => (
            <div key={assign.id} className="p-4 flex items-center justify-between hover:bg-slate-800/80 transition-colors">
              <div className="flex items-center space-x-4">
                <div className={`w-2 h-12 rounded-full ${
                  assign.status === 'submitted' ? 'bg-emerald-500' : 
                  assign.status === 'late' ? 'bg-red-500' : 'bg-amber-500'
                }`}></div>
                <div>
                  <h4 className="text-white font-medium">{assign.title}</h4>
                  <p className="text-sm text-slate-400">
                    {COURSES.find(c => c.id === assign.courseId)?.code} • Due: {assign.dueDate}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                {assign.grade && (
                  <span className="text-lg font-bold text-emerald-400">{assign.grade}/100</span>
                )}
                <span className={`px-3 py-1 rounded-full text-xs font-medium uppercase border ${
                   assign.status === 'submitted' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' :
                   assign.status === 'graded' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' :
                   'bg-amber-500/10 text-amber-400 border-amber-500/20'
                }`}>
                  {assign.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};