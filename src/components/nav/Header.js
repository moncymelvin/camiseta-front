import React, { useState } from "react";
import { Menu, Badge } from "antd";
import {
  AppstoreOutlined,
  SettingOutlined,
  UserOutlined,
  UserAddOutlined,
  LogoutOutlined,
  ShoppingOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import firebase from "firebase";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Search from "../forms/Search";
import Laptop from "../../images/camlogo.png";



const { SubMenu, Item } = Menu;

const Header = () => {
  const [current, setCurrent] = useState("home");

  let dispatch = useDispatch();
  let { user, cart } = useSelector((state) => ({ ...state }));

  let history = useHistory();

  const handleClick = (e) => {
    // console.log(e.key);
    setCurrent(e.key);
  };

  const logout = () => {
    firebase.auth().signOut();
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    history.push("/login");
  };

  return (
    
    
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" theme="dark" >


    <Item key="logo" >
    
    <img src={Laptop} height="50px" width="170px"/>
  </Item>
  

  




    

      

      {!user && (
        <Item key="register" icon={<UserAddOutlined />} className="float-right">
          <Link to="/register">Register</Link>
        </Item>
      )}

      {!user && (
        <Item key="login" icon={<UserOutlined />} className="float-right">
          <Link to="/login">Login</Link>
        </Item>
      )}

      {user && (
        <SubMenu 
          icon={<SettingOutlined />}
          title={user.email && user.email.split("@")[0]}
          className="float-right"
        >
          {user && user.role === "subscriber" && (
            <Item>
              <Link to="/user/history" className="text-white">Dashboard</Link>
            </Item>
          )}

          {user && user.role === "admin" && (
            <Item>
              <Link to="/admin/dashboard" className="text-white">Dashboard</Link>
            </Item>
          )}

          <Item icon={<LogoutOutlined />} onClick={logout}>
            Logout
          </Item>
        </SubMenu>
      )}

      <Item key="cart" icon={<ShoppingCartOutlined />} className="float-right">
      <Link to="/cart" className="text-white">
        <Badge count={cart.length} offset={[9, 0]}>
          Cart
        </Badge>
      </Link>
    </Item>

    <Item key="shop" icon={<ShoppingOutlined />} className="float-right">
   <Link to="/shop"  className="text-white">Shop</Link>
    </Item>

   
    <Item key="home" icon={<AppstoreOutlined />} className="float-right ">
    <Link to="/" className="text-white">Home</Link>
  </Item>

      <span className="float-right p-1">
        <Search />
      </span>
    </Menu>
    
  );
};

export default Header;
