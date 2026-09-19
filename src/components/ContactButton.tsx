import React from 'react';

interface ContactButtonProps {
  className?: string;
  onClick?: () => void;
  href?: string;
}

export const ContactButton: React.FC<ContactButtonProps> = ({
  className = '',
  onClick,
  href = '#contact',
}) => {
  const content = (
    <span className="relative z-10 flex items-center justify-center">
      Contact Me
    </span>
  );

  const baseStyles = `
    inline-flex items-center justify-center
    rounded-full text-white font-medium uppercase tracking-widest
    px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4
    text-xs sm:text-sm md:text-base
    cursor-pointer select-none
    transition-all duration-300 hover:scale-105 active:scale-95
    shadow-[0px_4px_4px_rgba(181,1,167,0.25),4px_4px_12px_#7721B1_inset]
    outline outline-2 outline-white -outline-offset-[3px]
    ${className}
  `;

  const inlineStyle: React.CSSProperties = {
    background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
  };

  if (href && !onClick) {
    return (
      <a
        href={href}
        style={inlineStyle}
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
      style={inlineStyle}
      className={baseStyles}
    >
      {content}
    </button>
  );
};

export default ContactButton;

