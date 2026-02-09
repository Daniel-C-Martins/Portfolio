import { useTranslation } from 'react-i18next';
import { 
  Github, 
  ExternalLink, 
  FolderGit2, 
  GraduationCap, 
  User, 
  Briefcase 
} from 'lucide-react';
import type { Project } from '@/types/Project';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useTranslation();

  const typeConfig = {
    academic: {
      icon: <GraduationCap size={14} />,
      label: t('project_types.academic'),
      styles: "bg-purple-600/90 text-white shadow-purple-500/20"
    },
    personal: {
      icon: <User size={14} />,
      label: t('project_types.personal'),
      styles: "bg-green-600/90 text-white shadow-green-500/20"
    },
    professional: {
      icon: <Briefcase size={14} />,
      label: t('project_types.professional'),
      styles: "bg-blue-600/90 text-white shadow-blue-500/20"
    }
  };

  const currentType = typeConfig[project.type];

  const handleLiveDemoClick = (e: React.MouseEvent) => {
    e.preventDefault(); 
    e.stopPropagation(); 
    if (project.deployLink) {
      window.open(project.deployLink, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <a 
      href={project.repoLink}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 flex flex-col h-full relative cursor-pointer"
    >
      
      {/* Container da Imagem */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={t(project.titleKey)} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* BADGE DE TIPO */}
        <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-2 backdrop-blur-sm z-10 ${currentType.styles}`}>
           {currentType.icon}
           <span>{currentType.label}</span>
        </div>

        {/* Overlay Escuro (Agora com ícone do Github para indicar clique) */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Github className="text-white w-10 h-10 drop-shadow-lg transform scale-90 group-hover:scale-100 transition-transform" />
        </div>
      </div>

      {/* Conteúdo do Card */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
            <div>
                {/* Categorias */}
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1 block">
                    {project.categories.join(' • ')} 
                </span>
                
                {/* Título */}
                <h3 className="text-xl font-bold text-zinc-100 group-hover:text-blue-500 transition-colors">
                    {t(project.titleKey)} 
                </h3>
            </div>
            {/* Ícone de Pasta */}
            <FolderGit2 className="text-zinc-600 group-hover:text-blue-500 transition-colors" size={24} />
        </div>

        {/* Descrição */}
        <p className="text-zinc-400 mb-6 flex-grow text-sm leading-relaxed">
          {t(project.descriptionKey)}
        </p>

        {/* Tags de Tecnologias */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techs.map((tech) => (
            <span 
              key={tech} 
              className="px-2 py-1 text-xs font-medium text-zinc-300 bg-zinc-800/50 rounded-md border border-zinc-700"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Rodapé */}
        {project.deployLink && (
          <div className="mt-auto pt-4 border-t border-zinc-800/50 flex justify-end">
            <button
              onClick={handleLiveDemoClick}
              className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors hover:underline decoration-blue-500 underline-offset-4 z-20"
            >
              <ExternalLink size={16} /> Live Demo
            </button>
          </div>
        )}
      </div>
    </a>
  );
}