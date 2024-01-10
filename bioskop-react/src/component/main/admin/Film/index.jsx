import { Link } from "react-router-dom";
import Navbar from "../../../navbar";
import Sidebar from "../../../sidebar";
import { useEffect, useState } from "react";
import { film } from "../../../../axios";
export default function Film() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    film
      .get()
      .then((response) => {
        console.log("Success mengambil data");
        console.log(response.data.data);
        setData(response.data.data);
        setSearch(response.data.data);
        localStorage.setItem("films", JSON.stringify(response.data.data));
      })
      .catch((err) => {
        console.log("gagal Mengambil data : " + err);
      });
  }, []);

  const handleSearch = (e) => {
    const filter = search.filter((val) =>
      val.judul.toLowerCase().includes(e.target.value.toLowerCase())
    );
    console.log(filter);
    console.log(e.target.value);
    setData(filter);
  };
  const films = data.map((val, index) => (
    <div
      key={index}
      style={{ width: "15rem" }}
      className=" mt-4 text-center ml-4"
    >
      <img
        src="https://i.pinimg.com/474x/8d/e6/2c/8de62c26aa3e2f6975c0163aef5e26e6.jpg"
        className="card-img-top rounded"
        alt="..."
      />
      <Link
        className="text-decoration-none text-dark"
        to={"/admin/film/" + val.id}
      >
        <h4 className="mt-2"> {val.judul} </h4>
      </Link>
    </div>
  ));
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6 pt-3">
                <h1 className="mt-5">Daftar Film</h1>
              </div>
            </div>
          </div>
          {/* /.container-fluid */}
        </section>
        <section className="content">
          <div className="card overflow-scroll">
            <div className="card-header d-flex">
              <Link to={"/admin/film/buat"} className=" btn btn-primary">
                + Tambah Film Baru
              </Link>
              <input
                type="text"
                className="form-control col-6 mx-auto"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Cari Judul"
                onChange={handleSearch}
              />
            </div>
            <div className="d-flex ml-2 flex-wrap">
              {data.length > 0 ? (
                films
              ) : (
                <h5 className="p-5">Tidak Ada FIlm</h5>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
