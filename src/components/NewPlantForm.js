import React from "react";
import { useState } from "react";

function NewPlantForm({addPlant}) {
  const [name, setName] = useState()
  const [image, setImage] = useState()
  const [price, setPrice] = useState()

  console.log(name)
  console.log(image)
  console.log(price)

  function handleSubmit(e) {
    e.preventDefault();

    fetch("https://react-hooks-cc-plantshop-i8pv.onrender.com/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        image: image,
        price: price,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        addPlant(data);
      });
    setName("");
    setImage("");
    setPrice("");
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
