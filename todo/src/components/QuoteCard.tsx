'use client';
import React from 'react';

type Props = {
  text: string;
  author: string;
  isFavorited: boolean;
  onToggleFavorite: () => void;
};

export const QuoteCard = (props: Props) => {
  return (
    <>
      <div className="border rounded-lg p-6 max-w-md text-center shadow-md bg-white">
        <p className="text-xl front-semibold mb-4">{props.text}</p>
        <p className="text-sm text-gray-500">{props.author}</p>
        <button
          onClick={props.onToggleFavorite}
          className="absolute top-2 right-2 text-xl"
          aria-label="お気に入り切り替え"
        >
          {props.isFavorited ? '★' : '☆'}
        </button>
      </div>
    </>
  );
};

export default QuoteCard;
