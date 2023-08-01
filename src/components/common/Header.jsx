import {
  faBars,
  faMoon,
  faRightFromBracket,
  faSearch,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import { MyContext } from "../../provider/ContextProvider";
import { userLogout } from "../../redux/auth/UserActions";
import SideBarMenu from "../SideBarMenu";

function Header() {
  const {
    handleClick,
    handleChange,
    inputRef,
    search,
    showSideBar,
    setSideBar,
    isToggleOff,
    setIsToggle,
  } = useContext(MyContext);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = (event) => {
    event.preventDefault();
    navigate('/login');
    dispatch(userLogout());
  };
  const user = localStorage.getItem('usermusic');

  return (
    <>
      <section className="sticky top-0 z-50">
        <div className="relative container-fluid  ">
          <div className="grid grid-cols-1 mx-auto ">
            <div className=" flex items-center justify-center max-sm:items-start max-sm:gap-1 lg:gap-28 bg-zinc-800 font-sans font-semibold text-lg p-5 text-white lg:px-24">
              <div className="logo flex items-center gap-2 max-sm:w-15 max-md:gap-4 justify-start">
                <NavLink className="" to="/">
                  <img className="rounded-full w-10" src={logo} alt="logo" />
                </NavLink>
                <NavLink className="" to="/">
                  <h3 className="sitename lg:visible max-md:hidden">Music Player</h3>
                </NavLink>
              </div>
              <div className="lg:items-center lg:justify-center ">
                <div className="search flex items-center justify-center gap-5 max-sm:gap-3 ">
                  {user && <>
                    
                    <input
                    type="text"
                    className="border-2 rounded-full border-slate-400 max-sm:w-20 max-sm:h-8   text-slate-700 px-3 py-2 searchinput"
                    value={search}
                    
                    placeholder="Search Here..."
                    ref={inputRef}
                    onChange={handleChange}
                  />

                  <NavLink to="/searchresult">
                    <button
                      type="submit"
                      onClick={handleClick}
                      className="h-full flex    items-center"
                    >
                      <FontAwesomeIcon icon={faSearch} />
                    </button>
                  </NavLink>
                    
                  <button
                    className="h-full flex main-link items-center"
                    onClick={() => {
                      setSideBar(!showSideBar);
                    }}
                  >
                    <FontAwesomeIcon icon={faBars} />
                  </button>
                    </>}

                  

                  <button
                    className="h-full flex main-link  items-center"
                    onClick={() => {
                      setIsToggle(!isToggleOff);
                    }}
                  >
                    {isToggleOff ? (
                      <div className="flex gap-4 items-center rounded-full px-2 py-1 border border-slate-200">
                        <div className="flex gap-1 items-center">
                          <FontAwesomeIcon icon={faMoon} />{" "}
                          <p className="text-White max-sm:hidden">Dark </p>
                        </div>
                      </div>
                    ) : (
                      <div className="flex gap-4 items-center rounded-full px-2 py-1 border border-slate-200">
                        {" "}
                        <div className="flex gap-1 items-center">
                          <FontAwesomeIcon icon={faSun} />{" "}
                          <p className="text-White max-sm:hidden">Light </p>
                        </div>
                      </div>
                    )}
                  </button>

                 {user &&  <button
                  className="h-full flex main-link items-center gap-2 border border-slate-200  rounded-full px-2 py-1"
                  onClick={handleLogout}
                >
                  <FontAwesomeIcon icon={faRightFromBracket} />
                  <p className="text-White max-sm:hidden">LogOut</p>
                </button>}
                </div>
              </div>
            </div>
          </div>
        </div>

        {showSideBar && (
          <div className="absolute z-50 h-screen p-5 right-0 bg-zinc-800 w-[250px] rounded-bl-lg rounded-br-lg shadow-lg">
            <SideBarMenu sidebarState={showSideBar} setSideBar={setSideBar} />
          </div>
        )}
      </section>
    </>
  );
}

export default Header;
