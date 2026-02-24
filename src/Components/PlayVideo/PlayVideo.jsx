import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './PlayVideo.css';
import { API_KEY, value_converter } from '../../data';

const PlayVideo = () => {
  const { videoId } = useParams();          //  gets ID from /video/:categoryId/:videoId
  const [video, setVideo] = useState(null); // API detail

  useEffect(() => {
    if (!videoId) return;
    const fetchVideo = async () => {
      try {
        const url =
          `https://youtube.googleapis.com/youtube/v3/videos` +
          `?part=snippet,contentDetails,statistics&id=${videoId}&key=${API_KEY}`;
        const res = await fetch(url);
        const json = await res.json();
        setVideo(json.items?.[0] || null);
      } catch (err) {
        console.error('Video fetch error:', err);
      }
    };
    fetchVideo();
  }, [videoId]);

  if (!videoId) return <div className="play-video">No video selected.</div>;

  return (
    <div className="play-video">
      <iframe
        width="100%"
        height="500"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title={video?.snippet?.title || 'YouTube video player'}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>

      {video && (
        <>
          <h3>{video.snippet?.title}</h3>
          <div className="play-video-info">
            <p>
              {value_converter(video.statistics?.viewCount)} Views &bull;{' '}
              {new Date(video.snippet?.publishedAt).toLocaleDateString()}
            </p>
            {/* likes/share actions here */}
          </div>
        </>
      )}
    </div>
  );
};

export default PlayVideo;
