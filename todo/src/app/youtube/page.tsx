'use client';
import React, { useState, useEffect } from 'react';

type VideoItem = {
  id: string;
  title: string;
  thumbnail: string;
  url: string;
};

export const Youtubepage = () => {
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetachVideos = async () => {
      try {
        const playlistId = 'test';
        const res = await fetch(`/api/youtube?playlistId=${playlistId}`);
        const data = await res.json();

        console.log('data:' + JSON.stringify(data));
        const items = data.items.map((item: any) => ({
          id: item.id,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.medium.url,
          url: `https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`,
        }));

        setVideos(items);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetachVideos();
  }, []);

  if (loading) return <p>Loadling...</p>;

  return (
    <>
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {videos.map((video) => (
          <div key={video.id} className="border rounded-lg p-2 shadow">
            <img src={video.thumbnail} alt={video.title} className="rouded" />
            <h2 className="font-semibold text-sm mt-2">{video.title}</h2>
            <a href={video.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm">
              Watch on Youtube
            </a>
          </div>
        ))}
      </div>
    </>
  );
};
export default Youtubepage;
