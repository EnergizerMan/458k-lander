
import React from 'react';

interface VideoEmbedProps {
  videoId?: string;
  title?: string;
  description?: string;
  ctaText?: string;
  onCTAClick?: () => void;
}

const VideoEmbed = ({ 
  videoId = "Yh12Udz8lwc", 
  title = "$458k In New Pipeline", 
  description,
  ctaText,
  onCTAClick
}: VideoEmbedProps) => {
  return (
    <div className="w-full max-w-3xl mx-auto my-8 rounded-xl overflow-hidden shadow-xl">
      <div className="relative pb-[56.25%] h-0">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
        />
      </div>
      {(description || ctaText) && (
        <div className="bg-gray-50 p-4 border-t">
          {description && <p className="text-gray-700 mb-3">{description}</p>}
          {ctaText && onCTAClick && (
            <button 
              onClick={onCTAClick}
              className="text-navy font-medium hover:underline"
            >
              {ctaText} →
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default VideoEmbed;
