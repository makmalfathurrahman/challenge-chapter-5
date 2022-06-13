const { Home, User } = require("../controller");
const route = require("express").Router();
const Middleware = require("../middleware");

route.get("/", Home.mainPage);
route.get("/login", Middleware.putMiddleware, Home.loginPage);
route.post("/game", Home.gamePage);

route.get("/user", User.getAllUser);
route.get("/user/:id", User.getOneUser);

module.exports = route;
