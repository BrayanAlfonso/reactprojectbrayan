import { Link } from "react-router-dom";
import ContentHeader from "../components/ContentHeader";
import Navbar from "../components/Navbar";
import SidebarContainerClie from "../components/SidebarContainerClie";
import Footer from "../components/Footer";
import APIInvoke from "../utils/APIInvoke";
import { useEffect, useState } from "react";

const Home2 = () => {
    const [tiendas, setTiendas] = useState([]);

    const cargarTiendas = async () => {
        try {
            var response = await APIInvoke.invokeGET(`/tiendas`);
            console.log('Respuesta de la API:', response); // Verifica la respuesta de la API

            if (Array.isArray(response) && response.length > 0) {
                setTiendas(response);
            } else {
                console.error('La respuesta de la API no contiene categorias.');
            }
        } catch (error) {
            console.error('Error al cargar los categorias:', error);
        }
    };

    useEffect(() => {
        cargarTiendas();
    }, []);


    return (
        <div className="wrapper">
            <Navbar></Navbar>
            <SidebarContainerClie></SidebarContainerClie>
            <div className="content-wrapper">

                <ContentHeader
                    titulo={"Dashboard"}
                    breadCrumb1={"Inicio"}
                    breadCrumb2={"Dashboard"}
                    ruta1={"/home2"}
                />
                <section className="content">
                    <div className="container-fluid">
                        <div className="row">

        

                        {tiendas.map((item, index) => {
                                const colorClasses = ['bg-success','bg-light', 'bg-danger', 'bg-warning' ];
                                const currentColorClass = colorClasses[index % colorClasses.length];

                                return (
                                    <div key={index} className={`col-lg- col-6 `}>
                                        <div className={`small-box ${currentColorClass}`}>
                                            <div className="inner">
                                                <h3>{item.nombre}</h3>
                                                <p>&nbsp;</p>
                                            </div>
                                            <div className="icon">
                                                <i className="fas fa-shopping-bag"></i>
                                            </div>
                                            <Link to={`/visualizar-prod/${item.id}@${item.nombre}`} className="small-box-footer">
                                                Ver {item.nombre}<i className="fas fa-arrow-circle-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                );
                            })}


                        </div>
                    </div>
                </section>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Home2;