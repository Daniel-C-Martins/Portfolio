import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DefaultLayout } from '@/layouts/DefaultLayout'; 
import { Home } from '@/pages/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;