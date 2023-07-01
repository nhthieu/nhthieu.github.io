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
      className="w-8 h-8 p-2 flex items-center justify-center rounded-lg bg-primaryLight dark:bg-primaryDark md:w-7 md:h-7 md:rounded-md">
      {theme === "light" ? <MoonIcon className='w-full fill-baseLight' /> : <SunIcon className='w-full fill-baseDark' />}
    </button>
  )
}