import React from "react";
import style from "./Gym.module.css";
import SearchBar from "./../Filters/searchBar/SearchBar";
import Filter from "./../Filters/searchBar/Filter";
import GymList from "./GymList";

const GymContaint = ({ gymData, setCityName }) => {
  return (
    <div className={style.mainContainer}>
      <SearchBar />
      <div className={style.wrapper}>
        <div className={style.left}>
          <Filter setCityName={setCityName} />
        </div>
        <div className={style.right}>
          {gymData?.map((gym) => (
            <GymList key={gym.user_id} gym={gym} />
          ))}
          {!gymData && (
            <p
              style={{
                textAlign: "center",
                fontSize: "38px",
              }}
            >
              No gyms found
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default GymContaint;
