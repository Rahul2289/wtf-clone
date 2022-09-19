import React from "react";
import style from "./GymDetails.module.css";
import { MdLocationOn } from "react-icons/md";
import Rateing from "./Rateing";

const Details = ({ singleGymDetail }) => {
  return (
    <div className={style.detailWrapper}>
      {singleGymDetail.map((data) => {
        return (
          <div key={data.user_id}>
            <div className={style.row}>
              <h1>{data.gym_name}</h1>
              <Rateing singleGymDetail={singleGymDetail} />
            </div>

            <div className={style.location}>
              <i>
                <MdLocationOn />
              </i>
              <address>
                {data.address1},{data.address2}
              </address>
            </div>
            <h5>Description</h5>
            <p>{data.description ? data.description : "no description"}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Details;
