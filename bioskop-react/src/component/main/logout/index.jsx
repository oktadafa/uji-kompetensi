import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigasi = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("user") == null) {
      return navigasi("/");
    }
    const token = localStorage.getItem("token");
    localStorage.clear();
    console.log(token);
  }, []);
}
