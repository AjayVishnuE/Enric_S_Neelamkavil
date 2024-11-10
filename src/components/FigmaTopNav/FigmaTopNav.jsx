import React from 'react';
import './figmatopnav.css';

import { Vector1, Vector2, Vector3, Vector4, Vector5, Vector6, Vector7, Vector8, Vector9, Down_Arrow, PlayButton} from '../../components/FigmaTopNav/imports_ftn';
import { spotlightdata } from '../../constants/constants';

function FigmaTopNav() {
    const imageset = [Vector1, Vector2, Vector3, Vector4, Vector5, Vector6, Vector7, Vector8, Vector9]
    const letterset = ["P", "U", "B", "L", "P"]
    const colorset = ["#FC72FF", "#A259FF", "#0ACF83", "#F11E37", "#3A7DFF"]
    return (
        <div className='figma-top-nav-container'>
            <div className='figma-top-nav-div1'>
                {imageset.map((VectorComponent, index) => (
                    <React.Fragment className="square-1-figma-top-nav" key={index}>
                        <VectorComponent />
                        {index < 4 && <Down_Arrow />}
                    </React.Fragment>
                ))}
            </div>
            <div className='figma-top-nav-div2'>
                <p>{spotlightdata.name}/Portfolio - My Works</p>
                <Down_Arrow/>
            </div>
            <div className='figma-top-nav-div3'>
                {letterset.map((letter, index) => (
                    <div key={index} style={{ backgroundColor: colorset[index] }}>
                        {letter}
                    </div>
                ))}
            </div>
            <div className='figma-top-nav-div4'></div>
        </div>
    )
}

export default FigmaTopNav
