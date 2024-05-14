import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import RoutesConfig from "./routes/RoutsConfig";
import { ThemeContext } from "./context/theme";
import { useState } from "react";
import { LanguageContext } from "./context/language";

function App() {
  const [theme, setTheme] = useState("dark");
  const [lang, setLang] = useState("ar");

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <LanguageContext.Provider value={{lang, setLang}}>
          <Navbar />
          <div className="container my-5">
            <RoutesConfig />
          </div>
        </LanguageContext.Provider>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;


// Create Context
// Component Parent => state [getter , setter] => <Context.Provider value={{ getter , setter }}>
// Child Components => {getter , setter} = useContext(Context)