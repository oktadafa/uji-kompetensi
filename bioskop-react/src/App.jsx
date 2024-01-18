import "admin-lte/plugins/bootstrap/js/bootstrap.bundle";
import "admin-lte/dist/css/adminlte.min.css";
import "admin-lte/dist/js/adminlte";
import "admin-lte/plugins/fontawesome-free/css/all.min.css";
import "admin-lte/plugins/jquery/jquery";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
import EditKaryawan from "./component/main/admin/Data Karyawan/edit";
import EditFilm from "./component/main/admin/Film/edit";
import EditJadwal from "./component/main/admin/Jadwal Film/edit";
import Index from "./component/main/kasir";
import Tiket from "./component/main/kasir/Pemesanan TIket";
import JadwalFilmKasir from "./component/main/kasir/Jadwal Film";
import Logout from "./component/main/logout";

function App() {
  return (
    <Router>
      <Routes>
        {/* Sudah */}

        <Route path="/admin" element={<Main />} />
        {/* Sudah */}
        <Route path="/admin/jadwal" element={<JadwalFilm />} />
        {/* Sudah */}
        <Route path="/admin/jadwal/buat" element={<BuatJadwal />} />
        {/* Sudah */}
        <Route path="/admin/jadwal/edit/:id" element={<EditJadwal />} />

        {/* Sudah */}
        <Route path="/admin/film" element={<Film />} />
        {/* sudah */}
        <Route path="/admin/film/:id" element={<ShowFilm />} />
        {/* Sudah */}
        <Route path="/admin/film/buat" element={<BuatFilm />} />
        {/* sudah */}
        <Route path="/admin/film/edit/:id" element={<EditFilm />} />

        {/* Sudah */}
        <Route path="/admin/ruang" element={<DataRuang />} />

        {/* Sudah */}
        <Route path="/admin/karyawan" element={<Pegawai />} />
        {/* Sudah */}
        <Route path="/admin/karyawan/buat" element={<TambahPegawai />} />
        {/* sudah */}
        <Route path="/admin/karyawan/edit/:id" element={<EditKaryawan />} />

        {/*sudah */}
        <Route path="/" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        {/*sudah */}
        <Route path="/kasir" element={<Index />} />
        <Route path="/kasir/tiket" element={<Tiket />} />
        <Route path="/kasir/jadwal" element={<JadwalFilmKasir />} />
      </Routes>
    </Router>
  );
}

export default App;
