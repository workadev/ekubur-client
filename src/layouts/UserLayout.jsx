import { Outlet } from "react-router-dom";
import UserNavbar from "../components/User/UserNavbar";

function UserLayout() {
  return (
    <div className="flex">
      <UserNavbar />
      <div className="flex min-h-screen flex-col w-full justify-between">
        <div>
          <div>search</div>
          <Outlet />
        </div>
        <div>footer</div>
      </div>
    </div>
  );
}

export default UserLayout;