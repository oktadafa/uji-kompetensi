import { useEffect, useState } from "react";
import Navbar from "../../../navbar";
import Sidebar from "../../../sidebar";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { film } from "../../../../axios";
export default function ShowFilm() {
  const [data, setData] = useState({
    id: "",
    judul: "",
    deskripsi: "",
    durasi: "",
    sturadara: "",
    tanggal_rilis: "",
  });
  const navigasi = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    getData(id);
  }, []);
  const getData = (id) => {
    const data = JSON.parse(localStorage.getItem("films"));
    const result = data.filter((val) => val.id == id);
    setData({
      id: result[0].id,
      judul: result[0].judul,
      deskripsi: result[0].deskripsi,
      durasi: result[0].durasi,
      sturadara: result[0].sutradara,
      tanggal_rilis: result[0].tanggal_rilis.split("T")[0],
      aktor: result[0].aktor,
    });
  };

  const hapusData = (id) => {
    film
      .delete(`/hapus/${id}`)
      .then((response) => {
        console.log(response);
        console.log("berhasil menghubungkan ke Api");
        Swal.fire({
          title: "Sukses!",
          text: "Berhasil Menghapus Data",
          icon: "success",
        });
        navigasi("/admin/film");
      })
      .catch((err) => {
        console.log("gagal menghubungkan ke api");
        console.log("Error = " + err);
        Swal.fire({
          title: "Gagal!",
          text: "Gagal Menghapus Data",
          icon: "error",
        });
        navigasi("/admin/film");
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
                <h1 className="mt-5">Film</h1>
              </div>
            </div>
          </div>
          {/* /.container-fluid */}
        </section>
        <section className="content">
          <div className="card overflow-scroll">
            {/* <div className="card-header">
            </div> */}
            <div className="box p-3">
              <h2 className=" text-center mb-4">{data.judul}</h2>
              <div className="d-flex flex-wrap justify-content-center">
                <div className="img col-md-4 mb-3">
                  <img
                    src="https://i.pinimg.com/474x/8d/e6/2c/8de62c26aa3e2f6975c0163aef5e26e6.jpg"
                    className="card-img-top rounded"
                    alt="..."
                  />
                </div>
                <div className="info col-md-6 ml-3">
                  <p>
                    <b>Genre :</b> Comedy
                  </p>
                  <p>
                    <b>Sutradara :</b> {data.sturadara}
                  </p>
                  <p>
                    <b>Aktor :</b> {data.aktor}
                  </p>
                  <p>
                    <b>Durasi :</b> {data.durasi.split(":")[0]} Jam{" "}
                    {data.durasi.split(":")[1]} Menit{" "}
                    {data.durasi.split(":")[2]} Detik
                  </p>
                  <p>
                    <b>Deskripsi : </b> <br></br>
                    {data.deskripsi}
                  </p>

                  <div className="col-md-4 d-flex justify-content-around">
                    <Link
                      to={"/admin/film/edit/" + data.id}
                      className="btn btn-warning"
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
                            hapusData(data.id);
                          }
                        });
                      }}
                    >
                      hapus
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
