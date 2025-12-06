import React from 'react';
import { MessageSquare, ThumbsUp, User as UserIcon, PlusCircle, Search } from 'lucide-react';
import { FORUM_POSTS } from '../mockData';

export const Collaboration: React.FC = () => {
  return (
    <div className="space-y-6 pb-20">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
           <h1 className="text-3xl font-bold text-white">Collaboration Hub</h1>
           <p className="text-slate-400">Discussion forums and peer learning resources.</p>
        </div>
        <div className="flex gap-2">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search topics..." 
              className="bg-slate-800 border border-slate-700 text-slate-200 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-64 pl-10 p-2.5"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="w-4 h-4 text-slate-500" />
            </div>
          </div>
          <button className="flex items-center px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition-colors">
            <PlusCircle size={18} className="mr-2" />
            New Post
          </button>
        </div>
      </header>

      {/* Main Forum Content */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* Categories Sidebar */}
        <div className="hidden lg:block space-y-4">
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4">
            <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-3">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between items-center text-cyan-400 font-medium cursor-pointer">
                <span>General Discussion</span>
                <span className="bg-slate-700 px-2 py-0.5 rounded-full text-xs">12</span>
              </li>
              <li className="flex justify-between items-center text-slate-400 hover:text-slate-200 cursor-pointer transition-colors">
                <span>Assignments Help</span>
                <span className="bg-slate-800 px-2 py-0.5 rounded-full text-xs">8</span>
              </li>
              <li className="flex justify-between items-center text-slate-400 hover:text-slate-200 cursor-pointer transition-colors">
                <span>Course Material</span>
                <span className="bg-slate-800 px-2 py-0.5 rounded-full text-xs">4</span>
              </li>
              <li className="flex justify-between items-center text-slate-400 hover:text-slate-200 cursor-pointer transition-colors">
                <span>Project Partners</span>
                <span className="bg-slate-800 px-2 py-0.5 rounded-full text-xs">2</span>
              </li>
            </ul>
          </div>

           <div className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-500/20 rounded-xl p-4">
            <h3 className="text-sm font-bold text-indigo-300 mb-2">Community Tip</h3>
            <p className="text-xs text-indigo-200/70">
              "Constructivism posits that learners construct understanding through social interaction." - Share your draft with a peer today!
            </p>
          </div>
        </div>

        {/* Posts Feed */}
        <div className="lg:col-span-3 space-y-4">
          {FORUM_POSTS.map((post) => (
            <div key={post.id} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                   <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                     post.role === 'teacher' ? 'bg-cyan-600' : 'bg-slate-700'
                   }`}>
                      <UserIcon className="text-white" size={20} />
                   </div>
                   <div>
                      <h3 className="text-lg font-semibold text-white hover:text-cyan-400 cursor-pointer transition-colors">
                        {post.title}
                      </h3>
                      <div className="flex items-center space-x-2 mt-1 text-xs text-slate-400">
                        <span className={post.role === 'teacher' ? 'text-cyan-400 font-bold' : ''}>{post.author}</span>
                        <span>•</span>
                        <span>{post.timestamp}</span>
                        <span>•</span>
                        <div className="flex space-x-1">
                          {post.tags.map(tag => (
                            <span key={tag} className="bg-slate-700 px-1.5 rounded text-slate-300">{tag}</span>
                          ))}
                        </div>
                      </div>
                   </div>
                </div>
                <div className="flex flex-col items-center space-y-1">
                   <div className="flex items-center space-x-1 text-slate-400 hover:text-emerald-400 cursor-pointer">
                      <ThumbsUp size={16} />
                      <span className="text-xs font-bold">12</span>
                   </div>
                </div>
              </div>
              
              <p className="mt-4 text-slate-300 text-sm leading-relaxed">
                {post.content}
              </p>

              <div className="mt-4 pt-4 border-t border-slate-700/50 flex items-center text-slate-400 text-sm">
                 <MessageSquare size={16} className="mr-2" />
                 <span>{post.replies} Replies</span>
                 <button className="ml-auto text-cyan-400 hover:text-cyan-300 text-sm font-medium">Read Discussion</button>
              </div>
            </div>
          ))}

          {/* Load More Trigger for Scrollable requirement */}
          <div className="py-8 text-center">
            <button className="text-slate-500 hover:text-slate-300 text-sm font-medium transition-colors">
              Load older discussions...
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};