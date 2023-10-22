import React, { useContext } from "react";
import Logo from "./logo";
import LanguageContext from "./store/languageContext";
const Navbar = () => {
  const { language, setLanguage } =
    useContext(LanguageContext);
  return (
    <>
      <div className="lg:w-10/12 w-11/12 flex justify-between items-center mx-auto hover:text-red-600 border-none ">
        <Logo />
        <select
          name="langs"
          onClick={(e) => {
            setLanguage(e.target.value);
          }}
        >
          <option value="ar">Arabic</option>
          <option value="en-US">English</option>
        </select>
      </div>
    </>
  );
};

export default Navbar;
