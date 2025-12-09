import { 
  Database, Server, Terminal, Code2, Globe, Cpu, Layout, Wifi 
} from 'lucide-react';

const techs = [
  { name: "Java", icon: <Code2 /> },
  { name: "Linux", icon: <Terminal /> },
  { name: "React", icon: <Layout /> },
  { name: "Docker", icon: <Server /> },
  { name: "SQL", icon: <Database /> },
  { name: "Networking", icon: <Wifi /> },
  { name: "Systems", icon: <Cpu /> },
  { name: "Web", icon: <Globe /> },
];

export function TechMarquee() {
  return (
    <div className="w-full overflow-hidden bg-zinc-900/50 border-y border-zinc-800 py-6 mt-20">
      <div className="flex animate-infinite-scroll w-[200%]">
        {/* Renderiza duas vezes para criar o efeito de loop infinito */}
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