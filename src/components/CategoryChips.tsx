import React from 'react';

type CategoryChipsProps = {
  categories: string[];
  selected: string;
  onSelect: (cat: string) => void;
};

const CategoryChips: React.FC<CategoryChipsProps> = ({ categories, selected, onSelect }) => (
  <div className="flex flex-wrap gap-2 justify-center mb-8">
    {['All', ...categories].map((cat) => (
      <button
        key={cat}
        onClick={() => onSelect(cat)}
        className={`px-4 py-1 rounded-full border font-semibold transition text-sm
          ${selected === cat ? 'bg-blue-600 text-white border-blue-600 dark:bg-blue-500 dark:text-white dark:border-blue-500' : 'bg-white text-blue-600 border-blue-600 hover:bg-blue-50 dark:bg-gray-900 dark:text-blue-300 dark:border-blue-500 dark:hover:bg-gray-800'}`}
      >
        {cat}
      </button>
    ))}
  </div>
);

export default CategoryChips; 