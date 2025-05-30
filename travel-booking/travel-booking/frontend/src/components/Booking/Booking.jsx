import {useState, useContext} from "react";
import "./booking.css";
import { Form, FormGroup, ListGroup, ListGroupItem, Button} from "reactstrap"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { BASE_URL } from "../../utils/config";

const Booking = ({ tour, avgRating }) => {
   const {price, reviews, title } = tour;
   const navigate = useNavigate();
   
   const {user} = useContext(AuthContext);

   const [booking, SetBooking] =  useState({
    userId: user && user._id,
    userEmail: user && user.email,
    tourName: title,
    fullName: " ",
    phone: " ",
    guestSize: 1,
    bookAt: " "
   });

   const handleChange = e => {
        SetBooking( prev => ({ ... prev, [e.target.id]: e.target.value }));
   };

   const serviceFee = 35; // booking price and service fees addition
   const totalAmount = Number(price) + Number(booking.guestSize) * Number(serviceFee);

   const handleClick = async e => { // for bookings to be stored in MongoDB
    e.preventDefault();

    console.log(booking);

    try {
        if(!user || user === undefined || user === null){
            return alert("Please sign in");
        }

        const res = await fetch(`${BASE_URL}/booking`,{
            method: "post",
            headers: {
                "content-type":"application/json"
            },
            credentials: "include",
            body: JSON.stringify(booking),
        });

        const result = await res.json();

        if(!res.ok){
            return alert(result.message);
        }
        navigate("/thank-you");
    } catch (err) {
        alert(err.message);
    }
   };

   /* const serviceFee = 35;  booking price and service fees addition  
   const totalAmount = price + serviceFee; */

    
   return (
        <div className="booking">
            <div className="booking__top d-flex align-items-center
            justify-content-between">
                <h3>
                    ${price} <span> / On a per-head basis </span>
                </h3>

                <span className="tour__rating d-flex align-items-center ">
                    <i className="ri-star-fill"></i> 
                    {avgRating === 0 ? null : avgRating} ({reviews ?.length})
                </span>
            </div>

{/* ------------------------------ BOOKING FORM START ---------------------------------*/}
            <div className="booking__form">
                <h5>Booking</h5>
                <Form className="booking__info-form" onSubmit={handleClick}>
                    <FormGroup>
                        <input type="text" placeholder="Name" id="fullName"
                        required onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <input type="number" placeholder="Phone Number" id="phone"
                        required onChange={handleChange} />
                    </FormGroup>
                    <FormGroup className="d-flex align-items-center gap-3">
                        <input type="date" placeholder="" id="bookAt" required onChange=
                        {handleChange} />
                        <input type="number" placeholder="Number of People" id="guestSize" required 
                        onChange={handleChange} />
                    </FormGroup>
                </Form>
            </div>
{/* ------------------------------ BOOKING FORM END -----------------------------------*/}
            <div className="booking__bottom">
                <ListGroup>
                    <ListGroupItem className="border-0 px-0">
                        <h5 className="d-flex align-items-center gap-1">
                            ${price} <i className="ri-close-line"></i> person
                        </h5>
                        <span> ${price} </span>
                    </ListGroupItem>

                    <ListGroupItem className="border-0 px-0">
                        <h5>Service charge </h5>
                        <span> ${serviceFee} </span>
                    </ListGroupItem>

                    <ListGroupItem className="border-0 px-0 total">
                        <h5> Total </h5>
                        <span> ${totalAmount} </span>
                    </ListGroupItem>
                </ListGroup>

                <Button className="btn primary__btn w-100 mt-4" onClick={handleClick} >Submit</Button>
            </div>
       </div> 
   );
};

export default Booking;