import React, { useState } from 'react';
import sampleArticles from '../sampleArticles';
import ArticleCard from './ArticleCard';
import CategoryChips from './CategoryChips';

const ExampleTab: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = Array.from(new Set(sampleArticles.map(a => a.category)));
  const filteredArticles = selectedCategory === 'All'
    ? sampleArticles
    : sampleArticles.filter(a => a.category === selectedCategory);
  return (
    <>
      <CategoryChips categories={categories} selected={selectedCategory} onSelect={setSelectedCategory} />
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {filteredArticles.map(article => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </>
  );
};

export default ExampleTab; 