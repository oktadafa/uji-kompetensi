import { useEffect, useState } from "react";
import Navbar from "../../../navbar";
import Sidebar from "../../../sidebar";
import { film } from "../../../../axios";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
export default function EditFilm() {
  const [form, setForm] = useState({
    id: "",
    judul: "",
    deskripsi: "",
    aktor: "",
    sutradara: "",
    tanggal_rilis: "",
    jam: "",
    menit: "",
    detik: "",
    tema: "",
  });
  const navigasi = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getData(id);
  }, []);

  const getData = (id) => {
    const data = JSON.parse(localStorage.getItem("films"));
    const result = data.filter((val) => val.id == id);
    setForm({
      id: result[0].id,
      judul: result[0].judul,
      image_url: result[0].image_url,
      tema: result[0].tema,
      deskripsi: result[0].deskripsi,
      sutradara: result[0].sutradara,
      tanggal_rilis: result[0].tanggal_rilis.split("T")[0],
      aktor: result[0].aktor,
      jam: result[0].durasi.split(":")[0],
      menit: result[0].durasi.split(":")[1],
      detik: result[0].durasi.split(":")[2],
    });
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    film
      .put("/ubah", form)
      .then((response) => {
        if (response.data.data.status == 500) {
          throw new Error("gagal");
        }
        console.log("berhasil menambahakan film");
        console.log(response);
        Swal.fire({
          text: "Berhasil Mengubah Data",
          title: "Success!",
          icon: "success",
        });
        navigasi("/admin/film");
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          text: "Gagal Mengubah Data",
          title: "Gagal!",
          icon: "error",
        });
      });
  };
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6 pt-3">
                <h1 className="mt-5">Edit Film</h1>
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
                  <h3 className="card-title">Edit Film</h3>
                </div>
                {/* /.card-header */}
                {/* form start */}
                <form onSubmit={handleSubmit}>
                  <div className="card-body">
                    <div className="form-group">
                      <label htmlFor="judulFilm">Judul Film</label>
                      <input
                        type="text"
                        className="form-control"
                        id="judulFilm"
                        name="judul"
                        value={form.judul}
                        placeholder="Masukan Judul Film"
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="image_url">URL Gambar Film</label>
                      <input
                        type="text"
                        className="form-control"
                        id="image_url"
                        name="image_url"
                        value={form.image_url}
                        placeholder="Masukan URL Gambar Film"
                        onChange={handleChange}
                        maxLength={254}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="temaFilm">Tema Film</label>
                      <input
                        type="text"
                        className="form-control"
                        id="temaFilm"
                        name="tema"
                        value={form.tema}
                        placeholder="Masukan Tema Film"
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="sutradara">Nama Sutradara</label>
                      <input
                        type="text"
                        className="form-control"
                        id="sutradara"
                        name="sutradara"
                        value={form.sutradara}
                        onChange={handleChange}
                        placeholder="Masukan Nama Sutradara"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="Aktor">Nama Aktor</label>
                      <input
                        type="text"
                        className="form-control"
                        id="Aktor"
                        name="aktor"
                        value={form.aktor}
                        placeholder="Masukan Nama Aktor"
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="tanggal_rilis">Tanggal Rilis</label>
                      <input
                        type="date"
                        className="form-control"
                        name="tanggal_rilis"
                        id="tanggal_rilis"
                        value={form.tanggal_rilis}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="durasi">Durasi</label>
                      <div className="d-flex">
                        <input
                          type="number"
                          className="form-control col-1"
                          id="durasi"
                          placeholder="jam"
                          max="24"
                          min="00"
                          value={form.jam}
                          name="jam"
                          onChange={handleChange}
                          required
                        />
                        <p className="mx-2 my-auto ">:</p>
                        <input
                          type="number"
                          className="form-control col-1"
                          id="durasi"
                          placeholder="menit"
                          max="59"
                          min="00"
                          value={form.menit}
                          onChange={handleChange}
                          name="menit"
                          required
                        />
                        <p className="mx-2 my-auto ">:</p>
                        <input
                          type="number"
                          className="form-control col-1"
                          id="durasi"
                          placeholder="detik"
                          max={"59"}
                          min={"00"}
                          onChange={handleChange}
                          value={form.detik}
                          name="detik"
                          required
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Deskripsi</label>
                      <textarea
                        className="form-control"
                        rows={3}
                        placeholder="Masukan Deskripsi Film"
                        name="deskripsi"
                        onChange={handleChange}
                        value={form.deskripsi}
                        required
                      />
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
