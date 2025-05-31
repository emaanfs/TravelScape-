import { useEffect } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom"; 
import "../styles/about.css"; 
import Slider from "react-slick"; 
import CommonSection from "../shared/CommonSection";
import aboutUsHeroVideo from "../assets/images/hero-video.mp4"; 
import whyChooseUsSliderImg1 from "../assets/images/tour-bolivia.jpg"; 
import whyChooseUsSliderImg2 from "../assets/images/tour-japaneverest.jpg";
// import whyChooseUsSliderImg3 from "../assets/images/slider-image-3.jpg";

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const whyChooseUsSliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false, 
        customPaging: i => (
            <div className="slick-dot-custom"></div>
        ),
        dotsClass: "slick-dots slick-dots-custom-container"
    };

    const sliderImages = [
        { id: 1, src: whyChooseUsSliderImg1, alt: "Adventure in the desert" },
        { id: 2, src: whyChooseUsSliderImg2, alt: "Another adventure scene" },
        // { id: 3, src: whyChooseUsSliderImg3, alt: "Yet another adventure" },
    ];

    return (
        <>
            <CommonSection title={"About TravelScape"} videoSrc={aboutUsHeroVideo} />

            <div className="about-us-page"> 
                <section className="our-story-section">
                    <Container>
                        <Row className="align-items-center">
                            <Col lg="6" md="12" className="mb-4 mb-lg-0">
                                <div className="story-content">
                                    <h2 className="section-title">Our Journey, Your Adventure</h2>
                                    <p>
                                        Founded with a love for exploration and a commitment to exceptional service,
                                        TravelWorld was born from a desire to make extraordinary travel accessible
                                        to everyone. We believe that travel broadens the mind, enriches the soul,
                                        and creates lasting memories.
                                    </p>
                                    <p>
                                        Our team of passionate travel experts meticulously curates each tour, ensuring
                                        authentic experiences, comfortable journeys, and moments of pure discovery.
                                        We're more than just a travel company; we're your partners in exploration.
                                    </p>
                                </div>
                            </Col>
                            <Col lg="6" md="12">
                                <Row>
                                    <Col md="6" sm="12" className="mb-4">
                                        <div className="mission-vision-box text-center">
                                            <i className="ri-compass-3-line ri-3x mv-icon-font"></i>
                                            <h4 className="mv-title">Our Mission</h4>
                                            <p>
                                                To inspire and empower travelers to explore the world with confidence,
                                                curiosity, and a spirit of adventure.
                                            </p>
                                        </div>
                                    </Col>
                                    <Col md="6" sm="12" className="mb-4">
                                        <div className="mission-vision-box text-center">
                                            <i className="ri-global-line ri-3x mv-icon-font"></i>
                                            <h4 className="mv-title">Our Vision</h4>
                                            <p>
                                                To be the most trusted and innovative travel partner, connecting
                                                people to diverse cultures and breathtaking landscapes globally.
                                            </p>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className="why-choose-us-dark-section">
                    <Container>
                        <Row className="align-items-center">
                            <Col lg="6" md="12" className="mb-4 mb-lg-0 why-choose-us-slider-col">
                                <Slider {...whyChooseUsSliderSettings}>
                                    {sliderImages.map(img => (
                                        <div key={img.id} className="why-choose-us-slide">
                                            <img src={img.src} alt={img.alt} className="img-fluid" />
                                        </div>
                                    ))}
                                </Slider>
                            </Col>
                            <Col lg="6" md="12">
                                <div className="why-choose-us-dark-content">
                                    <h5 className="section-subtitle-dark">WHY CHOOSE US?</h5>
                                    <h2 className="section-title-dark">ADVENTURE AWAITS: FIND YOUR BLISS</h2>
                                    <p className="section-paragraph-dark">
                                        Choose us for unforgettable adventures, personalized planning, 
                                        real-time updates, and trusted guides. Discover new places with confidence, 
                                        comfort, and convenience—your perfect journey starts right here with us.
                                    </p>
                                    <Button tag={Link} to="/about" className="btn read-more-btn-dark mt-3">
                                        READ MORE
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>
        </>
    );
};

export default About;