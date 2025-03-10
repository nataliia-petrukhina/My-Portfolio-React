import { useState, useEffect } from "react";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      id="dark-mode"
      onClick={() => setDarkMode(!darkMode)}
      className="  fixed top-4 right-4 p-3 rounded-md text-gray-800 dark:text-gray-200 transition"
    >
      {darkMode ? "🌙 " : "☀️"}
    </button>
  );
}
