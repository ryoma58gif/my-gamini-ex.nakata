import React, { useState } from 'react';
import { Page } from '../types';
import { COMPANY_INFO } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'ホーム', page: Page.HOME },
    { label: '事業内容', page: Page.SERVICES },
    { label: '施工事例', page: Page.WORKS },
    { label: '会社概要', page: Page.COMPANY },
  ];

  const handlePageChange = (page: Page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-white">
      {/* ヘッダー */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div 
              className="flex items-center cursor-pointer group flex-shrink-0"
              onClick={() => handlePageChange(Page.HOME)}
            >
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tighter text-brand group-hover:text-brand-light transition-colors leading-none">
                  EX・NAKATA
                </span>
                <span className="text-[9px] font-bold text-gray-400 tracking-[0.05em] mt-1">
                  アルミ専門外構加工・販売店
                </span>
              </div>
            </div>

            <div className="flex items-center">
              <nav className="hidden lg:flex items-center space-x-10 mr-10">
                {navItems.map((item) => (
                  <button
                    key={item.page}
                    onClick={() => handlePageChange(item.page)}
                    className={`text-sm font-bold tracking-widest transition-all relative py-2 whitespace-nowrap ${
                      currentPage === item.page 
                        ? 'text-brand' 
                        : 'text-gray-500 hover:text-brand'
                    }`}
                  >
                    {item.label}
                    {currentPage === item.page && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand animate-in slide-in-from-left-2"></span>
                    )}
                  </button>
                ))}
              </nav>

              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => handlePageChange(Page.CONTACT)}
                  className="bg-brand text-white px-6 py-3 text-sm font-bold hover:bg-brand-dark transition-all shadow-md active:scale-95 flex-shrink-0 rounded-sm"
                >
                  お問い合わせ
                </button>

                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="lg:hidden text-gray-500 p-2 focus:outline-none hover:text-brand transition-colors"
                >
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {isMenuOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* モバイルメニュー */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-t border-gray-100 shadow-2xl animate-in slide-in-from-top duration-300">
            <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => handlePageChange(item.page)}
                  className={`block w-full text-left px-6 py-4 text-base font-bold transition-all rounded-sm ${
                    currentPage === item.page 
                      ? 'text-brand bg-brand/5 border-l-4 border-brand' 
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-6 border-t border-gray-50 mt-4">
                <button
                  onClick={() => handlePageChange(Page.CONTACT)}
                  className="block w-full bg-brand text-white text-center py-5 text-lg font-bold shadow-lg rounded-sm"
                >
                  無料お見積り・ご相談
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* メインコンテンツ */}
      <main className="flex-grow relative">
        {children}
      </main>

      {/* フッター */}
      <footer className="bg-[#0f172a] text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
            <div className="lg:col-span-2">
              <div className="flex flex-col mb-8">
                <span className="text-3xl font-black tracking-tighter text-white">
                  EX・NAKATA
                </span>
                <span className="text-[10px] font-bold text-gray-400 tracking-[0.05em] mt-1">
                  アルミ専門外構加工・販売店
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-md font-light">
                滋賀・京都南部エリアに特化。30年の現場経験を持つプロが、自社加工・自社施工でお客様の理想をカタチにします。
              </p>
            </div>

            <div>
              <h4 className="text-sm font-bold mb-8 uppercase tracking-widest border-l-4 border-brand pl-4">メニュー</h4>
              <ul className="space-y-4">
                {navItems.map((item) => (
                  <li key={item.page}>
                    <button
                      onClick={() => handlePageChange(item.page)}
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
                <li>
                  <button onClick={() => handlePageChange(Page.CONTACT)} className="text-gray-400 hover:text-white text-sm transition-colors">
                    お問い合わせ
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold mb-8 uppercase tracking-widest border-l-4 border-brand pl-4">拠点・連絡先</h4>
              <p className="text-gray-400 text-sm leading-loose font-light">
                {COMPANY_INFO.address}<br />
                電話: <a href={`tel:${COMPANY_INFO.tel}`} className="hover:text-white">{COMPANY_INFO.tel}</a><br />
                営業時間: {COMPANY_INFO.businessHours}<br />
                定休日: {COMPANY_INFO.holidays}
              </p>
            </div>
          </div>
          
          <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-500 text-[10px] md:text-xs font-medium tracking-widest uppercase">
              &copy; {new Date().getFullYear()} EX・NAKATA All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;