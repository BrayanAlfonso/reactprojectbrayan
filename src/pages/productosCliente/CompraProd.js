import { useNavigate, useParams } from "react-router-dom";
import ContentHeader from "../../components/ContentHeader";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import SidebarContainerClie from "../../components/SidebarContainerClie";
import { useEffect, useState } from "react";
import APIInvoke from "../../utils/APIInvoke";
import swal from "sweetalert";




const CompraProd = () => {

    const navigate = useNavigate();

const { idVenta } = useParams();
let arreglo = idVenta.split('@')
const idProducto= arreglo[0]
const nombreProducto = arreglo[1]
const idTienda = arreglo[2]
const nombreTienda = arreglo[3]

const tituloPag = `Formulario de compra`


const [venta, setVentas] = useState({
    idP: idProducto,
    nombreProd:nombreProducto,
    nombre:'',
    direccion:'',
    telefono:''
})

const { nombre, direccion, telefono } = venta;

useEffect(() => {
    document.getElementById("nombre").focus();
}, [])

const onChange = (e) => {
    setVentas({
        ...venta,
        [e.target.name]: e.target.value
    })

}
const realizarVenta = async () => {
    let arreglo = idVenta.split('@')
    const idProducto= arreglo[0]

    const data = {
        idP: idProducto,
        nombreProd:nombreProducto,
        nombre:venta.nombre,
        direccion:venta.direccion,
        telefono:venta.telefono
    }

    console.log(data)
    const response = await APIInvoke.invokePOST(`/ventas`, data);
    const idV = response.id;

    if (idV===""){
        const msg = "No se pudo realizar la venta";
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
}else{
    navigate("/home2")
    const msg = "La compra se ha realizado satisfactoriamente";
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

    setVentas({
        idP: idProducto,
        nombreProd:nombreProducto,
        nombre:'',
        direccion:'',
        telefono:''
    })
    }
}

const onSubmit = (e) => {
    e.preventDefault();
    realizarVenta()
}
    return ( 
        <div className="wrapper">
            <Navbar></Navbar>
            <SidebarContainerClie></SidebarContainerClie>
            <div className="content-wrapper">

                <ContentHeader
                    titulo={tituloPag}
                    breadCrumb1={"Formulario compras"}
                    breadCrumb2={"Edición"}
                    ruta1={`/visualizar-prod/${idTienda}@${nombreTienda}`}
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
                                        <input type="text" className="form-control" id="nombre" name="nombre" placeholder="Ingrese su nombre" value={nombre} onChange={onChange} required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="tienda">Direccion:</label>
                                        <input type="text" className="form-control" id="direccion" name="direccion" placeholder="Ingrese la direccion" value={direccion} onChange={onChange} required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="categoria">Telefono:</label>
                                        <input type="text" className="form-control" id="telefono" name="telefono" placeholder="Ingrese su número de telefono" value={telefono} onChange={onChange} required />
                                    </div>

                                </div>

                                <div className="card-footer">
                                    <button type="submit" className="btn btn-primary">comprar</button>
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
 
export default CompraProd;