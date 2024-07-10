import React from "react";

const ProfileItem = ({ e, id }) => {
  return (
    <tbody>
      <tr>
        <td>
          <p className="fw-semibold">{id + 1}</p>
        </td>
        <td>
          <img
            src="https://bootdey.com/img/Content/avatar/avatar1.png"
            alt=""
            className=" rounded-circle  shadow-lg  "
            style={{ width: "35px" }}
          />
        </td>
        <td className="fs-6 ms-3 roboto-regular my-auto">{e}</td>
        <td>
          <a href="#!">mila@kunis.com</a>
        </td>
        <td class="text-center">
          <div className="my-auto">
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
        </td>
        <td className="width:20%">
          <span className="role">User</span>
        </td>
      </tr>
    </tbody>
  );
};

export default ProfileItem;
