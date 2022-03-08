import React, { Component } from "react";
import { Link } from "react-router-dom";
// import db from "../firebase";
import { db } from "../firebase";

class Medicalrecord extends Component {
  constructor(props) {
    super(props);
    this.ref = db.collection("medical_record");
    this.unsubscribe = null;
    this.state = {
      medical_record: [],
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const medical_record = [];
    querySnapshot.forEach((doc) => {
      const { name, adress, disease, age, patientid, date } = doc.data();
      medical_record.push({
        key: doc.id,
        name,
        adress,
        disease,
        age,
        patientid,
        date,
      });
    });
    this.setState({
      medical_record,
    });
  };

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }
  deleteData = (id) => {
    db.collection("medical_record")
      .doc(id)
      .delete()
      .then(() => {
        console.log("Document successfully deleted!");
        this.props.history.push("/");
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };
  render() {
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
                    <a
                      href="/medical/addmedicalrecord"
                      className="add__medical"
                    >
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
                  {this.state.medical_record.map((data) => (
                    <tr key={this.state.id}>
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
                        <a>
                          <Link to={`/medical/updatemedicalrecord/${data.key}`}>
                            <i className="fas fa-edit edit_icon"> </i>
                          </Link>
                        </a>

                        <a href="#">
                          <i
                            className="fa fa-trash remove_icon"
                            onClick={() => {
                              this.deleteData(data.key);
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
}

export default Medicalrecord;
