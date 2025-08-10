'use client';
import React, { useEffect, useState } from 'react';
import { Quote } from 'app/types/types';

export const FavoritesPage = () => {
  const [favorites, setFavorites] = useState<Quote[]>([]);
  const [sortOrder, setSortOrder] = useState<string>('default');
  useEffect(() => {
    const stored = localStorage.getItem('favorites');
    if (stored) {
      setFavorites(JSON.parse(stored));
    }
  }, []);

  const sortedFavorites = (val: string) => {
    let sorted = [...favorites];
    // 昇順でソートする
    if (val === 'asc') {
      sorted = sorted.sort((a: Quote, b: Quote) => {
        return a.id > b.id ? 1 : -1;
      });
      // 降順でソートする
    } else {
      sorted = sorted.sort((a: Quote, b: Quote) => {
        return a.id > b.id ? -1 : 1;
      });
    }
    setSortOrder(val);
    setFavorites(sorted);
  };

  if (favorites.length === 0) {
    return <p>お気に入りはまだ登録されていません。</p>;
  }
  return (
    <div>
      <h1>お気に入り一覧</h1>
      <select
        value={sortOrder}
        onChange={(e) => {
          sortedFavorites(e.target.value);
        }}
      >
        <option value="asc">昇順</option>
        <option value="desc">降順</option>
      </select>
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
