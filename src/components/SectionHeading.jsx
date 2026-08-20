import React from 'react';

const SectionHeading = ({
  badge,
  title,
  subtitle,
  align = 'center',
  dark = false,
  className = '',
}) => {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  return (
    <div className={`flex flex-col ${alignmentClasses[align]} max-w-3xl mb-12 md:mb-16 ${className}`}>
      {/* Badge / Pre-heading */}
      {badge && (
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="h-[1px] w-6 bg-gold-primary"></span>
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-gold-primary">
            {badge}
          </span>
          <span className="h-[1px] w-6 bg-gold-primary"></span>
        </div>
      )}

      {/* Main Title */}
      {title && (
        <h2 className={`font-serif text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide leading-tight ${
          dark ? 'text-white' : 'text-navy-primary'
        }`}>
          {title}
        </h2>
      )}

      {/* Subtitle */}
      {subtitle && (
        <p className={`mt-4 text-sm md:text-base leading-relaxed font-sans ${
          dark ? 'text-slate-grey' : 'text-slate-subtle'
        }`}>
          {subtitle}
        </p>
      )}

      {/* Gold Divider Line */}
      <div className={`h-[2px] w-16 bg-gold-primary/80 mt-6 rounded-full ${
        align === 'left' ? 'mr-auto' : align === 'right' ? 'ml-auto' : 'mx-auto'
      }`}></div>
    </div>
  );
};

export default SectionHeading;
