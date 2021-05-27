import { useState } from "react";
import { TextField } from "@consta/uikit/TextField";

const Search = ({ cars, setFiltered, resetSelectValues }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e) => {
    resetSelectValues();
    setSearchValue(e.target.value);
    setFiltered(
      cars.filter(
        (car) =>
          car.brand.includes(e.target.value) ||
          car.model.includes(e.target.value)
      )
    );
  };

  return (
    <div id="search">
      <span>Search by Brand or Model</span>
      <input type="text" onChange={handleChange} value={searchValue} />
    </div>
  );
};

export default Search;
