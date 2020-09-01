import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e);
  };
  return (
    <div>
      <label htmlFor="search">Search:</label>
      <input id="search" type="text" onChange={handleChange} />
      <p>
        Search for <strong>{searchTerm}</strong>
      </p>
    </div>
  );
};

export default Search;
