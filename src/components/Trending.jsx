const Trending = ({ error, isLoading, data, getDetailAnime, className, label}) => {
  return (
    <section className={`${className}`}>
      <h4 className="font-bold mb-2 text-amber-200">{label  || 'Trending'}</h4>
      <div className="w-full space-y-2">
        {data?.map((anime, index) => (
          <a 
            href={`/anime/${anime.id}`} 
            onClick={() => getDetailAnime(anime.id)} 
            key={index} 
            className="flex gap-2"
          >
            <img
              src={anime.poster}
              alt={anime.name}
              className="w-12 h-16 object-fill rounded shadow"
            />
            <div className="w-full flex justify-between items-center">
              <p className="text-sm font-medium mb-2  text-white">{anime.name}</p>
              <p className="text-white border px-4 py-2 rounded-md">
                  {index + 1}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Trending;