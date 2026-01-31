import React from "react";

const EcoDecor = () => {
  return (
    <div className="w-11/12 mx-auto my-10">
      <div className="text-center mb-4">
        <h2 className="text-2xl md:text-4xl font-bold text-primary">
          Eco Decor Ideas
        </h2>
        <p className="text-accent mt-2">
          Style your living space with a touch of green.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:h-125">
        
        <div className="md:col-span-7 h-75 md:h-full relative overflow-hidden rounded-3xl">
          <img
            src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=687&auto=format&fit=crop"
            className="w-full h-full object-cover"
            alt="Living Room"
          />
          <div className="absolute inset-0 bg-black/60 flex items-end p-8">
            <h3 className="text-white text-2xl font-bold">
              Minimalist Living Room Jungle
            </h3>
          </div>
        </div>

        
        <div className="md:col-span-5 flex flex-col gap-6 h-125 md:h-full"> 

         
          <div className="flex-1 bg-green-100 p-8 rounded-3xl flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-primary mb-2 text-center md:text-left">
              Shelf Styling
            </h3>
            <p className="text-green-700 text-md text-center md:text-left">
              Mix small succulents with books to create a balanced look on your
              bookshelves.
            </p>
          </div>

          <div className="flex-1 relative overflow-hidden rounded-3xl">
            <img
              src="https://plus.unsplash.com/premium_photo-1722170080321-8fd99702432d?q=80&w=1110&auto=format&fit=crop"
              className="w-full h-full object-cover absolute inset-0"
              alt="Workspace"
            />
            <div className="absolute inset-0 bg-green-900/40 flex items-center justify-center">
              <p className="text-white font-bold text-lg">
                Office Greenery
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcoDecor;
