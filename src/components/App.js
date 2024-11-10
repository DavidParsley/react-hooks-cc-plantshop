import React from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";
import { useEffect, useState } from "react";

function App() {
  const [plants, setPlants] = useState([]);

  function addPlant(newPlant) {
    setPlants((plants) => [...plants, newPlant]);
  }

  function deletePlant(plantId) {
    setPlants((plants) => plants.filter((plant) => plant.id !== plantId));
  }

  function updatePlant(updatedPlant) {
    setPlants((plants) => {
      return plants.map((plant) => {
        if (plant.id === updatedPlant.id) {
          return updatedPlant; 
        } else {
          return plant; 
        }
      });
    });
  }

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((data) => {
        setPlants(data);
      });
  }, []);

  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants} addPlant={addPlant} deletePlant={deletePlant} updatePlant={updatePlant}/>
    </div>
  );
}

export default App;
