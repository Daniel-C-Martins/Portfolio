import { useEffect, useState } from 'react';

export function TerminalWindow() {
   const [text, setText] = useState('');
   const fullText = "Initializing system...\nLoading kernel modules...\n> Hello, I'm Daniel.\n> I build robust backends & scalable systems.";

   useEffect(() => {
      let index = 0;
      const interval = setInterval(() => {
         setText(fullText.slice(0, index));
         index++;
         if (index > fullText.length) clearInterval(interval);
      }, 50); // Velocidade da digitação

      return () => clearInterval(interval);
   }, []);

   return (
      <div className="w-full max-w-lg mx-auto bg-zinc-900 rounded-lg shadow-2xl overflow-hidden border border-zinc-800 font-mono text-sm">
         {/* Barra de Título */}
         <div className="bg-zinc-800 px-4 py-2 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <div className="ml-2 text-zinc-500 text-xs">bash — 80x24</div>
         </div>

         {/* Corpo do Terminal */}
         <div className="p-4 h-64 text-green-400 bg-zinc-950/90 whitespace-pre-line">
            <span className="text-blue-400">user@portfolio:~$</span> ./start-profile.sh<br />
            {text}
            <span className="animate-pulse">_</span>
         </div>
      </div>
   );
}