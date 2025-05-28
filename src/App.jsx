// Componente pai
// Conteiner e tudo que envolve a pagina
// Ver depois poruqe tem que apagar o import da pagina inicial
// Funcionou porque fiz o roteamento pra o caminho /Inicial que e o componente inicial

import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import Inicial  from "./pages/Inicial"
import CustomNavbar from "./components/CustomNavbar"
import Faculdade from './pages/Faculdade'
import DpoLgpd from './pages/DpoLgpd'
import Noticias from './pages/Noticias'

const App = () => {
  return (
    <BrowserRouter>
    <CustomNavbar />
      <Container>
        <Routes>
          <Route path="/" element={<Inicial/>}/>
          <Route path="/a-faculdade" element={<Faculdade/>}/>
          <Route path="/dpo-lgpd" element={<DpoLgpd/>}/>
          <Route path="/noticias" element={<Noticias/>}/>
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App