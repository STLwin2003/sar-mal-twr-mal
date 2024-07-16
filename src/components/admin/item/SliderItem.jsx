import React, { useState } from "react";
import { useNavigate } from "react-router";
import firebaseService from "../../../firebase/firebaseService";
import Loading from "../../Loading";
import moment from "moment";

const SliderItem = ({ carousels, setCarousels }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const carouselHandler = (id) => {
    navigate(`/street_food/food_detail/${id}`);
  };
  const deleteHandler = async (image, id) => {
    const result = window.confirm("Do you want to delete?");
    if (result) {
      setIsLoading(true);
      const filter = carousels.filter((carousel) => carousel._id !== id);
      const token = localStorage.getItem("token");
      await firebaseService.image_delete(image);
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/posts/carousel/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.ok) {
        console.log("first");
        setCarousels(filter);
      }
    }
    setIsLoading(false);
    return false;
  };
  return (
    <div>
      {carousels &&
        carousels.map((carousel) => {
          return (
            <div className="bg-light-gray rounded-3 p-3 mb-2">
              <div className="row">
                <div className="col-6 d-flex">
                  <span className="fw-bold fs-5 me-2">1</span>

                  <img src={carousel.image} alt="" className="w-100" />
                </div>
                {isLoading && <Loading />}
                <div className="col-5 my-auto d-flex">
                  <div
                    onClick={() => carouselHandler(carousel.pid)}
                    className="bg-warning p-2 rounded-1 ms-2"
                    style={{ cursor: "pointer" }}
                  >
                    <p className="fs-5 fw-bold">{carousel.title}</p>
                  </div>
                </div>
                <div className="col-1 my-auto">
                  <div className="">
                    <i
                      onClick={() =>
                        deleteHandler(carousel.image, carousel._id)
                      }
                      className="fa-solid fa-trash-can fs-4"
                      // data-bs-toggle="modal"
                      // data-bs-target="#delete"
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
                            <p className="fs-5 fw-semibold">
                              Do you want to delete?
                            </p>
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
                <span>
                  Date :{" "}
                  {moment(carousel.created).format("MMMM DD YYYY, h:mm:ss a")}
                </span>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default SliderItem;
