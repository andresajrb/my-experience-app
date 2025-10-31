'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Switch } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDarkMode = theme === 'dark';

  const handleThemeChange = (enabled: boolean) => {
    setTheme(enabled ? 'dark' : 'light');
  };

  return (
    <Switch
      checked={isDarkMode}
      onChange={handleThemeChange}
      className={`${
        isDarkMode ? 'bg-sky-600' : 'bg-gray-300'
      } relative inline-flex h-8 w-14 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2`}
      aria-label="Toggle Dark Mode"
    >
      <span
        className={`${
          isDarkMode ? 'translate-x-7' : 'translate-x-1'
        } inline-block h-6 w-6 transform rounded-full bg-white transition-transform`}
      >
        <FontAwesomeIcon
          icon={isDarkMode ? faMoon : faSun}
          className={`h-4 w-4 m-1 ${
            isDarkMode ? 'text-sky-600' : 'text-yellow-500'
          }`}
        />
      </span>
    </Switch>
  );
};

export default ThemeSwitch;
