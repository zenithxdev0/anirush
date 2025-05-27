import React, { useState } from "react";

const Episodes = ({ episodes, totalEpisodes, className, episodeId }) => {
  console.log(episodeId)

  const maxEpisodesPerPage = 100;

  const [currentPage, setCurrentPage] = useState(1); //default

  const initialTotalPage = totalEpisodes / maxEpisodesPerPage;
  const totalPage = Math.ceil(initialTotalPage);

  const lastEpisodeIndex = currentPage * maxEpisodesPerPage; // 2 * 100 = 200
  const firstPostIndex = lastEpisodeIndex - maxEpisodesPerPage; //200 - 100 = 100 will be the index
  const episodeToShow = episodes.slice(firstPostIndex, lastEpisodeIndex); //100 - 199 = 100 totalIndex
//"grid grid-cols-25 text-center gap-2"
  return (
    <>
      {episodes.length > 0 && (
        <>
          <div className="mb-4 bg-neutral-700 p-2 rounded-sm">
            <div className="flex items-center gap-4">
              <h1 className="text-white text-4xl font-bold mb-4">Episodes</h1>

              {totalPage === 1 ? (
                <></>
              ) : (
                <>
                  {/* Pagination */}
                  <select
                    onChange={(e) => setCurrentPage(Number(e.target.value))}
                    className="px-3.5 py-2 text-center font-semibold text-base rounded-sm mt-[-10px] bg-amber-200 cursor-pointer"
                  >
                    {[...Array(totalPage)].map((_, index) => {
                      const start = index * 100 + 1;
                      const end = (index + 1) * 100;

                      return (
                        <option
                          value={index + 1}
                          key={index}
                          className="font-semibold"
                        >
                          {start} - {" "}
                          {index + 1 === totalPage ? totalEpisodes : end}
                        </option>
                      );
                    })}
                  </select>
                </>
              )}
            </div>
            <div className={className}>
              {episodeToShow.map((ep, idx) => (
                <a
                  href={`/watch/${ep.episodeId}`}
                  onClick={() => navigate(`/watch/${ep.episodeId}`)}
                  className={` text-sm flex items-center justify-center min-w-[2rem] px-0.5 py-2  rounded-sm hover:bg-neutral-700 active:bg-neutral-600 transition duration-200 ease-in-out 
                    ${ep.episodeId === episodeId ? 'bg-amber-200 text-black' : 'bg-neutral-800 text-white'}`}
                >
                  {ep.number}
                </a>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Episodes;
