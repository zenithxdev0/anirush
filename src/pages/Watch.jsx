import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import { fetchEpisodes } from '../features/watchSlice';
import VideoPlayer from '../components/VideoPlayer';
import watchService from '../services/watchService';

const Watch = () => {

  const [videoData, setVideoData] = useState(null);

  const [serverInfo, setServerInfo] = useState(null);
  const dispatch = useDispatch();
  const { episodeId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [server, setServer] = useState(null);
  const [category, setCategory] = useState(null);
  
  // Extract the animeId without any query parameters
  const animeId = episodeId.split('?')[0];
  
  const queryParams = new URLSearchParams(location.search);
  const ep = queryParams.get("ep");

  const getWatch = (episodeId) => {
    navigate(`/watch/${episodeId}`);
  };

  const handleSwitch = (serverName, category) => {
    setServer(serverName);
    setCategory(category);
  }

  const fetchServers = async (episodeId) => {
    try {
      const data = await watchService.getServers(episodeId);
      console.log(data)
      setServerInfo(data);
    } catch (error) {
      console.log(error);
    }
  };


  const fetchVideoSources = async (episodeId, server, category) => {
    try {
      const data = await watchService.getVideoSources(episodeId, server, category);
      setVideoData(data);

      console.log(`${data.sources[0].url}`)
    } catch (error) {
      console.log(error);
    }
  }

  const { episodes, totalEpisodes, loading, error } = useSelector((state) => state.episode);

  // useEffects
  useEffect(() => {
    if (episodeId) {
      dispatch(fetchEpisodes(animeId)); 
    }
  }, [animeId, dispatch]);

  useEffect(() => {
    if (ep) {
      console.log("Current episode:", ep);
      fetchServers(`${animeId}?ep=${ep}`);
    }
  }, [ep]);

useEffect(() => {
  if (!serverInfo) return;

  const hasSub = serverInfo.sub?.length > 0;
  const hasDub = serverInfo.dub?.length > 0;

  if (hasSub) {
    setCategory('sub');
    setServer(serverInfo.sub[0].serverName);
  } else if (!hasSub && hasDub) {
    setCategory('dub');
    setServer(serverInfo.dub[0].serverName);
  }
}, [serverInfo]);

useEffect(() => {
  if (!server || !category) return;
  fetchVideoSources(`${animeId}?ep=${ep}`, server, category);
}, [server, category]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!episodes || episodes.length === 0) {
    return <div>No episodes found.</div>;
  }

  return (
    <div className='text-white'>
      <p className='text-white font-bold text-3xl'>Episodes</p>
      <ul className='flex flex-col m-4 gap-2'>
        {episodes.map((episode) => (
          <li 
            onClick={() => getWatch(episode.episodeId)} 
            className='text-white p-4 bg-neutral-700 hover:bg-neutral-800 cursor-pointer' 
            key={episode.id}
          >
            {episode.number}. {episode.title || 'Untitled'}
            <p className='font-bold'>{episode.episodeId}</p>
          </li>
        ))}
      </ul>

      <div className='space-y-2'>
        <p>Sub</p>
        <ul className='flex gap-2'>
          {serverInfo?.sub?.length > 0 && serverInfo.sub.map((sub, idx) => (
<li
  onClick={() => handleSwitch(sub.serverName, 'sub')}
  key={idx}
  className={`p-4 font-semibold cursor-pointer ${
    server === sub.serverName && category === 'sub'
      ? 'bg-blue-600'
      : 'bg-neutral-700 hover:bg-neutral-800'
  }`}
>
  {sub.serverName}
</li>
          ))}
        </ul>

        <p>Dub</p>
        <ul className='flex gap-2'>
          {serverInfo?.dub?.length > 0 && serverInfo.dub.map((dub, idx) => (
            <li onClick={() => handleSwitch(dub.serverName, 'dub')} key={idx} className='p-4 font-semibold bg-neutral-700'>
              {dub.serverName}
            </li>
          ))}
        </ul>

  {videoData?.sources?.length > 0 ? (
  <video
    key={`${server}-${category}`} // Force re-render on server/category change
    controls
    autoPlay
    crossOrigin="anonymous"
    className="w-full max-w-4xl rounded-lg"
  >
    <source src={`https://gogoanime-and-hianime-proxy.vercel.app/m3u8-proxy?url=${videoData.sources[0].url}`} type="application/x-mpegURL" />

    {/* {videoData.tracks?.map((track, index) => (
      track.kind === "captions" && (
        <track
          key={index}
          src={track.file}
          label={track.label}
          kind={track.kind}
          srcLang={track.label.split(" ")[0].toLowerCase()} // Extract language code if needed
          default={track.default || false}
        />
      )
    ))} */}
  </video>
) : (
  <p className="text-red-500">No stream available.</p>
)}

          
      </div>
      
    </div>
  );
}

export default Watch