import { useEffect, useState } from 'preact/hooks';
import { SunIcon, MoonIcon } from './Icons';

type Props = {}

export default function ThemeToggle(props: Props) {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "dark");
  const [isMounted, setIsMounted] = useState(false);
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  }

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="w-8 h-8 p-2 flex items-center justify-center rounded-lg bg-primaryLight dark:bg-primaryDark md:w-7 md:h-7 md:rounded-md hover:opacity-75">
      {theme === "light" ? <MoonIcon className='w-full fill-baseLight' /> : <SunIcon className='w-full fill-baseDark' />}
    </button>
  )
}