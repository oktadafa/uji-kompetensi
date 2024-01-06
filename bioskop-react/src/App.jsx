import "admin-lte/plugins/bootstrap/js/bootstrap.bundle";
import "admin-lte/dist/css/adminlte.min.css";
import "admin-lte/dist/js/adminlte";
import "admin-lte/plugins/fontawesome-free/css/all.min.css";
import "admin-lte/plugins/jquery/jquery";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Kasir from "./Kasir";
import Main from "./component/main/admin/Dashboard";
import JadwalFilm from "./component/main/admin/Jadwal Film";
import Film from "./component/main/admin/Film";
import Pegawai from "./component/main/admin/Data Karyawan/index";
import BuatFilm from "./component/main/admin/Film/create";
import BuatJadwal from "./component/main/admin/Jadwal Film/create";
import TambahPegawai from "./component/main/admin/Data Karyawan/create";
import Login from "./component/main/login";
import ShowFilm from "./component/main/admin/Film/show";
import DataRuang from "./component/main/admin/Data Ruang";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<Main />} />

        <Route path="/admin/jadwal" element={<JadwalFilm />} />
        <Route path="/admin/jadwal/buat" element={<BuatJadwal />} />
        <Route path="/admin/jadwal/edit/:id" />

        <Route path="/admin/film" element={<Film />} />
        <Route path="/admin/film/:id" element={<ShowFilm />} />
        <Route path="/admin/film/buat" element={<BuatFilm />} />
        <Route path="/admin/film/edit/:id" />

        <Route path="/admin/ruang" element={<DataRuang />} />

        <Route path="/admin/karyawan" element={<Pegawai />} />
        <Route path="/admin/karyawan/buat" element={<TambahPegawai />} />
        <Route path="/admin/karyawan/edit/:id" />

        <Route path="/kasir" />

        <Route path="/login" element={<Login />} />

        <Route path="/kasir" element={<Kasir />} />
      </Routes>
    </Router>
  );
}

export default App;
