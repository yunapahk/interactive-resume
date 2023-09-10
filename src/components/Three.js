import { Parallax } from 'react-parallax';

const Three = () => {
    return (
        <div style={{ height: '200vh' }}>
            <Parallax y={[-40, 40]} tagouter="figure">
                <h1>Education</h1>
            </Parallax>
        </div>
    )
}

export default Three;
