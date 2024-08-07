/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import loginImg from "../../assets/img/login.svg";
import { useUser } from "../../context/UserProvider";
import Loading from "../Loading";

const login = () => {
  let [passwordShow, setPasswordShow] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useUser();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [loading, setLoading] = useState(false);

  function passwordShowHide() {
    setPasswordShow(!passwordShow);
  }

  const login = async (email, password) => {
    setLoading(true);

    const res = await fetch(` ${process.env.REACT_APP_API_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const result = await res.json();
    if (res.ok) {
      localStorage.setItem("token", result.token);
      const user = await fetch(
        `${process.env.REACT_APP_API_URL}/users/verify`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${result.token}`,
          },
        }
      );
      const { data } = await user.json();
      setUser(data.user);
      navigate("/");
    } else {
      alert(result.message);
    }
    setLoading(false);
  };

  const loginGoogle = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        setLoading(true);
        const res = await fetch(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `${tokenResponse.token_type} ${tokenResponse.access_token}`,
            },
          }
        );

        const { email, sub } = await res.json();
        login(email, sub);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    },
  });

  const loginAccount = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    login(email, password);
  };

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
                          <button
                            onClick={loginGoogle}
                            className="btn btn-outline-warning border-2 px-4"
                          >
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
                              ref={emailRef}
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
                              ref={passwordRef}
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
                            onClick={loginAccount}
                            className=" btn-warning btn btn-rounded px-5 fs-5"
                            type="button"
                          >
                            Login
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
                    {loading && <Loading />}
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
