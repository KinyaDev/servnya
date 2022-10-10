const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "https://kinyadev.github.io/lang",
    methods: ["GET", "POST"],
    allowedHeaders: ["Access-Control-Allow-Origin"],
    credentials: true,
  },
});

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://kinyadev.github.io/lang/"
  );

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
