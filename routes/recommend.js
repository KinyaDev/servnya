const router = require("express").Router();
const recommend = require("../datas/recommend.json");
const fs = require("fs");

let save = () => {
  fs.writeFileSync(
    `${process.cwd()}/datas/recommend.json`,
    JSON.stringify(recommend)
  );
};

router.post("/", (req, res) => {
  recommend.user.push(req.body.id);
  save();

  if (recommend.user.includes(req.body.id)) {
    res.json({
      message: "Done!",
      status: 200,
    });
  } else {
    res.json({
      message: "Error!",
      status: 200,
    });
  }
});

router.get("/:id", (req, res) => {
  if (!req.params.id) {
    res.json({
      count: recommend.user.length,
      status: 200,
    });
  } else {
    if (recommend.user.includes(req.params.id)) {
      res.json({ have: true, status: 200 });
    } else {
      res.json({ have: false, status: 200 });
    }
  }
});

router.delete("/", (req, res) => {
  recommend.user = recommend.user.filter((g) => g !== req.body.id);
  save();
});
module.exports = router;
