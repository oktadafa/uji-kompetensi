import { useEffect, useState } from "react";
import { login } from "../../../axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
export default function Login() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const navigasi = useNavigate();
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("user"))) {
      if (JSON.parse(localStorage.getItem("user")).role_id == 1) {
        navigasi("/admin");
      } else {
        navigasi("/kasir");
      }
    }
  }, []);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    login
      .post("", form)
      .then((response) => {
        console.log(response);
        if (response.data.status == 200) {
          console.log(response.data.data);
          localStorage.setItem("user", JSON.stringify(response.data.data));
          if (response.data.data.role_id == "1") {
            navigate("/admin");
          } else if (response.data.data.role_id == "2") {
            navigate("/kasir");
          } else {
            throw new Error();
          }
        } else {
          Swal.fire({
            text: response.data.message,
            title: "Gagal!",
            icon: "error",
          });
        }
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          text: "Username Atau Password Yang Anda masukan salah",
          title: "Gagal!",
          icon: "error",
        });
      });
  };
  return (
    <div className="hold-transition login-page">
      <div className="login-box">
        {/* /.login-logo */}
        <div className="card">
          <div className="card-body login-card-body p-5">
            <form onSubmit={handleSubmit}>
              <div className="login-logo mb-5">
                <b>Sidasari</b>Cinema
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Masukan Username"
                  name="username"
                  onChange={handleChange}
                  value={form.username}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-user" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={handleChange}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>
              <div className="row">
                {/* /.col */}
                <div className="col-12">
                  <button type="submit" className="btn btn-primary btn-block">
                    Masuk
                  </button>
                </div>
                {/* /.col */}
              </div>
            </form>
            {/* /.social-auth-links */}
          </div>
          {/* /.login-card-body */}
        </div>
      </div>
    </div>
  );
}
