

const PlantCareTips = () => {
  

  return (
    <div className="w-11/12 mx-auto my-10">
      <h2 className="font-bold text-2xl md:text-4xl text-center mb-4 text-primary">
        Essential Plant Care Tips
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
          <div className="bg-green-50 p-6 rounded-2xl border border-green-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-4xl mb-4">💧</div>
            <h3 className="text-xl font-bold mb-2 text-green-800">
              Watering Wisdom
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Avoid over-watering! Wait until the top inch of soil feels dry before watering again.
            </p>
          </div>
          <div className="bg-green-50 p-6 rounded-2xl border border-green-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-4xl mb-4">☀️</div>
            <h3 className="text-xl font-bold mb-2 text-green-800">
              Sunlight Secrets
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Most indoor plants love bright, indirect light. Avoid direct harsh sunlight to prevent leaf burn.
            </p>
          </div>
          <div className="bg-green-50 p-6 rounded-2xl border border-green-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-4xl mb-4">🌿</div>
            <h3 className="text-xl font-bold mb-2 text-green-800">
              Fertilizing Facts
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Feed your plants during the growing season (spring and summer) every 4-6 weeks.
            </p>
          </div>
        
      </div>
    </div>
  );
};

export default PlantCareTips;
