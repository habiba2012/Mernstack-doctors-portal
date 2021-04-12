import React from 'react';
import Header from '../Header/Header';
import Services from '../Services/Services';
import ServiceFeature from '../ServiceFeature/ServiceFeature';
import Footer from '../Footer/Footer'


const Home = () => {
    return (
        <div>
            <Header />
            <Services />
            <ServiceFeature/>
            <Footer/>
        </div>
    );
};

export default Home;