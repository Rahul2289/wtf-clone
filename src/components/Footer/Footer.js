import React from "react";
import style from "./Footer.module.css";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdLocationOn, MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div>
        <h1 className={style.logo}>WTF</h1>
        <div className={style.icons}>
          <i>
            <AiOutlineInstagram />
          </i>
          <i>
            <FaFacebookF />
          </i>
          <i>
            <FaLinkedinIn />
          </i>
        </div>
      </div>

      <div>
        <h5>Quick Links</h5>
        <Link to="/">About</Link>
        <Link to="/">FAQs</Link>
        <Link to="/">Privacy Policy</Link>
        <Link to="/">WTF in News</Link>
        <Link to="/">Ters & Conditions</Link>
        <Link to="/">Refund & Cancellation</Link>
      </div>

      <div>
        <h5>Explore</h5>
        <Link to="/">Arenas</Link>
        <Link to="/">Studios</Link>
        <Link to="/">Nutrition</Link>
      </div>

      <div>
        <h5>Contact</h5>
        <div className={style.address}>
          <i>
            <MdLocationOn />
          </i>
          <address>
            Ro:S 1502 Amrapalli Aillicon city,Sector 76,Nodia,Uttar
            Pradesh,india
          </address>
        </div>
        <div className={style.address}>
          <i>
            <MdLocationOn />
          </i>
          <address>
            Ho:c-89 B, Ground Floor,Sector 8,Nodia,Uttar Pradesh,india
          </address>
        </div>
        <div className={style.address}>
          <i>
            <BsFillTelephoneFill />{" "}
          </i>
          <address>+919090639005</address>
        </div>
        <div className={style.address}>
          <i>
            <MdEmail />{" "}
          </i>
          <address>support@wtfup.me</address>
        </div>
      </div>
    </div>
  );
};

export default Footer;
