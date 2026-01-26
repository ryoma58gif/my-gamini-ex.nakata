
import React from 'react';
import { COMPANY_INFO } from '../constants';

const Company: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500">
      {/* Header Section */}
      <div className="bg-brand/5 py-16 md:py-24 border-b border-brand/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-brand">会社概要</h1>
          <p className="text-lg text-gray-600 font-light italic">実績 ・ 技術 ・ 信頼</p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Representative Message Section */}
          <div className="mb-32">
            <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-start">
              {/* Profile Image with Circle Design */}
              <div className="relative flex-shrink-0 mx-auto md:mx-0">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-8 border-brand/5 shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=600" 
                    alt="EX・NAKATA代表 中田紀行" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:right-0 bg-brand text-white px-6 py-2 text-xs font-bold tracking-widest shadow-xl">
                  代表：中田 紀行
                </div>
              </div>

              <div className="flex-grow pt-4">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-brand leading-tight">
                  職人直営、30年の「職人魂」で<br className="hidden md:block" />
                  お客様の理想を形に。
                </h2>
                
                <div className="space-y-6 text-gray-700 leading-relaxed font-light text-base md:text-lg">
                  <p>
                    この度はEX・NAKATAのホームページをご覧いただき、誠にありがとうございます。
                    私たちはエクステリア商品の販売・施工において、お客様と直接向き合い、中間マージンを排除した「適正価格」と、一切の妥協を許さない「高品質な施工」を両立させております。
                  </p>
                  <p>
                    エクステリアという言葉がまだ一般的ではなかった時代からスタートし、アルミ建材の専門職人として現場一筋に歩んできました。振り返れば30年、多くのお客様、お取引先様、メーカー様に支えられ、信頼を積み重ねてこれたことは私の誇りです。
                  </p>
                  <p className="font-bold text-brand bg-brand/5 p-4 border-l-4 border-brand">
                    「他社への丸投げは一切いたしません」
                  </p>
                  <p>
                    私自身が全ての現場に責任を持って携わっています。時代と共に商品は進化し続けていますが、一つひとつの商品を丁寧に、そして美しく仕上げ、お客様に満足していただくという「職人魂」は、30年前から変わることはありません。
                  </p>
                  <p>
                    万が一のトラブルにも迅速に対応するアフターフォロー体制を整え、完成のたびにお客様の笑顔が見られるよう、スピード・丁寧・低価格、そこで何より「信頼」を大切に、これからも滋賀・京都の住まいづくりに貢献してまいります。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Company Info Table */}
          <div className="mt-20">
            <div className="flex items-center mb-10">
              <span className="w-12 h-px bg-brand mr-4"></span>
              <h2 className="text-2xl font-bold tracking-widest text-brand uppercase">企業情報</h2>
            </div>
            
            <div className="border-t-2 border-brand">
              <dl className="divide-y divide-gray-100">
                {[
                  { label: "会社名", value: COMPANY_INFO.name },
                  { label: "代表者", value: COMPANY_INFO.representative },
                  { label: "施工歴", value: COMPANY_INFO.history },
                  { label: "所在地", value: COMPANY_INFO.address },
                  { label: "電話番号", value: COMPANY_INFO.tel },
                  { label: "メール", value: COMPANY_INFO.email },
                  { label: "営業時間", value: `${COMPANY_INFO.businessHours} (${COMPANY_INFO.holidays}定休)` },
                ].map((item, idx) => (
                  <div key={idx} className="py-6 flex flex-col sm:flex-row sm:items-center">
                    <dt className="w-full sm:w-1/3 text-sm font-bold text-gray-500 mb-2 sm:mb-0 uppercase tracking-widest">{item.label}</dt>
                    <dd className="w-full sm:w-2/3 text-base md:text-lg text-gray-900 font-medium">{item.value}</dd>
                  </div>
                ))}
                <div className="py-8 flex flex-col sm:flex-row">
                  <dt className="w-full sm:w-1/3 text-sm font-bold text-gray-500 mb-4 sm:mb-0 uppercase tracking-widest">対応エリア</dt>
                  <dd className="w-full sm:w-2/3 text-sm text-gray-600 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-sm">
                        <p className="font-bold text-brand mb-2 border-b border-brand/10 pb-1">滋賀県エリア</p>
                        <p className="leading-relaxed">大津市、草津市、守山市、栗東市、野洲市、近江八幡市、彦根市 他全域</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-sm">
                        <p className="font-bold text-brand mb-2 border-b border-brand/10 pb-1">京都府南部エリア</p>
                        <p className="leading-relaxed">宇治市、城陽市、八幡市、京田辺市、長岡京市、向日市</p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-400 font-light italic">※その他の地域につきましても、お気軽にご相談ください。</p>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Company;
