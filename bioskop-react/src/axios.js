import axios from "axios";

export const film = axios.create({
  baseURL: "http://localhost:3000/api/film",
});

export const ruang = axios.create({
  baseURL: "http://localhost:5210/api/Ruangs/",
});
