import React, { useState, useRef } from 'react';
import { COMPANY_INFO } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    tel: '',
    area: '',
    message: ''
  });
  const [images, setImages] = useState<{file?: File, preview: string}[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const flowSteps = [
    { num: '01', title: 'お問い合わせ', description: 'まずはお問い合わせフォーム、または電話にてご連絡ください。' },
    { num: '02', title: '現場打合せ確認', description: 'ご連絡させていただき、現状確認やお客様の要望などをお伺いいたします。' },
    { num: '03', title: 'ご提案・お見積り', description: '現場打合せした内容を元にお客様にベストプランにてお見積りをご提案させていただきます。' },
    { num: '04', title: 'ご契約・発注', description: '発注に際して必要な契約をいたします。' },
    { num: '05', title: '施工日程打ち合わせ', description: '近隣への配慮、お声掛けさせて頂きます。当日お留守の場合、お客様承諾なら大丈夫です。' },
    { num: '06', title: 'ご入金', description: '全て完了後、請求書を発行させていただきますので、ご入金お願いいたします。' },
    { num: '07', title: 'アフター', description: '問題発生時、ご連絡いただければ早急対応いたします。' }
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files).map(file => ({
        file,
        preview: URL.createObjectURL(file)
      }));
      setImages(prev => [...prev, ...newFiles]);
    }
  };

  const removeImage = (index: number) => {
    setImages(prev => {
      const updated = [...prev];
      URL.revokeObjectURL(updated[index].preview);
      updated.splice(index, 1);
      return updated;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      window.scrollTo(0, 0);
    }, 1500);
  };

  if (isSent) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center py-24 px-4 text-center animate-in fade-in duration-700">
        <div className="w-20 h-20 bg-brand/10 text-brand rounded-full flex items-center justify-center mb-10 shadow-sm">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
        </div>
        <h1 className="text-3xl font-bold mb-6 tracking-tight text-brand">送信完了</h1>
        <p className="text-gray-600 text-base max-w-md mx-auto mb-12 leading-relaxed font-light">
          内容を確認し、2営業日以内に担当者より折り返しご連絡させていただきます。
        </p>
        <button onClick={() => window.location.reload()} className="bg-brand text-white px-12 py-4 font-bold rounded-sm shadow-xl hover:bg-brand-dark transition-all active:scale-95 uppercase tracking-widest">
          トップページに戻る
        </button>
      </div>
    );
  }

  return (
    <div className="animate-in fade-in duration-500">
      <div className="bg-brand/5 py-20 md:py-24 border-b border-brand/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-brand">お問い合わせ</h1>
          <p className="text-base md:text-lg text-gray-600 font-light">現地調査・お見積りは完全無料です。お気軽にご相談ください。</p>
        </div>
      </div>

      <section className="py-24 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight text-gray-900">ご依頼から完了までの流れ</h2>
            <div className="w-16 h-1 bg-brand mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-0">
              {flowSteps.map((step, index) => (
                <div key={step.num} className="flex group">
                  <div className="flex flex-col items-center mr-6 md:mr-10">
                    <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-brand text-white font-black text-sm md:text-base rounded-sm shadow-md z-10">{step.num}</div>
                    {index !== flowSteps.length - 1 && <div className="w-0.5 flex-grow border-r border-dashed border-brand/30 my-2"></div>}
                  </div>
                  <div className="pb-16 pt-1">
                    <h3 className="text-xl md:text-2xl font-bold text-brand mb-3 tracking-tight">{step.title}</h3>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed font-light">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div className="space-y-16">
              <div className="bg-brand/5 p-10 md:p-12 rounded-sm border border-brand/10 relative overflow-hidden">
                <div className="absolute -right-5 -bottom-5 text-8xl font-black text-brand/5 leading-none italic select-none uppercase">CALL</div>
                <h2 className="text-xl font-bold mb-8 tracking-tight text-brand">お急ぎの方はお電話で</h2>
                <div className="flex items-center space-x-6 mb-8 relative z-10">
                  <div className="bg-brand text-white p-5 rounded-full shadow-lg">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  </div>
                  <div>
                    <p className="text-xs text-brand/60 mb-1 uppercase tracking-widest font-bold">直通電話</p>
                    <a href={`tel:${COMPANY_INFO.tel.replace(/-/g, '')}`} className="text-3xl sm:text-4xl font-black text-brand tracking-tighter">{COMPANY_INFO.tel}</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-3 tracking-tight">お名前 <span className="text-brand font-normal">(必須)</span></label>
                    <input type="text" required className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-sm focus:ring-2 focus:ring-brand/50 transition-all" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-3 tracking-tight">電話番号 <span className="text-brand font-normal">(必須)</span></label>
                    <input type="tel" required className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-sm focus:ring-2 focus:ring-brand/50 transition-all" value={formData.tel} onChange={(e) => setFormData({...formData, tel: e.target.value})} />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3 tracking-tight text-brand">対応エリア</label>
                  <select className="w-full px-5 py-4 bg-gray-50 border border-brand/20 rounded-sm focus:ring-2 focus:ring-brand font-bold" value={formData.area} onChange={(e) => setFormData({...formData, area: e.target.value})}>
                    <option value="">地域を選択してください</option>
                    {COMPANY_INFO.areas.map(area => <option key={area} value={area}>{area}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3 tracking-tight">お問い合わせ内容 <span className="text-brand font-normal">(必須)</span></label>
                  <textarea required rows={4} className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-sm focus:ring-2 focus:ring-brand/50 resize-none" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} placeholder="ご希望の施工内容や敷地の状況などをご記入ください"></textarea>
                </div>

                <div className="space-y-4">
                  <label className="block text-sm font-bold text-gray-700 tracking-tight">現場の写真 <span className="text-gray-400 font-normal">(任意)</span></label>
                  <div className="flex flex-wrap gap-4">
                    {images.map((img, idx) => (
                      <div key={idx} className="relative w-24 h-24 group">
                        <img src={img.preview} alt="preview" className="w-full h-full object-cover rounded-sm shadow-sm" />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <button type="button" onClick={() => removeImage(idx)} className="bg-red-500 text-white p-1 rounded-sm shadow-lg hover:scale-110 transition-transform" title="削除">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                          </button>
                        </div>
                      </div>
                    ))}
                    <button type="button" onClick={() => fileInputRef.current?.click()} className="w-24 h-24 border-2 border-dashed border-gray-200 rounded-sm flex flex-col items-center justify-center text-gray-400 hover:border-brand hover:text-brand transition-all bg-gray-50">
                      <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                      <span className="text-[10px] font-bold">写真を追加</span>
                    </button>
                  </div>
                  <input type="file" ref={fileInputRef} onChange={handleFileChange} multiple accept="image/*" className="hidden" />
                </div>

                <button type="submit" disabled={isSubmitting} className="w-full bg-brand text-white py-5 text-xl font-bold hover:bg-brand-dark transition-all shadow-xl disabled:bg-gray-400 rounded-sm active:scale-[0.98] tracking-tighter">
                  {isSubmitting ? '送信中...' : 'この内容で送信する'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;