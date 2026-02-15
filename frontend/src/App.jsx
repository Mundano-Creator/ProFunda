import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import FundacionesLista from './components/FundacionesLista';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/fundaciones" element={<FundacionesLista />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;