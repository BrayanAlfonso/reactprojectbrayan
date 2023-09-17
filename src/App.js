
import React, {Fragment} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/login";
import CrearCuenta from "./pages/auth/CrearCuenta";
import Home from "./pages/home";
import ProyectosAdmin from "./pages/proyectos/ProyectosAdmin";
import ProyectosCrear from "./pages/proyectos/ProyectosCrear";
import ProyectosEditar from "./pages/proyectos/ProyectosEditar";
import TareasAdmin from "./pages/proyectos/TareasAdmin";
import TareasCrear from "./pages/proyectos/TareasCrear";
import TareasEditar from "./pages/proyectos/TareasEditar";




function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" exact element={<Login/>}/>
          <Route path="/crear-cuenta" exact element={<CrearCuenta/>}/>
          <Route path="/home" exact element={<Home/>}/>
          <Route path="/proyectos-admin" exact element={<ProyectosAdmin/>}/>
          <Route path="/proyectos-crear" exact element={<ProyectosCrear/>}/>
          <Route path="/proyectos-editar/:idProyecto" exact element={<ProyectosEditar/>}/>
          <Route path="/tareas-admin/:idProyecto" exact element={<TareasAdmin/>}/>
          <Route path="/tareas-crear/:idProyecto" exact element={<TareasCrear/>}/>
          <Route path="/tareas-editar/:idProyecto" exact element={<TareasEditar/>}/>
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
