
import { Link } from "react-router-dom";
import React, {useState, useEffect} from "react";

const CrearCuenta = () =>{

    const[usuario, setUsuario] = useState({
        nombre:'',
        email:'',
        password:'',
        confirmar:''
    })
    
    const {nombre,email,password,confirmar}=usuario;
    const onChange=(e) =>{
        setUsuario(
        {
            [e.target.name]:e.target.value
            
        }
        )}
    
    useEffect(() =>{
        document.getElementById("nombre").focus();
    }, [])
    
    const onSubmit=(e)=>{
        e.preventDefault()
    }

    return(
<div className="hold-transition login-page">
    <div className="login-box">
    <div className="login-logo">
    <Link to="#"><b>Crear</b> cuenta</Link>
    </div>

    <div className="card">
        <div className="card-body login-card-body">
        <p className="login-box-msg">Bienvenido, ingrese sus credenciales</p>
        <form onSubmit={onSubmit}>

        <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Nombre" id="nombre" name="nombre" value={nombre} onChange={onChange} required/>
            <div className="input-group-append">
                <div className="input-group-text">
                    <span className="fa-solid fa-user" />
                    
                </div>
            </div>
        </div>

        <div className="input-group mb-3">
            <input type="email" className="form-control" placeholder="Email" id="email" name="email" value={email} onChange={onChange} required/>
            <div className="input-group-append">
                <div className="input-group-text">
                    <span className="fas fa-envelope" />
                </div>
            </div>
        </div>
        <div className="input-group mb-3">
            <input type="password" className="form-control" placeholder="Contraseña" id="password" name="password" value={password} onChange={onChange} required/>
            <div className="input-group-append">
                <div className="input-group-text">
                    <span className="fa-solid fa-unlock" /> 
                </div>
            </div>
        </div>
        <div className="input-group mb-3">
            <input type="password" className="form-control" placeholder="Confirmar Contraseña" id="password" name="password" value={confirmar} onChange={onChange} required/>
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

