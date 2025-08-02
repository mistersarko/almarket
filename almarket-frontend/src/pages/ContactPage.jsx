import React from "react";
import { useTranslation } from "react-i18next";

const ContactPage = () => {
  const { t } = useTranslation();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{t("contactTitle")}</h1>
      <p className="text-lg">{t("contactDescription")}</p>
      {/* Add contact form or contact details here */}
    </div>
  );
};

export default ContactPage;
