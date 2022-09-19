import React from "react";
import style from "./GymDetails.module.css";
const Works = () => {
  return (
    <div className={style.works}>
      <h1> How it Works?</h1>
      <div>
        <p>
          1) Pick membership start date and complete your subscription process
          by clicking Buy Now below
        </p>
      </div>
      <div>
        {" "}
        <p>
          {" "}
          2) A dedicated general trainer will be assigned after you have taken
          your subscription
        </p>
      </div>
      <div>
        <p>3) Explore WTF and start your fitness journy</p>
      </div>
    </div>
  );
};

export default Works;
