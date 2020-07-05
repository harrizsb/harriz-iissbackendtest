const express = require("express");

const router = ["v1", "v2"]
  .map((val) => ({ name: val, route: express.Router() }))
  .map((val) => {
    const { name, route } = val;
    const controller = require(`./controllers/${name}/index`);
    route.use(
      "/",
      express
        .Router()
        .get("/", controller.get)
        .post("/", controller.post)
        .put("/", controller.put)
        .delete("/", controller.delete)
    );
    return val;
  });

module.exports = router;
