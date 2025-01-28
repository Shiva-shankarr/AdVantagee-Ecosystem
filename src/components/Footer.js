import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Nav } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import './Footer.css'; // Import custom CSS file

function Footer() {
  const [email, setEmail] = useState('');

  // Handle subscription form
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
      <Container fluid className="footer-background px-5 ">
        <Row>
          {/* Section 2: Email Subscription */}
<Col xs={12} md={4} className="footer-subscribe">
  <div>
    <h3 className="fw-bold text-cente ml-12">Adveco</h3>
    <Form onSubmit={handleSubscribe} className="subscribe-form">
      <Form.Group className="d-flex align-items-center mb-2">
        <Form.Control
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="subscribe-input me-2"
        />
        <Button type="submit" variant="white" className="subscribe-button">
          Subscribe
        </Button>
      </Form.Group>
      <p className="community-text mt-2 text-center">Community Space</p>
    </Form>
  </div>
</Col>

          {/* Section 2: Social Links */}
          <Col xs={12} md={4} className="text-center">
            <h5 className="text-white fw-bold">Follow Us</h5>
            <div className="social-icons  d-flex justify-content-center">
  <span className="social-icon  text-white mx-2" onClick={() => window.open("https://facebook.com", "_blank")}>
    Facebook
  </span>
  <span className="social-icon text-white mx-2" onClick={() => window.open("https://twitter.com", "_blank")}>
    Twitter
  </span>
  <span className="social-icon text-white mx-2" onClick={() => window.open("https://linkedin.com", "_blank")}>
    LinkedIn
  </span>
  <span className="social-icon text-white mx-2" onClick={() => window.open("https://instagram.com", "_blank")}>
    Instagram
  </span>
</div>



          </Col>
          

          {/* Section 3: Quick Links */}
          <Col xs={12} md={4} className="footer-links">
            <h5 className="footer-title">Quick Links</h5>
            <div className="row">
              <div className="col-6">
                {navLinks.slice(0, Math.ceil(navLinks.length / 2)).map((link) => (
                  <Nav.Link key={link.href} href={link.href} className="footer-link">
                    {link.label}
                  </Nav.Link>
                ))}
              </div>
              <div className="col-6">
                {navLinks.slice(Math.ceil(navLinks.length / 2)).map((link) => (
                  <Nav.Link key={link.href} href={link.href} className="footer-link">
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
