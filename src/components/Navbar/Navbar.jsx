import React from "react";
import "./navbar.css";
import {navdataset} from "../../constants/constants";

function Navbar(){
    const redirectsec=["#spotlight", "#whoami-overall-container", "#FigmaUIContainer", "#resumesection-overall-container", "#connectwithme-container"]
    return (
        <div className="navbar">
            <div className="navbar-items-container">
                {
                    navdataset.map((item,index) => {
                        return(
                            <div className="navbar-items">   
                                <a href={redirectsec[index]}>
                                    <h1 id="nav-text" className="navbar-item-1" >{item}</h1>
                                </a>
                            </div>
                        )
                    })  
                }
            </div>
        </div>
    );
}

export default Navbar;