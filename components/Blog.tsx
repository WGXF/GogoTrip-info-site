import React, { useEffect, useState } from 'react';
import { Calendar, Eye, ArrowRight, Loader2, AlertCircle, X, User } from 'lucide-react';
import { API_BASE_URL } from '../config';

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
  const [error, setError] = useState('');
  
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/articles/public`)
      .then(res => {
        if (!res.ok) throw new Error('Failed to connect to server');
        return res.json();
      })
      .then(data => {
        setArticles(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch articles", err);
        setError('Could not load articles. Is the backend server running?');
        setLoading(false);
      });
  }, []);

  const getImageUrl = (path: string) => {
    if (!path) return null;
    if (path.startsWith('http')) return path;
    return `${API_BASE_URL}${path}`;
  };

  const stripHtmlTags = (html: string): string => {
    if (!html) return '';
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || '';
  };

  const getExcerpt = (content: string, maxLength: number = 150): string => {
    const plainText = stripHtmlTags(content);
    if (plainText.length <= maxLength) return plainText;
    return plainText.substring(0, maxLength).trim() + '...';
  };

  // ✨✨✨ Core fix: Handle article click logic ✨✨✨
  const handleArticleClick = (article: Article) => {
    console.log('clicked article:', article);

    // 1. Open modal immediately (Optimistic UI)
    setSelectedArticle(article);

    // 2. Background API request to increment view count
    // Fix: Add timestamp parameter (?t=...) to force browser not to use cache, ensure backend +1 is triggered every time
    fetch(`${API_BASE_URL}/api/info/articles/${article.id}?t=${new Date().getTime()}`)
      .then(res => {
        if (!res.ok) throw new Error('Failed to record view');
        return res.json();
      })
      .then((updatedArticle: Article) => {
        // 3. Update data in local list
        setArticles(prevArticles =>
          prevArticles.map(a => a.id === updatedArticle.id ? updatedArticle : a)
        );
        // Also update current modal data (ensure View count in modal is also up-to-date)
        setSelectedArticle(updatedArticle);
      })
      .catch(err => {
        console.error("Background view update failed", err);
      });
  };

  useEffect(() => {
    if (selectedArticle) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedArticle]);

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Travel Blog & News</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Expert guides, travel tips, and the latest updates from the GogoTrip team.
          </p>
        </div>

        {loading && (
          <div className="flex flex-col items-center justify-center py-20 text-slate-400">
            <Loader2 className="w-10 h-10 animate-spin mb-4 text-blue-600" />
            <p>Loading amazing stories...</p>
          </div>
        )}

        {error && !loading && (
          <div className="flex flex-col items-center justify-center py-10 text-red-500 bg-red-50 rounded-xl border border-red-100">
            <AlertCircle className="w-8 h-8 mb-2" />
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article) => (
              <div 
                key={article.id} 
                onClick={() => handleArticleClick(article)}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer border border-slate-100 hover:-translate-y-1 h-full flex flex-col"
              >
                <div className="aspect-video bg-slate-200 relative overflow-hidden">
                  {article.coverImage ? (
                    <img 
                      src={getImageUrl(article.coverImage)!} 
                      alt={article.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x225?text=No+Image'; }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-400 bg-slate-100 font-medium">No Image</div>
                  )}
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-blue-600 shadow-sm">
                    {article.category}
                  </span>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 text-xs text-slate-500 mb-3 font-medium">
                    <div className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {article.date}</div>
                    <div className="flex items-center gap-1"><Eye className="w-3.5 h-3.5" /> {article.views} views</div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-slate-500 text-sm line-clamp-3 mb-4 flex-1">
                    {getExcerpt(article.content)}
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-slate-100 flex items-center text-blue-600 font-bold text-sm group-hover:gap-2 transition-all gap-1">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ✨ Modal popup */}
      {selectedArticle && (
        <div className="fixed inset-0 z-[100] flex justify-center items-end sm:items-center">
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedArticle(null)}
          ></div>

          <div className="relative bg-white w-full max-w-3xl h-[85vh] sm:h-auto sm:max-h-[85vh] sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 sm:slide-in-from-bottom-4 duration-300">
            
            <div className="relative h-64 shrink-0 bg-slate-100">
               {selectedArticle.coverImage && (
                 <img 
                   src={getImageUrl(selectedArticle.coverImage)!} 
                   alt={selectedArticle.title}
                   className="w-full h-full object-cover"
                 />
               )}
               <button 
                 onClick={() => setSelectedArticle(null)}
                 className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors backdrop-blur-md"
               >
                 <X className="w-5 h-5" />
               </button>
            </div>

            <div className="p-8 overflow-y-auto custom-scrollbar">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold uppercase rounded-full">
                  {selectedArticle.category}
                </span>
                <span className="text-slate-400 text-sm flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> {selectedArticle.date}
                </span>
                <span className="text-slate-400 text-sm flex items-center gap-1 ml-auto">
                  <Eye className="w-3 h-3" /> {selectedArticle.views} views
                </span>
              </div>

              <h2 className="text-3xl font-bold text-slate-900 mb-6 leading-tight">
                {selectedArticle.title}
              </h2>

              <div 
                className="article-content prose prose-slate max-w-none"
                dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
              />
            </div>

            <div className="p-4 border-t border-slate-100 bg-slate-50 flex justify-between items-center text-sm text-slate-500">
               <div className="flex items-center gap-2">
                 <User className="w-4 h-4" />
                 <span>By Admin</span>
               </div>
               <button 
                 onClick={() => setSelectedArticle(null)}
                 className="px-4 py-2 bg-white border border-slate-200 rounded-lg hover:bg-slate-100 font-medium transition-colors"
               >
                 Close
               </button>
            </div>
          </div>
        </div>
      )}

      {/* Styles section remains unchanged */}
      <style>{`
        .article-content { color: #475569; line-height: 1.8; }
        .article-content h1 { font-size: 2rem; font-weight: 700; color: #0f172a; margin-top: 1.5rem; margin-bottom: 1rem; }
        .article-content h2 { font-size: 1.5rem; font-weight: 700; color: #1e293b; margin-top: 1.5rem; margin-bottom: 0.75rem; }
        .article-content h3 { font-size: 1.25rem; font-weight: 600; color: #334155; margin-top: 1.25rem; margin-bottom: 0.5rem; }
        .article-content p { margin-bottom: 1rem; }
        .article-content strong { font-weight: 600; color: #1e293b; }
        .article-content em { font-style: italic; }
        .article-content ul { list-style-type: disc; margin-left: 1.5rem; margin-bottom: 1rem; }
        .article-content ol { list-style-type: decimal; margin-left: 1.5rem; margin-bottom: 1rem; }
        .article-content img { max-width: 100%; height: auto; border-radius: 8px; margin: 1rem 0; }
        .article-content blockquote { border-left: 4px solid #3b82f6; padding-left: 1rem; margin: 1.5rem 0; color: #64748b; font-style: italic; background: #f8fafc; padding: 1rem; border-radius: 0 8px 8px 0; }
        .article-content a { color: #3b82f6; text-decoration: underline; }
      `}</style>

    </div>
  );
};

export default Blog;