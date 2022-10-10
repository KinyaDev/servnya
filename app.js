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
});

// loadRoutes(() => {});

app.get("/", (req, res) => {
  res.send("OK");
});

server.listen(process.env.PORT, () => {
  console.log("Online!");
});

// hey
