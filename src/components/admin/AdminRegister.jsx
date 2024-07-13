import React from "react";

const AdminRegister = () => {
  return (
    <div>
      <section className="vh-100 bg-light-gray">
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card rounded-2">
                  <div className="card-body p-5">
                    <h3 className="text-uppercase text-center roboto-regular mb-5">
                      Create an Admin Account
                    </h3>

                    <form>
                      <div data-mdb-input-init className="form-outline mb-2">
                        <input
                          type="text"
                          id="form3Example1cg"
                          className="form-control form-control-lg"
                        />
                        <label
                          className="form-label roboto-regular"
                          htmlFor="form3Example1cg"
                        >
                          Your Name
                        </label>
                      </div>

                      <div data-mdb-input-init className="form-outline mb-2">
                        <input
                          type="email"
                          id="form3Example3cg"
                          className="form-control form-control-lg"
                        />
                        <label
                          className="form-label roboto-regular"
                          htmlFor="form3Example3cg"
                        >
                          Your Email
                        </label>
                      </div>

                      <div data-mdb-input-init className="form-outline mb-2">
                        <input
                          type="password"
                          id="form3Example4cg"
                          className="form-control form-control-lg"
                        />
                        <label
                          className="form-label roboto-regular"
                          htmlFor="form3Example4cg"
                        >
                          Password
                        </label>
                      </div>

                      <div className="d-flex justify-content-center">
                        <button
                          type="button"
                          data-mdb-button-init
                          data-mdb-ripple-init
                          className="btn btn-warning btn-block btn-lg gradient-custom-4 text-body"
                        >
                          <span className="roboto-regular"> Register</span>
                        </button>
                      </div>

                      <p className="text-center text-muted mt-5 mb-0 roboto-regular">
                        Have already an account?{" "}
                        <a href="#!" className="fw-bold text-body">
                          <u>Login here</u>
                        </a>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminRegister;
