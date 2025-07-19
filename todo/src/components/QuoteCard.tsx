'use client';
import React from 'react';

type Props = {
  text: string;
  author: string;
};

export const QuoteCard = (props: Props) => {
  return (
    <>
      <div className="border rounded-lg p-6 max-w-md text-center shadow-md bg-white">
        <p className="text-xl front-semibold mb-4">{props.text}</p>
        <p className="text-sm text-gray-500">{props.author}</p>
      </div>
    </>
  );
};

export default QuoteCard;
