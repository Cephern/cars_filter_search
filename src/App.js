import "./App.css";
import { Theme, presetGpnDefault } from "@consta/uikit/Theme";
import { useState, useEffect } from "react";
import carsDB from "./cars.json";
import Cars from "./comps/Cars";
import SearchBar from "./comps/SearchBar";
import Sorting from "./comps/Sorting";

function App() {
  const [filtered, setFiltered] = useState(null);
  const [cars, setCars] = useState(carsDB);
  const [ascendingOrderYear, setAscendingOrderYear] = useState(false);
  const [ascendingOrderPrice, setAscendingOrderPrice] = useState(false);

  const sortByYear = () => {
    if (ascendingOrderYear) {
      if (filtered) {
        let sorted = [...filtered.sort((a, b) => a.year - b.year)];
        setFiltered(sorted);
      } else {
        let sorted = [...cars.sort((a, b) => a.year - b.year)];
        setCars(sorted);
      }
    } else {
      if (filtered) {
        let sorted = [...filtered.sort((a, b) => b.year - a.year)];
        setFiltered(sorted);
      } else {
        let sorted = [...cars.sort((a, b) => b.year - a.year)];
        setCars(sorted);
      }
    }
  };

  const sortByPrice = () => {
    if (ascendingOrderPrice) {
      if (filtered) {
        let sorted = [...filtered.sort((a, b) => a.price - b.price)];
        setFiltered(sorted);
      } else {
        let sorted = [...cars.sort((a, b) => a.price - b.price)];
        setCars(sorted);
      }
    } else {
      if (filtered) {
        let sorted = [...filtered.sort((a, b) => b.price - a.price)];
        setFiltered(sorted);
      } else {
        let sorted = [...cars.sort((a, b) => b.price - a.price)];
        setCars(sorted);
      }
    }
  };

  useEffect(() => {
    sortByYear();
  }, [ascendingOrderYear]);

  useEffect(() => {
    sortByPrice();
  }, [ascendingOrderPrice]);

  return (
    <Theme preset={presetGpnDefault}>
      <div className="App">
        <SearchBar cars={cars} setFiltered={setFiltered} />
        <Sorting
          ascendingOrderYear={ascendingOrderYear}
          setAscendingOrderYear={setAscendingOrderYear}
          ascendingOrderPrice={ascendingOrderPrice}
          setAscendingOrderPrice={setAscendingOrderPrice}
        />
        <Cars cars={filtered ? filtered : cars} />
      </div>
    </Theme>
  );
}

export default App;
