import React from 'react';
import './WhyAdveco.css'; // Importing custom CSS for additional styling
import { useInView } from 'react-intersection-observer';

const WhyAdveco = () => {
  // Using the useInView hook to detect when the section is in view
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger when 10% of the section is visible
    triggerOnce: true, // Only trigger once
  });

  return (
    <div>
      <header className="whyadveco-header-section mb-5">
        <div className="whyadveco-background-image-wrapper">
          <img
            src="https://framerusercontent.com/images/VMqYCAZxAPYfUIwArC5EjIIs0Cw.jpg?scale-down-to=4096"
            alt="Why Adveco Background"
            className="whyadveco-background-image0"
          />
        </div>
        <div className="whyadveco-text-content mt-5">
          <h1 className="whyadveco-framer-tex fw-bold">Why Adveco?</h1>
          <h1 className="whyadveco-framer-text">
            <span className="whyadveco-highlighted-text">Bridging the Gaps</span>
            <br />
            <span className="whyadveco-highlighted-text">in Learning and Collaboration</span>
          </h1>
          <h2 className="whyadveco-framer-subtext">
            Education is undergoing a crisis of relevance and accessibility. Traditional systems focus on individual, siloed learning, often neglecting the collaborative, real-world problem-solving skills required in today’s dynamic workplaces.
          </h2>
        </div>
      </header>

      <section className="whyadveco-framer-container mt-5 p-5">
        <div className={`whyadveco-framer-section ${inView ? 'whyadveco-fade-in' : 'whyadveco-fade-out'}`} ref={ref}>
          <h2>.</h2>
          <p>A lack of meaningful engagement and purpose in their learning journeys.</p>
        </div>
        <div className={`whyadveco-framer-section ${inView ? 'whyadveco-fade-in' : 'whyadveco-fade-out'}`} ref={ref}>
          <h2>..</h2>
          <p>Limited access to peer-to-peer networks for collaboration and growth.</p>
        </div>
        <div className={`whyadveco-framer-section ${inView ? 'whyadveco-fade-in' : 'whyadveco-fade-out'}`} ref={ref}>
          <h2>…</h2>
          <p>A disconnect between theoretical knowledge and practical application.</p>
        </div>
      </section>

      <section className="whyadveco-header-section0 justify-content-center">
        <div className="whyadveco-background-image-wrapper">
          <img
            decoding="async"
            sizes="100vw"
            srcSet="https://framerusercontent.com/images/VMqYCAZxAPYfUIwArC5EjIIs0Cw.jpg?scale-down-to=512 512w, https://framerusercontent.com/images/VMqYCAZxAPYfUIwArC5EjIIs0Cw.jpg?scale-down-to=1024 1024w, https://framerusercontent.com/images/VMqYCAZxAPYfUIwArC5EjIIs0Cw.jpg?scale-down-to=2048 2048w, https://framerusercontent.com/images/VMqYCAZxAPYfUIwArC5EjIIs0Cw.jpg?scale-down-to=4096 4096w, https://framerusercontent.com/images/VMqYCAZxAPYfUIwArC5EjIIs0Cw.jpg 6000w"
            src="https://framerusercontent.com/images/VMqYCAZxAPYfUIwArC5EjIIs0Cw.jpg?scale-down-to=4096"
            alt="Background"
            className="whyadveco-background-image"
          />
        </div>

        <div className="whyadveco-text-content justify-content-center">
          <h1 className="justify-content-center">
            This disconnect creates barriers to innovation, leaves learners unmotivated, and deprives them of the skills they need to thrive in a fast-evolving world.{' '}
            <span className="whyadveco-highlighted-text">AdVantage Ecosystem</span> was built to solve these challenges by integrating neuroscience-backed approaches into community-driven platforms.
          </h1>
        </div>

        <div className="whyadveco-overlay"></div>
      </section>

      <div className="container mb-5" style={{ display: 'flex', width: '100%', padding: '20px' }}>
        <div className="whyadveco-content" style={{ display: 'flex', flexDirection: 'column', gap: '15px', maxWidth: '600px' }}>
        <h1
  className="whyadveco-framer-text custom-heading mt-5 mb-5"
  style={{
    '--font-selector': 'R0Y7SW50ZXItNzAw',
    '--framer-font-family': '"Inter", "Inter Placeholder", sans-serif',
    '--framer-font-size': '64px',
    '--framer-font-weight': '700',
    '--framer-letter-spacing': '-2px',
    '--framer-text-alignment': 'left',
    '--framer-text-color': 'rgb(51, 51, 51)',
    textAlign: 'left', // Align text to the left
    color: 'rgb(51, 51, 51)', // Set the text color
  }}
>
  <span
    data-text-fill="true"
    style={{
      backgroundImage:
        'conic-gradient(from 0deg at 13.3% 14%, rgb(1, 33, 53) 0deg, rgba(51, 51, 51, 0) 360deg)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent', // Make the text color transparent to show the gradient
    }}
  >
    The Science Behind <br />the Advantage <br />by Adveco
  </span>
</h1>

          <div className="whyadveco-bookmark curiosity mt-2" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px', transition: 'transform 0.2s' }}>
            <img src="https://framerusercontent.com/images/wUNWTcJELo79eQ9lb3q3VK8Es.png" alt="Curiosity" style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '10px' }} />
            <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'rgb(0, 17, 34)', margin: 0 }}>Curiosity</h3>
            <p style={{ fontSize: '12px', fontWeight: 500, color: 'rgb(102, 102, 102)', margin: 0 }}>Discover the joy of learning through immediate rewards.</p>
          </div>

          <div className="whyadveco-bookmark mastery mt-2" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px', transition: 'transform 0.2s' }}>
            <img src="https://framerusercontent.com/images/FHKw6PtyVB7V9lbNjqIKXYuy0X4.png" alt="Master" style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '10px' }} />
            <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'rgb(0, 17, 34)', margin: 0 }}>Mastery</h3>
            <p style={{ fontSize: '12px', fontWeight: 500, color: 'rgb(102, 102, 102)', margin: 0 }}>Progress step by step toward meaningful skills.</p>
          </div>

          <div className="whyadveco-bookmark autonomy mt-2" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px', transition: 'transform 0.2s' }}>
            <img src="https://framerusercontent.com/images/17TDGrRhSu6NF1FNZ9y5pJH7l0.png" alt="Autonomy" style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '10px' }} />
            <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'rgb(0, 17, 34)', margin: 0 }}>Autonomy</h3>
            <p style={{ fontSize: '12px', fontWeight: 500, color: 'rgb(102, 102, 102)', margin: 0 }}>Take control of your path and goals.</p>
          </div>

          <div className="whyadveco-bookmark purpose mt-2" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px', transition: 'transform 0.2s' }}>
            <img src="https://framerusercontent.com/images/PIDLQsKb4BB6ZjNQwHaj0F7Uqw.png" alt="Purpose" style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '10px' }} />
            <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'rgb(0, 17, 34)', margin: 0 }}>Purpose</h3>
            <p style={{ fontSize: '12px', fontWeight: 500, color: 'rgb(102, 102, 102)', margin: 0 }}>Find deeper meaning in your achievements.</p>
          </div>
        </div>
      </div>

      <div className="whyadveco-pivot-container">
        <div className="whyadveco-wrapper">
          <div className="whyadveco-heading-container">
            <h2 className="whyadveco-heading-text">Curious?</h2>
          </div>
          <div className="whyadveco-button-container">
            <button className="whyadveco-btn-white rounded-5">Let's Talk</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyAdveco;