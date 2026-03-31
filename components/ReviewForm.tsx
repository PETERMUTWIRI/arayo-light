'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { Star, Upload, CheckCircle, Loader2, User } from 'lucide-react';
import { createReview } from '@/lib/reviews';

const ratingQuestions = [
  { key: 'serviceQuality', label: 'Service quality' },
  { key: 'websiteInfo', label: 'Website information' },
  { key: 'staffEfficiency', label: 'Staff efficiency' },
  { key: 'responsiveness', label: 'Responsiveness' },
  { key: 'overallExperience', label: 'Overall experience' },
];

const ratingOptions = [
  { value: 5, label: 'Excellent' },
  { value: 4, label: 'Good' },
  { value: 3, label: 'Fair' },
  { value: 2, label: 'Poor' },
];

export default function ReviewForm() {
  const [formData, setFormData] = useState({
    name: '',
    serviceQuality: 5,
    websiteInfo: 5,
    staffEfficiency: 5,
    responsiveness: 5,
    overallExperience: 5,
    wouldRecommend: true,
    comment: '',
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleRatingChange = (key: string, value: number) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setError('Image must be less than 5MB');
        return;
      }
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
      setError(null);
    }
  };

  const uploadImage = async (file: File): Promise<string> => {
    const uploadFormData = new FormData();
    uploadFormData.append('file', file);

    const res = await fetch('/api/upload', {
      method: 'POST',
      body: uploadFormData,
    });

    const data = await res.json();
    if (!res.ok || !data.url) {
      throw new Error(data.error || 'Image upload failed');
    }
    return data.url;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      let imageUrl = '';
      if (imageFile) {
        imageUrl = await uploadImage(imageFile);
      }

      const submitFormData = new FormData();
      submitFormData.append('name', formData.name);
      submitFormData.append('serviceQuality', String(formData.serviceQuality));
      submitFormData.append('websiteInfo', String(formData.websiteInfo));
      submitFormData.append('staffEfficiency', String(formData.staffEfficiency));
      submitFormData.append('responsiveness', String(formData.responsiveness));
      submitFormData.append('overallExperience', String(formData.overallExperience));
      submitFormData.append('wouldRecommend', String(formData.wouldRecommend));
      submitFormData.append('comment', formData.comment);
      if (imageUrl) submitFormData.append('imageUrl', imageUrl);

      await createReview(submitFormData);
      setIsSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="card-care p-8 md:p-12 text-center">
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="font-heading text-2xl md:text-3xl text-care-navy mb-4">
          Thank You for Your Feedback!
        </h3>
        <p className="text-care-gray-500 mb-6 max-w-md mx-auto">
          Your review has been submitted successfully and is now live on our reviews page. Thank you for helping other families discover ArayoLight!
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              name: '',
              serviceQuality: 5,
              websiteInfo: 5,
              staffEfficiency: 5,
              responsiveness: 5,
              overallExperience: 5,
              wouldRecommend: true,
              comment: '',
            });
            setImageFile(null);
            setImagePreview(null);
          }}
          className="btn-outline"
        >
          Submit Another Review
        </button>
      </div>
    );
  }

  return (
    <div className="card-care p-6 md:p-8">
      {error && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 text-red-600 text-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Top Row: Name + Photo */}
        <div className="grid md:grid-cols-[1fr_auto] gap-6 items-start">
          {/* Name */}
          <div>
            <label htmlFor="name" className="form-label flex items-center gap-2">
              <User className="w-4 h-4 text-care-gray-400" />
              Your Name *
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
              placeholder="Enter your full name"
              className="form-input"
            />
          </div>

          {/* Photo Upload */}
          <div className="md:w-40">
            <label className="form-label flex items-center gap-2">
              <Upload className="w-4 h-4 text-care-gray-400" />
              Photo
            </label>
            <div
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-care-gray-300 rounded-xl p-3 text-center cursor-pointer hover:border-care-red hover:bg-care-red/5 transition-colors"
            >
              {imagePreview ? (
                <div className="flex flex-col items-center gap-2">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image src={imagePreview} alt="Preview" fill className="object-cover" />
                  </div>
                  <p className="text-xs text-care-gray-400">Change</p>
                </div>
              ) : (
                <>
                  <Upload className="w-6 h-6 text-care-gray-400 mx-auto mb-1" />
                  <p className="text-xs text-care-navy font-medium">Upload photo</p>
                </>
              )}
            </div>
            <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
          </div>
        </div>

        {/* Rating Questions Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {ratingQuestions.map((question) => (
            <div key={question.key} className="bg-care-gray-50 rounded-xl p-4">
              <p className="text-sm font-medium text-care-navy mb-3">{question.label}</p>
              <div className="flex flex-wrap gap-2">
                {ratingOptions.map((option) => {
                  const isSelected = formData[question.key as keyof typeof formData] === option.value;
                  return (
                    <label
                      key={option.value}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border cursor-pointer transition-all ${
                        isSelected
                          ? 'border-care-red bg-care-red/5 text-care-red'
                          : 'border-care-gray-200 bg-white hover:border-care-gray-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name={question.key}
                        value={option.value}
                        checked={isSelected}
                        onChange={() => handleRatingChange(question.key, option.value)}
                        className="sr-only"
                      />
                      <Star className={`w-3.5 h-3.5 ${isSelected ? 'fill-care-red text-care-red' : 'text-care-gray-300'}`} />
                      <span className="text-xs font-medium">{option.label}</span>
                    </label>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Row: Recommend + Comment */}
        <div className="grid md:grid-cols-[auto_1fr] gap-6">
          {/* Would Recommend */}
          <div className="bg-care-gray-50 rounded-xl p-4 md:w-56">
            <p className="text-sm font-medium text-care-navy mb-3">Recommend us?</p>
            <div className="flex gap-2">
              {[
                { value: true, label: 'Yes' },
                { value: false, label: 'No' },
              ].map((option) => {
                const isSelected = formData.wouldRecommend === option.value;
                return (
                  <label
                    key={String(option.value)}
                    className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border cursor-pointer transition-all ${
                      isSelected
                        ? 'border-care-red bg-care-red/5 text-care-red'
                        : 'border-care-gray-200 bg-white hover:border-care-gray-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="wouldRecommend"
                      value={String(option.value)}
                      checked={isSelected}
                      onChange={() => setFormData((prev) => ({ ...prev, wouldRecommend: option.value }))}
                      className="sr-only"
                    />
                    <span className="text-sm font-medium">{option.label}</span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Comment */}
          <div>
            <label htmlFor="comment" className="form-label">
              Additional Comments (Optional)
            </label>
            <textarea
              id="comment"
              value={formData.comment}
              onChange={(e) => setFormData((prev) => ({ ...prev, comment: e.target.value }))}
              placeholder="Tell us more about your experience..."
              className="form-textarea"
              rows={3}
            />
          </div>
        </div>

        {/* Submit */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting || !formData.name.trim()}
            className="btn-primary w-full disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Submitting...
              </>
            ) : (
              'Submit Review'
            )}
          </button>
          <p className="text-care-gray-400 text-xs text-center mt-3">
            By submitting, you agree to have your review displayed on our website.
          </p>
        </div>
      </form>
    </div>
  );
}
