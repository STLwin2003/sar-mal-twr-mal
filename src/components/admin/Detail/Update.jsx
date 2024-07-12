/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

const Update = () => {
  return (
    <div>
      <section className="bg-light-gray rounded-3">
        <div className="container p-4">
          <div className="row">
            <h1>Add Post from admin</h1>
          </div>
          <div className="row">
            <div className="col">
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  className="form-control border"
                  placeholder="Enter name"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="address"
                  className="form-control border"
                  placeholder="Enter address"
                />
              </div>
              <div className="mb-4 ">
                <div className="d-flex gap-3">
                  <input
                    type="text"
                    className="form-control border"
                    placeholder="Enter place Latitude"
                  />
                  <input
                    type="text"
                    className="form-control border"
                    placeholder="Enter place Longitude"
                  />
                </div>
              </div>
              <div className="mb-4">
                <input
                  type="number"
                  name="phone no"
                  className="form-control border"
                  placeholder="Enter Phone no:"
                />
              </div>
              <div className="mb-4 ">
                <div className="d-flex gap-3">
                  <input
                    type="text"
                    className="form-control border"
                    placeholder="Enter Opening Hour"
                  />
                  <input
                    type="text"
                    className="form-control border"
                    placeholder="Enter Close Hour"
                  />
                </div>
              </div>
              <div className="mb-4 ">
                <div className="">
                  <p>Please select 3 images </p>
                  <input type="file" accept="image/*" multiple />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="mb-4">
                <div className="dropdown">
                  <button
                    className="btn btn-warning dropdown-toggle px-4"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Choose Category
                  </button>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li>
                      <a className="dropdown-item" href="#">
                        Street Food
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Restaurant
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Place
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mb-4">
                <textarea
                  name=""
                  placeholder="Food review area"
                  id=""
                  rows={4}
                  cols={50}
                  className=" rounded p-2"
                ></textarea>
              </div>
              <div className="mb-4">
                <textarea
                  name=""
                  placeholder="Layout review area"
                  id=""
                  rows={4}
                  cols={50}
                  className=" rounded p-2"
                ></textarea>
              </div>
            </div>
            <div>
              <button className="btn btn-warning px-5 me-3">Add</button>
              <button
                type="button"
                class="btn btn-success"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Update;
