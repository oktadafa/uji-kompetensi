import { useNavigate, useParams } from "react-router-dom";
import { karyawan } from "../../../../axios";
import Navbar from "../../../navbar";
import Sidebar from "../../../sidebar";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
export default function EditKaryawan() {
  const { id } = useParams();
  const [form, setForm] = useState({
    id: "",
    name: "",
    username: "",
    email: "",
    role_id: "",
  });
  const navigasi = useNavigate();

  useEffect(() => {
    getData(id);
  }, []);
  const getData = (id) => {
    const data = JSON.parse(localStorage.getItem("karyawan"));
    const result = data.filter((val) => val.id == id);
    setForm(result[0]);
  };
  console.log(form);
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    karyawan
      .put("/ubah", form)
      .then((response) => {
        console.log("Berhasil Menghubungkan Ke Api");
        console.log(response.data);
        if (response.data.status == 200) {
          Swal.fire({
            text: "Berhasil Mengubah Data",
            title: "Sukses!",
            icon: "success",
          });
          navigasi("/admin/karyawan");
        } else {
          Swal.fire({
            text: "Gagal Mengubah Data",
            title: "Gagal!",
            icon: "error",
          });
        }
      })
      .catch((err) => {
        console.log("gagal menghubungkan ke Api");
        console.log("Error = " + err);
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
                <h1 className="mt-5">Edit Data Karyawan</h1>
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
                  <h3 className="card-title">Edit Data Karyawan</h3>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="card-body">
                    <div className="form-group">
                      <label htmlFor="namaKaryawan">Nama</label>
                      <input
                        type="text"
                        className="form-control"
                        id="namaKaryawan"
                        name="name"
                        placeholder="Masukan Nama"
                        onChange={handleChange}
                        value={form.name}
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
                        value={form.email}
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
                        value={form.username}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="jabatan">Jabatan</label>
                      <select
                        className="form-control"
                        id="jabatan"
                        onChange={handleChange}
                        name="role_id"
                      >
                        <option>Pilih Jabatan</option>
                        <option value={1} selected={form.role_id == 1}>
                          Admin
                        </option>
                        <option value={2} selected={form.role_id == 2}>
                          Kasir
                        </option>
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
