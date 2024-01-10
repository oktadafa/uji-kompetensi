import { useEffect, useState } from "react";
import Navbar from "../../../navbar";
import Sidebar from "../../../sidebar";
import { film, jadwal, ruang } from "../../../../axios";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
export default function EditJadwal() {
  const [form, setForm] = useState({
    id: "",
    films_id: "",
    ruangs_id: "",
    tanggal_tayang: "",
    harga_tiket: "",
    jam_tayang: "",
  });
  const [DataRuang, setDataRuang] = useState([]);
  const [DataFIlm, setDataFilm] = useState([]);
  const navigasi = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    getDatajadwal(id);
    getDataRuang();
    getDataFilm();
  }, []);
  const getDatajadwal = (id) => {
    const data = JSON.parse(localStorage.getItem("jadwal"));
    const result = data.filter((val) => val.id == id);
    setForm({
      id: result[0].id,
      films_id: result[0].films_id,
      ruangs_id: result[0].ruangs_id,
      tanggal_tayang: result[0].tanggal_tayang.split("T")[0],
      harga_tiket: result[0].harga_tiket,
      jam_tayang: result[0].jam_tayang,
    });
  };

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
      .put("/ubah/", form)
      .then((response) => {
        console.log("Berhasil Mengubah data");
        console.log(response.data);
        Swal.fire({
          title: "Sukses!",
          icon: "success",
          text: "Data Berhasil Diubah",
        });
        navigasi("/admin/jadwal");
      })
      .catch((err) => {
        console.log("error = " + err);
        Swal.fire({
          title: "Gagal!",
          icon: "error",
          text: "Data Gagal Diubah",
        });
        navigasi("/admin/jadwal");
      });
  };

  const selectRuang = DataRuang.map((val, index) => (
    <option value={val.id} key={index} selected={val.id === form.ruangs_id}>
      {val.nama_ruang}
    </option>
  ));

  const selectFilm = DataFIlm.map((val, index) => (
    <option key={index} value={val.id} selected={val.id === form.films_id}>
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
                <h1 className="mt-5">Edit Jadwal</h1>
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
                  <h3 className="card-title">Edit Jadwal</h3>
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
                        value={form.harga_tiket}
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
                        value={form.tanggal_tayang}
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
                          value={form.jam_tayang}
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
