import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Search } from 'lucide-react';
import { Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Search term:', searchTerm);
    setIsSearchFocused(false);
  };

  const handleOutsideClick = (e) => {
    if (!e.target.closest('.search-modal') && !e.target.closest('.search-button')) {
      setIsSearchFocused(false);
    }
  };

  useEffect(() => {
    if (isSearchFocused) {
      document.addEventListener('click', handleOutsideClick);
    } else {
      document.removeEventListener('click', handleOutsideClick);
    }
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [isSearchFocused]);

  return (
    <div className={`sticky-top cccc bg-light transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`} style={{ color: "#000000" }}>
      <div className="bg-dar cccc py-3">
        <Container fluid className="px-4">
          <Row className="align-items-center flex-nowrap">
            <Col xs="auto" className="d-flex align-items-center">
              <Navbar.Brand
                href="/"
                className="text-dark text-decoration-none d-flex align-items-center"
                style={{ fontSize: '1rem', fontWeight: '600' }}
              >
                <span className="text-white fw-bold">AdVantage</span>
                <span className="ms-2 text-white fw-bold">Ecosystem</span>
              </Navbar.Brand>
            </Col>

            <Col xs="auto" className="ms-auto">
              <Form onSubmit={handleSearchSubmit} className="d-flex">
                <div className="position-relative d-flex">
                 
                  <Button
                    className="search-button d-flex"
                    aria-label="Search Icon"
                    style={{
                      width: 'auto',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'none',
                      border: 'none',
                      outline: 'none',
                      padding: '4px',
                      cursor: 'pointer',
                      visibility: 'visible'
                    }}
                    onClick={() => setIsSearchFocused(true)}
                  >
                    <Search size={24} style={{ color: 'rgb(51, 51, 51)' }} />
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Search Modal */}
      {isSearchFocused && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.4)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
            padding: '20px',
          }}
        >
          <div
            role="dialog"
            className="search-modal"
            style={{
              willChange: 'transform',
              backgroundColor: 'rgb(255, 255, 255)',
              color: 'rgb(51, 51, 51)',
              borderRadius: '16px',
              width: '100%',
              maxWidth: '500px',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              boxShadow: 'rgba(0, 0, 0, 0.2) 0px 20px 40px 0px',
              maxHeight: 'min(496px, -30px + 100vh)',
            }}
          >
            {/* Search Modal Content - Keeping existing code */}
            <div
              role="search"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                flexShrink: 0,
                fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont',
                padding: '12px 20px',
                gap: '12px',
                touchAction: 'none',
                borderBottom: '1px solid rgba(0,0,0,0.1)',
              }}
            >
              <div style={{ flexShrink: 0, display: 'flex' }}>
                <Search size={18} color="rgba(0, 0, 0, 0.45)" />
              </div>
              <input
                spellCheck="false"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  outline: 'none',
                  border: 'none',
                  background: 'transparent',
                  fontWeight: 500,
                  height: '2em',
                  padding: '0px',
                  width: '100%',
                  color: 'rgb(51, 51, 51)',
                  lineHeight: '2em',
                  fontSize: '16px',
                  fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont',
                }}
              />
              <button
                onClick={() => setIsSearchFocused(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '24px',
                  color: 'rgba(0,0,0,0.45)',
                }}
              >
                {/* Close icon or button text */}
              </button>
            </div>
            <div
              style={{
                width: 'calc(100% + 20px)',
                overflowY: 'scroll',
                overscrollBehavior: 'contain',
                marginTop: '-1px',
                touchAction: 'none',
              }}
            >
              <ul
                aria-live="polite"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: 'calc(100% - 20px)',
                  padding: '0px',
                  gap: '1px',
                  margin: '0px',
                }}
              >
                {/* Add dynamic search suggestions here */}
              </ul>
            </div>
          </div>
        </div>
      )}

      <Navbar expand="lg" className="bg-white py-0 border-1" variant="light">
        <Container fluid className="px-4">
          <Navbar.Toggle aria-controls="navbarScroll" className="border-0 px-0 ms-n2 " />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0">
              {['/','/About-Us', '/Products-Tools', '/WhyAdveco', '/Community-Space', '/Resources',  '/Careers', '/Contact-Us'].map(
                (path, index) => (
                  <Nav.Link key={index} as={NavLink} to={path} className="nav-link-custom">
                    {path.replace('/', '') || 'Home'}
                  </Nav.Link>
                )
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;