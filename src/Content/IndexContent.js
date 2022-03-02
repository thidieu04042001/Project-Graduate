import React, { useState } from "react";
import Newsnumber from "./Newsnumber";
import Salechart from "./SaleChart";
import MonthVisiterChart from "./MonthVisiterChart";
import YearVisiterChart from "./YearVisiterChart";
import MoneyChart from "./MoneyChart";
import Review from "./Review";
import Patientappoiment from "./Patientappoiment";

class Indexcontent extends React.Component {
  render() {
    return (
      <div className="content-wrapper">
        <section className="content">
          <div className="container-fluid">
            <Newsnumber></Newsnumber>
            <br></br>
            <br></br>
            <h5>PATIENT APPOINTMENTS</h5>
            <br></br>
            <Patientappoiment></Patientappoiment>
            <br></br>
            <br></br>
            <div className="row">
              <div className="col-6">
                <MonthVisiterChart></MonthVisiterChart>
              </div>

              <div className="col-6">
                <YearVisiterChart></YearVisiterChart>
              </div>
            </div>
            <br></br>
            <br></br>
            <div className="row">
              <div className="col-6">
                <MoneyChart></MoneyChart>
              </div>

              <div className="col-6">
                <Review></Review>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Indexcontent;
