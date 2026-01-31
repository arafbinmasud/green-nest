
const PlantOfWeek = () => {
  return (
    <div className="w-11/12 mx-auto my-10 bg-emerald-900 rounded-[40PX] overflow-hidden shadow-2xl">

      <div className="flex flex-col md:flex-row items-center">
        
        
        <div className="flex-1 p-7 md:p-16 text-white">
          <span className="bg-emerald-500 text-xs font-bold px-3 py-1 rounded-full">
            FEATURED
          </span>
          <h2 className="text-3xl md:text-6xl font-black mt-4 mb-6">
            Plant of the <span className="text-emerald-400">Week!</span>
          </h2>
          <h3 className="text-2xl font-bold mb-4">Monstera Deliciosa</h3>
          <p className="text-emerald-100 max-w-md">
            The Monstera is more than just a plant; it's a statement piece. Known for its iconic heart-shaped leaves, it brings a tropical vibe to any room. 
          </p>
          
        </div>

        
        <div className="flex-1 h-100 md:h-150 w-full">
          <img 
            src="https://i.ibb.co.com/Q7ZhpY4X/monstera-deliciosa.webp" 
            alt="Monstera"
            className="w-full h-full object-cover"
          />
        </div>

      </div>

    </div>
  );
};

export default PlantOfWeek;