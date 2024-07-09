import React from "react";

const ProfileItem = ({ e, id }) => {
  return (
    <tbody>
      <tr>
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
          <i className="fa-solid fa-trash-can "></i>
        </td>
        <td className="width:20%">
          <span className="role">User</span>
        </td>
      </tr>
    </tbody>
  );
};

export default ProfileItem;
