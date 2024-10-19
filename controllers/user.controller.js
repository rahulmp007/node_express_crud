const { request } = require("express");
const userService = require("../services/user.service");

class userController {
  async getAllUsers(req, res, next) {
    try {
      const users = await userService.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  }

  async getUserById(req, res) {
    const userId = req.params.userId;
    console.log(userId);
    const user = await userService.getUserById(userId);
    console.log(`user : ${user}`);

    if (!user) {
      res.status(404).json({ message: "user does not exist" });
    } else {
      res.status(200).json(user);
    }
  }

  async createUser(req, res) {
    const userObj = req.body;
    const result = await userService.createUser(userObj);

    if (!result) {
      res.json({ message: "user id exists", data: result });
    } else {
      res
        .status(200)
        .json({ message: "user creation successfull", data: result });
    }
  }

  async updateUser(req, res) {
    const userId = req.params.userId;
    const { name } = req.body;
    let result = await userService.updateUser(userId, name);
    res.json(result);
  }

  async deleteUser(req, res) {
    const userId = req.params.userId;
    let result = await userService.deleteUser(userId);
    res.json(result);
  }
}

module.exports = new userController();
