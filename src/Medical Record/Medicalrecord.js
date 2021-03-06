import "./medicalrecord.css";
import React, { useState, useEffect } from "react";
import db from "../firebase";

export default function Medicalrecord() {
  const [medical_record, setCustomersData] = useState([]);

  useEffect(() => {
    db.collection("medical_record").onSnapshot((snapshot) => {
      setCustomersData(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);
  console.log({ medical_record });
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
                {medical_record?.map(({ id, data }) => (
                  <tr key={id}>
                    <td className="content__medical">{data.patientid}</td>
                    <td className="content__medical">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzPgt3nauHo959jF1wYnECGw-QaoOJaTLoJA&usqp=CAU"
                        alt="Avatar"
                        class="img_medical w3-circle"
                      />
                    </td>
                    <td className="content__medical">{data.name}</td>
                    <td className="content__medical">{data.age}</td>
                    <td className="content__medical">{data.name}</td>
                    <td className="content__medical">{data.disease}</td>
                    <td className="content__medical">{data.name}</td>
                    <td className="content__medical">{data.adress}</td>
                    <td className="content__medical">
                      <a href="#">
                        <i className="fas fa-edit edit_icon"></i>
                      </a>
                      <a href="#">
                        <i className="fa fa-trash remove_icon"></i>
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
