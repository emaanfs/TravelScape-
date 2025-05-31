import React from "react";
import '../styles/home.css'
import { Container, Row, Col } from "reactstrap";
import Subtitle from "../shared/Subtitle";
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MasonryImageGallery from "../components/Image-gallery/MasonryImagesGallery";
import Reviews from "../components/Review/Reviews";
import Newsletter from "../shared/Newsletter";
import heroVideo from "../assets/images/hero-video.mp4";



const Home = () => {
    return (
        <>
        
 {/* ------------------------ HERO START -------------------- */}        
 <section className="hero-section-background">
                {/* Background Video */}
                <video autoPlay loop muted playsInline className="hero-background-video">
                    <source src={heroVideo} type="video/mp4" />
                </video>

                {/* Overlay for better text readability (optional) */}
                <div className="hero-overlay"></div> 

                <Container> 
                    <Row className="align-items-center">
                        <Col lg="7" md="9" className="text-center"> 
                            <div className="hero__content">
                                <h1> Traveling opens the door to creating <span 
                                className="highlight"> memories </span></h1>
                                <p>Experience the joy of seamless journeys with Travel Bliss - 
                                    your trusted companion for safe, enriching, and unforgettable 
                                    adventures around the globe!
                                </p>
                            </div>
                        </Col>
                        <Col lg="12" className="mt-5">
                            <SearchBar />
                        </Col>
                    </Row>
                </Container>
            </section>
{/* ------------------------ HERO END ---------------------- */}

{/* ------------------------ SERVICE START ---------------------- */}
            <section>
                <Container>
                    <Row>
                        <Col lg='3' >   
                        <h5 className="services__subtitle">Our Services</h5>
                        <h2 className="services__title">We offer our best services </h2>
                        </Col>
                        
                       <ServiceList/> 

                    </Row>
                </Container>
            </section>
{/* ------------------------ SERVICE END ------------------------ */}

{/* ------------------------ TOP TOURS START -------------------- */} 
            <section>
                <Container>
                    <Row>
                        <Col lg='12' className="mb-5">
                            <Subtitle subtitle={"Explore"}/>
                            <h2 className="featured__tour-title">Our Top Tours</h2>
                        </Col>       
                         <FeaturedTourList/>	               
                    </Row>
                </Container>
            </section>


{/* ------------------------ TOP TOURS END  --------------------- */} 

{/* ------------------------ EXPERIENCE START  --------------------- */} 
            <section className="experience-section"> 
                <Container>
                    <Row className="justify-content-center"> 
                        <Col lg='10' md='12'> 
                            <div className="experience__content text-center"> 
                                <Subtitle subtitle={"Our Expertise"} /> 
                                <h2>Building Memories, One Journey at a Time</h2>
                                <p className="mb-5"> 
                                    Leveraging years of dedicated service and a profound passion for travel, 
                                    we meticulously craft experiences that transcend the ordinary. Explore 
                                    the globe with a trusted partner committed to your unforgettable adventures.
                                </p>
                            </div>

                            <div className="counter__wrapper_new d-flex flex-wrap justify-content-around align-items-stretch">
                                <div className="counter__box_new">
                                    <span className="counter__number">12k+</span>
                                    <h6 className="counter__text">Successful Trips</h6>
                                </div>
                                <div className="counter__box_new">
                                    <span className="counter__number">98%</span> 
                                    <h6 className="counter__text">Client Satisfaction</h6>
                                </div>
                                <div className="counter__box_new">
                                    <span className="counter__number">15+</span> 
                                    <h6 className="counter__text">Years Honing Expertise</h6>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

{/* ------------------------ EXPERIENCE END  ----------------------- */} 

{/* ------------------------ GALLERY START  ----------------------- */}

            <section>
                <Container>
                    <Row>
                        <Col lg="12">
                        <Subtitle subtitle={'Gallery'}/>
                        <h2 className="gallery__title"> Check out our Tour Gallery</h2>
                        </Col>
                        <Col lg="12">
                            <MasonryImageGallery/> 
                        </Col>
                    </Row>
                </Container>
            </section>
{/* ------------------------ GALLERY END  ------------------------- */} 

{/* ------------------------ REVIEWS START -------------------------- */} 

            <section>
                <Container>
                    <Row>
                        <Col lg='12'>
                            <Subtitle subtitle={'Review from our Clients'}/>
                            <h2 className="review__title">What our clients tell you about us</h2>
                        </Col>
                        <Col lg='12'>
                            <Reviews /> 
                        </Col>
                    </Row>
                </Container>
            </section>
{/* ------------------------ REVIEWS END  --------------------------- */} 


{/* ------------------------ SUBSCRIPTION START  --------------------------- */} 
            <Newsletter/>
{/* ------------------------ SUBSCRIPTION END  ----------------------------- */} 
        </>
    );
};

export default Home;