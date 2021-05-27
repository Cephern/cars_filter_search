import { useState, useRef, useEffect } from "react";
import { BasicSelect } from "@consta/uikit/BasicSelect";
import { Button } from "@consta/uikit/Button";

const Filter = ({
  setFiltered,
  cars,
  brand,
  model,
  year,
  fuel,
  bodyType,
  price,
  setBrand,
  setModel,
  setYear,
  setFuel,
  setBodyType,
  setPrice,
  resetSelectValues,
}) => {
  const [brandSet, setBrandSet] = useState([]);
  const [yearSet, setYearSet] = useState([]);
  const [fuelSet, setFuelSet] = useState([]);
  const [bodyTypeSet, setBodyTypeSet] = useState([]);
  const [priceSet, setPriceSet] = useState([]);

  useEffect(() => {
    let brands = [];
    let models = [];
    let years = [];
    let fuels = [];
    let bodyTypes = [];
    let prices = [];

    cars.forEach((car) => {
      brands.push(car.brand);
      models.push(car.model);
      years.push(car.year);
      fuels.push(car.fuel);
      bodyTypes.push(car.bodyType);
      prices.push(car.price);
    });

    setBrandSet(Array.from(new Set(brands)));
    setYearSet(Array.from(new Set(years)));
    setFuelSet(Array.from(new Set(fuels)));
    setBodyTypeSet(Array.from(new Set(bodyTypes)));
    setPriceSet(Array.from(new Set(prices)));

    // eslint-disable-next-line
  }, []);

  const form = useRef();

  const handleBrandChange = (option) => {
    setBrand(option.value);
    setModel("");
  };

  const getModelFromBrand = (brand) => {
    let selectedBrand = cars.filter((car) => car.brand === brand);
    let modelArr = Array.from(new Set(selectedBrand.map((car) => car.model)));

    return modelArr;
  };

  useEffect(() => {
    let refiltered = [...cars];

    if (brand) {
      refiltered = refiltered.filter((car) => car.brand === brand);
    }

    if (model) {
      refiltered = refiltered.filter((car) => car.model === model);
    }

    if (year) {
      refiltered = refiltered.filter((car) => car.year === Number(year));
    }

    if (fuel) {
      refiltered = refiltered.filter((car) => car.fuel === fuel);
    }

    if (bodyType) {
      refiltered = refiltered.filter((car) => car.bodyType === bodyType);
    }

    if (price) {
      refiltered = refiltered.filter((car) => car.price <= price);
    }

    setFiltered(refiltered);
  }, [brand, model, year, fuel, bodyType, price]);

  return (
    <div className="search">
      <form ref={form}>
        <div className="formGroup">
          <label htmlFor="brand">Brand: </label>
          <BasicSelect
            onChange={handleBrandChange}
            options={[
              ...brandSet.map((brand) => ({
                label: brand,
                value: brand,
              })),
            ]}
            getOptionLabel={(option) => option.label}
            id="brand"
            value={brand ? { label: brand, value: brand } : ""}
          />
        </div>

        <div className="formGroup">
          <label htmlFor="model">Model: </label>
          <BasicSelect
            onChange={(option) => setModel(option.value)}
            id="model"
            value={model ? { label: model, value: model } : ""}
            options={
              brand
                ? [
                    ...getModelFromBrand(brand).map((model) => ({
                      label: model,
                      value: model,
                    })),
                  ]
                : [{ label: "Select Brand First", value: "" }]
            }
            getOptionLabel={(option) => option.label}
          />
        </div>

        <div className="formGroup">
          <label htmlFor="year">Year: </label>
          <BasicSelect
            onChange={(option) => setYear(option.value)}
            id="year"
            value={year ? { label: year, value: year } : ""}
            getOptionLabel={(option) => option.label}
            options={[
              ...yearSet
                .sort((a, b) => a - b)
                .map((year) => ({ label: year, value: year })),
            ]}
          />
        </div>

        <div className="formGroup">
          <label htmlFor="fuel">Fuel: </label>
          <BasicSelect
            onChange={(option) => setFuel(option.value)}
            id="fuel"
            value={fuel ? { label: fuel, value: fuel } : ""}
            getOptionLabel={(option) => option.value}
            options={[...fuelSet.map((fuel) => ({ label: fuel, value: fuel }))]}
          />
        </div>

        <div className="formGroup">
          <label htmlFor="bodyType">Body Type: </label>
          <BasicSelect
            onChange={(option) => setBodyType(option.value)}
            id="bodyType"
            value={bodyType ? { label: bodyType, value: bodyType } : ""}
            getOptionLabel={(option) => option.label}
            options={[
              ...bodyTypeSet.map((type) => ({ label: type, value: type })),
            ]}
          />
        </div>

        <div className="formGroup">
          <p>Price range</p>
          <div className="price">
            <span>{Math.min(...priceSet)}</span>
            <input
              type="range"
              min={Math.min(...priceSet)}
              max={Math.max(...priceSet)}
              value={price ? price : 0}
              onChange={(e) => setPrice(e.target.value)}
            />
            <span>{price ? price : Math.min(...priceSet)}</span>
          </div>
        </div>
      </form>
      <Button label="Reset Filters" onClick={resetSelectValues} />
    </div>
  );
};

export default Filter;
