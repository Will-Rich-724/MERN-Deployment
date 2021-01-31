const express = require("express");
const cors = require("cors");
const app = express();

//Config
require('./config/mongoose.config')

app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true}));

//Routes
const allPirateRoutes = require('./routes/pirate.routes');
allPirateRoutes(app);

app.listen(8000, () => console.log("Now running on port 8000"));
