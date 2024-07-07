/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import CommentItem from "../item/CommentItem";
import Nav from "../dashboard/Nav";
import { Link } from "react-router-dom";

const CommentList = () => {
  let name = ["shin thant", "wyne htet", "thwe gyi"];
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 position-fixed">
            <Nav />
          </div>
          <main className="col-10 position-absolute top-0 end-0">
            {/* top nav start */}

            <nav className="navbar navbar-expand-lg navbar-light bg-light-gray">
              <div className="flex-fill"></div>

              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <Link
                    to=""
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    <i className="fa-solid fa-user-circle"></i>
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li className="dropdown-item">User Profile</li>
                    <li className="dropdown-item">Logout</li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link">
                    <i className="fa-solid fa-cog"></i>
                  </a>
                </li>
              </ul>
            </nav>
            <section className="p-3">
              <h1>Comment List for Admin</h1>
              {name.map((e, id) => (
                <CommentItem e={e} id={id} />
              ))}
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default CommentList;
