import React from "react";
import {contacts} from "../../assets/data/data";
const Policy = () => {
  return (
    <div className="policy__container">
      {contacts.map(({id, icon, title, desc}) => {
        return (
          <div className="policy__content" key={id}>
            <span>{icon}</span>
            <span>{title}</span>
            <small>{desc}</small>
          </div>
        );
      })}
    </div>
  );
};

export default Policy;
