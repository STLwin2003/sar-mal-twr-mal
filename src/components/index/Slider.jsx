import React from "react";
import { Link } from "react-router-dom";

const Slider = ({ carousels }) => {
  return (
    <div>
      <div className="container mb-6">
        <div
          id="carouselExample"
          className="carousel slide mb-6"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide-to="0"
              className="active"
              data-bs-interval="50000"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide-to="1"
              data-bs-interval="50000"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide-to="2"
              data-bs-interval="50000"
            ></button>
          </div>

          <div className="carousel-inner">
            {carousels &&
              carousels.map((carousel) => {
                return (
                  <Link to={`/street_food/food_detail/${carousel.pid}`}>
                    <div className={`carousel-item active`}>
                      <img
                        src={carousel.image}
                        className=" w-100 d-block"
                        alt=""
                      />
                      <div class="container">
                        <div class="carousel-caption text-center">
                          <p className="opacity-75 fs-3 fw-semi bold fst-italic">
                            <i>{carousel.title}</i>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}

            {/* <div className="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1558163250-62987a71f81a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className=" w-100 d-block"
                alt=""
              />
              <div class="container">
                <div class="carousel-caption  text-top">
                  <p className="fs-3 fw-bold">
                    <i>Every dish is a work of art; choose your masterpiece.</i>
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1511421585906-57a6e6dc3a2f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="w-100 d-block"
                alt=""
              />
              <div class="container">
                <div class="carousel-caption text-end">
                  <p className="fs-3 fw-bold">
                    <i>Food is symbolic of love when words are inadequate</i>
                  </p>
                </div>
              </div>
            </div> */}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="row  mb-6"></div>
    </div>
  );
};

export default Slider;
