import Button from "../util/Button";
import Stat from "../util/Stat";


const HeroDetails = ({ info, moreInfo, getWatch }) => {
  const data = info;

  return (
    <section className="text-white flex mb-6">
      <div className="flex-1 bg-neutral-700">
        <div className="flex p-2 gap-4">
          <img src={info.poster} alt={info.name} className="w-64 h-96 rounded-md flex-shrink-0 object-cover" />
          <div className="block space-y-2">
            <h1 className="text-4xl font-bold">{info.name}</h1>
            <div className="stats flex items-center gap-2 my-4">
              <Stat type={'rating'}>{info.stats.rating}</Stat>
              <Stat type={'quality'}>{info.stats.quality}</Stat>
              <Stat type={'sub'}>{info.stats.episodes.sub}</Stat>
              <Stat type={'dub'}>{info.stats.episodes.dub}</Stat>
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
