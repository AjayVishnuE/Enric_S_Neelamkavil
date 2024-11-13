import React from 'react';
import './figmatopnav.css';

import dp from "../../assets/FigmaUi/enrics_dp.png"
import { Vector1, Vector2, Vector3, Vector4, Vector5, Vector6, Vector7, Vector8, Vector9, Down_Arrow, PlayButton} from '../../components/FigmaTopNav/imports_ftn';
import { FigmaUI_Center, spotlightdata } from '../../constants/constants';

function FigmaTopNav() {
    const imageset = [Vector1, Vector2, Vector3, Vector4, Vector5, Vector6, Vector7, Vector8, Vector9]
    const letterset = FigmaUI_Center.abbreviations
    const colorset = FigmaUI_Center.colorset 
    return (
        <div className='figma-top-nav-container'>
            <div className='figma-top-nav-div1'>
                {imageset.map((VectorComponent, index) => (
                    <div className={`square-1-figma-top-nav square-1-figma-top-nav-${index}`}>
                        <React.Fragment key={index}>
                            <VectorComponent />
                            {index <= 4 && <Down_Arrow />}
                        </React.Fragment>
                    </div>
                ))}
            </div>
            <div className='figma-top-nav-div2'>
                <p><label className='figma-top-nav-div2-l1'>{spotlightdata.name}&nbsp;</label><label style={{fontSize:"20px", color:"#676D7D"}}>/</label><label className='figma-top-nav-div2-l2'>&nbsp;Portfolio - My Works</label></p>
                <div className='figma-top-nav-div2-da'>
                <Down_Arrow/>
                </div>
            </div>
            <div className='figma-top-nav-div3'>
                {letterset.map((letter, index) => (
                    <div className='figma-top-nav-div3-cd' key={index} style={{ backgroundColor: colorset[index] }}>
                        {letter}
                    </div>
                ))}
                <img className='figma-top-nav-div3-cd' src={dp} alt="" />
                <div className='figma-top-nav-div3-sharebutton'>
                    Share
                </div>
                <PlayButton/>
                <div className='figma-top-nav-div3-da1'>
                    <Down_Arrow/>
                </div>
                <p className='figma-top-nav-div3-100'>100%</p>
                <div className='figma-top-nav-div3-da2'>
                    <Down_Arrow/>
                </div>
            </div>
        </div>
    )
}

export default FigmaTopNav
