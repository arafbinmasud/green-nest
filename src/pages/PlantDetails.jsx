import { useLoaderData, useParams } from "react-router";
import DetailsCard from "../components/DetailsCard";
import BookingForm from "../components/BookingForm";

const PlantDetails = () => {
  const allPlants = useLoaderData();
  const { id } = useParams();

  const plant = allPlants.find((plant) => plant.plantId === Number(id));
 

  return (
    <section className="w-11/12 mx-auto my-10 grid grid-cols-1 md:grid-cols-3 gap-10">
      <div className="plant-details md:col-span-2">
        <DetailsCard plant={plant}></DetailsCard>
      </div>

      <div>
        <BookingForm plant={plant}></BookingForm>
      </div>
    </section>
  );
};

export default PlantDetails;
