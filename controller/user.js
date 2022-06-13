const UserModel = require("./../model/user.js");

class User {
  static getAllUser(req, res, next) {
    try {
      const tryUser = UserModel.getAllUser();
      res.status(200).json(tryUser);
    } catch (error) {
      next(error);
    }
  }

  static getOneUser(req, res, next) {
    try {
      const { id } = req.params;
      const tryOneUser = UserModel.getOneUser(id);
      res.status(200).json(tryOneUser);
    } catch (error) {
      next(error);
    }
  }

  //   static getLogin(req, res, next) {
  //     try {
  //       const { name, password } = req.body;
  //       let idx = UserModel.findIne;
  //     } catch (error) {
  //       next(error);
  //     }
  //   }
}

module.exports = User;
