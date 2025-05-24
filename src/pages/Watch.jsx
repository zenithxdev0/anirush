import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchEpisodes,
  fetchServer,
  fetchSource,
} from "../features/watchSlice";

import watchService from "../services/watchService";
import HlsPlayer from "../components/HlsPlayer";
import Container from "../util/Container";
import NavBar from "../components/NavBar";
import Loading from "../util/Loading";

const Watch = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const streamProxy =
    "https://gogoanime-and-hianime-proxy-puce-seven.vercel.app/m3u8-proxy?url="; //https://eb.netmagcdn.com:2228/hls-playback/61104e0fbf60f7c0bec92309d55517cdaacaf8be60878a81e5d07e832c765f456d52b7c134bdf4481a54d2e77642d2da3c6d95300f1d03a920d6619897aa06fb1043eab001276ebfcabda3b563f913afe8224641b4605575ddcbc91c0f1da77495bc254d94bd846ae69e1aed5a2383edd74da19492310fab7dc318a5a927a45f84baf9df9aa883db08e498a3bbfcd248/master.m3u8

  const { serverInfo } = useSelector((state) => state.server);
  const {
    source,
    track,
    loading: sourceLoading,
    error: sourceError,
  } = useSelector((state) => state.source);

  const { episodeId } = useParams();
  const location = useLocation();

  const [server, setServer] = useState(null);
  const [category, setCategory] = useState(null);

  const animeId = episodeId.split("?")[0]; // Extract the animeId without any query parameters

  const queryParams = new URLSearchParams(location.search);
  const ep = queryParams.get("ep");

  const getWatch = (episodeId) => {
    navigate(`/watch/${episodeId}`);
    window.location.reload(); //refresh the page when changing episodes
  };

  const handleSwitch = (serverName, category) => {
    setServer(serverName);
    setCategory(category);
  };

  const { episodes, totalEpisodes, loading, error } = useSelector(
    (state) => state.episode
  );

  // useEffects
  useEffect(() => {
    if (episodeId) {
      dispatch(fetchEpisodes(animeId));
    }
  }, [animeId, dispatch]);

  useEffect(() => {
    if (ep) {
      // fetchServers(`${animeId}?ep=${ep}`);
      dispatch(fetchServer(`${animeId}?ep=${ep}`));
    }
  }, [ep]);

  useEffect(() => {
    if (!serverInfo) return;

    const hasSub = Array.isArray(serverInfo.sub) && serverInfo.sub.length > 0;
    const hasDub = Array.isArray(serverInfo.dub) && serverInfo.dub.length > 0;

    if (hasSub) {
      setCategory("sub");

      const fallbackSub =
        serverInfo.sub[2]?.serverName ||
        serverInfo.sub[1]?.serverName ||
        serverInfo.sub[0]?.serverName;

      if (fallbackSub) setServer(fallbackSub);
    } else if (hasDub) {
      setCategory("dub");
      setServer(serverInfo.dub[0]?.serverName);
    }
  }, [serverInfo]);

  useEffect(() => {
    if (!server || !category) return;
    const epsId = `${animeId}?ep=${ep}`;

    dispatch(
      fetchSource({
        episodeId: epsId,
        server: server,
        category: category,
      })
    );
  }, [animeId, ep, server, category]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!episodes || episodes.length === 0) {
    return <div>No episodes found.</div>;
  }

  // const sampleUrl = `https://ed.netmagcdn.com:2228/hls-playback/d8e56d406f04d29b74b4e03042fca324d71f0cd196c65f1fcb9c6d27377df7bd17b6ce13536ee8f21bbfe92902b58f635418d122f1cafb9ae0c0d764487716f0e63a4bd7408c5ea4514f3241450918d5ff9be6b1199f09edad870678e418383b633285ce874d6dea8012a9fba9e9ac39cf3e46b931039fc69fa7dcea183ddbb51d809dd3df1ea6613cc3b93a9e9fd164/master.m3u8`;

  return (
    <Container>
      <NavBar />
      <div className="flex gap-4 h-96">
        <div className="w-full max-w-64 bg-neutral-800 p-2 rounded-md overflow-hidden">
          <p className="text-white font-semibold text-xl mb-4">Episode List</p>
          <ul className="block space-y-2 overflow-y-auto h-full custom-scrollbar">
            {episodes.map((episode) => (
              <li
                onClick={() => getWatch(episode.episodeId)}
                className="text-white p-2 bg-neutral-700 hover:bg-neutral-800 cursor-pointer text-xs font-semibold rounded-md text-nowrap truncate"
                key={episode.id}
              >
                {episode.number}. {episode.title || "Untitled"}
              </li>
            ))}
          </ul>
        </div>

        {sourceLoading ? (
          <Loading />
        ) : sourceError ? (
          <p>error video</p>
        ) : (
          <>
            <div className="flex flex-col h-full">
              {source?.length > 0 && track.length > 0 ? (
                <>
                  <div className="w-96">
                    <HlsPlayer
                      src={`${streamProxy}${source[0].url}`}
                      tracks={track}
                      key={"1"}
                    />
                  </div>

                  <div className="space-y-2 bg-neutral-800 p-4">
                    {serverInfo?.sub?.length > 0 && (
                      <div className="flex items-center gap-4">
                        <p>Sub</p>
                        <ul className="flex gap-2">
                          {serverInfo.sub.map((sub, idx) => (
                            <li
                              key={idx}
                              onClick={() =>
                                handleSwitch(sub.serverName, "sub")
                              }
                              className={`p-2 font-semibold text-xs rounded-md cursor-pointer ${
                                server === sub.serverName && category === "sub"
                                  ? "bg-blue-600"
                                  : "bg-neutral-700 hover:bg-neutral-800"
                              }`}
                            >
                              {sub.serverName}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {serverInfo?.dub?.length > 0 && (
                      <div className="flex gap-4 items-center">
                        <p>Dub</p>
                        <ul className="flex gap-2">
                          {serverInfo.dub.map((dub, idx) => (
                            <li
                              onClick={() =>
                                handleSwitch(dub.serverName, "dub")
                              }
                              key={idx}
                              className="p-2 text-xs rounded-md font-semibold bg-neutral-700"
                            >
                              {dub.serverName}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <p className="text-red-500">No stream available.</p>
              )}
            </div>
          </>
        )}

        <div className="w-96 bg-neutral-600 p-4 rounded-md">
          another content here
        </div>
      </div>
    </Container>
  );
};

export default Watch;
