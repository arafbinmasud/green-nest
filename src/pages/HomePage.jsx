import { useLoaderData } from "react-router";
import Hero from "../components/Hero";
import TopPlants from "../components/TopPlants";
import PlantCareTips from "../components/PlantCareTips";
import Expert from "../components/Expert";
import EcoDecor from "../components/EcoDecor";
import PlantOfWeek from "../components/PlantofWeek";

const HomePage = () => {
  const allPlants = useLoaderData();
  const topPlants = allPlants.slice(0, 6);

  return (
    <>
      <section className="hero-section">
        <Hero></Hero>
      </section>

      <section className="card-section">
        <TopPlants plants={topPlants}></TopPlants>
      </section>

      <section className="tips-section">
        <PlantCareTips></PlantCareTips>
      </section>

      <section className="expert-section">
        <Expert></Expert>
      </section>

      <section className="extra-section-decor">
        <EcoDecor></EcoDecor>
      </section>

      <section>
        <PlantOfWeek></PlantOfWeek>
      </section>
    </>
  );
};

export default HomePage;
