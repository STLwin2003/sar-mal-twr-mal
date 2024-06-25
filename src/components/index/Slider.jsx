import React from "react";

const Slider = () => {
  return (
    <div>
      <div className="container-fluid mb-5">
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
               data-bs-interval = "50000"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide-to="1"
              data-bs-interval = "50000"
             
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide-to="2"
               data-bs-interval = "50000"
               
            ></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className=" w-100 d-block"
               
                alt=""
              />
               <div class="container">
               <div class="carousel-caption text-center">
               <h1><i><b>TWR MAL SAR MAL</b></i></h1>
               <p class="opacity-75"><b><h2><i>People who loves to eat are always the best people</i></h2></b></p>
        </div>
      </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1558163250-62987a71f81a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className=" w-100 d-block"
                
                alt=""
              />
              <div class="container">
             <div class="carousel-caption  text-top">
            <p><h2><i>Just one word ,YUMMMM......</i></h2></p>
        
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
              <p><h1><i>In awe of this culinary masterpiece.</i></h1></p>
        
        </div>
      </div>
            </div>
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
      <div className="row  mb-6">
      </div>
    </div>
  );
};

export default Slider;
