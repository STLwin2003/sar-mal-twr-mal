import React from "react";
import { Link } from "react-router-dom";
import Header from "../nav/Header";
import Footer from "../nav/Footer";

const PlaceDetail = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row mb-4">
          <nav aria-label="breadcrumb ">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <Link to="/">
                  <span className="fs-5">Home</span>
                </Link>
              </li>
              <li class="breadcrumb-item">
                <Link to="/place_list">
                  <span className="fs-5">Place List</span>
                </Link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                <span className="fs-5">Detail</span>
              </li>
            </ol>
          </nav>
        </div>
        <div className="row my-3">
          <div className="col-lg-6">
            <p className="fs-2 fw-bold brown noto-serif-display-subtitle">
              Pathein Park
            </p>
            <p>
              <i class="fa-solid fa-location-dot fs-4 me-4"></i>{" "}
              <span className="fs-5">Pathein, 10011</span>
            </p>
            <p>
              <i className="fa-solid fa-clock me-4 fs-4"></i>
              <span className="fs-5"> Opening Hours:</span>
            </p>
            <p>
              <i className="fas fa-star text-warning me-4 fs-4"></i>
              <span className="fs-4 fw-semibold">9.4</span>
            </p>
            <div className="mb-2">
              <button className="btn-brown">
                <span className="fs-5 ps-2">Add Favorite</span>
                <i class="fa-solid fa-heart fs-4 mx-3"></i>
              </button>
            </div>
            <div className="mb-2">
              <button
                className="btn btn-warning"
                data-bs-toggle="modal"
                data-bs-target="#rating"
              >
                <span className="fs-5 ps-2">Give Rating</span>
                <i class="fa-solid fa-star mx-3 fs-4"></i>
              </button>
            </div>
            <p className="fs-5 roboto-regular">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              sequi id autem perspiciatis fugit ipsum cumque dolor nulla, ut
              officiis temporibus laborum ea tempore! Aspernatur, dolor tenetur.
              Cumque, dolores sunt.
            </p>
          </div>
          <div className="col-lg-6 mx-auto">
            <img
              src="https://images.unsplash.com/photo-1714466330772-097c1f9c43cb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGxhY2VzfGVufDB8fDB8fHww"
              alt=""
              className=" w-100 rounded-5  "
            />
          </div>
        </div>
        <div className="row my-5">
          <div className="col-lg-5">
            <img
              src="https://images.unsplash.com/photo-1714466330772-097c1f9c43cb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGxhY2VzfGVufDB8fDB8fHww"
              alt=""
              className=" w-100 rounded-3 "
            />
            <p className="fs-5 roboto-regular my-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
              odio alias asperiores repudiandae perspiciatis, dolore enim ab
              dolor impedit veritatis a incidunt quaerat. Nesciunt pariatur
              totam vero rem ipsum unde!
            </p>
          </div>
          <div className="col-lg-7">
            <img
              src="https://images.unsplash.com/photo-1714466330772-097c1f9c43cb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGxhY2VzfGVufDB8fDB8fHww"
              alt=""
              className=" w-100 rounded-3 "
            />
          </div>
        </div>
        {/* comment section start */}
        <div className="row mb-5">
          <section className="my-3">
            <div className="col-2">
              <button className="btn btn-warning rounded-circle ">
                <i class="fa-regular fa-user"></i>
              </button>
              <span className="fs-6 roboto-regular mx-2">User</span>
            </div>
            <div className="col-8">
              <div className="border bg-light-gray rounded-5">
                <p className="fs-5 roboto-regular p-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                </p>
              </div>
            </div>
          </section>
          <section className="my-3">
            <div className="col-2">
              <button className="btn btn-warning rounded-circle ">
                <i class="fa-regular fa-user"></i>
              </button>
              <span className="fs-6 roboto-regular mx-2">User</span>
            </div>
            <div className="col-8">
              <div className="border bg-light-gray rounded-5">
                <p className="fs-5 roboto-regular p-3">
                  Lorem ipsum dolor sit amet consectetur
                </p>
              </div>
            </div>
          </section>
          <section className="my-3">
            <div className="col-2">
              <button className="btn btn-warning rounded-circle ">
                <i class="fa-regular fa-user"></i>
              </button>
              <span className="fs-6 roboto-regular mx-2">User</span>
            </div>
            <div className="col-8">
              <div className="border bg-light-gray rounded-5">
                <p className="fs-5 roboto-regular p-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                  quam ex ut id ipsam facere recusandae est nihil fugiat
                  laboriosam maxime. Explicabo, nisi? Aliquid vel perferendis
                  illum deserunt nemo repellendus!
                </p>
              </div>
            </div>
          </section>
          <section className="mt-3">
            <div className="col-2">
              <button className="btn btn-warning rounded-circle ">
                <i class="fa-regular fa-user"></i>
              </button>
              <span className="fs-6 roboto-regular mx-2">User</span>
            </div>
            <div className="col-8">
              <div className="border bg-light-gray rounded-5">
                <p className="fs-5 roboto-regular p-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                  quam ex ut id ipsam facere recusandae est nihil fugiat
                </p>
              </div>
            </div>
          </section>
        </div>
        {/* comment section end */}
        <div className="row mb-5">
          <div className="col-lg-5 col-sm-0"></div>
          <div className="col-lg-7 col-sm-12">
            <div className="float-end d-flex">
              <textarea
                rows={3}
                className="form-control-lg rounded-3 border-2 px-4"
                placeholder="Enter your comment"
              ></textarea>
              <button className="btn-brown px-5 m-3">
                <span className="fs-5">Submit</span>
              </button>
            </div>
          </div>
        </div>
        <div className="row mb-5"></div>
      </div>
      <hr />
      <Footer />
    </div>
  );
};

export default PlaceDetail;
