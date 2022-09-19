import React from "react";
import style from "./GymDetails.module.css";
import img from "../../../accets/images/icons8-trainer-64.png";
const Works = () => {
  return (
    <div className={style.works}>
      <h1> How it Works?</h1>
      <div>
        <img src={img} alt="list" />
        <p>
          Pick membership start date and complete your subscription process by
          clicking Buy Now below
        </p>
      </div>
      <div>
        <img src={img} alt="list" />
        <p>
          {" "}
          A dedicated general trainer will be assigned after you have taken your
          subscription
        </p>
      </div>
      <div>
        <img src={img} alt="list" />
        <p> Explore WTF and start your fitness journy</p>
      </div>
    </div>
  );
};

export default Works;
