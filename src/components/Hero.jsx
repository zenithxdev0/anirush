import { useState, useEffect } from "react";
import Button from "../util/Button";
import { useNavigate } from "react-router-dom";


const Hero = ({ data, getDetailAnime }) => {

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % data.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + data.length) % data.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Optional: auto-slide
  useEffect(() => {
    const interval = setInterval(nextSlide, 10000);
    return () => clearInterval(interval);
  }, [data.length]);

  if (!data || data.length === 0) return null;

  return (
    
      <section className="flex gap-4 w-full min-h-[26rem] sm:min-h-[32rem] max-h-[36rem]">
  <div className="relative w-full overflow-hidden rounded-lg">
    {/* Slides */}
    {data.map((anime, index) => (
      <div
        key={index}
        className={`absolute w-full h-full transition-opacity duration-700 ease-in-out bg-zinc-900 bg-no-repeat sm:bg-center bg-cover flex items-end p-6 sm:p-12 bg-gradient-dark-bottom-left ${
          index === currentSlide ? "opacity-100 z-20" : "opacity-0 z-10"
        }`}
        style={{ backgroundImage: `url(${anime.poster})` }}
      >
        <div className="z-10 space-y-4">
          <p className="text-amber-200">#{anime.rank} Spotlight</p>
          <h1 className="font-black text-white text-2xl sm:text-4xl w-[90%] sm:w-[70%] line-clamp-5 sm:line-clamp-none">{anime.name}</h1>
          <p className="line-clamp-3 text-ellipsis w-full sm:w-[70%] text-white">{anime.description}</p>
          <div className="space-x-4">
            <Button color="amber" onClick={() => getDetailAnime(anime.id)}>Watch Now</Button>
          </div>
        </div>
      </div>
    ))}

    {/* Prev Button */}
    <button
      onClick={prevSlide}
      className="absolute top-1/2 left-0 transform -translate-y-1/2 z-30 px-4 py-20 text-white bg-black/50 hover:bg-black/70 cursor-pointer"
    >
      ‹
    </button>

    {/* Next Button */}
    <button
      onClick={nextSlide}
      className="absolute top-1/2 right-0 transform -translate-y-1/2 z-30 px-4 py-20 text-white bg-black/50 hover:bg-black/70 cursor-pointer"
    >
      ›
    </button>
  </div>
</section>

  );
};

export default Hero;

