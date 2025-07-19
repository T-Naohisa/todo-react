'use client';
import React, { useState, useEffect } from 'react';
import CategorySelector from 'components/CategorySelector';
import { Category, Quote } from 'app/types/types';
import { QuoteCard } from 'components/QuoteCard';
import rawQuotes from 'json/Quote.json';

export const QuotePage = () => {
  const [category, setCategory] = useState<Category>('all');
  const [quote, setQuote] = useState<Quote | null>(null);
  // jsonからのデータを型に合わせるようにする
  const quotes = rawQuotes as Quote[];

  useEffect(() => {
    refreshQuote();
  }, [category]);

  // ボタンで選んだカテゴリの名言をフィルタリングする
  const getFilteredQuotes = (category: Category): Quote[] => {
    return quotes.filter((q) => q.category === category);
  };

  const getRandomQuote = (list: Quote[]) => {
    if (list.length === 0) return null;
    return list[Math.floor(Math.random() * list.length)];
  };

  // ボタンが押されたときにリフレッシュ
  const refreshQuote = () => {
    const filtered = getFilteredQuotes(category);
    if (filtered.length === 0) {
      setQuote(null);
      return;
    }

    const random = getRandomQuote(filtered);
    if (!random) {
      setQuote(null);
    } else {
      setQuote(random);
    }
    return;
  };

  return (
    <>
      <main className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-4">🧠 今日の名言</h1>
        {/* カテゴリの切り替え */}
        <div className="mb-4">
          <CategorySelector category={category} onChange={setCategory} />
        </div>
        {/* 名言カード */}
        {quote && (
          <div className="mb-4">
            <QuoteCard text={quote.text} author={quote.author}></QuoteCard>
          </div>
        )}
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-500"
          onClick={() => {
            refreshQuote();
          }}
        >
          別のを表示
        </button>

        <footer className="mt-8 text-sm text-gray-500">@ 2025 名言ジェネレーター</footer>
      </main>
    </>
  );
};

export default QuotePage;
