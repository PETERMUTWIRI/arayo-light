'use client';

import Link from 'next/link';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
}

export default function ServiceCard({ icon: Icon, title, description, href = '/request-care' }: ServiceCardProps) {
  return (
    <Link href={href} className="card-care group block p-6 md:p-8">
      <div className="w-14 h-14 rounded-xl bg-care-red-50 flex items-center justify-center mb-6 group-hover:bg-care-red transition-colors">
        <Icon className="w-7 h-7 text-care-red group-hover:text-white transition-colors" />
      </div>
      <h3 className="font-heading text-xl mb-3 text-care-navy group-hover:text-care-red transition-colors">
        {title}
      </h3>
      <p className="text-care-gray-500 text-sm leading-relaxed mb-4">
        {description}
      </p>
      <div className="flex items-center gap-2 text-care-red text-sm font-medium">
        <span>Learn more</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}
