import React from "react";
import "../../Styles/ChartItems.css";

const items = [
  {
    title: "Daily Sales",
    desc: "55% increase in today sale",
    foo: "updated 4 minutes ago"
  },
  {
    title: "Email Subscriptions",
    desc: "Last campaign Performance",
    foo: "updated 4 minutes ago"
  },
  {
    title: "Completed Task",
    desc: "Last campaign Performance",
    foo: "updated 4 minutes ago"
  }
];

const Chart = props => (
  <div className="chart">
    <div className="chart-title">
      <div>{props.title}</div>
      <span>{props.desc}</span>
    </div>
    <div className="chart-foo">{props.foo}</div>
  </div>
);

const ChartItems = () => {
  return (
    <div className="chart-container">
      {items.map(item => (
        <Chart {...item} />
      ))}
    </div>
  );
};

export default ChartItems;
