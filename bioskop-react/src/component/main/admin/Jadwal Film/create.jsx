import { useState } from "react";
import Navbar from "../../../navbar";
import Sidebar from "../../../sidebar";

export default function BuatJadwal() {
  const [form, setForm] = useState({});
  const handleChange = () => {};
  const handleSubmit = () => {};
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
                      <select className="form-control">
                        <option>Pilih Judul Film</option>
                        <option>Detective Conan</option>
                        <option>Shokugeki No Souma</option>
                        <option>Otonari No Tenshi Sama</option>
                        <option>Dr Stone</option>
                        <option>Captain Tsubasa</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Ruang</label>
                      <select className="form-control">
                        <option>Pilih Ruang</option>
                        <option>Studio 1</option>
                        <option>Studio 2</option>
                        <option>Studio 3</option>
                        <option>Studio 4</option>
                        <option>Studio 5</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="Aktor">Harga Tiket</label>
                      <input
                        type="number"
                        className="form-control"
                        id="Aktor"
                        name="aktor"
                        placeholder="Masukan Harga Tiket"
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="tanggal_rilis">Tanggal Tayang</label>
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
                          name="jam"
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
