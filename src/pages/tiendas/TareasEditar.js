import { useEffect, useState } from "react";
import ContentHeader from "../../components/ContentHeader";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import SidebarContainer from "../../components/SidebarContainer";
import { useNavigate, useParams } from "react-router-dom";
import APIInvoke from "../../utils/APIInvoke";
import swal from "sweetalert";


const TareasEditar = () => {


    const navigate = useNavigate();

    const { idProyecto } = useParams();
    let arreglo = idProyecto.split('@')
    const idProducto= arreglo[0]
    const nombreProducto = arreglo[1]
    const precioProducto = arreglo[2]
    const idTienda = arreglo[3]
    const idCategoria= arreglo[4]
    const nombreTienda= arreglo[5]
    const tituloPag = `Edición de productos: ${nombreTienda}`


    const [productos, setproductos] = useState({
        nombre: nombreProducto,
        precio:precioProducto,
        idT:idTienda,
        idC:idCategoria
    })

    const { nombre, precio, idC } = productos;

    useEffect(() => {
        document.getElementById("nombre").focus();
    }, [])

    const onChange = (e) => {
        setproductos({
            ...productos,
            [e.target.name]: e.target.value
        })

    }
    const editarTarea = async () => {
        let arreglo = idProyecto.split('@')
        const idProducto= arreglo[0]



        const data = {
            idT: idTienda,
            idC:productos.idC,
            nombre: productos.nombre,
            precio:productos.precio,
            estado: false
        }

        console.log(data)
        const response = await APIInvoke.invokePUT(`/productos/${idProducto}`, data);
        const idTareaEditado = response.id;

        if (idTareaEditado !== idProducto) {
            navigate(`/tareas-admin/${idTienda}@${nombreTienda}`)
            const msg = "La tarea fue editada correctamente";
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

        } else {

            const msg = "La tarea no fue editada correctamente";
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

    const onSubmit = (e) => {
        e.preventDefault();
        editarTarea()
    }

    return ( 
        <div className="wrapper">
            <Navbar></Navbar>
            <SidebarContainer></SidebarContainer>
            <div className="content-wrapper">

                <ContentHeader
                    titulo={tituloPag}
                    breadCrumb1={"Listado de tareas"}
                    breadCrumb2={"Edición"}
                    ruta1={`/tareas-admin/${idTienda}@${nombreTienda}`}
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
                                        <input type="text" className="form-control" id="nombre" name="nombre" placeholder="Ingrese el nombre del producto" value={nombre} onChange={onChange} required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="tienda">Precio:</label>
                                        <input type="text" className="form-control" id="precio" name="precio" placeholder="Ingrese el precio del producto" value={precio} onChange={onChange} required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="categoria">Categoria:</label>
                                        <input type="text" className="form-control" id="categoria" name="idC" placeholder="Ingrese el nombre de la categoria" value={idC} onChange={onChange} required />
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
 
export default TareasEditar;