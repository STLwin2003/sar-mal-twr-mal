import React from "react";

const login = () => {
  return (
    <div>
      <div className="vh-100" style={{ background: "light-gray;" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card rounded">
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center fw-semibold mb-5 mx-1 mx-md-4 mt-4">
                        <span className="brown fs-2">
                          <i>Please Login to your account</i>
                        </span>
                      </p>

                      <form className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <p className="fas fa-envelope fa-lg me-3 fa-fw brown"></p>
                          <div className="form-floating form-outline flex-fill mb-0">
                            <input
                              type="email"
                              id="floatingemail"
                              className="form-control"
                              placeholder="Enter a valid email"
                            />
                            <label for="floating email">Email</label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <p className="fas fa-lock fa-lg me-3 fa-fw brown"></p>
                          <div class="form-floating form-outline flex-fill mb-0">
                            <input
                              type="password"
                              class="form-control"
                              id="floatingPassword"
                              placeholder="Enter password"
                            />
                            <label for="floatingPassword">Password</label>
                          </div>
                        </div>

                        <div className="d-flex justify-content-center mx-5 mb-3 mb-lg-4">
                          <button
                            className=" btn-brown btn-rounded px-5 fs-5"
                            type="button"
                          >
                            Login
                          </button>
                        </div>
                        <div className="d-flex justify-content-center mx-5 mb-3 mb-lg-4">
                          <p className="small fw-bold mt-2 pt-1 mb-0">
                            Don't have an account?
                            <a href="#!" className="link-danger">
                              Register
                            </a>
                          </p>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                        className="img-fluid"
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
    </div>
  );
};

export default login;
