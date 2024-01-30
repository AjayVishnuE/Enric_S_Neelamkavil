import React from "react";
import "./rolescomponent.css";
import bottomlogo1 from '../../assets/blackpointer_spotlight.svg';
import bottomlogo2 from '../../assets/blackbeam_spotlight.svg';
import bottomlogo3 from '../../assets/black4sidedvector_spotlight.svg';
import bottomlogo4 from '../../assets/blackhand_spotlight.svg';

function Rolescomponent(){
    return (
        <div className="rolescomponent-container">
            <h1 className="rolestitle">UI Design</h1>
            <img className="rolesimg" src={bottomlogo1} alt="" />
            <h1 className="rolestitle">Graphic Design</h1>
            <img className="rolesimg" src={bottomlogo2} alt="" />
            <h1 className="rolestitle">UX Design</h1>
            <img className="rolesimg" src={bottomlogo3} alt="" />
            <h1 className="rolestitle">Logo Design</h1>
            <img className="rolesimg" src={bottomlogo4} alt="" />
            <h1 className="rolestitle">Brand Identity Design</h1>
        </div>
    );
}

export default Rolescomponent;