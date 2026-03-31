'use server';

import { prisma } from './prisma';

export type ReviewWithRating = {
  id: string;
  name: string;
  imageUrl: string | null;
  overallExperience: number;
  comment: string | null;
  wouldRecommend: boolean;
  createdAt: Date;
};

export async function getApprovedReviews(limit?: number): Promise<ReviewWithRating[]> {
  const reviews = await prisma.review.findMany({
    where: { approved: true },
    orderBy: { createdAt: 'desc' },
    take: limit,
    select: {
      id: true,
      name: true,
      imageUrl: true,
      overallExperience: true,
      comment: true,
      wouldRecommend: true,
      createdAt: true,
    },
  });
  return reviews;
}

export async function getReviewStats() {
  const [aggregates, recommendCount, totalCount] = await Promise.all([
    prisma.review.aggregate({
      where: { approved: true },
      _avg: { overallExperience: true },
      _count: { id: true },
    }),
    prisma.review.count({
      where: { approved: true, wouldRecommend: true },
    }),
    prisma.review.count({
      where: { approved: true },
    }),
  ]);

  return {
    averageRating: aggregates._avg.overallExperience ?? 0,
    totalReviews: totalCount,
    recommendPercentage: totalCount > 0 ? Math.round((recommendCount / totalCount) * 100) : 0,
  };
}

export async function createReview(formData: FormData) {
  const name = formData.get('name') as string;
  const imageUrl = (formData.get('imageUrl') as string) || null;
  const serviceQuality = parseInt(formData.get('serviceQuality') as string, 10);
  const websiteInfo = parseInt(formData.get('websiteInfo') as string, 10);
  const staffEfficiency = parseInt(formData.get('staffEfficiency') as string, 10);
  const responsiveness = parseInt(formData.get('responsiveness') as string, 10);
  const overallExperience = parseInt(formData.get('overallExperience') as string, 10);
  const wouldRecommend = formData.get('wouldRecommend') === 'true';
  const comment = (formData.get('comment') as string) || null;

  if (!name || Number.isNaN(serviceQuality)) {
    throw new Error('Invalid form data');
  }

  const review = await prisma.review.create({
    data: {
      name,
      imageUrl,
      serviceQuality,
      websiteInfo,
      staffEfficiency,
      responsiveness,
      overallExperience,
      wouldRecommend,
      comment,
      approved: true,
    },
  });

  return review;
}
