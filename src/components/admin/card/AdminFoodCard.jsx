import React from "react";
import { Link } from "react-router-dom";

const AdminFoodCard = ({ id, image, title, rating }) => {
  return (
    <div key={id}>
      <div className="row my-2">
        <Link to={`/street_food/food_detail/${id}`}>
          <img
            src={image[0]}
            className="w-100 rounded shadow-lg p-1"
            alt="img"
          />
        </Link>
        <div>
          <div>
            <i class="fa-solid fa-star fs-5 text-warning "></i>
            <span className="fs-5 fw-semibold  roboto-regular ms-2">
              {rating}
            </span>
          </div>
          <span className=" fs-6 roboto-regular text-decoration-none">
            {title}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AdminFoodCard;
