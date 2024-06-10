const express = require('express');
const cors = require('cors');
const mysql = require("mysql2/promise");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// create and config server
const server = express();
server.use(cors());
server.use(express.json());
server.set('view engine', 'ejs');

// init express aplication
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`)
});

async function connectBD() {
  const conex = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "netflix"
  });

   await conex.connect();

  return conex;
}

server.get('/movies', async (req,res)=>{
  
  const conn = await connectBD();
  // console.log(req.query.genre);
  //Esto de aquí nos da el valor del elemento genre del query
  const genreQuery = req.query.genre;
  // const selectMovies = "";

  if (genreQuery === "Drama") {
    selectMovies = "SELECT * FROM movies where genre = 'Drama';";
  } else if (genreQuery === "Comedia") {
    selectMovies = "SELECT * FROM movies where genre = 'Comedia';";
  } else {
    selectMovies = "SELECT * FROM movies;";
  };
  
  const [results] = await conn.query(selectMovies);

  res.json({success:true,movies:results});
  conn.end();
})


// Configuración del primer servidor de estáticos
const staticServerPathWeb = './src/public-react';
server.use(express.static(staticServerPathWeb));

server.get('/movie/:movieId', async (req, res) => {
  console.log(req.params.movieId);
  const id = req.params.movieId;
  const conn = await connectBD();
  const selectMovies = "SELECT * FROM movies where idMovies = ?;"

  const [results] = await conn.query(selectMovies, [id]);

  const foundMovie = results[0];
  res.render('movie')

});

server.post("/server/register", async (req, res) => {
  const conex = await connectBD();
  const {email, password} = req.body;
  const selectMail = "SELECT * FROM Users where email = ?;";
  const [mailResults] = await conex.query(selectMail, [email]);

  if (mailResults.length === 0) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const insertUser = "INSERT INTO Users (email, `password`) values (?, ?);";
    const [newUser] = await conex.query(insertUser, [email, hashedPassword]);
    res.status(201).json({success: true, id: newUser.insertId});
  } else {
    res.status(201).json({success: false, message: "Ya existe el usuario"});
  }

  await conex.end();
})

server.post("/server/login", async (req, res) => {
  const conex = await connectBD();
  const {email, password} = req.body;
  const selectUser = "SELECT * FROM Users where email = ?;";
  const [userResults] = await conex.query(selectUser, [email]);

  if (userResults.length !== 0) {
    const isSamePassword = await bcrypt.compare(password, userResults[0].password);
    if (isSamePassword) {
      const infoToken = {email: userResults[0].email, id: userResults[0].id};
      const token = jwt.sign(infoToken, "secret-whatever");
      res.status(201).json({success: true, token: token});
    } else {
      res.status(400).json({success: false, message: "Contraseña incorrecta"});
    }
  } else {
    res.status(400).json({success: false, message: "Email incorrecto"});
  }
})