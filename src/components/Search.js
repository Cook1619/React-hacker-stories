import React from "react";

const Search = ({ onSearch, searchTerm }) => {
  return (
    <>
      <label htmlFor="search">Search:</label>
      <input id="search" type="text" onChange={onSearch} value={searchTerm} />
    </>
  );
};

export default Search;
