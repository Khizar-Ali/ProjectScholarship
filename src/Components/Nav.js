import image from "../Images/Logo.PNG";
import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div>
      <nav id="nav" class="navbar navbar-expand-lg ">
        <div class="container-fluid">
        <img
              src={image}
              style={{ height: 50}}
              className="d-block w-20"
              alt="outside"
            />
          {/*<Link to="/" style={{ textDecoration: "none" }}>
            APP NAME
          </Link>*/}
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto ms-5 mb-2 mb-lg-0">
              <li style={{ marginLeft: "30px" }} class="nav-item">
                <Link to="/Home" style={{ textDecoration: "none" }}>
                  <a id="darktext" class="nav-link active" aria-current="page">
                    HOME
                  </a>
                </Link>
              </li>
              <li style={{ marginLeft: "30px" }} class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  id="navbarDarkDropdownMenuLink"
                  id="darktext"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  SCHOLARSHIPS
                </a>

                <ul
                  class="dropdown-menu dropdown-menu-light"
                  aria-labelledby="navbarDarkDropdownMenuLink"
                >
                  <li>
                    <Link
                      to="/TalentBasedScholarships"
                      style={{ textDecoration: "none" }}
                    >
                      <a id="darktext" class="dropdown-item">
                        Talent Based Scholarship
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/MeritBasedScholarships"
                      style={{ textDecoration: "none" }}
                    >
                      <a id="darktext" class="dropdown-item">
                        Merit Based Scholarship
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/STEP" style={{ textDecoration: "none" }}>
                      <a id="darktext" class="dropdown-item" href="#">
                        Smart Think's Education Program (STEP)
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/ApplyForScholarship"
                      style={{ textDecoration: "none" }}
                    >
                      <a id="darktext" class="dropdown-item" href="#">
                        Apply for Scholarship
                      </a>
                    </Link>
                  </li>
                  <li>
                    <a id="darktext" class="dropdown-item" href="#">
                      Upcomming Scholarship
                    </a>
                  </li>
                  <li>
                    <a id="darktext" class="dropdown-item" href="#">
                      Merit
                    </a>
                  </li>
                  <li>
                    <a id="darktext" class="dropdown-item" href="#">
                      Scholarship List
                    </a>
                  </li>
                  <li>
                    <a id="darktext" class="dropdown-item" href="#">
                      Educational Aid
                    </a>
                  </li>
                  <li>
                    <a id="darktext" class="dropdown-item" href="#">
                      Universities
                    </a>
                  </li>
                </ul>
              </li>
               
              <li style={{ marginLeft: "30px" }} class="nav-item">
                <Link to="/Assessments" style={{ textDecoration: "none" }}>
                  <a id="darktext" class="nav-link" href="#">
                    ASSESSMENTS
                  </a>
                </Link>
              </li>
              <li style={{ marginLeft: "30px" }} class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  id="navbarDarkDropdownMenuLink"
                  id="darktext"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  PROGRAMS
                </a>
                <ul
                  class="dropdown-menu dropdown-menu-light"
                  aria-labelledby="navbarDarkDropdownMenuLink"
                >
                  <li>
                    <Link to="/Program1" style={{ textDecoration: "none" }}>
                      <a id="darktext" class="dropdown-item">
                        Program 1
                      </a>
                    </Link>
                  </li>
                  <li>
                    <a id="darktext" class="dropdown-item" href="#">
                      Program 2
                    </a>
                  </li>
                  <li>
                    <a id="darktext" class="dropdown-item" href="#">
                      Program
                    </a>
                  </li>
                  <li>
                    <a id="darktext" class="dropdown-item" href="#">
                      Program
                    </a>
                  </li>
                  <li>
                    <a id="darktext" class="dropdown-item" href="#">
                      Program
                    </a>
                  </li>
                </ul>
              </li>
              <li style={{ marginLeft: "150px" }} class="nav-item">
                <Link to="/ContactUs" style={{ textDecoration: "none" }}>
                  <a id="darktext" class="nav-link active" aria-current="page">
                    CONTACT US
                  </a>
                </Link>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                id="darktext"
                id=""
                class="btn btn-outline-light"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Nav;
