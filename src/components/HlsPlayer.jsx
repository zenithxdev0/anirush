import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';

const HlsPlayer = ({ src, key }) => {
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
      key={key} // important for forcing re-render
      ref={videoRef}
      controls
      autoPlay
      className="h-auto"
      crossOrigin="anonymous"
      
    />
  );
};

export default HlsPlayer;
