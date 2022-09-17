import React from "react";
import poster from "../../../accets/images/poster.png";
import style from "./Poster.module.css";
const Poster = () => {
  return (
    <div className={style.poster}>
      <img src={poster} alt="" />
    </div>
  );
};

export default Poster;
