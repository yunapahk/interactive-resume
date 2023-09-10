import { Parallax } from 'react-parallax';

const Two = () => {
  return (
    <div style={{ height: '200vh' }}>
      <Parallax y={[-40, 40]} tagouter="figure">
        <h1>About Me</h1>
      </Parallax>
    </div>
  );
};

export default Two;

