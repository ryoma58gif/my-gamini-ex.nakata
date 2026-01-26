import React from 'react';
import { Page } from '../types';
import { COMPANY_INFO } from '../constants';

interface HomeProps {
  setCurrentPage: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ setCurrentPage }) => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-brand overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1590059132718-568ea951f9db?auto=format&fit=crop&q=80&w=2000" 
          alt="滋賀・大津市でのカーポート・外構工事施工例" 
          className="absolute inset-0 w-full h-full object-cover opacity-30 scale-105"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.2] tracking-tight">
              アルミ外構専門<br />
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl block mt-2 opacity-90 italic">加工・販売店 EX・NAKATA</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 mb-10 leading-relaxed font-light">
              滋賀県全域および京都府南部密着30年。
              職人直営の「加工・販売店」だから実現できる、アルミ特注技術と適正価格で、理想のエクステリアを形にします。
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={() => setCurrentPage(Page.SERVICES)}
                className="bg-white text-brand px-10 py-4 text-base font-bold hover:bg-gray-100 transition-all shadow-xl rounded-sm active:scale-95"
              >
                事業内容を見る
              </button>
              <button 
                onClick={() => setCurrentPage(Page.CONTACT)}
                className="bg-white/10 text-white px-10 py-4 text-base font-bold hover:bg-white/20 transition-all rounded-sm"
              >
                お問い合わせはこちら
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Strengths Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 tracking-tight text-gray-900 underline decoration-brand decoration-4 underline-offset-8">EX・NAKATAが滋賀・京都で選ばれる理由</h2>
            <p className="text-gray-500 font-light mt-4">アルミ外構専門加工・販売店として、技術と価格にこだわります</p>
          </div>

          <div className="space-y-32">
            <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="w-full md:w-1/2">
                <span className="text-7xl font-black text-brand/5 block mb-2 leading-none select-none">01</span>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight text-brand">加工・販売店ならではの特注技術</h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 font-light">
                  既製品では収まらない敷地条件にも、30年の経験に基づいた精密な現場加工で応えます。自社で加工・販売を行うため、柔軟なカスタマイズが可能です。
                </p>
              </div>
              <div className="w-full md:w-1/2 h-[350px] lg:h-[450px]">
                <img src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1000" alt="アルミ特注加工" className="w-full h-full object-cover shadow-2xl rounded-sm" />
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse gap-16 items-center">
              <div className="w-full md:w-1/2">
                <span className="text-7xl font-black text-brand/5 block mb-2 leading-none select-none">02</span>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight text-brand">中間コストを徹底排除した直営価格</h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 font-light">
                  加工・販売・施工をすべて自社で行うため、余計な中間マージンが発生しません。高品質な部材を適正な「販売店価格」で提供し、コストパフォーマンスの高い外構工事を実現します。
                </p>
              </div>
              <div className="w-full md:w-1/2 h-[350px] lg:h-[450px]">
                <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1000" alt="直営施工" className="w-full h-full object-cover shadow-2xl rounded-sm" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="py-32 bg-[#0f172a] text-white text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 tracking-tight leading-tight">
            滋賀・京都の住まいを、<br />
            プロのアルミ加工でもっと豊かに。
          </h2>
          <p className="text-white/60 text-lg mb-16 font-light">現地調査・お見積りは完全無料. お電話でもお気軽にご相談ください。</p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-12">
            <div className="text-left">
              <span className="text-[10px] text-brand font-bold uppercase tracking-[0.3em] block mb-2">Direct Call</span>
              <a href={`tel:${COMPANY_INFO.tel.replace(/-/g, '')}`} className="text-4xl sm:text-5xl font-black tracking-tighter hover:text-brand transition-colors">{COMPANY_INFO.tel}</a>
            </div>
            <button 
              onClick={() => setCurrentPage(Page.CONTACT)}
              className="bg-brand text-white px-12 py-5 text-xl font-bold hover:bg-brand-dark transition-all shadow-2xl rounded-sm active:scale-95"
            >
              お問い合わせはこちら
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;