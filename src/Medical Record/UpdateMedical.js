import React, { Component } from "react";
// import db from "../firebase";
import { db } from "../firebase";

class UpdateMedical extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: "",
      patientid: "",
      name: "",
      disease: "",
      date: "",
      age: "",
      adress: "",
    };
  }
  componentWillMount() {}

  componentDidMount() {
    const ref = db.collection("medical_record").doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const dataa = doc.data();
        console.log(dataa.name);
        this.setState({
          key: doc.id,
          patientid: dataa.patientid,
          name: dataa.name,
          disease: dataa.disease,
          date: dataa.date,
          age: dataa.age,
          adress: dataa.adress,
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  onChange = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState({ dataa: state });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { name, adress, date, disease, age, patientid } = this.state;

    const updateRef = db.collection("medical_record").doc(this.state.key);
    updateRef
      .set({
        name,
        adress,
        disease,
        age,
        patientid,
        date,
      })
      .then((docRef) => {
        this.setState({
          key: "",
          name: "",
          adress: "",
          disease: "",
          age: "",
          patientid: "",
          date: "",
        });
        // this.props.history.push("/show/" + this.props.match.params.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  render() {
    return (
      <div className="content-wrapper">
        <section className="content-header">
          <div classNamAddMedicale="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Medical Record List</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <div className="btn__medical--record">
                    <a href="/addmedicalrecord" className="add__medical">
                      Add Medical Record
                    </a>
                  </div>
                </ol>
              </div>
            </div>
          </div>
          {/* /.container-fluid */}
        </section>
        <section className="content">
          <div className="container-fluid">
            <div className="add_medicalRecord">
              <div className="container">
                <div className="row">
                  <form
                    className="add_medical--record form"
                    onSubmit={this.onSubmit}
                  >
                    <h2 className="title_addMD">Edit Medical Record</h2>
                    <div className="form-row">
                      <div className="form-group col-md-6 patient_id">
                        <label>Patient ID</label>
                        <input
                          type="text"
                          className="form-control"
                          name="patientid"
                          placeholder="Patient ID"
                          value={this.state.patientid}
                          onChange={this.onChange}
                        />
                      </div>
                      <div className="form-group col-md-6 name">
                        <label for="name">Name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          placeholder="Name"
                          value={this.state.name}
                          onChange={this.onChange}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label for="inputAddress">Address</label>
                      <input
                        type="text"
                        className="form-control"
                        name="adress"
                        placeholder="Da Nang"
                        value={this.state.adress}
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group">
                      <label for="disease_name"> Disease Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="disease_name"
                        placeholder="Disease Name"
                        value={this.state.disease}
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-6 date">
                        <label>Date</label>
                        <input
                          type="date"
                          className="form-control"
                          name="date"
                          value={this.state.date}
                          onChange={this.onChange}
                        />
                      </div>
                      <div className="form-group col-md-4 order_by">
                        <label>Order By</label>
                        <select id="order_by" className="form-control">
                          <option selected>Your seft</option>
                          <option selected>Child</option>
                        </select>
                      </div>
                      <div className="form-group col-md-2 age">
                        <label for="age">Age</label>
                        <input
                          type="number"
                          className="form-control"
                          name="age"
                          value={this.state.age}
                          onChange={this.onChange}
                          placeholder="your age"
                        />
                      </div>
                    </div>

                    {/* Test */}

                    <div className="form-group col-md-2">
                      <label for="patient">Patient</label>
                      <input type="file" id="img" name="img" accept="image" />
                    </div>
                    <button type="submit" className="btn_add--medicalrecord">
                      UPDATE MEDICAL RECORD
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default UpdateMedical;
