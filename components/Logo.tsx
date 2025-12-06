import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "h-8 w-8" }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" /> {/* cyan-500 */}
          <stop offset="100%" stopColor="#3b82f6" /> {/* blue-500 */}
        </linearGradient>
      </defs>
      
      {/* Graduation Cap Top */}
      <path 
        d="M50 15 L10 35 L50 55 L90 35 Z" 
        stroke="url(#logoGradient)" 
        strokeWidth="6" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      
      {/* Neural Network Nodes */}
      <circle cx="50" cy="55" r="5" fill="url(#logoGradient)" />
      <circle cx="30" cy="75" r="5" fill="url(#logoGradient)" />
      <circle cx="70" cy="75" r="5" fill="url(#logoGradient)" />
      <circle cx="50" cy="90" r="5" fill="url(#logoGradient)" />
      
      {/* Connections */}
      <line x1="50" y1="55" x2="30" y2="75" stroke="#94a3b8" strokeWidth="2" />
      <line x1="50" y1="55" x2="70" y2="75" stroke="#94a3b8" strokeWidth="2" />
      <line x1="30" y1="75" x2="50" y2="90" stroke="#94a3b8" strokeWidth="2" />
      <line x1="70" y1="75" x2="50" y2="90" stroke="#94a3b8" strokeWidth="2" />
      
      {/* Tassel */}
      <path d="M90 35 V55" stroke="url(#logoGradient)" strokeWidth="4" />
      <circle cx="90" cy="55" r="3" fill="#3b82f6" />
    </svg>
  );
};