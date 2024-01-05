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
import Pegawai from "./component/main/admin/Data Pegawai/Pegawai";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<Main />} />
        <Route path="/admin/jadwal" element={<JadwalFilm />} />
        <Route path="/admin/pegawai" element={<Pegawai />} />
        <Route path="/admin/film" element={<Film />} />
        <Route path="/admin/jam" element={<Jam />} />

        <Route path="/kasir" element={<Kasir />} />
      </Routes>
    </Router>
  );
}

export default App;
