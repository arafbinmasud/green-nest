import { toast } from "react-toastify";

const BookingForm = ({ plant }) => {

  const handleBooking = (e) => {
    e.preventDefault();
    toast.success(`Booking Successful for ${plant.plantName}!`);
    e.target.reset();
  };

  return (
    <div className="card h-full bg-base-100 p-8 rounded-2xl border border-accent shadow-sm">
      <h3 className="text-xl font-bold mb-5 text-center">
        Interested in this plant?
      </h3>
      <form onSubmit={handleBooking} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="input input-bordered w-full"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="input input-bordered w-full"
          required
        />

        <button className="btn btn-outline btn-primary w-full">Book Now</button>
      </form>
    </div>
  );
};
export default BookingForm;
