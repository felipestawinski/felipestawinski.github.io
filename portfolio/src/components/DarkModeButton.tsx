'use client';

import { useTheme } from '../contexts/ThemeContext';

const DarkModeButton = () => {
  const { isDark, toggleTheme } = useTheme();

  const handleClick = () => {
    if (isDark) {
      console.log("toggle light mode");
    } else {
      console.log("toggle dark mode");
    }
    toggleTheme();
  };

  return (
    <button
      onClick={handleClick}
      className="fixed top-5 right-4 z-[100] p-1 rounded-full bg-gray-200 dark:bg-gray-700 backdrop-blur-sm shadow-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 pointer-events-auto w-14 h-7 flex items-center"
      aria-label="Toggle dark mode"
    >
      <div 
        className={`w-5 h-5 bg-white dark:bg-gray-200 rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
          isDark ? 'translate-x-7' : 'translate-x-0'
        }`}
      />
    </button>
  );
};

export default DarkModeButton;