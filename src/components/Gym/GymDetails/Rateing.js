import React from "react";
import style from "./GymDetails.module.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
const Rateing = ({ singleGymDetail }) => {
  return (
    <div className={style.rateing}>
      <div>
        <p>Rateing</p>
        {[...Array(5)].map((item, i) => {
          return i < singleGymDetail.total_rating ? (
            <AiFillStar />
          ) : (
            <AiOutlineStar />
          );
        })}
      </div>
    </div>
  );
};

export default Rateing;
