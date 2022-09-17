import React from "react";
import style from "./Filter.module.css";
import { AiOutlineSearch } from "react-icons/ai";
const Filter = ({ setCityName }) => {
  return (
    <div className={style.Filterwrapper}>
      <div className={style.info}>
        <h2>Filters</h2>
        <button>Reset</button>
      </div>

      <div className={style.location}>
        <p>Location</p>
        <div className={style.searchWrapper}>
          <AiOutlineSearch />
          <input type="text" placeholder="Enter location" />
        </div>
      </div>

      <div className={style.price}>
        <p>price</p>
        <div>
          <input type="number" placeholder="min" />
          <input type="number" placeholder="max" />
        </div>
      </div>

      <div className={style.cities}>
        <p>Cities</p>
        <div>
          <select name="" id="" onChange={(e) => setCityName(e.target.value)}>
            <option value="">Select city</option>
            <option value="New Delhi">New Delhi</option>
            <option value="Noida">Nodia</option>
            <option value="Ghaziabad">Ghaziabad</option>
            <option value="Delhi">Delhi</option>
            <option value="Greater Nodia">Greater Nodia</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
