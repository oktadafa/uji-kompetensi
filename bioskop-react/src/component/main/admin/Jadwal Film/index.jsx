import { Link } from "react-router-dom";
import Navbar from "../../../navbar";
import Sidebar from "../../../sidebar";
import DataTable from "react-data-table-component";
export default function JadwalFilm() {
  const data = [
    {
      judul_film: "Detective Conan",
      ruang: "Studio 1",
      tanggal_tayang: "22/01/2023",
      jam_tayang: "07:00",
      harga_tiket: 15000,
    },
  ];
  const columns = [
    {
      name: (
        <h6>
          <b>Judul Film</b>
        </h6>
      ),
      selector: (row) => row.judul_film,
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
      selector: (row) => row.ruang,
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
      selector: (row) => row.tanggal_tayang,
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

    {
      name: (
        <h6>
          <b>Aksi</b>
        </h6>
      ),
      selector: (row) => (
        <>
          <Link className="btn btn-warning">edit</Link>
          <Link className="btn btn-danger">hapus</Link>
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
