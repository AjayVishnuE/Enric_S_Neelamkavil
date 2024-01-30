import React from "react";
import "./navbar.css";
import {navdataset} from "../../constants/constants";

function Navbar(){
    return (
        <div className="navbar">
            <div className="navbar-items-container">
                {
                    navdataset.map((item) => {
                        return(
                            <div className="navbar-items">   
                                <h1 id="nav-text" className="navbar-item-1" >{item}</h1>
                            </div>
                        )
                    })  
                }
            </div>
        </div>
    );
}

export default Navbar;