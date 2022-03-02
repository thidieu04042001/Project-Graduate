import React, { Component } from "react";
import "./profile.css";
class ProfileSetting extends Component {
  Add = () => {
    <div></div>;
  };
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
                  <li className="breadcrumb-item active">Edit your Profile</li>
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
                    <h5>Basic Information</h5>
                  </li>
                  <li>
                    <div className="img-doctorsetting">
                      <img src="https://doccure-react.dreamguystech.com/template/bc4e8d916b11472fc8050d8ff94e9a9a.jpg"></img>
                      <div className="btnpro">
                        <button className="btn btn-block btnimg">
                          Upload Photo
                        </button>
                        <p>Allowed JPG, GIF or PNG. Max size of 2MB</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <br></br>

            <div>
              <form>
                <div className="row">
                  <div className="col-6 form group">
                    <label htmlFor="exampleInputUsername">Username *</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputUsername"
                    />
                  </div>
                  <div className="col-6 form group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-6 form group">
                    <label htmlFor="exampleInputfname">First Name * </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputfname"
                    />
                  </div>
                  <div className="col-6 form group">
                    <label htmlFor="exampleInputlname">Last Name *</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputlname"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-6 form group">
                    <label htmlFor="exampleInputPhone">Phone Number</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputPhone"
                    />
                  </div>
                  <div className="col-6 form group">
                    <label htmlFor="exampleInputGender">Gender</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputGender"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-6 form group">
                    <label htmlFor="exampleInputPassword">Date of Birth</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputPassword"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <br></br>

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
                    <h5>About me</h5>
                  </li>
                </ul>
              </div>
            </div>
            <br></br>

            <div>
              <form>
                <div className="form group">
                  <label htmlFor="exampleInputUsername">Biography</label>
                  <textarea className="form-control" rows={6} cols={125} />
                </div>
              </form>
            </div>
          </div>
          <br></br>

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
                    <h5>Clinic Info</h5>
                  </li>
                </ul>
              </div>
            </div>
            <br></br>

            <div>
              <form>
                <div className="row">
                  <div className="col-6 form group">
                    <label htmlFor="exampleInputUserClinic">Clinic Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputUserClinic"
                    />
                  </div>
                  <div className="col-6 form group">
                    <label htmlFor="exampleInputCliAddress">
                      Clinic Address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputCliAddress"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className=" col-6 form group">
                    <label htmlFor="exampleInputClinicImages">
                      Clinic Images
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      id="exampleInputClinicImages"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <br></br>

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
                    <h5>Contact Details</h5>
                  </li>
                </ul>
              </div>
            </div>
            <br></br>

            <div>
              <form>
                <div className="row">
                  <div className="col-6 form group">
                    <label htmlFor="exampleInputAddress1">Address Line 1</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputAddress1"
                    />
                  </div>
                  <div className="col-6 form group">
                    <label htmlFor="exampleInputAddress2">Address Line 2</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputAddress2"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-6 form group">
                    <label htmlFor="exampleInputCity">City</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputCity"
                    />
                  </div>
                  <div className="col-6 form group">
                    <label htmlFor="exampleInputProvince">
                      State / Province
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputProvince"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-6 form group">
                    <label htmlFor="exampleInputCountry">Country</label>
                    <input
                      type="number"
                      className="form-control"
                      id="exampleInputCountry"
                    />
                  </div>
                  <div className="col-6 form group">
                    <label htmlFor="exampleInputCode">Postal Code</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputCode"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <br></br>
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
                    <h5>Pricing</h5>
                  </li>
                </ul>
              </div>
            </div>
            <br></br>

            <div>
              <form>
                <div className="row form group">
                  <div className="col-2 radio-pri">
                    <input
                      type="radio"
                      value="free"
                      name="pricing"
                      className="radio-in"
                    />
                    Free
                  </div>

                  <div>
                    <input
                      type="radio"
                      value="custompricing"
                      name="pricing"
                      className="radio-in"
                    />
                    Custom Price (per hour)
                  </div>
                </div>
              </form>
            </div>
          </div>

          <br></br>

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
                    <h5>Services and Specialization</h5>
                  </li>
                </ul>
              </div>
            </div>
            <br></br>

            <div>
              <form>
                <div className="row ">
                  <div className=" col-12 form group">
                    <label htmlFor="exampleInputServices">Services</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputServices"
                      placeholder="Add new Tag"
                    />
                  </div>
                </div>
                <div className="row ">
                  <div className=" col-12 form group">
                    <label htmlFor="exampleInputSpecialization">
                      Specialization
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputSpecialization"
                      placeholder="Add new Tag"
                    />
                    <p>Note : Type & Press enter to add new specialization</p>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <br></br>

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
                    <h5>Education</h5>
                  </li>
                </ul>
              </div>
            </div>
            <br></br>

            <div>
              <form>
                <div className="row">
                  <div className="col-3 form group">
                    <label htmlFor="exampleInputDegree">Degree</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputDegree"
                    />
                  </div>
                  <div className="col-4 form group">
                    <label htmlFor="exampleInputCollege">
                      College/Institute
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputCollege"
                    />
                  </div>
                  <div className="col-4 form group">
                    <label htmlFor="exampleInputCompletion">
                      Year of Completion
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputCompletion"
                    />
                  </div>
                </div>

                <br></br>
                <div className="row ">
                  <div className="col-2 form group">
                    <button
                      className="btn btn-outline-info btn-block btn-flat btn-add"
                      onClick={this.Add}
                    >
                      <i class="fa fa-plus-circle" aria-hidden="true"></i>
                      <span>Add More</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <br></br>

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
                    <h5>Experience</h5>
                  </li>
                </ul>
              </div>
            </div>
            <br></br>

            <div>
              <form>
                <div className="row">
                  <div className="col-4 form group">
                    <label htmlFor="exampleInputHospital">Hospital Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputHospital"
                    />
                  </div>
                  <div className="col-3 form group">
                    <label htmlFor="exampleInputFrom">From</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputFrom"
                    />
                  </div>
                  <div className="col-4 form group">
                    <label htmlFor="exampleInputTo">To</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputTo"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-4 form group">
                    <label htmlFor="exampleInputDesignation">Designation</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputDesignation"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>

          <br></br>

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
                    <h5>Awards</h5>
                  </li>
                </ul>
              </div>
            </div>
            <br></br>

            <div>
              <form>
                <div className="row">
                  <div className="col-6 form group">
                    <label htmlFor="exampleInputAwards">Awards</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputAwards"
                    />
                  </div>
                  <div className="col-6 form group">
                    <label htmlFor="exampleInputYear">Year</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputYear"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>

          <br></br>

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
                    <h5>Membership</h5>
                  </li>
                </ul>
              </div>
            </div>
            <br></br>

            <div>
              <form>
                <div className="row">
                  <div className="col-6 form group">
                    <label htmlFor="exampleInputMembership">Membership</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputMembership"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <br></br>

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
                    <h5>Registrations</h5>
                  </li>
                </ul>
              </div>
            </div>
            <br></br>

            <div>
              <form>
                <div className="row">
                  <div className="col-6 form group">
                    <label htmlFor="exampleInputAwardsre">Awards</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputAwardsre"
                    />
                  </div>
                  <div className="col-6 form group">
                    <label htmlFor="exampleInputYearre">Year</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputYearre"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <br></br>
          <div className="profile-sett-button">
            <button className="btn btn-block btnbooking">SAVE CHANGES</button>
          </div>
        </section>
      </div>
    );
  }
}

export default ProfileSetting;
