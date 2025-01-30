import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { 
  FaUsers, FaUsersCog, FaRocket, FaRegUser, FaComments, FaFreeCodeCamp, 
  FaPencilAlt, FaRegHandshake, FaTasks, FaPen, FaSearch, FaTrophy, FaGamepad, 
  FaBusinessTime, FaBriefcase 
} from "react-icons/fa";
import './ProductsTools.css';



// PricingCard Component
const PricingCard = ({ title, price, features, buttonText }) => {
  return (
    <Card className="pricing-card h-100 position-relative">
      <Card.Body className="d-flex flex-column p-4">
        {/* Header section */}
        <Card.Title className="text-left mb-4">
          <h3 className="mb-0">{title}</h3>
          <div className="price mt-3">
            <span>{price}</span>
            <span className="text-muted ms-2" style={{ fontSize: '0.8rem' }}>/month</span>
          </div>
        </Card.Title>
        
        {/* Features section */}
        <div className="features flex-grow-1">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`feature-item flex items-start mb-4 ${
                index === features.length - 1 ? 'last-feature' : ''
              }`}
            >
              <div className="feature-icon mr-3 flex-shrink-0">
                {index < features.length - 1 && (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mt-1"
                  >
                    <circle cx="12" cy="12" r="12" fill="#090909"/>
                    <path
                      d="M17 8L10 15L7 12"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
              <span 
                className={`feature-text leading-tight ${
                  index === features.length - 1 ? 'text-center w-full' : ''
                }`}
                style={{ 
                  marginLeft: index === features.length - 1 ? '0' : '0',
                  display: index === features.length - 1 ? 'block' : 'inline'
                }}
              >
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* Button section - positioned at bottom */}
        <div className="text-center mt-4">
          <Button 
            variant="primary" 
            className="w-75 pricing-card-button bg-black"
            style={{
              backgroundColor: '#4299e1',
              border: 'none',
              padding: '10px 0'
            }}
          >
            {buttonText}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};


 


const ProductsTools = () => {
  const pricingPlans = [
    {
      title: "Personal",
      price: "$0",
      features: [
        "1 Collaborative Space",
        "Basic Analytics",
        "Insights Panel for simple data tracking",
        "Share Features to distribute resources",
        "Ideal for individual learners or small groups exploring peer learning"
      ],
      buttonText: "Get Started",
    },
    {
      title: "Professional",
      price: "$10",
      features: [
        "3 Collaborative Spaces",
        "1 Quest Lab",
        "Advanced Analytics",
        "Enhanced Insights Panel for deeper performance metrics",
        "All Share Features included",
        "Perfect for mid-sized communities and growing teams looking to scale their learning efforts."
      ],
      buttonText: "Get Started",
    },
    {
      title: "Business",
      price: "$30",
      features: [
        "Unlimited Collaborative Spaces",
        "Unlimited Quest Labs",
        "Comprehensive Analytics",
        "Detailed Insights Panel for community tracking and progress",
        "All Share Features included",
        "Event Management Tools for seamless planning and execution",
        "Tailored for organizations and large-scale communities aiming to create impactful peer-to-peer ecosystems."
      ],
      buttonText: "Get Started",
    },
  ];

  return (
    <div className='bbbb'>
      <header class="framer-1xrsae7">
  <div class="framer-1bxbq6m">
    <h1 class="framer-text">
      Transforming Learning Through Innovative Tools
    </h1>
  </div>
  <div class="framer-11wfjty">
    <h2 class="framer-text">
      Explore how AdVantage Ecosystem's products empower communities and learners to collaborate, grow, and thrive in an ever-evolving educational landscape.
    </h2>
  </div>
</header>




      <section className="products-tools-section shiva">
        
<div className='Anand'>
        <Container className="my-5">
          {/* Community Spaces */}
          <section className="community-section mb-5 text-white">
          
          <div className="framer-vwkp9s">
  <div className="framer-6louni" data-framer-name="Content" name="Content">
    <div className="framer-138czqo" data-framer-component-type="RichTextContainer" style={{ outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: 0, transform: 'none' }}>
      <h1 className="framer-text" style={{ fontFamily: '"Inter", "Inter Placeholder", sans-serif', fontSize: '50px', fontWeight: 700, letterSpacing: '-2px', textAlign: 'left', color: 'rgb(255, 255, 255)' }}>
      Community Spaces
      </h1>
    </div>

    <div className="framer-1r1x6d5" data-framer-component-type="RichTextContainer" style={{ outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: 0, transform: 'none' }}>
      <h2 className="framer-text" style={{ fontFamily: '"Inter", "Inter Placeholder", sans-serif', fontSize: '24px', fontWeight: 500, letterSpacing: '-0.5px', lineHeight: '1.5em', textAlign: 'left', color: 'rgb(255, 255, 255)' }}>
      Community Spaces is a dedicated social networking platform for learners, communities, and organizations to foster engagement and collaboration. Designed to empower leaders and members alike, it provides a dynamic environment where knowledge-sharing thrives, ideas are exchanged, and relationships grow.
      </h2>
    </div>
  </div>
</div>

<Row className="mt-5">
  <Col lg={6} className="d-flex justify-content-center align-items-center">
    <div className="image-container ">
      <img
        src="https://framerusercontent.com/images/DnnzmlNClYRqsEf7xwWWwVQQFRk.jpg?scale-down-to=1024"
        alt="Community Spaces"
        className="img-fluid  shadow"
      />
    </div>
  </Col>
  <Col lg={6}>
  <div className="content-container">
    <div className="content-header">
      <h2 className="content-title text-white">Features</h2>
    </div>
   
    <div className="feature-list">
      <div className="feature-item" style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '20px' }}>
        <div className="image-wrapper" style={{ marginRight: '20px' }}>
          <img
            src="https://framerusercontent.com/images/q1O6Zi3dZ1QyWnlVBsWOr20ZEr0.png"
            alt="Profile Creation"
            className="feature-image"
            style={{ width: '50px', height: '40px', objectFit: 'cover' }}
          />
        </div>
        <div className="feature-text" style={{ display: 'flex', flexDirection: 'column' }}>
          <p className="feature-title" style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>
            Profile Creation
          </p>
          <p className="feature-description text-white" style={{ fontSize: '0.8rem', color: '#6c757d' }}>
            Build personalized profiles for communities with detailed information, goals, and tags for discoverability.
          </p>
        </div>
      </div>

      <div className="feature-item" style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '20px' }}>
        <div className="image-wrapper" style={{ marginRight: '20px' }}>
          <img
            src="https://framerusercontent.com/images/ggMhDyBo3Oo5Mda3jItKAyats.png"
            alt="Member Engagement"
            className="feature-image"
            style={{ width: '50px', height: '40px', objectFit: 'cover' }}
          />
        </div>
        <div className="feature-text" style={{ display: 'flex', flexDirection: 'column' }}>
          <p className="feature-title text-white" style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>
            Member Engagement
          </p>
          <p className="feature-description text-white" style={{ fontSize: '1rem', color: '#6c757d' }}>
            Foster vibrant discussions and interactions through posts, announcements, and updates.
          </p>
        </div>
      </div>

      <div className="feature-item" style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '20px' }}>
        <div className="image-wrapper" style={{ marginRight: '20px' }}>
          <img
            src="https://framerusercontent.com/images/WDJRfsJPWrgIlO0ZSanaKL4.png"
            alt="Discussion Forums"
            className="feature-image"
            style={{ width: '50px', height: '40px', objectFit: 'cover' }}
          />
        </div>
        <div className="feature-text" style={{ display: 'flex', flexDirection: 'column' }}>
          <p className="feature-title" style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>
            Discussion Forums
          </p>
          <p className="feature-description text-white" style={{ fontSize: '1rem', color: '#6c757d' }}>
            Create dedicated chat rooms for seamless communication and structured topic-based discussions.
          </p>
        </div>
      </div>

      <div className="feature-item" style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '20px' }}>
        <div className="image-wrapper" style={{ marginRight: '20px' }}>
          <img
            src="https://framerusercontent.com/images/pS6rlitav3WzId80SOYkzsNMyQs.png"
            alt="Event Management"
            className="feature-image"
            style={{ width: '60px', height: '40px', objectFit: 'cover' }}
          />
        </div>
        <div className="feature-text" style={{ display: 'flex', flexDirection: 'column' }}>
          <p className="feature-title" style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>
            Event Management
          </p>
          <p className="feature-description text-white" style={{ fontSize: '1rem', color: '#6c757d' }}>
            Manage and promote events within the community, allowing easy access and participation for members.
          </p>
        </div>
      </div>

      {/* New Feature */}
      <div className="feature-item" style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '20px' }}>
        <div className="image-wrapper" style={{ marginRight: '20px' }}>
          <img
            src="https://framerusercontent.com/images/A5MoJ9UQz7zx8wkWnkqNqYsAKA.png" // Replace with the actual image link
            alt="Freemium Model"
            className="feature-image"
            style={{ width: '69px', height: '30px', objectFit: 'cover' }}
          />
        </div>
        <div className="feature-text" style={{ display: 'flex', flexDirection: 'column' }}>
          <p className="feature-title" style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>
            Freemium Model
          </p>
          <p className="feature-description text-white" style={{ fontSize: '1rem', color: '#6c757d' }}>
            Access core features for free, with premium options for advanced analytics, larger member capacities, and expanded management tools.
          </p>
        </div>
      </div>

      <div className="mt-3">
        <Button variant="dark" className="me-2">Get Started</Button>
        <Button variant="white" className='bg-light'>Learn More</Button>
      </div>
    </div>
  </div>
</Col>
</Row>


          </section>

          {/* Microcampus Platforms */}
          <section className="microcampus-section mb-5 text-white">
          <div className="framer-vwkp9s">
  <div className="framer-6louni" data-framer-name="Content" name="Content">
    <div className="framer-138czqo" data-framer-component-type="RichTextContainer" style={{ outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: 0, transform: 'none' }}>
      <h1 className="framer-text" style={{ fontFamily: '"Inter", "Inter Placeholder", sans-serif', fontSize: '50px', fontWeight: 700, letterSpacing: '-2px', textAlign: 'left', color: 'rgb(255, 255, 255)' }}>
        Microcampus Platforms
      </h1>
    </div>

    <div className="framer-1r1x6d5" data-framer-component-type="RichTextContainer" style={{ outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: 0, transform: 'none' }}>
      <h2 className="framer-text" style={{ fontFamily: '"Inter", "Inter Placeholder", sans-serif', fontSize: '24px', fontWeight: 500, letterSpacing: '-0.5px', lineHeight: '1.5em', textAlign: 'left', color: 'rgb(255, 255, 255)' }}>
        Microcampus Platforms enable immersive, structured learning experiences by bringing together tools and strategies to foster collaboration, creativity, and productivity. Designed with a neuroscience-backed approach, the platform emphasizes task engagement and goal alignment to ensure meaningful outcomes for learners and communities.
      </h2>
    </div>
  </div>
</div>


<Row className="mt-5">
  <Col lg={6} className="d-flex justify-content-center align-items-center">
    <div className="image-container ">
      <img
        src="https://framerusercontent.com/images/U556Zr9ySyBIwrKhO304cic8OI.jpg?scale-down-to=2048"
        alt="Community Spaces"
        className="img-fluid rounde shadow"
      />
    </div>
  </Col>
  <Col lg={6}>
  <div className="content-container">
    <div className="content-header">
      <h2 className="content-title text-white">Features</h2>
    </div>
   
    <div className="feature-list">
      <div className="feature-item" style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '20px' }}>
        <div className="image-wrapper" style={{ marginRight: '20px' }}>
          <img
            src="https://framerusercontent.com/images/9x0shNfW1rtfFmz1wc3f0vyBFoo.png"
            alt="Profile Creation"
            className="feature-image"
            style={{ width: '50px', height: '40px', objectFit: 'cover' }}
          />
        </div>
        <div className="feature-text" style={{ display: 'flex', flexDirection: 'column' }}>
          <p className="feature-title" style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>
          Collaborative Whiteboards
          </p>
          <p className="feature-description text-white" style={{ fontSize: '1rem', color: '#6c757d' }}>
          Brainstorm, organize, and visualize ideas seamlessly in real-time.
          </p>
        </div>
      </div>

      <div className="feature-item" style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '20px' }}>
        <div className="image-wrapper" style={{ marginRight: '20px' }}>
          <img
            src="https://framerusercontent.com/images/mFBTbaE9yCHt1BGLKWkgaasDkE.png"
            alt="Member Engagement"
            className="feature-image"
            style={{width: '55px', height: '40px', objectFit: 'cover' }}
          />
        </div>
        <div className="feature-text" style={{ display: 'flex', flexDirection: 'column' }}>
          <p className="feature-title" style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>
          Real-Time Document Editing
          </p>
          <p className="feature-description text-white" style={{ fontSize: '1rem', color: '#6c757d' }}>
          Work on shared documents collaboratively with version control

to track progress.
          </p>
        </div>
      </div>

      <div className="feature-item" style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '20px' }}>
        <div className="image-wrapper" style={{ marginRight: '20px' }}>
          <img
            src="https://framerusercontent.com/images/KLpXmswVZg36h0KJun0BicPZwU.png"
            alt="Discussion Forums"
            className="feature-image"
            style={{ width: '50px', height: '40px', objectFit: 'cover' }}
          />
        </div>
        <div className="feature-text" style={{ display: 'flex', flexDirection: 'column' }}>
          <p className="feature-title" style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>
          Task Management 
          </p>
          <p className="feature-description text-white" style={{ fontSize: '1rem', color: '#6c757d' }}>
          Assign and track tasks, ensuring clarity and accountability 

within groups.
          </p>
        </div>
      </div>

      <div className="feature-item" style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '20px' }}>
        <div className="image-wrapper" style={{ marginRight: '20px' }}>
          <img
            src="https://framerusercontent.com/images/FtQPPlEDVUjYYLl7iKtfrQZttqk.png"
            alt="Event Management"
            className="feature-image"
            style={{ width: '69px', height: '40px', objectFit: 'cover' }}
          />
        </div>
        <div className="feature-text" style={{ display: 'flex', flexDirection: 'column' }}>
          <p className="feature-title" style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>
          Integrated Feedback Loops
          </p>
          <p className="feature-description text-white" style={{ fontSize: '1rem', color: '#6c757d' }}>
          Provide and receive peer feedback with detailed comments and 

visual annotations to improve continuously
          </p>
        </div>
      </div>

      {/* New Feature */}
      <div className="feature-item" style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '20px' }}>
        <div className="image-wrapper" style={{ marginRight: '20px' }}>
          <img
            src="https://framerusercontent.com/images/pOvZebt7TCdFGWIPwkADt3PIDjo.png" // Replace with the actual image link
            alt="Freemium Model"
            className="feature-image"
            style={{width: '75px', height: '40px', objectFit: 'cover' }}
          />
        </div>
        <div className="feature-text" style={{ display: 'flex', flexDirection: 'column' }}>
          <p className="feature-title" style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>
          Purpose-Driven Workflows
          </p>
          <p className="feature-description text-white" style={{ fontSize: '1rem', color: '#6c757d' }}>
          Align every task with the overarching purpose of the space, 

creating a shared sense of direction and accomplishment.
          </p>
        </div>
      </div>

      <div className="mt-3">
        <Button variant="dark" className="me-2">Get Started</Button>
        <Button variant="white" className='bg-light'>Learn More</Button>
      </div>
    </div>
  </div>
</Col>
</Row>
          </section>

          {/* Quest Labs */}
          <section className="quest-labs-section mb-5 text-white">
          <div className="framer-vwkp9s">
  <div className="framer-6louni" data-framer-name="Content" name="Content">
    <div className="framer-138czqo" data-framer-component-type="RichTextContainer" style={{ outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: 0, transform: 'none' }}>
      <h1 className="framer-text" style={{ fontFamily: '"Inter", "Inter Placeholder", sans-serif', fontSize: '50px', fontWeight: 700, letterSpacing: '-2px', textAlign: 'left', color: 'rgb(255, 255, 255)' }}>
      Quest Labs
      </h1>
    </div>

    <div className="framer-1r1x6d5" data-framer-component-type="RichTextContainer" style={{ outline: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexShrink: 0, transform: 'none' }}>
      <h2 className="framer-text" style={{ fontFamily: '"Inter", "Inter Placeholder", sans-serif', fontSize: '24px', fontWeight: 500, letterSpacing: '-0.5px', lineHeight: '1.5em', textAlign: 'left', color: 'rgb(255, 255, 255)' }}>
      Quest Labs transforms traditional learning into an exciting, hands-on journey. By leveraging gamification, it provides structured challenges and immersive learning paths that inspire curiosity, ignite motivation, and build mastery. Whether you're exploring new skills or tackling real-world problems, Quest Labs makes learning interactive, rewarding, and unforgettable.
      </h2>
    </div>
  </div>
</div>

<Row className="mt-5">
  <Col lg={6} className="d-flex justify-content-center align-items-center">
    <div className="image-container ">
      <img
        src="https://framerusercontent.com/images/rObpmbP7nGyCP4OhYUOqgSn5lj0.jpg?scale-down-to=2048"
        alt="Community Spaces"
        className="img-fluid rounde shadow"
      />
    </div>
  </Col>
  <Col lg={6}>
  <div className="content-container">
    <div className="content-header">
      <h2 className="content-title text-white">Features</h2>
    </div>
   
    <div className="feature-list">
      <div className="feature-item" style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '20px' }}>
        <div className="image-wrapper" style={{ marginRight: '20px' }}>
          <img
            src="https://framerusercontent.com/images/hL8ZhVgLyjFkHkDnLvQ4bngia8.png"
            alt="Profile Creation"
            className="feature-image"
            style={{ width: '61px', height: '40px', objectFit: 'cover' }}
          />
        </div>
        <div className="feature-text" style={{ display: 'flex', flexDirection: 'column' }}>
          <p className="feature-title" style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>
          Gamified Challenges
          </p>
          <p className="feature-description text-white" style={{ fontSize: '1rem', color: '#6c757d' }}>
          Complete skill-based quests and achieve milestones in a fun, 

engaging environment.
          </p>
        </div>
      </div>

      <div className="feature-item" style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '20px' }}>
        <div className="image-wrapper" style={{ marginRight: '20px' }}>
          <img
            src="https://framerusercontent.com/images/5vt6UDr7lj3ZzIgEmYtFduo6n4.png"
            alt="Member Engagement"
            className="feature-image"
            style={{ width: '68px', height: '40px', objectFit: 'cover' }}
          />
        </div>
        <div className="feature-text" style={{ display: 'flex', flexDirection: 'column' }}>
          <p className="feature-title" style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>
          Interactive Learning Paths
          </p>
          <p className="feature-description text-white" style={{ fontSize: '1rem', color: '#6c757d' }}>
          Tailored paths guide users through step-by-step learning experiences 

designed for real-world application.
          </p>
        </div>
      </div>

      <div className="feature-item" style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '20px' }}>
        <div className="image-wrapper" style={{ marginRight: '20px' }}>
          <img
            src="https://framerusercontent.com/images/gJLDYPGKWHAFzKaiQy83fNkwZCo.png"
            alt="Discussion Forums"
            className="feature-image"
            style={{ width: '55px', height: '40px', objectFit: 'cover' }}
          />
        </div>
        <div className="feature-text" style={{ display: 'flex', flexDirection: 'column' }}>
          <p className="feature-title" style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>
          Skill-Building Simulations 
          </p>
          <p className="feature-description text-white" style={{ fontSize: '1rem', color: '#6c757d' }}>
          Practice and apply your knowledge through realistic, 

challenge-based scenarios.
          </p>
        </div>
      </div>

      <div className="feature-item" style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '20px' }}>
        <div className="image-wrapper" style={{ marginRight: '20px' }}>
          <img
            src="https://framerusercontent.com/images/ojjWHnFQth67m3JPXL7j9XRR0Ic.png"
            alt="Event Management"
            className="feature-image"
            style={{ width: '50px', height: '40px', objectFit: 'cover' }}
          />
        </div>
        <div className="feature-text" style={{ display: 'flex', flexDirection: 'column' }}>
          <p className="feature-title" style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>
          Progress Tracking and Rewards
          </p>
          <p className="feature-description text-white" style={{ fontSize: '1rem', color: '#6c757d' }}>
          Monitor your achievements and earn badges, leaderboards, 

and rewards to celebrate progress.
          </p>
        </div>
      </div>

      {/* New Feature */}
      <div className="feature-item" style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '20px' }}>
        <div className="image-wrapper" style={{ marginRight: '20px' }}>
          <img
            src="https://framerusercontent.com/images/BHK3OrdIF4f7sbkKsnE6MFEg.png" // Replace with the actual image link
            alt="Freemium Model"
            className="feature-image"
            style={{ width: '69px', height: '40px', objectFit: 'cover' }}
          />
        </div>
        <div className="feature-text" style={{ display: 'flex', flexDirection: 'column' }}>
          <p className="feature-title" style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>
          Community Engagement
          </p>
          <p className="feature-description text-white" style={{ fontSize: '1rem', color: '#6c757d' }}>
          Collaborate with peers and mentors to solve challenges, share feedback, 

and build connections
          </p>
        </div>
      </div>

      <div className="mt-3">
        <Button variant="dark" className="me-2">Get Started</Button>
        <Button variant="white" className='bg-light'>Learn More</Button>
      </div>
    </div>
  </div>
</Col>
</Row>
          </section>
        </Container>
        </div>
      </section>

      {/* Pricing Section */}
     {/* Pricing Section */}
     <div className="Vamshi p-5">
        <section className="pricing-section py-5">
          <Container>
            <h2 className="text-center mb-5">Choose Your Plan</h2>
            <Row className="justify-content-center">
              {pricingPlans.map((plan, index) => (
                <Col md={4} key={index} className="mb-4">
                  <PricingCard 
                    title={plan.title} 
                    price={plan.price} 
                    features={plan.features} 
                    buttonText={plan.buttonText} 
                  />
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      </div>
    </div>
  );
};

export default ProductsTools;