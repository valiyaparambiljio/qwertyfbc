
import React from 'react';
import { BLOG_POSTS } from '../constants';
import { Calendar, Tag, ChevronRight } from 'lucide-react';

const Blog: React.FC = () => {
  return (
    <div className="pb-24">
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Business Insights & News</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">Latest updates on accounting, taxation, and international business growth.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col group">
              <div className="h-64 overflow-hidden relative">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-8 flex-grow">
                <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Tag size={14} />
                    {post.category}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                <button className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all uppercase text-sm tracking-wider">
                  Read Full Story <ChevronRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Pagination Placeholder */}
      <div className="max-w-7xl mx-auto px-4 flex justify-center pb-24">
        <div className="flex gap-2">
          {[1, 2, 3].map(n => (
            <button key={n} className={`w-10 h-10 rounded-lg font-bold transition-all ${n === 1 ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
              {n}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
