import { useTheme } from "../contexts/ThemeProvider";


 function ThemeToggler() {

  const { isDark, toggleTheme } = useTheme();

  return (
    <div className={isDark ? "new-b" : "new-w"}>
      <div className="switch">
        <button className="dark" onClick={toggleTheme}>
          {isDark ? "🌞" : "🌙"}
        </button>
      </div>
    </div>
  );
}
export default ThemeToggler;
