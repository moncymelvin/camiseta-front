import React from "react";
import { Link } from "react-router-dom";

const AdminNav = () => (
  <nav className="bg-dark h-100">
    <ul className="nav flex-column">
      <li className="nav-item ">
        <Link to="/admin/dashboard" className="nav-link">
         <div className="text-white">Dashboard</div> 
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/product" className="nav-link">
        <div className="text-white"> Product</div> 
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/products" className="nav-link">
        <div className="text-white"> Products</div> 
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/category" className="nav-link">
        <div className="text-white"> Category</div> 
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/sub" className="nav-link">
        <div className="text-white"> Sub Category</div> 
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/admin/coupon" className="nav-link">
        <div className="text-white">  Coupon</div> 
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/user/password" className="nav-link">
        <div className="text-white"> Password</div> 
        </Link>
      </li>
    </ul>
  </nav>
);

export default AdminNav;
