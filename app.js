const express = require("express");
const app = express();
const fs = require("fs");
const http = require("http");
const childprocess = require("child_process");
const { Server } = require("socket.io");
const io = new Server(server);
const server = http.createServer(app);

childprocess.exec("npm install", (err, stdo, stderr) => {
  if (err) throw err;
  console.log(stdo, stderr);
  function loadRoutes(callback) {
    let files = fs.readdirSync(`${__dirname}/src/routes`);
    files.forEach((f) => {
      let n = f.split(".");
      if (n[1] === ".js") {
        app.use(`/${n[0]}`, require(`./src/routes/${f}`));
        console.log(`Loading ${f}`);
      }
    });

    callback();
  }

  io.on("connection", (socket) => {
    console.log("a user connected");
  });

  loadRoutes(() => {});

  server.listen(8080 || process.env.PORT);
});
