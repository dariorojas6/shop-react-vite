import React from "react";
// import { DataContext } from "../context/DataProvider";
// import { Link } from "react-router-dom";
// import {store} from "../components/store.jpg"

export const Header = () => {


return (
    <header>
      <div className="menu">
      <box-icon name="menu"></box-icon>
      </div>
      
      
      <div className="logo">
        <img src="https://cdn-icons-png.flaticon.com/512/4833/4833311.png" alt="Store" width="50" />
      </div>
      <div className="title">
        <h1>FakeStore</h1>
      </div>
      
      <ul>
      
        <li>
          <a href="#">INICIO</a>
        </li>
        <li>
          <a href="#">Productos</a>
        </li>
      </ul>
      <div className="cart" >
        <box-icon name="cart"></box-icon>
        <span className="item__total"> 0 </span>
      </div>
    </header>
  );
};
