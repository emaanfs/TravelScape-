// This component is a placeholder for the Reviews section of the application.
// It currently returns a simple div with the text "reviews" inside it.
import React from "react";
import Slider from "react-slick";
import ava01 from "../../assets/images/user-01.jpg";
import ava02 from "../../assets/images/user-02.jpg";
import ava03 from "../../assets/images/user-03.jpg";
import ava04 from "../../assets/images/user-04.jpg";
import ava05 from "../../assets/images/user-05.jpg";
import './review.css';



const Reviews = () => {
        const settings = {
            dots: true,
            infinite: true,
            autoplay: true,
            speed: 1000,
            swipeToSlide: true,
            autoplaySpeed: 2000,
            slidesToShow: 3,
            slidesToScroll: 1,
        

            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ],
        };
    
const reviewData = [
        {
            img: ava01,
            name: "Timmy Sebastian",
            role: "Adventure Seeker",
            text: "An absolutely unforgettable experience! The guides were knowledgeable, friendly, and made sure everyone felt safe and included. Scenery was breathtaking. Highly recommend!"
        },
        {
            img: ava02,
            name: "Sarah Miller",
            role: "Solo Traveler",
            text: "Traveling solo can be daunting, but this tour made it so easy and enjoyable. I met wonderful people, and the itinerary was perfectly paced. Already planning my next trip!"
        },
        {
            img: ava03,
            name: "David Chen",
            role: "Family Vacationer",
            text: "Our family had the time of our lives. From booking to the actual tour, everything was seamless. The kids loved it, and we made memories that will last a lifetime. Thank you!"
        },
        {
            img: ava04, // Reusing images for example
            name: "Maria Rodriguez",
            role: "Weekend Explorer",
            text: "A fantastic way to spend a weekend. The tour was well-organized, hit all the key spots, and offered great value. The attention to detail was impressive."
        },
        {
            img: ava05,
            name: "Kevin Lee",
            role: "Photography Enthusiast",
            text: "As a photographer, I'm always looking for stunning visuals, and this tour delivered! Incredible landscapes and opportunities for amazing shots. The team was very accommodating."
        }
    ];

    return (
        <>
            <Slider {...settings}>
                {reviewData.map((item, index) => (
                    <div className="review" key={index}> {/* Outer div for consistent spacing */}
                        <div className="review__inner-content"> {/* Inner div if needed, or apply styles directly to .review */}
                            {/* Optional: Add a quote icon */}
                            <div className="review__quote-icon">
                                <i className="ri-double-quotes-l"></i> {/* Example using Remix Icon */}
                            </div>
                            <p className="review__text">{item.text}</p>
                            <div className="reviewer__info">
                                <img src={item.img} alt={item.name} />
                                <div className="reviewer__details">
                                    <h6 className="mb-0">{item.name}</h6>
                                    <p>{item.role}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </>
    );
};

export default Reviews;