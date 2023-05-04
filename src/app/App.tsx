import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { Suspense } from "react";
import { classNames } from "helpers/classNames";
import { useTheme } from "app/providers/ThemeProvider";

import "./styles/index.scss";
import { Home } from "pages/Home";
import { About } from "pages/About";

export default function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <nav>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Suspense fallback={"loading"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </div>
  );
}
