import { useLoaderData } from "react-router";
import Hero from "../components/Hero";
import TopPlants from "../components/TopPlants";


const HomePage = () => {
  const allPlants = useLoaderData();
  const topPlants = allPlants.slice(0,6);
  
  
  


  return (
    <>
      <section className="hero-section">
        <Hero></Hero>
      </section>

      <section className="card-section">
        <TopPlants plants={topPlants}></TopPlants>
      </section>
    </>
  );
};

export default HomePage;
