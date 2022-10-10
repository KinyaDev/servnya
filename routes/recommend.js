const router = require("express").Router();
const recommend = require("../datas/recommend.json");
const fs = require("fs");

let save = () => {
  fs.writeFileSync(
    `${process.cwd()}/datas/recommend.json`,
    JSON.stringify(recommend)
  );
};

router.get("/:id/:l", (req, res) => {
  recommend[req.params.id] = req.params.l;
  save();
});

module.exports = router;
