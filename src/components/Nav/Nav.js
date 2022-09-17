import { useState } from "react";
import style from "./Nav.module.css";
import { Link } from "react-router-dom";
import { HiViewGrid } from "react-icons/hi";
import AsideNav from "./AsideNav";
const Nav = () => {
  const [toogle, setToogle] = useState(false);
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 64) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <>
      <div className={color ? style.bgNav : style.Navcontainer}>
        <div className={style.left}>
          <i className={style.menu} onClick={() => setToogle(!toogle)}>
            {" "}
            <HiViewGrid />
          </i>
          <h5 className={style.logo}>WTF</h5>
        </div>

        <div className={style.right}>
          <div>
            <Link to="/"> Fitness</Link>
          </div>
          <div>
            <Link to="/"> Nutrition</Link>
          </div>
          <div>
            <Link to="/"> Gyms</Link>
          </div>
          <div>
            <Link to="/"> Become WTF Partner</Link>
          </div>
          <div>
            <Link to="/"> About Us</Link>
          </div>
        </div>
        <button>Login</button>
      </div>
      {toogle && <AsideNav setToogle={setToogle} />}
    </>
  );
};

export default Nav;
