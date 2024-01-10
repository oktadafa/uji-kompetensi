import { useEffect, useState } from "react";
import Navbar from "../../../navbar";
import Sidebar from "../../../sidebar";
import { film, jadwal, ruang } from "../../../../axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function BuatJadwal() {
  const [form, setForm] = useState({
    films_id: "",
    ruangs_id: "",
    tanggal_tayang: "",
    harga_tiket: "",
    jam_tayang: "",
  });
  const [DataRuang, setDataRuang] = useState([]);
  const [DataFIlm, setDataFilm] = useState([]);
  useEffect(() => {
    getDataRuang();
    getDataFilm();
  }, []);
  const navigasi = useNavigate();

  const getDataFilm = () => {
    film
      .get()
      .then((response) => {
        setDataFilm(response.data.data);
        console.log("Berhasil Menghubungkan ke Api");
      })
      .catch((error) => {
        console.log(error);
        console.log("Gagal Menghubungkan Ke Api");
      });
  };

  const getDataRuang = () => {
    ruang
      .get()
      .then((response) => {
        setDataRuang(response.data.data);
        console.log("Berhasil Menghubungkan ke Api");
      })
      .catch((error) => {
        console.log(error);
        console.log("Gagal Menghubungkan Ke Api");
      });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    jadwal
      .post("/tambah", form)
      .then((response) => {
        console.log("Berhasil Menambahkan data ke Api");
        console.log(response);
        Swal.fire({
          text: "Data Berhasil Ditambahkan",
          title: "Sukses!",
          icon: "success",
        });
        navigasi("/admin/jadwal");
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          text: "Data Gagal Ditambahkan",
          title: "Gagal!",
          icon: "error",
        });
        navigasi("/admin/jadwal");
      });
  };

  const selectRuang = DataRuang.map((val, index) => (
    <option value={val.id} key={index}>
      {val.nama_ruang}
    </option>
  ));

  const selectFilm = DataFIlm.map((val, index) => (
    <option key={index} value={val.id}>
      {val.judul}
    </option>
  ));

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6 pt-3">
                <h1 className="mt-5">Tambah Film Baru</h1>
              </div>
            </div>
          </div>
          {/* /.container-fluid */}
        </section>
        <section className="content">
          <div className="row">
            <div className="col-md-12">
              {/* general form elements */}
              <div className="card card-primary">
                <div className="card-header">
                  <h3 className="card-title">Buat Jadwl Film Baru</h3>
                </div>
                {/* /.card-header */}
                {/* form start */}
                <form onSubmit={handleSubmit}>
                  <div className="card-body">
                    <div className="form-group">
                      <label>Judul Film</label>
                      <select
                        className="form-control"
                        name="films_id"
                        onChange={handleChange}
                        required
                      >
                        <option>Pilih Judul Film</option>
                        {selectFilm}
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Ruang</label>
                      <select
                        className="form-control"
                        name="ruangs_id"
                        onChange={handleChange}
                        required
                      >
                        <option>Pilih Ruang</option>
                        {selectRuang}
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="harga_tiket">Harga Tiket</label>
                      <input
                        type="number"
                        className="form-control"
                        id="harga_tiket"
                        name="harga_tiket"
                        placeholder="Masukan Harga Tiket"
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="tanggal_tayang">Tanggal Tayang</label>
                      <input
                        type="date"
                        className="form-control"
                        name="tanggal_tayang"
                        id="tanggal_tayang"
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="jam">Jam Tayang</label>
                      <div className="d-flex">
                        <input
                          type="time"
                          className="form-control"
                          id="jam"
                          name="jam_tayang"
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  {/* /.card-body */}
                  <div className="card-footer">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
              </div>

              {/* /.card */}
            </div>
          </div>
        </section>
      </div>
      <footer className="main-footer text-center ">
        <strong>Copyright Sidasari Cinema </strong>
        All rights reserved.
      </footer>
    </>
  );
}
