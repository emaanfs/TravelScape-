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

        <CommonSection title={"Tour Search Result"} videoSrc={tourDetailsHeroVideo} />
        <section className="tour-details-section">
            <Container>
                {loading && <h4 className="text-center pt-5"> Loading ... </h4>}
                {error && <h4 className="text-center pt-5">{error}</h4>}
                {!loading && !error && (
                <Row>
                    <Col lg="8">
                        <div className="tour__content">
                            <img src={photo} alt="" />

                            <div className="tour__info">
                                <h2>{title}</h2>

                                <div className="d-flex align-items-center gap-5">
                                    <span className="tour__rating d-flex align-items-center gap-1">
                                        <i className="ri-star-fill" style={{'color': '#7DA2FF'}}></i> {/* coloring of the review star icon*/} 
                                        {avgRating === 0 ? null : avgRating}
                                        {totalRating === 0 ? (
                                            "Not rated"
                                        ) : (
                                            <span> ({reviews ?.length}) </span> 
                                        )}
                                    </span>
                                    <span>
                                        <i className="ri-map-pin-fill"></i> {address}
                                    </span>
                                </div>

                                <div className="tour__extra-details">
                                        <span>
                                            <i className="ri-community-line"></i> {city} 
                                        </span>
                                        <span>
                                            <i className="ri-price-tag-3-fill"></i> ${price} / per person
                                        </span>
                                        <span>
                                            <i className="ri-pin-distance-fill"></i> {distance} k/m
                                        </span>
                                        <span>
                                            <i className="ri-team-fill"></i>  {maxGroupSize} people
                                        </span>
                                </div>
                                <h5>Description</h5>   
                                <p>{desc}</p>    
                            </div>
{/* ------------------------------TOUR REVIEWS START ---------------------------------*/}
                            <div className="tour__reviews mt-4">
                                <h4>Reviews ({reviews ?.length} reviews)</h4>
                                
                                <Form onSubmit={submitHandler}>
                                    <div className="d-flex align-items-center gap-3 mb-4 
                                    rating__group">
                                        <span onClick={() => setTourRating(1)}><i className="ri-star-s-fill"></i></span>
                                        <span onClick={() => setTourRating(2)}><i className="ri-star-s-fill"></i></span>
                                        <span onClick={() => setTourRating(3)}><i className="ri-star-s-fill"></i></span>
                                        <span onClick={() => setTourRating(4)}><i className="ri-star-s-fill"></i></span>
                                        <span onClick={() => setTourRating(5)}><i className="ri-star-s-fill"></i></span>
                                    </div>

                                    <div className="review__input">
                                        <input type="text" ref={reviewMsgRef} placeholder="Share your trip" required />
                                        <button className="btn primary__btn text-white" type="submit">
                                            Submit
                                        </button>
                                    </div>
                                </Form>

                                <ListGroup className="user__reviews">
                                    {reviews ?.map((review, index) => (
                                        <div key={index} className="review__item">
                                            <img src={avatar} alt="" />

                                            <div className="w-100">
                                                <div className="d-flex align-items-center 
                                                justify-content-between">
                                                    <div>
                                                        <h5>{review.username}</h5>
                                                        <p>
                                                            {new Date(review.createdAt).toLocaleDateString(
                                                            "en-US", options
                                                            )}
                                                        </p>
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

{/* ------------------------------TOUR REVIEWS END -----------------------------------*/}                  
                        </div>
                    </Col>
                    
                    <Col lg="4">
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