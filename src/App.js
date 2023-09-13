
import React, {Fragment} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/login";
import CrearCuenta from "./pages/auth/CrearCuenta";
import Home from "./pages/home";
import ProyectosAdmin from "./pages/proyectos/ProyectosAdmin";




function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" exact element={<Login/>}/>
          <Route path="/crear-cuenta" exact element={<CrearCuenta/>}/>
          <Route path="/home" exact element={<Home/>}/>
          <Route path="/proyectos-admin" exact element={<ProyectosAdmin/>}/>
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
