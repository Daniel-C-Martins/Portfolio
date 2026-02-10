import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { projectsData } from '@/data/projects';
import { ProjectCard } from '@/components/ProjectCard';
import { type Category } from '@/types/Project';

export function Projects() {
   const { t } = useTranslation();
   const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');

   // Filtra os projetos
   const filteredProjects = projectsData.filter(project =>
      activeCategory === 'All' || project.categories.includes(activeCategory)
   );

   const categories: (Category | 'All')[] = ['All', 'Frontend', 'Backend', 'Systems', 'Full Stack', 'Infrastructure', 'Research'];

   return (
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

         {/* Cabeçalho */}
         <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-4">
               {t('projects.title')} <span className="text-blue-500">{t('projects.subtitle')}</span>
            </h1>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
               {t('projects.description')}
            </p>
         </div>

         {/* Botões de Filtro */}
         <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
               <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border cursor-pointer
              ${activeCategory === category
                        ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-500/25'
                        : 'bg-zinc-900 border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-zinc-200'
                     }
            `}
               >
                  {category}
               </button>
            ))}
         </div>

         {/* Grid de Projetos */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
               <ProjectCard key={project.id} project={project} />
            ))}
         </div>

         {/* Empty State (Caso não tenha projetos na categoria) */}
         {filteredProjects.length === 0 && (
            <div className="text-center py-20">
               <p className="text-zinc-500 text-lg">{t('projects.empty')}</p>
            </div>
         )}
      </div>
   );
}