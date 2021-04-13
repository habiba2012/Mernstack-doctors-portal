import React from 'react';
import './Testimonials.css';
import Testimonial from '../Testimonial/Testimonial'
import christian from '../../../assets/images/christian.png';
import sofia from '../../../assets/images/sofia.png';
import pia from '../../../assets/images/pia.png';

const Testimonials = () => {
    const testimonialsData = [
        {
            quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
            name: 'Christian Andrue ',
            from: 'Copenhagen',
            img: christian
        },
        {
            quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
            name: 'Sofia Karlson',
            from: 'Søborg',
            img: sofia
        },
        {
            quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
            name: 'Pia Hanson',
            from: 'Gentofte',
            img: pia
        }
    ]
    return (
        <section className="testimonials my-5 py-5">
            <div className="container">
                <div className="section-header">
                    <h5 className="text-primary text-uppercase">Testimonial</h5>
                    <h1>What Our Patients <br /> Says </h1>
                    <div className="card-deck mt-5">
                        {
                            testimonialsData.map(testimonial => <Testimonial testimonial={testimonial}></Testimonial>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;