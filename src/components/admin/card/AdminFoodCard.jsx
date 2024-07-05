import React from "react";

const AdminFoodCard = () => {
  return (
    <div>
      <div>
        <div className="">
          <div className="d-flex">
            <img
              src="https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="card-img-top rounded shadow-lg me-2"
              alt="img"
            />
            <div>
            <div className="">
              <i class="fa-solid fa-star fs-5 text-warning "></i>
              <span className="fs-5 fw-semibold  roboto-regular ms-2">9.4</span>
            </div>
            <span className=" fs-5 roboto-regular text-decoration-none">
              Street food
            </span>
          </div>
          </div>
          

          {/* <div className="card-body">
            <p className="card-title mt-2 brown">
              <div className="">
                <i class="fa-solid fa-star fs-5 text-warning "></i>
                <span className="fs-5 fw-semibold  roboto-regular ms-2">
                  9.4
                </span>
              </div>
              <span className=" fs-5 roboto-regular text-decoration-none">
                Street food
              </span>
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AdminFoodCard;
