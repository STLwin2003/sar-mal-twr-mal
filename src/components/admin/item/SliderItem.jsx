import React from "react";

const SliderItem = () => {
  return (
    <div>
      <div className="bg-light-gray rounded-3 p-3 mb-2">
        <div className="row">
          <div className="col-6 d-flex">
            <span className="fw-bold fs-5 me-2">1</span>

            <img
              src="https://www.menucool.com/slider/prod/image-slider-2.jpg"
              alt=""
              className="w-100"
            />
          </div>
          <div className="col-5 my-auto d-flex">
            <div className="bg-warning p-2 rounded-1 ms-2">
              <p className="fs-5 fw-bold">Post Title Here</p>
            </div>
          </div>
          <div className="col-1 my-auto">
            <div className="">
              <i
                className="fa-solid fa-trash-can fs-4"
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
                    <div class="modal-body">
                      <p className="fs-5 fw-semibold">Do you want to delete?</p>
                    </div>
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
        </div>
        <div className="fw-semibold mt-2 ">
          <span>Date : 10/7/2024</span>
          <span className="mx-3">Time : 10:24 PM</span>
        </div>
      </div>
    </div>
  );
};

export default SliderItem;
