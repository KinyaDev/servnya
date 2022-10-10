const express = require("express");
const app = express();
const fs = require("fs");
const http = require("http");
const { Server } = require("socket.io");
const server = http.createServer(app);
const io = new Server(server);

// childprocess.exec("npm install", (err, stdo, stderr) => {
//   if (err) throw err;
//   console.log(stdo, stderr);
// });

// function loadRoutes(callback) {
//   let files = fs.readdirSync(`${__dirname}/src/routes`);
//   files.forEach((f) => {
//     let n = f.split(".");
//     if (n[1] === ".js") {
//       app.use(`/${n[0]}`, require(`${__dirname}/src/routes/${f}`));
//       console.log(`Loading ${f}`);
//     }
//   });

//   callback();
// }

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.emit("okay");
});

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "https://kinya.github.io/lang");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

// loadRoutes(() => {});

app.get("/", (req, res) => {
  res.send(io.sockets.sockets.size);
});

server.listen(process.env.PORT, () => {
  console.log("Online!");
});
