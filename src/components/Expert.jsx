import React from "react";
import expert1 from "../assets/expert-1.webp";
import expert2 from "../assets/expert-2.webp";
import expert3 from "../assets/expert-3.webp";
import expert4 from "../assets/expert-4.webp";

const Expert = () => {
  return (
    <div className="w-11/12 mx-auto my-10">
      <h2 className="font-bold text-2xl md:text-4xl text-center mb-4 text-primary">
        Meet Our Green Experts
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-green-100 ">
          <figure className="px-4 pt-4 h-87.5">
            <img
              src={expert1}
              alt="Plant Expert"
              className="rounded-xl w-full h-full object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-xl font-bold">Ernest Johnson</h2>

            <p className="text-accent text-sm line-clamp-2">
              Tropical Plant Pathologist
            </p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-green-100 ">
          <figure className="px-4 pt-4 h-87.5">
            <img
              src={expert2}
              alt="Plant Expert"
              className="rounded-xl w-full h-full object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-xl font-bold">Sarah Jenkins</h2>

            <p className="text-accent text-sm line-clamp-2">
              Indoor Jungle Stylist
            </p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-green-100 ">
          <figure className="px-4 pt-4 h-87.5">
            <img
              src={expert3}
              alt="Plant Expert"
              className="rounded-xl w-full h-full object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-xl font-bold">Marcus Keats</h2>

            <p className="text-accent text-sm line-clamp-2">
              Soil & Nutrient Scientist
            </p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-green-100 ">
          <figure className="px-4 pt-4 h-87.5">
            <img
              src={expert4}
              alt="Plant Expert"
              className="rounded-xl w-full h-full object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-xl font-bold">Thomas Rodriguez</h2>

            <p className="text-accent text-sm line-clamp-2">
              Succulent & Cacti Specialist
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Expert;
