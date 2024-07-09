/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import Nav from "../dashboard/Nav";
import ProfileItem from "../item/ProfileItem";

const UserList = () => {
  const name = ["shin thant", "wyne htet ", "Thwe gyi"];
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
              <div class="container">
                <div class="row ">
                  <div class="col-lg-12">
                    <div class="main-box clearfix ">
                      <div class="table-responsive ">
                        <table class="table user-list">
                          <thead>
                            <tr>
                              <th>
                                <span>User</span>
                              </th>
                              <th>
                                <span>Name</span>
                              </th>
                              <th>
                                <span>Email</span>
                              </th>
                              <th class="text-center">
                                <span>Operation</span>
                              </th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          {name.map((e, id) => (
                            <ProfileItem e={e} id={id} />
                          ))}
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default UserList;
