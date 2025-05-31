import React from "react";
import './newsletter.css';
import { Container, Row, Col } from "reactstrap";
import newsletterBgVideo from "../assets/images/hero-video.mp4";

const Newsletter = () => {
    return (
        <>
            <section className="newsletter-section">
                
                <video autoPlay loop muted playsInline className="newsletter-background-video">
                    <source src={newsletterBgVideo} type="video/mp4" />
                </video>

                <div className="newsletter-overlay"></div>
                <Container>
                    <Row className="justify-content-center"> 
                        <Col lg="8" md="10">
                            <div className="newsletter__content text-center"> 
                                <h2>Stay Updated, Travel Smarter!</h2>
                                <p className="mb-4">
                                    Subscribe to our newsletter for exclusive travel deals, inspiring
                                    destinations, and the latest tips to make your next journey unforgettable.
                                </p>

                                <div className="newsletter__input_new">
                                    <input type="email" placeholder="Enter your email address" />
                                    <button className="btn newsletter__btn_new">
                                        Subscribe <i className="ri-send-plane-fill ri-lg ms-1"></i> 
                                    </button>
                                </div>
                                <p className="newsletter__terms mt-3">
                                    By subscribing, you agree to our Privacy Policy. Unsubscribe at any time.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Newsletter;