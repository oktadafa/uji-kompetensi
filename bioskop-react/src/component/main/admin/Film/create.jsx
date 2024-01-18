import { useState } from "react";
import Navbar from "../../../navbar";
import Sidebar from "../../../sidebar";
import { fcm, film } from "../../../../axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
export default function BuatFilm() {
  const [form, setForm] = useState({
    judul: "",
    image_url: "",
    deskripsi: "",
    aktor: "",
    tema: "",
    sutradara: "",
    tanggal_rilis: "",
    jam: "",
    menit: "",
    detik: "",
    durasi: "",
  });
  const navigasi = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    film
      .post("/tambah", form)
      .then((response) => {
        if (response.data.data.status == 500) {
          throw new Error("Gagal");
        }
        console.log("berhasil menambahkan film");
        console.log(response);
        Swal.fire({
          text: "Berhasil Menambahkan Data",
          title: "Success!",
          icon: "success",
        });
        sendNotification(form.judul);
        navigasi("/admin/film");
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          text: "Gagal Menambahkan Data",
          title: "Gagal!",
          icon: "error",
        });
      });
  };

  const sendNotification = (judulFilm) => {
    const message = {
      to: "/topics/semua",
      notification: {
        title: `Film Terbaru`,
        body: `${judulFilm} Akan Ditayangkan Pada Bioskop Kesayangan Anda`,
      },
      data: {
        key1: "value1",
        key2: "value2",
      },
    };
    fcm
      .post("", message, {
        headers: {
          Authorization:
            "key=AAAADNgHcSw:APA91bGcy8txdEg2IPp0OVAFJczKyfwRvKIEruJBRYNm30yAY4ZhYUv7C_72Kae5f7RtOhyYQrih16tVnjUAPv-nzhrPHXrUR4dAKg0qbhxfZi9KQQPdw3Y4pJ2G0Hy4vRuzarEC7L6P",
          "Content-Type": "application/json",
        },
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
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
                  <h3 className="card-title">Tambah Film</h3>
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
                      <label htmlFor="image_url">Url Gambar Film</label>
                      <input
                        type="text"
                        className="form-control"
                        id="image_url"
                        name="image_url"
                        value={form.image_url}
                        placeholder="Masukan Url Gambar Film"
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="judulFilm">Tema Film</label>
                      <input
                        type="text"
                        className="form-control"
                        id="judulFilm"
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
                          value={form.deitk}
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
