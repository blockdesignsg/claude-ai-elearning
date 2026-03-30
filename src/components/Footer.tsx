import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Left Section */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">CA</span>
              </div>
              <span className="text-sm font-semibold text-gray-900">Claude AI 研修</span>
            </div>
            <p className="text-xs text-gray-500">
              © {currentYear} Claude AI Learning Platform. All rights reserved.
            </p>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 md:flex gap-6 md:gap-8 text-sm">
            <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link href="/privacy" className="text-gray-600 hover:text-blue-600 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-gray-600 hover:text-blue-600 transition-colors">
              Terms
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
