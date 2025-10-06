import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";
import "./Root.css";

const Root = () => {
  return (
    <div>
      <Header></Header>
      <div className="root-main">
        <Sidebar></Sidebar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;

/**
 *
 * 1. use: usersPromise > Suspense > promise > use(usersPromise)
 * 2. [ less used so far] > useState + useEffect ( () =>{}, [] )
 * 3. set loader in the route definition: load data before router component is rendered
 */
