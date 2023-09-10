import React, { useState, useEffect } from 'react';
import { Parallax } from 'react-parallax';
import LoadingScreen from './components/LoadingScreen';
import One from './components/One';
import Two from './components/Two';
import Three from './components/Three';
import Four from './components/Four';

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 6000);  

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <LoadingScreen />;
    }

    return (
        <div>
            <Parallax pages={4}>
                <One/>
                <Parallax><Two /></Parallax>
                <Parallax><Three /></Parallax>
                <Parallax><Four /></Parallax>
            </Parallax>
        </div>
    );
}

export default App;
