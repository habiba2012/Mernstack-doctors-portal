import React from 'react';
import Fluoride from '../../assets/images/dental.png'
import Cavity from '../../assets/images/tooth-clean.png'
import Whitening from '../../assets/images/tooth.png'
import ServicesCard from '../ServicesCard/ServicesCard';
const Services = () => {
    const serviceData = [
        {
            name: 'Fluoride Treatment',
            img: Fluoride
        },
        {
            name: 'Cavity Filling',
            img: Cavity
        },
        {
            name: 'Teeth Whitening',
            img: Whitening
        }
    ]
    return (

        <section className="services-container mt-5">
            <div className="text-center">
                <h5 style={{ color: "#1CC7C1" }}>OUR SERVICES</h5>
                <h2>Services We Provide </h2>
                <div className="d-flex justify-content-center">
                    <div className="w-75 row mt-5 pt-5">
                        {serviceData.map(service => <ServicesCard service={service} ></ServicesCard>)}

                    </div>
                </div>
            </div>
        </section>

    );
};

export default Services;