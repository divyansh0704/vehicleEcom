const Vehicle = require("../models/Vehicle");



exports.createVehicle = async (req, res) => {
    try {
        console.log("FILE:", req.file);

        const vehicle = new Vehicle({
            name: req.body.name,
            brand: req.body.brand,
            price: req.body.price,
            type: req.body.type,
            image: req.file ? req.file.path : null
        });
        await vehicle.save();
        res.status(201).json(vehicle);

    } catch (error) {

        res.status(500).json({ message: error.message });


    }


}
exports.getVehicles = async (req, res) => {
    const vehicles = await Vehicle.find();
    res.json(vehicles);
}
exports.getVehicleById = async (req, res) => {
    const vehicle = await Vehicle.findById(req.params.id);
    if (!vehicle) {
        return res.status(404).json({ message: "vehicle not found" });
    }
    res.json(vehicle);
}
exports.updateVehicle = async (req, res) => {
    const vehicle = await Vehicle.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    if (!vehicle) {
        return res.status(404).json({ message: "vehicle not found" });
    }
    res.json(vehicle);
}
exports.deleteVehicle = async (req, res) => {
    const vehicle = await Vehicle.findByIdAndDelete(req.params.id);
    if (!vehicle) {
        return res.status(404).json({ message: "vehicle not found" });
    }
    res.json({ message: "Vehicle deleted successfully" });
}