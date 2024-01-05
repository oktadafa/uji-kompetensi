import "admin-lte/plugins/bootstrap/js/bootstrap.bundle";
import "admin-lte/dist/css/adminlte.min.css";
import "admin-lte/dist/js/adminlte";
import "admin-lte/plugins/fontawesome-free/css/all.min.css";
import "admin-lte/plugins/jquery/jquery";
import Navbar from "./component/navbar";
import Sidebar from "./component/sidebar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Index from "./component/main/kasir";
export default function Kasir() {
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
          <Route path="/kasir/index" element={<Index />} />
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
