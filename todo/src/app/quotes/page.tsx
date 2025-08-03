'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import CategorySelector from 'components/CategorySelector';
import { Category, Quote } from 'app/types/types';
import { QuoteCard } from 'components/QuoteCard';

export const QuotePage = () => {
  const [category, setCategory] = useState<Category>('all');
  const [quote, setQuote] = useState<Quote | null>(null);
  const [quoteList, setQuoteList] = useState<Quote[]>([]);
  const [favorites, setFavorites] = useState<Quote[]>([]);

  // 初期化時にAPIから名言を取得する
  useEffect(() => {
    const fetchQuotes = async () => {
      const res = await fetch('api/quotes');
      const data = await res.json();
      setQuoteList(data);
    };
    fetchQuotes();
  }, []);

  // ローカルストレージからお気に入りを取得
  useEffect(() => {
    const stored = localStorage.getItem('favorites');
    if (stored) {
      setFavorites(JSON.parse(stored));
    }
  }, []);

  // ボタンで選んだカテゴリの名言をフィルタリングする
  const getFilteredQuotes = (category: Category): Quote[] => {
    return quoteList.filter((q) => q.category === category);
  };

  // ランダムで名言を1件取得する
  const getRandomQuote = (list: Quote[]) => {
    if (list.length === 0) return null;
    return list[Math.floor(Math.random() * list.length)];
  };

  // カテゴリを選択したときの処理
  const handlecategorySelect = (category: Category) => {
    setCategory(category);
    const filtered = getFilteredQuotes(category);
    const randomQuote = getRandomQuote(filtered);
    if (randomQuote) {
      setQuote(randomQuote);
    } else {
      setQuote(null);
    }
  };

  // ボタンが押されたときにリフレッシュ
  const refreshQuote = () => {
    const filtered = getFilteredQuotes(category);
    if (filtered.length === 0) {
      setQuote(null);
      return;
    }
    const random = getRandomQuote(filtered);
    if (random) {
      setQuote(random);
    } else {
      setQuote(null);
    }
    return;
  };

  /**
   * someでお気に入りリストの中に存在するかを確認し、
   * 存在する場合はfilterを使用してお気に入りリストから削除をし、
   * 存在しない場合はお気に入りリストに追加をしてupdateをする
   * @param quote
   */
  const toggleFavorite = (quote: Quote) => {
    const exists = favorites.some((q) => q.id === quote.id);
    const updated = exists ? favorites.filter((q) => q.id !== quote.id) : [...favorites, quote];
    setFavorites(updated);
    localStorage.setItem('favorites', JSON.stringify(updated));
  };

  return (
    <>
      <main className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-4">🧠 今日の名言</h1>
        {/* カテゴリの切り替え */}
        <div className="mb-4">
          <CategorySelector onChange={handlecategorySelect} />
        </div>
        {/* 名言カード */}
        {quote && (
          <div className="mb-4">
            <QuoteCard
              text={quote.text}
              author={quote.author}
              isFavorited={favorites.some((q) => q.id === quote.id)}
              onToggleFavorite={() => {
                toggleFavorite(quote);
              }}
            ></QuoteCard>
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
        <Link href="/favorites">お気に入り一覧へ</Link>

        <footer className="mt-8 text-sm text-gray-500">@ 2025 名言ジェネレーター</footer>
      </main>
    </>
  );
};

export default QuotePage;
