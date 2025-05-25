import React from 'react';

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {children}
    </div>
  );
};

export default Card;