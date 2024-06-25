import React from "react";

const Slider = () => {
  return (
    <div>
      <div className="container-fluid mb-5">
        <div
          id="carouselExample"
          className="carousel slide mb-6"
          data-bs-ride="carousel"
          data-bs-interval = "1000"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide-to="0"
              className="active"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide-to="1"
             
             
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide-to="2"
               
            ></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://www.theroadtrip.co.nz/wp-content/uploads/2017/10/best-restaurants-new-zealand-960x636.jpg"
                className=" w-100 d-block"
                height="650"
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
                src="https://blog.swiggy.com/wp-content/uploads/2024/02/Mutton-Rolls-1024x538.jpg"
                className=" w-100 d-block"
                height="650"
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
                src="https://siamais.co.uk/wp-content/uploads/2023/07/tom-yum-1024x771.jpeg"
                className="w-100 d-block"
                height="650"
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
    </div>
  );
};

export default Slider;
