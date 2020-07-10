// get the client
const mysql = require("mysql2");

// create the connection to database
const pool = mysql.createPool({
  host: "db", //the name db is defined in docker-compose.yml; please use env variable for real application
  user: "root",
  password: "password",
  database: "test",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const promisePool = pool.promise();

module.exports = async () => {
  console.log("accessing database");
  const [rows, fields] = await promisePool.query("SELECT * from users");
  return rows;
};
