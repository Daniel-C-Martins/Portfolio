import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Code2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-2 text-xl font-bold text-blue-500">
              <Code2 size={28} />
              <span>Daniel Martins</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/" className="text-zinc-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">{t('navbar.home')}</Link>
              <Link to="/projects" className="text-zinc-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">{t('navbar.projects')}</Link>
              <Link to="/about" className="text-zinc-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">{t('navbar.about')}</Link>
            </div>
          </div>

          {/* Social Icons (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
            <a href="https://github.com/Daniel-C-Martins" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/daniel-campos-martins-8b389026a" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-800 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="md:hidden bg-zinc-900 border-b border-zinc-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-zinc-800"
            >
              {t('navbar.home')}
            </Link>
            <Link
              to="/projects"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-zinc-300 hover:text-white hover:bg-zinc-800"
            >
              {t('navbar.projects')}
            </Link>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-zinc-300 hover:text-white hover:bg-zinc-800"
            >
              {t('navbar.about')}
            </Link>
            <div className="flex gap-4 px-3 py-4 border-t border-zinc-800 mt-4">
              <LanguageSwitcher />
              <a href="https://github.com/Daniel-C-Martins" className="text-zinc-400 hover:text-white"><Github size={24} /></a>
              <a href="https://www.linkedin.com/in/daniel-campos-martins-8b389026a" className="text-zinc-400 hover:text-white"><Linkedin size={24} /></a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}