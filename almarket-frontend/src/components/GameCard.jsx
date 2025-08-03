import React from "react";
import { useTranslation } from "react-i18next";

const GameCard = ({ title, image, onClick }) => {
  const { t } = useTranslation();

  return (
    <div
      onClick={onClick}
      className="cursor-pointer border rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded-t-xl"
      />
      <div className="p-3">
        <h3 className="text-lg font-semibold text-center">{t(title)}</h3>
      </div>
    </div>
  );
};

export default GameCard;
