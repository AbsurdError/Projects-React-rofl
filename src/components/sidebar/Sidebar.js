import React, { useContext } from "react";
import { RateContext } from "../../context/RateContext";

export const Sidebar = () => {
  const { state } = useContext(RateContext);
  return (
    <div className="sidebar">
      <div className="sidebarHead">
        <h3>Все валюты</h3>
      </div>
      <div className="sidebarContent">
        <ul className="sidebar__ul">
          {Object.keys(state.currency).map((item, i) => {
            return (
              <li key={item} className="sidebar__li">
                <p className="sidebar__p">
                  <span className="sidebar__span">
                    <img src={state.currency[item].flag} alt={item} />&nbsp;{item}
                  </span>&nbsp;{state.currency[item].name}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};