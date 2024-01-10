import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const [nama, setNama] = useState("");
  const navigasi = useNavigate("");
  useEffect(() => {
    if (localStorage.getItem("token") == null) {
      return navigasi("/login");
    }
    if (JSON.parse(localStorage.getItem("user")).role_id == 2) {
      navigasi("/kasir");
    }

    const data = JSON.parse(localStorage.getItem("user"));
    setNama(data.name);
  }, []);

  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4 position-fixed">
      {/* Brand Logo */}
      <a className="brand-link text-center">
        <span className="brand-text font-weight-bold">Sidasari Cinema</span>
      </a>
      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar user (optional) */}
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="info">
            <h6 className="text-light text-center">{nama}</h6>
          </div>
        </div>
        {/* SidebarSearch Form */}
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
            {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
            <li className="nav-item">
              <Link to={"/admin/"} className="nav-link">
                <i className="nav-icon fas fa-home"></i>
                <p>Beranda</p>
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/admin/jadwal"} className="nav-link">
                <i className="nav-icon far fa-calendar-alt"></i>
                <p>Data Jadwal Film</p>
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/admin/ruang"} className="nav-link">
                <i className="nav-icon fas fa-video"></i>
                <p>Data Ruang</p>
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/admin/karyawan"} className="nav-link">
                <i className="nav-icon fas fa-users"></i>
                <p>Data Karyawan</p>
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/admin/film"} className="nav-link">
                <i className="nav-icon fas fa-reguler fa-film" />
                <p>Daftar Film</p>
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
