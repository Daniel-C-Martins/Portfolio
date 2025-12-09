// src/i18n/index.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
   pt: {
      translation: {
         navbar: {
            home: "Início",
            projects: "Projetos",
            about: "Sobre"
         },
         home: {
            welcome: "Bem-vindo ao Meu Portfólio",
            role: "Desenvolvedor Full Stack",
            description: "Explore meus projetos e saiba mais sobre mim.",
            viewProjects: "Ver Projetos"
         }
      }
   },
   en: {
      translation: {
         navbar: {
            home: "Home",
            projects: "Projects",
            about: "About"
         },
         home: {
            welcome: "Welcome to My Portfolio",
            role: "Full Stack Developer",
            description: "Explore my projects and learn more about me.",
            viewProjects: "View Projects"
         }
      }
   }
};

i18n
   .use(LanguageDetector) // Detecta a língua do browser
   .use(initReactI18next) // Passa a instância para o react-i18next
   .init({
      resources,
      fallbackLng: 'pt', // Se não achar a língua, usa PT
      interpolation: {
         escapeValue: false // React já protege contra XSS
      }
   });

export default i18n;