import logo from "../../assets/img/logo.png";
import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <section className=" bottom-0">
        <div className="container-fluid mt-auto  ">
          <div className="grid grid-cols-1 ">
            <div className=" flex items-center justify-center gap-28 bg-zinc-800 font-sans font-semibold text-lg p-5 text-white px-24">
              <div className="logo flex items-center gap-2 justify-start">
                <NavLink className="" to="/login">
                  <img className="rounded-full w-10" src={logo} alt="logo" />
                </NavLink>
                <NavLink className="" to="/">
                  <h3 className="sitename">Music Player</h3>
                </NavLink>
              </div>
              <div className="px-10">
                <p className="text-white">&#8471; All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
