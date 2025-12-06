import React, { useState, useEffect } from 'react';
import { User, UserRole } from './types';
import { Landing } from './pages/Landing';
import { StudentDashboard } from './pages/StudentDashboard';
import { TeacherDashboard } from './pages/TeacherDashboard';
import { Collaboration } from './pages/Collaboration';
import { Layout } from './components/Layout';
import { CURRENT_USER_STUDENT, CURRENT_USER_TEACHER } from './mockData';

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [activePage, setActivePage] = useState<string>('dashboard');

  // Simple Router based on activePage state
  const renderContent = () => {
    switch (activePage) {
      case 'dashboard':
        return currentUser?.role === 'student' ? <StudentDashboard /> : <TeacherDashboard />;
      case 'collaboration':
        return <Collaboration />;
      case 'courses':
        return (
          <div className="text-center py-20">
             <h2 className="text-2xl text-slate-400">Course Management Module</h2>
             <p className="mt-2 text-slate-500">List of enrolled courses and detailed materials would appear here.</p>
          </div>
        );
      case 'predictions':
        return (
           <div className="text-center py-20">
             <h2 className="text-2xl text-slate-400">Detailed AI Analysis</h2>
             <p className="mt-2 text-slate-500">Deep dive into Random Forest model parameters and historical data.</p>
          </div>
        );
      default:
        return currentUser?.role === 'student' ? <StudentDashboard /> : <TeacherDashboard />;
    }
  };

  const handleLogin = (role: 'student' | 'teacher') => {
    // Simulate Login
    if (role === 'student') {
      setCurrentUser(CURRENT_USER_STUDENT);
    } else {
      setCurrentUser(CURRENT_USER_TEACHER);
    }
    setActivePage('dashboard');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setActivePage('dashboard');
  };

  if (!currentUser) {
    return <Landing onLogin={handleLogin} />;
  }

  return (
    <Layout
      user={currentUser}
      role={currentUser.role}
      activePage={activePage}
      onNavigate={setActivePage}
      onLogout={handleLogout}
    >
      {renderContent()}
    </Layout>
  );
};

export default App;