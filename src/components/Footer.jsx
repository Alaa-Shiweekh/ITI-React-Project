import React from 'react'

export default function Footer() {
  return (
  <>
    <footer className='bg-black text-white p-5'>
      <section >
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h4 className="text-uppercase fw-bold mb-4">Newsletter Sign-up
              </h4>
              <p>
                Get insider information about exclusive offers, events and more.
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
              About Us
              </h6>
              <p>
                <a href="#!" className="text-reset text-decoration-none text-black">Our Shops</a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none text-black">Contact</a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none text-black">Artists</a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none text-black">Local Giving</a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none text-black">Press</a>
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
              Categories
              </h6>
              <p>
                <a href="#!" className="text-reset text-decoration-none text-black">New In</a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none text-black">Settings</a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none text-black">Orders</a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none text-black">Help</a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Useful links
              </h6>
              <p>
                <a href="#!" className="text-reset text-decoration-none text-black">Pricing</a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none text-black">Settings</a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none text-black">Orders</a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none text-black">Help</a>
              </p>
            </div>

          </div>
        </div>
      </section>
        <div className="container">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-top">
        <div className="me-5 d-none d-lg-block">
          <span>Copyright © 2024. All Right Reserved</span>
        </div>
        <div>
          <a href className="me-4 text-reset">
            <i className="fab fa-facebook-f" />
          </a>
          <a href className="me-4 text-reset">
            <i className="fab fa-x-twitter" />
          </a>
          <a href className="me-4 text-reset">
            <i className="fab fa-tiktok" />
          </a>
          <a href className="me-4 text-reset">
            <i className="fab fa-instagram" />
          </a>
        </div>
      </section>
        </div>
    </footer>
  </>

  )
}
