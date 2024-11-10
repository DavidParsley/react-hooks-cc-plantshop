import React from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";
import { useEffect, useState } from "react";

function App() {
  const [plants, setPlants] = useState([]);

  function addPlant(newPlant) {
    setPlants((plants) => [...plants, newPlant]);
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
      <PlantPage plants={plants} addPlant={addPlant} />
    </div>
  );
}

export default App;
