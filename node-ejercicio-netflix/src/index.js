const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

// create and config server
const server = express();
server.use(cors());
server.use(express.json());

// init express aplication
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

let connection; // Aquí almacenaremos la conexión a la base de datos

mysql
  .createConnection({
    host: "localhost",
    database: "netflix",
    user: "root",
    password: "Puggy1dwbh7",
  })
  .then((conn) => {
    connection = conn;
    connection
      .connect()
      .then(() => {
        console.log(
          `Conexión establecida con la base de datos (identificador=${connection.threadId})`
        );
      })
      .catch((err) => {
        console.error("Error de conexion: " + err.stack);
      });
  })
  .catch((err) => {
    console.error("Error de configuración: " + err.stack);
  });

server.get("/movies", (req, res) => {
  let genreFilterParam = param.genre;
  const sortFilterParam = param.sort;
  let sql = `SELECT * FROM Movies WHERE genre LIKE ? ORDER BY title ${sortFilterParam}`;
  connection
    .query(sql, [genreFilterParam])
    .then(([results, fields]) => {
      console.log("Información recuperada:");
      results.forEach((result) => {
        console.log(result);
      });

      res.json({
        success: true,
        movies: results,
      });
    })
    .catch((err) => {
      throw err;
    });
});
