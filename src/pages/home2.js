import { Link } from "react-router-dom";
import ContentHeader from "../components/ContentHeader";
import Navbar from "../components/Navbar";
import SidebarContainerClie from "../components/SidebarContainerClie";
import Footer from "../components/Footer";

const Home2 = () => {
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
                        <div className="col-lg- col-6">
                            <div className="small-box bg-success">
                                <div className="inner">
                                    <h3>Productos</h3>
                                    <p>&nbsp;</p>
                                </div>
                                <div className="icon">
                                    <i className="fas fa-shopping-bag"></i>
                                </div>
                                <Link to={"/visualizar-prod"} className="small-box-footer">Ver productos<i className="fas fa-arrow-circle-right"></i></Link>
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
 
export default Home2;