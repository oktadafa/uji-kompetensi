import axios from "axios";

export const film = axios.create({
  baseURL: "https://bronze-octopus-tux.cyclic.app/api/film",
});

export const ruang = axios.create({
  baseURL: "http://localhost:5210/api/Ruangs/",
});

export const jadwal = axios.create({
  baseURL: "https://bronze-octopus-tux.cyclic.app/api/jadwal",
});

export const karyawan = axios.create({
  baseURL: "https://bronze-octopus-tux.cyclic.app/api/users",
});

export const login = axios.create({
  baseURL: "https://bronze-octopus-tux.cyclic.app/api/login",
});
export const tiket = axios.create({
  baseURL: "https://bronze-octopus-tux.cyclic.app/api/tiket",
});

export const fcm = axios.create({
  baseURL: "https://fcm.googleapis.com/fcm/send",
});

// export const laravel = axios.create({
//   baseURL: "https://bioskop-okta-daffa.000webhostapp.com",
//   withCredentials: true,
//   withXSRFToken: true,
// });
