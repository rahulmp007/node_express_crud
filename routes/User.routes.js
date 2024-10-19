const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user.controller");

// router.get("/", UserController.getUsers);

// router.delete("/:id", (req, res) => {
//   res.send("DELETE USER API");
// });

// router.get("/:id", UserController.getUserById);

// router.post("/", (req, res) => {
//   res.send("CRETE USER  API");
// });

// router.patch("/:id", (req, res) => {
//   res.send("UPDATE USER  API");
// });

router
  .route("/")
  .get(UserController.getAllUsers)
  .post(UserController.createUser);

router
  .route("/:userId")
  .get(UserController.getUserById)
  .patch(UserController.updateUser)
  .delete(UserController.deleteUser);

module.exports = router;
