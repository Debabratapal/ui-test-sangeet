import React from "react";
import "../../Styles/AboutItems.css";

const items = [
  {
    icon: "fa fa-copy",
    title: "Used Space",
    value: "49/50",
    logo: "fa fa-exclamation-triangle",
    desc: "Get More space",
    gb: true
  },
  {
    icon: "fa fa-home",
    title: "Revenue",
    value: "34,245",
    logo: "fa fa-table",
    desc: "Last 24 hours",
    doller: true
  },
  {
    icon: "fa fa-info-circle",
    title: "Fixed Issues",
    value: "75",
    logo: "fa fa-tags",
    desc: "Tracked From Github"
  },
  {
    icon: "fa fa-twitter",
    title: "Followers",
    value: "254",
    logo: "fa fa-watch",
    desc: "Just Uploaded",
    plus: true
  }
];

const About = props => (
  <div className="about">
    <div className="about-header">
      <div className="about-icon">
        <i className={props.icon} />
      </div>
      <div>{props.title}</div>
    </div>
    <div className="about-value">
      {props.plus ? <span>+</span> : ""}
      {props.doller ? <span>$</span> : ""}
      {props.value}
      {props.gb ? <span>GB</span> : ""}
    </div>
    <div className="about-desc">
      <span>
        <i className={props.logo} />
      </span>
      <span>{props.desc}</span>
    </div>
  </div>
);

const AboutItems = () => {
  return (
    <div className="about-container">
      {items.map(item => (
        <About {...item} />
      ))}
    </div>
  );
};

export default AboutItems;
