import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { logout } from "../utils/auth"; // logout funksiyasy

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleLogout = () => {
    logout(); // localStorage'den token poz
    navigate("/login"); // login sahypasyna geçir
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
        <div className="flex items-center space-x-2">
          <button onClick={() => changeLanguage("tk")} className="hover:underline">TM</button>
          <button onClick={() => changeLanguage("ru")} className="hover:underline">RU</button>
          <button onClick={() => changeLanguage("en")} className="hover:underline">EN</button>
          <button onClick={handleLogout} className="ml-4 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">
            {t("Logout")}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
