import { useState, useEffect } from "react";
import Button from "../util/Button";


const Hero = ({ data, day, week, month, getDetailAnime }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState("today");

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
    
      <section className="flex p-4 gap-4 h-[40rem]">
      <div className="relative grow-1 overflow-hidden rounded-lg ">
        {/* Slides */}
        {data.map((anime, index) => (
        <div
          key={index} className={`absolute w-full h-full transition-opacity duration-700 ease-in-out bg-zinc-900 bg-cover bg-no-repeat  ${
            index === currentSlide ? "opacity-100 z-20" : "opacity-0 z-10"
          } flex items-end p-12 bg-gradient-dark-bottom-left`}
          style={{ backgroundImage: `url(${anime.poster})` }}
        >

          {/**content here */}
          <div className="z-10 space-y-4">

            <p className="text-amber-200">#{anime.rank} Spotlight</p>
            <h1 className="font-black text-white text-5xl w-[70%]">{anime.name}</h1>
            <p className="line-clamp-3 text-ellipsis w-[70%] text-white">{anime.description}</p>  
            <div className="space-x-4">
              <Button color={'amber'} onClick={() => alert('Working component')}>Watch Now</Button>
              <Button color={'rose'} onClick={() => getDetailAnime(anime.id)}>Details</Button>
            </div>
          </div>

        </div>
        ))}

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

<div className="bg-zinc-800 p-4 rounded-lg flex flex-col max-w-96">
  <div className="flex justify-between items-center mb-4">
    <h5 className="text-white font-bold">Top Anime</h5>
    <div className="flex gap-4">
      <p onClick={() => setActiveTab('today')} className={`text-white cursor-pointer ${activeTab === 'today' ? 'font-bold' : ''}`}>Today</p>
      <p onClick={() => setActiveTab('week')} className={`text-white cursor-pointer ${activeTab === 'week' ? 'font-bold' : ''}` }>Week</p>
      <p onClick={() => setActiveTab('month')} className={`text-white cursor-pointer ${activeTab === 'month' ? 'font-bold' : ''}`}>Month</p>
    </div>
  </div>

  {/* Set a fixed height and make it scrollable */}
<div className="overflow-y-auto space-y-2 pr-2 grow custom-scrollbar w-full">
  {(activeTab === 'today' ? day :
    activeTab === 'week' ? week :
    activeTab === 'month' ? month : []
  ).map((anime, index) => (
    <div key={index} className="flex gap-2">
      <img
        src={anime.poster}
        className="w-12 h-16 object-cover rounded"
        alt={anime.name}
      />
      <div className="flex items-center justify-between w-full gap-4">
        <h5 className="text-white font-medium">{anime.name}</h5>
        <h5 className="text-white border px-4 py-2 rounded-md">{anime.rank}</h5>
      </div>
    </div>
  ))}
</div>

</div>
      </section>

  );
};

export default Hero;

        {/* Indicators */}
        {/* <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
          {data.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div> */}

        {/* Prev Button */}