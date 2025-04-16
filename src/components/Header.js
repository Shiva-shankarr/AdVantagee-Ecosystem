import React, { useState, useEffect, useMemo } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Search, X, ArrowRight } from 'lucide-react';
import { Row, Col } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  // Define navigation items with more detailed information
  const navigationItems = useMemo(() => [
    {
      path: '/',
      title: 'Home',
      description: 'Return to the main page',
      keywords: ['home', 'main', 'start', 'landing']
    },
    {
      path: '/About-Us',
      title: 'About Us',
      description: 'Learn about our company and mission',
      keywords: ['about', 'company', 'mission', 'vision', 'team']
    },
    {
      path: '/Products-Tools',
      title: 'Products & Tools',
      description: 'Explore our product offerings and tools',
      keywords: ['products', 'tools', 'solutions', 'services', 'offerings']
    },
    {
      path: '/WhyAdveco',
      title: 'Why AdVeco',
      description: 'Discover what makes us unique',
      keywords: ['advantages', 'benefits', 'unique', 'features']
    },
    {
      path: '/Community-Space',
      title: 'Community Space',
      description: 'Join our community and events',
      keywords: ['community', 'events', 'forum', 'discussions']
    },
    {
      path: '/Resources',
      title: 'Resources',
      description: 'Access guides, documentation and support',
      keywords: ['resources', 'guides', 'docs', 'support', 'help']
    },
    {
      path: '/Careers',
      title: 'Careers',
      description: 'Explore job opportunities',
      keywords: ['careers', 'jobs', 'positions', 'employment']
    },
    {
      path: '/Contact-Us',
      title: 'Contact Us',
      description: 'Get in touch with our team',
      keywords: ['contact', 'support', 'help', 'reach']
    }
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Enhanced search function
  const handleSearch = (term) => {
    setSearchTerm(term);
    if (term.length >= 2) {
      const searchTermLower = term.toLowerCase();
      const results = navigationItems
        .filter(item => {
          const titleMatch = item.title.toLowerCase().includes(searchTermLower);
          const descMatch = item.description.toLowerCase().includes(searchTermLower);
          const keywordMatch = item.keywords.some(keyword => 
            keyword.toLowerCase().includes(searchTermLower)
          );
          return titleMatch || descMatch || keywordMatch;
        })
        .map(item => ({
          ...item,
          matchType: item.title.toLowerCase().includes(searchTermLower) 
            ? 'title' 
            : item.description.toLowerCase().includes(searchTermLower)
              ? 'description'
              : 'keyword'
        }))
        .sort((a, b) => {
          // Prioritize title matches
          if (a.matchType === 'title' && b.matchType !== 'title') return -1;
          if (b.matchType === 'title' && a.matchType !== 'title') return 1;
          return 0;
        });

      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm && searchResults.length > 0) {
      handleResultClick(searchResults[0].path);
    }
  };

  const handleResultClick = (path) => {
    navigate(path);
    setIsSearchFocused(false);
    setSearchTerm('');
    setSearchResults([]);
  };

  const handleOutsideClick = (e) => {
    if (!e.target.closest('.search-modal') && !e.target.closest('.search-button')) {
      setIsSearchFocused(false);
      setSearchResults([]);
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

  // Rest of your existing return statement remains the same until the search results section
  return (
    <div className={`sticky-top cccc bg-light transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`} style={{ color: "#000000" }}>
      {/* Your existing header code remains the same */}
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

      {/* Enhanced Search Modal */}
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
            alignItems: 'flex-start',
            paddingTop: '10vh',
            zIndex: 1000,
          }}
        >
          <div
            role="dialog"
            className="search-modal"
            style={{
              backgroundColor: 'rgb(255, 255, 255)',
              borderRadius: '12px',
              width: '100%',
              maxWidth: '600px',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              boxShadow: 'rgba(0, 0, 0, 0.2) 0px 20px 40px 0px',
              maxHeight: '70vh',
              margin: '0 20px',
            }}
          >
            <div
              role="search"
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '16px 20px',
                borderBottom: '1px solid rgba(0,0,0,0.1)',
                backgroundColor: '#f8f9fa',
              }}
            >
              <Search size={20} color="rgba(0, 0, 0, 0.6)" />
              <input
                autoFocus
                spellCheck="false"
                placeholder="Search pages..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                style={{
                  outline: 'none',
                  border: 'none',
                  background: 'transparent',
                  fontSize: '16px',
                  padding: '0 12px',
                  width: '100%',
                  height: '24px',
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSearchSubmit(e);
                  }
                }}
              />
              <button
                onClick={() => {
                  setIsSearchFocused(false);
                  setSearchTerm('');
                  setSearchResults([]);
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '4px',
                }}
              >
                <X size={20} color="rgba(0, 0, 0, 0.6)" />
              </button>
            </div>
            
            <div
              style={{
                overflowY: 'auto',
                maxHeight: 'calc(70vh - 57px)',
              }}
            >
              {searchResults.length > 0 ? (
                <ul
                  style={{
                    listStyle: 'none',
                    margin: 0,
                    padding: 0,
                  }}
                >
                  {searchResults.map((result, index) => (
                    <li
                      key={index}
                      onClick={() => handleResultClick(result.path)}
                      style={{
                        padding: '16px 20px',
                        borderBottom: '1px solid rgba(0,0,0,0.06)',
                        cursor: 'pointer',
                        transition: 'background-color 0.2s',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.02)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }}
                    >
                      <div>
                        <div style={{ fontWeight: 500, marginBottom: '4px' }}>
                          {result.title}
                        </div>
                        <div style={{ fontSize: '14px', color: 'rgba(0,0,0,0.6)' }}>
                          {result.description}
                        </div>
                      </div>
                      <ArrowRight size={16} color="rgba(0,0,0,0.4)" />
                    </li>
                  ))}
                </ul>
              ) : searchTerm.length >= 2 ? (
                <div style={{ padding: '20px', textAlign: 'center', color: 'rgba(0,0,0,0.6)' }}>
                  No results found
                </div>
              ) : null}
            </div>
          </div>
        </div>
      )}

      <Navbar expand="lg" className="bg-white py-0 border-1" variant="light">
        <Container fluid className="px-4">
          <Navbar.Toggle aria-controls="navbarScroll" className="border-0 px-0 ms-n2 " />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0">
              {navigationItems.map((item, index) => (
                <Nav.Link 
                  key={index} 
                  as={NavLink} 
                  to={item.path} 
                  className="nav-link-custom"
                >
                  {item.path === '/' ? 'Home' : item.title}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;