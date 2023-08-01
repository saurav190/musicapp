import React, { useContext, useState } from "react";

import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import loginImg from "../../assets/img/login.jpg";
import { MyContext } from "../../provider/ContextProvider";
import { userRegister } from "../../redux/auth/UserActions";

export default function Register(props) {
  const { isToggleOff } = useContext(MyContext);

  const dispatch = useDispatch();
  //const { loading } = useSelector((state) => state.alertsReducer);
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
    cpassword: "",
  });

  const handleInputChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userRegister(formValues));
    navigate("/login");

    console.log(formValues);
  };

  return (
    <section
      className={
        isToggleOff
          ? "bg-zinc-800 text-white"
          : "bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
      }
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
        <div className="hidden sm:block">
          <img className="w-full h-full object-cover" src={loginImg} alt="" />
        </div>

        <div className=" flex flex-col justify-center">
          <form
            className="max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8"
            onSubmit={handleSubmit}
          >
            <h2 className="text-4xl dark:text-white font-bold text-center">
              SIGN UP
            </h2>
            <div className="flex flex-col text-gray-400 py-2">
              <label>Username</label>
              <input
                className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                id="username"
                name="username"
                type="text"
                value={formValues.username}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col text-gray-400 py-2">
              <label htmlFor="password" className="block">
                Password
              </label>
              <input
                className="p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                id="password"
                name="password"
                type="password"
                value={formValues.password}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col text-gray-400 py-2">
              <label htmlFor="cpassword" className="block">
                Confirm Password
              </label>
              <input
                className="p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                id="cpassword"
                name="cpassword"
                type="password"
                value={formValues.cpassword}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex justify-between text-gray-400 py-2">
              <p className="flex items-center">
                <input className="mr-2" type="checkbox" /> Remember Me
              </p>
              <p>Forgot Password</p>
            </div>

            <Link to="/login">
              {" "}
              <div className="flex items-center justify-center text-gray-400 py-2">
                Click here to Login
              </div>
            </Link>

            <button className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg">
              SIGN UP
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
