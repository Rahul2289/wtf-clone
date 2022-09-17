import React from "react";
import style from "./SearchBar.module.css";

import { AiOutlineSearch } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";

const SearchBar = () => {
  return (
    <div className={style.searchContainer}>
      <i className={style.searchIcon}>
        <AiOutlineSearch />
      </i>
      <input type="text" placeholder="Search gym name here..." />
      <button>
        <HiLocationMarker />
      </button>
      <button>Clear</button>
    </div>
  );
};

export default SearchBar;
