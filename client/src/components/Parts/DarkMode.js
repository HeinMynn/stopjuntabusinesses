import { useEffect, useState } from "react";

export default function useDarkMode() {
    let defaultTheme = "";
    if (!localStorage.theme) {
      defaultTheme = "light";
    } else {
      defaultTheme = localStorage.theme;
    }
    const [theme, setTheme] = useState(defaultTheme);
  const colorTheme = theme === "light" ? "dark" : "light";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
  }, [theme, colorTheme]);
  return [colorTheme, setTheme];
}
