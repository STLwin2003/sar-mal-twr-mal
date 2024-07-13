import React, { useRef } from "react";
import { useUser } from "../../context/UserProvider";
import { useNavigate } from "react-router";

const AdminRegister = () => {
  const { setUser } = useUser();
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const keyRef = useRef();
  const navigate = useNavigate();
  const adminRegister = async () => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const key = keyRef.current.value;
    if (key === process.env.REACT_APP_ADMIN_KEY) {
      const user = await fetch(
        `${process.env.REACT_APP_API_URL}/users/register?admin=${key}`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
            image: "",
          }),
        }
      );
      const result = await user.json();
      if (user.ok) {
        setUser(result.resource);
        navigate("/login");
      } else {
        alert(result.resource);
      }
    } else {
      alert("key is not equal!");
    }
  };
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
                          ref={nameRef}
                          type="text"
                          id="name"
                          className="form-control form-control-lg"
                        />
                        <label
                          className="form-label roboto-regular"
                          htmlFor="name"
                        >
                          Your Name
                        </label>
                      </div>

                      <div data-mdb-input-init className="form-outline mb-2">
                        <input
                          ref={emailRef}
                          type="email"
                          id="mail"
                          className="form-control form-control-lg"
                        />
                        <label
                          className="form-label roboto-regular"
                          htmlFor="mail"
                        >
                          Your Email
                        </label>
                      </div>

                      <div data-mdb-input-init className="form-outline mb-2">
                        <input
                          ref={passwordRef}
                          type="password"
                          id="password"
                          className="form-control form-control-lg"
                        />
                        <label
                          className="form-label roboto-regular"
                          htmlFor="password"
                        >
                          Password
                        </label>
                      </div>
                      <div data-mdb-input-init className="form-outline mb-2">
                        <input
                          ref={keyRef}
                          type="text"
                          id="password"
                          className="form-control form-control-lg"
                        />
                        <label
                          className="form-label roboto-regular"
                          htmlFor="password"
                        >
                          Key
                        </label>
                      </div>

                      <div className="d-flex justify-content-center">
                        <button
                          onClick={adminRegister}
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
