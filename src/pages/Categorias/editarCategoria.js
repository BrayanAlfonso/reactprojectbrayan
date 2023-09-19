import { useEffect, useState } from "react";
import ContentHeader from "../../components/ContentHeader";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import SidebarContainer from "../../components/SidebarContainer";
import { useNavigate, useParams } from "react-router-dom";
import APIInvoke from "../../utils/APIInvoke";
import swal from "sweetalert";

const EditarCategoria = () => {

    const navigate=useNavigate();

    const {idCategoria}=useParams();
    let arreglo = idCategoria.split('@')
    const nombreCategoria= arreglo[1]




    const [categoria, setCategoria] = useState({
        nombre:nombreCategoria
    })

    const {nombre}=categoria;

    useEffect(() => {
        document.getElementById("nombre").focus();
    }, [])


    const onChange=(e)=>{
        setCategoria({
            ...categoria,
            [e.target.name]:e.target.value
        })

    }

    const editarCategoria={} = async ()=>{
        let arreglo = idCategoria.split('@')
        const idC=arreglo[0];

        const data={
            nombre:categoria.nombre
        }

        const response = await APIInvoke.invokePUT(`/categorias/${idC}`,data)
        const idCategoriaEditar = response.id;

        if(idCategoriaEditar!==idC){

            navigate("/visualizar-categorias")
            const msg = "La Categoria fue editada correctamente";
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
            const msg = "La Categoria no fue editada correctamente";
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
        editarCategoria();
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
                                        <input type="text" className="form-control" id="nombre" name="nombre" placeholder="Ingrese el nombre de la Categoria" value={nombre} onChange={onChange} required />
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

export default EditarCategoria;