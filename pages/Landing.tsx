import React from 'react';
import { Logo } from '../components/Logo';
import { Brain, Users, TrendingUp, ShieldCheck } from 'lucide-react';

interface LandingProps {
  onLogin: (role: 'student' | 'teacher') => void;
}

export const Landing: React.FC<LandingProps> = ({ onLogin }) => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-cyan-500/30">
      {/* Navbar */}
      <nav className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Logo className="h-8 w-8 mr-2" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                IntelliLearn
              </span>
            </div>
            <div className="flex space-x-4">
              <button 
                onClick={() => onLogin('student')}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                Student Portal
              </button>
              <button 
                onClick={() => onLogin('teacher')}
                className="text-sm font-medium px-4 py-2 bg-cyan-600 hover:bg-cyan-500 rounded-md text-white transition-all shadow-[0_0_15px_rgba(8,145,178,0.3)]"
              >
                Instructor Login
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden pt-16 pb-32">
        <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full z-0">
           <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-[100px]"></div>
           <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
            <span className="block text-slate-100">Smart Academic</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
              Management & Prediction
            </span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-400">
            Bridging the gap in Ethiopian higher education with AI-driven insights, 
            early warning systems, and collaborative tools.
          </p>
          
          <div className="mt-10 flex justify-center gap-4">
            <button 
              onClick={() => onLogin('student')}
              className="px-8 py-4 bg-slate-800 border border-slate-700 hover:bg-slate-700 rounded-lg text-lg font-semibold transition-all w-48"
            >
              I'm a Student
            </button>
            <button 
               onClick={() => onLogin('teacher')}
               className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-lg text-lg font-semibold text-white shadow-lg shadow-cyan-900/20 transition-all w-48"
            >
              I'm a Teacher
            </button>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="bg-slate-900 py-24 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">Why IntelliLearn?</h2>
            <p className="mt-2 text-slate-400">Based on constructivist learning theory and educational data mining.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<TrendingUp className="w-8 h-8 text-cyan-400" />}
              title="Predictive Analytics"
              desc="Random Forest models analyze attendance and quiz scores to forecast academic outcomes."
            />
            <FeatureCard 
              icon={<Brain className="w-8 h-8 text-purple-400" />}
              title="AI Insights"
              desc="Early warning system flags at-risk students, enabling proactive teacher intervention."
            />
            <FeatureCard 
              icon={<Users className="w-8 h-8 text-emerald-400" />}
              title="Collaborative Learning"
              desc="Forums and peer messaging foster a shared learning community to overcome isolation."
            />
            <FeatureCard 
              icon={<ShieldCheck className="w-8 h-8 text-orange-400" />}
              title="Cloud Native"
              desc="Hosted on AWS for scalability and accessibility even in resource-limited environments."
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-500 text-sm">
          <p>&copy; 2025 Bahir Dar University - Faculty of Electrical and Computer Engineering.</p>
          <p className="mt-2">Developed by Abdulhakim Jejaw, Rihad Gali, and Lalissa Soresa.</p>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <div className="p-6 bg-slate-800/50 border border-slate-700 rounded-xl hover:border-cyan-500/50 transition-colors">
    <div className="mb-4 bg-slate-900 w-16 h-16 rounded-lg flex items-center justify-center border border-slate-700">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-slate-400 leading-relaxed">
      {desc}
    </p>
  </div>
);