import { 
  Terminal, 
  Code2,     
  Layout,     
  Server,     
  Brain,     
  Layers,     
  Coffee,    
  FlaskConical 
} from 'lucide-react';

const techs = [
  { name: "Java & Spring", icon: <Coffee size={20} /> },
  { name: "Python & Django", icon: <Code2 size={20} /> },
  { name: "Machine Learning", icon: <Brain size={20} /> },
  { name: "Linux", icon: <Terminal size={20} /> },
  { name: "Architecture", icon: <Layers size={20} /> },
  { name: "React & TypeScript", icon: <Layout size={20} /> },
  { name: "Research (R&D)", icon: <FlaskConical size={20} /> },
  { name: "DevOps & Docker", icon: <Server size={20} /> },
];

export function TechMarquee() {
  return (
    <div className="w-full overflow-hidden bg-zinc-900/50 border-y border-zinc-800 py-6 mt-20">
      <div className="flex animate-infinite-scroll w-[200%]">
        {[...techs, ...techs].map((tech, index) => (
          <div key={index} className="flex items-center gap-2 mx-8 text-zinc-400 font-medium whitespace-nowrap">
            {tech.icon}
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}