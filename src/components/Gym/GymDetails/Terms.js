import React from "react";
import style from "./GymDetails.module.css";
const Terms = ({ terms }) => {
  return (
    <div className={style.terms}>
      <p>Why to Choose WTF?</p>
      <div>
        {terms.map((data) => {
          return (
            <div key={data.uid}>
              {data.icon && <img src={data.icon} alt={data.uid} />}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Terms;
