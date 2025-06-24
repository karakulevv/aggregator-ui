import React from 'react';

const ACCENT = 'bg-blue-600 text-white dark:bg-blue-500 dark:text-white';

export type Article = {
  id: number;
  title: string;
  text: string;
  image: string;
  source: string;
  category: string;
};

const ArticleCard = ({ article }: { article: Article }) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden flex flex-col">
    <div className="aspect-w-16 aspect-h-9 w-full bg-gray-200 dark:bg-gray-700">
      <img src={article.image} alt={article.title} className="object-cover w-full h-full" />
    </div>
    <div className="p-4 flex-1 flex flex-col">
      <div className="mb-2">
        <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${ACCENT}`}>{article.category}</span>
      </div>
      <h2 className="text-lg font-bold mb-1 text-gray-900 dark:text-white">{article.title}</h2>
      <p className="text-gray-600 dark:text-gray-300 flex-1">{article.text}</p>
      <a
        href={article.source}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-4 inline-block px-4 py-2 rounded-lg font-semibold ${ACCENT} hover:bg-blue-700 dark:hover:bg-blue-600 transition`}
      >
        Read More
      </a>
    </div>
  </div>
);

export default ArticleCard; 