import React, { useEffect, useState } from 'react';
import { Calendar, Eye, ArrowRight, Loader2 } from 'lucide-react';

interface Article {
  id: string;
  title: string;
  category: string;
  date: string;
  views: number;
  coverImage: string;
  content: string;
}

const Blog: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 这里的 API 地址会在下一步配置
    const apiBase = import.meta.env.VITE_API_BASE_URL || 'https://gogotrip.teocodes.com';
    
    fetch(`${apiBase}/articles/public`)
      .then(res => res.json())
      .then(data => {
        setArticles(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch articles", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Travel Blog & News</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Expert guides, travel tips, and the latest updates from the GogoTrip team to help you plan your next adventure.
          </p>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 text-slate-400">
            <Loader2 className="w-10 h-10 animate-spin mb-4 text-blue-600" />
            <p>Loading amazing stories...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article) => (
              <div key={article.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer border border-slate-100 hover:-translate-y-1">
                <div className="aspect-video bg-slate-200 relative overflow-hidden">
                  {article.coverImage ? (
                    <img 
                      src={article.coverImage} 
                      alt={article.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-400 bg-slate-100 font-medium">
                      No Image
                    </div>
                  )}
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-blue-600 shadow-sm">
                    {article.category}
                  </span>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-slate-500 mb-3 font-medium">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {article.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5" />
                      {article.views} views
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                    {article.title}
                  </h3>
                  
                  <div className="mt-4 flex items-center text-blue-600 font-bold text-sm group-hover:gap-2 transition-all gap-1">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {!loading && articles.length === 0 && (
           <div className="text-center py-20 bg-white rounded-3xl border border-slate-100 shadow-sm">
             <p className="text-slate-500 text-lg">No articles published yet. Check back later!</p>
           </div>
        )}
      </div>
    </div>
  );
};

export default Blog;