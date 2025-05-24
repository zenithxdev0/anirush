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

const Home = () => {
  const dispatch = useDispatch(); //dispatch execute the reducers
  const navigate = useNavigate();

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

  if(isLoading) {
    return <Loading />
  }

  return (
    <Container>
    <NavBar />
    <main className="">
      <Hero data={spotlightAnimes} day={top10Today} week={top10Week} month={top10Month} getDetailAnime={getDetailAnime}/>
      <Trending error={error} isLoading={isLoading} data={trendingAnimes} getDetailAnime={getDetailAnime}/>
      <TopLists 
        error={error} 
        isLoading={isLoading}
        topAiringAnimes={topAiringAnimes}
        mostPopularAnimes={mostPopularAnimes}
        mostFavoriteAnimes={mostFavoriteAnimes}
        latestCompletedAnimes={latestCompletedAnimes}
        getDetailAnime={getDetailAnime}/>
      <List label={'Latest Episode'} data={latestEpisodeAnimes} onClick={getDetailAnime}/>
      <List label={'Top Upcoming Animes'} data={topUpcomingAnimes} onClick={getDetailAnime}/>

    </main>
    </Container>
  );
};

export default Home;
