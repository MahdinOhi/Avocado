import React from 'react';

const Card = React.memo(({ children, className = '', ...props }) => (
  <div
    className={`bg-[#c5d49a] rounded-2xl p-4 shadow-sm ${className}`}
    {...props}
  >
    {children}
  </div>
));

export default Card;
