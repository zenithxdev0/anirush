import React, { useEffect } from "react";
import NavBar from "../components/NavBar";

import { useDispatch, useSelector } from "react-redux";
import { fetchDetail } from "../features/detailSlice";
import { data, useNavigate, useParams } from "react-router-dom";
import HeroDetails from "../components/HeroDetails";
import { fetchEpisodes } from "../features/watchSlice";
import Loading from "../util/Loading";
import Button from "../util/Button";
import Container from "../util/Container";
import List from "../util/List";


const Details = () => {
  const { animeId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, info, moreInfo, seasons, relatedAnimes, recommendedAnimes, mostPopularAnimes } = useSelector(
    (state) => state.detail
  );
  const { episodes } = useSelector((state) => state.episode);

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
  }, [animeId, dispatch]);

  if (loading) {
    return <Loading />;
  }

  return (
    <Container>
      <NavBar />
      {info && (
        <article className="">
          <HeroDetails info={info} moreInfo={moreInfo} getWatch={getWatch} />
          {seasons.length > 0 && (
            <div>
              <h1 className="text-white text-4xl font-bold mb-6">Seasons</h1>
              <div className="flex gap-2">
                {seasons.map((season, idx) => (
                  <div
                    className="w-48 h-28 rounded-sm relative"
                    style={{
                      backgroundImage: `url('${season.poster}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="w-full h-full bg-black/60 p-2">
                      <small className="text-white font-semibold">{season.name}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {relatedAnimes.length > 0 && <List label={'Related Anime'} data={relatedAnimes} onClick={getDetailAnime}></List>}
          {recommendedAnimes.length > 0 && <List label={'Recommended Anime'} data={recommendedAnimes} onClick={getDetailAnime}></List>}
          {mostPopularAnimes.length > 0 && <List label={'Most Popular Anime'} data={mostPopularAnimes} onClick={getDetailAnime}></List>}
        </article>
      )}
    </Container>
  );
};

export default Details;
