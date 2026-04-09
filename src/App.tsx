import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, PawPrint, Home, MapPin, Utensils, Hotel, Car } from 'lucide-react';
import { DOG_TYPES, DogType, DogSize } from './types';

type Step = 'home' | 'q1' | 'q2' | 'result' | 'plan';

export default function App() {
  const [step, setStep] = useState<Step>('home');
  const [isIntroverted, setIsIntroverted] = useState<boolean | null>(null);
  const [isActive, setIsActive] = useState<boolean | null>(null);
  const [selectedSize, setSelectedSize] = useState<DogSize | null>(null);

  const getDogType = (): DogType => {
    if (isIntroverted) {
      return isActive ? 'uchibenkei' : 'hakoiri';
    } else {
      return isActive ? 'wanpaku' : 'hime_ouji';
    }
  };

  const reset = () => {
    setStep('home');
    setIsIntroverted(null);
    setIsActive(null);
    setSelectedSize(null);
  };

  const containerVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-8 bg-spa-secondary/30">
      <header className="mb-12 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-spa-primary mb-2">
          ワンちゃん旅行
        </h1>
        <p className="text-xl text-gray-600 italic">タイプ診断システム</p>
      </header>

      <main className="w-full max-w-2xl">
        <AnimatePresence mode="wait">
          {step === 'home' && (
            <motion.div
              key="home"
              variants={containerVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="bg-white rounded-[32px] p-8 sm:p-12 card-shadow text-center"
            >
              <div className="flex justify-center mb-6 text-spa-primary">
                <PawPrint size={64} />
              </div>
              <h2 className="text-3xl font-semibold mb-6">診断を開始する</h2>
              <p className="text-gray-600 mb-10 leading-relaxed">
                愛犬の性格や好みに合わせて、<br />
                最適な旅行プランを診断します。
              </p>
              <button
                onClick={() => setStep('q1')}
                className="bg-spa-primary text-white px-10 py-4 rounded-full text-xl font-medium hover:opacity-90 transition-opacity flex items-center justify-center mx-auto gap-2 shadow-lg shadow-spa-primary/20"
              >
                スタート <ChevronRight size={24} />
              </button>
            </motion.div>
          )}

          {step === 'q1' && (
            <motion.div
              key="q1"
              variants={containerVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="bg-white rounded-[32px] p-8 sm:p-12 card-shadow"
            >
              <div className="mb-8 flex items-center gap-2 text-spa-primary font-sans text-sm uppercase tracking-widest font-semibold">
                <span>Question 01</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-10 leading-tight">
                ワンちゃんは、人見知り、<br />ワンちゃん見知りしますか？
              </h2>
              <div className="grid gap-4">
                <button
                  onClick={() => {
                    setIsIntroverted(true);
                    setStep('q2');
                  }}
                  className="w-full p-6 text-left border-2 border-gray-100 rounded-2xl hover:border-spa-primary hover:bg-spa-secondary/30 transition-all group"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="block text-xl font-semibold mb-1">する（内向的）</span>
                      <span className="text-gray-500 text-sm">少し慎重で、飼い主さんとの時間を大切にするタイプ</span>
                    </div>
                    <ChevronRight className="text-gray-300 group-hover:text-spa-primary transition-colors" />
                  </div>
                </button>
                <button
                  onClick={() => {
                    setIsIntroverted(false);
                    setStep('q2');
                  }}
                  className="w-full p-6 text-left border-2 border-gray-100 rounded-2xl hover:border-spa-primary hover:bg-spa-secondary/30 transition-all group"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="block text-xl font-semibold mb-1">しない（外向的）</span>
                      <span className="text-gray-500 text-sm">人なつっこく、新しい場所や友達が好きなタイプ</span>
                    </div>
                    <ChevronRight className="text-gray-300 group-hover:text-spa-primary transition-colors" />
                  </div>
                </button>
              </div>
              <button
                onClick={() => setStep('home')}
                className="mt-10 flex items-center gap-1 text-gray-400 hover:text-spa-primary transition-colors font-sans text-sm"
              >
                <ChevronLeft size={16} /> 戻る
              </button>
            </motion.div>
          )}

          {step === 'q2' && (
            <motion.div
              key="q2"
              variants={containerVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="bg-white rounded-[32px] p-8 sm:p-12 card-shadow"
            >
              <div className="mb-8 flex items-center gap-2 text-spa-primary font-sans text-sm uppercase tracking-widest font-semibold">
                <span>Question 02</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-10 leading-tight">
                ワンちゃんは、運動好きですか？
              </h2>
              <div className="grid gap-4">
                <button
                  onClick={() => {
                    setIsActive(true);
                    setStep('result');
                  }}
                  className="w-full p-6 text-left border-2 border-gray-100 rounded-2xl hover:border-spa-primary hover:bg-spa-secondary/30 transition-all group"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="block text-xl font-semibold mb-1">すき（活発）</span>
                      <span className="text-gray-500 text-sm">走り回ったり、体を動かすことが大好きなタイプ</span>
                    </div>
                    <ChevronRight className="text-gray-300 group-hover:text-spa-primary transition-colors" />
                  </div>
                </button>
                <button
                  onClick={() => {
                    setIsActive(false);
                    setStep('result');
                  }}
                  className="w-full p-6 text-left border-2 border-gray-100 rounded-2xl hover:border-spa-primary hover:bg-spa-secondary/30 transition-all group"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="block text-xl font-semibold mb-1">きらい（おとなしい）</span>
                      <span className="text-gray-500 text-sm">のんびり過ごしたり、景色を楽しむのが好きなタイプ</span>
                    </div>
                    <ChevronRight className="text-gray-300 group-hover:text-spa-primary transition-colors" />
                  </div>
                </button>
              </div>
              <button
                onClick={() => setStep('q1')}
                className="mt-10 flex items-center gap-1 text-gray-400 hover:text-spa-primary transition-colors font-sans text-sm"
              >
                <ChevronLeft size={16} /> 戻る
              </button>
            </motion.div>
          )}

          {step === 'result' && (
            <motion.div
              key="result"
              variants={containerVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="bg-white rounded-[32px] p-8 sm:p-12 card-shadow text-center"
            >
              <div className="mb-4 text-spa-primary font-sans text-sm uppercase tracking-widest font-semibold">
                Diagnosis Result
              </div>
              <h3 className="text-xl text-gray-500 mb-2 italic">
                {DOG_TYPES[getDogType()].title}
              </h3>
              <h2 className="text-4xl sm:text-5xl font-bold text-spa-primary mb-6">
                「{DOG_TYPES[getDogType()].name}」
              </h2>
              <p className="text-gray-600 mb-10 leading-relaxed text-left bg-spa-secondary/20 p-6 rounded-2xl">
                {DOG_TYPES[getDogType()].description}
              </p>
              
              <div className="space-y-4">
                <p className="text-sm font-sans font-bold text-gray-400 uppercase tracking-tighter">
                  サイズを選んでプランを見る
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => {
                      setSelectedSize('large');
                      setStep('plan');
                    }}
                    className="flex-1 bg-spa-primary text-white py-4 rounded-full font-medium hover:opacity-90 transition-opacity shadow-lg shadow-spa-primary/20"
                  >
                    大型犬向けプラン
                  </button>
                  <button
                    onClick={() => {
                      setSelectedSize('small');
                      setStep('plan');
                    }}
                    className="flex-1 border-2 border-spa-primary text-spa-primary py-4 rounded-full font-medium hover:bg-spa-primary hover:text-white transition-all"
                  >
                    中・小型犬向けプラン
                  </button>
                </div>
              </div>

              <button
                onClick={() => setStep('q2')}
                className="mt-10 flex items-center gap-1 text-gray-400 hover:text-spa-primary transition-colors font-sans text-sm mx-auto"
              >
                <ChevronLeft size={16} /> 戻る
              </button>
            </motion.div>
          )}

          {step === 'plan' && selectedSize && (
            <motion.div
              key="plan"
              variants={containerVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="bg-white rounded-[32px] overflow-hidden card-shadow"
            >
              <div className="relative h-64 sm:h-80">
                <img
                  src={DOG_TYPES[getDogType()].plans[selectedSize].image}
                  alt="Destination"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                  <div>
                    <span className="inline-block bg-spa-primary text-white px-3 py-1 rounded-full text-xs font-sans font-bold uppercase tracking-widest mb-2">
                      {selectedSize === 'large' ? '大型犬' : '中・小型犬'} Recommended
                    </span>
                    <h2 className="text-3xl font-bold text-white">
                      {DOG_TYPES[getDogType()].name}の旅
                    </h2>
                  </div>
                </div>
              </div>

              <div className="p-8 sm:p-12">
                <p className="text-lg text-gray-600 mb-10 italic border-l-4 border-spa-primary pl-4">
                  {DOG_TYPES[getDogType()].plans[selectedSize].description}
                </p>

                <div className="grid sm:grid-cols-2 gap-8 mb-10">
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-spa-secondary flex items-center justify-center text-spa-primary shrink-0">
                        <Car size={20} />
                      </div>
                      <div>
                        <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-gray-400 mb-1">移動手段</h4>
                        <p className="font-semibold">{DOG_TYPES[getDogType()].plans[selectedSize].transport}</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-spa-secondary flex items-center justify-center text-spa-primary shrink-0">
                        <Hotel size={20} />
                      </div>
                      <div>
                        <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-gray-400 mb-1">宿泊施設</h4>
                        <p className="font-semibold">{DOG_TYPES[getDogType()].plans[selectedSize].accommodation}</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-spa-secondary flex items-center justify-center text-spa-primary shrink-0">
                        <Utensils size={20} />
                      </div>
                      <div>
                        <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-gray-400 mb-1">食事・おやつ</h4>
                        <p className="font-semibold">{DOG_TYPES[getDogType()].plans[selectedSize].meals}</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-spa-secondary flex items-center justify-center text-spa-primary shrink-0">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-gray-400 mb-1">アクティビティ</h4>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {DOG_TYPES[getDogType()].plans[selectedSize].activities.map((act, i) => (
                            <span key={i} className="bg-spa-secondary text-spa-primary px-3 py-1 rounded-full text-sm">
                              {act}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-gray-100">
                  <button
                    onClick={() => setStep('result')}
                    className="flex-1 flex items-center justify-center gap-2 text-gray-500 hover:text-spa-primary transition-colors font-sans py-4"
                  >
                    <ChevronLeft size={20} /> 結果に戻る
                  </button>
                  <button
                    onClick={reset}
                    className="flex-1 flex items-center justify-center gap-2 bg-spa-primary text-white py-4 rounded-full font-medium hover:opacity-90 transition-opacity shadow-lg shadow-spa-primary/20"
                  >
                    <Home size={20} /> 最初からやり直す
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="mt-12 text-gray-400 font-sans text-xs tracking-widest uppercase">
        &copy; 2026 Dog Travel Diagnosis System
      </footer>
    </div>
  );
}
