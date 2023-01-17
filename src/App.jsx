import Nav from "./components/Nav"
import Projetos from './components/Projetos'
import Perfil from './components/Perfil'
import Contato from './components/Contato'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Projetos />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </>
  )
}

export default App
