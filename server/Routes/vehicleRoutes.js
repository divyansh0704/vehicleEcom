const express = require("express");
const {createVehicle,getVehicles,getVehicleById,updateVehicle,deleteVehicle} = require("../controllers/vehicleController");
const authMiddleware = require("../middleware/authMiddleware")
const adminMiddleware = require("../middleware/adminMiddleware")
const router = express.Router();

router.post("/",authMiddleware,createVehicle);
router.get("/",getVehicles);
router.get("/:id",getVehicleById);
router.put("/:id",updateVehicle);
router.delete("/:id",deleteVehicle);

module.exports = router;