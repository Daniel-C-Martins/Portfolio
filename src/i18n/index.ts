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
            welcome: "Olá, sou o Daniel",
            role: "Desenvolvedor Full Stack & Pesquisador",
            description: "Desenvolvedor focado em entregar software escalável, legível e de alta qualidade. Atuo também como pesquisador em Cloud Computing, com forte interesse em Inteligência Artificial.",
            viewProjects: "Ver Portfolio"
         },
         projects: {
            title: "Meus",
            subtitle: "Projetos",
            description: "Uma seleção de trabalhos desenvolvidos em contextos pessoais, acadêmicos e profissionais.",
            empty: "Nenhum projeto encontrado nesta categoria."
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
               description: "Implementação do jogo de estratégia Gobblet com uma IA adversária. Utiliza algoritmos de Teoria dos Jogos (Minimax com Poda Alpha-Beta e Iterative Deepening) e Multithreading para processamento não-bloqueante na interface gráfica."
            },
            sniffer: {
               title: "Monitor de Rede via Túnel (Raw Sockets)",
               description: "Ferramenta de análise de tráfego em tempo real operando sobre uma infraestrutura de tunelamento customizada em C. Utiliza Raw Sockets em Python para interceptar, decodificar (L3-L7) e logar pacotes em uma interface gráfica."
            },
            box_nesting: {
               title: "Algoritmo de Encaixe de Caixas (Grafos)",
               description: "Solução algorítmica para o problema de empilhamento dimensional (Nesting Boxes). Modela restrições como um Grafo Acíclico Dirigido (DAG) e utiliza Ordenação Topológica para encontrar o Caminho Máximo com complexidade O(n²)."
            },
            curriculum_matrix: {
               title: "Matriz Curricular Interativa (PUCRS)",
               description: "Aplicação Full Stack desenvolvida para modernizar a visualização de pré-requisitos acadêmicos. Frontend interativo em React/TypeScript e Backend robusto em Java Spring Boot, arquitetado com Clean Architecture e SOLID."
            },
            portfolio_v2: {
               title: "Portfólio Pessoal Interativo",
               description: "SPA moderna desenvolvida para apresentar minha trajetória. Construída com React, TypeScript e Tailwind CSS, conta com internacionalização completa (i18n), componentes dinâmicos (como o Terminal) e design totalmente responsivo."
            },
            app_subscriptions: {
               title: "Gerenciador de Assinaturas de Apps",
               description: "API robusta para gestão de assinaturas e pagamentos de apps. Arquitetada estritamente com Clean Architecture para isolar Regras de Negócio (Use Cases) de frameworks e banco de dados."
            },
         },
         about_page: {
            title: "Sobre",
            subtitle: "Mim",
            bio_title: "Engenharia de Software & Pesquisa",
            bio_text_1: "Atuo na interseção entre Engenharia de Software e Pesquisa. Meu foco é entregar um trabalho bem feito: priorizo código legível e soluções escaláveis, garantindo que o software seja sustentável e fácil de manter.",
            bio_text_2: "Na academia, sou pesquisador focado em Cloud Computing, com grande interesse em Inteligência Artificial. Tenho experiência sólida em Backend e valorizo o ambiente Linux como base para produtividade.",
            skills_title: "Tecnologias",
            btn_cv: "Baixar Currículo",

            timeline: {
               title: "Minha Jornada",
               work_4_date: "2025 - Presente",
               work_4_title: "Pesquisador de P&D (Dell/PUCRS)",
               work_4_title_short: "P&D Dell",
               work_4_desc: "Atuação no Centro de Inovação em projetos de Pesquisa & Desenvolvimento. Foco em criar soluções tecnológicas inovadoras alinhando demandas da indústria com rigor acadêmico.",

               work_3_date: "2024 - 2025",
               work_3_title: "Bolsista PET-Informática (PUCRS)",
               work_3_desc: "Membro do Programa de Educação Tutorial, atuando no tripé universitário (ensino, pesquisa e extensão). Desenvolvi projetos técnicos, apoiei nos processos seletivos e atuei como pesquisador voluntário no GRIN (Grupo de Redes, Infraestrutura e Computação em Nuvem).",

               work_2_date: "2023 - 2024",
               work_2_title: "Aprofundamento Técnico (Alura)",
               work_2_desc: "Formações intensivas em Java, Python e C. Com foco em consolidar os conceitos da graduação e preencher lacunas técnicas, garantindo uma base de programação sólida.",

               edu_1_date: "2023 - Presente",
               edu_1_title: "Ciência da Computação (PUCRS)",
               edu_1_desc: "Bolsista integral pelo PROUNI, com reconhecimento por Mérito Acadêmico durante a graduação. Focado em consolidar a base da computação: algoritmos, estruturas de dados e teoria de sistemas.",
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
            welcome: "Hello, I'm Daniel.",
            role: "Full Stack Developer & Researcher",
            description: "Developer focused on delivering scalable, readable, and high-quality software. I also work as a researcher in Cloud Computing, with a strong interest in Artificial Intelligence.",
            viewProjects: "View Portfolio"
         },
         projects: {
            title: "My",
            subtitle: "Projects",
            description: "A selection of work developed across personal, academic, and professional contexts.",
            empty: "No projects found in this category."
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
               description: "Strategic Gobblet game implemented with a adversarial AI. Uses Game Theory algorithms (Minimax with Alpha-Beta Pruning and Iterative Deepening) and Multithreading for non-blocking processing in the GUI."
            },
            sniffer: {
               title: "Network Traffic Sniffer (Raw Sockets)",
               description: "Real-time traffic analysis tool running over a custom C tunneling infrastructure. Uses Python Raw Sockets to intercept, decode (L3-L7), and log packets via a graphical interface."
            },
            box_nesting: {
               title: "Box Nesting Algorithm (Graph Theory)",
               description: "Algorithmic solution for the dimensional stacking problem. Models constraints as a Directed Acyclic Graph (DAG) and applies Topological Sort to find the Longest Path with O(n²) complexity."
            },
            curriculum_matrix: {
               title: "Interactive Curriculum Matrix (PUCRS)",
               description: "Full Stack application designed to modernize academic prerequisite visualization. Features an interactive React/TypeScript Frontend and a robust Java Spring Boot Backend, engineered with Clean Architecture and SOLID principles."
            },
            portfolio_v2: {
               title: "Interactive Personal Portfolio",
               description: "Modern SPA designed to showcase my career. Built with React, TypeScript, and Tailwind CSS, featuring full internationalization (i18n), dynamic components (like the Terminal), and fully responsive design."
            },
            app_subscriptions: {
               title: "App Subscription Manager",
               description: "Robust API for app subscription and payment management. Architected strictly with Clean Architecture to isolate Business Rules (Use Cases) from frameworks and databases."
            },

         },
         about_page: {
            title: "About",
            subtitle: "Me",
            bio_title: "Software Engineering & Research",
            bio_text_1: "I work at the intersection of Software Engineering and Research. My focus is on delivering well-crafted work: I prioritize readable code and scalable solutions, ensuring software is sustainable and maintainable.",
            bio_text_2: "In academia, I am a researcher focused on Cloud Computing, with a strong interest in Artificial Intelligence. I have solid Backend experience and value the Linux environment for productivity.",
            skills_title: "Tech Stack",
            btn_cv: "Download CV",

            timeline: {
               title: "My Journey",

               work_4_date: "2025 - Present",
               work_4_title: "R&D Researcher (Dell/PUCRS)",
               work_4_desc: "Working at the Innovation Center on Research & Development projects. Focus on creating innovative technological solutions aligning industry demands with academic rigor.",

               work_3_date: "2024 - 2025",
               work_3_title: "PET-Informatics Scholar (PUCRS)",
               work_3_desc: "Member of the Tutorial Education Program, working on the teaching, research, and extension triad. I developed technical projects, supported selection processes, and served as a volunteer researcher at GRIN (Research Group on Networks, Infrastructure, and Cloud Computing)..",

               work_2_date: "2023 - 2024",
               work_2_title: "Technical Specialization (Alura)",
               work_2_desc: "Intensive coursework in Java, Python, and C. With a focus on consolidating undergraduate concepts and filling technical gaps, ensuring a solid programming foundation.",

               edu_1_date: "2023 - Present",
               edu_1_title: "B.S. in Computer Science (PUCRS)",
               edu_1_desc: "Full PROUNI scholarship recipient, with Academic Merit recognition during the undergraduate program. Focused on consolidating computer science fundamentals: algorithms, data structures, and systems theory.",
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