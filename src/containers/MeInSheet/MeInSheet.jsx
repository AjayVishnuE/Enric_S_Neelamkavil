import React from 'react'
import './meinsheet.css'
import resume from '../../assets/MeInSheet/resume.svg'
import { Resume1 } from '../../constants/constants'

function MeInSheet() {
  return (
    <div className='meinsheet-overall-container'>
        <p className='meinsheet-h'>ME IN A SHEET</p>
        <Resume1/>
        <div className='dnld-btn'>
            <p>DOWNLOAD MY RESUME</p>
            <svg style={{marginTop:"-2px"}} xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 21 20" fill="none">
                <path d="M19.4184 13V17C19.4184 17.5304 19.2077 18.0391 18.8326 18.4142C18.4575 18.7893 17.9488 19 17.4184 19H3.41837C2.88793 19 2.37922 18.7893 2.00415 18.4142C1.62908 18.0391 1.41837 17.5304 1.41837 17V13M5.41837 8L10.4184 13M10.4184 13L15.4184 8M10.4184 13V1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
    </div>
  )
}

export default MeInSheet
