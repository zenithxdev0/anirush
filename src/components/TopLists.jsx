import React from "react";
import Lists from "./Lists";

const TopLists = ({
  error,
  isLoading,
  topAiringAnimes,
  mostPopularAnimes,
  mostFavoriteAnimes,
  latestCompletedAnimes,
  getDetailAnime
}) => {
  return (
    <section className="top-lists-anime pb-4  bg-zinc-900">
      <div className=" mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Lists title="Top Airing" data={topAiringAnimes} getDetailAnime={getDetailAnime} />
          <Lists title="Most Popular" data={mostPopularAnimes} getDetailAnime={getDetailAnime} />
          <Lists title="Most Favorite" data={mostFavoriteAnimes} getDetailAnime={getDetailAnime} />
          <Lists title="Latest Completed" data={latestCompletedAnimes} getDetailAnime={getDetailAnime} />
        </div>
      </div>
    </section>
  );
};

export default TopLists;
