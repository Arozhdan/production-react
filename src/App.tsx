import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { Suspense, useContext, useState } from "react";
import { HomeAsync } from "./pages/Home/HomeAsync";
import { AboutAsync } from "./pages/About/AboutLazy";
import "./styles/index.scss";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames";

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
          <Route path="/" element={<HomeAsync />} />
          <Route path="/about" element={<AboutAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
}
