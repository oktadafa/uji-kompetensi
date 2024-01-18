import { Link } from "react-router-dom";
import Navbar from "../../../navbar";
import Sidebar from "../../../sidebar";
import DataTable from "react-data-table-component";
import { useEffect, useState } from "react";
import { jadwal } from "../../../../axios";
import Swal from "sweetalert2";
export default function JadwalFilm() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    jadwal
      .get()
      .then((response) => {
        console.log(response.data.data);
        setData(response.data.data);
        localStorage.setItem("jadwal", JSON.stringify(response.data.data));
        console.log("Berhasil Menghubungkan ke Api");
      })
      .catch((error) => {
        console.log(error);
        console.log("Gagal Menghubungkan Ke Api");
      });
  };

  const hapusData = (id) => {
    jadwal
      .delete("/hapus/" + id)
      .then((response) => {
        console.log("Berhasil Menghubungkan ke Api");
        console.log(response);
        Swal.fire({
          text: "Data Berhasil Dihapus",
          title: "Sukses!",
          icon: "success",
        });
        getData();
      })
      .catch((error) => {
        console.log(error);
        console.log("Gagal Menghubungkan Ke Api");
        Swal.fire({
          text: "Data Gagal Dihapus",
          title: "Gagal!",
          icon: "error",
        });
        getData();
      });
  };
  const columns = [
    {
      name: (
        <h6>
          <b>Judul Film</b>
        </h6>
      ),
      selector: (row) => row.judul,
      sortable: true,
      style: {
        fontSize: 15,
      },
    },
    {
      name: (
        <h6>
          <b>Ruang</b>
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
          <b>Harga Tiket</b>
        </h6>
      ),
      selector: (row) => `Rp ${row.harga_tiket}`,
      sortable: true,
      style: {
        fontSize: 15,
      },
    },
    {
      name: (
        <h6>
          <b>Tanggal Tayang</b>
        </h6>
      ),
      selector: (row) => {
        if (
          new Date().toLocaleDateString() >
          new Date(row.tanggal_tayang).toLocaleDateString()
        ) {
          return "Sudah Ditayangkan";
        } else if (
          new Date().toLocaleDateString() ==
          new Date(row.tanggal_tayang).toLocaleDateString()
        ) {
          return "Hari Ini";
        } else {
          return new Date(row.tanggal_tayang).toLocaleDateString();
        }
      },
      sortable: true,
      style: {
        fontSize: 15,
      },
    },
    {
      name: (
        <h6>
          <b>Jam Tayang</b>
        </h6>
      ),
      selector: (row) => `${row.jam_tayang} WIB`,
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
          <Link className="btn btn-warning" to={"/admin/jadwal/edit/" + row.id}>
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
                confirmButtonText: "Ya, Hapus ini!",
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
                <h1 className="mt-5">Jadwal Film</h1>
              </div>
            </div>
          </div>
        </section>
        <section className="content">
          <div className="card">
            <div className="card-header">
              <Link className="btn btn-primary" to={"/admin/jadwal/buat"}>
                + Buat Jadwal Film
              </Link>
            </div>
            <div className="card-body">
              <DataTable columns={columns} data={data} pagination />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
