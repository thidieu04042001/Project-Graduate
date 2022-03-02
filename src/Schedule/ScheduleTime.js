import React, { Component } from "react";
import "./ScheduleTime.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
class ScheduleTime extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Schedule Time</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Schedule Time</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        <section className="content ">
          <div className="container-fluid card-doctor profile-sett">
            <div className="row ">
              <div className="col-8 docto-profile">
                <ul
                  className="nav nav-pills nav-sidebar flex-column"
                  data-widget="treeview"
                  role="menu"
                  data-accordion="false"
                >
                  <li>
                    <h5>Schedule Timings</h5>
                  </li>
                </ul>
              </div>
            </div>
            <br></br>

            <div>
              <form>
                <div className="row">
                  <div class=" col-6 form-group">
                    <label for="sel1">Timing Slot Duration</label>
                    <select class="form-control" id="sel1">
                      <option>15 mins</option>
                      <option>30 mins</option>
                      <option>45 mins</option>
                      <option>1 hour</option>
                    </select>
                  </div>
                </div>
              </form>
              <div className="row">
                <div className="col-md-12">
                  <div className="card schedule-widget mb-0">
                    <div className="schedule-header">
                      <div className="schedule-nav">
                        <nav>
                          <div
                            className="nav nav-tabs nav-fill"
                            id="nav-tab"
                            role="tablist"
                          >
                            <a
                              className="nav-item nav-link active"
                              id="nav-Sunday-tab"
                              data-toggle="tab"
                              href="#nav-Sunday"
                              role="tab"
                              aria-controls="nav-Sunday"
                              aria-selected="true"
                            >
                              <b>Sunday</b>
                            </a>
                            <a
                              className="nav-item nav-link"
                              id="nav-Monday-tab"
                              data-toggle="tab"
                              href="#nav-Monday"
                              role="tab"
                              aria-controls="nav-Monday"
                              aria-selected="false"
                            >
                              <b>Monday</b>
                            </a>
                            <a
                              className="nav-item nav-link"
                              id="nav-tuesday-tab"
                              data-toggle="tab"
                              href="#nav-tuesday"
                              role="tab"
                              aria-controls="nav-tuesday"
                              aria-selected="false"
                            >
                              <b>Tuesday</b>
                            </a>
                            <a
                              className="nav-item nav-link"
                              id="nav-wednesday-tab"
                              data-toggle="tab"
                              href="#nav-wednesday"
                              role="tab"
                              aria-controls="nav-wednesday"
                              aria-selected="false"
                            >
                              <b>Wednesday</b>
                            </a>
                            <a
                              className="nav-item nav-link"
                              id="nav-thurday-tab"
                              data-toggle="tab"
                              href="#nav-thurday"
                              role="tab"
                              aria-controls="nav-thurday"
                              aria-selected="false"
                            >
                              <b>Thurday </b>
                            </a>
                            <a
                              className="nav-item nav-link"
                              id="nav-friday-tab"
                              data-toggle="tab"
                              href="#nav-friday"
                              role="tab"
                              aria-controls="nav-friday"
                              aria-selected="false"
                            >
                              <b>Friday </b>
                            </a>
                            <a
                              className="nav-item nav-link"
                              id="nav-sartuday-tab"
                              data-toggle="tab"
                              href="#nav-sartuday"
                              role="tab"
                              aria-controls="nav-sartuday"
                              aria-selected="false"
                            >
                              <b>Sartuday </b>
                            </a>
                          </div>
                        </nav>
                        <div className="tab-content" id="nav-tabContent">
                          <div
                            className="tab-pane fade show active"
                            id="nav-Sunday"
                            role="tabpanel"
                            aria-labelledby="nav-Sunday-tab"
                          >
                            <div className="row ">
                              <div className="col-6">
                                <h5>
                                  <b>Time Slots</b>
                                </h5>
                              </div>
                              <div className="col-6 add-more">
                                <button
                                  type="button"
                                  className="btn "
                                  data-toggle="modal"
                                  data-target="#modal-default-sun"
                                >
                                  <i
                                    class="fa fa-plus-circle"
                                    aria-hidden="true"
                                  ></i>{" "}
                                  Add Slot
                                </button>

                                <div
                                  className="modal fade"
                                  id="modal-default-sun"
                                >
                                  <div className="modal-dialog">
                                    <div className="modal-content">
                                      <div className="modal-header">
                                        <h4 className="modal-title">
                                          Default Modal
                                        </h4>
                                        <button
                                          type="button"
                                          className="close"
                                          data-dismiss="modal"
                                          aria-label="Close"
                                        >
                                          <span aria-hidden="true">×</span>
                                        </button>
                                      </div>
                                      <div className="modal-body">
                                        <div className="row">
                                          <div class=" col-6 form-group">
                                            <label for="sel1">Start Time</label>
                                            <select
                                              class="form-control"
                                              id="sel1"
                                            >
                                              <option>8:00 AM</option>
                                              <option>9:00 AM</option>
                                              <option>10:00 AM</option>
                                              <option>11:00 AM</option>
                                              <option>13:00 PM</option>
                                              <option>14:00 PM</option>
                                              <option>15:00 PM</option>
                                              <option>16:00 PM</option>
                                            </select>
                                          </div>
                                          <div class=" col-6 form-group">
                                            <label for="sel1">End Time</label>
                                            <select
                                              class="form-control"
                                              id="sel1"
                                            >
                                              <option>8:00 AM</option>
                                              <option>9:00 AM</option>
                                              <option>10:00 AM</option>
                                              <option>11:00 AM</option>
                                              <option>13:00 PM</option>
                                              <option>14:00 PM</option>
                                              <option>15:00 PM</option>
                                              <option>16:00 PM</option>
                                            </select>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="modal-footer justify-content-between">
                                        <button
                                          type="button"
                                          className="btn btn-default"
                                          data-dismiss="modal"
                                        >
                                          Close
                                        </button>
                                        <button
                                          type="button"
                                          className="btn btn-primary"
                                        >
                                          Save changes
                                        </button>
                                      </div>
                                    </div>
                                    {/* /.modal-content */}
                                  </div>
                                  {/* /.modal-dialog */}
                                </div>
                              </div>
                            </div>
                            <div className="doc-times">
                              <p className="text-muted mb-0">Not Available</p>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="nav-Monday"
                            role="tabpanel"
                            aria-labelledby="nav-Monday-tab"
                          >
                            <div className="row ">
                              <div className="col-6">
                                <h5>
                                  <b>Time Slots</b>
                                </h5>
                              </div>
                              <div className="col-6 add-more">
                                <button
                                  type="button"
                                  className="btn "
                                  data-toggle="modal"
                                  data-target="#modal-default-mon"
                                >
                                  <i
                                    class="fa fa-plus-circle"
                                    aria-hidden="true"
                                  ></i>{" "}
                                  Add Slot
                                </button>

                                <div
                                  className="modal fade"
                                  id="modal-default-mon"
                                >
                                  <div className="modal-dialog">
                                    <div className="modal-content">
                                      <div className="modal-header">
                                        <h4 className="modal-title">
                                          Add Time Slots
                                        </h4>
                                        <button
                                          type="button"
                                          className="close"
                                          data-dismiss="modal"
                                          aria-label="Close"
                                        >
                                          <span aria-hidden="true">×</span>
                                        </button>
                                      </div>
                                      <div className="modal-body">
                                        <div className="row">
                                          <div class=" col-6 form-group">
                                            <label for="sel1">Start Time</label>
                                            <select
                                              class="form-control"
                                              id="sel1"
                                            >
                                              <option>8:00 AM</option>
                                              <option>9:00 AM</option>
                                              <option>10:00 AM</option>
                                              <option>11:00 AM</option>
                                              <option>13:00 PM</option>
                                              <option>14:00 PM</option>
                                              <option>15:00 PM</option>
                                              <option>16:00 PM</option>
                                            </select>
                                          </div>
                                          <div class=" col-6 form-group">
                                            <label for="sel1">End Time</label>
                                            <select
                                              class="form-control"
                                              id="sel1"
                                            >
                                              <option>8:00 AM</option>
                                              <option>9:00 AM</option>
                                              <option>10:00 AM</option>
                                              <option>11:00 AM</option>
                                              <option>13:00 PM</option>
                                              <option>14:00 PM</option>
                                              <option>15:00 PM</option>
                                              <option>16:00 PM</option>
                                            </select>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="modal-footer justify-content-between">
                                        <button
                                          type="button"
                                          className="btn btn-default"
                                          data-dismiss="modal"
                                        >
                                          Close
                                        </button>
                                        <button
                                          type="button"
                                          className="btn btn-primary"
                                        >
                                          Add Slot
                                        </button>
                                      </div>
                                    </div>
                                    {/* /.modal-content */}
                                  </div>
                                  {/* /.modal-dialog */}
                                </div>
                              </div>
                            </div>
                            <div className="doc-times">
                              <div className="doc-slot-list">
                                8:00 pm - 11:30 pm
                                <a href="" className="delete_schedule">
                                  <i className="fa fa-times"></i>
                                </a>
                              </div>
                              <div className="doc-slot-list">
                                8:00 pm - 11:30 pm
                                <a href="" className="delete_schedule">
                                  <i className="fa fa-times"></i>
                                </a>
                              </div>
                              <div className="doc-slot-list">
                                8:00 pm - 11:30 pm
                                <a href="" className="delete_schedule">
                                  <i className="fa fa-times"></i>
                                </a>
                              </div>
                              <div className="doc-slot-list">
                                8:00 pm - 11:30 pm
                                <a href="" className="delete_schedule">
                                  <i className="fa fa-times"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="nav-tuesday"
                            role="tabpanel"
                            aria-labelledby="nav-tuesday-tab"
                          >
                            <div className="row ">
                              <div className="col-6">
                                <h5>
                                  <b>Time Slots</b>
                                </h5>
                              </div>
                              <div className="col-6 add-more">
                                <button
                                  type="button"
                                  className="btn "
                                  data-toggle="modal"
                                  data-target="#modal-default-tue"
                                >
                                  <i
                                    class="fa fa-plus-circle"
                                    aria-hidden="true"
                                  ></i>{" "}
                                  Add Slot
                                </button>

                                <div
                                  className="modal fade"
                                  id="modal-default-tue"
                                >
                                  <div className="modal-dialog">
                                    <div className="modal-content">
                                      <div className="modal-header">
                                        <h4 className="modal-title">
                                          Add Time Slots
                                        </h4>
                                        <button
                                          type="button"
                                          className="close"
                                          data-dismiss="modal"
                                          aria-label="Close"
                                        >
                                          <span aria-hidden="true">×</span>
                                        </button>
                                      </div>
                                      <div className="modal-body">
                                        <div className="row">
                                          <div class=" col-6 form-group">
                                            <label for="sel1">Start Time</label>
                                            <select
                                              class="form-control"
                                              id="sel1"
                                            >
                                              <option>8:00 AM</option>
                                              <option>9:00 AM</option>
                                              <option>10:00 AM</option>
                                              <option>11:00 AM</option>
                                              <option>13:00 PM</option>
                                              <option>14:00 PM</option>
                                              <option>15:00 PM</option>
                                              <option>16:00 PM</option>
                                            </select>
                                          </div>
                                          <div class=" col-6 form-group">
                                            <label for="sel1">End Time</label>
                                            <select
                                              class="form-control"
                                              id="sel1"
                                            >
                                              <option>8:00 AM</option>
                                              <option>9:00 AM</option>
                                              <option>10:00 AM</option>
                                              <option>11:00 AM</option>
                                              <option>13:00 PM</option>
                                              <option>14:00 PM</option>
                                              <option>15:00 PM</option>
                                              <option>16:00 PM</option>
                                            </select>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="modal-footer justify-content-between">
                                        <button
                                          type="button"
                                          className="btn btn-default"
                                          data-dismiss="modal"
                                        >
                                          Close
                                        </button>
                                        <button
                                          type="button"
                                          className="btn btn-primary"
                                        >
                                          Save changes
                                        </button>
                                      </div>
                                    </div>
                                    {/* /.modal-content */}
                                  </div>
                                  {/* /.modal-dialog */}
                                </div>
                              </div>
                            </div>
                            <div className="doc-times">
                              <p className="text-muted mb-0">Not Available</p>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="nav-wednesday"
                            role="tabpanel"
                            aria-labelledby="nav-wednesday-tab"
                          >
                            <div className="row ">
                              <div className="col-6">
                                <h5>
                                  <b>Time Slots</b>
                                </h5>
                              </div>
                              <div className="col-6 add-more">
                                <button
                                  type="button"
                                  className="btn "
                                  data-toggle="modal"
                                  data-target="#modal-default-wed"
                                >
                                  <i
                                    class="fa fa-plus-circle"
                                    aria-hidden="true"
                                  ></i>{" "}
                                  Add Slot
                                </button>

                                <div
                                  className="modal fade"
                                  id="modal-default-wed"
                                >
                                  <div className="modal-dialog">
                                    <div className="modal-content">
                                      <div className="modal-header">
                                        <h4 className="modal-title">
                                          Add Time Slots
                                        </h4>
                                        <button
                                          type="button"
                                          className="close"
                                          data-dismiss="modal"
                                          aria-label="Close"
                                        >
                                          <span aria-hidden="true">×</span>
                                        </button>
                                      </div>
                                      <div className="modal-body">
                                        <div className="row">
                                          <div class=" col-6 form-group">
                                            <label for="sel1">Start Time</label>
                                            <select
                                              class="form-control"
                                              id="sel1"
                                            >
                                              <option>8:00 AM</option>
                                              <option>9:00 AM</option>
                                              <option>10:00 AM</option>
                                              <option>11:00 AM</option>
                                              <option>13:00 PM</option>
                                              <option>14:00 PM</option>
                                              <option>15:00 PM</option>
                                              <option>16:00 PM</option>
                                            </select>
                                          </div>
                                          <div class=" col-6 form-group">
                                            <label for="sel1">End Time</label>
                                            <select
                                              class="form-control"
                                              id="sel1"
                                            >
                                              <option>8:00 AM</option>
                                              <option>9:00 AM</option>
                                              <option>10:00 AM</option>
                                              <option>11:00 AM</option>
                                              <option>13:00 PM</option>
                                              <option>14:00 PM</option>
                                              <option>15:00 PM</option>
                                              <option>16:00 PM</option>
                                            </select>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="modal-footer justify-content-between">
                                        <button
                                          type="button"
                                          className="btn btn-default"
                                          data-dismiss="modal"
                                        >
                                          Close
                                        </button>
                                        <button
                                          type="button"
                                          className="btn btn-primary"
                                        >
                                          Save changes
                                        </button>
                                      </div>
                                    </div>
                                    {/* /.modal-content */}
                                  </div>
                                  {/* /.modal-dialog */}
                                </div>
                              </div>
                            </div>
                            <div className="doc-times">
                              <p className="text-muted mb-0">Not Available</p>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="nav-thurday"
                            role="tabpanel"
                            aria-labelledby="nav-thurday-tab"
                          >
                            <div className="row ">
                              <div className="col-6">
                                <h5>
                                  <b>Time Slots</b>
                                </h5>
                              </div>
                              <div className="col-6 add-more">
                                <button
                                  type="button"
                                  className="btn "
                                  data-toggle="modal"
                                  data-target="#modal-default-thur"
                                >
                                  <i
                                    class="fa fa-plus-circle"
                                    aria-hidden="true"
                                  ></i>{" "}
                                  Add Slot
                                </button>

                                <div
                                  className="modal fade"
                                  id="modal-default-thur"
                                >
                                  <div className="modal-dialog">
                                    <div className="modal-content">
                                      <div className="modal-header">
                                        <h4 className="modal-title">
                                          Add Time Slots
                                        </h4>
                                        <button
                                          type="button"
                                          className="close"
                                          data-dismiss="modal"
                                          aria-label="Close"
                                        >
                                          <span aria-hidden="true">×</span>
                                        </button>
                                      </div>
                                      <div className="modal-body">
                                        <div className="row">
                                          <div class=" col-6 form-group">
                                            <label for="sel1">Start Time</label>
                                            <select
                                              class="form-control"
                                              id="sel1"
                                            >
                                              <option>8:00 AM</option>
                                              <option>9:00 AM</option>
                                              <option>10:00 AM</option>
                                              <option>11:00 AM</option>
                                              <option>13:00 PM</option>
                                              <option>14:00 PM</option>
                                              <option>15:00 PM</option>
                                              <option>16:00 PM</option>
                                            </select>
                                          </div>
                                          <div class=" col-6 form-group">
                                            <label for="sel1">End Time</label>
                                            <select
                                              class="form-control"
                                              id="sel1"
                                            >
                                              <option>8:00 AM</option>
                                              <option>9:00 AM</option>
                                              <option>10:00 AM</option>
                                              <option>11:00 AM</option>
                                              <option>13:00 PM</option>
                                              <option>14:00 PM</option>
                                              <option>15:00 PM</option>
                                              <option>16:00 PM</option>
                                            </select>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="modal-footer justify-content-between">
                                        <button
                                          type="button"
                                          className="btn btn-default"
                                          data-dismiss="modal"
                                        >
                                          Close
                                        </button>
                                        <button
                                          type="button"
                                          className="btn btn-primary"
                                        >
                                          Save changes
                                        </button>
                                      </div>
                                    </div>
                                    {/* /.modal-content */}
                                  </div>
                                  {/* /.modal-dialog */}
                                </div>
                              </div>
                            </div>
                            <div className="doc-times">
                              <p className="text-muted mb-0">Not Available</p>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="nav-friday"
                            role="tabpanel"
                            aria-labelledby="nav-friday-tab"
                          >
                            <div className="row ">
                              <div className="col-6">
                                <h5>
                                  <b>Time Slots</b>
                                </h5>
                              </div>
                              <div className="col-6 add-more">
                                <button
                                  type="button"
                                  className="btn "
                                  data-toggle="modal"
                                  data-target="#modal-default-fri"
                                >
                                  <i
                                    class="fa fa-plus-circle"
                                    aria-hidden="true"
                                  ></i>{" "}
                                  Add Slot
                                </button>

                                <div
                                  className="modal fade"
                                  id="modal-default-fri"
                                >
                                  <div className="modal-dialog">
                                    <div className="modal-content">
                                      <div className="modal-header">
                                        <h4 className="modal-title">
                                          Add Time Slots
                                        </h4>
                                        <button
                                          type="button"
                                          className="close"
                                          data-dismiss="modal"
                                          aria-label="Close"
                                        >
                                          <span aria-hidden="true">×</span>
                                        </button>
                                      </div>
                                      <div className="modal-body">
                                        <div className="row">
                                          <div class=" col-6 form-group">
                                            <label for="sel1">Start Time</label>
                                            <select
                                              class="form-control"
                                              id="sel1"
                                            >
                                              <option>8:00 AM</option>
                                              <option>9:00 AM</option>
                                              <option>10:00 AM</option>
                                              <option>11:00 AM</option>
                                              <option>13:00 PM</option>
                                              <option>14:00 PM</option>
                                              <option>15:00 PM</option>
                                              <option>16:00 PM</option>
                                            </select>
                                          </div>
                                          <div class=" col-6 form-group">
                                            <label for="sel1">End Time</label>
                                            <select
                                              class="form-control"
                                              id="sel1"
                                            >
                                              <option>8:00 AM</option>
                                              <option>9:00 AM</option>
                                              <option>10:00 AM</option>
                                              <option>11:00 AM</option>
                                              <option>13:00 PM</option>
                                              <option>14:00 PM</option>
                                              <option>15:00 PM</option>
                                              <option>16:00 PM</option>
                                            </select>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="modal-footer justify-content-between">
                                        <button
                                          type="button"
                                          className="btn btn-default"
                                          data-dismiss="modal"
                                        >
                                          Close
                                        </button>
                                        <button
                                          type="button"
                                          className="btn btn-primary"
                                        >
                                          Save changes
                                        </button>
                                      </div>
                                    </div>
                                    {/* /.modal-content */}
                                  </div>
                                  {/* /.modal-dialog */}
                                </div>
                              </div>
                            </div>
                            <div className="doc-times">
                              <p className="text-muted mb-0">Not Available</p>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="nav-sartuday"
                            role="tabpanel"
                            aria-labelledby="nav-sartuday-tab"
                          >
                            <div className="row ">
                              <div className="col-6">
                                <h5>
                                  <b>Time Slots</b>
                                </h5>
                              </div>
                              <div className="col-6 add-more">
                                <button
                                  type="button"
                                  className="btn "
                                  data-toggle="modal"
                                  data-target="#modal-default-sar"
                                >
                                  <i
                                    class="fa fa-plus-circle"
                                    aria-hidden="true"
                                  ></i>{" "}
                                  Add Slot
                                </button>

                                <div
                                  className="modal fade"
                                  id="modal-default-sar"
                                >
                                  <div className="modal-dialog">
                                    <div className="modal-content">
                                      <div className="modal-header">
                                        <h4 className="modal-title">
                                          Add Time Slots
                                        </h4>
                                        <button
                                          type="button"
                                          className="close"
                                          data-dismiss="modal"
                                          aria-label="Close"
                                        >
                                          <span aria-hidden="true">×</span>
                                        </button>
                                      </div>
                                      <div className="modal-body">
                                        <div className="row">
                                          <div class=" col-6 form-group">
                                            <label for="sel1">Start Time</label>
                                            <select
                                              class="form-control"
                                              id="sel1"
                                            >
                                              <option>8:00 AM</option>
                                              <option>9:00 AM</option>
                                              <option>10:00 AM</option>
                                              <option>11:00 AM</option>
                                              <option>13:00 PM</option>
                                              <option>14:00 PM</option>
                                              <option>15:00 PM</option>
                                              <option>16:00 PM</option>
                                            </select>
                                          </div>
                                          <div class=" col-6 form-group">
                                            <label for="sel1">End Time</label>
                                            <select
                                              class="form-control"
                                              id="sel1"
                                            >
                                              <option>8:00 AM</option>
                                              <option>9:00 AM</option>
                                              <option>10:00 AM</option>
                                              <option>11:00 AM</option>
                                              <option>13:00 PM</option>
                                              <option>14:00 PM</option>
                                              <option>15:00 PM</option>
                                              <option>16:00 PM</option>
                                            </select>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="modal-footer justify-content-between">
                                        <button
                                          type="button"
                                          className="btn btn-default"
                                          data-dismiss="modal"
                                        >
                                          Close
                                        </button>
                                        <button
                                          type="button"
                                          className="btn btn-primary"
                                        >
                                          Save changes
                                        </button>
                                      </div>
                                    </div>
                                    {/* /.modal-content */}
                                  </div>
                                  {/* /.modal-dialog */}
                                </div>
                              </div>
                            </div>
                            <div className="doc-times">
                              <p className="text-muted mb-0">Not Available</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ScheduleTime;
