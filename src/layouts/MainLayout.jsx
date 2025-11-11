import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hotline from "../components/Hotline";

function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hotline />
      <Navbar />
      {/* <main className="flex-grow"> */}
        <Outlet />
      {/* </main> */}
      <Footer />
    </div>
  );
}

export default MainLayout;