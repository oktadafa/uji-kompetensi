import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const [nama, setNama] = useState("");
  const navigasi = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("user") == null) {
      return navigasi("/");
    }
    if (JSON.parse(localStorage.getItem("user")).role_id == 1) {
      navigasi("/admin");
    }

    const data = JSON.parse(localStorage.getItem("user"));
    setNama(data.name);
  }, []);
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4 position-fixed">
      <a className="brand-link text-center">
        <span className="brand-text font-weight-bold">Sidasari Cinema</span>
      </a>
      <div className="sidebar">
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="info text-center">
            <a href="#" className="text-center">
              {nama}
            </a>
          </div>
        </div>
        <div className="form-inline">
          <div className="input-group" data-widget="sidebar-search">
            <input
              className="form-control form-control-sidebar"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <div className="input-group-append">
              <button className="btn btn-sidebar">
                <i className="fas fa-search fa-fw" />
              </button>
            </div>
          </div>
        </div>
        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <li className="nav-item">
              <Link to={"/kasir/"} className="nav-link">
                <i className="nav-icon fas fa-home"></i>
                <p>Beranda</p>
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/kasir/jadwal"} className="nav-link">
                <i className="nav-icon far fa-calendar-alt"></i>
                <p>Data Jadwal Film</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/kasir/tiket"} className="nav-link">
                <i className="nav-icon fas fa-ticket-alt"></i>
                <p>Data Pemesanan Tiket</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/logout"} className="nav-link">
                <i className="nav-icon fas fa-sign-out-alt"></i>
                <p>Keluar</p>
              </Link>
            </li>
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>
  );
}
