import React, { useState } from 'react'

const Aside = ({className, top10Today, top10Week, top10Month}) => {

  const [activeTab, setActiveTab] = useState("today");

  return (
    <>
    <div className={`${className}`}>
        <div className="flex justify-between items-center mb-4">
          <h5 className="text-white font-bold">Top Anime</h5>
          <div className="flex gap-4">
            <p
              onClick={() => setActiveTab("today")}
              className={` cursor-pointer ${
                activeTab === "today" ? "font-bold text-amber-300" : "text-white"
              }`}
            >
              Today
            </p>
            <p
              onClick={() => setActiveTab("week")}
              className={` cursor-pointer ${
                activeTab === "week" ? "font-bold text-amber-300" : "text-white"
              }`}
            >
              Week
            </p>
            <p
              onClick={() => setActiveTab("month")}
              className={` cursor-pointer ${
                activeTab === "month" ? "font-bold text-amber-300" : "text-white"
              }`}
            >
              Month
            </p>
          </div>
        </div>

        <div className=" space-y-2 pr-2 w-full">
          {(activeTab === "today"
            ? top10Today
            : activeTab === "week"
            ? top10Week
            : activeTab === "month"
            ? top10Month
            : []
          ).map((anime, index) => (
            <a key={index} className="flex gap-2" href={`/anime/${anime.id}`}>
              <img
                src={anime.poster}
                className="w-12 h-16 object-cover rounded"
                alt={anime.name}
              />
              <div className="flex items-center justify-between w-full gap-4">
                <h5 className="text-white font-medium">{anime.name}</h5>
                <h5 className="text-white border px-4 py-2 rounded-md">
                  {anime.rank}
                </h5>
              </div>
            </a>
          ))}
        </div>
    </div>

    
    </>

  )
}

export default Aside