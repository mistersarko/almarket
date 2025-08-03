import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const handleChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <select
      onChange={handleChange}
      value={i18n.language}
      className="p-1 rounded border border-gray-300 text-sm"
    >
      <option value="tk">Türkmençe</option>
      <option value="ru">Русский</option>
      <option value="en">English</option>
    </select>
  );
};

export default LanguageSelector;
