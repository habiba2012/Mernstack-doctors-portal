import React from 'react';
import Loader from '../../../assets/images/pre-loader.gif';

const Preloader = () => {
    return (
        <div className="text-center col-12 py-5 my-5">
            <img src={Loader} alt="" />
        </div>
    );
};

export default Preloader;