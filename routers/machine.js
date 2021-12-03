const express = require("express")
const router = express.Router();
const machineController = require("../controllers/machineController");



router
    .route("/:id")
    .put(machineController.updateMachineByIP)
router
    .route("")
    .get(machineController.getAllMachines)
    .post(machineController.addUMachine)


module.exports = router;