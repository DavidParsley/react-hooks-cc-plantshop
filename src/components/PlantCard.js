import React from "react";
import { useState } from "react";

function PlantCard({plant, deletePlant, updatePlant}) {
  const [inStock, setInStock] = useState(true);
  const color = inStock ? "green" : "grey";

  function handleDelete() {
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => deletePlant(plant.id));
  }
  const [newPrice, setNewPrice] = useState(plant.price)

  function priceChange(e) {
    setNewPrice(e.target.value);
  }

  function priceUpdate() {
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: plant.name,
        image: plant.image,
        price: newPrice,
      }),
    })
      .then((res) => res.json())
      .then(() => updatePlant({ ...plant, price: newPrice }));
  }


  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      <button className="primary" style={{ background: color }} onClick={() => setInStock(!inStock)}>{inStock ? "In Stock" : "Out of Stock"}</button>
      <input type="number" value={newPrice} onChange={priceChange} placeholder="Enter new price"/>
      <button style={{ background: 'orange', color: 'white' }} onClick={priceUpdate}>Update Price</button>
      <br></br>
      <button  style={{ background: 'red', color: 'white' }} onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default PlantCard;
