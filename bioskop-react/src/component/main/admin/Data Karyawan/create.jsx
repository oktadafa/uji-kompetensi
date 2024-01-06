import Navbar from "../../../navbar";
import Sidebar from "../../../sidebar";
import { useState } from "react";
export default function TambahPegawai() {
  const [form, setForm] = useState({
    judul: "",
    deskripsi: "",
    aktor: "",
    sutradara: "",
    tanggal_rilis: "",
    jam: "",
    menit: "",
    detik: "",
    durasi: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setForm({
      durasi: `${form.jam}:${form.menit}:${form.detik}`,
    });
    console.log(form);
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
                <h1 className="mt-5">+ Tambah Karyawan Baru</h1>
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
                  <h3 className="card-title">Tambah Karyawan</h3>
                </div>
                {/* /.card-header */}
                {/* form start */}
                <form onSubmit={handleSubmit}>
                  <div className="card-body">
                    <div className="form-group">
                      <label htmlFor="namaKaryawan">Nama</label>
                      <input
                        type="text"
                        className="form-control"
                        id="namaKaryawan"
                        name="nama"
                        placeholder="Masukan Nama"
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        onChange={handleChange}
                        placeholder="Masukan Email"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="username">Username</label>
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        name="username"
                        onChange={handleChange}
                        placeholder="Masukan Username"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        placeholder="Masukan Nama Aktor"
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="jabatan">Jabatan</label>
                      <select className="form-control" id="jabatan">
                        <option>Pilih Jabatan</option>
                        <option>Admin</option>
                        <option>Kasir</option>
                      </select>
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
