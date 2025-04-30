import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-950">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        {/* <Topbar /> */}
        <main className="flex-1 pl-3">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
