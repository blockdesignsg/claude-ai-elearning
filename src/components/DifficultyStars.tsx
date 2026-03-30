import React from 'react';
import { Star } from 'lucide-react';

interface DifficultyStarsProps {
  level: 1 | 2 | 3;
}

export const DifficultyStars: React.FC<DifficultyStarsProps> = ({ level }) => {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3].map((star) => (
        <Star
          key={star}
          size={14}
          className={star <= level ? 'fill-blue-600 text-blue-600' : 'text-gray-300'}
        />
      ))}
    </div>
  );
};
