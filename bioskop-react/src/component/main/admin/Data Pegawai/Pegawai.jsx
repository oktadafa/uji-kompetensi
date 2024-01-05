import Navbar from "../../../navbar";
import Sidebar from "../../../sidebar";
export default function Pegawai() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Data Pegawai</h1>
              </div>
            </div>
          </div>
          {/* /.container-fluid */}
        </section>
        <section className="content">
          <h1>Ini Halaman Data Pegawai</h1>
        </section>
      </div>
    </>
  );
}
