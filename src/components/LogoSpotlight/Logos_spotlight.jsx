import React from 'react';
import "./Logocircle.css";

import logo1 from '../../assets/Spotlight/logo_figma.png'; 
import logo2 from '../../assets/Spotlight/logo_sketch.png';
import logo3 from '../../assets/Spotlight/logo_framer.png';    
import logo4 from '../../assets/Spotlight/logo_photoshop.png';
import logo5 from '../../assets/Spotlight/logo_webflow.png';
import logo6 from '../../assets/Spotlight/arro_up and down_black.svg';
import logo7 from '../../assets/Spotlight/Frame icon.svg'

export default function LogoCircle() {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];


  return (
    <div className="logo-carousel23">
      {logos.map((logo, index) => (
          <img key={index} className={`logo-item logo-${index + 1}`} src={logo} alt={`Logo ${index + 1}`} />
        ))}
    </div>
  );
}
