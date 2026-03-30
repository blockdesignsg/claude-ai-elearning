import React, { useEffect, useState } from 'react';

interface ProgressBarProps {
  completed: number;
  total: number;
  animated?: boolean;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  completed,
  total,
  animated = true,
}) => {
  const [displayedProgress, setDisplayedProgress] = useState(0);
  const percentage = Math.round((completed / total) * 100);

  useEffect(() => {
    if (!animated) {
      setDisplayedProgress(percentage);
      return;
    }

    let currentProgress = 0;
    const interval = setInterval(() => {
      if (currentProgress < percentage) {
        currentProgress += Math.ceil((percentage - currentProgress) / 10);
        setDisplayedProgress(Math.min(currentProgress, percentage));
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [percentage, animated]);

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-medium text-gray-600">
          進捗: {completed} / {total}
        </span>
        <span className="text-xs font-semibold text-blue-600">{displayedProgress}%</span>
      </div>
      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-500 ease-out rounded-full"
          style={{ width: `${displayedProgress}%` }}
        />
      </div>
    </div>
  );
};
