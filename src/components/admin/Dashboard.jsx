/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import Nav from "./dashboard/Nav";
import { usePosts } from "../../context/PostProvider";
import { useAdmin } from "../../context/AdminProvider";
import moment from "moment";
import { useUser } from "../../context/UserProvider";

const Dashboard = () => {
  const { posts } = usePosts();
  const { users } = useAdmin();
  const { logout } = useUser();
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
                    <li onClick={logout} className="dropdown-item">
                      Logout
                    </li>
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
              <div className="container-fluid bg-white">
                <div className="row flex-column flex-lg-row">
                  <h2 className="h6 text-warning">Quick Starts</h2>
                  <div className="col">
                    <div className="card bg-success">
                      <div className="card-body">
                        <h3 className="card-title h2">{posts.length}</h3>
                        <span className="text-white h5">
                          <i className="fa-solid fa-chart-line "></i>
                          Total posts
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card bg-warning">
                      <div className="card-body">
                        <h3 className="card-title h2">{users.length}</h3>
                        <span className="text-white h5">
                          <i className="fa-solid fa-chart-line"></i> Total Users
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card bg-secondary">
                      <div className="card-body">
                        <h3 className="card-title h2">142</h3>
                        <span className="text-white h5">
                          <i className="fa-solid fa-chart-line"></i>Total Food
                          Post
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card bg-primary">
                      <div className="card-body">
                        <h3 className="card-title h2">56</h3>
                        <span className="text-white h5">
                          <i className="fa-solid fa-chart-line"></i>Total Place
                          Post
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row flex-column flex-lg-row mt-4">
                  <div className="col">
                    <h1 className="h6 text-warning">Current Users</h1>
                    <div className=" bg-light-gray rounded p-3">
                      <table className=" table fw-medium">
                        <tr>
                          <th>No</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Created Date</th>
                          <th>Login Date</th>
                        </tr>

                        {users.map((user, count) => {
                          return (
                            <tr key={user._id}>
                              <td>{count + 1}</td>
                              <td>{user.name}</td>
                              <td>{user.email}</td>
                              <td>
                                {moment(user.created).format(
                                  "MMMM DD YYYY, h:mm:ss a"
                                )}
                              </td>

                              <td>
                                {moment(user.login_date)
                                  .startOf("minute")
                                  .fromNow()}
                              </td>
                            </tr>
                          );
                        })}
                      </table>
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

export default Dashboard;
