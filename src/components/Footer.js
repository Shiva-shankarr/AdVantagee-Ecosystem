import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Nav } from 'react-bootstrap';
import './Footer.css';

function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Subscribed with email: ${email}`);
    setEmail('');
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about-us', label: 'About Us' },
    { href: '/products-tools', label: 'Product & Tools' },
    { href: '/whyadveco', label: 'Why AdVantage' },
    { href: '/community-space', label: 'Community Space' },
    { href: '/resources', label: 'Resources' },
    { href: '/careers', label: 'Careers' },
    { href: '/contact-us', label: 'Contact Us' }
  ];

  return (
    <footer className="footer-container">
      <Container fluid className="footer-background px-3 px-md-5">
        <Row className="gy-4">
          {/* Section 1: Email Subscription */}
          <Col xs={12} md={4} className="footer-subscribe">
            <Container className="subscribe-container px-0">
              <Row className="align-items-start">
                <h3 className="fw-bold text-start mb-3">Adveco</h3>
              </Row>

              <Row className="align-items-center">
                <Form onSubmit={handleSubscribe} className="subscribe-form">
                  <Form.Group className="d-flex flex-column flex-sm-row align-items-stretch align-items-sm-center gap-2 mb-2">
                    <Form.Control
                      type="email"
                      placeholder="Your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="subscribe-input"
                    />
                    <Button type="submit" variant="dark" className="subscribe-button">
                      Subscribe
                    </Button>
                  </Form.Group>
                </Form>
              </Row>

              <Row className="align-items-start">
                <p className="community-text mt-2 text-start">Community Space</p>
              </Row>
            </Container>
          </Col>

          {/* Section 2: Social Links */}
          <Col xs={12} md={4} className="text-center text-md-start">
            <h5 className="text-white fw-bold mb-3">Follow Us</h5>
            <div className="social-icons d-flex flex-wrap justify-content-center justify-content-md-start gap-3">
              <span className="social-icon text-white" onClick={() => window.open("https://facebook.com", "_blank")}>
                Facebook
              </span>
              <span className="social-icon text-white" onClick={() => window.open("https://x.com/Adv_ecosystem", "_blank")}>
                Twitter
              </span>
              <span className="social-icon text-white" onClick={() => window.open("https://www.linkedin.com/company/advantageecosystem/posts/?feedView=all", "_blank")}>
                LinkedIn
              </span>
              <span className="social-icon text-white" onClick={() => window.open("https://www.instagram.com/advantage.ecosystem/", "_blank")}>
                Instagram
              </span>
            </div>
          </Col>

          {/* Section 3: Quick Links */}
          <Col xs={12} md={4} className="footer-links">
            <h5 className="footer-title mb-3">Quick Links</h5>
            <div className="row row-cols-2 row-cols-sm-2 gy-2">
              <div className="col">
                {navLinks.slice(0, Math.ceil(navLinks.length / 2)).map((link) => (
                  <Nav.Link key={link.href} href={link.href} className="footer-link d-block mb-2">
                    {link.label}
                  </Nav.Link>
                ))}
              </div>
              <div className="col">
                {navLinks.slice(Math.ceil(navLinks.length / 2)).map((link) => (
                  <Nav.Link key={link.href} href={link.href} className="footer-link d-block mb-2">
                    {link.label}
                  </Nav.Link>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;