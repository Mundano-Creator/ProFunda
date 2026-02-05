import React from 'react';

export default function BackgroundVideo({ videoId }) {
  const src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&loop=1&playlist=${videoId}`;
  return (
    <>
      <div className="video-bg" aria-hidden="true">
        <iframe
          src={src}
          allowFullScreen   
          title="background"
          allow="autoplay; encrypted-media"
        />
      </div>
      <div className="video-overlay" />
    </>
  );
}
