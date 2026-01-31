import { Link } from "react-router";

const PlantCard = ({ plant }) => {
  const { plantName, image, category, price, rating, description } = plant;

  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
      <figure className="px-4 pt-4 h-87.5">
        <img
          src={image}
          alt={plantName}
          className="rounded-xl w-full h-full object-cover"
        />
      </figure>
      <div className="card-body">
        <div className="flex justify-between items-start">
          <h2 className="card-title text-xl font-bold">{plantName}</h2>
          <div className="badge badge-secondary text-xs">{rating} ⭐</div>
        </div>
        <p className="text-accent text-sm line-clamp-2">{description}</p>
        <div className="flex justify-between items-center mt-4 ">
          <span className="text-2xl font-bold text-success">${price}</span>
          <div className="badge badge-outline badge-ghost">{category}</div>
        </div>
        <div className="card-actions mt-4">
          <Link className="btn btn-primary btn-outline btn-block">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
