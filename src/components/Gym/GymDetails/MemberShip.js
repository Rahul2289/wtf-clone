import React from "react";
import style from "./GymDetails.module.css";
const MemberShip = ({ gymDetailsData }) => {
  return (
    <div className={style.memberShip}>
      <h1>Choose membership</h1>
      {gymDetailsData?.map((data, i) => {
        return (
          <div key={data.id}>
            <p>plan{i + 1}</p>
            <div>
              <h5>WTF</h5>
              <p>{data.plan_name}</p>
              <div className={style.price}>${data.plan_price}</div>
            </div>
          </div>
        );
      })}
      {!gymDetailsData && <h1>comming soon ...</h1>}
    </div>
  );
};

export default MemberShip;
