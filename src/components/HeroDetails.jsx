import Button from "../util/Button";

const HeroDetails = ({ info, moreInfo, getWatch }) => {
  const data = info;

  return (
    <section className="text-white flex">
      <div className="flex-1 bg-neutral-700">
        <div className="flex p-2 gap-4">
          <img src={info.poster} alt={info.name} className="w-64 h-96 rounded-md flex-shrink-0 object-cover" />
          <div className="block space-y-2">
            <h1 className="text-4xl font-bold">{info.name}</h1>
            <div className="stats flex items-center gap-2 my-4">
              <p className="bg-white py-1 px-1.5 text-xs font-semibold text-black rounded-xs">
                {info.stats.rating}
              </p>
              <p className="bg-amber-300 py-1 px-1.5 text-xs font-semibold text-black rounded-xs">
                {info.stats.quality}
              </p>
              <p className="bg-green-200 py-1 px-1.5 text-xs font-semibold text-black rounded-xs">
                sub {info.stats.episodes.sub}
              </p>
              <p className="bg-pink-300 py-1 px-1.5 text-xs font-semibold text-black rounded-xs">
                dub {info.stats.episodes.dub}
              </p>
              <small className="text-white mx-1 opacity-70 text-base">•</small>
              <small className="font-semibold">{info.stats.type}</small>
              <small className="text-white mx-1 opacity-70 text-base">•</small>
              <small className="font-semibold">{info.stats.duration}</small>
            </div>
              <Button color={'amber'} onClick={() => getWatch(data.id)}>Watch Now</Button>
            <p className="text-base w-[80%]">{info.description}</p>

          </div>
        </div>
      </div>
      <div className="w-80 bg-neutral-800 p-2">Content here</div>
    </section>
  );
};

export default HeroDetails;

//<h1>{data.name}</h1>
// <Button color={'amber'} onClick={() => getWatch(data.id)}>Watch Now</Button>
