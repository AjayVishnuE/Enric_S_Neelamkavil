import React from 'react'
import './connectsection.css'
import { ConnectSectionData } from '../../constants/constants'

function ConnectSection() {
  return (
    <div className='connectwithme-container'>
        <p className='connectwithme-h'>CONNECT WITH ME</p>
        <p className='connectwithme-c1'>Are you looking for the <label style={{color:"#3F8AE2", fontWeight:"500"}}>perfect design</label>?</p>
        <p className='connectwithme-c2'>Then you’re in the right place. Get the best designs you’re looking for. Just <label style={{color:"#3F8AE2", fontWeight:"500"}}>reach out </label>and let me know!</p>
        <p className='image-square-frame connectwithme-email'><span></span>{ConnectSectionData.email}</p>
        <p className='connectwithme-phone'><label className='cwm-phone-label-1'>{ConnectSectionData.phone_conutry_code}&nbsp;</label><label className='cwm-phone-label-2'>{ConnectSectionData.phone}</label></p>
        <div className='connectwithme-logos-container'>
            <a href={ConnectSectionData.linkedin.link}>
                <ConnectSectionData.linkedin.logo/>
            </a>
            <a href={ConnectSectionData.instagram.link}>
                <ConnectSectionData.instagram.logo/>
            </a>
            <a href={ConnectSectionData.medium.link}>
                <ConnectSectionData.medium.logo/>
            </a>
            <a href={ConnectSectionData.faceboook.link}>
                <ConnectSectionData.faceboook.logo/>
            </a>
            <a href={ConnectSectionData.youtube.link}>
                <ConnectSectionData.youtube.logo/>
            </a>
            <a href={ConnectSectionData.x.link}>
                <ConnectSectionData.x.logo/>
            </a>
        </div>
    </div>
  )
}

export default ConnectSection
