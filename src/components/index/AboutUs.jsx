import React from "react";

const AboutUs = () => {
  return (<div>


    <div className="container my-3">
      <div className="row">
        <div className="col my-auto">
          <div className="mx-auto mb-3">
            <span className="fs-1 fw-bold brown ">About Us</span>
          </div>
          <p className="fs-4 brown">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, quibusdam, libero dignissimos totam molestiae ea velit voluptates doloremque vitae tenetur magnam quos. Libero, recusandae cupiditate accusamus non a odit ratione?</p>
        </div>
        <div className="col">
          <div className="w-100">
            <img src="https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="float-end w-100 h-100" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>);

};

export default AboutUs;
