import React from "react";

import Logo from '../img/LogoOmegaPetShop.PNG';
import { Link } from "react-router-dom";
import MenuClie from "./MenuClie";

const SidebarContainer = () => {

    
return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <Link to={"/home"} className="brand-link">
            <img
                src={Logo}
                alt="AdminLTE Logo"
                className="brand-image img-circle elevation-3"
                style={{ opacity: ".8" }}
            />
            <span className="brand-text font-weight-light">OmegaPetShop</span>
        </Link>
        <div className="sidebar">
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                <div className="info">
                    &nbsp;
                </div>
                <div className="info">
                    <Link to={"/home2"} className="d-block">
                        Menu principal
                    </Link>
                </div>
            </div>

            <MenuClie></MenuClie>
        </div>
    </aside>
);
};

export default SidebarContainer;
