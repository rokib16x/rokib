import React, { useState } from 'react';
import { motion } from 'framer-motion';
import TetrisMine from '../games/TetrisMine';

const MobileSimulator: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<string>('home');

  const screens: Record<string, JSX.Element> = {
    home: (
      <div className="flex flex-col items-center justify-center h-full">
        <h3 className="text-xl font-bold mb-4">Welcome to My App</h3>
        <button
          onClick={() => setCurrentScreen('about')}
          className="bg-green-500 text-white px-4 py-2 rounded-full mb-2 w-32"
        >
          About
        </button>
        <button
          onClick={() => setCurrentScreen('projects')}
          className="bg-green-500 text-white px-4 py-2 rounded-full mb-2 w-32"
        >
          Projects
        </button>
        <button
          onClick={() => setCurrentScreen('tetris')}
          className="bg-green-500 text-white px-4 py-2 rounded-full w-32"
        >
          Play Tetris
        </button>
      </div>
    ),
    about: (
      <div className="p-4">
        <h3 className="text-xl font-bold mb-4">About Me</h3>
        <p className="mb-4">I'm a mobile app developer passionate about creating innovative solutions.</p>
        <button
          onClick={() => setCurrentScreen('home')}
          className="bg-green-500 text-white px-4 py-2 rounded-full w-32"
        >
          Back to Home
        </button>
      </div>
    ),
    projects: (
      <div className="p-4">
        <h3 className="text-xl font-bold mb-4">My Projects</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Minnah - Islamic App</li>
          <li>uniHub - Education Platform</li>
          <li>AgroGrove - Agriculture Platform</li>
        </ul>
        <button
          onClick={() => setCurrentScreen('home')}
          className="bg-green-500 text-white px-4 py-2 rounded-full w-32"
        >
          Back to Home
        </button>
      </div>
    ),
    tetris: (
      <div className="h-full flex flex-col">
        <h3 className="text-xl font-bold mb-2 text-center">Tetris</h3>
        <div className="flex-grow overflow-hidden">
          <TetrisMine />
        </div>
        <button
          onClick={() => setCurrentScreen('home')}
          className="bg-green-500 text-white px-4 py-2 rounded-full w-32 mx-auto mb-2"
        >
          Back to Home
        </button>
      </div>
    ),
  };

  return (
    <motion.div
      initial={{ rotateY: 0 }}
      animate={{ rotateY: 15 }}
      transition={{ duration: 0.5 }}
      style={{ perspective: 1000 }}
      className="w-[375px] h-[812px] bg-black rounded-[60px] overflow-hidden shadow-xl relative transform-gpu"
    >
      {/* iPhone notch */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[40%] h-7 bg-black rounded-b-3xl z-20"></div>
      
      {/* Screen */}
      <div className="bg-white h-full w-full rounded-[50px] mt-2 overflow-hidden relative">
        {/* Status bar */}
        <div className="bg-white h-6 w-full flex justify-between items-center px-6 text-xs">
          <span>9:41</span>
          <div className="flex items-center space-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
              <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7h1a1 1 0 011 1v6.05A2.5 2.5 0 0014 17h-3.05a2.5 2.5 0 00-4.9 0H3a1 1 0 01-1-1V5a1 1 0 011-1h7v3z" />
            </svg>
          </div>
        </div>
        
        {/* App content */}
        <div className="p-4 h-[calc(100%-6rem)]">
          {screens[currentScreen]}
        </div>
        
        {/* Bottom bar */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gray-100 border-t border-gray-200 flex justify-around items-center px-6">
          <button onClick={() => setCurrentScreen('home')} className="focus:outline-none" aria-label="Home">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </button>
          <button onClick={() => setCurrentScreen('about')} className="focus:outline-none" aria-label="About">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
          <button onClick={() => setCurrentScreen('projects')} className="focus:outline-none" aria-label="Projects">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </button>
          <button onClick={() => setCurrentScreen('tetris')} className="focus:outline-none" aria-label="Tetris">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2 1m2-1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Home button */}
      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-800 rounded-full"></div>
    </motion.div>
  );
};

export default MobileSimulator;