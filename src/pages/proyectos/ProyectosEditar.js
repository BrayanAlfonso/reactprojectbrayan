import { useEffect, useState } from "react";
import ContentHeader from "../../components/ContentHeader";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import SidebarContainer from "../../components/SidebarContainer";
import { useNavigate, useParams } from "react-router-dom";
import APIInvoke from "../../utils/APIInvoke";
import swal from "sweetalert";

const ProtectosEditar = () => {

    const navigate=useNavigate();

    const {idProyecto}=useParams();
    let arreglo = idProyecto.split('@')
    const nombreProyecto = arreglo[1]


    const [proyecto, setProyecto] = useState({
        nombre:nombreProyecto
    })

    const {nombre}=proyecto;

    useEffect(() => {
        document.getElementById("nombre").focus();
    }, [])


    const onChange=(e)=>{
        setProyecto({
            ...proyecto,
            [e.target.name]:e.target.value
        })

    }

    const editarProyecto = async ()=>{
        let arreglo = idProyecto.split('@')
        const idproyecto=arreglo[0];

        const data={
            nombre:proyecto.nombre
        }

        const response = await APIInvoke.invokePUT(`/proyectos/${idproyecto}`,data)
        const idProyectoEditar = response.id;

        if(idProyectoEditar!==idproyecto){

            navigate("/proyectos-admin")
            const msg = "El proyecto fue editado correctamente";
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
        }else{
            const msg = "El proyecto no fue editado correctamente";
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
        }
        
    }

    const onSubmit =(e)=>{
        e.preventDefault();
        editarProyecto();
    }



    return (
        <div className="wrapper">
            <Navbar></Navbar>
            <SidebarContainer></SidebarContainer>
            <div className="content-wrapper">

                <ContentHeader
                    titulo={"Edición de proyectos"}
                    breadCrumb1={"Listado de proyectos"}
                    breadCrumb2={"Edición"}
                    ruta1={"/proyectos-admin"}
                />
                <section className="content">
                    <div className="card">
                        <div className="card-header">
                            <div className="card-tools">
                                <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                                    <i className="fas fa-times" />
                                </button>
                                <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
                                    <i className="fas fa-times" />
                                </button>
                            </div>
                        </div>
                        <div className="card-body">
                            <form  onSubmit={onSubmit} noValidate>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="nombre">Nombre:</label>
                                        <input type="text" className="form-control" id="nombre" name="nombre" placeholder="Ingrese el nombre del proyecto" value={nombre} onChange={onChange} required />
                                    </div>

                                </div>

                                <div className="card-footer">
                                    <button type="submit" className="btn btn-primary">Editar</button>
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

export default ProtectosEditar;