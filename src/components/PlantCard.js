import React from "react";
import { useState } from "react";

function PlantCard({plant}) {
  const [inStock, setInStock] = useState(true);
  const color = inStock ? "green" : "grey";

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      <button className="primary" style={{ background: color }} onClick={() => setInStock(!inStock)}>{inStock ? "In Stock" : "Out of Stock"}</button>
    </li>
  );
}

export default PlantCard;
