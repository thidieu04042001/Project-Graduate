import React from "react";

export default class Patientappoiment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

  render() {
    return (
      <div className="card">
        <div className="row card-body">
          <div className="col-md-12">
            <nav>
              <div
                className="nav nav-tabs nav-fill"
                id="nav-tab"
                role="tablist"
              >
                <a
                  className="nav-item nav-link active tabpatient"
                  id="nav-home-tab"
                  data-toggle="tab"
                  href="#nav-home"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                >
                  <b> Upcoming</b>
                </a>
                <a
                  className="nav-item nav-link tabpatient"
                  id="nav-profile-tab"
                  data-toggle="tab"
                  href="#nav-profile"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                >
                  <b>Today</b>
                </a>
              </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade show active   p-0"
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
              >
                <div className="table-responsive" style={{ height: "400px" }}>
                  <table
                    className="table table-hover text-nowrap patient-table"
                    cellSpacing={0}
                  >
                    <thead>
                      <tr>
                        <th>Patient Name</th>
                        <th>Appt Date</th>
                        <th>Purpose</th>
                        <th>Type</th>
                        <th>Paid Amount</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <li className="nav-item patient-appoit">
                            <img src="https://luv.vn/wp-content/uploads/2021/02/anh-hot-girl-lanh-lung-ca-tinh-hap-dan-chat-ngau.jpg"></img>

                            <p>Nguyen Thu Ha</p>
                          </li>
                        </td>
                        <td>
                          <p>11 Nov 2019</p>
                          <p>10.00 AM</p>
                        </td>
                        <td>New Patient</td>
                        <td>General</td>
                        <td>$150</td>
                        <td>
                          <div className="btn-Appoit">
                            <button
                              type="button"
                              class="btn btn-block btn-outline-info btn-flat"
                            >
                              View
                            </button>
                            <button
                              type="button"
                              class="btn btn-block btn-outline-success btn-flat"
                            >
                              Accept
                            </button>
                            <button
                              type="button"
                              class="btn btn-block btn-outline-danger btn-flat"
                            >
                              Cancel
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <li className="nav-item patient-appoit">
                            <img src="https://luv.vn/wp-content/uploads/2021/02/anh-hot-girl-lanh-lung-ca-tinh-hap-dan-chat-ngau.jpg"></img>
                            <p>Nguyen Thu Ha</p>
                          </li>
                        </td>
                        <td>
                          <p>11 Nov 2019</p>
                          <p>10.00 AM</p>
                        </td>
                        <td>New Patient</td>
                        <td>General</td>
                        <td>$150</td>
                        <td>
                          <div className="btn-Appoit">
                            <button
                              type="button"
                              class="btn btn-block btn-outline-info btn-flat"
                            >
                              View
                            </button>
                            <button
                              type="button"
                              class="btn btn-block btn-outline-success btn-flat"
                            >
                              Accept
                            </button>
                            <button
                              type="button"
                              class="btn btn-block btn-outline-danger btn-flat"
                            >
                              Cancel
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <li className="nav-item patient-appoit">
                            <img src="https://luv.vn/wp-content/uploads/2021/02/anh-hot-girl-lanh-lung-ca-tinh-hap-dan-chat-ngau.jpg"></img>
                            <p>Nguyen Thu Ha</p>
                          </li>
                        </td>
                        <td>
                          <p>11 Nov 2019</p>
                          <p>10.00 AM</p>
                        </td>
                        <td>New Patient</td>
                        <td>General</td>
                        <td>$150</td>
                        <td>
                          <div className="btn-Appoit">
                            <button
                              type="button"
                              class="btn btn-block btn-outline-info btn-flat"
                            >
                              View
                            </button>
                            <button
                              type="button"
                              class="btn btn-block btn-outline-success btn-flat"
                            >
                              Accept
                            </button>
                            <button
                              type="button"
                              class="btn btn-block btn-outline-danger btn-flat"
                            >
                              Cancel
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <li className="nav-item patient-appoit">
                            <img src="https://luv.vn/wp-content/uploads/2021/02/anh-hot-girl-lanh-lung-ca-tinh-hap-dan-chat-ngau.jpg"></img>
                            <p>Nguyen Thu Ha</p>
                          </li>
                        </td>
                        <td>
                          <p>11 Nov 2019</p>
                          <p>10.00 AM</p>
                        </td>
                        <td>New Patient</td>
                        <td>General</td>
                        <td>$150</td>
                        <td>
                          <div className="btn-Appoit">
                            <button
                              type="button"
                              class="btn btn-block btn-outline-info btn-flat"
                            >
                              View
                            </button>
                            <button
                              type="button"
                              class="btn btn-block btn-outline-success btn-flat"
                            >
                              Accept
                            </button>
                            <button
                              type="button"
                              class="btn btn-block btn-outline-danger btn-flat"
                            >
                              Cancel
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="nav-profile"
                role="tabpanel"
                aria-labelledby="nav-profile-tab"
              >
                <div className="table-responsive" style={{ height: "400px" }}>
                  <table
                    className="table table-hover text-nowrap patient-table"
                    cellSpacing={0}
                  >
                    <thead>
                      <tr>
                        <th>Patient Name</th>
                        <th>Appt Date</th>
                        <th>Purpose</th>
                        <th>Type</th>
                        <th>Paid Amount</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <li className="nav-item patient-appoit">
                            <img src="https://luv.vn/wp-content/uploads/2021/02/anh-hot-girl-lanh-lung-ca-tinh-hap-dan-chat-ngau.jpg"></img>
                            <p>Nguyen Thu Ha</p>
                          </li>
                        </td>
                        <td>
                          <p>11 Nov 2019</p>
                          <p>10.00 AM</p>
                        </td>
                        <td>New Patient</td>
                        <td>General</td>
                        <td>$150</td>
                        <td>
                          <div className="btn-Appoit">
                            <button
                              type="button"
                              class="btn btn-block btn-outline-info btn-flat"
                            >
                              View
                            </button>
                            <button
                              type="button"
                              class="btn btn-block btn-outline-success btn-flat"
                            >
                              Accept
                            </button>
                            <button
                              type="button"
                              class="btn btn-block btn-outline-danger btn-flat"
                            >
                              Cancel
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <li className="nav-item patient-appoit">
                            <img src="https://luv.vn/wp-content/uploads/2021/02/anh-hot-girl-lanh-lung-ca-tinh-hap-dan-chat-ngau.jpg"></img>
                            <p>Nguyen Thu Ha</p>
                          </li>
                        </td>
                        <td>
                          <p>11 Nov 2019</p>
                          <p>10.00 AM</p>
                        </td>
                        <td>New Patient</td>
                        <td>General</td>
                        <td>$150</td>
                        <td>
                          <div className="btn-Appoit">
                            <button
                              type="button"
                              class="btn btn-block btn-outline-info btn-flat"
                            >
                              View
                            </button>
                            <button
                              type="button"
                              class="btn btn-block btn-outline-success btn-flat"
                            >
                              Accept
                            </button>
                            <button
                              type="button"
                              class="btn btn-block btn-outline-danger btn-flat"
                            >
                              Cancel
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <li className="nav-item patient-appoit">
                            <img src="https://luv.vn/wp-content/uploads/2021/02/anh-hot-girl-lanh-lung-ca-tinh-hap-dan-chat-ngau.jpg"></img>
                            <p>Nguyen Thu Ha</p>
                          </li>
                        </td>
                        <td>
                          <p>11 Nov 2019</p>
                          <p>10.00 AM</p>
                        </td>
                        <td>New Patient</td>
                        <td>General</td>
                        <td>$150</td>
                        <td>
                          <div className="btn-Appoit">
                            <button
                              type="button"
                              class="btn btn-block btn-outline-info btn-flat"
                            >
                              View
                            </button>
                            <button
                              type="button"
                              class="btn btn-block btn-outline-success btn-flat"
                            >
                              Accept
                            </button>
                            <button
                              type="button"
                              class="btn btn-block btn-outline-danger btn-flat"
                            >
                              Cancel
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <li className="nav-item patient-appoit">
                            <img src="https://luv.vn/wp-content/uploads/2021/02/anh-hot-girl-lanh-lung-ca-tinh-hap-dan-chat-ngau.jpg"></img>
                            <p>Nguyen Thu Ha</p>
                          </li>
                        </td>
                        <td>
                          <p>11 Nov 2019</p>
                          <p>10.00 AM</p>
                        </td>
                        <td>New Patient</td>
                        <td>General</td>
                        <td>$150</td>
                        <td>
                          <div className="btn-Appoit">
                            <button
                              type="button"
                              class="btn btn-block btn-outline-info btn-flat"
                            >
                              View
                            </button>
                            <button
                              type="button"
                              class="btn btn-block btn-outline-success btn-flat"
                            >
                              Accept
                            </button>
                            <button
                              type="button"
                              class="btn btn-block btn-outline-danger btn-flat"
                            >
                              Cancel
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
