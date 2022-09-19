import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import style from "./GymDetails.module.css";
const BackBtn = () => {
  const navigate = useNavigate();
  return (
    <div className={style.backBtn}>
      <button onClick={() => navigate("/")}>
        <AiOutlineLeft /> <span>Back</span>
      </button>
    </div>
  );
};

export default BackBtn;
