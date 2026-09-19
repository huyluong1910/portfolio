import React from 'react';

interface LiveProjectButtonProps {
  className?: string;
  onClick?: () => void;
  href?: string;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({
  className = '',
  onClick,
  href = '#',
}) => {
  const content = (
    <span className="flex items-center justify-center gap-2">
      Live Project
    </span>
  );

  const baseStyles = `
    inline-flex items-center justify-center
    rounded-full border-2 border-[#D7E2EA]
    text-[#D7E2EA] font-medium uppercase tracking-widest
    px-8 py-3 sm:px-10 sm:py-3.5
    text-sm sm:text-base
    cursor-pointer select-none
    transition-all duration-200
    hover:bg-[#D7E2EA]/10 hover:scale-105 active:scale-95
    ${className}
  `;

  if (href && !onClick) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseStyles}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={baseStyles}
    >
      {content}
    </button>
  );
};

export default LiveProjectButton;

