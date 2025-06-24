import React, { useState, useEffect } from 'react';

const DarkModeToggle: React.FC = () => {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'));
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);
  return (
    <button
      onClick={() => setDark((d) => !d)}
      className="absolute top-4 right-4 px-3 py-1 rounded-full border border-blue-600 bg-white dark:bg-gray-900 text-blue-600 dark:text-blue-300 font-semibold shadow hover:bg-blue-50 dark:hover:bg-gray-800 transition"
      aria-label="Toggle dark mode"
    >
      {dark ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
};

export default DarkModeToggle; 