import "./medicalrecord.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import db from "../firebase";

export default function Medicalrecord() {
  const [medical_record, setCustomersData] = useState([]);

  function fetchAll() {
    db.collection("medical_record")
      .get()
      .then((snapshot) => {
        if (snapshot.docs.length) {
          snapshot.docs.forEach((doc) => {
            setCustomersData((prev) => {
              return [...prev, { data: doc.data(), id: doc.id }];
            });
          });
        }
      });
  }

  useEffect(() => {
    fetchAll();
  }, []);

  const deleteData = (id) => {
    db.collection("medical_record").doc(id).delete();
    window.location.reload();
  };

  return (
    <div className="content-wrapper">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Medical Record List</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <div className="btn__medical--record">
                  <a href="/medical/addmedicalrecord" className="add__medical">
                    Add Medical Record
                  </a>
                </div>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <table className="table table-hover table__background">
              <thead className="table__title--head">
                <tr>
                  <th scope="col" className="title__head">
                    Patient ID
                  </th>
                  <th scope="col" className="title__head">
                    Patient
                  </th>
                  <th scope="col" className="title__head">
                    Name
                  </th>
                  <th scope="col" className="title__head">
                    Age
                  </th>
                  <th scope="col" className="title__head">
                    Date
                  </th>
                  <th scope="col" className="title__head">
                    Disease Name
                  </th>
                  <th scope="col" className="title__head">
                    Orderd By
                  </th>
                  <th scope="col" className="title__head">
                    Address
                  </th>
                  <th scope="col" className="title__head">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {medical_record?.map((doc) => (
                  <tr key={doc.id}>
                    <td className="content__medical">{doc.data.patientid}</td>
                    <td className="content__medical">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzPgt3nauHo959jF1wYnECGw-QaoOJaTLoJA&usqp=CAU"
                        alt="Avatar"
                        class="img_medical w3-circle"
                      />
                    </td>
                    <td className="content__medical">{doc.data.name}</td>
                    <td className="content__medical">{doc.data.age}</td>
                    <td className="content__medical">{doc.data.name}</td>
                    <td className="content__medical">{doc.data.disease}</td>
                    <td className="content__medical">{doc.data.name}</td>
                    <td className="content__medical">{doc.data.adress}</td>
                    <td className="content__medical">
                      <a>
                        <Link to={`/medical/updatemedicalrecord/${doc.id}`}>
                          <i className="fas fa-edit edit_icon"> </i>
                        </Link>
                      </a>

                      <a href="#">
                        <i
                          className="fa fa-trash remove_icon"
                          onClick={() => {
                            deleteData(doc.id);
                          }}
                        ></i>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
