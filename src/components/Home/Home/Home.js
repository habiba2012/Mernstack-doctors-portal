import React, { useEffect } from 'react';
import Services from '../Services/Services';
import ServiceFeature from '../ServiceFeature/ServiceFeature';
import MakeAppointment from '../MakeAppointment/MakeAppointment'
import Footer from '../Footer/Footer'
import Header from '../Header/Header';
import Testimonials from '../Testimonials/Testimonials';


const Home = () => {
    useEffect(() => { window.scrollTo(0, 0) }, [])
    return (
        <div>
            <Header />
            <Services />
            <ServiceFeature />
            < MakeAppointment />
            <Testimonials />
            <Footer />
        </div>
    );
};

export default Home;