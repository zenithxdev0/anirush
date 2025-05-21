import React, { useEffect } from 'react'
import NavBar from '../components/NavBar';

import { useDispatch, useSelector } from "react-redux";
import { fetchDetail } from "../features/detailSlice";
import { useNavigate, useParams } from "react-router-dom";
import HeroDetails from '../components/HeroDetails';
import { fetchEpisodes } from '../features/watchSlice';


import Button from '../util/Button';


const Details = () => {

  const { animeId } = useParams();
  const dispatch = useDispatch(); 
  const navigate = useNavigate();

  const { info, moreInfo } = useSelector((state) => state.detail);
  const { episodes } = useSelector((state) => state.episode);
  

  const getWatch = (animeId) => {
    navigate(`/watch/${episodes[0].episodeId}`);
  }

  useEffect(() => {
    if (animeId) {
      dispatch(fetchDetail(animeId));
      dispatch(fetchEpisodes(animeId));
    }
  }, [animeId, dispatch]);

  return (
    <>
    <NavBar />
    <article className='bg-zinc-900'>
        <HeroDetails info={info} moreInfo={moreInfo} getWatch={getWatch}/>
      
    </article>
    </>
  )
}

export default Details