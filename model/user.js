const user = require("./datauser.json");

class UserModel {
  static getAllUser() {
    const user_ = userObj;
    user_.forEach((el) => {
      delete el.password;
    });
    return user_;
  }

  static getOneUser(id) {
    const user_ = user;
    const idx = user_.findIndex((x) => x.id == id);
    const finalData = user_[idx];

    delete finalData.password;
    return finalData;
  }
}

module.exports = UserModel;
