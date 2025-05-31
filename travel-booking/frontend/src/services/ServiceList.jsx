
import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";

import weatherImg from '../assets/images/weather.png'
import guideImg  from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData = [
    {
            imgUrl: weatherImg,
            title: 'Destination Forecast',
            desc: 'Stay informed with up-to-date weather reports for your travel location'
        },
        {
            imgUrl: guideImg,
            title: 'Explore Like a Local',
            desc: 'Go beyond the map with curated travel guides for every explorer'
        },
        {
            imgUrl: customizationImg,
            title: 'Plan Your Way',
            desc: 'Your travel, your rules — customize every moment.'
        },
]


const ServiceList = () => {
    return (
        <>
            {servicesData.map((item, index) => (
                <Col lg='3' md="6" s="12" className="mb-4" key={index}>
                    <ServiceCard item={item} />
                </Col>
            ))}
     </>
    );
};

export default ServiceList;