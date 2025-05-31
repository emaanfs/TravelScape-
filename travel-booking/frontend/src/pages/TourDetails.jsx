import { useEffect, useRef, useState, useContext } from "react";
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import "../styles/tour-details.css";
import { useParams } from "react-router-dom";
import calculateAvgRating from "./../utils/avgRating";
import avatar from "../assets/images/avatar.jpg";
import Booking from "../components/Booking/Booking";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "./../utils/config";
import { AuthContext } from "../context/AuthContext";
import tourDetailsHeroVideo from "../assets/images/hero-video.mp4"
import CommonSection from "./../shared/CommonSection";

const TourDetails = () => {
    const { id } = useParams();
    const reviewMsgRef = useRef("");
    const [ tourRating, setTourRating ] = useState(null);
    const {user} = useContext(AuthContext);

    // get data from mongoDB
    const { data: tour, loading, error } = useFetch(`${BASE_URL}/tours/${id}`);
    
    const { photo, title, desc, price, address, reviews, city, distance, maxGroupSize} = tour;

    const { totalRating, avgRating } = calculateAvgRating(reviews);

    // formating date for reviews
    const options = { day: "numeric", month: "long", year: "numeric" };

    // review request 
    const submitHandler = async e => {
        e.preventDefault();
        const reviewText = reviewMsgRef.current.value;

        try {

            if(!user || user === undefined || user === null){
                alert("Please sign in to submit a review");
            }

            const reviewObj = {
                username: user ?.username,
                reviewText,
                rating: tourRating,
            }

            const res = await fetch(`${BASE_URL}/review/${id}`,{
                method: "post",
                headers: {
                    "content-type" : "application/json",
                },
                credentials: "include",
                body: JSON.stringify(reviewObj),
            });

            const result = await res.json();
            if(!res.ok) {
                alert(result.message);
            }
            alert(result.message);
        } catch (err) {
            alert(err.message);
        }
    };

    useEffect(() => {
        window.scrollTo(0,0);
    }, [tour]);

    return (
        <>

        <CommonSection title={title || "Explore Your Tour Options"} videoSrc={tourDetailsHeroVideo} />
            <section className="tour-details-section">
                <Container>
                    {loading && <h4 className="text-center pt-5"> Loading ... </h4>}
                    {error && <h4 className="text-center pt-5">{error}</h4>}
                    {!loading && !error && tour && ( 
                        <Row className="tour-details-layout-row">
                            <Col lg="7" xl="7" md="12" className="tour-details-main-col mb-4 mb-lg-0">
                                <div className="tour-image-wrapper">
                                    <img src={photo} alt={title || 'Tour feature image'} className="tour-details-main-image" />
                                </div>

                                <div className="tour__info">
                                    <h2>{title}</h2>
                                    <div className="d-flex align-items-center gap-5">
                                        <span className="tour__rating d-flex align-items-center gap-1">
                                            <i className="ri-star-fill" style={{'color': '#FFD700'}}></i> {/* Consistent gold star */}
                                            {avgRating === 0 ? null : avgRating}
                                            {totalRating === 0 ? (
                                                " Not rated"
                                            ) : (
                                                <span> ({reviews?.length})</span>
                                            )}
                                        </span>
                                        <span>
                                            <i className="ri-map-pin-fill"></i> {address}
                                        </span>
                                    </div>
                                    <div className="tour__extra-details">
                                        <span><i className="ri-community-line"></i> {city}</span>
                                        <span><i className="ri-price-tag-3-fill"></i> ${price} / per person</span>
                                        <span><i className="ri-pin-distance-fill"></i> {distance} k/m</span>
                                        <span><i className="ri-team-fill"></i> {maxGroupSize} people</span>
                                    </div>
                                    <h5>Description</h5>
                                    <p>{desc}</p>
                                </div>

                                <div className="tour__reviews mt-4">
                                    <h4>Reviews ({reviews?.length || 0} reviews)</h4>
                                    <Form onSubmit={submitHandler}>
                                        <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                                            {[1, 2, 3, 4, 5].map(star => (
                                                <span key={star} onClick={() => setTourRating(star)} className={tourRating === star ? 'active-star' : ''}>
                                                    <i className="ri-star-s-fill"></i>
                                                </span>
                                            ))}
                                        </div>
                                        <div className="review__input">
                                            <input type="text" ref={reviewMsgRef} placeholder="Share your trip experience" required />
                                            <button className="btn primary__btn text-white" type="submit">
                                                Submit
                                            </button>
                                        </div>
                                    </Form>
                                    <ListGroup className="user__reviews">
                                        {reviews?.map((review, index) => (
                                            <div key={index} className="review__item">
                                                <img src={avatar} alt={`${review.username} avatar`} />
                                                <div className="w-100">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div>
                                                            <h5>{review.username}</h5>
                                                            <p>{new Date(review.createdAt).toLocaleDateString("en-US", options)}</p>
                                                        </div>
                                                        <span className="d-flex align-items-center">
                                                            {review.rating}
                                                            <i className="ri-star-s-fill"></i>
                                                        </span>
                                                    </div>
                                                    <h6>{review.reviewText}</h6>
                                                </div>
                                            </div>
                                        ))}
                                    </ListGroup>
                                </div>
                            </Col>
                            <Col lg="5" xl="5" md="12" className="tour-details-sidebar-col">
                                <Booking tour={tour} avgRating={avgRating} />
                            </Col>
                        </Row>
                    )}
                </Container>
            </section>
        </>
    );
};

export default TourDetails; 