import axios from "axios";

export const film = axios.create({
  baseURL: "http://localhost:3000/api/film",
});

export const ruang = axios.create({
  baseURL: "http://localhost:5210/api/Ruangs/",
});

export const jadwal = axios.create({
  baseURL: "http://localhost:3000/api/jadwal",
});

export const karyawan = axios.create({
  baseURL: "http://localhost:3000/api/users",
});

// export const login = axios.create({
//   baseURL: "http://localhost:3000/api/login",
// });
export const tiket = axios.create({
  baseURL: "http://localhost:3000/api/tiket",
});

export const laravel = axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true,
  withXSRFToken: true,
});
