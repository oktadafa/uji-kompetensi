import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { laravel } from "../../../axios";

export default function Logout() {
  const navigasi = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token") == null) {
      return navigasi("/login");
    }
    const token = localStorage.getItem("token");
    localStorage.clear();
    console.log(token);
    laravel
      .post(
        "/api/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((resposne) => {
        console.log(resposne);
        return navigasi("/login");
      })
      .catch((err) => console.log(err));
  }, []);
}
