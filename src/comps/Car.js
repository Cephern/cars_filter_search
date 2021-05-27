const Car = ({ brand, model, year, fuel, bodyType, price }) => {
  return (
    <div className="car">
      <img src={`images/${brand}.jpg`} alt={`${brand} car`} />
      <p>
        Brand: <span className="brandSpan">{brand}</span>
      </p>
      <p>
        Model: <span className="modelSpan">{model}</span>
      </p>
      <p>
        Year: <span className="yearSpan">{year}</span>
      </p>
      <p>
        Fuel: <span className="fuelSpan">{fuel}</span>
      </p>
      <p>
        Body Type: <span className="bodyTypeSpan">{bodyType}</span>
      </p>
      <p>
        Price: <span className="priceSpan">{price}</span> ₽
      </p>
    </div>
  );
};

export default Car;
