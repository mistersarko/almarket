import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="bg-gray-900 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          AlMarket
        </Link>
        <div className="space-x-4">
          <NavLink to="/" className={({ isActive }) => isActive ? "underline" : ""}>
            {t("Home")}
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "underline" : ""}>
            {t("About")}
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "underline" : ""}>
            {t("Contact")}
          </NavLink>
        </div>
        <div className="space-x-2">
          <button onClick={() => changeLanguage("tk")} className="hover:underline">TM</button>
          <button onClick={() => changeLanguage("ru")} className="hover:underline">RU</button>
          <button onClick={() => changeLanguage("en")} className="hover:underline">EN</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
