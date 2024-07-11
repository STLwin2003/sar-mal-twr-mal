/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import loginImg from "../../assets/img/login.svg";

const login = () => {
  let [passwordShow, setPasswordShow] = useState(false);
  function passwordShowHide() {
    setPasswordShow(!passwordShow);
  }

  return (
    <div>
      <div className="vh-100 bg-light-gray">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card rounded">
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center fw-semibold mb-3   mx-1 mx-md-4 mt-4">
                        <span className=" fs-3">
                          <i>Please Login to your account</i>
                        </span>
                      </p>

                      <form className="mx-1 mx-md-4">
                        <div className="d-flex justify-content-center justify-content-lg-end my-3 ">
                          <button className="btn btn-outline-warning border-2 px-4">
                            <a
                              data-mdb-ripple-init
                              className="btn-sm  fs-5 text-dark"
                              style={{
                                textDecoration: "none ",
                              }}
                              href="#!"
                              role="button"
                            >
                              <i className="fa-brands fa-google mx-2"></i>
                              Continue with Google
                            </a>
                          </button>
                        </div>

                        <div className=" d-flex  justify-content-center">
                          <p className="fs-5 fw-semibold">or</p>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <p className="fas fa-envelope fa-lg me-3 fa-fw text-warning"></p>
                          <div className="form-floating form-outline flex-fill mb-0">
                            <input
                              type="email"
                              id="floatingemail"
                              className="form-control"
                              placeholder="Enter a valid email"
                            />
                            <label htmlFor="floating email">Email</label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <p className="fas fa-lock fa-lg me-3 fa-fw text-warning"></p>
                          <div className="form-floating form-outline flex-fill mb-0 position-relative">
                            <input
                              type={passwordShow ? "text" : "password"}
                              className="form-control"
                              id="floatingPassword"
                              placeholder="Enter password"
                            />

                            <span
                              className="position-absolute top-0 end-0 border-0 bg-white mt-3 me-2 fw-semibold"
                              onClick={passwordShowHide}
                              type="button"
                            >
                              {passwordShow ? "Hide" : "Show"}
                            </span>

                            <label htmlFor="floatingPassword">Password</label>
                          </div>
                        </div>

                        <div className="d-flex justify-content-center mx-5 mb-2 ">
                          <button
                            className=" btn-warning btn btn-rounded px-5 fs-5"
                            type="button"
                          >
                            Login
                          </button>
                        </div>

                        <div className="d-flex justify-content-center mx-5">
                          <Link to="/home" className="link-success">
                            <p className="fs-6 fw-medium">Back to Home</p>
                          </Link>
                        </div>
                        <div className="d-flex justify-content-center mx-5 mb-3 mb-lg-4">
                          <p className="small fw-bold mb-0">
                            Don't have an account?
                            <Link to="/signup" className="link-danger">
                              Register
                            </Link>
                          </p>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-6 d-flex align-items-center order-1 order-lg-2">
                      <img src={loginImg} className="img-fluid p-5" alt="img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
