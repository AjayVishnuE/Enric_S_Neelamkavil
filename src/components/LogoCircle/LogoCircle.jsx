import React from 'react'
import "./Logocircle.css"

import logo1 from '../../assets/Spotlight/logo_figma.png'; 
import logo2 from '../../assets/Spotlight/logo_framer.png';    
import logo3 from '../../assets/Spotlight/logo_photoshop.png';
import logo4 from '../../assets/Spotlight/logo_sketch.png';
import logo5 from '../../assets/Spotlight/logo_webflow.png';

export default function LogoCircle() {
  return (
    <div className="logo-carousel23">
      {[logo1, logo2, logo3, logo4, logo5].map((logo, index) => (
        <div key={index} className="logo" style={{ '--i': index }}>
          <img src={logo} alt={`Logo ${index + 1}`} />
        </div>
      ))}

    </div>
  )
}
