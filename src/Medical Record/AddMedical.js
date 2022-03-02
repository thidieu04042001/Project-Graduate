import React, { useState, useEffect } from "react";
import "./medicalrecord.css";
import db from "../firebase";

function AddMedical() {
  const [Name, setName] = useState("");
  const [patientid, setpatientid] = useState("");
  const [Adress, setAdress] = useState("");
  const [Disease, setDisease] = useState("");
  const [Age, setAge] = useState("");
  const [Date, setDate] = useState("");

  const submit = (e) => {
    e.preventDefault();
    db.collection("medical_record").add({
      patientid: patientid,
      name: Name,
      adress: Adress,
      disease: Disease,
      date: Date,
      age: Age,
    });

    setName("");
    setpatientid("");
    setDate("");
    setAdress("");
    setDisease("");
    setAge("");
  };
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
                <form className="add_medical--record form">
                  <h2 className="title_addMD">Edit Medical Record</h2>
                  <div className="form-row">
                    <div className="form-group col-md-6 patient_id">
                      <label>Patient ID</label>
                      <input
                        type="text"
                        className="form-control"
                        id="patient_id"
                        placeholder="Patient ID"
                        value={patientid}
                        onChange={(e) => setpatientid(e.target.value)}
                      />
                    </div>
                    <div className="form-group col-md-6 name">
                      <label for="name">Name</label>
                      <input
                        type="name"
                        className="form-control"
                        id="name"
                        placeholder="Name"
                        value={Name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label for="inputAddress">Address</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputAddress"
                      placeholder="Da Nang"
                      value={Adress}
                      onChange={(e) => setAdress(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label for="disease_name"> Disease Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="disease_name"
                      placeholder="Disease Name"
                      value={Disease}
                      onChange={(e) => setDisease(e.target.value)}
                    />
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6 date">
                      <label>Date</label>
                      <input
                        type="date"
                        className="form-control"
                        id="date"
                        value={Date}
                        onChange={(e) => setDate(e.target.value)}
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
                        id="age"
                        value={Age}
                        onChange={(e) => setAge(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-group col-md-2">
                    <label for="patient">Patient</label>
                    <input type="file" id="img" name="img" accept="image" />
                  </div>
                  <button
                    type="submit"
                    className="btn_add--medicalrecord"
                    onClick={submit}
                  >
                    Edit
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

export default AddMedical;
