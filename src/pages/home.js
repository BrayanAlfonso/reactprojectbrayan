import React from "react";

import Navbar from "../components/Navbar";
import SidebarContainer from "../components/SidebarContainer";
import ContentHeader from "../components/ContentHeader";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Home=()=>{
    return(
        <div className="wrapper">
        <Navbar></Navbar>
        <SidebarContainer></SidebarContainer>
        <div className="content-wrapper">
            
            <ContentHeader
                titulo={"Dashboard"}
                breadCrumb1={"Inicio"}
                breadCrumb2={"Dashboard"}
                ruta1={"/home"}
            />
            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                    <div className="col-lg- col-6">
                            <div className="small-box bg-info">
                                <div className="inner">
                                    <h3>Tiendas</h3>
                                    <p>&nbsp;</p>
                                </div>
                                <div className="icon">
                                    <i className="fas fa-store"></i>
                                </div>
                                <Link to={"/proyectos-admin"} className="small-box-footer">Ver tiendas<i className="fas fa-arrow-circle-right"></i></Link>
                            </div>  
                        </div>
                        <div className="col-lg- col-6">
                            <div className="small-box bg-warning">
                                <div className="inner">
                                    <h3>Pedidos</h3>
                                    <p>&nbsp;</p>
                                </div>
                                <div className="icon">
                                    <i className="fas fa-shopping-cart"></i>
                                </div>
                                <Link to={"/visualizar-pedidos"} className="small-box-footer">Ver pedidos<i className="fas fa-arrow-circle-right"></i></Link>
                            </div>  
                        </div>
                        <div className="col-lg- col-6">
                            <div className="small-box bg-light">
                                <div className="inner">
                                    <h3>Admin</h3>
                                    <p>&nbsp;</p>
                                </div>
                                <div className="icon">
                                    <i className="fas fa-user"></i>
                                </div>
                                <Link to={"/crear-cuentaAdmin"} className="small-box-footer">Crear admin<i className="fas fa-arrow-circle-right"></i></Link>
                            </div>  
                        </div>
                        <div className="col-lg- col-6">
                            <div className="small-box bg-secondary">
                                <div className="inner">
                                    <h3>Categoria</h3>
                                    <p>&nbsp;</p>
                                </div>
                                <div className="icon">
                                    <i className="fas fa-tag"></i>
                                </div>
                                <Link to={"/visualizar-categorias"} className="small-box-footer">Crear categoria<i className="fas fa-arrow-circle-right"></i></Link>
                            </div>  
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
        <Footer></Footer>
    </div>
    );
}

export default Home;