import React from 'react';

const ServicesCard = ({ service }) => {
    return (
        <div className="col-md-4 ">
            <img style={{ height: "50px" }} src={service.img} alt="" />
            <h5 className="mt-3 mb-3">{service.name}</h5>
            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ab ducimus dolor tempore expedita vitae autem assumenda veniam, consectetur animi.
                 Placeat nobis quaerat temporibus totam corrupti quo earum dolore ducimus!</p>
        </div>
    );
};

export default ServicesCard;