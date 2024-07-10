/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import Nav from "./dashboard/Nav";

const Dashboard = () => {
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
              <div className="container-fluid bg-white">
                <div className="row flex-column flex-lg-row">
                  <h2 className="h6 text-white">Quick Starts</h2>
                  <div className="col">
                    <div className="card bg-success">
                      <div className="card-body">
                        <h3 className="card-title h2">32</h3>
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
                        <h3 className="card-title h2">82</h3>
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
                    <h1 className="h6 text-white">Current Users</h1>
                    <div className=" bg-light-gray rounded p-3">
                      <table className=" table fw-medium">
                        <tr>
                          <th>No</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Date and Time</th>
                        </tr>

                        <tr>
                          <td>1</td>
                          <td>Shin Thant Lwin</td>
                          <td>shinthantlwin@gmail.com</td>
                          <td>2/7/2024 08:00pm</td>
                        </tr>

                        <tr>
                          <td>2</td>
                          <td>Thwe Gyi</td>
                          <td>thwegyi@gmail.com</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Ei Pyae</td>
                          <td>eipyae@gmail.com</td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>Ei Po</td>
                          <td>eipo@gmail.com</td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>Pyae Pyae</td>
                          <td>pyaepyae@gmail.com</td>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>Shin Thant Lwin</td>
                          <td>shinthantlwin@gmail.com</td>
                          <td>2/7/2024 08:00pm</td>
                        </tr>

                        <tr>
                          <td>2</td>
                          <td>Thwe Gyi</td>
                          <td>thwegyi@gmail.com</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>eipyae@gmail.com</td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>Ei Po</td>
                          <td>eipo@gmail.com</td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>Pyae Pyae</td>
                          <td>pyaepyae@gmail.com</td>
                        </tr>
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
