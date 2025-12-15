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
            welcome: "Engenharia de Software & Inovação",
            role: "Desenvolvedor Full Stack & Pesquisador",
            description: "Unindo arquitetura robusta (DDD, Clean Arch) com Inteligência Artificial. Desenvolvo soluções escaláveis usando Java, Python e React.",
            viewProjects: "Ver Portfolio"
         },
         projects: {
            title: "Meus",
            subtitle: "Projetos",
            description: "Explore meus trabalhos em desenvolvimento de software e sistemas."
         },
         project_types: {
            academic: "Projeto Acadêmico",
            personal: "Projeto Pessoal",
            professional: "Projeto Profissional"
         },
         projects_data: {
            linux: {
               title: "Escalonador Linux Kernel",
               description: "Implementação de algoritmo SSTF via módulo de kernel para otimização de I/O."
            },
            portfolio: {
               title: "Portfólio Interativo",
               description: "Site pessoal com arquitetura escalável, i18n e design moderno."
            },
         },
         projects_page: {
            title: "Meus",
            subtitle: "Projetos",
            description: "Explore meus trabalhos em desenvolvimento de software e sistemas.",
            empty: "Nenhum projeto encontrado nesta categoria."
         },
         about_page: {
            title: "Sobre",
            subtitle: "Mim",
            bio_title: "Quem sou eu",
            bio_text_1: "Sou um desenvolvedor apaixonado por sistemas operacionais, arquitetura de software e soluções robustas. Meu foco está em criar aplicações que não apenas funcionam, mas são escaláveis e eficientes.",
            bio_text_2: "Quando não estou codando em Java ou configurando kernels Linux, estou estudando métodos formais e novas tecnologias para aprimorar minha caixa de ferramentas.",
            skills_title: "Tech Stack",
            timeline_title: "Minha Jornada",
            btn_cv: "Baixar Currículo",
            timeline: {
               title: "Minha Trajetória",
               edu_1_date: "2021 - 2024",
               edu_1_title: "Ciência da Computação",
               edu_1_desc: "Universidade XYZ - Foco em Algoritmos e Estrutura de Dados.",

               work_1_date: "2023 - 2024",
               work_1_title: "Estudos em Sistemas Operacionais",
               work_1_desc: "Desenvolvimento de módulos de kernel Linux e escalonadores (SSTF).",

               work_2_date: "2024 - Presente",
               work_2_title: "Desenvolvedor Full Stack",
               work_2_desc: "Criação de aplicações web modernas com React, TypeScript e Java.",
            }
         },
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
            welcome: "Software Engineering & Innovation",
            role: "Full Stack Developer & Researcher",
            description: "Merging robust architecture (DDD, Clean Arch) with Artificial Intelligence. Building scalable solutions using Java, Python, and React.",
            viewProjects: "View Portfolio"
         },
         projects: {
            title: "My",
            subtitle: "Projects",
            description: "Explore my work in software development and systems."
         },
         project_types: {
            academic: "University Project",
            personal: "Personal Project",
            professional: "Professional Work"
         },
         projects_data: {
            linux: {
               title: "Linux Kernel Scheduler",
               description: "Implementation of SSTF algorithm via kernel module for I/O optimization."
            },
            portfolio: {
               title: "Interactive Portfolio",
               description: "Personal website with scalable architecture, i18n and modern design."
            }
         },
         projects_page: {
            title: "My",
            subtitle: "Projects",
            description: "Explore my work in software development and systems.",
            empty: "No projects found in this category."
         },
         about_page: {
            title: "About",
            subtitle: "Me",
            bio_title: "Who I am",
            bio_text_1: "I am a developer passionate about operating systems, software architecture, and robust solutions. My focus is on creating applications that not only work but are scalable and efficient.",
            bio_text_2: "When I'm not coding in Java or configuring Linux kernels, I'm studying formal methods and new technologies to sharpen my toolkit.",
            skills_title: "Tech Stack",
            timeline_title: "My Journey",
            btn_cv: "Download CV",
            timeline: {
               title: "My Journey",
               edu_1_date: "2021 - 2024",
               edu_1_title: "Computer Science",
               edu_1_desc: "XYZ University - Focus on Algorithms and Data Structures.",

               work_1_date: "2023 - 2024",
               work_1_title: "Operating Systems Studies",
               work_1_desc: "Development of Linux kernel modules and schedulers (SSTF).",

               work_2_date: "2024 - Present", // <--- Change to 'Present'
               work_2_title: "Full Stack Developer",
               work_2_desc: "Building modern web apps with React, TypeScript and Java.",
            }
         },
      }
   }
};

i18n
   .use(LanguageDetector)
   .use(initReactI18next)
   .init({
      resources,
      fallbackLng: 'pt',
      interpolation: {
         escapeValue: false
      }
   });

export default i18n;