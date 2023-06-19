import { signal } from '@preact/signals';
import { useEffect, useState } from 'preact/hooks';
import { SunIcon, MoonIcon } from './Icons';

type Props = {}
const theme = signal(localStorage.getItem("theme") || "light");
const isMounted = signal(false);

export default function ThemeToggle(props: Props) {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  }

  useEffect(() => {
    isMounted.value = true;
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  if (!isMounted) {
    return null;
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="w-10 h-10 p-2 flex items-center justify-center rounded-lg bg-primary dark:bg-primaryDark md:w-8 md:h-8">
      {theme === "light" ? <MoonIcon className='w-full fill-light' /> : <SunIcon className='w-full fill-dark' />}
    </button>
  )
}