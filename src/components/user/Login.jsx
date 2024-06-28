import React from "react";

const login = () => {
  return <div>
    <div className="vh-100" style={{background: "#eee"}}>
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card rounded">
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center fw-semibold mb-5 mx-1 mx-md-4 mt-4"><span className="brown fs-2"><i>Please login to your account</i></span></p>

                <form className="mx-1 mx-md-4">


                  <div className="d-flex flex-row align-items-center mb-4">
                    <p className="fas fa-envelope fa-lg me-3 fa-fw brown"></p>
                    <div className="form-floating form-outline flex-fill mb-0">
                      <input type="email" id="floatingemail" className="form-control" placeholder="Email" />
                      <label for="floating email">Your Email</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <p className="fas fa-lock fa-lg me-3 fa-fw brown"></p>
                    <div class="form-floating form-outline flex-fill mb-0">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                  <label for="floatingPassword">Password</label>
                  </div>
                  </div>

                  <div className="d-flex mx-5 mb-3 mb-lg-4">
                    <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-lg" style={{background:"#b46c14",color:"white"}}>Login</button>
                  </div>

                </form>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                  <img src="undraw_undraw_undraw_undraw_sign_up_ln1s_-1-_s4bc_-1-_ee41_-1-_kf4d.svg" className="img-fluid" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  </div>;
};

export default login;
