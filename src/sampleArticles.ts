export type Article = {
  id: number;
  title: string;
  text: string;
  image: string;
  source: string;
  category: string;
};

const sampleArticles: Article[] = [
  {
    id: 1,
    title: 'AI Revolutionizes News Aggregation',
    text: 'Artificial intelligence is changing how news is collected and presented, making it more relevant and timely for readers.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    source: 'https://example.com/ai-news',
    category: 'Technology',
  },
  {
    id: 2,
    title: 'Global Markets Rally',
    text: 'Stock markets around the world saw significant gains today as investor confidence returned.',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    source: 'https://example.com/markets',
    category: 'Finance',
  },
  {
    id: 3,
    title: 'Climate Change Initiatives Expand',
    text: 'Governments are ramping up efforts to combat climate change with new policies and international agreements.',
    image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80',
    source: 'https://example.com/climate',
    category: 'Environment',
  },
];

export default sampleArticles; 