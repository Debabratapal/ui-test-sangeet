import React from "react";
import '../../Styles/Sidebar.css';
import SidebarItem from "./SidebarItem";

const items = [
    {
        title: 'Dashboard',
        icon: 'fa fa-sticky-note'
    },
    {
        title: 'User Profile',
        icon: 'fa fa-user'
    },
    {
        title: 'Table List',
        icon: 'fa fa-table'
    }, 
    {
        title: 'Typography',
        icon: 'fa fa-user'
    }, 
    {
        title: 'Icons',
        icon: 'fa fa-user'
    }, 
    {
        title: 'Maps',
        icon: 'fa fa-location-arrow'
    }, 
    {
        title: 'Notification',
        icon: 'fa fa-bell'
    }

]

const Sidebar = () => {
  return (
  <div className="sidebar-container">
    <div className="header">
        <i className="fab fa-angular" />
        Creative Tim
    </div>
    <SidebarItem items={items} />
  </div>
  )
}

export default Sidebar;
