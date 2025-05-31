import { Card, CardBody } from "reactstrap";
import {Link} from "react-router-dom";
import calculateAvgRating from "../utils/avgRating";
import "./tour-card.css";

const TourCard = ({tour}) => {

    const { _id, title, city, photo, price, featured, reviews} = tour

    const { totalRating, avgRating } = calculateAvgRating(reviews);


    return (
        <>
            <div className="tour__card">
                <Card>
                    <div className="tour__img">
                        <img src={photo} alt="tour-img" />
                        { featured && <span className="featured-tag">Top Tours</span>}
                    </div>

                    <CardBody>
                        <div className="card__top">
                            <span className="tour__location">
                                <i className="ri-map-pin-line"></i> {city}
                            </span>

                            <span className="tour__rating">
                                <i className="ri-star-fill"></i> {avgRating === 0 ? null : avgRating}
                                {totalRating === 0 ? (
                                    " Not rated "
                                 ) : (
                                 <span> ({reviews ?.length}) </span> 
                                 )}
                            </span>
                        </div>
                    
                        <h5 className="tour__title"> 
                            <Link to={`/tours/${_id}`}> {title} </Link>
                        </h5>

                        <div className="card__bottom">
                            <h5>${price} <span> / per person</span></h5>
                            <button className="btn booking__btn">
                            <Link to={`/tours/${_id}`} >Book Now</Link>
                            </button>
                        </div>
                    </CardBody>

                </Card>
            </div>
        </>
    );
};

export default TourCard;