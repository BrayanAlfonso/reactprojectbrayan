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

    const {idTienda}=useParams();
    let arreglo = idTienda.split('@')
    const nombreTienda= arreglo[1]
    const direccionTIenda= arreglo[2]



    const [tienda, setTIenda] = useState({
        nombre:nombreTienda,
        direccion:direccionTIenda
    })

    const {nombre, direccion}=tienda;

    useEffect(() => {
        document.getElementById("nombre").focus();
    }, [])


    const onChange=(e)=>{
        setTIenda({
            ...tienda,
            [e.target.name]:e.target.value
        })

    }

    const editarTIenda={} = async ()=>{
        let arreglo = idTienda.split('@')
        const idT=arreglo[0];

        const data={
            nombre:tienda.nombre,
            direccion:tienda.direccion
        }

        const response = await APIInvoke.invokePUT(`/tiendas/${idT}`,data)
        const idTiendaEditar = response.id;

        if(idTiendaEditar!==idT){

            navigate("/proyectos-admin")
            const msg = "La tienda fue editada correctamente";
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
            const msg = "La tienda no fue editada correctamente";
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
        editarTIenda();
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
                                    <i className="fas fa-minus" />
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
                                    <div className="form-group">
                                        <label htmlFor="nombre">Dirección:</label>
                                        <input type="text" className="form-control" id="direccion" name="direccion" placeholder="Ingrese su direccion" value={direccion} onChange={onChange} required />
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