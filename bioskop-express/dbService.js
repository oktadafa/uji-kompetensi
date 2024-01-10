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
          "INSERT INTO films (judul,tema,durasi,deskripsi,aktor,sutradara,tanggal_rilis)VALUES(?,?,?,?,?,?,?);";
        connection.query(
          query,
          [
            json.judul,
            json.tema,
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
          "UPDATE films SET judul = ?, tema = ?, deskripsi = ?, aktor = ?, durasi = ?, sutradara = ?, tanggal_rilis = ? WHERE id = ?";
        connection.query(
          query,
          [
            json.judul,
            json.tema,
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
      console.log(error);
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

  async getJadwal() {
    try {
      const response = await new Promise((resolve, reject) => {
        const query =
          "SELECT jadwal_films.id, jadwal_films.films_id, jadwal_films.ruangs_id ,films.judul, ruangs.nama_ruang, jadwal_films.harga_tiket, jadwal_films.tanggal_tayang, jadwal_films.jam_tayang, ruangs.jumlah_kursi, (SELECT COUNT(*) FROM pemesanan_tikets WHERE pemesanan_tikets.jadwalFilm_id = jadwal_films.id) AS tiket FROM jadwal_films JOIN films ON jadwal_films.films_id = films.id JOIN ruangs ON ruangs.id = jadwal_films.ruangs_id;";
        connection.query(query, (err, result) => {
          if (err) {
            reject(new Error(err.message));
          }
          resolve(result);
        });
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async insertjadwal(json) {
    try {
      const response = await new Promise((resolve, reject) => {
        const query =
          "INSERT INTO jadwal_films (films_id,ruangs_id,harga_tiket,tanggal_tayang,jam_tayang)VALUES(?,?,?,?,?);";
        connection.query(
          query,
          [
            json.films_id,
            json.ruangs_id,
            json.harga_tiket,
            json.tanggal_tayang,
            json.jam_tayang,
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
      console.log("Gagal mMenambah data " + error);
    }
  }

  async editJadwal(json) {
    try {
      const response = await new Promise((resolve, reject) => {
        const query =
          "UPDATE jadwal_films SET films_id = ?, ruangs_id = ?, harga_tiket = ?, tanggal_tayang = ?, jam_tayang = ? WHERE id = ?";
        connection.query(
          query,
          [
            json.films_id,
            json.ruangs_id,
            json.harga_tiket,
            json.tanggal_tayang,
            json.jam_tayang,
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
      console.log(error);
    }
  }

  async hapusJadwal(id) {
    try {
      const response = await new Promise((resolve, reject) => {
        const query = "DELETE FROM jadwal_films WHERE id= ?";
        connection.query(query, [id], (err, result) => {
          if (err) {
            reject(new Error(err.message));
          }
          resolve(result);
        });
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async getUsers() {
    try {
      const response = await new Promise((resolve, reject) => {
        const query =
          "SELECT users.id, users.name, users.username, users.email, users.role_id, roles.role_name FROM users JOIN roles ON roles.id = users.role_id WHERE roles.role_name != 'pelanggan';";
        connection.query(query, (err, result) => {
          if (err) {
            reject(new Error(err.message));
          }
          resolve(result);
        });
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async insertUsers(json) {
    try {
      const response = await new Promise((resolve, reject) => {
        const query =
          "INSERT INTO users (name,role_id,email,username,password)VALUES(?,?,?,?,?);";
        connection.query(
          query,
          [json.name, json.role_id, json.email, json.username, json.password],
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
      console.log("Gagal mMenambah data " + error);
      return error;
    }
  }

  async editusers(json) {
    try {
      const response = await new Promise((resolve, reject) => {
        const query =
          "UPDATE users SET name = ?, username = ?,  email = ?, role_id = ? WHERE id = ?";
        connection.query(
          query,
          [json.name, json.username, json.email, json.role_id, json.id],
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
      console.log("gagal mengubah data : " + error);
    }
  }

  async hapusUser(id) {
    try {
      const response = await new Promise((resolve, reject) => {
        const query = "DELETE FROM users WHERE id = ?";
        connection.query(query, [id], (err, result) => {
          if (err) {
            reject(new Error(err.message));
          }
          resolve(result);
        });
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async getTicket() {
    try {
      const response = await new Promise((resolve, reject) => {
        const query =
          "SELECT films.judul, pemesanan_tikets.nomor_tiket, pemesanan_tikets.nomor_kursi, ruangs.nama_ruang, pemesanan_tikets.created_at, jadwal_films.tanggal_tayang, users.name, jadwal_films.jam_tayang FROM pemesanan_tikets JOIN jadwal_films on pemesanan_tikets.jadwalFilm_id = jadwal_films.id JOIN films ON jadwal_films.films_id = films.id JOIN ruangs on jadwal_films.ruangs_id = ruangs.id JOIN users ON pemesanan_tikets.user_id = users.id;";
        connection.query(query, (err, result) => {
          if (err) {
            reject(new Error(err.message));
          }
          resolve(result);
        });
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = DbServices;
