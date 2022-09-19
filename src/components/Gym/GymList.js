import { useNavigate } from "react-router-dom";
import style from "./Gym.module.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
const GymList = ({ gym }) => {
  const navigate = useNavigate();
  return (
    <div className={style.listWrapper} key={gym.user_id}>
      <div className={style.freeLogo}>
        <p>Free</p>
      </div>
      <div className={style.triangle}></div>
      <div className={style.listInfo}>
        <h5>{gym.gym_name}</h5>
        <div className={style.rateing}>
          {[...Array(5)].map((item, i) => {
            return i < gym.total_rating ? <AiFillStar /> : <AiOutlineStar />;
          })}
        </div>
        <address>{`${gym.address1},${gym.address2}`}</address>
      </div>

      <div className={style.bookNowBtn}>
        <button
          type="button"
          onClick={() => navigate(`/gym/details/${gym.user_id}`)}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default GymList;
