import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slider1 from '../assets/slider.jpg';
import slider2 from '../assets/slider-2.jpg';
import slider3 from '../assets/slider-3.jpg';

export default function Home() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  return (
    <>
      <section>
        <div className="container">
          <Slider {...settings}>
            <div>
              <img src={slider1} alt="Slide 1" className=' img-fluid w-100' />
            </div>
            <div >
              <img src={slider2} alt="Slide 2" className=' img-fluid w-100' />
            </div>
            <div>
              <img src={slider3} alt="Slide 3" className=' img-fluid w-100' />
            </div>
          </Slider>
        </div>
        <section className='my-5 shadow-lg mx-auto'>
        <div className="container  p-5">
          <div className="row">
            <div className="col-md-3 d-flex justify-content-center align-items-center gap-3">
              <div className="icon">
              <i class="fa-solid fa-truck-fast fa-2x"></i>
              </div>
              <div className="text">
                <h6>Free Shipping</h6>
                <p className='text-muted'>Free shipping for orders from $200</p>
              </div>
            </div>
            <div className="col-md-3 d-flex justify-content-center align-items-center gap-3">
              <div className="icon">
              <i class="fa-solid fa-box fa-2x"></i>
              </div>
              <div className="text">
                <h6>Easy returns</h6>
                <p className='text-muted'>Refund within 14 days</p>
              </div>
            </div>
            <div className="col-md-3 d-flex justify-content-center align-items-center gap-3">
              <div className="icon">
              <i class="fa-solid fa-shield-halved fa-2x"></i>
              </div>
              <div className="text">
                <h6>Secure payment</h6>
                <p className='text-muted'>Payment information is safe</p>
              </div>
            </div>        
            <div className="col-md-3 d-flex justify-content-center align-items-center gap-3">
              <div className="icon">
              <i class="fa-regular fa-comments fa-2x"></i>
              </div>
              <div className="text">
                <h6>Customer care</h6>
                <p className='text-muted'>Outstanding premium support</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </section>
      
    </>
  );
}