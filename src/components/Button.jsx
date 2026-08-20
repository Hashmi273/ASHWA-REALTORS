import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({
  children,
  to,
  href,
  onClick,
  type = 'button',
  variant = 'gold',
  size = 'md',
  className = '',
  disabled = false,
  icon: Icon = null,
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-sans font-semibold transition-all duration-300 rounded-sm tracking-wider uppercase text-xs focus:outline-none focus:ring-2 focus:ring-gold-primary/50';

  const variants = {
    gold: 'bg-gold-primary hover:bg-gold-muted text-navy-primary shadow-md hover:shadow-gold-glow hover:-translate-y-0.5 active:translate-y-0',
    navy: 'bg-navy-primary hover:bg-navy-deep text-white shadow-md hover:shadow-luxury hover:-translate-y-0.5 active:translate-y-0 border border-navy-light',
    outline: 'border border-gold-primary text-gold-primary hover:bg-gold-primary hover:text-navy-primary hover:-translate-y-0.5',
    'outline-navy': 'border border-navy-primary text-navy-primary hover:bg-navy-primary hover:text-white hover:-translate-y-0.5',
    ghost: 'text-navy-primary hover:text-gold-primary hover:bg-gold-primary/10',
  };

  const sizes = {
    sm: 'px-4 py-2 text-[11px]',
    md: 'px-6 py-3 text-xs',
    lg: 'px-8 py-4 text-sm',
  };

  const combinedClasses = `${baseStyles} ${variants[variant] || variants.gold} ${sizes[size] || sizes.md} ${disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {Icon && <Icon className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`group ${combinedClasses}`}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`group ${combinedClasses}`}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`group ${combinedClasses}`}>
      {content}
    </button>
  );
};

export default Button;
