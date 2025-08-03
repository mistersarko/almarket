import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white text-center py-4 mt-10">
      <p>&copy; 2025 AlMarket. {t("all_rights_reserved")}</p>
    </footer>
  );
};

export default Footer;
