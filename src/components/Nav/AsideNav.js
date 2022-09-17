import React from "react";
import style from "./AsideNav.module.css";
import {
  AiOutlineClose,
  AiOutlineRight,
  AiFillApple,
  AiFillInfoCircle,
} from "react-icons/ai";
import { MdOutlineFitnessCenter } from "react-icons/md";
import { TbYoga } from "react-icons/tb";
import { FaUserFriends } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";

const data = [
  {
    id: 1,
    name: "Fitness",
    link: "/",
    icon: <MdOutlineFitnessCenter />,
  },
  {
    id: 2,
    name: "Nutrition",
    link: "/",
    icon: <AiFillApple />,
  },
  {
    id: 3,
    name: "Gyms",
    link: "/",
    icon: <TbYoga />,
  },
  {
    id: 4,
    name: "Become WTF partner",
    link: "/",
    icon: <FaUserFriends />,
  },
  {
    id: 5,
    name: "About US",
    link: "/",
    icon: <AiFillInfoCircle />,
  },
  {
    id: 6,
    name: "Login/Signup",
    link: "/",
    icon: <FiLogIn />,
  },
];

const AsideNav = ({ setToogle }) => {
  return (
    <div className={style.AsideNav}>
      <div className={style.top}>
        <i onClick={() => setToogle(false)}>
          <AiOutlineClose />
        </i>
      </div>
      <div className={style.bottom}>
        <div className={style.loginSignupWrapper}>
          <p>Login/Signup</p>
          <button>login</button>
        </div>

        {data.map((item) => {
          return (
            <div className={style.info} key={item.id}>
              <Link to={item.link}>
                <i>{item.icon}</i>
                <p>{item.name}</p>
                <i className={style.arrow}>
                  <AiOutlineRight />
                </i>
              </Link>
            </div>
          );
        })}

        <div></div>
      </div>
    </div>
  );
};

export default AsideNav;
