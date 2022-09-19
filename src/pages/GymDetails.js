import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import MemberShip from "./../components/Gym/GymDetails/MemberShip";
import Footer from "./../components/Footer/Footer";
import style from "../components/Gym/GymDetails/GymDetails.module.css";
import Terms from "./../components/Gym/GymDetails/Terms";
import Works from "./../components/Gym/GymDetails/Works";
import Details from "./../components/Gym/GymDetails/Details";
import BackBtn from "./../components/Gym/GymDetails/BackBtn";

const GymDetails = ({ terms, gymData }) => {
  const { id } = useParams();
  const [gymDetailsData, setGymDetailsData] = useState([]);

  const singleGymDetail = gymData.filter((data) => data.user_id === id);

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
      <BackBtn />
      <div className={style.gymDetailsWrapper}>
        <div className={style.left}>
          <Details singleGymDetail={singleGymDetail} />
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
