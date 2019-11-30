import React from "react";

const SidebarItem = ({ items }) => {
  return (
    <div className="item">
      {items.map((el, i) => (
        <div key={i} className="items">
          <span>
            <i className={el.icon} />
          </span>
          <span>{el.title}</span>
        </div>
      ))}
    </div>
  );
};

export default SidebarItem;
