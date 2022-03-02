import React, { Component } from "react";
import "./Content.css";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

class MoneyChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "Page A", uv: 4000, pv: 2400 },
        { name: "Page B", uv: 3000, pv: 1398 },
        { name: "Page C", uv: 2000, pv: 9800 },
        { name: "Page D", uv: 2780, pv: 3908 },
        { name: "Page E", uv: 1890, pv: 4800 },
        { name: "Page F", uv: 2390, pv: 3800 },
        { name: "Page G", uv: 3490, pv: 4300 },
      ],
    };
  }

  render() {
    const { data } = this.state;

    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">
                <b>Total number of the visit in the month</b>
              </h5>
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
            <div className="card-body" style={{ backgroundColor: "#BBBBBB" }}>
              <ResponsiveContainer className="chart" height={300}>
                <BarChart
                  width={100}
                  height={300}
                  data={data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="pv" fill="#000000" />
                  {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MoneyChart;
