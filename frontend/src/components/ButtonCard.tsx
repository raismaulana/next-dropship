"use client";

import React from 'react';

interface ButtonCardProps {
    label: string;
    highlighted?: boolean;
    handleClick: () => void;
  }
  
const ButtonCard: React.FC<ButtonCardProps> = ({ label, highlighted, handleClick}) => {
  return (
      <button onClick={handleClick} className={`px-4 py-2 w-full rounded-md ${highlighted ? 'bg-red-500' : 'bg-white text-black'}`}>
        {label}
      </button>
  );
};

export default ButtonCard;
