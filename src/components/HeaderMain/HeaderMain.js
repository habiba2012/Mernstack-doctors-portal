import React from 'react';
import Chair from '../../assets/images/chair.png'
import './HeaderMain.css'

const HeaderMain = () => {
    return (
        <main style={{ height: "600px" }} className="row d-flex align-items-enter">
            <div className="col-md-4 offset-md-1">
                <h1 style={{ color: '#3A4256' }}>Your New Smile <br /> Starts Here</h1>
                <p className="text-secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque magni in doloribus officiis tempore rerum eligendi facilis, ad natus ullam eos suscipit
                dolorem aspernatur illum vitae quisquam ducimus deserunt asperiores.</p>
                <button className="btn btn-grad">GET APPOINTMENT</button>
            </div>
            <div className="col-md-6">
                <img src={Chair} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default HeaderMain;