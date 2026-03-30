'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, User, LogOut, ChevronDown } from 'lucide-react';

interface HeaderProps {
  user?: {
    name: string;
    avatar?: string;
  } | null;
}

export const Header: React.FC<HeaderProps> = ({ user = null }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CA</span>
              </div>
              <span className="hidden sm:inline text-lg font-semibold text-gray-900">
                Claude AI 研修
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link
                href="/courses"
                className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium"
              >
                コース一覧
              </Link>
              <Link
                href="/pricing"
                className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium"
              >
                料金プラン
              </Link>
            </nav>

            {/* Desktop Auth Section */}
            <div className="hidden md:flex items-center gap-4">
              {user ? (
                <div className="relative">
                  <button
                    onClick={() => setUserMenuOpen(!userMenuOpen)}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-medium">
                      {user.avatar || user.name[0].toUpperCase()}
                    </div>
                    <ChevronDown size={16} className="text-gray-600" />
                  </button>

                  {userMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg border border-gray-200 shadow-lg overflow-hidden">
                      <Link
                        href="/dashboard"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <User size={16} />
                          ダッシュボード
                        </div>
                      </Link>
                      <button
                        onClick={() => {
                          // Handle logout
                          setUserMenuOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors border-t border-gray-100"
                      >
                        <div className="flex items-center gap-2">
                          <LogOut size={16} />
                          ログアウト
                        </div>
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                  Sign in
                </button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? (
                <X size={24} className="text-gray-600" />
              ) : (
                <Menu size={24} className="text-gray-600" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 border-t border-gray-100">
              <Link
                href="/courses"
                className="block px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium"
              >
                コース一覧
              </Link>
              <Link
                href="/pricing"
                className="block px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium"
              >
                料金プラン
              </Link>
              {!user && (
                <button className="block w-full text-left px-4 py-2 mt-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                  Sign in
                </button>
              )}
            </div>
          )}
        </div>
      </header>
    </>
  );
};
