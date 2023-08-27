import React from "react";
import { Link } from "react-router-dom";



const Login =() =>{
    return ( 
<div className="hold-transition login-page">
    <div className="login-box">
    <div className="login-logo">
    <Link to="#"><b>Iniciar</b>sesión</Link>
    </div>

    <div className="card">
        <div className="card-body login-card-body">
        <p className="login-box-msg">Bienvenido, ingrese sus credenciales</p>
        <form action="../../index3.html" method="post">
            <div className="input-group mb-3">
            <input type="email" className="form-control" placeholder="Email" />
            <div className="input-group-append">
                <div className="input-group-text">
                    <span className="fas fa-envelope" />
                </div>
            </div>
        </div>
        <div className="input-group mb-3">
            <input type="password" className="form-control" placeholder="Password" />
            <div className="input-group-append">
                <div className="input-group-text">
                    <span className="fas fa-lock" />
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-8">
                <div className="icheck-primary">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">
                    Remember Me
                </label>
                </div>
            </div>

            <div className="col-4">
                <button type="submit" className="btn btn-primary btn-block">Sign In</button>
            </div>
        </div>
        </form>
        <div className="social-auth-links text-center mb-3">
            <p>- OR -</p>
            <Link to="#" className="btn btn-block btn-primary">
            <i className="fab fa-facebook mr-2" /> Sign in using Facebook
            </Link>
            <Link to="#" className="btn btn-block btn-danger">
            <i className="fab fa-google-plus mr-2" /> Sign in using Google+
            </Link>
        </div>

        <p className="mb-1">
            <Link to="#">I forgot my password</Link>
        </p>
        <p className="mb-0">
            <Link to="#" className="text-center">Register a new membership</Link>
        </p>
        </div>

    </div>
</div>

</div>
);
}

export default Login;