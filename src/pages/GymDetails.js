import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import MemberShip from "./../components/Gym/GymDetails/MemberShip";
import Footer from "./../components/Footer/Footer";
import style from "../components/Gym/GymDetails/GymDetails.module.css";
import Terms from "./../components/Gym/GymDetails/Terms";
import Works from "./../components/Gym/GymDetails/Works";
const GymDetails = ({ terms }) => {
  const { id } = useParams();
  const [gymDetailsData, setGymDetailsData] = useState([]);

  useEffect(() => {
    const postData = async () => {
      const res = await axios.post(`https://devapi.wtfup.me/gym/plan`, {
        gym_id: id,
      });

      setGymDetailsData(res.data.data);
    };

    postData();
  }, [id]);

  return (
    <>
      {" "}
      <div className={style.gymDetailsWrapper}>
        <div className={style.left}>
          <Terms terms={terms} />
          <Works />
        </div>
        <div className={style.right}>
          <MemberShip gymDetailsData={gymDetailsData} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GymDetails;
