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

const dbConnect = require("../config/connection");
dbConnect(); //ejecuta la función


server.set("view engine", "ejs");

const Movies = require("../models/movies");
const Users = require('../models/users');
const Favorites = require('../models/favorites');
const Actors = require('../models/actors');

server.post("/create", (req, res) => {
  const newMovie = req.body;
  Movies.create(newMovie)
    .then((doc) => {
      res.json(doc);
    })
    .catch((error) => {
      console.log("Error", error);
    });
});

server.get("/movies_all_mongo", (req, res) => {
  const { genre, sort } = req.query;
  console.log(req.query)
  const query = genre ? { genre: genre.toLocaleLowerCase() } : {};
  Movies.find(query)
    .sort({ title: sort === 'asc' ? 1 : -1 })
    .then((doc) => {
      res.json({
        success: true,
        movies: doc,
      });
    })
    .catch((error) => {
      console.log("Error", error);
    });
});

server.post('/favorites-add', (req, res) => {
  let idMovie = '6435a2e14dc6e6adbb205148';
  let idUser = '6435912d78fb785b76cf947a';
  const favorites = new Favorites({
    idUser: idMovie,
    idMovie: idUser,
    score: req.body.score,
  });
  favorites
    .save()
    .then((docs) => {
      res.json(docs);
    })
    .catch((error) => {
      console.log('Error', error);
    });
});

server.get('/favorites-list', (req, res) => {
  Favorites.find({
    //   idUser: req.params.user,
    // })
  })
    .populate({ path: 'movies', strictPopulate: false, select: 'title year' })
    .then((docs) => {
      res.json(docs);
    })
    .catch((error) => {
      console.log(error);
    });
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
  let genreFilterParam = req.query.genre;
  const sortFilterParam = req.query.sort;
  console.log(sortFilterParam);
  // let sql = `SELECT * FROM Movies WHERE genre LIKE ? ORDER BY title ${sortFilterParam}`;
  if (genreFilterParam === "") {
    genreFilterParam = "%";
  }
  connection
    .query(
      `SELECT * FROM Movies WHERE genre LIKE ? ORDER BY title ${sortFilterParam}`,
      [genreFilterParam]
    )
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

server.post("/login", (req, res) => {
  console.log(req.body);
  const email = req.body.email;
  const password = req.body.password;
  connection
    .query(`SELECT * FROM Users WHERE email = ? AND password = ?`, [
      email,
      password,
    ])
    .then(([results, fields]) => {
      console.log("Información recuperada:");
      console.log("resultados", results);
      if (results.length) {
        console.log("true");
        res.json({
          success: true,
          userId: results[0].id_user,
        });
      } else {
        console.log("false");
        res.json({
          success: false,
          errorMessage: "Usuaria/o no encontrada/o",
        });
      }
    })
    .catch((err) => {
      throw err;
    });
});

server.get("/movie/:movieId", (req, res) => {
  console.log(req.params.movieId);
  const sql = `SELECT * FROM Movies WHERE id_movies = ?`;
  connection
    .query(sql, [req.params.movieId])
    .then(([results, fields]) => {
      res.render("movie", results[0]);
    })
    .catch((err) => {
      throw err;
    });
});

server.use(express.static("./src/public-react/"));
server.use(express.static("./src/public-movies-css"));
server.use(express.static("./src/public-movies-images"));
