import React from "react";

const StreetFoodCard = () => {
  return (
    <div>
      <div class="">
        <img
          src="https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          class="card-img-top"
          alt="img"
        />
        <div class="card-body">
          <p class="card-title mt-2 brown">
            <span className="brown fs-5">Street food</span>
          </p>{" "}
            <div className="row">
              <i className="fa-regular fa-star mb-4"></i>
             

              {/* <div className="col-md-8 col-lg-6 col-xl-4">
                <div className="rating-card">
                  <div className="text mb-4">
                  <div className=" fa fa-star rating-stars d-inline-block position-relative onclick brown">
                      <div className="filled-star"></div>
                    </div>
                    <span className="rating-number">4.3</span>
                  </div>
                </div>
              </div> */}
            </div>
        
        </div>
      </div>
    </div>
  );
};

export default StreetFoodCard;
