
const Trending = ({ error, isLoading, data, getDetailAnime }) => {
  return (
    <section className="pb-8 bg-zinc-900">
      <h4 className="font-bold mb-2 text-xl text-amber-200">Trending</h4>
        <div className="flex overflow-x-auto gap-4 mx-auto snap-x snap-mandatory custom-scrollbar">
          {data?.map((anime, index) => (
            <a href={`/anime/${anime.id}`} onClick={() => getDetailAnime(anime.id)} key={index} className="flex-shrink-0 w-48 snap-end touch-pan-x">
              <p className="text-sm font-medium mb-2 truncate text-white">{anime.name}</p>
              <img
                src={anime.poster}
                alt={anime.name}
                className="w-full h-62  object-fill rounded shadow"
              />
            </a>
          ))}
        </div>

    </section>
  );
};

export default Trending;
