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
  {tracks.map((track, index) =>
    track.kind === 'captions' ? (
      <track
        key={index}
        label={track.label}
        kind={track.kind}
        src={track.file}
        default={track.default || false}
      />
    ) : null
  )}
</video>
  );
};

export default HlsPlayer;
