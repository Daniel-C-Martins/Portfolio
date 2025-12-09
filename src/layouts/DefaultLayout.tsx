import { Outlet } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';

export function DefaultLayout() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">

      <Navbar />

      <main className="pt-16">
        <Outlet />
      </main>

      <footer className="p-8 border-t border-zinc-800 text-center text-sm text-zinc-500 mt-20">
        &copy; {new Date().getFullYear()} Daniel Campos Martins. Feito com React e Tailwind.
      </footer>
    </div>
  );
}