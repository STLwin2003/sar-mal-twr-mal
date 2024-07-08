import React from "react";

const UserList = () => {
  return (
    <div>
      <div class="container">
        <div class="row ">
          <div class="col-lg-12">
            <div class="main-box clearfix ">
              <div class="table-responsive ">
                <table class="table user-list">
                  <thead>
                    <tr>
                      <th>
                        <span>User</span>
                      </th>
                      <th>
                        <span>Name</span>
                      </th>
                      <th>
                        <span>Email</span>
                      </th>
                      <th class="text-center">
                        <span>Operation</span>
                      </th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar1.png"
                          alt=""
                          className=" rounded-circle  shadow-lg  "
                          style={{ width: "40px" }}
                        />
                      </td>
                      <td className="fs-6 ms-3 roboto-regular my-auto">Mila</td>
                      <td>
                        <a href="#!">mila@kunis.com</a>
                      </td>
                      <td class="text-center">
                        <i className="fa-solid fa-trash-can "></i>
                      </td>
                      <td className="width:20%">
                        <span className="role">User</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar2.png"
                          alt=""
                          className=" rounded-circle shadow-lg "
                          style={{ width: "40px" }}
                        />
                      </td>
                      <td className="fs-6 ms-3 roboto-regular">
                        George Clooney
                      </td>
                      <td>
                        <a href="#!">marlon@brando.com</a>
                      </td>
                      <td class="text-center">
                        <i className="fa-solid fa-trash-can "></i>
                      </td>
                      <td className="width:20%">
                        <span className="role">Admin</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar2.png"
                          alt=""
                          className=" rounded-circle shadow-lg"
                          style={{ width: "40px" }}
                        />
                      </td>
                      <td className="fs-6 ms-3 roboto-regular">
                        George Clooney
                      </td>
                      <td>
                        <a href="#!">marlon@brando.com</a>
                      </td>
                      <td class="text-center">
                        <i className="fa-solid fa-trash-can "></i>
                      </td>
                      <td className="width:20%">
                        <span className="role">Admin
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
