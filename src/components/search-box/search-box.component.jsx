import React, { Component } from "react";
import "./search-box.styles.css";

export class SearchBox extends Component {
  render() {
    const { onSearchChange, className } = this.props;
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
  }
}

export default SearchBox;
