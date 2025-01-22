"use client"

import React, { useState } from 'react';
import DayNightSwitch from './components/DayNightSwitch/DayNightSwitch';

export default function Page() {
  const [isNight, setIsNight] = useState(false);

  const handleThemeChange = (night: boolean) => {
    setIsNight(night);
  };

  return (
    <div className={`min-h-screen flex items-center justify-center p-4 transition-colors duration-500 ${isNight ? 'bg-gray-900' : 'bg-blue-100'}`}>
      <div className={`p-8 rounded-2xl shadow-xl flex flex-col items-center space-y-6 transition-colors duration-500 ${isNight ? 'bg-gray-800' : 'bg-white'}`}>
        <h1 className={`text-3xl font-bold ${isNight ? 'text-gray-200' : 'text-gray-800'}`}>
          {isNight ? 'Good Night' : 'Good Day'}
        </h1>
        <DayNightSwitch onChange={handleThemeChange} />
        <p className={`text-lg ${isNight ? 'text-gray-300' : 'text-gray-600'}`}>
          Toggle to switch between day and night
        </p>
      </div>
    </div>
  );
}

