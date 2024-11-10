import React from "react";
import "./spotlight.css";
import { spotlightdata } from "../../constants/constants";
import buttonlogo1 from '../../assets/Spotlight/blackdownload_spotlight.svg';
import buttonlogo2 from '../../assets/Spotlight/whitearrow_spotlight.svg';
import { Hellotextloop, Logos_spotlight, Namecomponent, Rolescomponent} from "../../components";

import spotlightlogo1 from '../../assets/Spotlight/randomlogo_spotlight1.svg'
import spotlightlogo2 from '../../assets/Spotlight/randomlogo_spotlight2.svg'
import spotlightlogo3 from '../../assets/Spotlight/randomlogo_spotlight3.svg'
import spotlightlogo4 from '../../assets/Spotlight/randomlogo_spotlight4.svg'
import spotlightlogo5 from '../../assets/Spotlight/randomlogo_spotlight5.svg'



function Spotlight(){
    let x=1;
    return (
        <div className="spotlight">
            <Logos_spotlight/>
            <div className="half-rectangle-left-container">
                <div className="half-rectangle-left">
                </div>
            </div>
            <div className="half-rectangle-topright-container">
                <div className="half-rectangle-topright">
                </div>
            </div>
            <div className="helloloopcontainer">
                    <Hellotextloop/>
            </div>
            <div className="nc-container">
                    <Namecomponent/>
            </div>
            <div className="button-overall-container1">
                <div className="leftrightlinediv1">
                    <a href="https://drive.google.com/file/d/1Y1e33xAm5bVx9mffl4vmJYleyFL1k_5V/view" target='_blank'>
                        <div className="downloadbutton">
                            <p style={{margin:"0px",}}>DOWNLOAD CV</p>
                            <img src={buttonlogo1} alt="downloadlogo" />
                        </div>
                    </a>
                </div>
                <div className="leftrightlinediv1">
                    <a href="">
                        <div className="contactbutton">
                            <p style={{margin:"0px",}}>CONTACT ME</p>
                            <img src={buttonlogo2} alt="contactlogo" />
                        </div>
                    </a>
                </div>
            </div>
            <div className="rc-container">
                <Rolescomponent/>
            </div>
        </div>
    );
}

export default Spotlight;

