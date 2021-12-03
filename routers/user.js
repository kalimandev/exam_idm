const express = require("express")
const router = express.Router();
const controller = require("../controllers/userController")

router
    .route("/:id")
    .get(controller.getUserbyId)
    .put(controller.updateUserById)
    .delete(controller.deleteUserbyId)

router
    .route("")
    .get(controller.getAllUsers)
    .post(controller.addUser)


module.exports = router;