import { useEffect, useState } from "react";
import Navbar from "../../../navbar";
import Sidebar from "../../../sidebar/kasir";
import DataTable from "react-data-table-component";
import { jadwal } from "../../../../axios";
import { useNavigate } from "react-router-dom";
export default function JadwalFilmKasir() {
  const [data, setData] = useState([]);
  const navigasi = useNavigate();
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    if (localStorage.getItem("token") == null) {
      navigasi("/login");
    }
    jadwal
      .get()
      .then((response) => {
        console.log("Berhasil Menghubungkna Ke Api");
        console.log(response.data.data);
        setData(response.data.data);
      })
      .catch((err) => console.log("gagal menghubungkan ke Api = " + err));
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
          <b>Sisa Kursi</b>
        </h6>
      ),
      selector: (row) => row.jumlah_kursi - row.tiket,
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
      selector: (row) =>
        new Date(row.tanggal_tayang).toLocaleDateString() ==
        new Date().toLocaleDateString()
          ? "hari ini"
          : new Date(row.tanggal_tayang).toLocaleDateString(),
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
      selector: (row) => row.jam_tayang,
      sortable: true,
      style: {
        fontSize: 15,
      },
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
                <h1 className="mt-5">Data Jadwal Film</h1>
                <p></p>
              </div>
            </div>
          </div>
        </section>
        <section className="content">
          <div className="card">
            <div className="card-header">Data Jadwal Tiket</div>
            <div className="card-body">
              <DataTable columns={columns} data={data} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
