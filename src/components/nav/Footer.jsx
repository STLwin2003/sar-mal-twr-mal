import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className=" text-lg-start bg-body-tertiary  w-100  ">
        <div className="">
          <section className="pt-1 brown">
            <div className="container text-lg-center text-md-start mt-5">
              <div className="row mt-3 ">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-lg-2 mb-sm-0">
                  <h6 className=" fw-bold mb-lg-2 mb-sm-0  fs-5">
                    SarMalTwrMal
                  </h6>
                  <p>
                    Here you can use rows and columns to organize your footer
                    content. Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.
                  </p>
                </div>

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-lg-2 mb-sm-0">
                  <h6 className=" fw-bold mb-lg-2  mb-sm-0">Foods</h6>
                  <p>
                    <Link to="" className="text-reset">
                      Food 1
                    </Link>
                  </p>
                  <p>
                    <Link to="" className="text-reset">
                      Food 2
                    </Link>
                  </p>
                  <p>
                    <Link to="" className="text-reset">
                      Food 3
                    </Link>
                  </p>
                  <p>
                    <Link to="" className="text-reset">
                      Food 4
                    </Link>
                  </p>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-lg-2 mb-sm-0">
                  <h6 className=" fw-bold mb-lg-2 mb-sm-0 ">Places</h6>
                  <p>
                    <Link to="" className="text-reset">
                      Place 1
                    </Link>
                  </p>
                  <p>
                    <Link to="" className="text-reset">
                      Place 2
                    </Link>
                  </p>
                  <p>
                    <Link to="" className="text-reset">
                      Place 3
                    </Link>
                  </p>
                  <p>
                    <Link to="" className="text-reset">
                      Place 4
                    </Link>
                  </p>
                </div>

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-lg-2 mb-sm-0 ">
                  <h6 className=" fw-bold mb-lg-2 mb-sm-0 ">Contact</h6>
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
