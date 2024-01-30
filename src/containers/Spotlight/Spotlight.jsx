import React from "react";
import "./spotlight.css";
import { spotlightdata } from "../../constants/constants";
import buttonlogo1 from '../../assets/blackdownload_spotlight.svg';
import buttonlogo2 from '../../assets/whitearrow_spotlight.svg';
import { Hellotextloop, Namecomponent, Rolescomponent} from "../../components";


function Spotlight(){
    let x=1;
    return (
        <div className="spotlight">
            <Hellotextloop/>
            <Namecomponent/>
            <div className="button-overall-container">
                <a href="https://drive.google.com/file/d/1Y1e33xAm5bVx9mffl4vmJYleyFL1k_5V/view" target='_blank'>
                    <div className="downloadbutton">
                        <p style={{margin:"0px",}}>DOWNLOAD CV</p>
                        <img src={buttonlogo1} alt="downloadlogo" />
                    </div>
                </a>
                <a href="">
                    <div className="contactbutton">
                        <p style={{margin:"0px",}}>CONTACT ME</p>
                        <img src={buttonlogo2} alt="contactlogo" />
                    </div>
                </a>
            </div>
            <Rolescomponent/>
        </div>
    );
}

export default Spotlight;

