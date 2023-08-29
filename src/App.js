
import React, {Fragment} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/login";
import CrearCuenta from "./pages/auth/CrearCuenta";


function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" exact element={<Login/>}/>
          <Route path="/crear-cuenta" exact element={<CrearCuenta/>}/>
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
