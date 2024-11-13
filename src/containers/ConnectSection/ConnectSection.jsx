import React, { useEffect, useRef } from 'react'
import './connectsection.css'
import { ConnectSectionData } from '../../constants/constants'

function ConnectSection() {
    const label1Ref = useRef(null);
    const label2Ref = useRef(null);

    useEffect(() => {
        const label1 = label1Ref.current;
        const label2 = label2Ref.current;

        const handleMouseEnterLabel1 = () => {
            label1.style.color = '#3F8AE2';
            label2.style.color = '#1A1A1A';
        };
        const handleMouseEnterLabel2 = () => {
            label1.style.color = '#3F8AE2';
            label2.style.color = '#1A1A1A';
        };

        const handleMouseLeaveLabel1 = () => {
            label1.style.color = 'transparent';
            label2.style.color = 'transparent';
        };
        const handleMouseLeaveLabel2 = () => {
            label1.style.color = 'transparent';
            label2.style.color = 'transparent';
        };

        label1.addEventListener('mouseenter', handleMouseEnterLabel1);
        label1.addEventListener('mouseleave', handleMouseLeaveLabel1);
        label2.addEventListener('mouseenter', handleMouseEnterLabel2);
        label2.addEventListener('mouseleave', handleMouseLeaveLabel2);

        return () => {
            label1.removeEventListener('mouseenter', handleMouseEnterLabel1);
            label1.removeEventListener('mouseleave', handleMouseLeaveLabel1);
            label2.removeEventListener('mouseenter', handleMouseEnterLabel2);
            label2.removeEventListener('mouseleave', handleMouseLeaveLabel2);
        };
    }, []);
    return (
        <div id="connectwithme-container" className='connectwithme-container'>
            <p className='connectwithme-h'>CONNECT WITH ME</p>
            <p className='connectwithme-c1'>Are you looking for the <label style={{color:"#3F8AE2", fontWeight:"500"}}>perfect design</label>?</p>
            <p className='connectwithme-c2'>Then you’re in the right place. Get the best designs you’re looking for.<br></br> Just <label style={{color:"#3F8AE2", fontWeight:"500"}}>reach out </label>and let me know!</p>
            <p className='image-square-frame-always connectwithme-email'><span></span>{ConnectSectionData.email}</p>
            <p className='connectwithme-phone'><label ref={label1Ref} className='cwm-phone-label-1'>{ConnectSectionData.phone_conutry_code}&nbsp;</label><label ref={label2Ref} className='cwm-phone-label-2'>{ConnectSectionData.phone}</label></p>
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
