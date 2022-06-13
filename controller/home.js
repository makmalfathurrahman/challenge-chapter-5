class Home {
  static mainPage(req, res, next) {
    res.render("index");
  }

  static loginPage(req, res, next) {
    res.render("login");
  }

  static gamePage(req, res, next) {
    res.render("game");
  }
}

module.exports = Home;
