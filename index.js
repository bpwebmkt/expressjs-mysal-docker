const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "mongo",
});

connection.connect();
// connection.connect(function (err) {
// if (err) throw err;

// select
connection.query("SELECT * FROM leads", (err, rows, fields) => {
  if (err) throw err;

  rows.forEach((result) => {
    console.log("result: " + result.lea_name);
  });

  //   console.log("The solution is: ", rows[0]);
});

// update
connection.query(
  "UPDATE leads SET lea_status = 98 WHERE lea_id = 1",

  (err, result) => {
    if (err) throw err;
    console.log("result", result);
  }
);

// insert
connection.query(
  "INSERT INTO leads VALUES('', 1, 'ss novo')",

  (err, result) => {
    if (err) throw err;
    console.log("result", result);
  }
);

connection.end();
