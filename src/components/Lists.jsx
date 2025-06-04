import Stat from "../util/Stat";

const Lists = ({ title, data, getDetailAnime }) => {
  return (
    <div className=" rounded-lg shadow bg-zinc-900"> {/**main container */}
      <h5 className="text-lg font-bold py-2 text-amber-300">{title}</h5>
      <div className="space-y-4">
        {data.map((anime, index) => (
          
          <a
            href={`/anime/${anime.id}`}
            key={anime.id || index}
            className="flex items-center space-x-3 border-b pb-2 border-white/20 cursor-pointer"
            onClick={() => getDetailAnime(anime.id)}
          >
            <img
              src={anime.poster}
              alt={anime.name}
              className="w-16 h-20 object-cover rounded"
            />
            <div>
              <p className="text-sm font-medium text-white">{anime.name}</p>
              {anime.episodes.sub && <Stat type={'sub'}>{anime.episodes.sub}</Stat>}
              <span> </span>
              {anime.episodes.dub && <Stat type={'dub'}>{anime.episodes.dub}</Stat>}
              <small className="text-white mx-1">•</small>
              <small className="text-white font-semibold">{anime.type}</small>
            </div>
          </a>

        ))}
      </div>
      {/* <button className="text-white hover:text-amber-200 duration-300 transition ease-in-out cursor-pointer">View more</button> */}
    </div>
  );
};

export default Lists;
