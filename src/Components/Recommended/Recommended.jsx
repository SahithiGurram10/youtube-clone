import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Recommended.css';
import { API_KEY, value_converter } from '../../data'; // make sure this exports value_converter

const Recommended = ({ categoryId = 0 }) => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);
      const url =
        `https://youtube.googleapis.com/youtube/v3/videos` +
        `?part=snippet,contentDetails,statistics` +
        `&chart=mostPopular&maxResults=25&regionCode=US` +
        `&videoCategoryId=${categoryId}&key=${API_KEY}`;

      const res = await fetch(url);
      const json = await res.json();
      setApiData(json.items || []);
    } catch (err) {
      console.error('Recommended fetch error:', err);
      setApiData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [categoryId]);

  if (loading && apiData.length === 0) {
    return <div className="recommended">Loading…</div>;
  }

  return (
    <div className="recommended">
      {apiData.map((item) => {
        const vid = item.id;
        const thumb = item.snippet?.thumbnails?.medium?.url;
        const title = item.snippet?.title || 'Untitled';
        const channel = item.snippet?.channelTitle || 'Unknown Channel';
        const views = value_converter
          ? value_converter(item.statistics?.viewCount)
          : item.statistics?.viewCount?.toString() || '0';

        return (
          <Link
            key={vid}
            to={`/video/${categoryId}/${vid}`}
            className="side-video-list"
          >
            {thumb ? (
              <img src={thumb} alt={title} />
            ) : (
              <div className="thumb-placeholder" />
            )}
            <div className="vid-info">
              <h4>{title}</h4>
              <p>{channel}</p>
              <p>{views} Views</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Recommended;
