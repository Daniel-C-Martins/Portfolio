import type { Project } from '@/types/Project';
import tfredes from "@/assets/tfredes.png";

export const projectsData: Project[] = [
   {
      id: 1,
      titleKey: "projects_data.router_sim.title",
      descriptionKey: "projects_data.router_sim.description",
      techs: ["Python", "UDP Sockets", "Threading", "Mutex/Lock"],
      categories: ["Systems", "Backend"],
      type: "academic",
      repoLink: "https://github.com/Daniel-C-Martins/Network_Router_Simulator.git",
      image: tfredes,
   },
   {
      id: 2,
      titleKey: "projects_data.portfolio.title",
      descriptionKey: "projects_data.portfolio.description",
      techs: ["React", "TypeScript", "Tailwind", "i18n"],
      categories: ["Frontend", "Full Stack"],
      type: "personal",
      repoLink: "https://github.com/...",
      deployLink: "https://...",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop"
   }, {
      id: 3,
      titleKey: "projects_data.linux.title",
      descriptionKey: "projects_data.linux.description",
      techs: ["C", "Linux Kernel", "Make"],
      categories: ["Systems", "Backend"],
      type: "academic",
      repoLink: "https://github.com/seu-user/repo",
      image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=1000&auto=format&fit=crop"
   },
   {
      id: 4,
      titleKey: "projects_data.portfolio.title",
      descriptionKey: "projects_data.portfolio.description",
      techs: ["React", "TypeScript", "Tailwind", "i18n"],
      categories: ["Frontend", "Full Stack"],
      type: "personal",
      repoLink: "https://github.com/...",
      deployLink: "https://...",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop"
   },
];