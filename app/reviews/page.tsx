import Image from 'next/image';
import { Star, MessageSquare, ThumbsUp, Users } from 'lucide-react';
import { getApprovedReviews, getReviewStats } from '@/lib/reviews';
import ReviewForm from '@/components/ReviewForm';
import StarRating from '@/components/StarRating';
import FadeIn, { StaggerContainer, StaggerItem } from '@/components/FadeIn';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Client Reviews',
  description: 'Read genuine reviews from families who trust ArayoLight Homecare. Share your own experience and help others find quality care.',
};

function ReviewCard({ review }: { review: Awaited<ReturnType<typeof getApprovedReviews>>[number] }) {
  return (
    <div className="card-care p-6 md:p-7 h-full flex flex-col">
      <div className="flex items-center gap-1 mb-4">
        <StarRating rating={review.overallExperience} size="sm" />
      </div>
      {review.comment ? (
        <p className="text-care-gray-500 leading-relaxed mb-6 flex-grow">
          &ldquo;{review.comment}&rdquo;
        </p>
      ) : (
        <p className="text-care-gray-400 italic mb-6 flex-grow">
          Verified client review
        </p>
      )}
      <div className="flex items-center gap-4 pt-4 border-t border-care-gray-100">
        <div className="relative w-12 h-12 rounded-full overflow-hidden bg-care-gray-100 flex items-center justify-center">
          {review.imageUrl ? (
            <Image
              src={review.imageUrl}
              alt={review.name}
              fill
              className="object-cover"
            />
          ) : (
            <Users className="w-5 h-5 text-care-gray-400" />
          )}
        </div>
        <div>
          <p className="font-heading text-care-navy text-sm">{review.name}</p>
          <p className="text-care-gray-400 text-xs">Verified Client</p>
        </div>
        {review.wouldRecommend && (
          <div className="ml-auto flex items-center gap-1 text-green-600 text-xs font-medium bg-green-50 px-2 py-1 rounded-full">
            <ThumbsUp className="w-3 h-3" />
            Recommends
          </div>
        )}
      </div>
    </div>
  );
}

function StatCard({
  icon: Icon,
  value,
  label,
  delay = 0,
}: {
  icon: React.ElementType;
  value: string;
  label: string;
  delay?: number;
}) {
  return (
    <FadeIn delay={delay}>
      <div className="card-care p-6 text-center">
        <div className="w-12 h-12 rounded-xl bg-care-red/8 flex items-center justify-center mx-auto mb-4 border border-care-red/10">
          <Icon className="w-6 h-6 text-care-red" />
        </div>
        <p className="font-heading text-3xl md:text-4xl text-care-navy mb-1">{value}</p>
        <p className="text-care-gray-500 text-sm">{label}</p>
      </div>
    </FadeIn>
  );
}

export default async function ReviewsPage() {
  const [reviews, stats] = await Promise.all([
    getApprovedReviews(),
    getReviewStats(),
  ]);

  const hasReviews = reviews.length > 0;

  return (
    <main className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="container-care mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-care-navy mb-6 leading-[1.1]">
                What Families Say About <span className="text-care-red">ArayoLight</span>
              </h1>
              <p className="text-care-gray-500 text-lg md:text-xl leading-relaxed">
                Genuine feedback from families who have experienced our compassionate care. 
                Your trust is our greatest achievement.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="pb-16 md:pb-24">
        <div className="container-care mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <StatCard
              icon={Star}
              value={stats.averageRating > 0 ? stats.averageRating.toFixed(1) : '5.0'}
              label="Average Rating"
              delay={0}
            />
            <StatCard
              icon={MessageSquare}
              value={String(stats.totalReviews)}
              label={stats.totalReviews === 1 ? 'Review' : 'Reviews'}
              delay={0.1}
            />
            <StatCard
              icon={ThumbsUp}
              value={`${stats.recommendPercentage}%`}
              label="Would Recommend"
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="pb-16 md:pb-24">
        <div className="container-care mx-auto px-4 sm:px-6 lg:px-8">
          {hasReviews ? (
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" staggerDelay={0.08}>
              {reviews.map((review) => (
                <StaggerItem key={review.id}>
                  <ReviewCard review={review} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          ) : (
            <FadeIn>
              <div className="text-center max-w-xl mx-auto py-16">
                <div className="w-16 h-16 rounded-full bg-care-gray-100 flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-8 h-8 text-care-gray-400" />
                </div>
                <h3 className="font-heading text-xl text-care-navy mb-2">No Reviews Yet</h3>
                <p className="text-care-gray-500">
                  Be the first to share your experience with ArayoLight Homecare. Your feedback helps other families make informed decisions.
                </p>
              </div>
            </FadeIn>
          )}
        </div>
      </section>

      {/* Submit Review Section */}
      <section className="pb-16 md:pb-24">
        <div className="container-care mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <div className="text-center mb-10">
                <h2 className="font-heading text-3xl md:text-4xl text-care-navy mb-4">
                  Share Your <span className="text-care-red">Experience</span>
                </h2>
                <p className="text-care-gray-500 text-lg leading-relaxed max-w-2xl mx-auto">
                  Your feedback matters. By sharing your experience, you help other families discover 
                  the compassionate care that ArayoLight provides.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <ReviewForm />
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
}
