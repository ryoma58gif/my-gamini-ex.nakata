
import React from 'react';
import { ServiceItem, WorkExample } from './types';

export const COMPANY_INFO = {
  name: "EX・NAKATA",
  representative: "中田 紀行",
  address: "〒520-2141 滋賀県大津市大江8丁目141番23号",
  tel: "077-547-4310",
  email: "e.x.nakata@i-next.ne.jp",
  businessHours: "平日 8:00～18:00",
  holidays: "土日祝",
  history: "30年以上",
  areas: [
    "大津市",
    "草津市",
    "守山市",
    "栗東市",
    "野洲市",
    "湖南市",
    "甲賀市",
    "近江八幡市",
    "東近江市",
    "彦根市",
    "米原市",
    "長浜市",
    "高島市",
    "宇治市 (京都府)",
    "城陽市 (京都府)",
    "八幡市 (京都府)",
    "京田辺市 (京都府)",
    "長岡京市 (京都府)",
    "向日市 (京都府)",
    "その他地域（要相談）"
  ]
};

export const SERVICES: ServiceItem[] = [
  {
    id: "carport",
    title: "カーポート",
    description: "1台用から複数台用まで。敷地形状に合わせたアルミ加工での設置も得意としています。",
    image: "https://images.unsplash.com/photo-1590059132718-568ea951f9db?auto=format&fit=crop&q=80&w=800",
    keywords: ["カーポート", "駐車場", "アルミ"]
  },
  {
    id: "terrace",
    title: "テラス",
    description: "雨除けや洗濯物干し場として。住まいに合わせた最適なデザインをご提案します。",
    image: "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?auto=format&fit=crop&q=80&w=800",
    keywords: ["テラス", "雨除け", "洗濯場"]
  },
  {
    id: "deck",
    title: "ウッドデッキ",
    description: "人工木デッキを中心とした、メンテナンスフリーで耐久性の高いデッキをご提案します。",
    image: "https://images.unsplash.com/photo-1590059132718-568ea951f9db?auto=format&fit=crop&q=80&w=800",
    keywords: ["ウッドデッキ", "人工木", "庭"]
  },
  {
    id: "sunroom",
    title: "サンルーム",
    description: "全天候型の多目的スペース。光を取り込む快適な空間を創ります。",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
    keywords: ["サンルーム", "ガーデンルーム"]
  },
  {
    id: "cycleport",
    title: "サイクルポート",
    description: "自転車やバイクを雨から守る駐輪スペースの設置。",
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&q=80&w=800",
    keywords: ["駐輪場", "自転車", "バイク"]
  },
  {
    id: "storage",
    title: "物置・シャッターガレージ",
    description: "イナバ物置などの設置から、本格的なガレージの施工まで対応。",
    image: "https://images.unsplash.com/photo-1620027177273-05b1086177ad?auto=format&fit=crop&q=80&w=800",
    keywords: ["物置", "ガレージ", "収納"]
  },
  {
    id: "fence",
    title: "フェンス・門扉・機能門柱",
    description: "目隠しフェンスや門扉など、プライバシーとデザインを両立させます。",
    image: "https://images.unsplash.com/photo-1520699049698-acd2fccb8cc8?auto=format&fit=crop&q=80&w=800",
    keywords: ["フェンス", "門扉", "機能門柱"]
  },
  {
    id: "handrail",
    title: "手すり",
    description: "バリアフリー対応のアルミ製手すり設置工事。",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
    keywords: ["手すり", "バリアフリー", "介護"]
  },
  {
    id: "custom",
    title: "特注加工",
    description: "変形地や特殊な納まりなど、アルミ加工技術で解決します。",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800",
    keywords: ["特注", "アルミ加工", "現場加工"]
  },
  {
    id: "others",
    title: "その他",
    description: "波板の張り替え、雨樋の掃除など、小さな修繕もお任せください。",
    image: "https://images.unsplash.com/photo-1585713181935-d5f622cc2415?auto=format&fit=crop&q=80&w=800",
    keywords: ["修理", "波板", "雨樋"]
  }
];

export const WORK_EXAMPLES: WorkExample[] = [
  {
    id: "1",
    title: "宇治市：特注カーポート設置",
    area: "京都府宇治市",
    category: "カーポート",
    description: "敷地に合わせてアルミを加工し、ピッタリ収まるように施工しました。",
    imageUrl: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "2",
    title: "大津市：目隠しフェンス設置",
    area: "滋賀県大津市",
    category: "フェンス",
    description: "隣地との境界に、プライバシーを守るアルミフェンスを設置しました。",
    imageUrl: "https://images.unsplash.com/photo-1520699049698-acd2fccb8cc8?auto=format&fit=crop&q=80&w=800"
  }
];
