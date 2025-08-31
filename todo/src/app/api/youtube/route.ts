import { NextResponse } from 'next/server';

interface YoutubeResponse {
  items: {
    snippet: {
      title: string;
      description: string;
      thumbnails: {
        default: { url: string };
        medium: { url: string };
        high: { url: string };
      };
    };
  }[];
}
export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const playlistId = searchParams.get('playlistId');

  if (!playlistId) {
    return NextResponse.json({ error: 'playlistId is required' }, { status: 400 });
  }

  const API_KEY = process.env.YOUTUBE_API_KEY;
  const YOUTUBE_API_URL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=${playlistId}&key=${API_KEY}`;

  try {
    const response = await fetch(YOUTUBE_API_URL);
    const data: YoutubeResponse = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: 'Failed to fetch Youtube data' }, { status: 500 });
  }
};
