import { ArrowRight } from 'lucide-react';

export function About() {
   return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-950 text-white">
         <h1 className="text-5xl font-bold mb-4 text-blue-500">
            Sobre mim
         </h1>
         <p className="text-xl text-zinc-400 mb-8">
            Meu portfólio está nascendo.
         </p>
         <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition-colors cursor-pointer">
            Ver Projetos <ArrowRight size={20} />
         </button>
      </div>
   );
}