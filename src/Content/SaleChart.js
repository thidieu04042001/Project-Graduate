import React, { useState } from "react";
class Salechart extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Monthly Recap Report</h5>
              <div className="card-tools">
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="collapse"
                >
                  <i className="fas fa-minus" />
                </button>
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-tool dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    <i className="fas fa-wrench" />
                  </button>
                  <div
                    className="dropdown-menu dropdown-menu-right"
                    role="menu"
                  >
                    <a href="#" className="dropdown-item">
                      Action
                    </a>
                    <a href="#" className="dropdown-item">
                      Another action
                    </a>
                    <a href="#" className="dropdown-item">
                      Something else here
                    </a>
                    <a className="dropdown-divider" />
                    <a href="#" className="dropdown-item">
                      Separated link
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="remove"
                >
                  <i className="fas fa-times" />
                </button>
              </div>
            </div>
            {/* /.card-header */}
            <div className="card-body"></div>
          </div>
        </div>
      </div>
    );
  }
}
export default Salechart;
