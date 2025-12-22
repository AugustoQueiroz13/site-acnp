import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// Importando as páginas
import Home from './pages/Home';
import Historia from './pages/Historia';
import Cursos from './pages/Cursos';
import Parcerias from './pages/Parcerias';
import Projetos from './pages/Projetos';
import Contato from './pages/Contato';

// Importando Componentes Fixos
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        {/* Menu fixo no topo */}
        <Navbar />

        {/* Conteúdo das Páginas */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/historia" element={<Historia />} />
            <Route path="/cursos" element={<Cursos />} />
            <Route path="/parcerias" element={<Parcerias />} />
            <Route path="/projetos" element={<Projetos />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </main>

        {/* Rodapé Global */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;