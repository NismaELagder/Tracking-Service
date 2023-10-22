import React, {
  useContext,
  useEffect,
  useState,
} from "react";
import Track from "./Track/track";
import Navbar from "./Navbar";
import Home from "./Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";
import { useTranslation } from "react-i18next";
import LanguageContext from "./store/languageContext";
function App() {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState("en-US");
  const value = { language, setLanguage };

  useEffect(() => {
    i18n.changeLanguage(language);
    // console.log(value);
  }, [language]);

  return (
    <LanguageContext.Provider value={value}>
      <Router>
        <div
          className="App"
          dir={language == "ar" ? "rtl" : "ltr"}
        >
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/:trackingNumber">
              <Track />{" "}
            </Route>
          </Switch>
        </div>
      </Router>{" "}
    </LanguageContext.Provider>
  );
}

export default App;
