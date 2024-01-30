import React, { useEffect, useRef, useState } from 'react';
import HelloTextLoop from '../Hellotextloop/Hellotextloop'; 
import './WrapperStyle.css'; 

const AdjustableBorderWrapper = () => {
    const wrapperRef = useRef(null);
    const [contentSize, setContentSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const resizeObserver = new ResizeObserver(entries => {
            for (let entry of entries) {
                setContentSize({
                    width: entry.contentRect.width,
                    height: entry.contentRect.height
                });
            }
        });

        if (wrapperRef.current) {
            resizeObserver.observe(wrapperRef.current);
        }

        return () => {
            resizeObserver.disconnect();
        };
    }, []);

    return (
        <div className="border-wrapper" style={{ width: contentSize.width, height: contentSize.height }}>
            <div ref={wrapperRef}>
                <HelloTextLoop />
            </div>
        </div>
    );
};

export default AdjustableBorderWrapper;
