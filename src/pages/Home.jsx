import React, { useEffect, useState } from "react";

import Trending from "../components/Trending";
import TopLists from "../components/TopLists";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";

import { useDispatch, useSelector } from "react-redux";
import { clearHome } from "../features/homeSlice";
import { fetchHome } from "../features/homeSlice";
import { fetchDetail } from "../features/detailSlice";
import { useNavigate } from "react-router-dom";
import Loading from "../util/Loading";

import Container from "../util/Container";
import List from "../util/List";
import Aside from "../components/Aside";
import Footer from "../components/Footer";

const Home = () => {
  const dispatch = useDispatch(); //dispatch execute the reducers
  const navigate = useNavigate();
  const gridLayout =
    "grid lg:grid-cols-6 md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-2";

  const {
    spotlightAnimes,
    trendingAnimes,

    topAiringAnimes,
    mostPopularAnimes,
    mostFavoriteAnimes,
    latestCompletedAnimes,
    top10Today,
    top10Week,
    top10Month,

    latestEpisodeAnimes,
    topUpcomingAnimes,

    loading: isLoading,
    error,
  } = useSelector((state) => state.home);

  const getDetailAnime = (animeId) => {
    navigate(`/anime/${animeId}`);
  };

  useEffect(() => {
    dispatch(fetchHome());
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Container>
        <NavBar />

        <div className="flex gap-4 items-start">
          <main className="home-main-content">
            <Hero data={spotlightAnimes} getDetailAnime={getDetailAnime} />

            <TopLists
              error={error}
              isLoading={isLoading}
              topAiringAnimes={topAiringAnimes}
              mostPopularAnimes={mostPopularAnimes}
              mostFavoriteAnimes={mostFavoriteAnimes}
              latestCompletedAnimes={latestCompletedAnimes}
              getDetailAnime={getDetailAnime}
            />
            <List
              label={"Latest Episode"}
              data={latestEpisodeAnimes}
              onClick={getDetailAnime}
              gridLayout={gridLayout}
            />
            <List
              label={"Top Upcoming Animes"}
              data={topUpcomingAnimes}
              onClick={getDetailAnime}
              gridLayout={gridLayout}
            />
          </main>

          <aside className="w-full max-w-80 space-y-2 lg:block hidden">
            <Aside
              className={`bg-zinc-800 p-4 rounded-lg block `}
              top10Today={top10Today}
              top10Week={top10Week}
              top10Month={top10Month}
            />
            <Trending
              className={`bg-zinc-800 p-4 rounded-lg block`}
              error={error}
              isLoading={isLoading}
              data={trendingAnimes}
              getDetailAnime={getDetailAnime}
            />
          </aside>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
