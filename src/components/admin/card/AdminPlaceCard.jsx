import React from "react";
import { Link } from "react-router-dom";

const AdminPlaceCard = () => {
  return (
    <div>
      <div className="card">
        <div className="row my-2">
          <Link to="/admin/food_detail" className="col-4">
            <img
              src="https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-100 rounded shadow-lg p-1"
              alt="img"
            />
          </Link>
          <div className="col-8 my-auto">
            <div>
              <i class="fa-solid fa-star fs-5 text-warning "></i>
              <span className="fs-5 fw-semibold  roboto-regular ms-2">9.4</span>
            </div>
            <span className=" fs-6 roboto-regular text-decoration-none">
              Place Card
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPlaceCard;
