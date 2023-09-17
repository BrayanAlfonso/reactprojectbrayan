import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import APIInvoke from '../../utils/APIInvoke';



const Login =() =>{


    //Para redireccionar un componente a otro
    const navigate= useNavigate();

    
    //Definimos el estado inicial de las variables
    const [usuario, setUsuario]= useState({
        email: '',
        password: ''
    });

    const {email,password}=usuario;

    const onchange = (e)=>{
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    useEffect(()=>{
        document.getElementById("email").focus();
    },[]) 


    const iniciarSesion = async ()=>{

        const verificarExistenciaUsuario = async (email, password) => {
            try {
                const response = await APIInvoke.invokeGET(
                    `/usuario?email=${email}&password=${password}`

                );
                if (response && response.length > 0) {
                    return true; // El usuario ya existe
                }
                return false; // El usuario no existe
            } catch (error) {
                console.error(error);
                return false; // Maneja el error si la solicitud falla
            }
        };

        if (password.length<6){
            const msg= "La contraseña debe ser de al menos 6 caracteres.";
            swal({
                title: 'Error',
                text: msg,
                icon: 'error',
                buttons: {
                    confirm:{
                        text: 'Ok',
                        value: true,
                        visible: true,
                        className: 'btn btn-danger',
                        closeModal: true
                    }
                }
            });
        }else{

            const usuarioExistente = await verificarExistenciaUsuario(email, password);

            if (!usuarioExistente){
                const msg= "No fue posible iniciar sesión, verifique los datos ingresados.";
                swal({
                    title: 'Error',
                    text: msg,
                    icon: 'error',
                    buttons: {
                        confirm:{
                            text: 'Ok',
                            value: true,
                            visible: true,
                            className: 'btn btn-danger',
                            closeModal: true
                        }
                    }
                });
            }else{
                navigate("/home")
            }
    
        }
    }
    const onSubmit = (e)=>{
        e.preventDefault();
        iniciarSesion()
    }

    return ( 
    <div className="hold-transition login-page">
        <div className="login-box">
        <div className="login-logo">
        <Link to="#"><b>Iniciar</b>sesión</Link>
        </div>

        <div className="card">
            <div className="card-body login-card-body">
            <p className="login-box-msg">Bienvenido, ingrese sus credenciales</p>
            <form onSubmit={onSubmit}>
                <div className="input-group mb-3">
                <input type="email" className="form-control" placeholder="Email" id="email" name="email" value={email} onChange={onchange} required />
                <div className="input-group-append">
                    <div className="input-group-text">
                        <span className="fas fa-envelope" />
                    </div>
                </div>
            </div>
            <div className="input-group mb-3">
                <input type="password" className="form-control" placeholder="Contraseña" id="password" name="password" value={password} onChange={onchange} required/>
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
            
            <div className="social-auth-links text-center mb-3">

                <button type="submit" className="btn btn-block btn-primary">
                Iniciar sesión
                </button>
                <Link to="/crear-cuenta" className="btn btn-block btn-danger">
                Crear cuenta
                </Link>
            </div>
            </form>
            </div>

        </div>
    </div>

    </div>
);
}

export default Login;