
import React from 'react';

interface VideoEmbedProps {
  videoId?: string;
  title?: string;
}

const VideoEmbed = ({ videoId = "Yh12Udz8lwc", title = "$458k In New Pipeline" }: VideoEmbedProps) => {
  return (
    <div className="w-full max-w-3xl mx-auto my-8 rounded-xl overflow-hidden shadow-xl">
      <div className="relative pb-[56.25%] h-0">
        <iframe
          src={`https://www.youtube.com/embed/Yh12Udz8lwc`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
        />
      </div>
    </div>
  );
};

export default VideoEmbed;
