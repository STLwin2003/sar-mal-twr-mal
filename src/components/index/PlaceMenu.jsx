import React from "react";

const PlaceMenu = () => {
  return <div>
    <div className="container mt-5">
    <p className="brown fs-3 fw-semibold">PLACE LIST</p>
  <div className="row">
    <div className="col-sm-6 col-md-4 col-lg-3">
      
    <img src="https://jayscotts.com/wp-content/uploads/2022/03/restaurant-patio-design-6-821x1024.jpg" className="rounded mb-3 card-img-top" alt="Cinque Terre"/> 
      <p className="fs-5 fw-medium"><span class="brown">Pathein Park</span></p>
      
    </div>
      
    <div className="col-sm-6 col-md-4 col-lg-3">
    <img src="https://jayscotts.com/wp-content/uploads/2022/03/restaurant-patio-design-6-821x1024.jpg" className="rounded mb-3 card-img-top" alt="Cinque Terre"/> 
    <p className="fs-5 fw-medium"><span class="brown">Pathein Park</span></p>
      
    </div>
    <div className="col-sm-6 col-md-4 col-lg-3">
    <img src="https://jayscotts.com/wp-content/uploads/2022/03/restaurant-patio-design-6-821x1024.jpg" className="rounded mb-3 card-img-top" alt="Cinque Terre"/> 
    <p className="fs-5 fw-medium"><span class="brown">Pathein Park</span></p>
     
    </div>
    <div className="col-sm-6 col-md-4 col-lg-3">
    <img src="https://jayscotts.com/wp-content/uploads/2022/03/restaurant-patio-design-6-821x1024.jpg" className="rounded mb-3 card-img-top" alt="Cinque Terre"/> 
    <p className="fs-5 fw-medium"><span class="brown">Pathein Park</span></p>     
      
    </div>
  </div>
  <div className="d-grid gap-2 d-md-flex justify-content-md-end " >
           <button className="btn" type="button" style={{background:"#b46c14",color:"white"}}>See More</button>
        </div>
</div> 

  </div>;
};

export default PlaceMenu;
