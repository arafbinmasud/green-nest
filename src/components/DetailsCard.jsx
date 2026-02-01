import React from "react";

const DetailsCard = ({ plant }) => {
  const { plantName, image, description, price, rating, availableStock } = plant;

  return (
    <div className="card bg-base-100 shadow-xl border border-accent rounded-2xl p-5">
      <img
        src={image}
        alt={plantName}
        className="rounded-2xl h-100 object-cover w-full"
      />
      <div className="mt-5">
        <h2 className="text-2xl md:text-3xl font-bold">{plantName}</h2>
        <p className="text-accent my-3">{description}</p>
        <div className="flex justify-between font-bold md:text-xl">
          <span className="text-primary">${price}</span>
          <span>Rating: {rating} ⭐</span>
        </div>
        <div className="badge badge-primary text-md p-3 mt-3">Stock: {availableStock}</div>
      </div>
    </div>
  );
};

export default DetailsCard;
