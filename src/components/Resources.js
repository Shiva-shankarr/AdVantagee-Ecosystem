import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Resources.css";

function Resources() {
  // const blogs = [
  //   {
  //     id: 1,
  //     title: "Comprehensive Blog Resource",
  //     description: "A detailed guide available for download.",
  //     img: "https://img.freepik.com/premium-vector/illustration-vector-graphic-cartoon-character-blogging_516790-1495.jpg?semt=ais_hybrid",
  //     link: "https://drive.google.com/file/d/18gUQjF4N6nUxWYxOY7Zgz05zGz3B3Dc1/view",
  //   },
  // ];

  // const tutorials = [
  //   {
  //     id: 1,
  //     title: "How to Use the AdVantage Platform",
  //     description: "Step-by-step tutorial to get started.",
  //     img: "https://img.youtube.com/vi/-tOC9-JCKGY/0.jpg",
  //     link: "https://youtu.be/-tOC9-JCKGY?si=O8kU1CzMpsHhSh2r",
  //   },
  //   {
  //     id: 2,
  //     title: "Advanced Features Overview",
  //     description: "Learn about advanced features and tools.",
  //     img: "https://img.youtube.com/vi/4H1x9rKnQTc/0.jpg",
  //     link: "https://youtu.be/4H1x9rKnQTc",
  //   },
  // ];

  return (
    <section className="resources-section py-5">
      <Container>
        

        {/* Blogs Section */}
        <div className="mb-5 aaa">
          <h2 className="section-subtitle display-6 text-dark mb-5 fw-bold">Blog</h2>
          <Row>

          <section className="resource-link">

          <Row>
          <Col>
      <a
        className="resource-link__wrapper"
        href="https://drive.google.com/file/d/18gUQjF4N6nUxWYxOY7Zgz05zGz3B3Dc1/view"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="resource-link__image-wrapper">
          <img
            className="resource-link__image"
            src="https://framerusercontent.com/images/mcmIVi5If3P7cK2MakbxFOK5md8.png"
            alt="White Paper"
          />
          
        </div>
        </a>
        </Col>
        <Col>
        <div className="resource-link__content">
          <h6 className="resource-link__title">White Paper</h6>
          <p className="resource-link__date">Dec 15, 2024</p>
        </div>
        </Col>
     
      </Row>
    </section>


            </Row>
        </div>

        {/* Tutorials Section */}
        <div className="aaa mt-5">
        <h2 className="section-subtitle display-6 text-dark mb-5 fw-bold">Tutorials</h2>
      <section className="video-embed-section">
        <Row> {/* Wrap the columns inside a row */}
          <Col md={6} className="mb-4"> {/* Set column width for responsiveness */}
            <div className="video-embed-container">
              <article className="video-embed-article">
                <iframe
                  title="Youtube Video 1"
                  src="https://www.youtube.com/embed/-tOC9-JCKGY?iv_load_policy=3&rel=0&modestbranding=1&playsinline=1&autoplay=1&mute=1"
                  frameBorder="0"
                  allow="presentation; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                />
              </article>
            </div>
          </Col>

          <Col md={6} className="mb-4"> {/* Set column width for responsiveness */}
            <div className="video-embed-container">
              <article className="video-embed-article">
                <iframe
                  title="Youtube Video 2"
                  src="https://www.youtube.com/embed/4H1x9rKnQTc?iv_load_policy=3&rel=0&modestbranding=1&playsinline=1&autoplay=1&mute=1"
                  frameBorder="0"
                  allow="presentation; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                />
              </article>
            </div>
          </Col>
        </Row>
      </section>
    </div>
    <Row>
      
    </Row>
      </Container>
    </section>
  );
}

export default Resources;
