import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Card, Button } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import './Home.css'; // Import CSS for styling

const Home = () => {
  const [openIndex, setOpenIndex] = useState(null);
  
  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is AdVantage Ecosystem?",
      answer: "The AdVantage Ecosystem is a comprehensive platform designed to help individuals and organizations grow and achieve their goals with advanced tools and resources."
    },
    {
      question: "Who can join AdVantage Ecosystem?",
      answer: "Anyone who is interested in learning and growth can join the AdVantage Ecosystem, whether you are an individual, a business, or an educational institution."
    },
    {
      question: "What is the difference between free and premium plans?",
      answer: "The free plan provides basic access to resources, while the premium plan offers additional advanced tools and exclusive content for members who require more support and features."
    },
    {
      question: "How is AdVantage different from traditional learning platforms?",
      answer: "Unlike traditional platforms, AdVantage uses a neuroscience-backed approach to learning, focusing on motivation, collaboration, and gamification to drive engagement and long-term growth."
    }
  ];

  // Animation effect for sections
  const [refSupported, inViewSupported] = useInView({ threshold: 0.1 });
  const [refCoreServices, inViewCoreServices] = useInView({ threshold: 0.1 });
  const [refAdvantage, inViewAdvantage] = useInView({ threshold: 0.1 });
  const [refFAQ, inViewFAQ] = useInView({ threshold: 0.1 });

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        {/* Hero Background Video */}
        <div className="hero-background">
          <video
            src="https://framerusercontent.com/assets/3uPpbSDXaMPWaJEnfLey2ZpJ3c.mp4"
            autoPlay
            loop
            muted
            className="hero-video"
          />
        </div>

        {/* Hero Content */}
        <div className="hero-content">
          <h4 className="hero-subheading">
            Empowering Learning Through <br />
            Community, Curiosity, and Collaboration.
          </h4>

          <h1 className="hero-heading">
            Unlock your potential with our <br />
            Neuroscience-backed approach.
          </h1>

          <h4 className="hero-description">
            Transform how you learn, connect, and grow. Adveco Ecosystem offers innovative tools designed to fuel motivation, foster collaboration, and revolutionize education.
          </h4>

          {/* Hero Buttons */}
          <div className="hero-buttons">
            <a href="/products-tools" className="hero-btn explore-btn">
              Explore Adveco
            </a>
            <a href="/whyadveco" className="hero-btn learn-btn">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Supported by Section */}
      <section className={`supported-by bg-white py-5 ${inViewSupported ? 'fade-in' : 'fade-out'}`} ref={refSupported}>
        <Container>
          <div className="text-center mb-4">
            <h2 className="framer-text" style={{ fontSize: '32px', fontWeight: 700, letterSpacing: '-2.1px', color: 'rgb(0, 17, 34)' }}>
              Supported by
            </h2>
          </div>
          <div className="d-flex flex-wrap justify-content-around justify-content-center align items-center gap-10 p-3" style={{ rowGap: '8px' }}>
            {[
              "https://framerusercontent.com/images/4QejhIsRhW71mJmCJEKw6a9TY4.svg",
              "https://framerusercontent.com/images/CWqGtDm9EQTDipBqsXBaWlVAMco.svg",
              "https://framerusercontent.com/images/6NyPoRtR9EM4Cr7Niv7dFFCkEH8.png?scale-down-to=512",
              "https://framerusercontent.com/images/O7VfDpSfBLtaH2y3Qv8VYNesXA.png",
              "https://framerusercontent.com/images/OOhQfNR7w3IsxZkLflVmj6XvVAk.png",
              "https://framerusercontent.com/images/I1CwhObHU5NpX8tn88zmdeY31M.png",
            ].map((image, index) => (
              <div key={index} style={{ flex: '0 0 auto', width: '100px', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img decoding="async" src={image} alt={`Supported by ${index + 1}`} style={{ width: '70%', height: '70%', objectFit: 'contain', borderRadius: 'inherit' }} />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Core Services Section */}
      <section className={`core-services py-5 ${inViewCoreServices ? 'fade-in' : 'fade-out'}`} ref={refCoreServices} style={{ backgroundColor: '#fff' }}>
        <Container>
          <div className="text-center mb-4">
            <p className="core-heading">Core Offerings</p>
          </div>
          <Row className="gy-4">
            {/* Card 1: Community Spaces */}
            <Col xs={12} md={4}>
              <div className="service-card">
                <div className="image-container">
                  <img src="https://framerusercontent.com/images/DnnzmlNClYRqsEf7xwWWwVQQFRk.jpg?scale-down-to-1024" alt="Community Spaces" className="service-image" />
                </div>
                <div className="content-container">
                  <h3 className="card-title">Community Spaces</h3>
                  <p className="card-description">Discover vibrant communities that foster peer connections, networking, and shared knowledge. Community Spaces provide a social hub for learners to interact, collaborate, and grow together in meaningful ways.</p>
                  <a href="/products-tools" className="custom-button">Join Community</a>
                </div>
              </div>
            </Col>

            {/* Card 2: Microcampus Platform */}
            <Col xs={12} md={4}>
              <div className="service-card">
                <div className="image-container">
                  <img src="https://framerusercontent.com/images/U556Zr9ySyBIwrKhO304cic8OI.jpg?scale-down-to-1024" alt="Microcampus Platform" className="service-image" />
                </div>
                <div className="content-container">
                  <h3 className="card-title">Microcampus Platform</h3>
                  <p className="card-description">Immerse yourself in collaborative spaces designed for experiential learning. Set clear goals, tackle challenges, and thrive in feedback-driven environments that keep you motivated and aligned with your learning objectives.</p>
                  <a href="/products-tools" className="custom-button">Start a Collaborative Space</a>
                </div>
              </div>
            </Col>

            {/* Card 3: Quest Lab */}
            <Col xs={12} md={4}>
              <div className="service-card">
                <div className="image-container">
                  <img src="https://framerusercontent.com/images/rObpmbP7nGyCP4OhYUOqgSn5lj0.jpg?scale-down-to-1024" alt="Quest Lab" className="service-image" />
                </div>
                <div className="content-container">
                  <h3 className="card-title">Quest Lab</h3>
                  <p className="card-description">Engage in gamified, tool-based learning experiences to master real-world skills. Quest Labs leverages neuroscience-backed challenges to make learning interactive, fun, and deeply engaging for sustained motivation.</p>
                  <a href="/products-tools" className="custom-button">Explore Quest Labs</a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Advantage Section */}
      <section className={`advantage-section ${inViewAdvantage ? 'fade-in' : 'fade-out'}`} ref={refAdvantage}>
        <div className="advantage-wrapper advantage-section">
          <div className="advantage-content">
            <h2 className="advantage-heading">AdVantage by Adveco today.</h2>
          </div>
          <div className="advantage-buttons">
            <a href="#" className="advantage-btn learn-more">Learn More</a>
            <a href="#" className="advantage-btn begin-quest">Begin a Quest</a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`faq-section ${inViewFAQ ? 'fade-in' : 'fade-out'}`} ref={refFAQ}>
        <Container>
          <div className="faq-title">
            <h2>FAQs</h2>
          </div>
          <Row>
            {faqData.map((faq, index) => (
              <Col xs={12} key={index} className="faq-item-wrapper">
                <div className={`faq-item ${openIndex === index ? "active" : ""}`} onClick={() => toggleAnswer(index)}>
                  <div className="faq-question">
                    <div className="faq-plus-icon">
                      <div className="horizontal-line"></div>
                      <div className={`vertical-line ${openIndex === index ? "open" : ""}`}></div>
                    </div>
                    <p className="faq-question-text">{faq.question}</p>
                  </div>
                  {openIndex === index && (
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
                {index !== faqData.length - 1 && <div className="faq-divider"></div>}
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;