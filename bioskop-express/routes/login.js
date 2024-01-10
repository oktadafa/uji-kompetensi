var express = require("express");
var DbServices = require("../dbService");
var router = express.Router();
var bcrypt = require("bcryptjs");

router.post("/", async (req, res) => {
  try {
    const { username, password } = req.body;
    const db = DbServices.getDbServiceInstance();
    const result = await db.login(username);
    const data = await bcrypt.compare(password, result[0].password);
    if (data) {
      result[0].password = "";
      res.json({ data: result[0], status: 200 });
    } else {
      res.json({
        status: 500,
        message: "Username Atau Password Yang anda Masukan Salah",
      });
    }
  } catch (error) {
    console.log(error);
    res.json({
      status: 500,
      message: "Username Atau Password Yang anda Masukan Salah",
    });
  }
});

module.exports = router;
