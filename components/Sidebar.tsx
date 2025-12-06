import React from 'react';
import { 
  LayoutDashboard, 
  BookOpen, 
  Users, 
  MessageSquare, 
  Settings, 
  LogOut,
  TrendingUp
} from 'lucide-react';
import { Logo } from './Logo';
import { UserRole } from '../types';

interface SidebarProps {
  role: UserRole;
  activePage: string;
  onNavigate: (page: string) => void;
  onLogout: () => void;
  isOpen: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({ role, activePage, onNavigate, onLogout, isOpen }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, roles: ['student', 'teacher'] },
    { id: 'courses', label: 'My Courses', icon: BookOpen, roles: ['student', 'teacher'] },
    { id: 'predictions', label: 'AI Insights', icon: TrendingUp, roles: ['student', 'teacher'] },
    { id: 'collaboration', label: 'Collab & Forum', icon: Users, roles: ['student', 'teacher'] },
    { id: 'messages', label: 'Messages', icon: MessageSquare, roles: ['student', 'teacher'] },
  ];

  return (
    <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 border-r border-slate-800 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
      <div className="flex items-center h-16 px-6 border-b border-slate-800">
        <Logo className="w-8 h-8 mr-3" />
        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          IntelliLearn
        </span>
      </div>

      <nav className="p-4 space-y-2">
        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4 px-2">
          Main Menu
        </div>
        {menuItems.filter(item => item.roles.includes(role || '')).map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`flex items-center w-full px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-150 ${
              activePage === item.id 
                ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' 
                : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
            }`}
          >
            <item.icon className="w-5 h-5 mr-3" />
            {item.label}
          </button>
        ))}

        <div className="mt-8 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4 px-2">
          Settings
        </div>
        <button
          onClick={() => onNavigate('settings')}
          className="flex items-center w-full px-4 py-3 text-sm font-medium text-slate-400 rounded-lg hover:bg-slate-800 hover:text-slate-200 transition-colors"
        >
          <Settings className="w-5 h-5 mr-3" />
          Settings
        </button>
        <button
          onClick={onLogout}
          className="flex items-center w-full px-4 py-3 text-sm font-medium text-red-400 rounded-lg hover:bg-red-500/10 hover:text-red-300 transition-colors mt-auto"
        >
          <LogOut className="w-5 h-5 mr-3" />
          Logout
        </button>
      </nav>
      
      {/* Network Status Indicator - referencing "Resource Constraints" from paper */}
      <div className="absolute bottom-4 left-0 w-full px-6">
        <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg border border-slate-700">
          <div className="flex items-center space-x-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-xs text-slate-400">System Online</span>
          </div>
          <span className="text-xs font-mono text-slate-500">AWS</span>
        </div>
      </div>
    </div>
  );
};