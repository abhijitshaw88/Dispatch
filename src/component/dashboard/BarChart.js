import React, { Component } from "react";
import BarGroup from "./BarGroup";

class BarChart extends Component {
  state = {
    data: [
      { name: "Mon", value: 20 },
      { name: "Tue", value: 40 },
      { name: "Wed", value: 35 },
      { name: "Thu", value: 50 },
      { name: "Fri", value: 55 },
      { name: "Sat", value: 40 },
      { name: "Sun", value: 30 },
    ],
  };

  render() {
    let barHeight = 30;

    let barGroups = this.state.data.map((d, i) => (
      <g transform={`translate(0, ${i * barHeight})`}>
        <BarGroup d={d} barHeight={barHeight} />
      </g>
    ));

    return (
      <svg width="800" height="300">
        <g className="container">
          <text className="title" x="10" y="30">
            Week beginning 9th July
          </text>
          <g className="chart" transform="translate(60,100)">
            {barGroups}
          </g>
        </g>
      </svg>
    );
  }
}

export default BarChart;
