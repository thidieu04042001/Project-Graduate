import React, { Component } from "react";
import "./profile.css";
// import Headers from "../Homepage/Header";
// import Navbar from "../Homepage/navbar";
class Profile extends Component {
  render() {
    return (
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Profile</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">User Profile</li>
                </ol>
              </div>
            </div>
          </div>
          {/* /.container-fluid */}
        </section>
        {/* Main content */}
        <section className="content">
          <div className="container-fluid card-doctor">
            <div className="row profile">
              <div className="col-8 docto-profile">
                <div className="img-doctor">
                  <span>
                    <img src="https://doccure-react.dreamguystech.com/template/bc4e8d916b11472fc8050d8ff94e9a9a.jpg"></img>
                  </span>
                </div>
                <div className="">
                  <ul
                    className="nav nav-pills nav-sidebar flex-column"
                    data-widget="treeview"
                    role="menu"
                    data-accordion="false"
                  >
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        <h3>Dr.Yohn</h3>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        <p>BDS, MDS - Oral & Maxillofacial Surgery </p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link dencist">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiRgL7PnIEIxY8icueOQXl1C3b8BQUCz52Lg&usqp=CAU"></img>
                        <p>Dentist</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link dencist">
                        <img src="https://www.veryicon.com/download/png/miscellaneous/basic-linear-icon/address-101?s=256"></img>
                        <p>DaNang-VietNam</p>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-4">
                <ul
                  className="nav nav-pills nav-sidebar flex-column"
                  data-widget="treeview"
                  role="menu"
                  data-accordion="false"
                >
                  <li className="nav-item">
                    <a href="" className="nav-link">
                      <i class="far fa-heart" aria-hidden="true"></i>
                      <p>99%</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i class="far fa-comment" aria-hidden="true"></i>
                      <p>68 Feedback</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i class="far fa-map-marker" aria-hidden="true"></i>
                      <p>VietNam</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i class="far fa-credit-card" aria-hidden="true"></i>
                      <p>100$ per hour</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <button className="btn btn-block btnbooking">
                      BOOK APPOIMENTS
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Tabs */}
          <section id="tabs" className="project-tab">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <nav>
                    <div
                      className="nav nav-tabs nav-fill"
                      id="nav-tab"
                      role="tablist"
                    >
                      <a
                        className="nav-item nav-link active"
                        id="nav-home-tab"
                        data-toggle="tab"
                        href="#nav-home"
                        role="tab"
                        aria-controls="nav-home"
                        aria-selected="true"
                      >
                        <b> Overview</b>
                      </a>
                      <a
                        className="nav-item nav-link"
                        id="nav-profile-tab"
                        data-toggle="tab"
                        href="#nav-profile"
                        role="tab"
                        aria-controls="nav-profile"
                        aria-selected="false"
                      >
                        <b>Locations</b>
                      </a>
                      <a
                        className="nav-item nav-link"
                        id="nav-contact-tab"
                        data-toggle="tab"
                        href="#nav-contact"
                        role="tab"
                        aria-controls="nav-contact"
                        aria-selected="false"
                      >
                        <b>Business Hours</b>
                      </a>
                    </div>
                  </nav>
                  <div className="tab-content" id="nav-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="nav-home"
                      role="tabpanel"
                      aria-labelledby="nav-home-tab"
                    >
                      <div className="aboutme">
                        <h5>About me</h5>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </p>
                      </div>

                      <div>
                        <h5>Education</h5>
                        <ul>
                          <li>
                            American Dental Medical University
                            <br></br>BDS
                            <br></br>2003 - 2005
                          </li>
                          <li>
                            American Dental Medical University
                            <br></br>MDS
                            <br></br>2003 - 2005
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h5>Work & Experience</h5>
                        <ul>
                          <li>
                            American Dental Medical University
                            <br></br>BDS
                            <br></br>2003 - 2005
                          </li>
                          <li>
                            American Dental Medical University
                            <br></br>MDS
                            <br></br>2003 - 2005
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h5>Awards</h5>
                        <ul>
                          <li>
                            <p></p>
                          </li>
                          <li>
                            American Dental Medical University
                            <br></br>MDS
                            <br></br>2003 - 2005
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h5>Services</h5>
                        <div className="row">
                          <div className="col-3 services">
                            <ul className="nav nav-pills nav-sidebar flex-column">
                              <li className="nav-item nav-link">
                                <i className="nav-icon fas fa-th" />
                                <p>Appointments</p>
                              </li>

                              <li className="nav-item nav-link">
                                <i className="nav-icon fas fa-th" />
                                <p>Appointments</p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="tab-pane fade"
                      id="nav-profile"
                      role="tabpanel"
                      aria-labelledby="nav-profile-tab"
                    >
                      <div className="card">
                        <div className="card-body">
                          <div className="row">
                            <div className="col-6">
                              <a>
                                <h4>Smile Cute Dental Care Center</h4>
                              </a>
                              <p>
                                MDS - Periodontology and Oral Implantology, BDS
                              </p>
                              <div className="dencist">
                                <img src="https://www.veryicon.com/download/png/miscellaneous/basic-linear-icon/address-101?s=256"></img>
                                <p>DaNang-VietNam</p>
                              </div>
                            </div>
                            <div className="col-3">
                              <h5>Mon-Sat</h5>
                              <p>10:00 AM - 2:00 PM</p>
                              <p>4:00 PM - 9:00 PM</p>
                              <br></br>
                              <h5>Sun</h5>
                              <p>10:00 AM - 2:00 PM</p>
                            </div>
                            <div className="col-3">
                              <h3>$250</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-body">
                          <div className="row">
                            <div className="col-6">
                              <a>
                                <h4>Smile Cute Dental Care Center</h4>
                              </a>
                              <p>
                                MDS - Periodontology and Oral Implantology, BDS
                              </p>
                              <div className="dencist">
                                <img src="https://www.veryicon.com/download/png/miscellaneous/basic-linear-icon/address-101?s=256"></img>
                                <p>DaNang-VietNam</p>
                              </div>
                            </div>
                            <div className="col-3">
                              <h5>Mon-Sat</h5>
                              <p>10:00 AM - 2:00 PM</p>
                              <p>4:00 PM - 9:00 PM</p>
                              <br></br>
                              <h5>Sun</h5>
                              <p>10:00 AM - 2:00 PM</p>
                            </div>
                            <div className="col-3">
                              <h3>$250</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-contact"
                      role="tabpanel"
                      aria-labelledby="nav-contact-tab"
                    >
                      <table className="table" cellSpacing={0}>
                        <thead>
                          <tr>
                            <th>Contest Name</th>
                            <th>Date</th>
                            <th>Award Position</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <a href="#">Work 1</a>
                            </td>
                            <td>Doe</td>
                            <td>john@example.com</td>
                          </tr>
                          <tr>
                            <td>
                              <a href="#">Work 2</a>
                            </td>
                            <td>Moe</td>
                            <td>mary@example.com</td>
                          </tr>
                          <tr>
                            <td>
                              <a href="#">Work 3</a>
                            </td>
                            <td>Dooley</td>
                            <td>july@example.com</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    );
  }
}

export default Profile;
