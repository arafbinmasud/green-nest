import React from "react";
import { Link } from "react-router";
import PlantCard from "./PlantCard";

const TopPlants = ({ plants }) => {
  console.log(plants);

  return (
    <div className="w-11/12 mx-auto my-10">
      <h2 className="font-bold text-2xl md:text-4xl text-center mb-4 text-primary">
        Top Rated Indoor Plants
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
        {plants.map((plant) => (
          <PlantCard key={plant.plantId} plant={plant}></PlantCard>
        ))}
      </div>
      <div className="flex justify-center my-6">
        <Link className="btn btn-primary" to="/plants">
          View More
        </Link>
      </div>
    </div>
  );
};

export default TopPlants;
