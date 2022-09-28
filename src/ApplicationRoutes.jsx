import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Menu from "./components/Menu/Menu"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Contato from "./pages/Contato/Contato"
import Comentarios from "./pages/Comentarios/Comentarios"
import Footer from "./components/Footer/Footer"

function ApplicationRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/comentarios" element={<Comentarios />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default ApplicationRoutes
