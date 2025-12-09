// src/pages/Home.tsx
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { TerminalWindow } from '@/components/TerminalWindow'; // Se criar
import { TechMarquee } from '@/components/TechMarquee';       // Se criar

export function Home() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col">
      
      {/* Seção Principal (Hero) */}
      <div className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-20">
          
          {/* Coluna da Esquerda: Texto */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              {t('home.welcome')} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
                {t('home.role')}
              </span>
            </h1>
            <p className="text-xl text-zinc-400 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              {t('home.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => navigate('/projetos')}
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 shadow-lg shadow-blue-500/20"
              >
                {t('hero.cta')} <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => navigate('/sobre')}
                className="flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 px-8 py-4 rounded-lg font-bold text-lg transition-all border border-zinc-700"
              >
                {t('navbar.about')}
              </button>
            </div>
          </div>

          {/* Coluna da Direita: Terminal */}
          <div className="hidden lg:block">
            <TerminalWindow />
          </div>

        </div>
      </div>

      {/* Rodapé: Carrossel de Tecnologias */}
      <TechMarquee />
      
    </div>
  );
}