import React from 'react';

const Card = React.memo(({ children, className = '', ...props }) => (
  <div
    className={`bg-[#ECFAE5] rounded-2xl p-6 shadow-lg border border-[#DDF6D2] hover:shadow-xl transition-all duration-300 ${className}`}
    style={{
      boxShadow:
        '0 4px 6px -1px rgba(176, 219, 156, 0.1), 0 2px 4px -1px rgba(176, 219, 156, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
    }}
    {...props}
  >
    {children}
  </div>
));

export default Card;
