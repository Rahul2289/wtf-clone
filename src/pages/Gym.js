import React from "react";
import Nav from "./../components/Nav/Nav";

import GymContaint from "./../components/Gym/Gym";
import Poster from "../components/Gym/poster/Poster";
import Experiance from "./../components/Gym/experiance/Experiance";
import Footer from "./../components/Footer/Footer";
import loader from "../accets/images/loader.gif";
const Gym = ({ gymData, loading, setCityName, cityName }) => {
  return (
    <>
      <Nav />
      {loading ? (
        <div className="loaderContainer">
          <img src={loader} alt="loader" />
        </div>
      ) : (
        <>
          <Poster />
          <GymContaint
            gymData={gymData}
            setCityName={setCityName}
            cityName={cityName}
          />
          <Experiance />
          <Footer />
        </>
      )}
    </>
  );
};

export default Gym;
