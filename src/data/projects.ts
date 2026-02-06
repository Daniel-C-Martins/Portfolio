import type { Project } from '@/types/Project';
import tfredes from "@/assets/tfredes.png";
import nhac from "@/assets/nhac.png";
import sniffer from "@/assets/sniffer.png";
import graph from "@/assets/graph.svg";
import matriz from "@/assets/matriz.png";
import portfolio from "@/assets/portfolio.png";
import app_manager from "@/assets/app_manager.png";

export const projectsData: Project[] = [
   {
      id: 1,
      titleKey: "projects_data.curriculum_matrix.title",
      descriptionKey: "projects_data.curriculum_matrix.description",
      techs: ["React", "TypeScript", "Java Spring Boot", "Clean Architecture", "Docker", "MySQL"],
      categories: ["Full Stack"],
      type: "professional",
      repoLink: "https://github.com/Daniel-C-Martins/Matriz-Curricular",
      image: matriz,
   },
   {
      id: 2,
      titleKey: "projects_data.gobblet_ai.title",
      descriptionKey: "projects_data.gobblet_ai.description",
      techs: ["Python", "Minimax Algorithm", "Alpha-Beta Pruning", "Tkinter (GUI)"],
      categories: ["Systems"],
      type: "academic",
      repoLink: "https://github.com/Daniel-C-Martins/Nhac-Nhac_Smart_Agent.git",
      image: nhac,
   },
   {
      id: 6,
      titleKey: "projects_data.portfolio_v2.title",
      descriptionKey: "projects_data.portfolio_v2.description",
      techs: ["React", "TypeScript", "Tailwind CSS", "i18n", "Vite"],
      categories: ["Frontend"],
      type: "personal",
      repoLink: "https://github.com/Daniel-C-Martins/Portfolio.git",
      image: portfolio,
   },
   {
      id: 7,
      titleKey: "projects_data.app_subscriptions.title",
      descriptionKey: "projects_data.app_subscriptions.description",
      techs: ["Java 17", "Spring Boot", "Clean Architecture", "JPA/Hibernate", "MySQL"],
      categories: ["Backend", "Systems"],
      type: "academic",
      repoLink: "https://github.com/Daniel-C-Martins/App_Store_Subscription_Manager.git",
      image: app_manager
   },
   {
      id: 3,
      titleKey: "projects_data.sniffer.title",
      descriptionKey: "projects_data.sniffer.description",
      techs: ["C", "Python", "Raw Sockets", "Linux TUN/TAP", "Tkinter"],
      categories: ["Systems", "Infrastructure"],
      type: "academic",
      repoLink: "https://github.com/Daniel-C-Martins/Network_Sniffer.git",
      image: sniffer,
   },
   {
      id: 5,
      titleKey: "projects_data.router_sim.title",
      descriptionKey: "projects_data.router_sim.description",
      techs: ["Python", "UDP Sockets", "Threading", "Mutex/Lock"],
      categories: ["Systems", "Infrastructure"],
      type: "academic",
      repoLink: "https://github.com/Daniel-C-Martins/Network_Router_Simulator.git",
      image: tfredes,
   },
   {
      id: 4,
      titleKey: "projects_data.box_nesting.title",
      descriptionKey: "projects_data.box_nesting.description",
      techs: ["Python", "Graph Theory", "DAG", "Topological Sort", "Complexity Analysis"],
      categories: ["Systems"],
      type: "academic",
      repoLink: "https://github.com/Daniel-C-Martins/Box_Stacking_Challenge.git",
      image: graph,
   },


];