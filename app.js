const express = require("express");
const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://kinyadev.github.io/lang");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.send("OK");
});

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

// loadRoutes(() => {});

app.use("/getNotes", require("./routes/getNotes"));
app.use("/recommend", require("./routes/recommend"));

app.listen(process.env.PORT, () => {
  console.log("listening on *:" + process.env.PORT);
});
