import React from "react";
import './newsletter.css';
import { Container, Row, Col } from "reactstrap";
import newsletterBgVideo from "../assets/images/hero-video.mp4";

const Newsletter = () => {
    return (
        <>
            {/* Added a specific class for easier targeting if needed */}
            <section className="newsletter-section">
                
                <video autoPlay loop muted playsInline className="newsletter-background-video">
                    <source src={newsletterBgVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <div className="newsletter-overlay"></div>
                <Container>
                    <Row className="justify-content-center"> {/* Center the row content */}
                        <Col lg="8" md="10"> {/* Wider column for content */}
                            <div className="newsletter__content text-center"> {/* Center align text */}
                                <h2>Stay Updated, Travel Smarter!</h2>
                                <p className="mb-4"> {/* Added margin-bottom */}
                                    Subscribe to our newsletter for exclusive travel deals, inspiring
                                    destinations, and the latest tips to make your next journey unforgettable.
                                </p>

                                <div className="newsletter__input_new">
                                    <input type="email" placeholder="Enter your email address" />
                                    <button className="btn newsletter__btn_new">
                                        Subscribe <i className="ri-send-plane-fill ri-lg ms-1"></i> {/* Added icon */}
                                    </button>
                                </div>
                                <p className="newsletter__terms mt-3">
                                    By subscribing, you agree to our Privacy Policy. Unsubscribe at any time.
                                </p>
                            </div>
                        </Col>
                        {/* Col for image is removed */}
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Newsletter;