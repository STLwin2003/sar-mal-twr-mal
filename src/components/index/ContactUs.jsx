import React from "react";

const ContactUs = () => {
  return (
    <div>
      <div className="container my-5">
        <div className="row ">
          <div className="col-lg-6 col-sm-12 my-4">
            <div><img
              src="https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
              className="img-fluid"
              alt="Cinque Terre"
            ></img></div>
          </div>
         
          <div className="col-lg-6 col-sm-12 my-auto">
            <form className="w-50 mx-auto">
              <div className="form-floating my-4">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="name"
                  name="name"
                />
                <label htmlFor="name"><span className="brown">Name</span></label>
              </div>
              <div className="form-floating my-4">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="email"
                  name="email"
                />
                <label htmlFor="email"><span className="brown">Email</span></label>
              </div>
              <div className="form-floating my-4">
                <textarea
                  type="text"
                  className="form-control"
                  id="floatingMessage"
                  placeholder="Message"
                  name="message"
                  style={{height: "130px"}}
                 
                ></textarea>
                <label htmlFor="floatingMessage "><span className="brown">Message</span></label>
              </div>
             
            </form>
            <div className=" m-6 d-flex justify-content-center">
              <button
                className="btn-brown px-3 py-2 w-40  mb-4"
                type="button"
              
              >
                Send
              </button>
              </div>
          </div>
        </div>
      </div>

     
    </div>
  );
};
// testing with vscode
export default ContactUs;
