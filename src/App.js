
import React, {Fragment} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/login";
import CrearCuenta from "./pages/auth/CrearCuenta";
import Home from "./pages/home";
import Home2 from "./pages/home2";
import VisualizarProd from "./pages/productosCliente/visualizarProd";
import CompraProd from "./pages/productosCliente/CompraProd";
import VisualizarPedidos from "./pages/pedidos/visualizarPedidos";
import EditarPedido from "./pages/pedidos/editarPedidos";
import ProyectosAdmin from "./pages/tiendas/ProyectosAdmin";
import ProyectosCrear from "./pages/tiendas/ProyectosCrear";
import ProyectosEditar from "./pages/tiendas/ProyectosEditar";
import TareasEditar from "./pages/tiendas/TareasEditar";
import TareasAdmin from "./pages/tiendas/TareasAdmin";
import TareasCrear from "./pages/tiendas/TareasCrear";
import CrearCuentaAdmin from "./pages/auth/CrearCuentaAdmin";
import VisualizarCategorias from "./pages/Categorias/visualizarCategorias";
import EditarCategoria from "./pages/Categorias/editarCategoria";
import CrearCategoria from "./pages/Categorias/crearCategoria";







function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" exact element={<Login/>}/>
          <Route path="/crear-cuenta" exact element={<CrearCuenta/>}/>
          <Route path="/crear-cuentaAdmin" exact element={<CrearCuentaAdmin/>}/>
          <Route path="/home" exact element={<Home/>}/>
          <Route path="/home2" exact element={<Home2/>}/>
          <Route path="/proyectos-admin" exact element={<ProyectosAdmin/>}/>
          <Route path="/proyectos-crear" exact element={<ProyectosCrear/>}/>
          <Route path="/proyectos-editar/:idTienda" exact element={<ProyectosEditar/>}/>
          <Route path="/tareas-admin/:idProyecto" exact element={<TareasAdmin/>}/>
          <Route path="/tareas-crear/:idProyecto" exact element={<TareasCrear/>}/>
          <Route path="/tareas-editar/:idProyecto" exact element={<TareasEditar/>}/>
          <Route path="/visualizar-prod" exact element={<VisualizarProd/>}/>
          <Route path="/visualizar-pedidos" exact element={<VisualizarPedidos/>}/>
          <Route path="/editar-pedido/:idPedido" exact element={<EditarPedido/>}/>
          <Route path="/compra/:idVenta" exact element={<CompraProd/>}/>
          <Route path="/visualizar-categorias" exact element={<VisualizarCategorias/>}/>
          <Route path="/crear-categoria" exact element={<CrearCategoria/>}/>
          <Route path="/editar-categoria/:idCategoria" exact element={<EditarCategoria/>}/>
          
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
