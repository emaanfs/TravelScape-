import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import "../styles/thank-you.css"; // CSS file for styling
import thankyouBgVideo from "../assets/images/hero-video.mp4";

const ThankYou = () => {
  return (
    <section className="thankyou-section">
       <video autoPlay loop muted playsInline className="newsletter-background-video">
          <source src={thankyouBgVideo} type="video/mp4" />
        </video>

      <div className="thankyou-overlay"></div>
      <Container>
        <Row>
          <Col lg="12" className="pt-5 text-center">
            <div className="thank__you">
              <div class="progress-ring">
                    <svg width="120" height="120">
                        <circle class="ring-bg" cx="60" cy="60" r="50" stroke-width="8"></circle>
                        <circle class="ring-progress" cx="60" cy="60" r="50" stroke-width="8" stroke-dasharray="314" stroke-dashoffset="0"></circle>
                    </svg>
                    <div class="progress-text"><i class="ri-check-line"></i></div>
                </div>
            
              <h1 className="mb-3 fw-semibold"> Thank You! </h1>
              <h5 className="mb-4"> Your booking has been confirmed. </h5>

              <Button className="btn primary__btn w-25">
                <Link to="/home">Back to Home</Link>
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ThankYou;