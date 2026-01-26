import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

interface ImageEditorProps {
  initialImage?: string; // base64
  onResult: (base64: string) => void;
  onClose: () => void;
  mode: 'generate' | 'edit';
}

type ImageSize = '1K' | '2K' | '4K';

const ImageEditor: React.FC<ImageEditorProps> = ({ initialImage, onResult, onClose, mode }) => {
  const [prompt, setPrompt] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [imageSize, setImageSize] = useState<ImageSize>('1K');
  const [isCheckingKey, setIsCheckingKey] = useState(false);

  const handleProcess = async () => {
    if (!prompt) return;
    setIsProcessing(true);
    setError(null);

    try {
      // gemini-3-pro-image-preview requires user-selected API key
      if (typeof window !== 'undefined' && (window as any).aistudio) {
        const hasKey = await (window as any).aistudio.hasSelectedApiKey();
        if (!hasKey) {
          await (window as any).aistudio.openSelectKey();
          // Proceeding assuming selection was successful per guidelines
        }
      }

      // Create a fresh instance to ensure the latest API key is used
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      let response;

      if (mode === 'edit' && initialImage) {
        // High quality editing using gemini-3-pro-image-preview
        response = await ai.models.generateContent({
          model: 'gemini-3-pro-image-preview',
          contents: {
            parts: [
              {
                inlineData: {
                  data: initialImage,
                  mimeType: 'image/png',
                },
              },
              { text: prompt },
            ],
          },
          config: {
            imageConfig: {
              aspectRatio: "1:1",
              imageSize: imageSize
            }
          }
        });
      } else {
        // High quality generation using gemini-3-pro-image-preview
        response = await ai.models.generateContent({
          model: 'gemini-3-pro-image-preview',
          contents: {
            parts: [{ text: prompt }],
          },
          config: {
            imageConfig: {
              aspectRatio: "1:1",
              imageSize: imageSize
            },
            tools: [{ googleSearch: {} }] // Enabled for pro model to get up-to-date styles
          }
        });
      }

      const part = response.candidates?.[0]?.content?.parts.find(p => p.inlineData);
      if (part?.inlineData?.data) {
        onResult(part.inlineData.data);
        onClose();
      } else {
        const textPart = response.candidates?.[0]?.content?.parts.find(p => p.text);
        setError(textPart?.text || "画像の生成に失敗しました。プロンプトを変えてお試しください。");
      }
    } catch (err: any) {
      console.error(err);
      if (err.message?.includes("Requested entity was not found")) {
        setError("APIキーのプロジェクト設定に問題がある可能性があります。再度キーを選択してください。");
        if (typeof window !== 'undefined' && (window as any).aistudio) {
          await (window as any).aistudio.openSelectKey();
        }
      } else {
        setError("エラーが発生しました。しばらく時間を置いてから再度お試しください。");
      }
    } finally {
      setIsProcessing(false);
    }
  };

  const suggestions = [
    "滋賀のモダンな住宅に設置された、ブラックのスタイリッシュな2台用カーポート。実写のようにリアルな高品質画像。",
    "木目調のアルミフェンスが美しい、プライバシーの守られた日本の庭園。4K画質の高精細なイメージ。",
    "夕暮れ時にライトアップされた、高級感のある人工木ウッドデッキ。温かみのあるライティング。",
    "機能門柱とモダンなアプローチが調和した、洗練された玄関周りのエクステリアデザイン。",
    "変形地に合わせて特注加工された、複雑な形状のテラス屋根。職人の技術が光るディテール。"
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-300">
      <div className="bg-white w-full max-w-2xl rounded-sm shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-brand text-white">
          <div className="flex flex-col">
            <h2 className="text-xl font-bold tracking-tight">
              AI高品質シミュレーター (Pro)
            </h2>
            <span className="text-[10px] opacity-80 uppercase tracking-widest font-bold">gemini-3-pro-image-preview</span>
          </div>
          <button onClick={onClose} className="hover:rotate-90 transition-transform">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>

        <div className="p-8 overflow-y-auto space-y-8">
          <div className="bg-blue-50 p-4 border-l-4 border-blue-400 text-[11px] text-blue-800">
            <p className="font-bold mb-1">【重要】高品質モデルのご利用について</p>
            <p>この機能はGemini 3 Proを使用します。利用には有料プロジェクトのAPIキーが必要です。<br/>
            <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" className="underline hover:text-blue-600 font-bold">課金設定に関する詳細はこちら</a></p>
          </div>

          {initialImage && mode === 'edit' && (
            <div className="relative group">
              <p className="text-xs font-bold text-gray-400 mb-2 uppercase tracking-widest">編集元の画像</p>
              <img src={`data:image/png;base64,${initialImage}`} className="w-full h-48 object-cover rounded-sm border border-gray-100 shadow-inner" alt="Source" />
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="col-span-1 md:col-span-2">
              <label className="block text-sm font-bold text-gray-700 mb-3 tracking-tight">
                {mode === 'edit' ? 'どのように高品質編集しますか？' : 'どのような高精細画像を作成しますか？'}
              </label>
              <textarea
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-sm focus:ring-2 focus:ring-brand/50 min-h-[100px] resize-none text-base"
                placeholder="例：4台用の大型カーポートを、モダンなコンクリート敷きの駐車場に配置して。背景は滋賀の山々。"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-3 tracking-tight uppercase">解像度設定</label>
              <div className="flex bg-gray-100 p-1 rounded-sm gap-1">
                {(['1K', '2K', '4K'] as ImageSize[]).map((size) => (
                  <button
                    key={size}
                    onClick={() => setImageSize(size)}
                    className={`flex-1 py-2 text-xs font-bold transition-all rounded-sm ${
                      imageSize === size 
                        ? 'bg-brand text-white shadow-md' 
                        : 'text-gray-500 hover:bg-gray-200'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">高品質生成のヒント</p>
            <div className="flex flex-wrap gap-2">
              {suggestions.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setPrompt(s)}
                  className="text-left text-[11px] bg-white hover:bg-brand/5 border border-gray-200 p-3 rounded-sm transition-all w-full leading-relaxed"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {error && (
            <div className="p-4 bg-red-50 text-red-600 text-sm border border-red-100 rounded-sm font-medium">
              {error}
            </div>
          )}
        </div>

        <div className="p-6 border-t border-gray-100 bg-gray-50 flex flex-col sm:flex-row gap-4">
          <button
            onClick={handleProcess}
            disabled={isProcessing || !prompt}
            className="flex-grow bg-brand text-white py-4 px-8 font-bold hover:bg-brand-dark transition-all shadow-lg disabled:opacity-50 flex items-center justify-center space-x-3 rounded-sm"
          >
            {isProcessing ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                <span>高品質画像を生成中...</span>
              </>
            ) : (
              <span>Proモデルで実行する</span>
            )}
          </button>
          <button
            onClick={onClose}
            className="px-8 py-4 text-gray-500 font-bold hover:bg-gray-200 transition-all rounded-sm"
          >
            キャンセル
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageEditor;
