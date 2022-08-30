import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";
import { MdDashboard } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { BiUser, BiBuilding } from "react-icons/bi";

function Sidebar() {
  let activeStyle = {
    textDecoration: "underline",
  };

  let activeClassName = "bg-blue-100 text-blue-700 rounded-lg";
  return (
    <>
      <div className="border-r border-slate-300 bg-white w-0 md:w-[10%]  py-6 flex flex-col gap-3 items-center h-full">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          <div className={styles.link}>
            <MdDashboard className={styles.link_icon} />
            <p>Dashboard</p>
          </div>
        </NavLink>
        <NavLink
          to="/employees"
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          <div className={styles.link}>
            <FiUsers className={styles.link_icon} />
            <p>Employees</p>
          </div>
        </NavLink>
        <NavLink
          to="departments"
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          <div className={styles.link}>
            <BiBuilding className={styles.link_icon} />
            <p>Departments</p>
          </div>
        </NavLink>
        <NavLink
          to="/users"
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          <div className={styles.link}>
            <BiUser className={styles.link_icon} />
            <p>Users</p>
          </div>
        </NavLink>
      </div>
    </>
  );
}

export default Sidebar;
