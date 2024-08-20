import React from 'react';
import about1 from '../assets/about1.jpg';
import about2 from '../assets/about2.jpg';
import about3 from '../assets/about3.jpg';
import image1 from '/src/assets/test.jpg';
import image2 from '/src/assets/test-2.jpg';
import image3 from '/src/assets/test-3.jpg';
import card1 from '/src/assets/ins.jpg';
import card2 from '/src/assets/ins-2.jpg';
import card3 from '/src/assets/ins-3.jpg';
import card4 from '/src/assets/ins-4.jpg';
import brand1 from '/src/assets/band.png';
import brand2 from '/src/assets/brand-2.png';
import brand3 from '/src/assets/brand-3.png';
import brand4 from '/src/assets/brand-4.png';
import brand5 from '/src/assets/brand-5.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function About() {


  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <img src={about1} alt="About Us" className="img-fluid1" id='firstPic' />
        </div>
      </div>
      <div className="sec2">
        <div className="pic">
          <img src={brand1} alt="Brand" className="img-fluid" />
        </div>
        <div className="pic">
          <img src={brand2} alt="Brand" className="img-fluid" />
        </div>
        <div className="pic">
          <img src={brand3} alt="Brand" className="img-fluid" />
        </div>
        <div className="pic">
          <img src={brand4} alt="Brand" className="img-fluid" />
        </div>
        <div className="pic">
          <img src={brand5} alt="Brand" className="img-fluid" />
        </div>
      </div>
      <div className="row my-4">
        <div className="col-md-6">
          <img src={about2} alt="Enhancing Your Style" className="img-fluid" />
        </div>
        <div className="col-md-6 d-flex align-items-center">
          <div className='textContent my-3'>
            <h3 className='cart my-3'>Enhancing Your Style</h3>
            <p className='my-5'>Together with you, enhance your temperament – affirm your luxurious beauty with impressive designs…</p>
            <button className="btn">Shop Now</button>
          </div>
        </div>
      </div>
      <div className="row my-4">
        <div className="col-md-6 d-flex align-items-center">
          <div className='textContent'>
            <h3 className='cart my-3'>Ensemble With Earrings</h3>
            <p className='my-5'>Genuine gold and silver jewelry for young people, elegant design, diverse designs help you perfect and transform your daily style.</p>
            <button className="btn">Shop Now</button>
          </div>
        </div>
        <div className="col-md-6">
          <img src={about3} alt="Ensemble With Earrings" className="img-fluid" />
        </div>

      </div>
      <div className="container mt-5">
        <h2 className="text-center mb-4 cart">Testimonial</h2>
        <div className="row">
          <div className="col-lg-4">
            <div className="testimonial">
              <img src={image1} alt="ANANA" className="testimonial-img" />
              <div className="testimonial-content">
                <div className="testimonial-stars">
                  {'★'.repeat(5)}
                </div>
                <p className="testimonial-text">“I Was Pretty Amazed By The Store When I Walked In. The Variety Of Top Designers Was An Additional Plus...”</p>
                <p className="testimonial-author">ANANA - PHOTOGRAPHER</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="testimonial">
              <img src={image2} alt="LINDA" className="testimonial-img" />
              <div className="testimonial-content">
                <div className="testimonial-stars">
                  {'★'.repeat(5)}
                </div>
                <p className="testimonial-text">“Couldn’t Be Happier With My New Piece Of Jewelry! The Design Is Stunning, And The Quality Surpasses My Expectations...”</p>
                <p className="testimonial-author">LINDA - DESIGNER</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="testimonial">
              <img src={image3} alt="LUCA" className="testimonial-img" />
              <div className="testimonial-content">
                <div className="testimonial-stars">
                  {'★'.repeat(5)}
                </div>
                <p className="testimonial-text">“If You’re Looking For Luxury Products And Professional Service, Look No Further. I Had A Great Experience While Purchasing My IWC...”</p>
                <p className="testimonial-author">LUCA MORETTI - DESIGNER</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className='ins'>
        <h3 className="special-heading cart">Our Instgram</h3>
        <p>#adenashop</p>
        <div className="row">
          <div className="col-md-3">
            <div className="box">
              <img src={card1} alt="ins" className="img-fluid" id='over' />
              <div className="caption"></div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="box">
              <img src={card2} alt="ins" className="img-fluid" id='over' />
              <div className="caption"></div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="box">
              <img src={card3} alt="ins" className="img-fluid" id='over' />
              <div className="caption"></div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="box">
              <img src={card4} alt="ins" className="img-fluid" id='over' />
              <div className="caption"></div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
