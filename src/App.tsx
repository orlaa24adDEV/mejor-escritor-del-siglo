import { Routes, Route } from 'react-router-dom'
import Header from '@/components/Header'
import Inicio from '@/pages/Inicio'
import Cronologia from '@/pages/Cronologia'
import ObraMaestra from '@/pages/ObraMaestra'
import Reconocimiento from '@/pages/Reconocimiento'
import Manifiesto from '@/pages/Manifiesto'
import RegistroHistorico from '@/pages/RegistroHistorico'
import Correspondencia from '@/pages/Correspondencia'

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/cronologia" element={<Cronologia />} />
          <Route path="/obra-maestra" element={<ObraMaestra />} />
          <Route path="/reconocimiento" element={<Reconocimiento />} />
          <Route path="/manifiesto" element={<Manifiesto />} />
          <Route path="/registro-historico" element={<RegistroHistorico />} />
          <Route path="/correspondencia" element={<Correspondencia />} />
        </Routes>
      </main>
    </>
  )
}

export default App
