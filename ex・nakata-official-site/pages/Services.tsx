
import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { GoogleGenAI } from "@google/genai";

interface Insight {
  content: string;
  sources: { title: string; uri: string }[];
}

const Services: React.FC = () => {
  const [insight, setInsight] = useState<Insight | null>(null);
  const [isLoadingInsight, setIsLoadingInsight] = useState(false);

  const fetchLocalInsights = async () => {
    setIsLoadingInsight(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `滋賀県および京都府南部での外構工事に関する最新の補助金やリサーチ情報を3つのトピックスでまとめてください。`,
        config: { tools: [{ googleSearch: {} }] }
      });
      
      const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
      const extractedSources = chunks
        .filter(c => c.web)
        .map(c => ({ 
          title: c.web?.title || '参考リンク', 
          uri: c.web?.uri || '' 
        }))
        .filter(s => s.uri !== '');

      setInsight({ 
        content: response.text || "取得に失敗しました", 
        sources: extractedSources 
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoadingInsight(false);
    }
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="bg-brand/5 py-16 md:py-24 border-b border-brand/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-brand">事業内容</h1>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed font-light">
            アルミ特注加工を強みとした、高品質・低価格な外構工事ラインナップ。
          </p>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* AI INSIGHT */}
          <div className="mb-24 bg-white border border-brand/10 shadow-sm p-8 md:p-12 rounded-sm relative">
            <div className="absolute top-0 right-0 bg-brand text-white px-4 py-1 text-[10px] font-bold uppercase tracking-widest">
              AI INSIGHT
            </div>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
              <h2 className="text-2xl font-bold tracking-tight text-brand">地元のお得な外構情報</h2>
              <button 
                onClick={fetchLocalInsights}
                disabled={isLoadingInsight}
                className="bg-brand text-white px-8 py-3 text-sm font-bold hover:bg-brand-dark transition-colors disabled:opacity-50"
              >
                {isLoadingInsight ? '分析中...' : '最新情報を取得'}
              </button>
            </div>
            {insight && (
              <div className="animate-in fade-in duration-500">
                <div className="text-gray-700 leading-loose whitespace-pre-wrap text-base font-light mb-8">
                  {insight.content}
                </div>
                
                {insight.sources.length > 0 && (
                  <div className="pt-6 border-t border-gray-100">
                    <p className="text-xs font-bold text-brand mb-3 uppercase tracking-wider">参考ソース:</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {insight.sources.map((source, idx) => (
                        <li key={idx}>
                          <a 
                            href={source.uri} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-xs text-brand hover:underline flex items-center"
                          >
                            <svg className="w-3 h-3 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            <span className="line-clamp-1">{source.title}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* サービスリスト */}
          <div className="grid grid-cols-1 gap-24 mb-32">
            {SERVICES.map((service, index) => (
              <div 
                key={service.id} 
                className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="w-full md:w-1/2">
                  <div className="relative aspect-video overflow-hidden shadow-xl rounded-sm">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <h2 className="text-3xl font-bold mb-4 tracking-tight text-brand">{service.title}</h2>
                  <p className="text-gray-600 text-lg leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 対応エリア */}
          <div className="bg-brand text-white p-12 rounded-sm relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 text-9xl font-black text-white/5 italic select-none uppercase tracking-tighter">AREA</div>
            <h2 className="text-2xl font-bold mb-8 relative z-10">対応エリア</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm text-white/80 font-light relative z-10">
              <div>
                <h3 className="text-white font-bold mb-4 border-b border-white/20 pb-2 uppercase tracking-widest">滋賀県エリア</h3>
                <p>大津市、草津市、守山市、栗東市、野洲市、近江八幡市、彦根市 他滋賀県全域</p>
              </div>
              <div>
                <h3 className="text-white font-bold mb-4 border-b border-white/20 pb-2 uppercase tracking-widest">京都府南部エリア</h3>
                <p>宇治市、城陽市、八幡市、京田辺市、長岡京市、向日市 他</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
