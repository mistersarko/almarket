import React from "react";
import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{t("aboutTitle")}</h1>
      <p className="text-lg">{t("aboutDescription")}</p>
      {/* Add more information about the store or team */}
    </div>
  );
};

export default AboutPage;
