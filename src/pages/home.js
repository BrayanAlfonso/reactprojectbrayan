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
                                    <h3>Proyectos</h3>
                                    <p>&nbsp;</p>
                                </div>
                                <div className="icon">
                                    <i className="fa fa-edit"></i>
                                </div>
                                <Link to={"/proyectos-admin"} className="small-box-footer">Ver proyectos <i className="fas fa-arrow-circle-right"></i></Link>
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