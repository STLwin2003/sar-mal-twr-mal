import React from "react";

const signup = () => {
  return <div>
    
    <div className="vh-100" style={{background: "#eee"}}>
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card rounded">
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center fw-semibold mb-5 mx-1 mx-md-4 mt-4"><span className="brown fs-2">Sign up</span></p>

                <form className="mx-1 mx-md-4">

                <div className="d-flex flex-row align-items-center mb-4">
                    <p className="fas fa-user fa-lg me-3 fa-fw brown"></p>
                    <div className="form-floating form-outline flex-fill mb-0">
                      <input type="name" id="floatingname" className="form-control" placeholder="Name" />
                      <label for="floating name">Name</label>
                    </div>
                  </div>


                  <div className="d-flex flex-row align-items-center mb-4">
                    <p className="fas fa-envelope fa-lg me-3 fa-fw brown"></p>
                    <div className="form-floating form-outline flex-fill mb-0">
                      <input type="email" id="floatingemail" className="form-control" placeholder="Email" />
                      <label for="floating email">Email</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <p className="fas fa-lock fa-lg me-3 fa-fw brown"></p>
                    <div class="form-floating form-outline flex-fill mb-0">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                  <label for="floatingPassword">Password
                  <span className="show-hide ">
                        <i class="fa-solid fa-eye " id="icon"></i>
                       </span>
                  </label>
                  
                  </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <p className="fas fa-key fa-lg me-3 fa-fw brown"></p>
                    <div class="form-floating form-outline flex-fill mb-0">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Repeat Your Password"/>
                  <label for="floatingPassword">Repeat Your Password
                  </label>
                  <span className="show-hide justify-content-end float-right">
                        <i class="fa-solid fa-eye " id="icon"></i>
                       </span>
                  </div>
                  </div>

                  <div className="d-flex mx-5 mb-3">
                    <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-lg" style={{background:"#b46c14",color:"white"}}>Register</button>
                  </div>

                  <a data-mdb-ripple-init class="btn-sm mx-3" style={{color: "#b46c14"}} href="#!"
                    
                  role="button">
                  <i class="fab fa-google me-2"></i>Continue with Google
                  </a>

                </form>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="img-fluid" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


    {/* <div className="vh-100" style={{background: "#eee"}}>
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card rounded">
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center fw-semibold mb-5 mx-1 mx-md-4 mt-4"><span className="brown fs-2">Sign up</span></p>

                <form className="mx-1 mx-md-4">

                <div className="d-flex flex-row align-items-center mb-4">
                    <p className="fas fa-user fa-lg me-3 fa-fw brown"></p>
                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c" class="form-control" />
                      <label className="form-label brown fs-5" for="form3Example1c">Your Name</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <p class="fas fa-envelope fa-lg me-3 fa-fw brown"></p>
                    <div data-mdb-input-init class="form-outline flex-fill mb-0">
                      <input type="email" id="form3Example3c" class="form-control" />
                      <label class="form-label brown fs-5" for="form3Example3c">Your Email</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <p class="fas fa-lock fa-lg me-3 fa-fw brown"></p>
                    <div data-mdb-input-init class="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4c" class="form-control" />
                      <label class="form-label brown fs-5" htmlFor="form3Example4c">Password</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <p class="fas fa-key fa-lg me-3 fa-fw brown"></p>
                    <div data-mdb-input-init class="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4cd" class="form-control" />
                      <label class="form-label brown fs-5" htmlFor="form3Example4cd">Repeat your password</label>
                    </div>
                  </div>

                  <div class="form-check d-flex justify-content-center mb-5">
                    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                    <label class="form-check-label brown fs-5" htmlFor="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div>

                  <div class="d-flex mx-5 mb-3 mb-lg-4">
                    <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-lg" style={{background:"#b46c14",color:"white"}}>Register</button>
                  </div>
                  <a data-mdb-ripple-init class="btn btn-sm justify-content-center mx-5 p-2" style={{background: "#b46c14",color:"white"}} href="#!"
                    
                  role="button">
                  <i class="fab fa-google me-2"></i>Continue with Google
                  </a>



                </form>

              </div>
              <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                  <img src="undraw_access_account_re_8spm.svg" className="img-fluid" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> */}
  </div>;
};

export default signup;
