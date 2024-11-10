import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import { useState } from "react";

function PlantPage({plants, addPlant, deletePlant, updatePlant}) {
  const [search, setSearch] = useState("");

  const filter = plants.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm addPlant={addPlant} />
      <Search search={search} setSearch={setSearch}/>
      <PlantList plants={filter} deletePlant={deletePlant} updatePlant={updatePlant}/>
    </main>
  );
}

export default PlantPage;
