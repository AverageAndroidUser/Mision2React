import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Barra from './componentes/barra/Barra'
import Home from './componentes/home/Home'
import ModeloER from './componentes/modeloER/ModeloER'
import Pruebas from './componentes/listado/Pruebas'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Barra></Barra>
        <Routes>
          <Route path = "/Home" element = {<Home></Home>}></Route>
          <Route path = "/ModeloER" element = {<ModeloER></ModeloER>}></Route>
          <Route path = "/Pruebas" element = {<Pruebas></Pruebas>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
