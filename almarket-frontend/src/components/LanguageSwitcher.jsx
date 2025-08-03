import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex gap-2 items-center">
      <button
        onClick={() => changeLanguage('tk')}
        className="px-2 py-1 text-sm border rounded hover:bg-gray-200"
      >
        Türkmen
      </button>
      <button
        onClick={() => changeLanguage('ru')}
        className="px-2 py-1 text-sm border rounded hover:bg-gray-200"
      >
        Русский
      </button>
      <button
        onClick={() => changeLanguage('en')}
        className="px-2 py-1 text-sm border rounded hover:bg-gray-200"
      >
        English
      </button>
    </div>
  );
};

export default LanguageSwitcher;
