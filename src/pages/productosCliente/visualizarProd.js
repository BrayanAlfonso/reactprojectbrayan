import { Link, useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import swal from "sweetalert";
import Navbar from "../../components/Navbar";
import SidebarContainerClie from "../../components/SidebarContainerClie";
import ContentHeader from "../../components/ContentHeader";
import APIInvoke from "../../utils/APIInvoke";
import { useEffect, useState } from "react";

const VisualizarProd = () => {
    const [productos, setproductos] = useState([]);



    const cargarProductos = async () => {
        try {
            var response = await APIInvoke.invokeGET(`/productos`);
            console.log('Respuesta de la API:', response); // Verifica la respuesta de la API

            if (Array.isArray(response) && response.length > 0) {
                setproductos(response);
            } else {
                console.error('La respuesta de la API no contiene proyectos.');
            }
        } catch (error) {
            console.error('Error al cargar los proyectos:', error);
        }
    };

    useEffect(() => {
        cargarProductos();
    }, []);

    return ( 
        <div className="wrapper">
        <Navbar></Navbar>
        <SidebarContainerClie></SidebarContainerClie>
        <div className="content-wrapper">

            <ContentHeader
                titulo={"Produtos"}
                breadCrumb1={"Listado de productos"}
                breadCrumb2={"productos"}
                ruta1={"/visualizar-prod"}
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
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th style={{ width: '10%' }}>#</th>
                                    <th style={{ width: '25%' }}>Nombre</th>
                                    <th style={{ width: '25%' }}>Precio</th>
                                    <th style={{ width: '10%' }}>Tienda</th>
                                    <th style={{ width: '10%' }}>Categoria</th>
                                    <th style={{ width: '15%' }}>Opciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    productos.map(item =>
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.nombre}</td>
                                            <td>{item.precio}</td>
                                            <td>{item.idT}</td>
                                            <td>{item.idC}</td>
                                            <td>
                                            <Link to={`/compra/${item.id}@${item.nombre}`} className="btn btn-sm btn-primary">Comprar</Link>
                                            </td>
                                        </tr>
                                    )}
                            </tbody>


                        </table>
                    </div>
                </div>

            </section>
        </div>
        <Footer></Footer>
    </div>
     );
}
 
export default VisualizarProd;