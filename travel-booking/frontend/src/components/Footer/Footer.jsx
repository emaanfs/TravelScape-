import React from "react";  
import "./footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";


const quick__links = [
    {
        path: "/home",
        display: "Home",
    },
    {
        path: "/about",
        display: "About",
    },
    {
        path: "/tours",
        display: "Tours",
    },
];

const quick__links2 = [
    {
        path: "/gallery",
        display: "Gallery",
    },
    {
        path: "/login",
        display: "Login",
    },
    {
        path: "/register",
        display: "Register",
    },
];

const Footer = () => {
     return (
        <>
        <footer className="footer">
                <Container>
                    <Row>
                        <Col lg="4" md="6" sm="12" className="mb-4 footer__about">
                            <div className="logo">
                                <img src={logo} alt="Travel World Logo" />
                                <p>
                                    Explore the world with us. We're dedicated to crafting
                                    unforgettable journeys and seamless travel experiences.
                                </p>
                                <div className="social__links d-flex align-items-center gap-4">
                                    <span><Link to="#"><i className="ri-facebook-circle-fill"></i></Link></span>
                                    <span><Link to="#"><i className="ri-instagram-fill"></i></Link></span>
                                    <span><Link to="#"><i className="ri-twitter-fill"></i></Link></span>
                                    <span><Link to="#"><i className="ri-youtube-fill"></i></Link></span>
                                </div>
                            </div>
                        </Col>

                        <Col lg="2" md="3" sm="6" className="mb-4">
                            <h5 className="footer__link-title">Discover</h5>
                            <ListGroup className="footer__quick-links">
                                {quick__links.map((item, index) => (
                                    <ListGroupItem key={index} className="ps-0 border-0">
                                        <Link to={item.path}>{item.display}</Link>
                                    </ListGroupItem>
                                ))}
                            </ListGroup>
                        </Col>

                        <Col lg="2" md="3" sm="6" className="mb-4">
                            <h5 className="footer__link-title">Quick Links</h5>
                            <ListGroup className="footer__quick-links">
                                {quick__links2.map((item, index) => (
                                    <ListGroupItem key={index} className="ps-0 border-0">
                                        <Link to={item.path}>{item.display}</Link>
                                    </ListGroupItem>
                                ))}
                            </ListGroup>
                        </Col>

                        <Col lg="4" md="12" sm="12" className="mb-4">
                            <h5 className="footer__link-title">Contact Us</h5>
                            <ListGroup className="footer__quick-links contact__info">
                                <ListGroupItem className="ps-0 border-0 d-flex align-items-start gap-3">
                                    <i className="ri-map-pin-fill icon"></i>
                                    <div>
                                        <h6>Address:</h6>
                                        <p>123 Main St, Ciy City, Street 12345</p>
                                    </div>
                                </ListGroupItem>
                                <ListGroupItem className="ps-0 border-0 d-flex align-items-start gap-3">
                                    <i className="ri-mail-send-fill icon"></i>
                                    <div>
                                        <h6>Email:</h6>
                                        <p><a href="mailto:hello@travelscape.com">hello@travelscape.com</a></p>
                                    </div>
                                </ListGroupItem>
                                <ListGroupItem className="ps-0 border-0 d-flex align-items-start gap-3">
                                    <i className="ri-phone-fill icon"></i>
                                    <div>
                                        <h6>Call Us:</h6>
                                        <p><a href="tel:+9711234567">+971 123 4567</a></p>
                                    </div>
                                </ListGroupItem>
                            </ListGroup>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    );
};

export default Footer;  