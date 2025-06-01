import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

import { useDispatch, useSelector } from "react-redux";
import { fetchDetail } from "../features/detailSlice";
import { useNavigate, useParams } from "react-router-dom";
import HeroDetails from "../components/HeroDetails";
import { fetchEpisodes } from "../features/watchSlice";
import Loading from "../util/Loading";
import Button from "../util/Button";
import Container from "../util/Container";
import List from "../util/List";
import Episodes from "../util/Episodes";
import Footer from "../components/Footer";
import { SideBar } from "../components/SideBar";

const Details = () => {

  const [isOpen, setIsOpen] = useState(false);
  const { animeId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isDelayed, setIsDelayed] = useState(false);

  const gridLayout =
    "grid xl:grid-cols-7 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-2";

  const {
    loading,
    info,
    moreInfo,
    seasons,
    relatedAnimes,
    recommendedAnimes,
    mostPopularAnimes,
  } = useSelector((state) => state.detail);

  const { episodes, totalEpisodes, loading: episodeLoading } = useSelector((state) => state.episode);

  const getWatch = () => {
    navigate(`/watch/${episodes[0].episodeId}`);
  };

  const getDetailAnime = (animeId) => {
    navigate(`/anime/${animeId}`);
  };

  useEffect(() => {
    if (animeId) {
      dispatch(fetchDetail(animeId));
      dispatch(fetchEpisodes(animeId));
    }

    const timer = setTimeout(() => {
      setIsDelayed(true);
    }, 1000); // 1 second delay

    return () => clearTimeout(timer);
  }, [animeId, dispatch]);

  if (!isDelayed || loading) {
    return <Loading />;
  }

  return (
    <>
    <SideBar isOpen={isOpen} setIsOpen={setIsOpen}/>
      <Container>
        <NavBar openSidebar={() => setIsOpen(true)} />
        {info && (
          <article className="">
            <HeroDetails info={info} moreInfo={moreInfo} getWatch={getWatch} loadingEpisode={episodeLoading}/>
            <Episodes
              episodes={episodes}
              totalEpisodes={totalEpisodes}
              className={`flex gap-2 flex-wrap`}
              loading={episodeLoading}
            />

            {seasons.length > 0 && (
              <div>
                <h1 className="text-white text-4xl font-bold mb-6">Seasons</h1>
                <div className="flex gap-2 flex-wrap">
                  {seasons.map((season, idx) => (
                    <div
                      key={idx}
                      className="w-48 h-28 rounded-sm relative"
                      style={{
                        backgroundImage: `url('${season.poster}')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <div className="w-full h-full bg-black/60 p-2">
                        <small className="text-white font-semibold">
                          {season.name}
                        </small>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {relatedAnimes.length > 0 && (
              <List
                label={"Related Anime"}
                data={relatedAnimes}
                onClick={getDetailAnime}
                gridLayout={gridLayout}
              />
            )}
            {recommendedAnimes.length > 0 && (
              <List
                label={"Recommended Anime"}
                data={recommendedAnimes}
                onClick={getDetailAnime}
                gridLayout={gridLayout}
              />
            )}
            {mostPopularAnimes.length > 0 && (
              <List
                label={"Most Popular Anime"}
                data={mostPopularAnimes}
                onClick={getDetailAnime}
                gridLayout={gridLayout}
              />
            )}
          </article>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default Details;
