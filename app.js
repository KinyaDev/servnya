const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");

const io = new Server(server, {
  cors: {
    origin: "https://kinyadev.github.io/lang",
    credentials: true,
    methods: ["GET", "POST"],
  },
});

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://kinyadev.github.io/lang");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

io.on("connection", (socket) => {
  console.log("a user connected");
  io.emit("okay", socket);
});

app.get("/", (req, res) => {
  res.send("OK");
});

server.listen(process.env.PORT, () => {
  console.log("listening on *:" + process.env.PORT);
});

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
