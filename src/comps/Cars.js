import Car from "./Car";

const Cars = ({ cars }) => {
  return (
    <div id="cars">
      <div className="cars-grid">
        {cars.map(({ id, brand, model, year, fuel, bodyType, price }) => (
          <Car
            key={id}
            brand={brand}
            model={model}
            year={year}
            fuel={fuel}
            bodyType={bodyType}
            price={price}
          />
        ))}
      </div>
    </div>
  );
};

export default Cars;
