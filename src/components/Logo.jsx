import React from 'react';
import { Link } from 'react-router-dom';

/**
 * High-fidelity Vector SVG Logo for ASHWA REALTORS — Property Advisory
 * Matches the uploaded brand monogram image with exact hex colors:
 * Primary Navy: #0F1B2E
 * Gold / Bronze: #B8935A
 * Slate Grey: #8B93A1
 */
const Logo = ({ variant = 'default', className = '', showText = true }) => {
  const isDark = variant === 'dark';

  return (
    <Link to="/" className={`inline-flex items-center gap-3 group focus:outline-none ${className}`}>
      {/* Vector Monogram SVG */}
      <div className="relative flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
        <svg
          width="48"
          height="48"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 md:w-12 md:h-12 drop-shadow-sm"
        >
          {/* Main "A" Frame */}
          <path
            d="M100 15 L165 175 H140 L122 130 H78 L60 175 H35 L100 15 Z"
            fill={isDark ? "#FFFFFF" : "#0F1B2E"}
          />

          {/* Building Silhouette 1 (Left - Slate) */}
          <rect x="75" y="85" width="14" height="45" fill="#8B93A1" rx="1" />
          <path d="M75 85 L82 78 L89 85 Z" fill="#6B7280" />

          {/* Building Silhouette 2 (Center - Gold Tall) */}
          <rect x="92" y="65" width="16" height="65" fill="#B8935A" rx="1" />
          <path d="M92 65 L100 55 L108 65 Z" fill="#C9A868" />

          {/* Building Silhouette 3 (Right - Slate) */}
          <rect x="111" y="92" width="12" height="38" fill="#8B93A1" rx="1" />
          <path d="M111 92 L117 86 L123 92 Z" fill="#9CA3AF" />

          {/* Gold Arc Underline / Swoosh */}
          <path
            d="M 25 125 C 75 95, 125 95, 175 125 C 135 110, 65 110, 25 125 Z"
            fill="#B8935A"
          />
        </svg>
      </div>

      {/* Brand Text Block */}
      {showText && (
        <div className="flex flex-col justify-center select-none">
          {/* Main Title: ASHWA */}
          <span
            className={`font-serif text-xl md:text-2xl font-bold tracking-wider leading-none ${
              isDark ? 'text-white' : 'text-navy-primary'
            }`}
          >
            ASHWA
          </span>

          {/* Subtitle 1: REALTORS */}
          <span className="font-sans text-[10px] md:text-[11px] font-bold tracking-[0.3em] uppercase text-gold-primary leading-tight mt-0.5">
            REALTORS
          </span>

          {/* Subtitle 2: PROPERTY ADVISORY with side rule lines */}
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="h-[1px] w-3 bg-gold-primary/60"></span>
            <span
              className={`font-sans text-[7px] md:text-[8px] font-semibold tracking-[0.2em] uppercase whitespace-nowrap ${
                isDark ? 'text-slate-light' : 'text-navy-primary'
              }`}
            >
              PROPERTY ADVISORY
            </span>
            <span className="h-[1px] w-3 bg-gold-primary/60"></span>
          </div>
        </div>
      )}
    </Link>
  );
};

export default Logo;
