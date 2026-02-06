import { useEffect, useState } from "react";
import "../App.css";

function ThemeToggler() {
  const [isDark, setDark] = useState(false);

  const toggleDark = () => {
    setDark(!isDark);

    localStorage.setItem("theme", isDark ? "light" : "dark");
  };

  useEffect(() => {
    const saved = localStorage.getItem("theme");

    setDark(saved === "dark");
  }, []);

  return (
    <div className={isDark ? "new-b" : "new-w"}>
      <div className="switch">
        <button className="dark" onClick={toggleDark}>
          {isDark ? "🌞" : "🌙"}
        </button>
      </div>
    </div>
  );
}

export default ThemeToggler;
