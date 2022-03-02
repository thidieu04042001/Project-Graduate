import React, { useState } from "react";
class Newsnumber extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-12 col-sm-6 col-md-4">
          <div className="info-box mb-6">
            <span className="info-box-icon bg-info elevation-1">
              <i className="fa fa-user-plus" aria-hidden="true"></i>
            </span>
            <div className="info-box-content">
              <span className="info-box-text">Patients</span>
              <span className="info-box-number">
                10
                <small>%</small>
              </span>
            </div>
          </div>
        </div>
        {/* /.col */}
        <div className="col-12 col-sm-6 col-md-4">
          <div className="info-box mb-6">
            <span className="info-box-icon bg-danger elevation-1">
              <i class="fa fa-undo" aria-hidden="true"></i>
            </span>
            <div className="info-box-content">
              <span className="info-box-text">Patients retrun</span>
              <span className="info-box-number">41,410</span>
            </div>
          </div>
          {/* /.info-box */}
        </div>
        {/* /.col */}
        {/* fix for small devices only */}
        <div className="clearfix hidden-md-up" />
        {/* /.col */}
        <div className="col-12 col-sm-6 col-md-4">
          <div className="info-box mb-6">
            <span className="info-box-icon bg-warning elevation-1">
              <i class="fa fa-star" aria-hidden="true"></i>
            </span>
            <div className="info-box-content">
              <span className="info-box-text">Reviewers</span>
              <span className="info-box-number">2,000</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Newsnumber;
