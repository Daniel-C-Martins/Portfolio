import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Home() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-950 text-white">
      <h1 className="text-5xl font-bold mb-4 text-blue-500">
        {t('home.welcome')}
      </h1>
      <p className="text-xl text-zinc-400 mb-8">
        {t('home.description')}
      </p>
      <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition-colors cursor-pointer">
        {t('home.viewProjects')} <ArrowRight size={20} />
      </button>
    </div>
  );
}