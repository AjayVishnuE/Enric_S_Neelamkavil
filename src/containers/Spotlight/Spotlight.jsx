import React from "react";
import "./spotlight.css";
import { spotlightdata } from "../../constants/constants";
import buttonlogo1 from '../../assets/blackdownload_spotlight.svg';
import buttonlogo2 from '../../assets/whitearrow_spotlight.svg';
import { Hellotextloop, LogoCircle, Namecomponent, Rolescomponent} from "../../components";

import spotlightlogo1 from '../../assets/Spotlight/randomlogo_spotlight1.svg'
import spotlightlogo2 from '../../assets/Spotlight/randomlogo_spotlight2.svg'
import spotlightlogo3 from '../../assets/Spotlight/randomlogo_spotlight3.svg'
import spotlightlogo4 from '../../assets/Spotlight/randomlogo_spotlight4.svg'
import spotlightlogo5 from '../../assets/Spotlight/randomlogo_spotlight5.svg'



function Spotlight(){
    let x=1;
    return (
        <div className="spotlight">
            <div className="leftrightlinediv">
                    <Hellotextloop/>
            </div>
            <div>
                    <Namecomponent/>
            </div>
            <div className="button-overall-container">
                <div className="leftrightlinediv">
                    <a href="https://drive.google.com/file/d/1Y1e33xAm5bVx9mffl4vmJYleyFL1k_5V/view" target='_blank'>
                        <div className="downloadbutton">
                            <p style={{margin:"0px",}}>DOWNLOAD CV</p>
                            <img src={buttonlogo1} alt="downloadlogo" />
                        </div>
                    </a>
                </div>
                <div className="leftrightlinediv">
                    <a href="">
                        <div className="contactbutton">
                            <p style={{margin:"0px",}}>CONTACT ME</p>
                            <img src={buttonlogo2} alt="contactlogo" />
                        </div>
                    </a>
                </div>
            </div>
            <div>
                <Rolescomponent/>
            </div>
        </div>
    );
}

export default Spotlight;

