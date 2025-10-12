import { NextResponse } from 'next/server';
import resData from '../../../data/youtube.json';
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

  if (String(process.env.YOUTUBE_REQUEST) === '0') {
    // 過度にリクエストを呼ばないため
    return NextResponse.json(resData);
  }

  if (!playlistId) {
    return NextResponse.json({ error: 'playlistId is required' }, { status: 400 });
  }

  try {
    const data: YoutubeResponse = await featchYoutubePlaylist(playlistId);
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: 'Failed to fetch Youtube data' }, { status: 500 });
  }
};

export const featchYoutubePlaylist = async (playlistId: string) => {
  const API_KEY = process.env.YOUTUBE_API_KEY;
  const YOUTUBE_API_URL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=${playlistId}&key=${API_KEY}`;

  const response = await fetch(YOUTUBE_API_URL);
  return response.json();
};
