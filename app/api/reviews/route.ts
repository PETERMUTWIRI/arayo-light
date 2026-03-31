import { NextResponse } from 'next/server';
import { getApprovedReviews } from '@/lib/reviews';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const limit = searchParams.get('limit');
  
  try {
    const reviews = await getApprovedReviews(limit ? parseInt(limit, 10) : undefined);
    return NextResponse.json(reviews);
  } catch (error) {
    console.error('Failed to fetch reviews:', error);
    return NextResponse.json([], { status: 500 });
  }
}
