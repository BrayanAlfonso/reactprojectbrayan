import React from "react";
import { Link } from "react-router-dom";

const MenuClie=()=>{
    return(

        <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

            <li className="nav-item">
                    <Link to={"/home2"} className="nav-link">
                        <i className="nav-icon fas fa-th" />
                        <p>
                            Inicio
                        </p>
                    </Link>
                </li>


            </ul>
        </nav>

        
    )
}

export default MenuClie;