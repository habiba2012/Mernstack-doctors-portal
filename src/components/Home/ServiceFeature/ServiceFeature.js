import React from 'react';
import FeatureImg from '../../../assets/images/serviceFeature.png'

const ServiceFeature = () => {
    return (
        <section className="features-service pb-0 pb-md-5 my-5">
            <div className="container mb-5">
                <div className="row mt-5 mb-5">
                    <div className="col-md-5">
                        <img className="img-fluid" src={FeatureImg} alt="" />
                    </div>

                    <div className="col-md-7">
                        <h2>Exceptional Dental <br /> Care, on Your terms</h2>
                        <p className="">It is a long established fact that a reader will be distracted
                        by the readable content of a page. In publishing and graphic design, Lorem ipsum
                        is a placeholder text commonly used to demonstrate the visual form of a document
                        or a typeface without relying on meaningful content. Lorem ipsum may be used as a
                        placeholder before final copy is available.It is a long established fact that a reader will be distracted
                by the readable content of a page.  </p>
                        <button className="btn btn-grad">Learn More </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceFeature;