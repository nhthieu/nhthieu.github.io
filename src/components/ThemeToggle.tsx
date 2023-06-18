import { signal } from '@preact/signals';
import { useEffect } from 'preact/hooks';
import { SunIcon, MoonIcon } from './Icons';

type Props = {}
const theme = signal(localStorage.getItem("theme") || "light");
const isMounted = signal(false);

export default function ThemeToggle(props: Props) {
  const toggleTheme = () => {
    theme.value = theme.value === "light" ? "dark" : "light";
  }

  useEffect(() => {
    isMounted.value = true;
  }, []);

  useEffect(() => {
    if (theme.value === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme.value);
  }, [theme.value]);

  if (!isMounted) {
    return null;
  }

  return (
    <button onClick={toggleTheme}>
      {theme.value === "light" ? <MoonIcon className='w-7 fill-dark'/> : <SunIcon className='w-7 fill-light'/>}
    </button>
  )
}