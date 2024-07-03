/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Dashboard = () => {
  return (
    <div>
      <div className="container-fluid mt-3">
        <div className="row flex-column flex-lg-row">
          <h2 className="h6 text-white">Quick Starts</h2>
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
                <span className="text-warning h5">
                  <i className="fa-solid fa-chart-line"></i> Total Users
                </span>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-3">
              <div className="card-body">
                <h3 className="card-title h2">142</h3>
                <span className="text-dark h5">
                  <i className="fa-solid fa-chart-line"></i>Total Food Post
                </span>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-3">
              <div className="card-body">
                <h3 className="card-title h2">56</h3>
                <span className="text-primary h5">
                  <i className="fa-solid fa-chart-line"></i>Total Place Post
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
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
