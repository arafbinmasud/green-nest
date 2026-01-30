import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import img1 from "../assets/tree1.webp";
import img2 from "../assets/tree2.webp";
import img3 from "../assets/tree3.webp";
import img4 from "../assets/tree4.webp";

const Hero = () => {
  return (
    <div className="w-11/12 mx-auto my-6 rounded-3xl overflow-hidden shadow-xl">
      <Swiper
        navigation={true}
        pagination={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        effect="fade"
        loop={true}
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        className="h-96 md:h-125 w-full"
      >
        {/* Slide 1  */}
        <SwiperSlide>
          <div
            className="relative w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${img1})` }}
          >
            <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-4 ">
              <h2 className="text-white text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                Bring Nature Indoors
              </h2>
              <p className="text-gray-200 text-lg md:text-xl max-w-2xl drop-shadow-md">
                Transform your space with a touch of green and breathe fresh
                air.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2  */}
        <SwiperSlide>
          <div
            className="relative w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${img2})` }}
          >
            <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-4 ">
              <h2 className="text-white text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                Plants for a Better Life
              </h2>
              <p className="text-gray-200 text-lg md:text-xl max-w-2xl drop-shadow-md">
                Nurture your soul with plants that care for your mental
                well-being.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3  */}
        <SwiperSlide>
          <div
            className="relative w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${img3})` }}
          >
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4 ">
              <h2 className="text-white text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                Grow Your Own Oasis
              </h2>
              <p className="text-gray-200 text-lg md:text-xl max-w-2xl drop-shadow-md">
                Discover the perfect plant for every corner of your home.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 4  */}
        <SwiperSlide>
          <div
            className="relative w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${img4})` }}
          >
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4 ">
              <h2 className="text-white text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                Your Home, Your Jungle
              </h2>
              <p className="text-gray-200 text-lg md:text-xl max-w-2xl drop-shadow-md">
                Experience the serenity of nature within your walls with our
                premium collection.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
