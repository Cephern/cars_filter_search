import { useState } from "react";
import Search from "./Search";
import Filter from "./Filter";

const SearchBar = ({ cars, setFiltered }) => {
  const [brand, setBrand] = useState(null);
  const [model, setModel] = useState(null);
  const [year, setYear] = useState(null);
  const [fuel, setFuel] = useState(null);
  const [bodyType, setBodyType] = useState(null);
  const [price, setPrice] = useState(0);

  const resetSelectValues = () => {
    setBrand(null);
    setModel(null);
    setYear(null);
    setFuel(null);
    setBodyType(null);
    setPrice(0);
  };

  return (
    <div id="searchbar">
      <Filter
        setFiltered={setFiltered}
        cars={cars}
        brand={brand}
        model={model}
        year={year}
        fuel={fuel}
        bodyType={bodyType}
        price={price}
        setBrand={setBrand}
        setModel={setModel}
        setYear={setYear}
        setFuel={setFuel}
        setBodyType={setBodyType}
        setPrice={setPrice}
        resetSelectValues={resetSelectValues}
      />
      <Search
        cars={cars}
        setFiltered={setFiltered}
        resetSelectValues={resetSelectValues}
      />
    </div>
  );
};

export default SearchBar;
