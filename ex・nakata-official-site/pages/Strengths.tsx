import React from 'react';

const Strengths: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500">
      <div className="bg-brand text-white py-24 relative overflow-hidden">
        <div className="absolute -right-20 -bottom-20 text-[250px] font-black text-white/5 leading-none italic select-none">NE</div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">EX・NAKATAの強み</h1>
          <p className="text-base md:text-xl text-white/80 max-w-3xl leading-relaxed font-light">
            「30年の経験」を誇るアルミのプロとして。職人直営ならではの提案力と技術で、<br className="hidden md:block" />
            他社では断られた難しい案件も形にします。
          </p>
        </div>
      </div>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-32">
            
            <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="w-full md:w-1/2">
                <span className="text-7xl font-black text-brand/5 block mb-2 leading-none">01</span>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight text-brand">30年のアルミ専門加工技術</h2>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 font-light">
                  私たちの最大の特徴は、30年以上の現場経験に裏打ちされたアルミ部材の加工技術です。現場の状況に合わせ、ミリ単位でのカットや加工を行います。
                </p>
                <div className="bg-brand/5 p-8 border-l-4 border-brand">
                  <p className="text-sm md:text-base text-gray-800 italic leading-relaxed">
                    「敷地が台形で既製品のカーポートが入らない」「電柱を避けてフェンスを設置したい」といった、メーカー既製品のままでは施工困難な場所でも、熟練の特注加工で美しく仕上げます。
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 h-[350px] lg:h-[450px]">
                <img src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1000" alt="Processing" className="w-full h-full object-cover shadow-2xl rounded-sm" />
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse gap-16 items-center">
              <div className="w-full md:w-1/2">
                <span className="text-7xl font-black text-brand/5 block mb-2 leading-none">02</span>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight text-brand">自社施工によるコストカット</h2>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 font-light">
                  大手ハウスメーカーやリフォーム会社は、窓口となるだけで施工は下請けに流すのが一般的です。EX・NAKATAは代表自らが30年の経験を活かして施工を担当する「職人直営店」です。
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-6 text-center border border-gray-100">
                    <p className="text-xs text-gray-500 mb-2 uppercase tracking-widest">大手・営業会社</p>
                    <p className="text-lg font-bold text-gray-400">中間コスト大</p>
                  </div>
                  <div className="bg-brand text-white p-6 text-center shadow-xl rounded-sm">
                    <p className="text-xs text-white/70 mb-2 uppercase tracking-widest">EX・NAKATA</p>
                    <p className="text-lg font-bold">職人直営価格</p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 h-[350px] lg:h-[450px]">
                <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1000" alt="Direct" className="w-full h-full object-cover shadow-2xl rounded-sm" />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="w-full md:w-1/2">
                <span className="text-7xl font-black text-brand/5 block mb-2 leading-none">03</span>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight text-brand">地域密着30年の信頼</h2>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 font-light">
                  滋賀県全域と京都南部（宇治市、城陽市など）にエリアを絞り、30年間活動してきました。迅速な現地調査や、地域特有の気候を考慮した提案が可能です。
                </p>
                <ul className="space-y-4">
                  {[
                    "現地調査・見積無料",
                    "急な修理相談も歓迎",
                    "完了後のアフターフォロー"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center space-x-3 text-gray-800 text-base font-bold">
                      <svg className="w-6 h-6 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full md:w-1/2 h-[350px] lg:h-[450px]">
                <img src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1000" alt="Support" className="w-full h-full object-cover shadow-2xl rounded-sm" />
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Strengths;