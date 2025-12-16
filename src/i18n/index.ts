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
            bio_title: "Engenharia de Software & Pesquisa",
            bio_text_1: "Atuo na interseção entre Engenharia de Software e Pesquisa (P&D). Meu foco não é apenas escrever código, mas desenhar arquiteturas sustentáveis (DDD, Clean Arch) que suportam a evolução do produto.",
            bio_text_2: "Tenho experiência sólida no desenvolvimento Backend (Java/Python) e uma paixão por transformar dados em inteligência utilizando Machine Learning. Valorizo processos ágeis (Kanban) e o ambiente Linux como base para produtividade.",
            skills_title: "Arsenal Tecnológico",
            btn_cv: "Baixar Currículo",

            timeline: {
               title: "Minha Jornada",
               work_4_date: "2025 - Presente",
               work_4_title: "Pesquisador de P&D (Dell/PUCRS)",
               work_4_title_short: "P&D Dell",
               work_4_desc: "Atuação no Centro de Inovação em projetos de Pesquisa & Desenvolvimento. Foco em criar soluções tecnológicas inovadoras alinhando demandas da indústria com rigor acadêmico.",

               work_3_date: "2024 - 2025",
               work_3_title: "Bolsista PET-Informática (PUCRS)",
               work_3_desc: "Membro do Programa de Educação Tutorial. Atuei no tripé universitário (ensino, pesquisa e extensão), organizando eventos técnicos e mentorando alunos iniciantes.",

               work_2_date: "2023 - 2024",
               work_2_title: "Aprofundamento Técnico (Alura)",
               work_2_desc: "Imersão em stack moderna. Conclusão de formações intensivas em ecossistema Java (Spring), Frontend (React) e Arquitetura de Software.",

               edu_1_date: "2023 - Presente",
               edu_1_title: "Ciência da Computação (PUCRS)",
               edu_1_desc: "Graduando com bolsa integral por mérito acadêmico. Foco em fundamentos da computação, algoritmos avançados e sistemas operacionais.",
            }
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
            bio_title: "Software Engineering & Research",
            bio_text_1: "I work at the intersection of Software Engineering and Research (R&D). My focus is not just writing code, but designing sustainable architectures (DDD, Clean Arch) that support product evolution.",
            bio_text_2: "I have solid experience in Backend development (Java/Python) and a passion for turning data into intelligence using Machine Learning. I value agile processes (Kanban) and the Linux environment as a productivity baseline.",
            skills_title: "Tech Stack",
            btn_cv: "Download CV",

            timeline: {
               title: "My Journey",

               work_4_date: "2025 - Present",
               work_4_title: "R&D Researcher (Dell/PUCRS)",
               work_4_desc: "Working at the Innovation Center on Research & Development projects. Focus on creating innovative technological solutions aligning industry demands with academic rigor.",

               work_3_date: "2024 - 2025",
               work_3_title: "PET-Informatics Scholar (PUCRS)",
               work_3_desc: "Member of the Tutorial Education Program. Worked on teaching, research, and community outreach, organizing technical events and mentoring freshmen.",

               work_2_date: "2023 - 2024",
               work_2_title: "Technical Specialization (Alura)",
               work_2_desc: "Deep dive into modern stack. Completed intensive tracks in Java ecosystem (Spring), Frontend (React), and Software Architecture.",

               edu_1_date: "2023 - Present",
               edu_1_title: "B.S. in Computer Science (PUCRS)",
               edu_1_desc: "Full scholarship student based on academic merit. Focus on computer science fundamentals, advanced algorithms, and operating systems.",
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