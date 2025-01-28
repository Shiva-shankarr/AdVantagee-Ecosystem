// PricingCard.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa'; // Importing check icon

const PricingCard = ({ title, price, features, buttonText, description }) => {
  return (
    <Card className="h-100 shadow pricing-card">
      <Card.Body className="text-center">
        <div className="mb-3">
          <p style={{ fontSize: '25px', fontWeight: 600, color: 'rgb(15, 14, 14)' }}>{title}</p>
        </div>
        <div>
          <h3 style={{ fontSize: '54px', fontWeight: 700, letterSpacing: '-3px', color: 'rgb(51, 51, 51)' }}>{price}</h3>
        </div>
        <div>
          <p style={{ fontSize: '14px', fontWeight: 600, color: 'rgb(12, 11, 11)' }}>/month</p>
        </div>
        <div className="feature-list text-left"> {/* Align text to the left */}
          {features.map((feature, index) => (
            <div key={index} className="d-flex align-items-start mb-2">
              {index < features.length - 1 ? ( // Check if it's not the last feature
                <FaCheckCircle className="text-dark me-2" />
              ) : null}
              <p style={{ fontSize: '14px', fontWeight: 600, color: 'rgb(102, 102, 102)' }}>{feature}</p>
            </div>
          ))}
        </div>
        <div className="mt-3">
          <p style={{ fontSize: '14px', fontWeight: 600, color: 'rgb(102, 102, 102)' }}>
            {description}
          </p>
        </div>
        <Button variant="dark" className="mt-3">{buttonText}</Button>
      </Card.Body>
    </Card>
  );
};

export default PricingCard;