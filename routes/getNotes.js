const router = require("express").Router();
const recommend = require("../datas/recommend.json");

router.get("/", (req, res) => {
  let r1 = 0;
  let keys = Object.keys(recommend);

  keys.forEach((k) => {
    r1 += recommend[k];
  });

  res.json({ note: r1 / keys.length + 1 });
});

module.exports = router;
