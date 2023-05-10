import { useContext } from 'react';
import { Theme, LOCAL_STORAGE_THEME_KEY, ThemeContext } from './ThemeContext';

interface useThemeResult {
  toogleTheme: () => void;
  theme: Theme;
}
export function useTheme() {
    const { theme, setTheme } = useContext(ThemeContext);
    const toggleTheme = () => {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };
    return { toggleTheme, theme };
}
