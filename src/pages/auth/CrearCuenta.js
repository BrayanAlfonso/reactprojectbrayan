import React from "react";
import { Link } from "react-router-dom";

const CrearCuenta = () =>{

    return(
<div className="hold-transition login-page">
    <div className="login-box">
    <div className="login-logo">
    <Link to="#"><b>Crear</b> cuenta</Link>
    </div>

    <div className="card">
        <div className="card-body login-card-body">
        <p className="login-box-msg">Bienvenido, ingrese sus credenciales</p>
        <form action="../../index3.html" method="post">
            <div className="input-group mb-3">
            <input type="email" className="form-control" placeholder="Email" id="email" name="email"/>
            <div className="input-group-append">
                <div className="input-group-text">
                    <span className="fas fa-envelope" />
                </div>
            </div>
        </div>
        <div className="input-group mb-3">
            <input type="password" className="form-control" placeholder="Contraseña" id="password" name="password" />
            <div className="input-group-append">
                <div className="input-group-text">
                    <span className="fas fa-lock" />
                </div>
            </div>
        </div>
        <div className="input-group mb-3">
            <input type="password" className="form-control" placeholder="Confirmar Contraseña" id="password" name="password" />
            <div className="input-group-append">
                <div className="input-group-text">
                    <span className="fas fa-lock" />
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-4">
                <button type="submit" className="btn btn-primary btn-block">Crear</button>
            </div>
        </div>
        
        <div className="social-auth-links text-center mb-3">

            <Link to="/" className="btn btn-block btn-primary">
            Iniciar sesión
            </Link>

        </div>
        </form>
        </div>

    </div>
</div>

</div>
    )
}

export default CrearCuenta;