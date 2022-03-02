import React, { Component } from "react";
import "./Homepage.css";
class Navbar extends React.Component {
  render() {
    return (
      <aside className="main-sidebar sidebar-primary elevation-4">
        {/* Brand Logo */}
        <a href="index3.html" className="brand-link">
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/doctor-1659516-1410038.png"
            alt="AdminLTE Logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: ".8" }}
          />
          <span className="brand-text">DOCTOR HOME</span>
        </a>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src="http://ananyahospital.in/assets/img/gmy/female_doctor_icon_cartoon_character_design_6829081.jpg"
                className="img-circle elevation-2"
                alt="User Image"
              />
            </div>
            <div className="info">
              <a href="#" className="d-block">
                DT.Alexander Pierce
              </a>
            </div>
          </div>
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              {/* Add icons to the links using the .nav-icon class
             with font-awesome or any other icon font library */}
              <li className="nav-item menu-open">
                <a href="/dashboard" className="nav-link">
                  <i className="nav-icon fas fa-columns" />
                  <p>Dashboard</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="/appointments" className="nav-link">
                  <i className="nav-icon fas fa-calendar-check" />
                  <p>Appointments</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="/patientlist" className="nav-link">
                  <i className="nav-icon fas fa-users" />
                  <p>Patients List</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-chart-pie" />
                  <p>Inbox</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="/scheduletime" className="nav-link">
                  <i className="nav-icon fas fa-hourglass-start" />
                  <p>Schedule Timings</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="/profile" className="nav-link">
                  <i className="nav-icon fas fa-user-cog" />
                  <p>Profile</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="/profilesetting" className="nav-link">
                  <i className="nav-icon fas fa-edit" />
                  <p>Profile Setting</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="/medicalrecord" className="nav-link">
                  <i className="nav-icon fas fa-table" />
                  <p>Medical record</p>
                </a>
              </li>
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
    );
  }
}
export default Navbar;
