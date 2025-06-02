import Button from "../util/Button";
import Stat from "../util/Stat";
import InfoRow from "./InfoRow";

const HeroDetails = ({ info, moreInfo, getWatch, loadingEpisode }) => {
  const data = info;

  return (
    <section className="text-white flex flex-col md:flex-row mb-6 ">
      <div className="flex-1 bg-neutral-800 border-b-neutral-600/50 sm:mb-0 mb-2">
        <div className="flex p-2 gap-4 sm:flex-row flex-col items-center sm:items-start sm:border-r-neutral-600/50 sm:border-r border-r-0">
          <img
            src={info.poster}
            alt={info.name}
            className="sm:w-64 sm:h-96 w-32 h-48 rounded-md flex-shrink-0 object-cover"
          />
          <div className="sm:block flex flex-col items-center space-y-2 ">
            <h1 className="text-xl sm:text-4xl font-bold sm:text-start text-center">{info.name}</h1>
            <div className="stats flex items-center gap-2 my-4">
              <Stat type={"rating"}>{info.stats.rating}</Stat>
              <Stat type={"quality"}>{info.stats.quality}</Stat>
              <Stat type={"sub"}>{info.stats.episodes.sub}</Stat>
              <Stat type={"dub"}>{info.stats.episodes.dub}</Stat>
              <small className="text-white mx-1 opacity-70 text-base">•</small>
              <small className="font-semibold">{info.stats.type}</small>
              <small className="text-white mx-1 opacity-70 text-base">•</small>
              <small className="font-semibold">{info.stats.duration}</small>
            </div>
            <Button
              disabled={loadingEpisode}
              color={"amber"}
              onClick={() => getWatch(data.id)}
            >
              Watch Now
            </Button>
            <p className="text-sm sm:w-[95%]">{info.description}</p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-80 bg-neutral-800 p-4 shadow-lg text-neutral-100 space-y-2">
        <h2 className="text-xl font-semibold border-b border-neutral-700 pb-2 mb-2">
          Anime Details
        </h2>
        <div className="space-y-1 text-sm">
          <InfoRow label="Japanese" value={moreInfo.japanese || "?"} />
          <InfoRow label="Synonyms" value={moreInfo.synonyms || "?"} />
          <InfoRow label="Aired" value={moreInfo.aired} />
          <InfoRow label="Premiered" value={moreInfo.premiered} />
          <InfoRow label="Duration" value={moreInfo.duration} />
          <InfoRow label="Status" value={moreInfo.status} />
          <InfoRow label="Mal Score" value={moreInfo.malscore} />
          {moreInfo.genres && (
            <InfoRow label="Genres" value={moreInfo.genres.join(", ")} />
          )}
          <InfoRow label="Studios" value={moreInfo.studios} />
          {moreInfo.producers && (
            <InfoRow label="Producers" value={moreInfo.producers.join(", ")} />
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroDetails;
