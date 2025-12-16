const connectDB = require("./config/db");
const app = require("./app");
require("dotenv").config();
connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`server running on PORT ${PORT}`);
})