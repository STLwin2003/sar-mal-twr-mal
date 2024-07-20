import React from "react";

const RatingItem = ({ id, rating }) => {
  return (
    <div>
      {rating &&
        rating.map((post) => {
          return (
            <div key={post.id} class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#${post.id}`}
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  <span className="fs-5 fw-semibold roboto-regular">
                    {post.title}
                  </span>
                </button>
              </h2>
              <div
                id={post.id}
                class="accordion-collapse collapse"
                data-bs-parent={`#${id}`}
              >
                <div class="accordion-body">
                  {post.rate.map((pr, count) => {
                    return (
                      <div key={pr._id} className="row rounded-4">
                        <div className="col-3 my-auto d-flex">
                          <span className="my-auto fs-6 fw-bold">
                            {count + 1}
                          </span>
                          <div className="p-2 text-start">
                            <img
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_1bpO0XDD8fbmRvnbnkCoQNFFoH3AqofVTg&s"
                              alt=""
                              className=" rounded-circle w-25 shadow-lg ms-2"
                            />
                            <span className="fs-6 ms-3 roboto-regular">
                              {pr.user.name}
                            </span>
                          </div>
                        </div>
                        <div className="col-3 my-auto">
                          <div className="border border-dark-subtle rounded-5 p-1">
                            {pr.count === 1 ? (
                              <i class="fa-solid fa-star fs-4 me-2 text-warning"></i>
                            ) : pr.count === 2 ? (
                              <>
                                <i class="fa-solid fa-star fs-4 me-2 text-warning"></i>
                                <i class="fa-solid fa-star fs-4 me-2 text-warning"></i>
                              </>
                            ) : pr.count === 3 ? (
                              <>
                                <i class="fa-solid fa-star fs-4 me-2 text-warning"></i>
                                <i class="fa-solid fa-star fs-4 me-2 text-warning"></i>
                                <i class="fa-solid fa-star fs-4 me-2 text-warning"></i>
                              </>
                            ) : pr.count === 4 ? (
                              <>
                                <i class="fa-solid fa-star fs-4 me-2 text-warning"></i>
                                <i class="fa-solid fa-star fs-4 me-2 text-warning"></i>
                                <i class="fa-solid fa-star fs-4 me-2 text-warning"></i>
                                <i class="fa-solid fa-star fs-4 me-2 text-warning"></i>
                              </>
                            ) : pr.count === 5 ? (
                              <>
                                <i class="fa-solid fa-star fs-4 me-2 text-warning"></i>
                                <i class="fa-solid fa-star fs-4 me-2 text-warning"></i>
                                <i class="fa-solid fa-star fs-4 me-2 text-warning"></i>
                                <i class="fa-solid fa-star fs-4 me-2 text-warning"></i>
                                <i class="fa-solid fa-star fs-4 me-2 text-warning"></i>
                              </>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                        <div className=" col-4 my-auto">
                          <p className="fs-6 fw-semibold roboto-regular text-warning-emphasis">
                            {pr.user.email}
                          </p>
                        </div>
                        <hr />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default RatingItem;
