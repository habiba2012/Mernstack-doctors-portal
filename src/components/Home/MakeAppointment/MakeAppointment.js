import React from 'react';
import './MakeAppointment.css'
import DentistImg from '../../../assets/images/dentist.png'

const MakeAppointment = () => {
    return (
        <section className="make-appointment">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 d-none d-md-block">
                        <img className="img-fluid" src={DentistImg} alt="" />
                    </div>
                    <div className="col-md-7 text-white py-5">
                        <h5>APPOINTMENT</h5>
                        <h1 className="my-4">Make an Appointment <br /> Today</h1>
                        <p>Please before visit our clinic, make an appointment here. You will get best dentist on town here.</p>
                        <button className="btn btn-grad">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;