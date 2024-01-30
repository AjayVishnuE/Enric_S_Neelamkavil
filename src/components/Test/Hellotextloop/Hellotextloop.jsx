import React, { forwardRef, useState, useEffect } from 'react';
import './hellotextloop.css'; 

const HelloTextLoop = forwardRef((props, ref) => {
    const texts = ["നമസ്ക്കാരം!","HOLA!","HELLO!","வணக்கம்!","नमस्ते!","مرحبًا!"];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fadeState, setFadeState] = useState('fade-in');

    useEffect(() => {
        let timeoutId;

        if (fadeState === 'fade-in') {
            timeoutId = setTimeout(() => {
                setFadeState('fade-out');
            }, 2500); 
        } else {
            
            timeoutId = setTimeout(() => {
                setCurrentIndex(prevIndex => (prevIndex + 1) % texts.length);
                setFadeState('fade-in');
            }, 500);
        }

        return () => clearTimeout(timeoutId);
    }, [fadeState]);

    return (
        <div className={`text-looper ${fadeState}`}>
            <div ref={ref} className="text-content">
                {texts[currentIndex]}
            </div>
        </div>
    );
});
export default HelloTextLoop;
