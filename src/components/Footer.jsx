import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className=" text-lg-start bg-body-tertiary  w-100  ">
        <div className="">
          <section className="pt-1 brown">
            <div className="container text-lg-center text-md-start mt-5">
              <div className="row mt-3 ">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-2  ">
                  <h6 className=" fw-bold mb-2   fs-5">SarMalTwrMal</h6>
                  <p>
                    Here you can use rows and columns to organize your footer
                    content. Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.
                  </p>
                </div>

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-2  ">
                  <h6 className=" fw-bold mb-2  ">Street Food</h6>
                  <p>
                    <a href="#!" className="text-reset">
                      Angular
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      React
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Vue
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Laravel
                    </a>
                  </p>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-2 ">
                  <h6 className=" fw-bold mb-2  ">Coffee Shop</h6>
                  <p>
                    <a href="#!" className="text-reset">
                      Pricing
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Settings
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Orders
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Help
                    </a>
                  </p>
                </div>

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-2 ">
                  <h6 className=" fw-bold mb-2  ">Contact</h6>
                  <p>
                    <i className="fas fa-home me-3"></i> Pathein, 10011
                  </p>
                  <p>
                    <i className="fas fa-envelope me-3"></i>
                    info@example.com
                  </p>
                  <p>
                    <i className="fas fa-phone me-3"></i> + 959 765 514 319
                  </p>
                  <p>
                    <i className="fas fa-print me-3"></i> + 959 650 354 440
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="text-center brown p-4">
            © 2024 Copyright: SarMalTwrMal
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
