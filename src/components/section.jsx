import React, { memo } from "react";
import "./stylesheets/section.css";
import { useAppContext } from "../AppContext";

const Section = () => {
  const { searchHistory } = useAppContext();

  return (
    <div className="section">
      <h1 className="titleType2">Histórico de Buscas</h1>
      <div className="historyList">
        {searchHistory.map((search, index) => (
          <div className="historyItem" key={index}>
            {search}
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(Section);
