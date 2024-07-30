import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Inicio from './Pages/Inicio';

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inicio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
