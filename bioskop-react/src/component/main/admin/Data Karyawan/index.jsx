import { Link } from "react-router-dom";
import Navbar from "../../../navbar";
import Sidebar from "../../../sidebar";
import DataTable from "react-data-table-component";
import { useEffect, useState } from "react";
import { karyawan } from "../../../../axios";
import Swal from "sweetalert2";
export default function Pegawai() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    karyawan
      .get()
      .then((response) => {
        console.log(response);
        console.log("data berhasil diambil");
        setData(response.data.data);
        localStorage.setItem("karyawan", JSON.stringify(response.data.data));
      })
      .catch((err) => console.log(err));
  };

  const hapusData = (id) => {
    karyawan
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
          <b>ID</b>
        </h6>
      ),
      selector: (row) => row.id,
      sortable: true,
      style: {
        fontSize: 15,
      },
    },
    {
      name: (
        <h6>
          <b>Nama</b>
        </h6>
      ),
      selector: (row) => row.name,
      sortable: true,
      style: {
        fontSize: 15,
      },
    },
    {
      name: (
        <h6>
          <b>Email</b>
        </h6>
      ),
      selector: (row) => row.email,
      sortable: true,
      style: {
        fontSize: 15,
      },
    },
    {
      name: (
        <h6>
          <b>Username</b>
        </h6>
      ),
      selector: (row) => row.username,
      sortable: true,
      style: {
        fontSize: 15,
      },
    },
    {
      name: (
        <h6>
          <b>Jabatan</b>
        </h6>
      ),
      selector: (row) => row.role_name,
      sortable: true,
      style: {
        fontSize: 15,
      },
    },
    {
      name: <h6>Aksi</h6>,
      selector: (row) => (
        <>
          <Link
            className="btn btn-warning"
            to={"/admin/karyawan/edit/" + row.id}
          >
            edit
          </Link>
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
                <h1 className="mt-5">Data Karyawan</h1>
                <p></p>
              </div>
            </div>
          </div>
        </section>
        <section className="content">
          <div className="card">
            <div className="card-header">
              <Link className="btn btn-primary" to={"/admin/karyawan/buat"}>
                + Tambah Karyawan
              </Link>
            </div>
            <div className="card-body">
              <DataTable
                columns={columns}
                data={data}
                pagination
                style={{ fontSize: 40 }}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
