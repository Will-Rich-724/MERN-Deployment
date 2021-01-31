const Pirate = require("../models/pirate.model");

module.exports = {
    getAllPirates: (req, res) => {
        Pirate.find()
            .sort( {crewMember: "ascending"})
            .then(allPirates => res.json(allPirates))
            .catch(err => res.json(err))
    },

    getOnePirate: (req, res) => {
        Pirate.findOne({ _id: req.params.id})
            .then(onePirate => res.json(onePirate))
            .catch(err => res.json(err))
    },

    createPirate: (req, res) => {
        Pirate.create(req.body)
            .then(newPirate => res.json(newPirate))
            .catch((err) => {
                console.log(`Error creating pirate: ${err}`);
                res.json(err)
            });
    },

    updatePirate: (req, res) => {
        Pirate.findOneAndUpdate({ _id: req.params.id}, req.body, {new: true, runValidators: true})
            .then(updatedPirate => res.json(updatedPirate))
            .catch(err => res.json(err))
    },

    deletePirate: (req, res) => {
        Pirate.deleteOne({ _id: req.params.id })
            .then( result => res.json(result))
            .catch(err => res.json(err))
    }
}