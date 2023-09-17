import { useEffect, useState } from "react";
import ContentHeader from "../../components/ContentHeader";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import SidebarContainer from "../../components/SidebarContainer";
import { useNavigate, useParams } from "react-router-dom";
import APIInvoke from "../../utils/APIInvoke";
import swal from "sweetalert";



const TareasCrear = () => {

    const navigate = useNavigate();

    const [tareas, setTareas] = useState({
        nombre: ''
    })

    const { nombre } = tareas;



    const { idProyecto } = useParams();
    let arreglo = idProyecto.split('@')
    const nombreProyecto = arreglo[1]
    const tituloPag = `Creación de tareas: ${nombreProyecto}`


    useEffect(() => {
        document.getElementById("nombre").focus();
    }, [])


    const onChange = (e) => {
        setTareas({
            ...tareas,
            [e.target.name]: e.target.value
        })

    }

    const crearTarea = async () => {
        let arreglo = idProyecto.split('@')
        const idproyecto = arreglo[0]

        const data = {
            idP: idproyecto,
            nombre: tareas.nombre
        }

        const response = await APIInvoke.invokePOST('/tareas', data);
        const idTarea = response.id;

        if (idTarea === '') {
            const msg = "La tarea no fue creada correctamente";
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
        } else {
            navigate(`/tareas-admin/${idProyecto}`)
            const msg = "La tarea fue creada correctamente";
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

        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        crearTarea()
    }

    return (
        <div className="wrapper">
            <Navbar></Navbar>
            <SidebarContainer></SidebarContainer>
            <div className="content-wrapper">

                <ContentHeader
                    titulo={tituloPag}
                    breadCrumb1={"Listado de tareas"}
                    breadCrumb2={"creación"}
                    ruta1={`/tareas-admin/${idProyecto}`}
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
                            <form onSubmit={onSubmit} noValidate>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="nombre">Nombre:</label>
                                        <input type="text" className="form-control" id="nombre" name="nombre" placeholder="Ingrese el nombre de la tarea" value={nombre} onChange={onChange} required />
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

export default TareasCrear;