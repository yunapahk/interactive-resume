import React, { useState, useEffect } from 'react';

function One() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const calculateDotPosition = () => {
        const stepHeight = 100;
        const stepWidth = 150; 
        const stepsTraveled = Math.floor(scrollY / stepHeight);
        
        const fraction = (scrollY % stepHeight) / stepHeight;
        
        const maxX = stepWidth; 
        const x = fraction * maxX;
        
        const maxY = stepHeight;
        const y = maxY * (4 * fraction * (1 - fraction));
        
        return {
            x: stepsTraveled * stepWidth + x,
            y: stepsTraveled * stepHeight - y
        };
    };
    
    

    const dotPosition = calculateDotPosition();

    return (
        <div>

         <h1>Scroll Down or use the keyboard down key</h1>
            {/* Stair Blocks */}
            <div style={{
                position: 'fixed',
                top: '20%',
                left: '0%',
            }}>
                {[...Array(10)].map((_, index) => (
                    <div key={index} style={{
                        position: 'absolute',
                        left: `${index * 150}px`,
                        top: `${index * 100}px`,
                    }}>
                        <div style={{
                            width: '150px',
                            height: '10px',
                            backgroundColor: 'black',
                        }}></div>
                        <div style={{
                            width: '10px',
                            height: '100px',
                            backgroundColor: 'black',
                            position: 'absolute',
                            top: '10px',
                            left: '140px'
                        }}></div>
                    </div>
                ))}
            </div>
            
           {/* Moving Dot */}
<div style={{
    position: 'fixed',
    top: '18%',
    left: '2%', 
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    backgroundColor: 'black',
    transform: `translate(${dotPosition.x}px, ${dotPosition.y}px)`, 
}}></div>

        </div>
    );
}

export default One;
