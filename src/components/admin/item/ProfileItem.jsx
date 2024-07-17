import React, { useState } from "react";
import profile from "../../../assets/profile.jpeg";
import Loading from "../../Loading";
import firebaseService from "../../../firebase/firebaseService";

const ProfileItem = ({ users, setUsers }) => {
  const [isLoading, setIsLoading] = useState(false);

  const deleteHandle = async (uid, image) => {
    const filter = users.filter((user) => user._id !== uid);
    const result = window.confirm("Do you want to delete?");
    if (image !== "") {
      await firebaseService.image_delete(image);
    }
    if (result) {
      const token = localStorage.getItem("token");
      setIsLoading(true);

      const res = await fetch(`${process.env.REACT_APP_API_URL}/users/${uid}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.ok) setUsers(filter);
    }
    setIsLoading(false);
    return false;
  };
  return (
    <>
      {users &&
        users.map((user, count) => {
          return (
            <tbody key={user._id}>
              {isLoading && <Loading />}
              <tr>
                <td>
                  <p className="fw-semibold">{count + 1}</p>
                </td>
                <td>
                  <img
                    src={user.image !== "" ? user.image : profile}
                    alt=""
                    className=" rounded-circle  shadow-lg  "
                    style={{ width: "35px" }}
                  />
                </td>

                <td className="fs-6 ms-3 roboto-regular my-auto">
                  {user.name}
                </td>

                <td>
                  <a href="#!">{user.email}</a>
                </td>

                <td class="text-center">
                  <div className="my-auto">
                    <i
                      onClick={() => deleteHandle(user._id, user.image)}
                      type="button"
                      className="fa-solid fa-trash-can "
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
                </td>
                <td className="width:20%">
                  <span className="role">{user.role}</span>
                </td>
              </tr>
            </tbody>
          );
        })}
    </>
  );
};

export default ProfileItem;
