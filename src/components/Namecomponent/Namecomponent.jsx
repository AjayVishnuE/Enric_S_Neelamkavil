import React from 'react';
import "./namecomponent.css"
import {spotlightdata} from "../../constants/constants"

function Namecomponent(){
    return(
        <div class="myDiv">
            <span></span>
            <h1 className='text'>
                I'm&nbsp;
                <label className='namestyles'>{spotlightdata.name}</label>,
                <br/>
                <label className='descstyles'>{spotlightdata.desription}</label>
            </h1>
        </div>
    )
}

export default Namecomponent;