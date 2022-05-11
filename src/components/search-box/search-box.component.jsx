import React from "react";
import "./search-box.styles.css";
const SearchBox = ({ onSearchChange, className }) => {
  return (
    <>
      <input
        type="search"
        className={`search-box ${className}`}
        placeholder="search monsters"
        onChange={onSearchChange}
      />
    </>
  );
};

export default SearchBox;
