import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plants, addPlant}) {
  return (
    <main>
      <NewPlantForm addPlant={addPlant} />
      <Search />
      <PlantList plants={plants} />
    </main>
  );
}

export default PlantPage;
