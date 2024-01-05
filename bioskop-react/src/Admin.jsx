import "admin-lte/plugins/bootstrap/js/bootstrap.bundle";
import "admin-lte/dist/css/adminlte.min.css";
import "admin-lte/dist/js/adminlte";
import "admin-lte/plugins/fontawesome-free/css/all.min.css";
import "admin-lte/plugins/jquery/jquery";
import Navbar from "./component/navbar";
import Sidebar from "./component/sidebar";
import Main from "./component/main/admin/Dashboard/";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Film from "./component/main/admin/Film";
import JadwalFilm from "./component/main/admin/Jadwal Film";
export default function AdminRoute() {
  return (
    <Router>
      {/* Navbar */}
      <Navbar />
      {/* /.navbar */}
      {/* Main Sidebar Container */}
      <Sidebar />
      {/* Content Wrapper. Contains page content */}
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <Routes>
          <Route element={<Main />} path="/admin" />
          <Route element={<Film />} path="/admin/film" />
          <Route element={<JadwalFilm />} path="/admin/jadwal" />
        </Routes>
        {/* /.content */}
      </div>
      {/* /.content-wrapper */}
      <footer className="main-footer text-center">
        <strong>Copyright Sidasari Cinema </strong>
        All rights reserved.
      </footer>
    </Router>
  );
}
