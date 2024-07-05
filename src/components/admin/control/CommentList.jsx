import React from "react";
import StreetFoodCard from "../../card/StreetFoodCard"
import AdminFoodCard from "../card/AdminFoodCard";

const CommentList = () => {
  return (
    <div>
      <section>
        <h1>Comment List for Admin</h1>
        <div className="row border rounded-4 shadow-lg">
          <div className="col-3 my-auto">
            <div className="p-4">

              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_1bpO0XDD8fbmRvnbnkCoQNFFoH3AqofVTg&s"
                alt=""
                className=" rounded-circle w-25"
              />
             <p className="fs-3 ">Name here</p>
              <p>sample@gmail.com</p>
            </div>
          </div>
          <div className="col-5 my-auto">
            <div className="border border-dark-subtle rounded-5 p-3">
              <p className="fs-5 roboto-regular rounded-5 ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
                doloremque non, mollitia dignissimos velit excepturi laudantium
                veritatis, maiores similique, illo tempore obcaecati sit?{" "}
              </p>
            </div>
          </div>
          <div className=" col-3 my-auto">
            <div className="p-4">
            <AdminFoodCard/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommentList;
