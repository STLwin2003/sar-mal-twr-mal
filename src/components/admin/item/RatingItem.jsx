import React from "react";
import AdminFoodCard from "../card/AdminFoodCard";

const RatingItem = ({ e, id }) => {
  return (
    <div>
      <div className="row  rounded-4">
        <div className="col-3 my-auto d-flex">
          <span className="my-auto fs-6 fw-bold">{id + 1}</span>
          <div className="p-2 text-start">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_1bpO0XDD8fbmRvnbnkCoQNFFoH3AqofVTg&s"
              alt=""
              className=" rounded-circle w-25 shadow-lg ms-2"
            />
            <span className="fs-6 ms-3 roboto-regular">{e}</span>
          </div>
        </div>
        <div className="col-3 my-auto">
          <div className="border border-dark-subtle rounded-5 p-1">
            <i class="fa-solid fa-star fs-4 mx-2 text-warning"></i>
            <i class="fa-solid fa-star fs-4 me-2 text-warning"></i>
            <i class="fa-solid fa-star fs-4 me-2 text-warning"></i>
            <i class="fa-solid fa-star fs-4 me-2 text-warning"></i>
            <i class="fa-solid fa-star fs-4 me-2 text-warning"></i>
          </div>
        </div>
        <div className=" col-4 my-auto">
          <p className="fs-5 fw-semibold roboto-regular text-warning-emphasis">
            Post Title here and here
          </p>
        </div>
        <div className="col-2 my-auto">
          <div className="float-end">
            <i
              className="fa-solid fa-trash-can "
              data-bs-toggle="modal"
              data-bs-target="#delete"
            ></i>

            <div
              class="modal fade"
              id="delete"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <p className="fs-5 fw-semibold">Do you want to delete?</p>
                  <div class="modal-body"></div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button type="button" class="btn btn-primary">
                      Yes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default RatingItem;
