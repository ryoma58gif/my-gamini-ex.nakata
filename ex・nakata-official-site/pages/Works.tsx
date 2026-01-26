
import React from 'react';
import { WORK_EXAMPLES, COMPANY_INFO } from '../constants';

const Works: React.FC<{ setCurrentPage?: (page: any) => void }> = ({ setCurrentPage }) => {
  return (
    <div className="animate-in fade-in duration-500">
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">施工事例</h1>
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
            滋賀県・京都南部での施工実績をご紹介。
            アルミの美しさと機能性を最大限に引き出した事例を掲載しています。
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {WORK_EXAMPLES.map((work) => (
              <div key={work.id} className="group border border-gray-100 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={work.imageUrl} 
                    alt={`${work.area}での${work.category}施工事例 - ${work.title}`} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-black/80 text-white text-[10px] font-bold px-2 py-1 backdrop-blur-sm">
                      {work.area}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] text-gray-400 font-bold tracking-widest uppercase">{work.category}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-gray-600 transition-colors">
                    {work.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {work.description}
                  </p>
                  <div className="flex flex-wrap gap-2 text-[10px] text-gray-400">
                    <span>#外構工事 {work.area}</span>
                    <span>#{work.category} 施工</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 bg-gray-50 p-10 text-center rounded-sm">
            <h3 className="text-xl font-bold mb-4">ただいま施工事例を続々追加中</h3>
            <p className="text-gray-500 mb-8 max-w-xl mx-auto">
              ここには掲載しきれない実績が多数ございます。現地調査の際には、過去の類似事例写真をお見せしながらご説明することも可能です。
            </p>
            <button 
              className="bg-black text-white px-8 py-3 font-bold hover:bg-gray-800 transition-colors"
              onClick={() => window.dispatchEvent(new CustomEvent('changePage', { detail: 'contact' }))}
            >
              お問い合わせはこちら
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Works;
