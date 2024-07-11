/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import signupImg from "../../assets/img/welcome.svg";

const signup = () => {
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
                      <p className="text-center fw-semibold mb-4 mx-1 mx-md-4">
                        <span className="dark fs-2">Sign up</span>
                      </p>

                      <form className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-3">
                          <p className="fas fa-user fa-lg me-3 fa-fw text-warning"></p>
                          <div className="form-floating form-outline flex-fill mb-0">
                            <input
                              type="name"
                              id="floatingname"
                              className="form-control"
                              placeholder="Name"
                            />
                            <label htmlFor="floating name">Name</label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <p className="fas fa-envelope fa-lg me-3 fa-fw text-warning"></p>
                          <div className="form-floating form-outline flex-fill mb-0">
                            <input
                              type="email"
                              id="floatingemail"
                              className="form-control"
                              placeholder="Email"
                            />
                            <label htmlFor="floating email">Email</label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <p className="fas fa-lock fa-lg me-3 fa-fw text-warning"></p>
                          <div className="form-floating form-outline flex-fill mb-0">
                            <input
                              type={passwordShow ? "text" : "password"}
                              className="form-control"
                              id="floatingPassword1"
                              placeholder="Enter password"
                            />

                            <span
                              className="position-absolute top-0 end-0 border-0 bg-white mt-3 me-2 fw-semibold"
                              onClick={passwordShowHide}
                              type="button"
                            >
                              {passwordShow ? "Hide" : "Show"}
                            </span>
                            <label htmlFor="floatingPassword1">Password</label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <p className="fas fa-key fa-lg me-3 fa-fw text-warning"></p>
                          <div className="form-floating form-outline flex-fill mb-0">
                            <input
                              type={passwordShow ? "text" : "password"}
                              className="form-control"
                              id="floatingPassword2"
                              placeholder="Enter password"
                            />

                            <span
                              className="position-absolute top-0 end-0 border-0 bg-white mt-3 me-2 fw-semibold"
                              onClick={passwordShowHide}
                              type="button"
                            >
                              {passwordShow ? "Hide" : "Show"}
                            </span>
                            <label htmlFor="floatingPassword2">
                              Repeat Your Password
                            </label>
                          </div>
                        </div>

                        <div className="d-flex justify-content-center mb-3">
                          <button
                            type="button"
                            data-mdb-button-init
                            data-mdb-ripple-init
                            className="btn btn-lg  btn-outline-warning border-2"
                          >
                            Register
                          </button>
                        </div>
                        <div className="d-flex justify-content-center mx-5">
                          <Link
                            to="/home"
                            onClick={() => {
                              window.scrollTo(0, 0);
                            }}
                            className="link-success"
                          >
                            <p className="fs-6 fw-medium">Back to Home</p>
                          </Link>
                        </div>
                        <div className="d-flex justify-content-center">
                          <button className="btn btn-warning">
                            <a
                              data-mdb-ripple-init
                              className="btn-sm  fs-5 text-dark"
                              style={{
                                textDecoration: "none ",
                              }}
                              href="#!"
                              role="button"
                            >
                              <i className="fa-brands fa-google me-2"></i>Sign
                              up with Google
                            </a>
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex justify-content-center order-1 order-lg-2">
                      <img
                        src={signupImg}
                        className="img-fluid p-3"
                        alt="img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="vh-100" style={{background: "#eee"}}>
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card rounded">
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center fw-semibold mb-5 mx-1 mx-md-4 mt-4"><span className="text-warning fs-2">Sign up</span></p>

                <form className="mx-1 mx-md-4">

                <div className="d-flex flex-row align-items-center mb-4">
                    <p className="fas fa-user fa-lg me-3 fa-fw text-warning"></p>
                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c" class="form-control" />
                      <label className="form-label text-warning fs-5" for="form3Example1c">Your Name</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <p class="fas fa-envelope fa-lg me-3 fa-fw text-warning"></p>
                    <div data-mdb-input-init class="form-outline flex-fill mb-0">
                      <input type="email" id="form3Example3c" class="form-control" />
                      <label class="form-label text-warning fs-5" for="form3Example3c">Your Email</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <p class="fas fa-lock fa-lg me-3 fa-fw text-warning"></p>
                    <div data-mdb-input-init class="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4c" class="form-control" />
                      <label class="form-label text-warning fs-5" htmlFor="form3Example4c">Password</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <p class="fas fa-key fa-lg me-3 fa-fw text-warning"></p>
                    <div data-mdb-input-init class="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4cd" class="form-control" />
                      <label class="form-label text-warning fs-5" htmlFor="form3Example4cd">Repeat your password</label>
                    </div>
                  </div>

                  <div class="form-check d-flex justify-content-center mb-5">
                    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                    <label class="form-check-label text-warning fs-5" htmlFor="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div>

                  <div class="d-flex mx-5 mb-3 mb-lg-4">
                    <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-lg" style={{background:"#b46c14",color:"white"}}>Register</button>
                  </div>
                  <a data-mdb-ripple-init class="btn btn-sm justify-content-center mx-5 p-2" style={{background: "#b46c14",color:"white"}} href="#!"
                    
                  role="button">
                  <i class="fab fa-google me-2"></i>Continue with Google
                  </a>



                </form>

              </div>
              <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                  <img src="undraw_access_account_re_8spm.svg" className="img-fluid" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> */}
    </div>
  );
};

export default signup;
