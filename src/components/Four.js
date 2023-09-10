import React from 'react';
import { Parallax } from 'react-parallax';

const Four = () => {
    return (
        <div style={{ height: '200vh '}}>
            <Parallax y ={[-40, 40]} tagouter="figure">
                <h1>Skills</h1>
            </Parallax>
        </div>
    )
}

export default Four;
