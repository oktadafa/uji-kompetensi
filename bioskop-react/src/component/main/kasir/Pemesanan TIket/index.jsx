import { useEffect, useState } from "react";
import Navbar from "../../../navbar";
import Sidebar from "../../../sidebar/kasir";
import DataTable from "react-data-table-component";
import { tiket } from "../../../../axios";
export default function Tiket() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    tiket
      .get()
      .then((response) => {
        console.log("Berhasil Menghubungkna Ke Api");
        console.log(response.data.data);
        setData(response.data.data);
      })
      .catch((err) => console.log("gagal menghubungkan ke Api = " + err));
  };
  // const data = [
  //   {
  //     nomor_tiket: "213234",
  //     nomor_kursi: "A-1",
  //     nama_ruang: "Studio 1",
  //     judul_film: "Boboi Boy",
  //     waktu_pemesanan: "2024/01/02",
  //     waktu_tayang: "2024/01/02",
  //   },
  // ];
  const columns = [
    {
      name: (
        <h6>
          <b>Nomor Tiket</b>
        </h6>
      ),
      selector: (row) => row.nomor_tiket,
      sortable: true,
      style: {
        fontSize: 15,
      },
    },
    {
      name: (
        <h6>
          <b>Nama Pemesan</b>
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
          <b>No Kursi</b>
        </h6>
      ),
      selector: (row) => row.nomor_kursi,
      sortable: true,
      style: {
        fontSize: 15,
      },
    },
    {
      name: (
        <h6>
          <b>Waktu Pemesanan</b>
        </h6>
      ),
      selector: (row) =>
        new Date(row.created_at.split("T")[0]).toLocaleDateString(),
      sortable: true,
      style: {
        fontSize: 15,
      },
    },
    {
      name: (
        <h6>
          <b>Waktu Tayang</b>
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
                <h1 className="mt-5">Data Pemesanan Tiket</h1>
                <p></p>
              </div>
            </div>
          </div>
        </section>
        <section className="content">
          <div className="card">
            <div className="card-header">Data Pemesanan Tiket</div>
            <div className="card-body">
              <DataTable columns={columns} data={data} pagination />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
