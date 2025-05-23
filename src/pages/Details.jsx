import React, { useEffect } from 'react'
import NavBar from '../components/NavBar';

import { useDispatch, useSelector } from "react-redux";
import { fetchDetail } from "../features/detailSlice";
import { useNavigate, useParams } from "react-router-dom";
import HeroDetails from '../components/HeroDetails';
import { fetchEpisodes } from '../features/watchSlice';
import Loading from '../util/Loading'
import Button from '../util/Button';

const Details = () => {

  const { animeId } = useParams();
  const dispatch = useDispatch(); 
  const navigate = useNavigate();

  const { loading, info, moreInfo } = useSelector((state) => state.detail);
  const { episodes } = useSelector((state) => state.episode);
  
  const getWatch = () => {
    navigate(`/watch/${episodes[0].episodeId}`);
  }

  useEffect(() => {
    if (animeId) {
      dispatch(fetchDetail(animeId));
      dispatch(fetchEpisodes(animeId));
    }
  }, [animeId, dispatch]);

  if(loading) {
    return <Loading/>
  }

  return (
    <>
    <NavBar />
    {info &&     <article className='bg-zinc-900 p-2'>
        <HeroDetails info={info} moreInfo={moreInfo} getWatch={getWatch}/>
        <div>
          <h1 className='text-white text-4xl font-bold'>Seasons</h1>
          <div></div>
        </div>
    </article>}

    </>
  )
}

export default Details