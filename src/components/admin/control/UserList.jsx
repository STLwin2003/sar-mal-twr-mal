/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "../dashboard/Nav";
import ProfileItem from "../item/ProfileItem";
import { useAdmin } from "../../../context/AdminProvider";

const UserList = () => {
  // const [users, setUsers] = useState([]);
  const { users, setUsers } = useAdmin();
  useEffect(() => {
    (async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/users/list`);
      const { resource } = await res.json();
      setUsers(resource);
    })();
  }, [setUsers]);
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 position-fixed">
            <Nav />
          </div>
          <main className="col-10 position-absolute top-0 end-0">
            {/* top nav start */}

            <nav className="navbar navbar-expand-lg navbar-light bg-light-gray">
              <div className="flex-fill"></div>

              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <Link
                    to=""
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    <i className="fa-solid fa-user-circle"></i>
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <Link to="/user_profile" className="dropdown-item">
                      Back to User
                    </Link>
                    <li className="dropdown-item">Logout</li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link">
                    <i className="fa-solid fa-cog"></i>
                  </a>
                </li>
              </ul>
            </nav>
            <section className="p-3">
              <div class="container">
                <div className="row my-4">
                  <div className="col-4">
                    <input
                      type="text"
                      className="form-control border-2 border border-dark"
                      placeholder="Search a post"
                    />
                  </div>
                  <div className="col-8">
                    <div className="float-start border p-1 bg-light-gray rounded-2">
                      <p className="fs-6 fw-semibold">
                        Total users -
                        <span className="fs-5 fw-bold"> {users.length}</span>
                      </p>
                    </div>
                    <div className="float-end">
                      <div>
                        <select
                          onChange={(e) => {
                            console.log(e.target.value);
                          }}
                          className="btn btn-warning px-4"
                          type="button"
                        >
                          <option value="recent" className="dropdown-item">
                            Recent
                          </option>
                          <option value="A_to_Z" className="dropdown-item">
                            A to Z
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row ">
                  <div className="col-lg-12">
                    <div className="main-box clearfix ">
                      <div className="table-responsive ">
                        <table className="table user-list">
                          <thead>
                            <tr>
                              <th>
                                <span>No</span>
                              </th>
                              <th>
                                <span>User</span>
                              </th>
                              <th>
                                <span>Name</span>
                              </th>
                              <th>
                                <span>Email</span>
                              </th>
                              <th className="text-center">
                                <span>Operation</span>
                              </th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <ProfileItem users={users} setUsers={setUsers} />
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default UserList;
