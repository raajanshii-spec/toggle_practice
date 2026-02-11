import { useTheme } from "../contexts/ThemeProvider";


 function ThemeToggler() {

  const { isDark, toggleTheme } = useTheme();

  // return (
  //   <button onClick={toggleTheme}>
  //     {isDark ? '🌞' : '🌙'} 
  //   </button>
  // )

  
  
//   const [isDark, setDark] = useState(false);

//   const toggleDark = useCallback(() => {
//     setDark(!isDark);

//     localStorage.setItem("theme", isDark ? "light" : "dark");
//   }, [isDark]);

//     console.log(isDark);



//   useEffect(() => {
//     const saved = localStorage.getItem("theme");

//     setDark(saved === "dark");
//   }, []);

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
