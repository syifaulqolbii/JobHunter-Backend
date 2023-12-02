const { Sequelize } = require("sequelize");
const config = require("./config.json");

const env = "development"; // Ganti sesuai dengan environment yang ingin Anda uji

const { username, password, database, host, dialect } = config[env];

const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: dialect,
});

// Coba koneksi ke database
async function testDBConnection() {
  try {
    await sequelize.authenticate();
    console.log("Koneksi ke database berhasil.");
  } catch (error) {
    console.error("Gagal terkoneksi ke database:", error);
  }
}

testDBConnection();
