
import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";

import weatherImg from '../assets/images/weather.png'
import guideImg  from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData = [
    {
            imgUrl: weatherImg,
            title: 'Find Out Weather',
            desc: 'Get the latest weather updates for your travel destination.'
        },
        {
            imgUrl: guideImg,
            title: 'Travel Guide',
            desc: 'Find the best travel guides to help you explore new places.'
        },
        {
            imgUrl: customizationImg,
            title: 'Customization',
            desc: 'Customize your travel plans according to your preferences.'
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