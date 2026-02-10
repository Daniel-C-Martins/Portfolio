import { useEffect, useState } from 'react';

export function TerminalWindow() {
  const [text, setText] = useState('');

  const fullText = "Initializing system...\n[OK] Infrastructure: Cloud & Linux environment ready.\n[OK] Backend: Clean Architecture & API services active.\n[OK] Frontend: React & Interactive UI loaded.\n[OK] AI Integration: Machine Learning models initialized.\n> Hello, I'm Daniel.\n> Building scalable, intelligent full-stack solutions.";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 30);

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
        <span className="text-blue-400">daniel@portfolio:~$</span> ./start-profile.sh<br />
        {text}
        <span className="animate-pulse">_</span>
      </div>
    </div>
  );
}