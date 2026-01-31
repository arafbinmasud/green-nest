import { useLoaderData } from "react-router";
import PlantCard from "../components/PlantCard";

const Plants = () => {
  const allPlants = useLoaderData();

  return (
    <div className="my-6 w-11/12 mx-auto">
      <h2 className="font-bold text-2xl md:text-4xl text-center mb-5 text-primary">
        All Indoor Plants
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
        {allPlants.map((plant) => (
          <PlantCard key={plant.plantId} plant={plant}></PlantCard>
        ))}
      </div>
    </div>
  );
};

export default Plants;
