'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Star, Users } from 'lucide-react';
import StarRating from '@/components/StarRating';
import FadeIn, { StaggerContainer, StaggerItem } from '@/components/FadeIn';

interface Review {
  id: string;
  name: string;
  imageUrl: string | null;
  overallExperience: number;
  comment: string | null;
  wouldRecommend: boolean;
  createdAt: string;
}

const fallbackReviews = [
  {
    id: 'fallback-1',
    name: 'Sarah Johnson',
    imageUrl: '/images/testimonial-1.jpeg',
    overallExperience: 5,
    comment: 'ArayoLight has been a blessing for our family. The caregiver is compassionate, reliable, and truly cares about my mother\'s well-being.',
    title: 'HR Director, Meridian Health',
  },
  {
    id: 'fallback-2',
    name: 'Michael Chen',
    imageUrl: '/images/testimonial-2.jpeg',
    overallExperience: 5,
    comment: 'The peace of mind ArayoLight provides is priceless. Knowing my father is in good hands allows me to focus on my work without worry.',
    title: 'Managing Partner, Chen & Associates',
  },
  {
    id: 'fallback-3',
    name: 'Emily Rodriguez',
    imageUrl: '/images/testimonial-3.jpeg',
    overallExperience: 5,
    comment: 'Professional, caring, and responsive. ArayoLight exceeded our expectations in every way. Highly recommend their services!',
    title: 'VP Operations, Apex Solutions',
  },
];

export default function TestimonialsSection() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/reviews?limit=6')
      .then((res) => res.json())
      .then((data: Review[]) => {
        setReviews(data);
        setLoading(false);
      })
      .catch(() => {
        setReviews([]);
        setLoading(false);
      });
  }, []);

  const displayReviews = reviews.length > 0
    ? reviews.slice(0, 3).map((r) => ({ ...r, title: 'Verified Client' }))
    : fallbackReviews;

  return (
    <section className="section-padding bg-white">
      <div className="container-care mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-care-red/8 text-care-red text-sm font-semibold mb-4 border border-care-red/10">
              <Star className="w-4 h-4" />
              <span>Testimonials</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-care-navy mb-4">
              What Families Say About ArayoLight
            </h2>
          </FadeIn>
        </div>

        {loading ? (
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="card-care p-7 h-full animate-pulse">
                <div className="h-4 bg-care-gray-100 rounded w-1/3 mb-5" />
                <div className="h-20 bg-care-gray-100 rounded mb-6" />
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-care-gray-100" />
                  <div className="space-y-2">
                    <div className="h-3 bg-care-gray-100 rounded w-24" />
                    <div className="h-2 bg-care-gray-100 rounded w-16" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.1}>
            {displayReviews.map((review) => (
              <StaggerItem key={review.id}>
                <div className="card-care p-7 h-full">
                  <div className="flex items-center gap-1 mb-5">
                    <StarRating rating={review.overallExperience} size="sm" />
                  </div>
                  <p className="text-care-gray-500 leading-relaxed mb-6">
                    &ldquo;{'comment' in review && review.comment ? review.comment : 'Verified client review'}&rdquo;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden bg-care-gray-100 flex items-center justify-center">
                      {review.imageUrl ? (
                        <Image
                          src={review.imageUrl}
                          alt={review.name}
                          fill
                          className="object-cover object-top"
                        />
                      ) : (
                        <Users className="w-5 h-5 text-care-gray-400" />
                      )}
                    </div>
                    <div>
                      <p className="font-heading text-care-navy text-sm">{review.name}</p>
                      <p className="text-care-gray-400 text-xs">{'title' in review ? review.title : 'Verified Client'}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        )}
      </div>
    </section>
  );
}
