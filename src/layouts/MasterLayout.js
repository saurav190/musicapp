import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";

import Footer from "../components/common/Footer";
import { useSelector } from "react-redux";

const MasterLayout = () => {
  const isLoggedIn = useSelector((store) => store.auth.isLoggedIn);

  return (
    <>
      

      <Header />

      <Outlet />
      <Footer />
    </>
  );
};
export default MasterLayout;
