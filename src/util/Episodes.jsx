import React, { useEffect, useState } from "react";

const Episodes = ({ episodes, totalEpisodes, className, episodeId, loading, page }) => {
  const maxEpisodesPerPage = 100;

  const [currentPage, setCurrentPage] = useState(1); // Default to page 1

  useEffect(() => {
    if (page) {
      setCurrentPage(page);
    }
  }, [page]);

  const totalPage = Math.ceil(totalEpisodes / maxEpisodesPerPage);
  const lastEpisodeIndex = currentPage * maxEpisodesPerPage;
  const firstPostIndex = lastEpisodeIndex - maxEpisodesPerPage;
  const episodeToShow = episodes.slice(firstPostIndex, lastEpisodeIndex);

  if (loading) {
    return (
      <div className="mb-4 bg-neutral-800 p-2 rounded-sm flex items-center justify-center">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <>
      {episodes.length > 0 && (
        <div className="mb-4 bg-neutral-800 p-2 rounded-sm">
          <div className="flex items-center gap-4">
            <h1 className="text-white text-4xl font-bold mb-4">Episodes</h1>

            {totalPage > 1 && (
              <select
                value={currentPage}
                onChange={(e) => setCurrentPage(Number(e.target.value))}
                className="px-3 py-1.5 text-center font-semibold text-sm rounded-sm mt-[-10px] bg-amber-300 cursor-pointer"
              >
                {[...Array(totalPage)].map((_, index) => {
                  const start = index * 100 + 1;
                  const end = (index + 1) * 100;
                  return (
                    <option value={index + 1} key={index} className="font-semibold">
                      {start} - {index + 1 === totalPage ? totalEpisodes : end}
                    </option>
                  );
                })}
              </select>
            )}
          </div>

          <div className={className}>
            {episodeToShow.map((ep, idx) => (
              <a
                key={ep.episodeId || idx}
                href={`/watch/${ep.episodeId}`}
                className={`flex-1 text-sm flex items-center justify-center min-w-[2rem] px-0.5 py-2 font-medium rounded-sm hover:bg-amber-400 active:bg-amber-500 transition duration-200 ease-in-out 
                  ${ep.episodeId === episodeId ? 'bg-rose-500 text-white' : 'bg-amber-300 text-black'}`}
              >
                {ep.number}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Episodes;
