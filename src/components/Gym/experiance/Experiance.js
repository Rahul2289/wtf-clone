import React from "react";
import style from "./Experiance.module.css";
import gymEqip from "../../../accets/images/icons8-gym-60 (1).png";
import trainer from "../../../accets/images/icons8-trainer-60 (2).png";
import tickBok from "../../../accets/images/icons8-tick-box-50.png";
import sanatize from "../../../accets/images/icons8-clean-64.png";
const Experiance = () => {
  return (
    <div className={style.ExpContainer}>
      <div className={style.left}>
        <h5>WTF Fitness Experience?</h5>
        <div>
          <div></div>
          <p>@ your regular gym cost?</p>
        </div>
      </div>

      <div className={style.right}>
        <div>
          <img src={gymEqip} alt="equipment" />
          <p>Modern Eqipments</p>
        </div>
        <div>
          <img src={trainer} alt="trainer" />
          <p>Skilled Trainer</p>
        </div>
        <div>
          <img src={tickBok} alt="tickBok" />
          <p>Top class Ambiance</p>
        </div>
        <div>
          <img src={sanatize} alt="sanatize" />
          <p>Sanatized GYMS</p>
        </div>
      </div>
    </div>
  );
};

export default Experiance;
