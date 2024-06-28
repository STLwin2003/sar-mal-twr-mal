import React from "react";

const AboutUs = () => {
  return (<div>
    <div className=" container my-3 pt-5 bg-light-gray p-5">
      
      <div className="row mb-3">
        <div className="col-sm-7 container-fluid">
          <div className=" text-right my-3  mt-5">
          <p className="fs-3 fw-semibold dark">About Us</p>
          <p className="fs-4 medium dark">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, quibusdam, libero dignissimos totam molestiae ea velit voluptates doloremque vitae tenetur magnam quos. Libero, recusandae cupiditate accusamus non a odit ratione?</p>
        </div>
        </div>
        <div className="col-sm-5  float-end ">
          <div className="rounded-2">
            <img src="https://st2.depositphotos.com/30291372/46142/v/450/depositphotos_461424770-stock-illustration-flat-vector-illustration-for-about.jpg" className="h-100 w-100 " alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>);

};

export default AboutUs;
