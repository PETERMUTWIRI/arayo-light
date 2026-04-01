'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Star, Users, Quote } from 'lucide-react';
import StarRating from '@/components/StarRating';
import FadeIn, { StaggerContainer, StaggerItem } from '@/components/FadeIn';
import { SectionBadge } from '@/components/SectionBackground';

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
    comment: 'ArayoLight has been a blessing for our family. The caregiver is compassionate, reliable, and truly cares about my mother\'s well-being. We couldn\'t ask for better care.',
    title: 'Daughter of Client',
  },
  {
    id: 'fallback-2',
    name: 'Michael Chen',
    imageUrl: '/images/testimonial-2.jpeg',
    overallExperience: 5,
    comment: 'The peace of mind ArayoLight provides is priceless. Knowing my father is in good hands allows me to focus on my work without worry. Highly recommend!',
    title: 'Son of Client',
  },
  {
    id: 'fallback-3',
    name: 'Emily Rodriguez',
    imageUrl: '/images/testimonial-3.jpeg',
    overallExperience: 5,
    comment: 'Professional, caring, and responsive. ArayoLight exceeded our expectations in every way. Their attention to detail and genuine compassion made all the difference.',
    title: 'Daughter of Client',
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
    <section className="section-padding bg-gradient-lift relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-care-red/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-care-blue/5 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />
      
      <div className="container-care mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <FadeIn>
            <SectionBadge 
              icon={<Star className="w-4 h-4" />}
              variant="red"
              className="mb-6"
            >
              Testimonials
            </SectionBadge>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-care-navy mb-5 tracking-tight">
              What Families Say About ArayoLight
            </h2>
            <p className="text-care-gray-600 text-lg">
              Real stories from families who trust us with their loved ones
            </p>
          </FadeIn>
        </div>

        {loading ? (
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="card-care p-8 h-full animate-pulse">
                <div className="h-4 bg-care-gray-100 rounded w-1/3 mb-6" />
                <div className="h-24 bg-care-gray-100 rounded mb-8" />
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-care-gray-100" />
                  <div className="space-y-2">
                    <div className="h-4 bg-care-gray-100 rounded w-28" />
                    <div className="h-3 bg-care-gray-100 rounded w-20" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.12}>
            {displayReviews.map((review, index) => (
              <StaggerItem key={review.id}>
                <div 
                  className={`
                    group relative 
                    bg-white 
                    rounded-3xl 
                    p-8 
                    h-full
                    border border-care-gray-100
                    transition-all duration-500 ease-smooth
                    hover:shadow-elevated-hover hover:-translate-y-2
                    ${index === 1 ? 'lg:-mt-4 lg:mb-4' : ''}
                  `}
                >
                  {/* Quote Icon */}
                  <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Quote className="w-12 h-12 text-care-red" />
                  </div>

                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-5">
                    <StarRating rating={review.overallExperience} size="md" />
                  </div>

                  {/* Review Text */}
                  <p className="text-care-gray-600 leading-relaxed mb-8 text-base">
                    &ldquo;{'comment' in review && review.comment ? review.comment : 'Verified client review'}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-6 border-t border-care-gray-100">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden bg-care-gray-100 ring-2 ring-white shadow-md group-hover:ring-care-red/20 transition-all">
                      {review.imageUrl ? (
                        <Image
                          src={review.imageUrl}
                          alt={review.name}
                          fill
                          className="object-cover object-top"
                        />
                      ) : (
                        <Users className="w-6 h-6 text-care-gray-400 absolute inset-0 m-auto" />
                      )}
                    </div>
                    <div>
                      <p className="font-heading text-care-navy text-base">{review.name}</p>
                      <p className="text-care-gray-500 text-sm">{'title' in review ? review.title : 'Verified Client'}</p>
                    </div>
                  </div>

                  {/* Decorative gradient line */}
                  <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-care-red/0 via-care-red/30 to-care-red/0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        )}
      </div>
    </section>
  );
}
