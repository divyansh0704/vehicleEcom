const express = require("express");
const cors = require("cors");
const vehicleRoutes = require("./Routes/vehicleRoutes")
const userRoutes = require("./Routes/userRoutes")
const orderRoutes = require("./Routes/orderRoutes")
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/users",userRoutes)
app.use("/api/vehicles",vehicleRoutes)
app.use("/api/orders",orderRoutes)

module.exports = app;