/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Nav from "./dashboard/Nav";

const Dashboard = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row g-0">
          <Nav />
          <main className="col-10 bg-secondary">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="flex-fill"></div>

              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a
                    href=""
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    <i className="fa-solid fa-user-circle"></i>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li className="dropdown-item">User Profile</li>
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

            <div className="container-fluid mt-3 p-4">
              <div className="row flex-column flex-lg-row">
                <h2 className="h6 text-white-50">Quick Starts</h2>
                <div className="col">
                  <div className="card mb-3">
                    <div className="card-body">
                      <h3 className="card-title h2">32</h3>
                      <span className="text-success h5">
                        <i className="fa-solid fa-chart-line "></i>
                        Total posts
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card mb-3">
                    <div className="card-body">
                      <h3 className="card-title h2">82</h3>
                      <span className="text-success h5">
                        <i className="fa-solid fa-chart-line"></i> Total Users
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card mb-3">
                    <div className="card-body">
                      <h3 className="card-title h2">142</h3>
                      <span className="text-success h5">
                        <i className="fa-solid fa-chart-line"></i>Total Food
                        Place
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card mb-3">
                    <div className="card-body">
                      <h3 className="card-title h2">56</h3>
                      <span className="text-success h5">
                        <i className="fa-solid fa-chart-line"></i>Total Place
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row flex-column flex-lg-row mt-4">
                <div className="col">
                  <h1 className="h6 text-white-50">LOCATIONS</h1>
                  <div className="card mb-3">
                    <div className="card-body">
                      <table className="table">
                        <tr>
                          <th>ID</th>
                          <th>Age Group</th>
                          <th>Data</th>
                          <th>progress</th>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>20-30</td>
                          <td>19%</td>
                          <td>
                            <i className="fa-solid fa-chart-pie"></i>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>30-40</td>
                          <td>40%</td>
                          <td>
                            <i className="fa-solid fa-chart-bar"></i>
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>40-50</td>
                          <td>20%</td>
                          <td>
                            <i className="fa-solid fa-chart-line"></i>
                          </td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>50</td>
                          <td>11%</td>
                          <td>
                            <i className="fa-solid fa-chart-pie"></i>
                          </td>
                        </tr>
                      </table>
                      <table className="table">
                        <tr>
                          <th>ID</th>
                          <th>Age Group</th>
                          <th>Data</th>
                          <th>progress</th>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>20-30</td>
                          <td>19%</td>
                          <td>
                            <i className="fa-solid fa-chart-pie"></i>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>30-40</td>
                          <td>40%</td>
                          <td>
                            <i className="fa-solid fa-chart-bar"></i>
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>40-50</td>
                          <td>20%</td>
                          <td>
                            <i className="fa-solid fa-chart-line"></i>
                          </td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>50</td>
                          <td>11%</td>
                          <td>
                            <i className="fa-solid fa-chart-pie"></i>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <h1 className="h6 text-white-50">DATA</h1>
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="text-end">
                        <button className="btn btn-sm btn-outline-secondary">
                          <i className="fa-solid fa-search"></i>
                        </button>
                        <button className="btn btn-sm btn-outline-secondary">
                          <i className="fa-solid fa-sort-amount-up"></i>
                        </button>
                        <button className="btn btn-sm btn-outline-secondary">
                          <i className="fa-solid fa-filter"></i>
                        </button>
                      </div>
                      <table className="table">
                        <tr>
                          <th>ID</th>
                          <th>Age Group</th>
                          <th>Data</th>
                          <th>progress</th>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>20-30</td>
                          <td>19%</td>
                          <td>
                            <i className="fa-solid fa-chart-pie"></i>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>30-40</td>
                          <td>40%</td>
                          <td>
                            <i className="fa-solid fa-chart-bar"></i>
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>40-50</td>
                          <td>20%</td>
                          <td>
                            <i className="fa-solid fa-chart-line"></i>
                          </td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>50</td>
                          <td>11%</td>
                          <td>
                            <i className="fa-solid fa-chart-pie"></i>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
        <footer className="text-center text-muted py-4">
          &copy; Copyright 2024
        </footer>
      </div>
    </div>
  );
};

export default Dashboard;
