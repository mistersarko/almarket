import React from "react";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{t("welcomeMessage")}</h1>
      <p className="text-lg">{t("chooseYourGame")}</p>
      {/* Add more content as needed */}
    </div>
  );
};

export default HomePage;
