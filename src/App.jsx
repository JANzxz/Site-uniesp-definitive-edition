// Componente pai
// Conteiner e tudo que envolve a pagina
// Ver depois poruqe tem que apagar o import da pagina inicial
// Funcionou porque fiz o roteamento pra o caminho /Inicial que e o componente inicial
// O react Router dom faz o roteamento das paginas
// BrowserRouter: Componente que envolve toda a aplicação e ativa o sistema de rotas.
//Routes: Agrupa todas as rotas da aplicação.
//Route: Define uma rota específica (ex: /noticias).

import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom" /* Brouser route e o elemento pai que vai envolver os outros elementos de roteamento*/
import { Container } from "react-bootstrap"
import Inicial  from "./pages/Inicial"
import CustomNavbar from "./components/CustomNavbar"
import Faculdade from './pages/Faculdade'
import DpoLgpd from './pages/DpoLgpd'
import Noticias from './pages/Noticias'
import Cursos from './pages/Cursos'
import VisualizaNoticia from './pages/VisualizaNoticia'
import './App.css';

const App = () => {
  return (
    <BrowserRouter> {/* habilita o uso de rotas. */}
    <CustomNavbar />
      <Container> {/* Cria um espaço centralizado e com padding (layout responsivo do Bootstrap). */}
        <Routes>
          <Route path="/" element={<Inicial/>}/>
          <Route path="/a-faculdade" element={<Faculdade/>}/>
          <Route path="/dpo-lgpd" element={<DpoLgpd/>}/>
          <Route path="/noticias" element={<Noticias/>}/>
          <Route path="/cursos" element={<Cursos/>}/>
          <Route path="/visualiza-noticia/:id" element={<VisualizaNoticia/>} /> {/* aqui e diferente pq as rotas de noticias mudam de acordo com o id e ele vai pegar isso atravez do usePrams la no VisualizaNoticia */}
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App