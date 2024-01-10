import { useEffect, useState } from "react";
import Navbar from "../../../navbar";
import Sidebar from "../../../sidebar";
import { film, karyawan, ruang } from "../../../../axios";
import { Link } from "react-router-dom";
export default function Main() {
  const [jmlhRuang, setJmlRuang] = useState(0);
  const [jmlKaryawan, setJmlKaryawan] = useState(0);
  const [jmlFilm, setJmlFilm] = useState(0);
  useEffect(() => {
    getRuang();
    getKaryawan();
    getFilm();
  });
  const getRuang = () => {
    ruang
      .get()
      .then((response) => setJmlRuang(response.data.data.length))
      .catch((err) => console.log("gagal mengambil data " + err));
  };
  const getKaryawan = () => {
    karyawan
      .get()
      .then((response) => setJmlKaryawan(response.data.data.length))
      .catch((err) => console.log("gagal mengambil data " + err));
  };
  const getFilm = () => {
    film
      .get()
      .then((response) => setJmlFilm(response.data.data.length))
      .catch((err) => console.log("gagal mengambil data " + err));
  };
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2 py-3">
              <div className="col-sm-6 mt-5">
                <h1>Dashboard</h1>
              </div>
            </div>
          </div>
          {/* /.container-fluid */}
        </section>
        {/* Main content */}
        <section className="content">
          {/* Default box */}
          <div className="container-fluid">
            <div className="row justify-content-around">
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-info">
                  <div className="inner">
                    <h3>{jmlFilm}</h3>
                    <p>Total Film</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-bag" />
                  </div>
                  <Link to={"/admin/film"} className="small-box-footer">
                    More info <i className="fas fa-arrow-circle-right" />
                  </Link>
                </div>
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-success">
                  <div className="inner">
                    <h3>{jmlKaryawan}</h3>
                    <p>Total Karyawan</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-stats-bars" />
                  </div>
                  <Link to={"/admin/karyawan"} className="small-box-footer">
                    More info <i className="fas fa-arrow-circle-right" />
                  </Link>
                </div>
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-6">
                {/* small box */}
                <div className="small-box bg-primary">
                  <div className="inner">
                    <h3>{jmlhRuang}</h3>
                    <p>Total Ruang</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-person-add" />
                  </div>
                  <Link to={"/admin/ruang"} className="small-box-footer">
                    More info <i className="fas fa-arrow-circle-right" />
                  </Link>
                </div>
              </div>
              {/* ./col */}

              {/* ./col */}
            </div>
          </div>
          {/* /.card */}
        </section>
      </div>
      <footer className="main-footer text-center fixed-bottom">
        <strong>Copyright Sidasari Cinema </strong>
        All rights reserved.
      </footer>
    </>
  );
}
