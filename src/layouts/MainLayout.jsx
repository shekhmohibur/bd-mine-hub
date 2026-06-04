import Navbar from "@/components/common/Navbar";
import { Outlet } from "react-router";

const  MainLayout = () => {
  return (
    <div className="min-h-screen bg-[#090909] text-white">
      <Navbar />

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;