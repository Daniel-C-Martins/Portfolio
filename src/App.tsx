import { HashRouter, Routes, Route } from 'react-router-dom';
import { DefaultLayout } from '@/layouts/DefaultLayout';
import { Home } from '@/pages/Home/Home';
import { Projects } from '@/pages/Projects/Projects';
import { About } from '@/pages/About/About';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Route>

      </Routes>
    </HashRouter>
  );
}

export default App;