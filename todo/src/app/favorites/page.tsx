'use client';
import React, { useEffect, useState } from 'react';
import { Quote } from 'app/types/types';

export const FavoritesPage = () => {
  const [favorites, setFavorites] = useState<Quote[]>([]);
  useEffect(() => {
    const stored = localStorage.getItem('favorites');
    if (stored) {
      setFavorites(JSON.parse(stored));
    }
  }, []);

  if (favorites.length === 0) {
    return <p>お気に入りはまだ登録されていません。</p>;
  }
  return (
    <div>
      <h1>お気に入り一覧</h1>
      <ul>
        {favorites.map((quote) => (
          <li key={quote.id} className="border p-4 mb-2 rounded">
            <p>{quote.text}</p>
            <p className="text-sm text-gray-600">- {quote.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesPage;
