import React from "react";
import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css";
import { MdDashboard } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { GrBusinessService } from "react-icons/gr";
import { BiUser } from "react-icons/bi";

function Sidebar() {
  return (
    <>
      <div className="border-r border-slate-300 bg-white w-[10%] py-6 flex flex-col gap-3 items-center h-full">
        <div className={styles.link}>
          <MdDashboard className={styles.link_icon} />
          <Link to="/">Dashboard</Link>
        </div>
        <div className={styles.link}>
          <TbBrandBooking className={styles.link_icon} />
          <Link to="/">Bookings</Link>
        </div>
        <div className={styles.link}>
          <GrBusinessService className={styles.link_icon} />
          <Link to="/">Services</Link>
        </div>
        <div className={styles.link}>
          <BiUser className={styles.link_icon} />
          <Link to="/users">Users</Link>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
