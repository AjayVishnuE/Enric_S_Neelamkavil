import React, { useRef, useEffect } from 'react';
import './logocarousel.css';
import {images} from "../../constants/constants";

import BH1 from "../../assets/orglogoslider/aproit.svg";
import BH2 from '../../assets/orglogoslider/cce.svg';
import BH3 from '../../assets/orglogoslider/cholaart.svg';
import BH4 from '../../assets/orglogoslider/houndelect.svg';
import BH5 from '../../assets/orglogoslider/opengrad.svg';
import BH6 from '../../assets/orglogoslider/sarahstechno.svg';
import BH7 from '../../assets/orglogoslider/unnathi.svg';
import BH8 from '../../assets/orglogoslider/µLearn.svg';

function LogoCarousel() {
    const duplicatedImages = [...images, ...images, ...images];
    const slideTrackRef = useRef(null);

    useEffect(() => {
        const slideTrack = slideTrackRef.current;
        let animationDuration = 30; 
        const resizeObserver = new ResizeObserver(entries => {
            for (let entry of entries) {
                const crWidth = entry.contentRect.width;
                const newDuration = crWidth * 0.01;
                slideTrack.style.animationDuration = `${newDuration}s`;
            }
        });

        resizeObserver.observe(slideTrack);

        return () => resizeObserver.disconnect();
    }, []);

    return (
        <div className="right-slider">
            <div className="right-slide-track" ref={slideTrackRef}>
                {duplicatedImages.map((src, index) => (
                    <div className="right-slide" key={index}>
                        <img className="slider-imgs" src={src} alt={`Slide ${index}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LogoCarousel;
