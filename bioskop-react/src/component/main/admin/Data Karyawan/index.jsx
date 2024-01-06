import { Link } from "react-router-dom";
import Navbar from "../../../navbar";
import Sidebar from "../../../sidebar";
import DataTable from "react-data-table-component";
export default function Pegawai() {
  const data = [
    {
      id: "ADM09123",
      nama: "Okta Daffa Ramadani",
      email: "okta@gmail.com",
      username: "okta",
      role: "admin",
    },
    {
      id: "ADM09123",
      nama: "Satrio Septian",
      email: "okta@gmail.com",
      username: "satrio",
      role: "kasir",
    },
    {
      id: "ADM09123",
      nama: "Ananda Regita Cahyaningrum",
      email: "okta@gmail.com",
      username: "tata",
      role: "admin",
    },
    {
      id: "ADM09123",
      nama: "Ainun",
      email: "okta@gmail.com",
      username: "ainun",
      role: "kasir",
    },
  ];
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
      selector: (row) => row.nama,
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
      selector: (row) => row.role,
      sortable: true,
      style: {
        fontSize: 15,
      },
    },
    {
      name: <h6>Aksi</h6>,
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
