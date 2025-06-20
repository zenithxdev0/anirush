import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';

const HlsPlayer = ({ src, key, tracks, videoSize }) => {

  const videoRef = useRef();

  useEffect(() => {
    let hls;

    if (Hls.isSupported() && src) {
      hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(videoRef.current);
      hls.on(Hls.Events.ERROR, (event, data) => {
        console.error('HLS error:', data);
      });
    } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
      videoRef.current.src = src;
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, [src]);

  return (
<video
  key={key}
  ref={videoRef}
  controls
  autoPlay
  className={`${videoSize} aspect-video`}
  crossOrigin="anonymous"
>
  {tracks.length > 0 && tracks.map((track, index) =>
      <track
        key={index}
        label={track.lang}
        kind={track.kind}
        src={track.url}
        default={track.default || false}
      />
  )}
</video>
  );
};

export default HlsPlayer;
