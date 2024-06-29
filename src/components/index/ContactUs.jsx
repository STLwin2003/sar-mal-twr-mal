import React from "react";

const ContactUs = () => {
  return (
    <div>
      <div className="container my-5">
        <div
          //  style={{backgroundImage: 'url("https://as1.ftcdn.net/v2/jpg/02/53/91/26/1000_F_253912686_qJJaXiD7DebyBj6Gzb9SKRqTnhTr476k.jpg")',
          //     backgroundSize: "cover"
          //   }}

          className=" bg-light-gray p-2"
        >
          <div className="row">
            <div className="text-center my-2">
              <p className="fs-2 fw-semibold brown hind-siliguri-semibold">
                Contact Us
              </p>
            </div>
            <div className="col-lg-6 col-sm-12  text-center my-4">
              <div>
                <img
                  // src="https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
                //  src="https://plus.unsplash.com/premium_photo-1691948105877-766dd9604d57?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGZvb2QlMjBwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D"
                  src="https://images.unsplash.com/photo-1654166597239-616b92051fd9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fGZvb2QlMjBwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D"
                className="img-fluid w-75 rounded-3 "
                  alt="Cinque Terre"
                ></img>
              </div>
            </div>

            <div className="col-lg-6 col-sm-12 my-5 pt-5">
              <form className="w-75 mx-auto text-center ">
                <div className="form-floating ">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="name"
                    name="name"
                  />
                  <label htmlFor="name">
                    <span className="brown mt-5">Name</span>
                  </label>
                </div>
                <div className="form-floating my-3">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="email"
                    name="email"
                  />
                  <label htmlFor="email">
                    <span className="brown">Email</span>
                  </label>
                </div>
                <div className="form-floating">
                  <textarea
                    type="text"
                    className="form-control"
                    id="floatingMessage"
                    placeholder="Message"
                    name="message"
                    style={{ height: "140px" }}
                  ></textarea>
                  <label htmlFor="floatingMessage ">
                    <span className="brown">Message</span>
                  </label>
                </div>
              </form>
              <div className=" m-6 mt-5 d-flex justify-content-center">
                <button className="btn-brown px-4 py-2 w-40 mb-5" type="button">
                  <span className="fs-5">Send</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
// testing with vscode
export default ContactUs;
