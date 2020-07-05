const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = require("./router");
require("./database/connection");

app.listen(3000, function () {
  console.log("listening on 3000");
});

app.use(bodyParser.json());

router.map(({ name, route }, index) => {
  app.use(`/${name}`, route);

  if (index === router.length - 1) {
    // use latest api version
    app.use("/", route);
  }
});
