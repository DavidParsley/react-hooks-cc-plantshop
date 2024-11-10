import React from "react";
import { useState } from "react";

function PlantCard({plant, deletePlant}) {
  const [inStock, setInStock] = useState(true);
  const color = inStock ? "green" : "grey";

  function handleDelete() {
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => deletePlant(plant.id));
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      <button className="primary" style={{ background: color }} onClick={() => setInStock(!inStock)}>{inStock ? "In Stock" : "Out of Stock"}</button>
      <br></br>
      <button  style={{ background: 'red', color: 'white' }} onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default PlantCard;
