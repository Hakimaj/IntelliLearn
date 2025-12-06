import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { User, UserRole } from '../types';
import { Bell, Menu, X } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  user: User;
  role: UserRole;
  activePage: string;
  onNavigate: (page: string) => void;
  onLogout: () => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, user, role, activePage, onNavigate, onLogout }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 flex font-sans text-slate-200">
      <Sidebar 
        role={role} 
        activePage={activePage} 
        onNavigate={(p) => { onNavigate(p); setSidebarOpen(false); }} 
        onLogout={onLogout}
        isOpen={sidebarOpen}
      />

      <div className="flex-1 md:ml-64 flex flex-col min-h-screen transition-all duration-300">
        {/* Mobile Header / Top Bar */}
        <header className="sticky top-0 z-40 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 h-16 px-4 flex items-center justify-between">
          <div className="flex items-center">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden mr-4 text-slate-400 hover:text-white"
            >
              {sidebarOpen ? <X /> : <Menu />}
            </button>
            <h2 className="text-lg font-semibold text-white hidden sm:block">
              {role === 'student' ? 'Student Portal' : 'Instructor Portal'}
            </h2>
          </div>

          <div className="flex items-center space-x-4">
             {/* Notification Bell */}
            <button className="relative p-2 text-slate-400 hover:text-white transition-colors rounded-full hover:bg-slate-800">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            
            {/* User Profile */}
            <div className="flex items-center space-x-3 pl-4 border-l border-slate-700">
              <div className="text-right hidden sm:block">
                <div className="text-sm font-medium text-white">{user.name}</div>
                <div className="text-xs text-slate-500 capitalize">{user.role}</div>
              </div>
              <img 
                src={user.avatar} 
                alt={user.name} 
                className="w-8 h-8 rounded-full border border-slate-600"
              />
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 p-4 md:p-8 overflow-y-auto overflow-x-hidden">
          <div className="max-w-7xl mx-auto animate-fade-in">
             {children}
          </div>
        </main>
      </div>
      
      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};