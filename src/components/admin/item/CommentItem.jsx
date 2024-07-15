import React, { useState } from "react";
import AdminFoodCard from "../card/AdminFoodCard";
import profile from "../../../assets/profile.jpeg";
import Loading from "../../../components/Loading";
const CommentItem = ({ comments, setComments }) => {
  const [isLoading, setIsLoading] = useState(false);
  const deleteHandle = async (cid, pid) => {
    const result = window.confirm(" Do you want to delete?");
    if (result) {
      const token = localStorage.getItem("token");
      const filter = comments.filter((comment) => comment._id !== cid);

      setIsLoading(true);
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/users/${pid}/comment/${cid}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.ok) {
        setComments(filter);
      }
    }
    setIsLoading(false);
    return false;
  };
  return (
    <div>
      {comments &&
        comments.map((comment, count) => {
          return (
            <div className="row rounded-4">
              <div className="col-3 d-flex my-auto">
                <span className="my-auto fs-6 fw-bold">{count + 1}</span>
                <div className="p-2">
                  <img
                    src={
                      comment.commenter.image !== ""
                        ? comment.commenter.image
                        : profile
                    }
                    alt=""
                    className=" rounded-circle w-25 shadow-lg ms-2"
                  />
                  <span className="fs-6 ms-3 roboto-regular">
                    {comment.commenter.name}
                  </span>
                </div>
              </div>
              <div className="col-5 my-auto">
                <div className="border border-dark-subtle rounded-5 p-2 mb-1">
                  <p className="fs-6 roboto-regular fw-semibold rounded-5 ">
                    {comment.comment}
                  </p>
                </div>
              </div>
              {isLoading && <Loading />}
              <div className=" col-4 my-auto">
                <div className="d-flex">
                  <p className="fs-5 fw-semibold roboto-regular text-warning-emphasis">
                    {comment.post.title}
                  </p>
                  <div className=" ms-5">
                    <i
                      onClick={() => {
                        deleteHandle(comment._id, comment.post._id);
                      }}
                      type="button"
                      className="fa-solid fa-trash-can"
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
                            <button
                              type="button"
                              class="btn btn-primary"
                              data-bs-dismiss="modal"
                            >
                              Yes
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
            </div>
          );
        })}
    </div>
  );
};

export default CommentItem;
