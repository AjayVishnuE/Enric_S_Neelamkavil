import React from 'react';
import './figmacenter.css'
import poster from '../../assets/FigmaUi/Posters.png'
import { Arrow1 } from './imports_fc';
import { FigmaUI_Center } from '../../constants/constants';

function FigmaCenter() {
  return (
    <div className='figmacenter-overall-container'>
        <p className='figmacenter-main-h'>PROJECTS WORKED ON</p>
        <div className="figmacenter-first-group">
          {FigmaUI_Center.images.slice(0, 3).map((ImageComponent, index) => (
              <div key={index} className={`fic figmacenter-inside-container-${index}`}>
                  <img className='figmacenter-image' src={FigmaUI_Center.images[index]} alt={`Image ${index}`} /> 
                  <div className={`fdd figmacenter-desc-div-${index}`}>
                      {React.createElement(FigmaUI_Center.arrows[index])}
                      <p className={`figmacenter-text`} style={{ backgroundColor: FigmaUI_Center.colorset[index] }}>{FigmaUI_Center.image_desc[index]}</p>
                  </div>
              </div>
          ))}
        </div>
        <div className="figmacenter-second-group">
            <div className='div-ur'> 
                <p>USER REQU<br></br>-IREMENTS</p>
            </div>
            {FigmaUI_Center.images.slice(3, 4).map((ImageComponent, index) => (
                <div key={index + 3} className={`fic figmacenter-inside-container-${index + 3}`}>
                    <img className='figmacenter-image' src={FigmaUI_Center.images[index+3]} alt={`Image ${index + 3}`} />
                    <div className={`fdd figmacenter-desc-div-${index + 3}`}>
                        {React.createElement(FigmaUI_Center.arrows[index + 3])}
                        <p className={`figmacenter-text`} style={{ backgroundColor: FigmaUI_Center.colorset[index + 3] }}>
                            {FigmaUI_Center.image_desc[index + 3]}
                        </p>
                    </div>
                </div>
            ))}
            <div className='div-ds'> 
                <p>DESIGN SYSTEMS</p>
            </div>
            {FigmaUI_Center.images.slice(4, 5).map((ImageComponent, index) => (
                <div key={index + 4} className={`fic figmacenter-inside-container-${index + 4}`}>
                    <img className='figmacenter-image' src={FigmaUI_Center.images[index+4]} alt={`Image ${index + 4}`} />
                    <div className={`fdd figmacenter-desc-div-${index + 4}`}>
                        {React.createElement(FigmaUI_Center.arrows[index + 4])}
                        <p className={`figmacenter-text`} style={{ backgroundColor: FigmaUI_Center.colorset[index + 4] }}>
                            {FigmaUI_Center.image_desc[index + 4]}
                        </p>
                    </div>
                </div>
            ))}
            <div className='div-dt'> 
                <p>DESIGN THINKING</p>
            </div>
        </div>
    </div>
  )
}

export default FigmaCenter
