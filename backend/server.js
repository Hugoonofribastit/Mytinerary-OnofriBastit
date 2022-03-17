require("dotenv").config();
require("./config/database");
const express = require("express");
const cors = require("cors");
const Router = require("./routes/routes");
const itinerariesRouter = require("./routes/itinerariesroutes");
const passport = require("passport")

const PORT = 4000;

const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(passport.initialize())
app.use("/api", Router);
app.use("/api", itinerariesRouter);

app.listen(PORT, () => console.log("Server ready on PORT " + PORT));
