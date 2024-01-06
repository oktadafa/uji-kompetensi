const mysql = require("mysql");
const dotenv = require("dotenv");
let instance = null;
dotenv.config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
});

connection.connect((err) => {
  if (err) {
    console.log("Gagal Menghubungkan ke mysql");
  }
});

class DbServices {
  static getDbServiceInstance() {
    return instance ? instance : new DbServices();
  }

  async getAllFilm() {
    try {
      const response = await new Promise((resolve, reject) => {
        const query = "SELECT * FROM films;";
        connection.query(query, (err, result) => {
          if (err) {
            reject(new Error(err.message));
          }
          resolve(result);
        });
      });
      return response;
    } catch (error) {
      console.log("Gagal Mengambil data");
    }
  }

  async insertFilm(json) {
    try {
      const response = await new Promise((resolve, reject) => {
        const query =
          "INSERT INTO films (judul,durasi,deskripsi,aktor,sutradara,tanggal_rilis)VALUES(?,?,?,?,?,?);";
        connection.query(
          query,
          [
            json.judul,
            json.durasi,
            json.deskripsi,
            json.aktor,
            json.sutradara,
            json.tanggal_rilis,
          ],
          (err, result) => {
            if (err) {
              reject(new Error(err.message));
            }
            resolve(result);
          }
        );
      });
      return response;
    } catch (error) {
      console.log("Gagal mMenambah data data " + error);
    }
  }

  async editFilm(json) {
    try {
      const response = await new Promise((resolve, reject) => {
        const query =
          "UPDATE films SET judul = ?, deskripsi = ?, aktor = ?, durasi = ?, sutradara = ?, tanggal_rilis = ? WHERE id = ?";
        connection.query(
          query,
          [
            json.judul,
            json.deskripsi,
            json.aktor,
            json.durasi,
            json.sutradara,
            json.tanggal_rilis,
            json.id,
          ],
          (err, result) => {
            if (err) {
              reject(new Error(err.message));
            }
            resolve(result);
          }
        );
      });
      return response;
    } catch (error) {
      console.log("Gagal Mengambil data");
    }
  }

  async hapusFilm(id) {
    try {
      const response = await new Promise((resolve, reject) => {
        const query = "DELETE FROM films WHERE id= ?";
        connection.query(query, [id], (err, result) => {
          if (err) {
            reject(new Error(err.message));
          }
          resolve(result);
        });
      });
      return response;
    } catch (error) {
      console.log("Gagal Mengambil data");
    }
  }
}

module.exports = DbServices;
