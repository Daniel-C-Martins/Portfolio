import { Outlet } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';

export function DefaultLayout() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">

      <Navbar />

      <main className="pt-16">
        {/* pt-16 adiciona padding no topo para o conteúdo não ficar escondido atrás da Navbar fixa */}
        <Outlet />
      </main>

      <footer className="p-8 border-t border-zinc-800 text-center text-sm text-zinc-500 mt-20">
        &copy; {new Date().getFullYear()} Seu Nome. Feito com React e Tailwind.
      </footer>
    </div>
  );
}