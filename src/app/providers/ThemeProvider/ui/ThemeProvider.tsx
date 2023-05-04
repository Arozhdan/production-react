import { FC, useMemo, useState } from "react";
import { Theme, ThemeContext } from "../lib/ThemeContext";

const defaultTheme = (localStorage.getItem("theme") as Theme) || Theme.Light;

const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
