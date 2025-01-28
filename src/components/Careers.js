import React from "react";
import "./Careers.css";
import { Row, Col } from "react-bootstrap";
import { useInView } from "react-intersection-observer";

const positions = [
  "UX Designer",
  "UI Designer",
  "Frontend Developer",
  "Backend Developer",
  "Cloud Developer",
];

function Careers() {
  const applyLink =
    "https://docs.google.com/forms/d/e/1FAIpQLSfglBg0v3R517aYBz5cY0sdMrl1NtApzgxb0R86Hj-5bi2azw/viewform";

  const { ref: sectionRef, inView: inViewSupported } = useInView({
    threshold: 0.2, // Trigger animation when 20% of the element is visible
  });

  return (
    <div>
      <section
        className={`careers-section ${
          inViewSupported ? "fade-in" : "fade-out"
        }`}
        ref={sectionRef}
      >
        <h2 className="positions-title">Positions Available</h2>
        <div className="job-listing">
          {positions.map((title, index) => (
            <div className="job-item" key={index}>
              <Row className="align-items-center">
                <Col xs={8}>
                  <h2 className="job-title">{title}</h2>
                </Col>
                <Col xs={4} className="text-end">
                  <p className="apply-link">
                    <a
                      href={applyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Apply
                    </a>
                  </p>
                </Col>
              </Row>
            </div>
          ))}
        </div>
      </section>
      <div className="contact-section mt-5">
        <h2 className="heading-text">
          Drop in your Resume, let's have a chat!
        </h2>
        <div className="iframe-container">
          <div className="iframe-wrapper">
            <iframe
              src="https://form.typeform.com/to/DiCQWx8d"
              title="Resume Submission"
              allow="microphone; camera"
              style={{
                border: "0",
                width: "80%",
                height: "300px", // Fixed height for consistency
                maxWidth: "800px", // Optional: prevent extremely wide forms
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Careers;
