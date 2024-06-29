import React from "react";

const CoffeeShopCard = () => {
  return (
    <div>
      <div className="">
        <img
          src="https://images.pexels.com/photos/414630/pexels-photo-414630.jpeg?auto=compress&cs=tinysrgb&w=600"
          class="card-img-top shadow-lg rounded"
          alt="img"
        />
        <div className="card-body">
          <p className="card-title mt-2 mb-5 ">
            <span className="fw-medium fs-5">Coffee</span>
          </p>{" "}
        </div>
      </div>
    </div>
  );
};

export default CoffeeShopCard;
