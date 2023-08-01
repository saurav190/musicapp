import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = (props) => {
  // const email = useSelector((state)=>state.login.email); 
  // const password = useSelector((state)=>state.login.password)
  const navigate = useNavigate();
  const { Component } = props;
  // useEffect(() => {
  //   const user = localStorage.getItem('usermusic');
  //   if (!user) {
  //     navigate("/login");
  //   }
  // }, []);

  return (
    <div>
      <Component />
    </div>
  );
};

export default ProtectedRoute;
