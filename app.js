const express = require("express");
const app = express();

app.use(express.json());

const router = require("./routes/index.js");
app.use("/api/v1", router);
