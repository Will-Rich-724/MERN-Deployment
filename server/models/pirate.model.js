const mongoose = require('mongoose');

const pirateSchema = new mongoose.Schema ({
    crewMember: {
        type: String,
        required: [true, "Every crew member has a name" ]
    },
    role: {
        type: String,
        enum: ['Captain', 'First Mate', 'Cook', 'Quarter Master', 'Boatswain', 'Powder Monkey'],
        required: [true, "Everyone has to have a role"]
    },
    eyePatch: {
        type: Boolean,
        required: [true, "Either they do or don't have an eye patch"]
    },
    hookHand: {
        type: Boolean,
        required: [true, "Either they do or don't have a hook hand"]
    },
    pegLeg: {
        type: Boolean,
        required: [true, "Either they do or don't have a peg leg"]
    },
    imageURL: {
        type: String,
        required: [true, "All pirates have pictures"]
    },
    treasureChest: {
        type: Number,
        required: [true, "Every pirate needs treasure"]
    },
    catchphrase: {
        type: String,
        required: [true, "Every pirate has a catchphrase"]
    }
});

const Pirate = mongoose.model("Pirate", pirateSchema);

module.exports = Pirate;