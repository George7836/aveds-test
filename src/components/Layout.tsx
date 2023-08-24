import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header />
      <div className="wrapper">
        <div className="container">
          <Outlet />
        </div>
      </div>
    </>
  );
}
