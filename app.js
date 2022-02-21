const express = require("express");
const app = express();

const connected = require("./connection.js");

connected.then(() => {
    console.log("connected!");
    const server = app.listen(8080, () => console.log("Listening"));
});

// app.get("/", (req, res) => {
//     res.send("rakko");
// });

app.use(express.json());

const router = require("./routes/index.js");
app.use("/api/v1", router);

// GET '/api/v1/heroes/:id'
// o Get a hero based on its ID.
app.get("/api/v1/heroes/:id", (req, res) => {});

// - GET '/api/v1/heroes'
// o Get an array of all heroes.
app.get("/api/v1/heroes", (req, res) => {});

// - POST '/api/v1/heroes'
// o Create a new hero
app.post("/api/v1/heroes", (req, res) => {});

// - GET '/api/v1/villains/:id'
// o Get a villain by ID
app.get("/api/v1/villains/:id", (req, res) => {});

// - GET and POST '/api/v1/villains'
// o Get a list of all villains and create a new villain, respectively.
app.get("/api/v1/villains", (req, res) => {});
app.post("/api/v1/villains", (req, res) => {});

// - GET '/api/v1/locations/ID'
// o Get a location using its ID
app.get("/api/v1/locations/:id", (req, res) => {});

// - GET and POST '/api/v1/locations'
// o Get a list of all locations and create a new location, respectively.
app.get("/api/v1/locations", (req, res) => {});
app.post("/api/v1/locations", (req, res) => {});
