import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white">
      <Outlet />
    </div>
  );
}