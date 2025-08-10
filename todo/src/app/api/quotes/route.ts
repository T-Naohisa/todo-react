import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import quote from '../../../data/quote.json';

export const GET: (request: NextRequest) => Response | Promise<Response> = () => {
  return NextResponse.json(quote);
};

/**
 * 公式推奨の書き方
 * export async function GET(request: NextRequest){
 *  return NextResponse.json(quote);
 * }
 */
