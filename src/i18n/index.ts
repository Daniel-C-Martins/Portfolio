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
            router_sim: {
               title: "Simulador de Roteamento Distribuído",
               description: "Sistema que simula uma rede dinâmica via UDP. Realiza descoberta automática de vizinhos, encaminhamento de mensagens (hop-by-hop) e recuperação de falhas, utilizando arquitetura Multithread segura."
            },
            gobblet_ai: {
               title: "IA para Gobblet (Nhac-Nhac)",
               description: "Implementação do jogo de estratégia Gobblet com uma IA adversária desafiadora. Utiliza algoritmos de Teoria dos Jogos (Minimax com Poda Alpha-Beta e Iterative Deepening) e Multithreading para processamento não-bloqueante na interface gráfica."
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
            router_sim: {
               title: "Distributed Routing Simulator",
               description: "System simulating a dynamic network via UDP. Features automatic neighbor discovery, hop-by-hop message forwarding, and fault recovery, utilizing a thread-safe Multithreaded architecture."
            },
            gobblet_ai: {
               title: "Gobblet AI (Tic-Tac-Toe Variant)",
               description: "Strategic Gobblet game implemented with a challenging adversarial AI. Uses Game Theory algorithms (Minimax with Alpha-Beta Pruning and Iterative Deepening) and Multithreading for non-blocking processing in the GUI."
            },
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