import React from "react";

const AboutUs = () => {
  return (
    <div>
      <div className="container">
        <div className=" my-5 px-5 py-sm-3 py-lg-5 bg-light-gray ">
          <div className="row">
            <div className="col-sm-7">
              <div className=" text-right mt-3">
                <p className="fs-2 fw-bold brown noto-serif-display-subtitle">
                  About Us
                </p>
                <p className="fs-4 fw-medium dark roboto-regular">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Beatae, quibusdam, libero dignissimos totam molestiae ea velit
                  voluptates doloremque vitae tenetur magnam quos. Libero,
                  recusandae cupiditate accusamus non a odit ratione?
                </p>
              </div>
            </div>
            <div className="col-sm-5  float-end">
              <div className="">
                <img
                  src="https://st2.depositphotos.com/30291372/46142/v/450/depositphotos_461424770-stock-illustration-flat-vector-illustration-for-about.jpg"
                  className="h-100 w-100 "
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
