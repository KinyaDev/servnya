const router = require("express").Router();
const recommend = require("../datas/recommend.json");
const fs = require("fs");

let save = () => {
  fs.writeFileSync(
    `${process.cwd()}/datas/recommend.json`,
    JSON.stringify(recommend)
  );
};

router.get("/:l", (req, res) => {
  let note = req.params.l;
  var ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

  recommend[ip] = note;
  save();
});

module.exports = router;
