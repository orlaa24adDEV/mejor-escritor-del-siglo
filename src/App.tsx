import { Routes, Route } from 'react-router-dom'
import Header from '@/components/Header'
import Inicio from '@/pages/Inicio'
import Cronologia from '@/pages/Cronologia'
import Poesia from '@/pages/Poesia'
import Narrativa from '@/pages/Narrativa'
import Reconocimiento from '@/pages/Reconocimiento'
import RegistroHistorico from '@/pages/RegistroHistorico'
import Contacto from '@/pages/Contacto'
import Footer from '@/components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/cronologia" element={<Cronologia />} />
          <Route path="/poesia" element={<Poesia />} />
          <Route path="/narrativa" element={<Narrativa />} />
          <Route path="/reconocimiento" element={<Reconocimiento />} />
          <Route path="/registro-historico" element={<RegistroHistorico />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
