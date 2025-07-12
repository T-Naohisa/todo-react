'use client';
import React from 'react';

export const QuotePage = () => {
  return (
    <>
      <main className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-4">🧠 今日の名言</h1>
        {/* カテゴリの切り替え */}
        <div className="mb-4">{/* CategorySelector */}</div>
        {/* 名言カード */}
        <div className="mb-4">{/* QuoteCard */}</div>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-500">別のを表示</button>

        <footer className="mt-8 text-sm text-gray-500">@ 2025 名言ジェネレーター</footer>
      </main>
    </>
  );
};

export default QuotePage;
