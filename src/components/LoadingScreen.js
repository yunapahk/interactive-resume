import React, { useEffect, useRef } from 'react';

function Loader() {
    const text1Ref = useRef(null);
    const text2Ref = useRef(null);

    useEffect(() => {
        const elts = {
            text1: text1Ref.current,
            text2: text2Ref.current
        };

        const texts = [
            "",
            "Hello",
            "My name is Yuna Pahk",
            "Welcome to my Interactive Resume",
            "Enjoy :)",
        ];

        const morphTime = 1.5;

        let textIndex = 0;
        let morph = 0;
        let lastTime = 0;

        function easeInOutQuad(t) {
            return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        }

        function setMorph(fraction) {
            const easedFraction = easeInOutQuad(fraction);
            const maxBlur = 2;

            elts.text1.style.filter = `blur(${Math.min(maxBlur * (1 - easedFraction), maxBlur)}px)`;
            elts.text1.style.opacity = `${(1 - easedFraction) * 100}%`;

            elts.text2.style.filter = `blur(${Math.min(maxBlur * easedFraction, maxBlur)}px)`;
            elts.text2.style.opacity = `${easedFraction * 100}%`;
        }

        function animate(currentTime) {
            const deltaTime = (currentTime - lastTime) / 1000;
            lastTime = currentTime;

            const morphRate = 1;
            morph += deltaTime * morphRate;

            if (morph >= morphTime) {
                morph = 0;
                textIndex = (textIndex + 1) % texts.length;
                elts.text1.textContent = texts[textIndex];
                elts.text2.textContent = texts[(textIndex + 1) % texts.length];
            }

            setMorph(morph / morphTime);
            requestAnimationFrame(animate);
        }

        elts.text1.textContent = texts[textIndex];
        elts.text2.textContent = texts[(textIndex + 1) % texts.length];
        requestAnimationFrame(animate);

    }, []);

    return (
        <div style={{ margin: "0px" }}>
            <div id="container" style={{ 
                position: 'absolute',
                margin: 'auto',
                width: '100vw',
                height: '80pt',
                top: 0,
                bottom: 0,
                filter: 'url(#threshold) blur(0.6px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '120vh',
                overflow: 'hidden'
            }}>
                <span id="text1" ref={text1Ref} style={{ 
                    position: 'absolute',
                    width: '100%',
                    display: 'inline-block',
                    fontFamily: 'Arial',
                    fontSize: '80pt',
                    textAlign: 'center',
                    userSelect: 'none',
                    fontSize: '4.5em',
                    margin: '0.5em'
                }}></span>  
                <span id="text2" ref={text2Ref} style={{ 
                    position: 'absolute',
                    width: '100%',
                    display: 'inline-block',
                    fontFamily: '"Raleway", sans-serif',
                    fontSize: '80pt',
                    textAlign: 'center',
                    userSelect: 'none',
                    fontSize: '4.5em',
                    margin: '0.5em'
                }}></span>  
            </div>
    
            <svg id="filters">
                <defs>
                    <filter id="threshold">
                        <feColorMatrix 
                            in="SourceGraphic" 
                            type="matrix" 
                            values="1 0 0 0 0
                                    0 1 0 0 0
                                    0 0 1 0 0
                                    0 0 0 255 -140" 
                        />
                    </filter>
                </defs>
            </svg>
        </div>
    );
}

export default Loader;
