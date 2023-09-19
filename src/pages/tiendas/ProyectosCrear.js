import { useEffect, useState } from "react";
import ContentHeader from "../../components/ContentHeader";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import SidebarContainer from "../../components/SidebarContainer";
import { useNavigate } from "react-router-dom";
import APIInvoke from "../../utils/APIInvoke";
import swal from "sweetalert";

const ProyectosCrear = () => {

    const navigate=useNavigate()

    const [tiendas, setTiendas] = useState({
        nombre:'',
        direccion:''
    })

    const {nombre, direccion}=tiendas;

    useEffect(() => {
        document.getElementById("nombre").focus();
    }, [])

    const onChange=(e)=>{
        setTiendas({
            ...tiendas,
            [e.target.name]:e.target.value
        })

    }

    const crearProyecto = async () =>{
        const data ={
            nombre: tiendas.nombre,
            direccion:tiendas.direccion
        }
        const response = await APIInvoke.invokePOST('/tiendas', data);
        const idProyecto = response.id;

        if (idProyecto===""){
            const msg = "La tienda no fue registrada correctamente";
            swal({
                title: 'Error',
                text: msg,
                icon: 'error',
                buttons: {
                    confirm: {
                        text: 'Ok',
                        value: true,
                        visible: true,
                        className: 'btn btn-danger',
                        closeModal: true
                    }
                }
            });
    }else{
        navigate("/proyectos-admin")
        const msg = "La tienda fue creada correctamente";
        swal({
            title: 'Información',
            text: msg,
            icon: 'success',
            buttons: {
                confirm: {
                    text: 'Ok',
                    value: true,
                    visible: true,
                    className: 'btn btn-primary',
                    closeModal: true
                }
            }
        });

        setTiendas({
            nombre:'',
            direccion:''
        })
    }
    }
    const onSubmit =(e)=>{
        e.preventDefault();
        crearProyecto()
    }


    return (
        <div className="wrapper">
            <Navbar></Navbar>
            <SidebarContainer></SidebarContainer>
            <div className="content-wrapper">

                <ContentHeader
                    titulo={"creación de proyectos"}
                    breadCrumb1={"Listado de proyectos"}
                    breadCrumb2={"creación"}
                    ruta1={"/proyectos-admin"}
                />
                <section className="content">
                    <div className="card">
                        <div className="card-header">
                            <div className="card-tools">
                                <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                                    <i className="fas fa-minus" />
                                </button>
                                <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
                                    <i className="fas fa-times" />
                                </button>
                            </div>
                        </div>
                        <div className="card-body">
                        <form onSubmit={onSubmit} noValidate>
                                <div className="card-body">
                                <div className="form-group">
                                        <label htmlFor="nombre">Nombre:</label>
                                        <input type="text" className="form-control" id="nombre" name="nombre" placeholder="Ingrese el nombre de la tienda" value={nombre} onChange={onChange} required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="nombre">Dirección:</label>
                                        <input type="text" className="form-control" id="direccion" name="direccion" placeholder="Ingrese la direccion de la tienda" value={direccion} onChange={onChange} required/>
                                    </div>

                                </div>
                                
                                <div className="card-footer">
                                    <button type="submit" className="btn btn-primary">crear</button>
                                </div>
                            </form>

                        </div>
                    </div>

                </section>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default ProyectosCrear;