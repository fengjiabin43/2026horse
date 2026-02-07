
import React, { useState } from 'react';
import { QUESTIONS, HORSES } from './constants';
import { AppStatus, Weights, HorseResult, Option } from './types';

const App: React.FC = () => {
  const [status, setStatus] = useState<AppStatus>(AppStatus.START);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
  const [result, setResult] = useState<HorseResult | null>(null);

  const startQuiz = () => setStatus(AppStatus.QUIZ);

  const handleOptionClick = (option: Option) => {
    const newSelected = [...selectedOptions, option];
    setSelectedOptions(newSelected);

    if (currentQuestionIdx < QUESTIONS.length - 1) {
      setCurrentQuestionIdx(prev => prev + 1);
    } else {
      calculateResult(newSelected);
    }
  };

  const handlePrevClick = () => {
    if (currentQuestionIdx > 0) {
      setSelectedOptions(prev => prev.slice(0, -1));
      setCurrentQuestionIdx(prev => prev - 1);
    }
  };

  const calculateResult = (finalAnswers: Option[]) => {
    setStatus(AppStatus.LOADING);

    // 计算总分
    const totalScores: Weights = finalAnswers.reduce((acc, opt) => ({
      energy: acc.energy + (opt.weights.energy || 0),
      mindset: acc.mindset + (opt.weights.mindset || 0),
      pressure: acc.pressure + (opt.weights.pressure || 0),
    }), { energy: 0, mindset: 0, pressure: 0 });

    setTimeout(() => {
      let minDistance = Infinity;
      let matchedHorse = HORSES[0];

      HORSES.forEach(horse => {
        const distance = Math.sqrt(
          Math.pow(totalScores.energy - horse.coordinates.energy, 2) +
          Math.pow(totalScores.mindset - horse.coordinates.mindset, 2) +
          Math.pow(totalScores.pressure - horse.coordinates.pressure, 2)
        );

        if (distance < minDistance) {
          minDistance = distance;
          matchedHorse = horse;
        }
      });

      setResult(matchedHorse);
      setStatus(AppStatus.RESULT);
    }, 1500);
  };

  const handleSave = () => {
    if (!result) return;
    const link = document.createElement('a');
    link.href = result.image;
    link.download = `2026职场确诊-${result.name}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    alert('提示：在手机端建议直接长按上方卡片进行保存哦！');
  };

  const handleShare = async () => {
    const shareData = {
      title: '2026测测你是什么马',
      text: `我已在 2026 职场正式确诊为：${result?.name}！快来测测你的职场 DNA。`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) { }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert('链接已复制到剪贴板，快发给同事一起测测吧！');
      } catch (err) {
        alert('分享失败，请直接复制地址栏链接分享。');
      }
    }
  };

  const reset = () => {
    setSelectedOptions([]);
    setCurrentQuestionIdx(0);
    setResult(null);
    setStatus(AppStatus.START);
  };

  const ProgressBar = () => (
    <div className="w-full h-2 bg-gray-200 rounded-full mb-4 overflow-hidden border border-black/10">
      <div
        className="h-full bg-yellow-400 transition-all duration-300 ease-out"
        style={{ width: `${((currentQuestionIdx + 1) / QUESTIONS.length) * 100}%` }}
      />
    </div>
  );

  return (
    <div className="min-h-screen max-w-md mx-auto px-6 py-8 flex flex-col items-center justify-center">
      {status === AppStatus.START && (
        <div className="text-center animate-fade-in w-full">
          <h1 className="text-4xl font-bold mb-10 retro-font text-gray-800 tracking-tight leading-tight">
            2026<br />测测你是什么马
          </h1>
          <div className="relative inline-block group">
            <div className="absolute -inset-1 bg-yellow-400 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <button
              onClick={startQuiz}
              className="relative px-12 py-4 bg-yellow-400 border-2 border-black text-black font-bold text-xl rounded-lg hover:bg-yellow-300 active:scale-95 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              开始确诊
            </button>
          </div>
          <p className="mt-8 text-xs text-gray-400 font-mono">2026 WORKPLACE DIAGNOSIS v1.0</p>
        </div>
      )}

      {status === AppStatus.QUIZ && (
        <div className="w-full animate-fade-in">
          {/* 题目上方标题 - 更新样式与首页一致且单行呈现 */}
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800 retro-font tracking-tight">2026 测测你是什么马</h1>
          </div>

          <div className="flex items-center justify-between mb-2">
            {/* 恢复上一题按钮 */}
            <button
              onClick={handlePrevClick}
              disabled={currentQuestionIdx === 0}
              className={`flex items-center gap-1 text-xs font-bold transition-opacity ${currentQuestionIdx === 0 ? 'opacity-0 pointer-events-none' : 'opacity-60 hover:opacity-100'}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
              </svg>
              上一题
            </button>
            <span className="text-yellow-600 font-bold text-xs uppercase tracking-wider">
              Question {currentQuestionIdx + 1}/{QUESTIONS.length}
            </span>
          </div>
          <ProgressBar />
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mt-2 leading-tight">
              {QUESTIONS[currentQuestionIdx].title}
            </h2>
          </div>
          <div className="grid gap-4">
            {QUESTIONS[currentQuestionIdx].options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleOptionClick(opt)}
                className="w-full text-left p-5 bg-white border-2 border-black rounded-xl hover:bg-yellow-50 active:bg-yellow-100 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group"
              >
                <div className="flex items-center gap-4">
                  <span className="w-8 h-8 flex items-center justify-center bg-gray-100 border border-black rounded-lg font-bold group-hover:bg-yellow-400 transition-colors">
                    {opt.label}
                  </span>
                  <span className="text-lg font-medium text-gray-700">{opt.text}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {status === AppStatus.LOADING && (
        <div className="flex flex-col items-center justify-center">
          <div className="w-48 h-48 relative border-4 border-black rounded-2xl overflow-hidden bg-white shadow-xl">
            <div className="absolute left-0 w-full h-1 bg-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.8)] z-10 scan-line"></div>
            <div className="flex items-center justify-center h-full text-4xl">🧬</div>
          </div>
          <p className="mt-8 text-xl font-bold text-gray-800 retro-font animate-pulse">
            正在扫描职场DNA...
          </p>
        </div>
      )}

      {status === AppStatus.RESULT && result && (
        <div className="w-full text-center animate-fade-in-up pb-10">
          <div className="bg-white p-4 border-4 border-black rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center">
            {/* 结果卡片大图 */}
            <div className="w-full relative mb-6 border-2 border-black rounded-lg overflow-hidden flex items-center justify-center bg-gray-50">
              <img
                src={`${import.meta.env.BASE_URL}${result.image.replace(/^\.?\//, '')}`}
                alt={result.name}
                className="w-full h-auto block select-none"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${result.name}/600/600`;
                }}
              />
            </div>

            {/* 马年祝福语板块 */}
            <div className="w-full text-left bg-yellow-50 p-5 border-2 border-black rounded-lg mb-6 relative">
              <div className="absolute -top-3 left-4 bg-yellow-400 px-3 py-0.5 border-2 border-black rounded text-[10px] font-black uppercase tracking-widest shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
                2026 马年祝福语
              </div>
              <p className="text-lg text-gray-800 font-bold leading-relaxed mb-1 mt-1">
                {result.luckWord}
              </p>
            </div>

            {/* 重新测算按钮 */}
            <div className="w-full bg-gray-900 p-1 rounded-xl shadow-[0_4px_0_0_rgba(0,0,0,0.3)]">
              <button
                onClick={reset}
                className="w-full py-4 bg-gray-800 text-white font-bold text-lg rounded-lg hover:bg-gray-700 active:translate-y-[2px] active:shadow-none transition-all border-b-4 border-black"
              >
                重新测算
              </button>
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-4">
            <button
              onClick={handleSave}
              className="px-10 py-3 bg-black text-white rounded-full text-sm font-bold shadow-lg active:scale-95 transition-all"
            >
              保存
            </button>
            <button
              onClick={handleShare}
              className="px-10 py-3 bg-black text-white rounded-full text-sm font-bold shadow-lg active:scale-95 transition-all"
            >
              分享
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
