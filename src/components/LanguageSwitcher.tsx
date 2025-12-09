import { useTranslation } from 'react-i18next';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language.startsWith('pt') ? 'en' : 'pt';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-1 text-sm font-medium text-zinc-400 hover:text-white transition-colors cursor-pointer border border-zinc-700 rounded px-2 py-1"
      title="Mudar idioma / Change language"
    >
      {/* Mostra qual língua está ativa */}
      <span className={i18n.language.startsWith('pt') ? 'text-blue-500' : ''}>PT</span>
      <span className="text-zinc-600">|</span>
      <span className={i18n.language.startsWith('en') ? 'text-blue-500' : ''}>EN</span>
    </button>
  );
}