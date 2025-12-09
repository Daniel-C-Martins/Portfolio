import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DefaultLayout } from '@/layouts/DefaultLayout';
import { Home } from '@/pages/Home/Home';
import { Projects } from '@/pages/Projects/Projects';
import { About } from '@/pages/About/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projetos" element={<Projects />} />
          <Route path="/sobre" element={<About />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;