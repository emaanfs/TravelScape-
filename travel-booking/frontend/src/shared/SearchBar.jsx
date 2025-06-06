import {useRef} from "react";  
import "./search-bar.css";
import { Col, Form, FormGroup } from "reactstrap";
import { BASE_URL } from "./../utils/config";
import { useNavigate } from "react-router-dom";

const SearchBar = ({layout = "dark"}) => {
    const locationRef = useRef('');
    const distanceRef = useRef(0);
    const maxGroupSizeRef = useRef(0);
    const navigate = useNavigate();
    
    const searchHandler = async () => { 

        const location = locationRef.current.value;
        const distance = distanceRef.current.value;
        const maxGroupSize = maxGroupSizeRef.current.value;

        if  (location === "" || distance === ""  || maxGroupSize === "" ){
            return alert( " Please fill in all fields! " );
        }

        const res = await fetch (`${BASE_URL}/tours/search/getTourBySearch?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`
        );

        if(!res.ok) alert("Something went wrong");

        const result = await res.json();

            // log the full response from the backend
        console.log("SearchBar - Full API Result:", result);
            // log the specific data being passed to navigate 
        console.log("SearchBar - Data being passed via navigate state:", result.data);
            
        navigate(`/tours/search?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`, 
                {state: result.data});
    };

    //  conditional class based on the layout prop
    const searchBarClass = `search__bar ${layout}-layout`;

    return (
     <Col lg="12">
            <div className={searchBarClass}>
                <Form className="d-flex align-items-center gap-4">
                    <FormGroup className="d-flex gap-3 form__group form__group-fast">
                        <span><i className="ri-map-pin-line"></i></span> 
                        <div>
                            <h6>Location</h6>
                            <input type="text" placeholder="Where are you going?" ref={locationRef} />
                        </div>
                    </FormGroup>
                    <FormGroup className="d-flex gap-3 form__group form__group-fast">
                        <span><i className="ri-road-map-line"></i></span> 
                        <div>
                            <h6>Distance</h6>
                            <input type="number" placeholder="Distance K/m" ref={distanceRef} />
                        </div>
                    </FormGroup>
                    <FormGroup className="d-flex gap-3 form__group form__group-last">
                        <span><i className="ri-group-2-line"></i></span> 
                        <div>
                            <h6>Max People</h6>
                            <input type="number" placeholder="0" ref={maxGroupSizeRef} />
                        </div>
                    </FormGroup>
                    <span className="search__icon" type="button" onClick={searchHandler}> 
                        <i className="ri-search-line"></i> 
                    </span>
                </Form>
            </div>
        </Col>
    );
};

export default SearchBar;