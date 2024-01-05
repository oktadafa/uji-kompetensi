import Navbar from "../../../navbar";
import Sidebar from "../../../sidebar";
export default function JadwalFilm() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Jadwal Film</h1>
              </div>
            </div>
          </div>
          {/* /.container-fluid */}
        </section>
        <section className="content">
          <h1>Ini Halaman Jadwal FIlm</h1>
        </section>
      </div>
    </>
  );
}
