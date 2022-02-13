const Location = require("../models/Location.js");

const postLocation = (req, res) => {
    let location = new Location(req.body);
    location
        .save()
        .then((result) => {
            res.set("content-location", `/api/v1/locations/${location._id}`);
            res.status(201).json({
                data: location,
                url: `/api/v1/locations/${location._id}`,
            });
        })
        .catch((error) => {
            res.status(500).send(error);
        });
};

const getLocations = (req, res) => {
    Location.find({})
        .exec()
        .then((results) => {
            res.status(200).json(results);
        })
        .catch((error) => res.status(500).send(error));
};

const getLocation = (req, res) => {
    Location.findOne({ _id: req.params.id })
        .exec()
        .then((results) => {
            res.status(200).json(results);
        })
        .catch((error) => {
            res.status(500).json(error);
        });
};

module.exports = {
    getLocations,
    getLocation,
    postLocation,
};
