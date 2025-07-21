'use client';
import React from 'react';
import { Category } from 'app/types/types';

// カテゴリとsetCategoryを引数で受け取る
type Props = {
  onChange: (category: Category) => void;
};

const categories: Category[] = ['all', 'anime', 'life'];

/**
 * カテゴリの選択を行う
 * @param props
 * @returns
 */
export const CategorySelector = (props: Props) => {
  return (
    <>
      <div className="flex gap-2 flex-wrap justify-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              props.onChange(category);
              console.log('select category:' + category);
            }}
          >
            {categoryLabel(category)}
          </button>
        ))}
      </div>
    </>
  );
};

/**
 * ボタンに表示するラベルをを返す
 * @param category
 * @returns
 */
const categoryLabel = (category: Category) => {
  switch (category) {
    case 'all':
      return '全て';
    case 'anime':
      return 'アニメ';
    case 'life':
      return '人生';
    default:
      return category;
  }
};

export default CategorySelector;
