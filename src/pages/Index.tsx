import { useState } from 'react';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeElement, setActiveElement] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-8">
      <div 
        className="relative w-full max-w-[1200px] aspect-[2/1] bg-white shadow-2xl overflow-hidden"
        style={{ 
          maxHeight: '600px',
          border: '1px solid #f0f0f0'
        }}
      >
        <div className="absolute inset-0 flex">
          <div className="w-1/2 p-16 flex flex-col justify-between">
            <div>
              <div 
                className="flex items-center gap-3 mb-16 transition-transform duration-300 hover:scale-105 cursor-pointer"
                onMouseEnter={() => setActiveElement('logo')}
                onMouseLeave={() => setActiveElement(null)}
              >
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-5xl">🍍</span>
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                    <Icon name="Sun" size={14} className="text-white" />
                  </div>
                </div>
                <div>
                  <h1 className="text-4xl font-black text-foreground tracking-tight leading-none">
                    ANANAS
                  </h1>
                  <p className="text-2xl font-bold text-secondary tracking-wide">
                    HOLIDAY
                  </p>
                </div>
              </div>

              <div 
                className="space-y-8 transition-all duration-300"
                onMouseEnter={() => setActiveElement('content')}
                onMouseLeave={() => setActiveElement(null)}
                style={{
                  transform: activeElement === 'content' ? 'scale(1.02)' : 'scale(1)',
                }}
              >
                <h2 className="text-6xl font-black text-foreground leading-tight">
                  Семейный<br />
                  отдых<br />
                  <span className="text-primary">мечты</span>
                </h2>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                    <p className="text-xl text-muted-foreground font-semibold">
                      Туры для всей семьи
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 rounded-full bg-secondary"></div>
                    <p className="text-xl text-muted-foreground font-semibold">
                      Развлечения для всех возрастов
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                    <p className="text-xl text-muted-foreground font-semibold">
                      Безопасность и комфорт
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div 
              className="flex items-center gap-6 transition-all duration-300 hover:gap-8"
              onMouseEnter={() => setActiveElement('contact')}
              onMouseLeave={() => setActiveElement(null)}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Icon name="Phone" size={24} className="text-primary-foreground" />
                </div>
                <span className="text-3xl font-bold text-foreground">
                  8-800-555-35-35
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                  <Icon name="Globe" size={24} className="text-white" />
                </div>
                <span className="text-2xl font-semibold text-foreground">
                  ananas-holiday.ru
                </span>
              </div>
            </div>
          </div>

          <div 
            className="w-1/2 relative overflow-hidden"
            onMouseEnter={() => setActiveElement('mascot')}
            onMouseLeave={() => setActiveElement(null)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10"></div>
            
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-500"
              style={{
                transform: activeElement === 'mascot' 
                  ? 'translate(-50%, -50%) scale(1.1) rotate(5deg)' 
                  : 'translate(-50%, -50%) scale(1) rotate(0deg)',
              }}
            >
              <div className="relative">
                <div className="text-[280px] leading-none filter drop-shadow-2xl">
                  🍍
                </div>
                <div className="absolute top-[20%] left-1/2 -translate-x-1/2 text-8xl">
                  😎
                </div>
              </div>
            </div>

            <div className="absolute top-12 right-12 flex gap-6">
              <div className="w-32 h-32 bg-primary rounded-3xl shadow-xl flex items-center justify-center text-7xl animate-pulse">
                🏖️
              </div>
            </div>

            <div className="absolute bottom-12 right-12 flex gap-6">
              <div className="w-28 h-28 bg-secondary rounded-3xl shadow-xl flex items-center justify-center text-6xl">
                👨‍👩‍👧‍👦
              </div>
              <div className="w-28 h-28 bg-primary rounded-3xl shadow-xl flex items-center justify-center text-6xl">
                ✈️
              </div>
            </div>

            <div className="absolute top-1/2 left-12 w-24 h-24 bg-white rounded-full shadow-xl flex items-center justify-center text-5xl animate-bounce">
              ☀️
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 left-4 text-xs text-muted-foreground/50">
          Формат: 6000×3000мм (1:5) | CMYK | 300 PPI | FOGRA39
        </div>
      </div>
    </div>
  );
};

export default Index;
