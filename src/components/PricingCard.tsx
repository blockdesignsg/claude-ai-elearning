import React from 'react';
import { CheckCircle } from 'lucide-react';

interface PricingCardProps {
  name: string;
  price: number;
  period: string;
  features: string[];
  recommended?: boolean;
  priceId: string;
  onCheckout?: (priceId: string) => void;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  name,
  price,
  period,
  features,
  recommended = false,
  priceId,
  onCheckout,
}) => {
  return (
    <div
      className={`relative rounded-2xl transition-all duration-300 ${
        recommended
          ? 'ring-2 ring-blue-600 shadow-lg scale-105'
          : 'border border-gray-200 hover:border-gray-300 hover:shadow-md'
      } bg-white overflow-hidden`}
    >
      {/* Recommended Badge */}
      {recommended && (
        <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-semibold px-4 py-1 rounded-bl-lg">
          おすすめ
        </div>
      )}

      <div className="p-8">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>

        {/* Price */}
        <div className="mb-6">
          <span className="text-4xl font-bold text-gray-900">¥{price.toLocaleString()}</span>
          <span className="text-gray-600 text-sm ml-2">/ {period}</span>
        </div>

        {/* CTA Button */}
        <button
          onClick={() => onCheckout?.(priceId)}
          className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 mb-6 ${
            recommended
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
          }`}
        >
          始める
        </button>

        {/* Features List */}
        <div className="space-y-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-gray-600">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
