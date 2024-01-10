import DataTable from "react-data-table-component";
import Navbar from "../../../navbar";
import Sidebar from "../../../sidebar";
import { useEffect, useState } from "react";
import { ruang } from "../../../../axios";
import Swal from "sweetalert2";
export default function DataRuang() {
  const [form, setForm] = useState({
    id: "",
    nama_ruang: "",
    jumlah_kursi: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    ruang
      .get()
      .then((response) => {
        console.log(response.data);
        console.log("Berhasil Menghubungkan Ke Api");
        setData(response.data.data);
      })
      .catch((err) => {
        console.log("Gagal Menghubungkan Ke Api");
        console.log("Message = " + err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    ruang
      .post("/tambah", {
        jumlah_kursi: form.jumlah_kursi,
        nama_ruang: form.nama_ruang,
      })
      .then((response) => {
        console.log(response);
        console.log("berhasil menghubungkan ke Api");
        setForm({ id: "", jumlah_kursi: "", nama_ruang: "" });
        Swal.fire({
          title: "Sukses!",
          text: "Berhasil Menambahkan Data",
          icon: "success",
        });
        getData();
      })
      .catch((err) => {
        console.log("gagal menghubungkan ke api");
        console.log("Error = " + err);
        console.log(form);
        setForm({ id: "", jumlah_kursi: "", nama_ruang: "" });
        Swal.fire({
          title: "Gagal!",
          text: "Gagal Menambahkan Data",
          icon: "error",
        });
        getData();
      });
  };

  const handleSubmitEdit = (e) => {
    e.preventDefault();

    ruang
      .put(`/ubah/${form.id}`, {
        jumlah_kursi: form.jumlah_kursi,
        nama_ruang: form.nama_ruang,
      })
      .then((response) => {
        console.log(response);
        console.log("berhasil menghubungkan ke Api");
        setForm({ id: "", jumlah_kursi: "", nama_ruang: "" });
        Swal.fire({
          title: "Sukses!",
          text: "Berhasil Mengubah Data",
          icon: "success",
        });
        getData();
      })
      .catch((err) => {
        console.log("gagal menghubungkan ke api");
        console.log("Error = " + err);
        console.log(form);
        setForm({ id: "", jumlah_kursi: "", nama_ruang: "" });
        Swal.fire({
          title: "Gagal!",
          text: "Gagal Mengubah Data",
          icon: "error",
        });
        getData();
      });
  };

  const hapusData = (id) => {
    ruang
      .delete(`/hapus/${id}`)
      .then((response) => {
        console.log(response);
        console.log("berhasil menghubungkan ke Api");
        Swal.fire({
          title: "Sukses!",
          text: "Berhasil Menghapus Data",
          icon: "success",
        });
        getData();
      })
      .catch((err) => {
        console.log("gagal menghubungkan ke api");
        console.log("Error = " + err);
        Swal.fire({
          title: "Gagal!",
          text: "Gagal Menghapus Data",
          icon: "error",
        });
        getData();
      });
  };

  const columns = [
    {
      name: (
        <h6>
          <b>Nama Ruang</b>
        </h6>
      ),
      selector: (row) => row.nama_ruang,
      sortable: true,
      style: {
        fontSize: 15,
      },
    },
    {
      name: (
        <h6>
          <b>Jumlah Kursi</b>
        </h6>
      ),
      selector: (row) => row.jumlah_kursi,
      sortable: true,
      style: {
        fontSize: 15,
      },
    },

    {
      name: (
        <h6>
          <b>Aksi</b>
        </h6>
      ),
      selector: (row) => (
        <>
          <button
            className="btn btn-warning"
            data-toggle="modal"
            type="button"
            data-target="#modal-edit"
            onClick={() => {
              setForm({
                nama_ruang: row.nama_ruang,
                jumlah_kursi: row.jumlah_kursi,
                id: row.id,
              });
            }}
          >
            Edit
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              Swal.fire({
                title: "Hapus Data Ini?",
                text: "kamu akan menghapus data ini",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Ya, Hapus Ini!",
                cancelButtonText: "Batal",
              }).then((result) => {
                if (result.isConfirmed) {
                  hapusData(row.id);
                }
              });
            }}
          >
            hapus
          </button>
        </>
      ),
    },
  ];
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6 pt-3">
                <h1 className="mt-5">Data Ruang</h1>
              </div>
            </div>
          </div>
        </section>
        <section className="content">
          <div className="card">
            <div className="card-header">
              <button
                type="button"
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#modal-default"
                onClick={() =>
                  setForm({ nama_ruang: "", jumlah_kursi: "", id: "" })
                }
              >
                + Tambah Ruang
              </button>
            </div>
            <div className="card-body">
              <DataTable columns={columns} data={data} pagination />
            </div>
          </div>
        </section>
      </div>
      <div className="modal fade" id="modal-default">
        <div className="modal-dialog">
          <div className="modal-content">
            <form onSubmit={handleSubmit}>
              <div className="modal-header">
                <h4 className="modal-title">Tambah Ruang</h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group mb-3">
                  <label htmlFor="namaRuang">Nama Ruang</label>
                  <input
                    type="text"
                    className="form-control"
                    id="namaRuang"
                    name="nama_ruang"
                    placeholder="Masukan Nama Ruang"
                    value={form.nama_ruang}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="jumlah_kursi">Jumlah Kursi</label>
                  <input
                    type="number"
                    className="form-control"
                    id="jumlah_kursi"
                    name="jumlah_kursi"
                    placeholder="Masukan Jumlah Kursi"
                    onChange={handleChange}
                    min={0}
                    max={100}
                    required
                    value={form.jumlah_kursi}
                  />
                </div>
              </div>
              <div className="modal-footer justify-content-between">
                <button
                  type="button"
                  className="btn btn-default"
                  data-dismiss="modal"
                >
                  Tutup
                </button>
                <button type="submit" className="btn btn-primary">
                  Simpan Data
                </button>
              </div>
            </form>
          </div>
          {/* /.modal-content */}
        </div>
        {/* /.modal-dialog */}
      </div>

      <div className="modal" id="modal-edit">
        <div className="modal-dialog">
          <div className="modal-content">
            <form onSubmit={handleSubmitEdit}>
              <div className="modal-header">
                <h4 className="modal-title">Edit Ruang</h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group mb-3">
                  <label htmlFor="namaRuang">Nama Ruang</label>
                  <input
                    type="text"
                    className="form-control"
                    id="namaRuang"
                    name="nama_ruang"
                    placeholder="Masukan Nama Ruang"
                    value={form.nama_ruang}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="jumlah_kursi">Jumlah Kursi</label>
                  <input
                    type="number"
                    className="form-control"
                    id="jumlah_kursi"
                    name="jumlah_kursi"
                    placeholder="Masukan Jumlah Kursi"
                    min={0}
                    max={100}
                    onChange={handleChange}
                    value={form.jumlah_kursi}
                    required
                  />
                </div>
              </div>
              <div className="modal-footer justify-content-between">
                <button
                  type="button"
                  className="btn btn-default"
                  data-dismiss="modal"
                >
                  Tutup
                </button>
                <button type="submit" className="btn btn-primary">
                  Simpan Data
                </button>
              </div>
            </form>
          </div>
          {/* /.modal-content */}
        </div>
        {/* /.modal-dialog */}
      </div>
    </>
  );
}
