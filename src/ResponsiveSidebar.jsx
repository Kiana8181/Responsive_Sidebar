import React, { useState, useEffect } from "react";
import "./sidebar.css";
import $ from "jquery";
import close from "./icons";

const ResponsiveSidebar = () => {
  useEffect(() => {
    $(".sidebar ul li").on("click", function () {
      $(".sidebar ul li.active").removeClass("active");
      $(this).addClass("active");
    });

    $(".open-btn").on("click", function () {
      $(".sidebar").addClass("active");
    });

    $(".close-btn").on("click", function () {
      $(".sidebar").removeClass("active");
    });
  }, []);

  return (
    <div className="main-container d-flex">
      <div className="sidebar" id="side_nav">
        <div className="header-box px-2 pt-3 pb-4 d-flex justify-content-between">
          <h1 className="fs-4">
            <span className="bg-white text-dark rounded shadow px-2 me-2">
              KH
            </span>
            <br />
            <span className="text-white">Responsive Sidebar</span>
          </h1>
          <button className="btn d-md-none d-block close-btn px-1 py-0 text-white">
            {close()}
          </button>
        </div>

        <ul className="list-unstyled px-2">
          <li className="active">
            <a href="#" className="text-decoration-none px-3 py-2 d-block">
              <i className="fal fa-home"></i> Dashboard
            </a>
          </li>
          <li className="">
            <a href="#" className="text-decoration-none px-3 py-2 d-block">
              <i className="fal fa-list"></i> Projects
            </a>
          </li>
          <li className="">
            <a
              href="#"
              className="text-decoration-none px-3 py-2 d-block d-flex justify-content-between"
            >
              <span>
                <i className="fal fa-comment"></i> Messages
              </span>
              <span className="bg-dark rounded-pill text-white py-0 px-2">
                02
              </span>
            </a>
          </li>
          <li className="">
            <a href="#" className="text-decoration-none px-3 py-2 d-block">
              <i className="fal fa-envelope-open-text"></i> Services
            </a>
          </li>
          <li className="">
            <a href="#" className="text-decoration-none px-3 py-2 d-block">
              <i className="fal fa-users"></i> Customers
            </a>
          </li>
        </ul>
        <hr className="h-color mx-2" />

        <ul className="list-unstyled px-2">
          <li className="">
            <a href="#" className="text-decoration-none px-3 py-2 d-block">
              <i className="fal fa-bars"></i> Settings
            </a>
          </li>
          <li className="">
            <a href="#" className="text-decoration-none px-3 py-2 d-block">
              <i className="fal fa-bell"></i> Notifications
            </a>
          </li>
        </ul>
      </div>
      <div className="content">
        <nav className="navbar navbar-expand-md navbar-light bg-light">
          <div className="container-fluid">
            <div className="d-flex justify-content-between d-md-none d-block">
              {/* <Draggable axis="y" defaultPosition={{ x: 0, y: 0 }}>
                <button className="btn px-1 py-0 open-btn me-2">☰</button>
              </Draggable> */}
              <button className="btn px-1 py-0 open-btn me-2">☰</button>
              <a className="navbar-brand fs-4" href="#">
                <span className="bg-dark rounded px-2 py-0 text-white">KH</span>
              </a>
            </div>
            <button
              className="navbar-toggler p-0 border-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              ☰
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Link
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled">Disabled</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="dashboard-content px-3 pt-4">
          <h2 className="fs-5">Dashboard</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
            totam? Sequi alias eveniet ut quas ullam delectus et quasi incidunt
            rem deserunt asperiores reiciendis assumenda doloremque provident,
            dolores aspernatur neque.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveSidebar;
